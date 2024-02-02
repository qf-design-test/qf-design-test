<template>
  <qf-form :model="form">
    <qf-form-item label="姓名">
      <qf-input v-model="form.name"></qf-input>
    </qf-form-item>
  </qf-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const form = reactive({
  name: ''
});
</script>
