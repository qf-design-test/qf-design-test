### 自定义主题


QF Components 默认提供一套主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。 

#### 通过设置css变量 （运行时）


QF Components 默认的主题使用了`css变量`来建立主题色体系，

> 从 [CSS变量 | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) 了解更多信息


因此你可以通过代码修改`css变量`，从而达到改变主题色的效果。具体实现可以参考下面的实现

--- 
<script setup>
import { ref } from 'vue'

const container = ref()

function setCssVar(prop, val, dom) {
  dom.style.setProperty(prop, val)
}

function randomColor() {
  const r = Math.floor(Math.random()*255)
  const g = Math.floor(Math.random()*255)
  const b = Math.floor(Math.random()*255)
  return `rgba(${r}, ${g}, ${b}, 0.8)`
}

function toggleTheme() {
  setCssVar('--primary-color', randomColor(), container.value)
}
</script>

<div ref='container'>
  <qf-button @click="toggleTheme">切换主题色</qf-button>
</div>

```vue
<template>
  <div ref="container">
    <qf-button @click="toggleTheme">切换主题色</qf-button>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const container = ref()

function setCssVar(prop, val, dom) {
  dom.style.setProperty(prop, val)
}

function randomColor() {
  const r = Math.floor(Math.random()*255)
  const g = Math.floor(Math.random()*255)
  const b = Math.floor(Math.random()*255)
  return `rgba(${r}, ${g}, ${b}, 0.8)`
}

function toggleTheme() {
  setCssVar('--primary-color', randomColor(), container.value)
}
</script>
```

关于有哪些颜色变量，可以参考[这里](https://github.com/qf-design-test/qf-design-test/blob/78e48a1efc2e8d52e71049ceca2a9381fb50fef5/packages/theme-chalk/src/tabs.less#L3)