# Checkbox 多选框

## 基础用法 

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox
按钮后的介绍。

<preview path="./checkbox.vue" title="基础多选框"></preview>


## Group

通过`checkbox-group`可以同时管理多个checkbox, 在`checkbox-group`传入`v-model`绑定数组类型的变量，同时需要在`checkbox`上定义label变量

<preview path="./checkbox-group.vue" title="多选框组"></preview>


## Disabled

通过`disabled`属性，你可以禁用掉多选框，防止选中部分选项

<preview path="./checkbox-disabled.vue"></preview>



## Checkbox 字段

| 参数    | 说明   | 类型    | 可选值                                             | 默认值  |
| ------- | ------ | ------- | -------------------------------------------------- | ------- |
| v-model    | 双向绑定值  |  boolean  |                                | false |
| disabled    | 是否禁用 | boolean  | | false |
| label    | 组形式下的标识 | string  | |  |

## Checkbox 事件

| 事件名 | 说明 | 类型 |
| --- | --- | --- |
| change | 选中发生变化时触发 | (checked: boolean) => void |


## CheckboxGroup 字段

| 参数    | 说明   | 类型    | 可选值                                             | 默认值  |
| ------- | ------ | ------- | -------------------------------------------------- | ------- |
| v-model    |  双向绑定  | string[]  |                                | [] |

## CheckboxGroup 事件

| 事件名 | 说明 | 类型 |
| --- | --- | --- |
| change | 选中范围发生变化时触发 | (checked: string[]) => void |
