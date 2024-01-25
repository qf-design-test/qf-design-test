<template>
  <qf-dropdown :data="data">
    <qf-button type="primary">下拉列表</qf-button>
  </qf-dropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const data = ref(
  Array.from({ length: 4 }).map((_, index) => ({
    key: index,
    label: `选项${index}`,
    value: index
  }))
);
</script>
