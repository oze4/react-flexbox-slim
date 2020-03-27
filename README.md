# react-flexbox-slim

[![npm version](https://badge.fury.io/js/react-flexbox-slim.svg)](https://badge.fury.io/js/react-flexbox-slim)

### Customizable flexbox grid system for React

 - [Installation](#installation)
 - [Import Information](#important-information)
 - [Defaults](#defaults)
 - [Examples](#examples)
 - [Components and Properties](#Components-and-Properties)

---

## Installation

`npm install --save react-flexbox-slim`

---

## Important Information

 - 12 column grid system by default
 - Utilizing the `<Grid>` component/wrapper, you can fully customize the grid system (number of columns and breakpoints)
 - The `<Grid>` component uses the Context API to pass down any customization
 - See the [examples](#examples) for more information
 - We provide `esm` and `umd` modules
   - By default, `esm` is imported
   - To import `umd` use: 
   ```javascript
   const { Row, Column } = require('react-flexbox-slim/lib/bundle.umd.js')
   ```

---

## Defaults

```javascript
// breakpoints
{
  xs: '0px',
  sm: '540px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
}
```

```javascript
// maxColumns
12
```

---

## Examples

```javascript
// Basic 12 column grid system, using defaults
<Row justifyContent='center'>
  <Column xs={12} sm={4} md={6} lg={6} xl={3}>
    <p>Hello,</p>
  </Column>
  <Column xs={12} sm={4} md={6} lg={6} xl={3}>
    <p>World!</p>
  </Column>
</Row>
```

```javascript
// Customized grid system
const customBreakpoints = {
  xs: '0px',
  sm: '500px',
  md: '800px',
  lg: '1000px',
  xl: '1600px',
};

const customMaxColumns = 16;

<Grid breakpoints={customBreakpoints} maxColumns={customMaxColumns}>
  <Row justifyContent='center'>
    /* Now you can use 16 column grid system */
    <Column xs={16} sm={4} md={6} lg={6} xl={3}>
        <p>Hello,</p>
    </Column>
    <Column xs={16} sm={4} md={6} lg={6} xl={3}>
        <p>World!</p>
    </Column>
  </Row>
</Grid>
```

---

## Components and Properties

| Component | Props |
| --- | --- |
| <code>&lt;Grid&gt;</code> | [See here for Grid props](#grid-props) |
| <code>&lt;Row&gt;</code> | <table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>One Of</th></tr></thead><tbody><tr><td><code>direction</code></td><td>String</td><td>'row'</td><td><ul><li>'row'</li><li>'row-reverse'</li><li>'column'</li><li>'column-reverse'</li></ul></td></tr><tr><td><code>wrap</code></td><td>String</td><td>'wrap'</td><td><ul><li>'nowrap'</li><li>'wrap'</li><li>'wrap-reverse'</li></ul></td></tr><tr><td><code>justifyContent</code></td><td>String</td><td>'flex-start'</td><td><ul><li>'flex-start'</li><li>'flex-end'</li><li>'center'</li><li>'space-between'</li></ul></td></tr><tr><td><code>alignContent</code></td><td>String</td><td>'flex-start'</td><td><ul><li>'flex-start'</li><li>'flex-end'</li><li>'center'</li><li>'space-between'</li><li>'space-around'</li><li>'space-evenly'</li><li>'stretch'</li></ul></td></tr><tr><td><code>alignItems</code></td><td>String</td><td>'flex-start'</td><td><ul><li>'flex-start'</li><li>'flex-end'</li><li>'center'</li><li>'baseline'</li><li>'stretch'</li></ul></td></tr></tbody></table> |
| <code>&lt;Column&gt;</code> | <table><thead><tr><th>Name</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>xs</code></td><td>Number</td><td>12</td></tr><tr><td><code>sm</code></td><td>Number</td><td>12</td></tr><tr><td><code>md</code></td><td>Number</td><td>12</td></tr><tr><td><code>lg</code></td><td>Number</td><td>12</td></tr><tr><td><code>xl</code></td><td>Number</td><td>12</td></tr></tbody></table>

### Grid Props

| Name | Type |
| --- | --- |
| `breakpoints` | Object (see below for shape) |
| `maxColumns` | Number |

<br />

 - **`breakpoints`**

If you wish to only change a single breakpoint value, you may do so. We will combine the default breakpoint values with the object you supplied 

***Note**: this may cause issues with media queries*

```javascript
// breakpoints prop must be of the following shape:
<Grid 
  breakpoints={{
    xs: String,
    sm: String,
    md: String,
    lg: String,
    xl: String
  }}
>
```
<br/>

 - **`maxColumns`**

Allows you to specify the number of columns for the entire grid system

```javascript
<Grid maxColumns={16}>
```