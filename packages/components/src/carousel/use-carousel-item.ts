import { computed, getCurrentInstance, inject, onMounted, ref } from 'vue';
import { CarouselContext } from './carousel';

export const useCarouselItem = () => {
  const index = ref(0);

  const instance = getCurrentInstance();
  const { addItem, rootWidth, currentIndex } = inject(CarouselContext);

  const style = computed(() => {
    const diff = index.value - currentIndex.value;
    return {
      transform: `translateX(${diff * rootWidth.value}px)`
    };
  });

  onMounted(() => {
    index.value = addItem(instance);
  });

  return {
    style
  };
};
