<template>
  <div :class="classList" :style="style">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue';
import type { CSSProperties } from 'vue';
import type { RowProps } from './row';
import { rowContextKey } from './row';

defineOptions({
  name: 'qf-row'
});

const props = defineProps<RowProps>();
const { justify = 'start', align } = props;
const gutter = computed(() => props.gutter ?? 0);

provide(rowContextKey, { gutter });

const style = computed(() => {
  const styles: CSSProperties = {};
  if (!props.gutter) {
    return styles;
  }

  styles.marginRight = styles.marginLeft = `-${gutter.value / 2}px`;
  return styles;
});

const classList = computed(() => [
  'qf-row',
  justify !== 'start' ? `qf-rows--justify-${justify}` : '',
  align ? `qf-rows-align-${align}` : ''
]);
</script>
