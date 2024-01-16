import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Button from './button.vue';

describe('Button组件', () => {
  // 组件创建是否成功
  it('create', () => {
    const wrapper = mount(Button);
    expect(wrapper.classes()).toContain('qf-button');
  });

  // 组件类型是否渲染了正确的class
  it('type', () => {
    const types = ['primary', 'success', 'warning', 'danger', 'info', 'text'];
    types.forEach((t) => {
      const wrapper = mount(Button, {
        props: {
          type: t
        }
      });
      expect(wrapper.classes()).toContain(`qf-button--${t}`);
    });
  });

  // 组件disabled属性是否生效
  it('disabled', async () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      }
    });

    // 1. 检查class是否添加事件 2. 检查click事件是否无效
    expect(wrapper.classes()).toContain('qf-button--disabled');
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeUndefined();
  });
});
