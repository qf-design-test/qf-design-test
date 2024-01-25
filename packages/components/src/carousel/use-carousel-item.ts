import { computed, getCurrentInstance, inject, onMounted, ref } from 'vue';
import { CarouselContext } from './carousel';

// 处理轮播项索引的函数
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

// 创建一个自定义 hook 用于 CarouselItem 组件
export const useCarouselItem = () => {
  const index = ref(0); // 轮播项的索引

  const instance = getCurrentInstance(); // 获取当前组件实例
  const { addItem, rootWidth, currentIndex, itemCount } =
    inject(CarouselContext); // 从轮播上下文中获取所需属性

  // 计算样式
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

  // 计算类名
  const classList = computed(() => {
    return [
      'qf-carousel-item',
      index.value === currentIndex.value ? 'qf-carousel-item--active' : ''
    ];
  });

  // 组件挂载后将轮播项添加到数组中
  onMounted(() => {
    index.value = addItem(instance);
  });

  // 返回需要在 CarouselItem 组件中使用的样式和类名
  return {
    style,
    classList
  };
};
