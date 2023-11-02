//import type { AssociateAliasCommandInput } from "@aws-sdk/client-cloudfront";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as iam from "aws-cdk-lib/aws-iam";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as r53Targets from "aws-cdk-lib/aws-route53-targets";
import * as cr from "aws-cdk-lib/custom-resources";
import { Construct } from "constructs";

export interface ICloudfrontAliasAssociatorProps {
  readonly hostedZone: route53.IHostedZone;
  readonly customDomain: string;
  readonly targetDistributionId: string;
  readonly targetDistributionDomainName: string;
}

export class CloudfrontAliasAssociator extends Construct {
  private readonly aliasTxtRecord: route53.TxtRecord;
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

  private createAliasTxtRecord(): route53.TxtRecord {
    return new route53.TxtRecord(this, `${this.id}-AliasTxtRecord`, {
      zone: this.props.hostedZone,
      recordName: `_${this.props.customDomain}`, // underscore intentional and important
      values: [this.props.targetDistributionDomainName],
    });
  }

  private associateAlias(): cr.AwsCustomResource {
    const associateAliasParams =
      //: AssociateAliasCommandInput // Uncomment this line, install, and import the type to get type checking for development, but JSII doesn't like it for building
      {
        TargetDistributionId: this.props.targetDistributionId,
        Alias: this.props.customDomain,
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
            this.props.targetDistributionDomainName,
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
      new r53Targets.CloudFrontTarget(
        cloudfront.Distribution.fromDistributionAttributes(
          this,
          `${this.id}-DistributionTarget`,
          {
            distributionId: this.props.targetDistributionId,
            domainName: this.props.targetDistributionDomainName,
          },
        ),
      ),
    );

    const aRecord = new route53.ARecord(this, `${this.id}-ARecord`, {
      zone: this.props.hostedZone,
      recordName: this.props.customDomain,
      target,
    });
    aRecord.node.addDependency(this.associatedAlias);

    const aaaaRecord = new route53.AaaaRecord(this, `${this.id}-AaaaRecord`, {
      zone: this.props.hostedZone,
      recordName: this.props.customDomain,
      target,
    });
    aaaaRecord.node.addDependency(this.associatedAlias);
  }
}
