# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontAliasAssociator <a name="CloudfrontAliasAssociator" id="cdk-cloudfront-associate-alias.CloudfrontAliasAssociator"></a>

A simple construct to handle automated Cloudfront DNS alias migration with zero downtime.

This creates:
- A TXT record with the name `_${alias}` that points to the targetDistributionDomainName.
- A Cloudfront custom resource "Custom::CloudfrontAssociateAlias" that associates the alias with the targetDistributionId.
  - Because we use the SDK here, this construct can be used as part of a versioned deployment, and can be used for both standard and rollback scenarios.
- A Route53 A and AAAA record that alias to the targetDistribution.

#### Initializers <a name="Initializers" id="cdk-cloudfront-associate-alias.CloudfrontAliasAssociator.Initializer"></a>

```typescript
import { CloudfrontAliasAssociator } from 'cdk-cloudfront-associate-alias'

new CloudfrontAliasAssociator(scope: Construct, id: string, props: ICloudfrontAliasAssociatorProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-cloudfront-associate-alias.CloudfrontAliasAssociator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-cloudfront-associate-alias.CloudfrontAliasAssociator.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-cloudfront-associate-alias.CloudfrontAliasAssociator.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-cloudfront-associate-alias.ICloudfrontAliasAssociatorProps">ICloudfrontAliasAssociatorProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-cloudfront-associate-alias.CloudfrontAliasAssociator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-cloudfront-associate-alias.CloudfrontAliasAssociator.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-cloudfront-associate-alias.CloudfrontAliasAssociator.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-cloudfront-associate-alias.ICloudfrontAliasAssociatorProps">ICloudfrontAliasAssociatorProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-cloudfront-associate-alias.CloudfrontAliasAssociator.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-cloudfront-associate-alias.CloudfrontAliasAssociator.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-cloudfront-associate-alias.CloudfrontAliasAssociator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-cloudfront-associate-alias.CloudfrontAliasAssociator.isConstruct"></a>

```typescript
import { CloudfrontAliasAssociator } from 'cdk-cloudfront-associate-alias'

CloudfrontAliasAssociator.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-cloudfront-associate-alias.CloudfrontAliasAssociator.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-cloudfront-associate-alias.CloudfrontAliasAssociator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-cloudfront-associate-alias.CloudfrontAliasAssociator.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---




## Protocols <a name="Protocols" id="Protocols"></a>

### ICloudfrontAliasAssociatorProps <a name="ICloudfrontAliasAssociatorProps" id="cdk-cloudfront-associate-alias.ICloudfrontAliasAssociatorProps"></a>

- *Implemented By:* <a href="#cdk-cloudfront-associate-alias.ICloudfrontAliasAssociatorProps">ICloudfrontAliasAssociatorProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-cloudfront-associate-alias.ICloudfrontAliasAssociatorProps.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-cloudfront-associate-alias.ICloudfrontAliasAssociatorProps.property.hostedZone">hostedZone</a></code> | <code>aws-cdk-lib.aws_route53.IHostedZone</code> | The Route53 hosted zone that houses the customDomain. |
| <code><a href="#cdk-cloudfront-associate-alias.ICloudfrontAliasAssociatorProps.property.targetDistribution">targetDistribution</a></code> | <code>aws-cdk-lib.aws_cloudfront.IDistribution</code> | The Cloudfront Distribution we want to move the alias to. |

---

##### `alias`<sup>Required</sup> <a name="alias" id="cdk-cloudfront-associate-alias.ICloudfrontAliasAssociatorProps.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `hostedZone`<sup>Required</sup> <a name="hostedZone" id="cdk-cloudfront-associate-alias.ICloudfrontAliasAssociatorProps.property.hostedZone"></a>

```typescript
public readonly hostedZone: IHostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.IHostedZone

The Route53 hosted zone that houses the customDomain.

---

##### `targetDistribution`<sup>Required</sup> <a name="targetDistribution" id="cdk-cloudfront-associate-alias.ICloudfrontAliasAssociatorProps.property.targetDistribution"></a>

```typescript
public readonly targetDistribution: IDistribution;
```

- *Type:* aws-cdk-lib.aws_cloudfront.IDistribution

The Cloudfront Distribution we want to move the alias to.

---

