<template>
  <div>
    <qf-button @click="onClick">点击打开对话框</qf-button>
    <qf-dialog
      title="标题"
      :close-on-click-mask="false"
      v-model:visible="visible"
      @onCancel="handleCancel"
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
</script>
