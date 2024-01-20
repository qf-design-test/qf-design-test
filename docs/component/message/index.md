# Message 消息通知


## 基础用法

调用`Message`方法从顶部出现，2 秒后自动消失

<preview path="./message-base.vue" title="基础用法"></preview>


## 不同类型

我们提供了 成功、 警告、 危险、消息 的消息通知提示，你可以通过 `type` 参数进行指定

<preview path="./message-type.vue" title="类型"></preview>

## 显示关闭按钮

关闭按钮默认关闭，通过`showClose`属性，可以显示关闭按钮

<preview path="./message-close.vue" title="显示关闭按钮"></preview>

## 全局调用

你也可以通过 app.config.globalProperties 上的`$message`方法进行调用

```ts
app.config.globalProperties.$message({
    // 传入消息通知选项
})
```

## Message 字段

| 参数        | 说明           | 类型                 | 可选值                        | 默认值    |
|-----------|--------------|--------------------|----------------------------|--------|
| delay     | 关闭延迟(ms)     | number             |                            | 2000   |
| message   | 消息内容         | string/VNode       |                            | ''     |
| offset    | 顶部偏移值        | number             |                            | 12     |
| appendTo  | 指定消息通知添加的dom | string/HTMLElement |                            | 'body' |    |
| type      | 消息通知类型       | enum               | success/warning/error/info |        |
| showClose | 是否显示关闭按钮     | boolean            | | false  |
