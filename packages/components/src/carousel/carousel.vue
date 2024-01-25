<template>
  <div
    class="qf-carousel"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div class="qf-carousel__inner" ref="inner">
      <slot></slot>

      <div class="qf-carousel__left" @click="prev">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 7L10 12L15 17"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div class="qf-carousel__right" @click="next">
        <i>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 7L10 12L15 17"
              stroke="#fff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </i>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useCarousel } from './use-carousel';
import { CarouselProps } from './carousel';

defineOptions({
  name: 'qf-carousel'
});

const emit = defineEmits(['change']);

const props = withDefaults(defineProps<CarouselProps>(), {
  autoplay: true,
  interval: 3000
});

const inner = ref();
const { onMouseEnter, onMouseLeave, prev, next } = useCarousel(
  props,
  inner,
  emit
);
</script>
