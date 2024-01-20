<template>
  <div>
    <div style="display: flex; gap: 20px; align-items: center">
      <span>进度条:</span>
      <qf-slider
        style="flex: 0 0 70%"
        v-model="percent"
        :disabled="true"
      ></qf-slider>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const percent = ref(10);
</script>
