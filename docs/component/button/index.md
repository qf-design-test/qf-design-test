<style>
    .example{
        border: 1px solid #f5f5f5;
        border-radius: 5px;
        padding:20px
    }
    .qf-button {
        margin:10px 5px
    }
    
    details > summary:first-of-type {
        font-size: 10px;
        padding: 8px 0;
        cursor: pointer;
        color: #1989fa;
    }
</style>

# Button 按钮

## 基础用法

使用 <code>type</code>来定义按钮的样式。

<div class="example">
    <div>
        <qf-button>默认按钮</qf-button>
        <qf-button type="primary">主要按钮</qf-button>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <qf-button>默认按钮</qf-button>
    <qf-button type="primary">主要按钮</qf-button>
    <qf-button type="success">成功按钮</qf-button>
  </div>
</template>
```

</details>

## 禁用状态

你可以使用 <code>disabled</code> 属性来定义按钮是否被禁用。
<br>
使用 <code>disabled</code> 属性来控制按钮是否为禁用状态。 该属性接受一个 <code>Boolean</code> 类型的值

<div class="example">
    <div>
        <qf-button disabled>禁用按钮</qf-button>
        <qf-button type="primary" disabled>主要按钮</qf-button>
        <br>
        <br>
        <qf-button disabled>禁用按钮</qf-button>
        <qf-button type="primary" disabled plain>主要按钮</qf-button>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <qf-button disabled>禁用按钮</qf-button>
    <qf-button type="primary" disabled>主要按钮</qf-button>
    <qf-button type="success" disabled>成功按钮</qf-button>
    <qf-button type="info" disabled>信息按钮</qf-button>
    <qf-button type="warning" disabled>警告按钮</qf-button>
    <qf-button type="danger" disabled>危险按钮</qf-button>
    <br />
    <br />
    <qf-button disabled>禁用按钮</qf-button>
    <qf-button type="primary" disabled plain>主要按钮</qf-button>
  </div>
</template>
```

</details>

<style>
  .vp-doc table {
    width: 100%;
    border-collapse: collapse;
    table-layout: auto;
  }
</style>

## 字段说明

```ts
interface ButtonProps {
  /** 按钮类型 默认  |  主要*/
  type: "default" | "primary";
}
```
