<template>
  <qf-collapse v-model="active" accordion>
    <qf-collapse-item title="标题1" name="1">
      <p>Hello</p>
    </qf-collapse-item>
    <qf-collapse-item title="标题2" name="2">
      <p>Hello World</p>
    </qf-collapse-item>
  </qf-collapse>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const active = ref('1');
</script>
