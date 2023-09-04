<template>
  <button
    class="qf-button"
    :class="{ 'qf-button--primary': type === 'primary' }"
  >
    按钮组件
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
.qf-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  height: 32px;
  white-space: nowrap;
  cursor: pointer;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  transition: 0.1s;
  font-weight: 500;
  user-select: none;
  vertical-align: middle;
  -webkit-appearance: none;
  background-color: #ffffff;
  border: 1px;
  border-color: #dcdfe6;
  padding: 8px 15px;
  font-size: 14px;
  border-radius: 4px;
  border-style: solid;
}
.qf-button--primary {
  background: #409eff;
  color: white;
}
</style>
