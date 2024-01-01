package cdkcloudfrontassociatealias

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/aws/aws-cdk-go/awscdk/v2/awscloudfront"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsroute53"
)

type ICloudfrontAliasAssociatorProps interface {
	Alias() *string
	// The Route53 hosted zone that houses the customDomain.
	HostedZone() awsroute53.IHostedZone
	// The Cloudfront Distribution we want to move the alias to.
	TargetDistribution() awscloudfront.IDistribution
}

// The jsii proxy for ICloudfrontAliasAssociatorProps
type jsiiProxy_ICloudfrontAliasAssociatorProps struct {
	_ byte // padding
}

func (j *jsiiProxy_ICloudfrontAliasAssociatorProps) Alias() *string {
	var returns *string
	_jsii_.Get(
		j,
		"alias",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICloudfrontAliasAssociatorProps) HostedZone() awsroute53.IHostedZone {
	var returns awsroute53.IHostedZone
	_jsii_.Get(
		j,
		"hostedZone",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICloudfrontAliasAssociatorProps) TargetDistribution() awscloudfront.IDistribution {
	var returns awscloudfront.IDistribution
	_jsii_.Get(
		j,
		"targetDistribution",
		&returns,
	)
	return returns
}

