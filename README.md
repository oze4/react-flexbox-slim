# react-flexbox-slim

#### Lightweight flexbox in React

---

## Table of Contents

 - [Examples](#examples)
 - [Components and Properties](#Components-and-Properties)

---

## Components and Properties

| Component | Props |
| --- | --- |
| Row | <table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>One Of</th></tr></thead><tbody><tr><td><code>direction</code></td><td>String</td><td>'row'</td><td><ul><li>'row'</li><li>'row-reverse'</li><li>'column'</li><li>'column-reverse'</li></ul></td></tr><tr><td><code>wrap</code></td><td>String</td><td>'wrap'</td><td><ul><li>'nowrap'</li><li>'wrap'</li><li>'wrap-reverse'</li></ul></td></tr><tr><td><code>justifyContent</code></td><td>String</td><td>'flex-start'</td><td><ul><li>'flex-start'</li><li>'flex-end'</li><li>'center'</li><li>'space-between'</li></ul></td></tr><tr><td><code>alignContent</code></td><td>String</td><td>'flex-start'</td><td><ul><li>'flex-start'</li><li>'flex-end'</li><li>'center'</li><li>'space-between'</li><li>'space-around'</li><li>'space-evenly'</li><li>'stretch'</li></ul></td></tr><tr><td><code>alignItems</code></td><td>String</td><td>'flex-start'</td><td><ul><li>'flex-start'</li><li>'flex-end'</li><li>'center'</li><li>'baseline'</li><li>'stretch'</li></ul></td></tr></tbody></table> |

## Examples

```javascript
<Row justifyContent='center'>
  <Column xs={12} sm={4} md={6} lg={6} xl={3}>
    <p>Hello,</p>
  </Column>
  <Column xs={12} sm={4} md={6} lg={6} xl={3}>
    <p>World!</p>
  </Column>
</Row>
```