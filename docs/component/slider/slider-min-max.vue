<template>
  <div>
    <div style="display: flex; gap: 20px; align-items: center">
      <span>最小值:</span>
      <qf-slider style="flex: 0 0 70%" :min="10" v-model="percent1"></qf-slider>
    </div>
    <p>当前进度{{ percent1 }}%</p>

    <div style="display: flex; gap: 20px; align-items: center">
      <span>最大值:</span>
      <qf-slider style="flex: 0 0 70%" :max="70" v-model="percent2"></qf-slider>
    </div>
    <p>当前进度{{ percent2 }}%</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const percent1 = ref(30);
const percent2 = ref(0);
</script>
