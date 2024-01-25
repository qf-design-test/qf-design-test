<template>
  <qf-row :gutter="20">
    <qf-col :span="6">
      <qf-dropdown :data="data" trigger="click">
        <qf-button type="primary">点击下拉</qf-button>
      </qf-dropdown>
    </qf-col>

    <qf-col :span="6">
      <qf-dropdown :data="data">
        <qf-button type="primary">hover下拉</qf-button>
      </qf-dropdown>
    </qf-col>
  </qf-row>
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
