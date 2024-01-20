<template>
  <div class="message-example">
    <qf-button size="small" @click="openSuccess">Success 消息通知</qf-button>
    <qf-button size="small" @click="openInfo">Info 消息通知</qf-button>
    <qf-button size="small" @click="openWarning">Warning 消息通知</qf-button>
    <qf-button size="small" @click="openError">Danger 消息通知</qf-button>
  </div>
</template>
<script setup lang="ts">
import { Message } from 'qf-design-test';
const openSuccess = () => {
  Message.success({
    message: 'Hello World',
  });
};

const openInfo = () => {
  Message.info({
    message: 'Hello World'
  });
};

const openWarning = () => {
  Message.warning({
    message: 'Hello World'
  });
};

const openError = () => {
  Message.error({
    message: 'Hello World'
  });
};
</script>

<style>
.message-example {
  display: flex;
  gap: 8px;
}
</style>
