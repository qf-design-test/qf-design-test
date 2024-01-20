# Slider 滑块


## 基础用法

通过`v-model`可以绑定值到slider组件，控制滑块的百分比

<preview path="./slider-base.vue" title="基础用法"></preview>


## min / max

通过`min`和`max`值可以限制slider组件的最小值、最大值

<preview path="./slider-min-max.vue" title="最小值/最大值"></preview>


## disabled 禁用

设置`disabled`为true后，可以禁用掉滑块功能

<preview path="./slider-disabled.vue" title="禁用"></preview>

## Slider 字段

| 参数                   | 说明    | 类型      | 可选值                                                   | 默认值   |
|----------------------|-------|---------|-------------------------------------------------------|-------|
| v-model / modelValue | 双向绑定值 | number  |                                                       | 0     |
| min                  | 滑块最小值 | number  |                                                       | 0     |
| max                  | 滑块最大值 | number  | | 100   |
| disabled             | 是否禁用  | boolean |                                      | false |    |
