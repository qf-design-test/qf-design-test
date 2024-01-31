<template>
  <qf-collapse v-model="active">
    <qf-collapse-item title="标题1" name="1"> 123123 </qf-collapse-item>
    <qf-collapse-item title="标题2" name="2"> 12asdsadasd3123 </qf-collapse-item>
  </qf-collapse>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const active = ref(['1']);
</script>
