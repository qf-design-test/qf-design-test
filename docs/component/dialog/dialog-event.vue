<template>
  <div>
    <qf-button @click="onClick">点击显示对话框 事件</qf-button>
    <qf-dialog
      title="标题"
      v-model:visible="visible"
      @onCancel="handleCancel"
      @onOk="handleOk"
    >
      <div>对话框内容</div>
    </qf-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);

const onClick = () => (visible.value = true);

const handleCancel = () => (visible.value = false);
const handleOk = () => {
  console.log('触发了onOk');
};
</script>
