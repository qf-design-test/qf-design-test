<template>
  <qf-switch v-model="checked" disabled />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const checked = ref(false);
</script>
