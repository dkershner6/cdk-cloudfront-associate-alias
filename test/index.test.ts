import * as cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as route53 from "aws-cdk-lib/aws-route53";

import { CloudfrontAliasAssociator } from "../src";

const app = new cdk.App();
const stack = new cdk.Stack(app, "TestStack");

const TEST_ALIAS = "test.example.com";
const TEST_DISTRIBUTION_ID = "test-distribution-id";

new CloudfrontAliasAssociator(stack, "TestConstruct", {
  alias: TEST_ALIAS,
  hostedZone: route53.HostedZone.fromHostedZoneAttributes(
    stack,
    "TestHostedZone",
    { hostedZoneId: "test-zone-id", zoneName: "test-zone-name" },
  ),
  targetDistribution: cloudfront.Distribution.fromDistributionAttributes(
    stack,
    "TestDistribution",
    {
      distributionId: TEST_DISTRIBUTION_ID,
      domainName: "test-distribution-domain-name",
    },
  ),
});

it("should create 3 RecordSets (1 TXT, 1 A, 1 AAAA)", () => {
  const template = Template.fromStack(stack);

  template.resourceCountIs("AWS::Route53::RecordSet", 3);
});

it("Should create a Custom::CloudfrontAssociateAlias resource", () => {
  const template = Template.fromStack(stack);

  template.resourceCountIs("Custom::CloudfrontAssociateAlias", 1);
});

it("Should hand Custom::CloudfrontAssociateAlias the correct parameters", () => {
  const template = Template.fromStack(stack);

  template.hasResourceProperties("Custom::CloudfrontAssociateAlias", {
    Update: JSON.stringify({
      service: "cloudfront",
      action: "AssociateAlias",
      parameters: {
        TargetDistributionId: TEST_DISTRIBUTION_ID,
        Alias: TEST_ALIAS,
      },
      physicalResourceId: { id: TEST_DISTRIBUTION_ID },
    }),
  });
});
