package cdkcloudfrontassociatealias

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
	_init_ "github.com/dkershner6/cdk-cloudfront-associate-alias/cdkcloudfrontassociatealias/jsii"

	"github.com/aws/constructs-go/constructs/v10"
	"github.com/dkershner6/cdk-cloudfront-associate-alias/cdkcloudfrontassociatealias/internal"
)

// A simple construct to handle automated Cloudfront DNS alias migration with zero downtime.
//
// This creates:
// - A TXT record with the name `_${alias}` that points to the targetDistributionDomainName.
// - A Cloudfront custom resource "Custom::CloudfrontAssociateAlias" that associates the alias with the targetDistributionId.
//   - Because we use the SDK here, this construct can be used as part of a versioned deployment, and can be used for both standard and rollback scenarios.
// - A Route53 A and AAAA record that alias to the targetDistribution.
type CloudfrontAliasAssociator interface {
	constructs.Construct
	// The tree node.
	Node() constructs.Node
	// Returns a string representation of this construct.
	ToString() *string
}

// The jsii proxy struct for CloudfrontAliasAssociator
type jsiiProxy_CloudfrontAliasAssociator struct {
	internal.Type__constructsConstruct
}

func (j *jsiiProxy_CloudfrontAliasAssociator) Node() constructs.Node {
	var returns constructs.Node
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}


func NewCloudfrontAliasAssociator(scope constructs.Construct, id *string, props ICloudfrontAliasAssociatorProps) CloudfrontAliasAssociator {
	_init_.Initialize()

	if err := validateNewCloudfrontAliasAssociatorParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_CloudfrontAliasAssociator{}

	_jsii_.Create(
		"cdk-cloudfront-associate-alias.CloudfrontAliasAssociator",
		[]interface{}{scope, id, props},
		&j,
	)

	return &j
}

func NewCloudfrontAliasAssociator_Override(c CloudfrontAliasAssociator, scope constructs.Construct, id *string, props ICloudfrontAliasAssociatorProps) {
	_init_.Initialize()

	_jsii_.Create(
		"cdk-cloudfront-associate-alias.CloudfrontAliasAssociator",
		[]interface{}{scope, id, props},
		c,
	)
}

// Checks if `x` is a construct.
//
// Returns: true if `x` is an object created from a class which extends `Construct`.
// Deprecated: use `x instanceof Construct` instead.
func CloudfrontAliasAssociator_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateCloudfrontAliasAssociator_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"cdk-cloudfront-associate-alias.CloudfrontAliasAssociator",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (c *jsiiProxy_CloudfrontAliasAssociator) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		c,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

