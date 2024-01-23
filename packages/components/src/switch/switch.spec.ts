import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Switch from './switch.vue';

describe('Switch 组件', () => {
  it('v-model', async () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
        'onUpdate:modelValue': (val: boolean) => {
          wrapper.setProps({
            modelValue: val
          });
        }
      }
    });
    await wrapper.find('input').setValue(true);
    expect(wrapper.props('modelValue')).toBe(true);
  });

  it('disabled', async () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
        disabled: true,
        'onUpdate:modelValue': (val: boolean) => {
          wrapper.setProps({
            modelValue: val
          });
        }
      }
    });

    await wrapper.find('input').setValue(true);
    expect(wrapper.props('modelValue')).toBe(false);
    expect(wrapper.emitted().change).toBeUndefined();
  });

  it('loading', async () => {
    const wrapper = mount(Switch, {
      props: {
        loading: true
      }
    });

    expect(() => wrapper.get('.qf-switch__loading-icon')).not.toThrowError();
    await wrapper.find('input').setValue(true);
    expect(wrapper.emitted().change).toBeUndefined();
  });

  it('active-text', async () => {
    const wrapper = mount(Switch, {
      props: {
        activeText: '是'
      }
    });

    expect(() => wrapper.get('.active-text')).toThrowError();
    await wrapper.find('input').setValue(true);
    expect(wrapper.get('.active-text').text()).toBe('是');
  });

  it('inactive-text', async () => {
    const wrapper = mount(Switch, {
      props: {
        inactiveText: '是'
      }
    });

    expect(() => wrapper.get('.inactive-text')).not.toThrowError();
    await wrapper.find('input').setValue(true);
    expect(() => wrapper.get('.inactive-text')).toThrowError();
  });
});
