<template>
  <div class="qf-collapse">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineModel } from 'vue';
import { useCollapse } from './use-collapse';
import { CollapseProps } from './collapse';

defineOptions({
  name: 'qf-collapse'
});

const props = defineProps<CollapseProps>();
const model = defineModel<string[]>({
  default() {
    return [];
  }
});

const emit = defineEmits(['change']);

useCollapse(props, model, emit);
</script>
