# Collapse 折叠面板

## 基础用法

通过 collapse 和 collapse-item 可以实现基本的折叠面板

::: tip
collapse-item 绑定的 name 必须唯一
:::

<preview path="./collapse-base.vue" title="基础折叠面板"></preview>


## 手风琴模式

通过 accordion 可以实现手风琴模式，也就是每次仅打开一个

<preview path="./collapse-accordion.vue" title="手风琴模式"></preview>


## Collapse 字段

| 参数    | 说明   | 类型    | 可选值                                             | 默认值  |
| ------- | ------ | ------- | -------------------------------------------------- | ------- |
| modelValue / v-model    |  双向绑定值，用于面板显示  | string/string[]  |                                | [] |
| accordion | 手风琴模式 | boolean |  | —                                                  |   false |

## Collapse 事件

| 事件名      | 说明        | 类型 |
|----------|-----------| --- |
| change     | 激活面板发生变化时触发 | (val: string | string[]) => void |
