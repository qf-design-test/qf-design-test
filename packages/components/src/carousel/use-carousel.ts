import {
  ComponentInternalInstance,
  computed,
  onMounted,
  provide,
  ref,
  watch,
  Ref
} from 'vue';
import { CarouselContext, CarouselProps } from './carousel';

// 创建一个自定义 hook 用于 Carousel 组件
export const useCarousel = (
  props: CarouselProps, // Carousel 组件的 props
  inner: Ref<HTMLElement>, // 对内部元素的引用
  emit: (event: 'change', ...args: any[]) => void // 用于触发事件的函数
) => {
  const { autoplay, interval, pauseOnHover } = props; // 从 props 中获取自动播放、间隔和悬停暂停的配置

  const currentIndex = ref(0); // 当前轮播项的索引
  const items = ref<ComponentInternalInstance[]>([]); // 轮播项的实例数组
  let timer: ReturnType<typeof setInterval>; // 定时器变量

  const rootWidth = computed(() => {
    if (!inner.value) return 0;
    const { width } = (inner.value as HTMLDivElement).getBoundingClientRect();
    return width;
  }); // 计算根元素的宽度

  const itemCount = computed(() => {
    return items.value.length;
  }); // 计算轮播项的数量

  // 切换到下一个轮播项
  const next = () => {
    currentIndex.value = (currentIndex.value + 1) % items.value.length;
    console.log(1, 'trigger change');
    emit('change', currentIndex.value);
  };

  // 切换到上一个轮播项
  const prev = () => {
    currentIndex.value =
      (currentIndex.value - 1 + items.value.length) % items.value.length;
  };

  // 设置自动播放的间隔
  const setupInterval = () => {
    if (autoplay) {
      timer = setInterval(() => {
        next();
      }, interval);
    }
  };

  // 鼠标进入时暂停自动播放
  const onMouseEnter = () => {
    if (pauseOnHover) {
      clearInterval(timer);
    }
  };

  // 鼠标离开时恢复自动播放
  const onMouseLeave = () => {
    setupInterval();
  };

  // 监听自动播放配置的变化
  watch(
    () => props.autoplay,
    (val) => {
      if (val) {
        setupInterval();
      } else {
        clearInterval(timer);
      }
    }
  );

  // 组件挂载后设置自动播放
  onMounted(() => {
    console.log('on mounted');
    setupInterval();
  });

  // 添加轮播项到数组中
  const addItem = (item: ComponentInternalInstance) => {
    return items.value.push(item) - 1;
  };

  // 提供轮播上下文
  provide(CarouselContext, {
    addItem,
    rootWidth,
    currentIndex,
    itemCount
  });

  // 返回需要在 Carousel 组件中使用的函数
  return {
    next,
    prev,
    onMouseEnter,
    onMouseLeave
  };
};
