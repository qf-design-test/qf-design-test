# Transfer 穿梭框

## 基础用法

通过`data`属性可以绑定面板选项，`v-model`可以绑定右侧双向绑定的值

<preview path="./transfer-base.vue" title="基础用法"></preview>


## 禁用部分选项

将data中把数据项的`disabled`设置成true，可以禁用该选项的勾选

<preview path="./transfer-disabled.vue" title="禁用"></preview>


## 自定义标题及按钮文案

为满足不同场景需求，transfer组件提供了`titles`和`action-texts`属性用于自定义标题及按钮文案

<preview path="./transfer-custom.vue" title="自定义"></preview>


## 过滤

配置`filterable`属性后，transfer组件会显示输入框用于选项的过滤

<preview path="./transfer-filterable.vue" title="过滤"></preview>

## Transfer 字段

| 参数                   | 说明    | 类型      | 可选值                                                   | 默认值   |
|----------------------|-------|---------|-------------------------------------------------------|-------|
| v-model / modelValue | 双向绑定值 | TransferItem[]  |                                                       |  []    |
| data                  | 左侧选项 | TransferItem[]  |                                                       | []     |
| disabled             | 是否禁用  | boolean |                                      | false |    |
| filterable                  | 是否支持筛选 | boolean  |                                                       |  false    |
| titles                 | 面板标题 | string[]  |                          | [] |
| action-texts                 | 按钮文案 | string[]  |   |     [] |                 

## TransferItem 说明

| 属性 | 类型 | 是否必填 |
| --- | --- | --- |
|key | string/number| Y |
|label | string | Y |
| disabled | boolean | N |


## Transfer 事件

| 事件名    | 说明       | 类型                   |
|--------|----------|----------------------|
| change | 穿梭框选中值变化时触发 | (val: TransferItem[]) => void |


