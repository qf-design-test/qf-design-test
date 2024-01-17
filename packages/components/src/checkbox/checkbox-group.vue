<template>
  <div :class="classList">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { CheckboxGroupProps } from './checkbox';
import { useCheckboxGroup } from './use-checkbox-group';

defineOptions({
  name: 'qf-checkbox-group'
});

const props = defineProps<CheckboxGroupProps>();

// 定义需要触发的emit事件
const emit = defineEmits(['change', 'update:modelvalue']);

const { classList } = useCheckboxGroup(props, emit);
</script>
