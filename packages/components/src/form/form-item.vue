<template>
  <div :class="cls">
    <label class="qf-form-item__label" v-if="label" :style="labelStyle"
      >{{ label }}:</label
    >
    <!-- 如果有label，则显示label -->
    <div class="qf-form-item__content">
      <slot />
      <!-- 插槽内容 -->
      <div class="qf-form-item__message" v-if="validateMessage">
        <!-- 如果有验证消息，则显示 -->
        {{ validateMessage }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted, withDefaults, ref, computed } from 'vue';
import Schema from 'async-validator';
import { Field, formContextKey } from './form';

defineOptions({
  name: 'qf-form-item' // 定义组件名称
});

const props = withDefaults(
  defineProps<{
    label?: string;
    prop?: string;
    labelWidth?: number;
  }>(),
  {
    label: ''
  }
);

const { label } = props; // 从props中提取label

const formContext = inject<{
  rules?: Record<string, any>;
  model: Record<string, any>;
  labelWidth?: number;
  addField?: (field: Field) => void;
}>(formContextKey); // 从父组件中注入formContext

const validateMessage = ref(''); // 创建验证消息的响应式引用
const initialVal = ref(null);

const validate = () => {
  if (!props.prop) return; // 如果没有prop，则返回

  const fieldRule = formContext?.rules?.value[props.prop!]; // 获取字段的验证规则
  const fieldValue = {
    [props.prop]: formContext?.model.value[props.prop!]
  }; // 获取字段的值
  const validator = new Schema({
    [props.prop!]: fieldRule
  }); // 创建验证器

  return validator
    .validate(fieldValue)
    .then(() => {
      validateMessage.value = ''; // 验证通过，清空验证消息
      return true;
    })
    .catch((err) => {
      validateMessage.value = err.errors[0]?.message; // 验证失败，设置验证消息
      return Promise.reject({
        [props.prop!]: validateMessage.value
      });
    });
};

const resetField = () => {
  const model = formContext?.model;
  if (!props.prop || !model) return; // 如果没有prop，则返回

  model[props.prop!] = initialVal.value;
  validateMessage.value = '';
};

const labelWidth = computed(() => props.labelWidth ?? formContext?.labelWidth); // 计算labelWidth

const labelStyle = computed(() => {
  const val = labelWidth.value;
  if (typeof val === 'number') {
    return {
      width: val + 'px' // 如果是数字，返回数字加上 'px' 后的字符串
    };
  } else if (typeof val === 'string') {
    return {
      width: val // 如果是字符串，直接返回字符串
    };
  } else {
    return {};
  }
}); // 计算labelStyle

const isRequired = computed(() => {
  const fieldRule = formContext?.rules?.[props.prop!]; // 获取字段的验证规则
  return fieldRule?.required;
});
const cls = computed(() => {
  return [
    'qf-form-item',
    isRequired.value ? 'qf-form-item--required' : '',
    validateMessage.value ? 'qf-form-item--error' : ''
  ]; // 计算类名
});

onMounted(() => {
  if (props.prop) {
    formContext?.addField?.({
      validate,
      resetField
    }); // 在组件挂载后，将validate和resetField添加到formContext
    initialVal.value = formContext?.model?.[props.prop!];
  }
});

defineExpose({
  resetField,
  validate
}); // 暴露resetField和validate函数
</script>
