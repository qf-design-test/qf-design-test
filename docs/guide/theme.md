### 主题色

可以通过设置css变量的形式来快速修改主题色

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