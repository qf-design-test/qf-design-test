# Card 卡片

## 基础用法

card组件提供了`header`插槽和`footer`插槽用于自定义头部和脚部 

<preview path="./card-base.vue" title="基础用法"></preview>


## 简单卡片

你也不可以定义`header`和`footer`，以简单内容的形式展示内容

<preview path="./card-simple.vue" title="简单卡片"></preview>


## 显示阴影

你可以通过`shadowType`来选择卡片的阴影显示形式 

<preview path="./card-shadow.vue" title="卡片阴影类型"></preview>


## Card 字段

| 参数          | 说明                | 类型      | 可选值                                             | 默认值 |
|-------------|-------------------|---------| -------------------------------------------------- |-----|
| shadow-type | input值 支持 v-model | string  |                                |     |


## Card 插槽

| 插槽     | 说明     |
|--------|--------|
| header | 卡片头部插槽 |
| footer | 卡片尾部插槽 |
