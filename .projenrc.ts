import { awscdk } from "projen";

const project = new awscdk.AwsCdkConstructLibrary({
  author: "Derek Kershner",
  authorAddress: "https://dkershner.com",
  cdkVersion: "2.101.1",
  defaultReleaseBranch: "main",
  jsiiVersion: "~5.0.0",
  name: "cdk-cloudfront-associate-alias",
  projenrcTs: true,
  repositoryUrl:
    "https://github.com/dkershner6/cdk-cloudfront-associate-alias.git",
  majorVersion: 1,

  // deps: [],                /* Runtime dependencies of this module. */
  description:
    "A simple construct to handle automated Cloudfront DNS alias migration with zero downtime",
  keywords: [
    "awscdk",
    "aws",
    "cdk",
    "cloudfront",
    "dns",
    "associate",
    "alias",
    "migrate",
    "migration",
    "zero",
    "downtime",
  ],
  // devDeps: ["@aws-sdk/client-cloudfront"],
  packageName:
    "cdk-cloudfront-associate-alias" /* The "name" in package.json. */,

  prettier: true,
});

project.synth();
