<template>
  <qf-transfer
    :data="data"
    v-model="value"
    :titles="['左面板', '右面板']"
    :action-texts="['转到右面板', '转到左面板']"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const data = ref([
  {
    key: 1,
    label: '选项1'
  },
  {
    key: 2,
    label: '选项2'
  }
]);
const value = ref([]);
</script>
