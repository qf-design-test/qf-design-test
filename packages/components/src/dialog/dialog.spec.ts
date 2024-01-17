import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Dialog from './dialog.vue';
import { aw } from 'vitest/dist/reporters-trlZlObr';

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
    // 设置visible, content能够正常渲染
    await wrapper.vm.$nextTick();
    expect(() => wrapper.get('.qf-dialog__content')).not.toThrowError();

    // 设置visible为false，1. 内容不可见 2. 触发update:visible事件
    await wrapper.setProps({
      visible: false
    });

    expect(wrapper.emitted('update:visible')).toHaveLength(1);
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

  it('onOk/onCancel', async () => {
    const wrapper = mount(Dialog, {
      props: {
        visible: true
      }
    });
    // 找到所有的button
    const buttons = wrapper.findAllComponents({
      name: 'QfButton'
    });
    // 点击确认按钮，应该触发onOk事件
    const okButton = buttons[0];
    await okButton.trigger('click');
    expect(wrapper.emitted('onOk')).toHaveLength(1);

    // 点击取消按钮，应该触发onCancel事件
    const cancelButton = buttons[1];
    await cancelButton.trigger('click');
    expect(wrapper.emitted('onCancel')).toHaveLength(1);
  });

  it('close click on mask', async () => {
    const wrapper = mount(Dialog, {
      props: {
        visible: true
      }
    });
    // 点击蒙层应该关闭弹窗
    await wrapper.find('.qf-dialog__overlay').trigger('click');
    expect(wrapper.emitted('update:visible')?.[0]).toEqual([false]);

    await wrapper.setProps({
      visible: true
    });
    // 点击内容区域，不应该关闭弹窗
    await wrapper.find('.qf-dialog__wrapper').trigger('click');
    expect(wrapper.emitted('update:visible')).toHaveLength(1);

    await wrapper.setProps({
      closeOnClickMask: false
    });

    // closeOnClickMask为false时，点击蒙层不应该关闭弹窗
    await wrapper.find('.qf-dialog__overlay').trigger('click');
    expect(wrapper.emitted('update:visible')).toHaveLength(1);
  });
});
