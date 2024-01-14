<template>
  <qf-checkbox v-model="checked"> 选项1 </qf-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const checked = ref(false);
</script>
