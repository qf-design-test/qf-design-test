<template>
  <div>
    <qf-button @click="openMessage">点击打开消息通知</qf-button>
  </div>
</template>
<script setup lang="ts">
import { Message } from 'qf-design-test'
const openMessage = () => {
  Message({
    message: 'Hello World'
  })
}
</script>
