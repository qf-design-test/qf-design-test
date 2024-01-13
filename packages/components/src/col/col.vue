<template>
  <div :style="style" :class="classList">
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { computed, inject } from 'vue';
import { rowContextKey } from '../row/row';
import type { CSSProperties } from 'vue';

defineOptions({
  name: 'qf-col'
});

const props = defineProps<{
  span?: number;
  offset?: number;
}>();
const { span = 24, offset = 0 } = props;

const { gutter } = inject(rowContextKey, { gutter: computed(() => 0) });

const style = computed(() => {
  const styles: CSSProperties = {};
  if (gutter.value) {
    styles.paddingLeft = styles.paddingRight = `${gutter.value / 2}px`;
  }
  return styles;
});

const classList = computed(() => {
  return ['qf-col', `qf-col-${span}`, `qf-col--offset-${offset}`];
});
</script>
