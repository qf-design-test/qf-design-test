# Dropdown 下拉菜单

## 基础用法

通过`data`配置，你可以配置下拉菜单的选项

<preview path="./dropdown-base.vue" title="基础用法"></preview>

## 禁用

通过`data`中数据项的disabled属性，你可以禁用掉指定的部分选项

<preview path="./dropdown-disabled.vue" title="禁用"></preview>

## 触发方式

dropdown组件支持点击下拉和hover下拉两种方式，你可以通过`trigger`属性进行配置

<preview path="./dropdown-click.vue" title="禁用"></preview>

## 点击隐藏

dropdown组件默认点击选项后会进行隐藏下拉菜单，你也可以通过`hide-on-click`属性来调整这一行为

<preview path="./dropdown-hide.vue" title="禁用"></preview>

## Dropdown 字段

| 参数            | 说明          | 类型             | 可选值                                             | 默认值 |
|---------------|-------------|----------------| -------------------------------------------------- |-----|
| data          | 下拉菜单选项      | DropdownItem[] |                                | []  |
| trigger       | 下拉菜单触发方式    | click/hover    |  | -   | hover |
| hide-on-click | 点击菜单项是否隐藏菜单 | boolean        |  | —   | true   |


## DropdownItem

| 字段       | 说明         |
|----------|------------|
| key      | 选项唯一标识(必填) |
| label    | 选项文案(必填)   |
| value    | 选项值        |
| disabled | 选项是否禁用     |

## Dropdown 事件


| 事件名    | 说明      | 类型                   |
|--------|---------|----------------------|
| select | 选项选中时触发 | (val: string) => void |

