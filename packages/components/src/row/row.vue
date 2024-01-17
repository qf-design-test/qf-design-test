<template>
  <div :class="classList" :style="style">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue';
import type { RowProps } from './row';
import { useRow } from './use-row';

defineOptions({
  name: 'qf-row'
});

// 设置props 默认值
const props = withDefaults(defineProps<RowProps>(), {
  justify: 'start'
});

const { style, classList } = useRow(props);
</script>
