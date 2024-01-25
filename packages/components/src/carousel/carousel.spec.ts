import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { h, nextTick } from 'vue';
import Carousel from './carousel.vue';
import CarouselItem from './carousel-item.vue';

// 描述 Carousel 组件的自动播放功能是否正确
describe('Carousel 组件', () => {
  // 测试自动播放功能是否在禁用时正常工作
  it('autoplay disable', async () => {
    const wrapper = mount(Carousel, {
      props: {
        autoplay: false
      },
      slots: {
        default: [
          h(CarouselItem, () => 'item1'),
          h(CarouselItem, () => 'item2')
        ]
      }
    });

    // 断言 change 事件未被触发
    expect(wrapper.emitted().change).toBeUndefined();
  });

  // 测试自动播放功能是否在启用时正常工作
  it('autoplay enable', async () => {
    vi.useFakeTimers();
    const wrapper = mount(Carousel, {
      props: {
        autoplay: true
      },
      slots: {
        default: [
          h(CarouselItem, () => 'item1'),
          h(CarouselItem, () => 'item2')
        ]
      }
    });

    // 模拟时间流逝，触发自动播放
    vi.advanceTimersToNextTimer();
    // 断言 change 事件已被触发
    expect(wrapper.emitted().change).toHaveLength(1);
    // 等待下一个事件循环
    await nextTick();
    // 断言当前活动的轮播项为 'item2'
    expect(wrapper.find('.qf-carousel-item--active').text()).toBe('item2');
    vi.useRealTimers();
  });

  // 测试鼠标悬停时是否暂停自动播放
  it('pause on hover', async () => {
    vi.useFakeTimers();
    const wrapper = mount(Carousel, {
      props: {
        autoplay: true,
        pauseOnHover: true
      },
      slots: {
        default: [
          h(CarouselItem, () => 'item1'),
          h(CarouselItem, () => 'item2')
        ]
      }
    });
    // 模拟鼠标悬停事件
    await wrapper.find('.qf-carousel').trigger('mouseenter');
    // 模拟时间流逝，触发自动播放
    vi.advanceTimersToNextTimer();
    // 等待下一个事件循环
    await nextTick();
    // 断言当前活动的轮播项为 'item1'
    expect(wrapper.find('.qf-carousel-item--active').text()).toBe('item1');
    vi.useRealTimers();
  });

  // 测试自动播放的时间间隔是否正确
  it('interval', async () => {
    const wrapper = mount(Carousel, {
      props: {
        autoplay: true,
        interval: 1000
      },
      slots: {
        default: [
          h(CarouselItem, () => 'item1'),
          h(CarouselItem, () => 'item2')
        ]
      }
    });

    // 等待 1000 毫秒
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(null);
      }, 1000)
    );
    // 断言 change 事件已被触发
    expect(wrapper.emitted().change).toHaveLength(1);
    // 断言当前活动的轮播项为 'item2'
    expect(wrapper.find('.qf-carousel-item--active').text()).toBe('item2');
  });
});
