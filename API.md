# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontAliasAssociator <a name="CloudfrontAliasAssociator" id="cdk-cloudfront-associate-alias.CloudfrontAliasAssociator"></a>

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
| <code><a href="#cdk-cloudfront-associate-alias.ICloudfrontAliasAssociatorProps.property.customDomain">customDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-cloudfront-associate-alias.ICloudfrontAliasAssociatorProps.property.hostedZone">hostedZone</a></code> | <code>aws-cdk-lib.aws_route53.IHostedZone</code> | *No description.* |
| <code><a href="#cdk-cloudfront-associate-alias.ICloudfrontAliasAssociatorProps.property.targetDistributionDomainName">targetDistributionDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-cloudfront-associate-alias.ICloudfrontAliasAssociatorProps.property.targetDistributionId">targetDistributionId</a></code> | <code>string</code> | *No description.* |

---

##### `customDomain`<sup>Required</sup> <a name="customDomain" id="cdk-cloudfront-associate-alias.ICloudfrontAliasAssociatorProps.property.customDomain"></a>

```typescript
public readonly customDomain: string;
```

- *Type:* string

---

##### `hostedZone`<sup>Required</sup> <a name="hostedZone" id="cdk-cloudfront-associate-alias.ICloudfrontAliasAssociatorProps.property.hostedZone"></a>

```typescript
public readonly hostedZone: IHostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.IHostedZone

---

##### `targetDistributionDomainName`<sup>Required</sup> <a name="targetDistributionDomainName" id="cdk-cloudfront-associate-alias.ICloudfrontAliasAssociatorProps.property.targetDistributionDomainName"></a>

```typescript
public readonly targetDistributionDomainName: string;
```

- *Type:* string

---

##### `targetDistributionId`<sup>Required</sup> <a name="targetDistributionId" id="cdk-cloudfront-associate-alias.ICloudfrontAliasAssociatorProps.property.targetDistributionId"></a>

```typescript
public readonly targetDistributionId: string;
```

- *Type:* string

---

