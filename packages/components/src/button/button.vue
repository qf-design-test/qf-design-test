<template>
  <button
    class="qf-button"
    :class="{ 'qf-button--primary': type === 'primary' }"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
// 在tsconfig type 中定义 unplugin-vue-define-options/macros-global
defineOptions({ name: "qf-button" });

defineProps<{
  type?: "primary" | "default";
}>();
</script>

<style scoped lang="less">
@import "./style/index.less";
</style>
