<template>
  <div>
    <qf-tabs :data="options" :width="300" v-model:activeKey="num"></qf-tabs>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const options = ref([
  { label: 'label1', value: '1' },
  { label: 'label2', value: '2' },
  { label: 'label3', value: '3' },
  { label: 'label4', value: '4' }
]);

const num = ref('1');
</script>
