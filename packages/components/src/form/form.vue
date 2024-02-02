<template>
  <form :class="cls">
    <slot></slot>
    <!-- 插槽用于插入表单字段 -->
  </form>
</template>

<script setup lang="ts">
import { provide, toRefs, ref, withDefaults, computed, reactive } from 'vue';
import { Field, formContextKey } from './form';
import type { ValidateFieldsError } from 'async-validator';

defineOptions({
  name: 'qf-form' // 定义组件名称
});

const props = withDefaults(
  defineProps<{
    model?: Record<string, any>;
    rules?: Record<string, any>;
    labelWidth?: number;
    inline?: boolean;
  }>(),
  {
    model: () => ({}), // 默认的model对象
    rules: () => ({}) // 默认的rules对象
  }
);

const fieldList = ref<Field[]>([]); // 创建表单字段列表

const addField = (field: Field) => {
  fieldList.value.push(field); // 添加表单字段到列表
};

const validate = async () => {
  let formErrors: ValidateFieldsError = {};
  for (let i = 0; i < fieldList.value.length; i++) {
    try {
      const field = fieldList.value[i];
      await field.validate(); // 验证每个表单字段
    } catch (error) {
      formErrors = {
        ...formErrors,
        ...(error as ValidateFieldsError)
      };
    }
  }

  if (Object.keys(formErrors).length === 0) return true; // 如果没有错误，返回true
  return Promise.reject(formErrors); // 如果有错误，返回错误对象的Promise
};

const resetFields = () => {
  fieldList.value.forEach((f) => f.resetField());
};

const cls = computed(() => {
  return ['qf-form', props.inline ? 'qf-form--inline' : ''];
});

provide(
  formContextKey,
  reactive({
    ...toRefs(props), // 提供props的响应式引用
    addField // 提供addField函数
  })
);

defineExpose({
  validate, // 暴露validate函数
  resetFields // 重置所有表单项
});
</script>
