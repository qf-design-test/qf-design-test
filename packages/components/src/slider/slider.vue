<template>
  <div class="qf-slider" ref="container">
    <div class="qf-slider__bar" :style="barStyle"></div>
    <div
      class="qf-slider__dragger"
      :style="btnStyle"
      @mousedown="onMouseDown"
      @mouseup="onMouseUp"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { useSlider } from './use-slider';
import { ref, defineModel } from 'vue';
import { SliderProps } from './slider';

defineOptions({
  name: 'qf-slider'
});

const model = defineModel({
  default() {
    return 0;
  }
});

const props = withDefaults(defineProps<SliderProps>(), {
  min: 0,
  max: 100
});

const container = ref(null);

const { btnStyle, barStyle, onMouseDown, onMouseUp } = useSlider(
  props,
  model,
  container
);
</script>
