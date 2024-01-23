<template>
  <qf-transfer :data="data" v-model="value" filterable />
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
