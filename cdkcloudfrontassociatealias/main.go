// A simple construct to handle automated Cloudfront DNS alias migration with zero downtime
package cdkcloudfrontassociatealias

import (
	"reflect"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func init() {
	_jsii_.RegisterClass(
		"cdk-cloudfront-associate-alias.CloudfrontAliasAssociator",
		reflect.TypeOf((*CloudfrontAliasAssociator)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_CloudfrontAliasAssociator{}
			_jsii_.InitJsiiProxy(&j.Type__constructsConstruct)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"cdk-cloudfront-associate-alias.ICloudfrontAliasAssociatorProps",
		reflect.TypeOf((*ICloudfrontAliasAssociatorProps)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "alias", GoGetter: "Alias"},
			_jsii_.MemberProperty{JsiiProperty: "hostedZone", GoGetter: "HostedZone"},
			_jsii_.MemberProperty{JsiiProperty: "targetDistribution", GoGetter: "TargetDistribution"},
		},
		func() interface{} {
			return &jsiiProxy_ICloudfrontAliasAssociatorProps{}
		},
	)
}
