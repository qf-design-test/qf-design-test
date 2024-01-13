import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Button from './button.vue';

describe('Button组件', () => {
  it('create', () => {
    const wrapper = mount(Button);
    expect(wrapper.classes()).toContain('qf-button');
  });

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

  it('disabled', async () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      }
    });

    expect(wrapper.classes()).toContain('qf-button--disabled');
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeUndefined();
  });
});
