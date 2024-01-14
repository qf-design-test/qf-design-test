import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Checkbox from './checkbox.vue';
import CheckboxGroup from './checkbox-group.vue';
import { h } from 'vue';

describe('Checkbox 组件', () => {
  it('create', () => {
    const wrapper = mount(Checkbox);
    expect(wrapper.classes()).toContain('qf-checkbox');
  });

  it('v-model', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: false,
        'onUpdate:modelValue': () => {
          wrapper.setProps({ modelValue: true });
        }
      }
    });
    await wrapper.trigger('click');
    expect(wrapper.props('modelValue')).toBe(true);
  });

  it('change event', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: false,
        'onUpdate:modelValue': () => {
          wrapper.setProps({ modelValue: true });
        }
      }
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted().change[0]).toEqual([true]);
  });

  it('without v-model', async () => {
    const wrapper = mount(Checkbox);
    await wrapper.trigger('click');
    expect(wrapper.vm.model).toBe(true);
  });

  it('disabled', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        disabled: true,
        modelValue: false,
        'onUpdate:modelValue': () => {
          wrapper.setProps({ modelValue: true });
        }
      }
    });
    expect(wrapper.classes()).toContain('qf-checkbox--disabled');
    await wrapper.trigger('click');
    expect(wrapper.props('modelValue')).toBe(false);
  });

  it('group', async () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        modelValue: [],
        'onUpdate:modelValue': (modelValue: string[]) => {
          wrapper.setProps({ modelValue });
        }
      },
      slots: {
        default: [
          h(Checkbox, {
            label: 'checkbox1'
          }),
          h(Checkbox, {
            label: 'checkbox2'
          })
        ]
      }
    });
    await wrapper.getComponent(Checkbox).trigger('click');
    expect(wrapper.props('modelValue')).toEqual(['checkbox1']);
  });
});
