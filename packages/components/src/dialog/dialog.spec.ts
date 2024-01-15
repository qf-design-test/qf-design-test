import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Dialog from './dialog.vue';

describe('Dialog 组件', () => {
  it('create', () => {
    const wrapper = mount(Dialog);
    expect(wrapper.classes()).toContain('qf-dialog');
  });

  it('visible', async () => {
    const wrapper = mount(Dialog, {
      attachTo: document.body,
      props: {
        visible: true
      }
    });
    await wrapper.vm.$nextTick();
    expect(() => wrapper.get('.qf-dialog__content')).not.toThrowError();

    await wrapper.setProps({
      visible: false
    });

    await wrapper.vm.$nextTick();
    expect(wrapper.find('.qf-dialog__content').isVisible()).toBe(false);
  });

  it('title', async () => {
    const wrapper = mount(Dialog, {
      props: {
        visible: true,
        title: 'Hello'
      }
    });

    expect(wrapper.find('.qf-dialog__title').text()).toBe('Hello');
  });
});
