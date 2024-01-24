import { computed, nextTick, onMounted, provide, ref } from 'vue';
import { CarouselContext, CarouselProps } from './carousel';

export const useCarousel = (props: CarouselProps, inner: Ref<HTMLElement>) => {
  const { autoplay, interval, pauseOnHover } = props;

  const currentIndex = ref(0);
  const items = ref([]);
  let timer: ReturnType<typeof setInterval>;

  const rootWidth = computed(() => {
    if (!inner.value) return 0;
    const { width } = (inner.value as HTMLDivElement).getBoundingClientRect();
    return width;
  });

  const itemCount = computed(() => {
    return items.value.length;
  });



  const next = () => {
    clearInterval(timer);
    currentIndex.value = (currentIndex.value + 1) % items.value.length;
    nextTick(() => {
      setupInterval();
    });
  };
  const prev = () => {
    clearInterval(timer);
    currentIndex.value =
      (currentIndex.value - 1 + items.value.length) % items.value.length;
    nextTick(() => {
      setupInterval();
    });
  };

  const setupInterval = () => {
    if (autoplay) {
      timer = setInterval(() => {
        next();
      }, interval);
    }
  };

  const onMouseEnter = () => {
    if (pauseOnHover) {
      clearInterval(timer);
    }
  };

  const onMouseLeave = () => {
    setupInterval();
  };

  onMounted(() => {
    setupInterval();
  });

  const addItem = (item) => {
    return items.value.push(item) - 1;
  };

  provide(CarouselContext, {
    addItem,
    rootWidth,
    currentIndex,
    itemCount
  });

  return {
    next,
    prev,
    onMouseEnter,
    onMouseLeave
  };
};
