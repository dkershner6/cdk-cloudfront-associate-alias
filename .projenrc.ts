import { Node20AwsCdkConstructLibrary } from "dkershner6-projen-typescript";
import { Nvmrc } from "projen-nvm";

const GITHUB_USERNAME_OR_ORG = "dkershner6";
const GITHUB_USERNAME_OR_ORG_PASCAL_CASE = "DKershner6";
const PROJECT_NAME = "cdk-cloudfront-associate-alias";
const PROJECT_NAME_PASCAL_CASE = "CdkCloudfrontAssociateAlias";

const project = new Node20AwsCdkConstructLibrary({
    author: "Derek Kershner",
    authorAddress: "https://dkershner.com",
    cdkVersion: "2.101.1",
    defaultReleaseBranch: "main",
    jsiiVersion: "~5.0.0",
    name: PROJECT_NAME,
    projenrcTs: true,
    repositoryUrl:
        "https://github.com/dkershner6/cdk-cloudfront-associate-alias.git",
    majorVersion: 1,

    // deps: [],
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
    devDeps: ["dkershner6-projen-typescript", "projen-nvm"],
    packageName: PROJECT_NAME,

    gitignore: [".DS_Store"],

    // Publish to other languages
    publishToPypi: {
        distName: PROJECT_NAME,
        module: PROJECT_NAME.replace("-", "_"),
    },

    publishToNuget: {
        packageId: `${GITHUB_USERNAME_OR_ORG_PASCAL_CASE}.${PROJECT_NAME_PASCAL_CASE}`,
        dotNetNamespace: `${GITHUB_USERNAME_OR_ORG_PASCAL_CASE}.${PROJECT_NAME_PASCAL_CASE}`,
    },

    publishToGo: {
        moduleName: `github.com/${GITHUB_USERNAME_OR_ORG}/${PROJECT_NAME}`,
        gitBranch: "publish-go"
    },

    // publishToMaven: {
    //     mavenGroupId: `io.github.${GITHUB_USERNAME_OR_ORG}`,
    //     javaPackage: `io.github.${GITHUB_USERNAME_OR_ORG}.${PROJECT_NAME.replace(
    //         "-",
    //         "",
    //     )}`,
    //     mavenArtifactId: PROJECT_NAME,
    //     mavenEndpoint: "https://s01.oss.sonatype.org",
    // },
});

new Nvmrc(project);

project.synth();
