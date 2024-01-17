<template>
  <div :style="style" :class="classList">
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { useCol } from './use-col';

defineOptions({
  name: 'qf-col'
});

const props = withDefaults(
  defineProps<{
    span?: number;
    offset?: number;
  }>(),
  {
    span: 24,
    offset: 0
  }
);

const { style, classList } = useCol(props);
</script>
