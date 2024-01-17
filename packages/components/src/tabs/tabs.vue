<template>
  <div class="qf-tabs" :style="{ width: width + 'px' }">
    <div
      @click="handleUpdate(item.value)"
      class="qf-tabs_item"
      v-for="(item, index) in data"
      :key="index"
    >
      {{ item.label }}
    </div>
    <div
      class="qf-tabs__select"
      :style="{
        transform: `translateX(${(width / data.length) * activeIndex}px)`,
        width: `${width / data.length}px`
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { TabProps } from './tabs';
import { useTab } from './use-tab';

defineOptions({ name: 'qf-tabs' });

const props = defineProps<TabProps>();
const emit = defineEmits(['update:activeKey']);
const { activeIndex, handleUpdate } = useTab(props, emit);
</script>
