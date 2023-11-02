//import type { AssociateAliasCommandInput } from "@aws-sdk/client-cloudfront";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as iam from "aws-cdk-lib/aws-iam";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as r53Targets from "aws-cdk-lib/aws-route53-targets";
import * as cr from "aws-cdk-lib/custom-resources";
import { Construct } from "constructs";

export interface ICloudfrontAliasAssociatorProps {
  /**
   * @alias AKA "customDomain" or "the DNS record we want to affect".
   *
   * This is the domain name you want to move from one Cloudfront Distribution to another.
   * Will also work if it is NOT moving (on the first run).
   * */
  readonly alias: string;
  /**
   * The Route53 hosted zone that houses the customDomain.
   */
  readonly hostedZone: route53.IHostedZone;
  /**
   * The Cloudfront Distribution we want to move the alias to.
   */
  readonly targetDistribution: cloudfront.IDistribution;
}

/**
 * A simple construct to handle automated Cloudfront DNS alias migration with zero downtime.
 *
 * This creates:
 * - A TXT record with the name `_${alias}` that points to the targetDistributionDomainName.
 * - A Cloudfront custom resource "Custom::CloudfrontAssociateAlias" that associates the alias with the targetDistributionId.
 *   - Because we use the SDK here, this construct can be used as part of a versioned deployment, and can be used for both standard and rollback scenarios.
 * - A Route53 A and AAAA record that alias to the targetDistribution.
 */
export class CloudfrontAliasAssociator extends Construct {
  private readonly aliasTxtRecord: cr.AwsCustomResource;
  private readonly associatedAlias: cr.AwsCustomResource;

  constructor(
    scope: Construct,
    private readonly id: string,
    private readonly props: ICloudfrontAliasAssociatorProps,
  ) {
    super(scope, id);

    this.aliasTxtRecord = this.createAliasTxtRecord();
    this.associatedAlias = this.associateAlias();
    this.createAliasRecords();
  }

  /** Important to use the SDK rather than CDK, since AssociateAlias deletes this record and Cfn gets confused. */
  private createAliasTxtRecord(): cr.AwsCustomResource {
    const txtParams = {
      HostedZoneId: this.props.hostedZone.hostedZoneId,
      ChangeBatch: {
        Changes: [
          {
            Action: "UPSERT",
            ResourceRecordSet: {
              Name: `_${this.props.alias}`,
              Type: "TXT",
              TTL: 300,
              ResourceRecords: [
                {
                  Value: this.props.targetDistribution.distributionDomainName,
                },
              ],
            },
          },
        ],
      },
    };

    return new cr.AwsCustomResource(this, `${this.id}-AssociateAlias`, {
      resourceType: "Custom::AliasTxtRecord",
      onUpdate: {
        // will also be called for a CREATE event
        service: "route-53",
        action: "ChangeResourceRecordSets",
        parameters: txtParams,
        physicalResourceId: cr.PhysicalResourceId.of(
          this.props.targetDistribution.distributionId,
        ),
      },
      policy: cr.AwsCustomResourcePolicy.fromStatements([
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: ["route53:ChangeResourceRecordSets"],
          resources: ["*"],
        }),
      ]),
    });
  }

  private associateAlias(): cr.AwsCustomResource {
    const associateAliasParams =
      //: AssociateAliasCommandInput // Uncomment this line, install, and import the type to get type checking for development, but JSII doesn't like it for building
      {
        TargetDistributionId: this.props.targetDistribution.distributionId,
        Alias: this.props.alias,
      };

    const associateAlias = new cr.AwsCustomResource(
      this,
      `${this.id}-AssociateAlias`,
      {
        resourceType: "Custom::CloudfrontAssociateAlias",
        onUpdate: {
          // will also be called for a CREATE event
          service: "cloudfront",
          action: "AssociateAlias",
          parameters: associateAliasParams,
          physicalResourceId: cr.PhysicalResourceId.of(
            this.props.targetDistribution.distributionId,
          ),
        },
        policy: cr.AwsCustomResourcePolicy.fromStatements([
          new iam.PolicyStatement({
            effect: iam.Effect.ALLOW,
            actions: [
              "cloudfront:AssociateAlias",
              "cloudfront:GetDistribution",
              "cloudfront:UpdateDistribution",
            ],
            resources: ["*"],
          }),
        ]),
      },
    );
    associateAlias.node.addDependency(this.aliasTxtRecord);

    return associateAlias;
  }

  private createAliasRecords(): void {
    const target = route53.RecordTarget.fromAlias(
      new r53Targets.CloudFrontTarget(this.props.targetDistribution),
    );

    const aRecord = new route53.ARecord(this, `${this.id}-ARecord`, {
      zone: this.props.hostedZone,
      recordName: this.props.alias,
      target,
    });
    aRecord.node.addDependency(this.associatedAlias);

    const aaaaRecord = new route53.AaaaRecord(this, `${this.id}-AaaaRecord`, {
      zone: this.props.hostedZone,
      recordName: this.props.alias,
      target,
    });
    aaaaRecord.node.addDependency(this.associatedAlias);
  }
}
