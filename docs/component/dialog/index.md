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

