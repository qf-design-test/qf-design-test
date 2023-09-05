<template>
  <div>启动测试--{{ num }}</div>
  <!-- <Button></Button> -->
  <qf-button type="primary"></qf-button>

</template>

<script lang="ts" setup>
// import { Button } from '@qf/components'
import { ref } from 'vue'

const num = ref(1)

</script>