<template>
  <qf-switch
    v-model="checked"
    style="--switch-inactive-bg-color: green; --switch-active-bg-color: red"
    active-text="否"
    inactive-text="是"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const checked = ref(false);
</script>
