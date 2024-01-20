import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Slider from './slider.vue';

describe('Slider 组件', () => {
  it('create', () => {
    const wrapper = mount(Slider);
    expect(wrapper.classes()).toContain('qf-slider');
  });

  it('v-model', async () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: 30
      }
    });
    // 传入的model值为30，期望进度条显示长度为30%，同时拖动按钮的偏移量为30%
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.qf-slider__bar').attributes().style).toBe(
      'width: 30%;'
    );
    expect(wrapper.find('.qf-slider__dragger').attributes().style).toBe(
      'left: 30%;'
    );
  });

  it('disabled', async () => {
    const wrapper = mount(Slider, {
      props: {
        disabled: true
      }
    });

    expect(wrapper.classes()).toContain('qf-slider--disabled');
  });
});
