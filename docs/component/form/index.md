# Form 表单

## 基础表单

通过form和form-item组件，可以快速实现一个基本的表格

<preview path="./form-base.vue"></preview>

## 标签宽度

你可以通过`form.labelWidth`设置表格的标签宽度，也可以单独设置某一个`formItem.labelWidth`

<preview path="./form-label-width.vue"></preview>

## 行内模式

你可以通过`inline`设置表格为行内模式, 当垂直方向空间受限且表单较简单时，可以在一行内放置表单。

<preview path="./form-inline.vue"></preview>

## 表单校验

你可以通过绑定model和rules来实现表单的校验

<preview path="./form-validate.vue"></preview>

## 自定义校验

你可以自定义校验函数来实现更复杂的校验场景

:::tip
更多关于自定义校验的细节，你也可以参考 [async-validator](https://github.com/yiminghe/async-validator?tab=readme-ov-file) 
:::

<preview path="./form-custom-validate.vue"></preview>

## Form 字段

| 参数        | 说明             | 类型                | 可选值 | 默认值 |
| ----------- | ---------------- | ------------------- | ------ | ------ |
| model       | 表单模型         | Record<string, any> |        |
| rules       | 表单校验规则     | Record<string, any> | -      |        |
| label-width | 标签宽度         | string/number       | -      | ''     |
| inline      | 是否开启行内模式 | boolean             | -      | false  |

## Form 方法

| 插槽        | 说明           |
| ----------- | -------------- |
| validate    | 表单校验       |
| resetFields | 重置所有表单项 |

## FormItem 字段

| 参数        | 说明           | 类型          | 可选值 | 默认值 |
| ----------- | -------------- | ------------- | ------ | ------ |
| prop        | 表单模型属性名 | string        |        |
| label       | 标签文本       | string        | -      | ''     |
| label-width | 标签宽度       | string/number | -      | ''     |
