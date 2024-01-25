import { computed, getCurrentInstance, inject, onMounted, ref } from 'vue';
import { CarouselContext } from './carousel';

function processIndex(index: number, activeIndex: number, length: number) {
  const lastItemIndex = length - 1;
  const prevItemIndex = activeIndex - 1;
  const nextItemIndex = activeIndex + 1;
  const halfItemIndex = length / 2;

  if (activeIndex === 0 && index === lastItemIndex) {
    return -1;
  } else if (activeIndex === lastItemIndex && index === 0) {
    return length;
  } else if (index < prevItemIndex && activeIndex - index >= halfItemIndex) {
    return length + 1;
  } else if (index > nextItemIndex && index - activeIndex >= halfItemIndex) {
    return -2;
  }
  return index;
}
export const useCarouselItem = () => {
  const index = ref(0);

  const instance = getCurrentInstance();
  const { addItem, rootWidth, currentIndex, itemCount } =
    inject(CarouselContext);

  const style = computed(() => {
    let realIndex = index.value;
    if (realIndex !== currentIndex.value) {
      realIndex = processIndex(realIndex, currentIndex.value, itemCount.value);
    }

    const diff = realIndex - currentIndex.value;
    return {
      transform: `translateX(${diff * rootWidth.value}px)`
    };
  });

  const classList = computed(() => {
    return [
      'qf-carousel-item',
      index.value === currentIndex.value ? 'qf-carousel-item--active' : ''
    ];
  });

  onMounted(() => {
    index.value = addItem(instance);
  });

  return {
    style,
    classList
  };
};
