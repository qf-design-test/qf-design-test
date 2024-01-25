<template>
  <div :style="style" :class="classList">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { useCarouselItem } from './use-carousel-item';

defineOptions({
  name: 'qf-carousel-item'
});

const { style, classList } = useCarouselItem();
</script>
