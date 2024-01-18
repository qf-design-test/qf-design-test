# Dialog 对话框

## 基础用法

你可以通过`visible`属性控制弹窗的显示隐藏

<preview path="./dialog-base.vue" title="基础对话框"></preview>


## 确认/取消

你可以通过 `onOk` 和 `onCancel` 事件来监听对话框的确认事件

<preview path="./dialog-event.vue" title="提示"></preview>

## 点击蒙层关闭

对话框默认点击蒙层关闭，你也可以设置`closeOnClickMask`为false，点击蒙层不再关闭弹窗 

<preview path="./dialog-close-on-click-mask.vue" title="提示"></preview>

## Dialog 字段

| 参数               | 说明              | 类型      | 可选值                                             | 默认值   |
|------------------|-----------------|---------| -------------------------------------------------- |-------|
| visible          | 是否显示 支持 v-model | boolean |                                | false |
| title            | 对话框标题           | string  |  | '' |
| closeOnClickMask | 点击蒙层是否允许关闭      | boolean |  | —     | false   |

## Dialog 事件

| 事件名      | 说明        | 类型 |
|----------|-----------| --- |
| onOk     | 点击确定按钮时触发 | () => void |
| onCancel | 点击取消按钮时触发 | () => void |

