<template>
  <div :class="classList">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, provide, defineModel, reactive } from 'vue';
import { checkboxContextKey } from './checkbox';

// 当下层checkbox更新时需要上传到 上层checkboxGroup
// 下发自身v-model的数组到下层
defineOptions({
  name: 'qf-checkbox-group'
});

defineProps<{
  modelValue?: string[];
}>();

const emit = defineEmits(['change', 'update:modelvalue']);
const model = defineModel<string[]>({
  default() {
    return reactive([]);
  }
});

const changeHandler = (val) => {
  const modelValue = model.value;
  const index = modelValue.findIndex((v) => v === val);
  if (index === -1) {
    modelValue.push(val);
  } else {
    modelValue.splice(index, 1);
  }

  model.value = modelValue;
  emit('change', model.value);
};

provide(checkboxContextKey, {
  modelValue: model,
  changeHandler
});

const classList = computed(() => ['qf-checkbox-group']);
</script>
