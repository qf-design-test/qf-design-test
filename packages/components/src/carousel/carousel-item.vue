<template>
  <div :style="style" class="qf-carousel-item">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { useCarouselItem } from './use-carousel-item';

defineOptions({
  name: 'qf-carousel-item'
});

const { style } = useCarouselItem();
</script>
