<template>
  <div :class="classList">
    <div class="qf-card__header" v-if="$slots.header">
      <slot name="header" />
    </div>
    <div class="qf-card__content">
      <slot />
    </div>
    <div class="qf-card__footer" v-if="$slots.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

defineOptions({
  name: 'qf-card'
});

const props = withDefaults(
  defineProps<{
    shadowType: 'always' | 'never' | 'hover';
  }>(),
  {
    shadowType: 'always'
  }
);

const classList = computed(() => {
  return [
    'qf-card',
    props.shadowType === 'never' ? 'qf-card--never' : '',
    props.shadowType === 'hover' ? 'qf-card--hover' : ''
  ];
});
</script>
