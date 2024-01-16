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

  // checkbox v-model是否正确地更新了
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

  // checkbox change事件是否触发了
  it('change event', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: false,
        'onUpdate:modelValue': () => {
          wrapper.setProps({ modelValue: true });
        }
      }
    });
    // 点击后期望触发 onChange 事件，同时返回值为 true
    await wrapper.trigger('click');
    expect(wrapper.emitted().change[0]).toEqual([true]);
  });

  // 没有传入v-model时，checkbox依然应该可以进行选中
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
    // disabled情况下，应该要正确渲染出 class
    // 同时点击后，checkbox的值不应该发生变化，应该还是false
    expect(wrapper.classes()).toContain('qf-checkbox--disabled');
    await wrapper.trigger('click');
    expect(wrapper.props('modelValue')).toBe(false);
  });

  it('group', async () => {
    // 渲染group组件
    const wrapper = mount(CheckboxGroup, {
      props: {
        modelValue: [],
        'onUpdate:modelValue': (modelValue: string[]) => {
          wrapper.setProps({ modelValue });
        }
      },
      // 在这里通过插槽插入两个checkbox组件
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
    // 此时通过getComponent获取到第一个组件，触发点击事件，
    // 期望此时 checkbox-group v-model的值应该为 第一个组件的label
    // getComponent方法参考：https://test-utils.vuejs.org/api/#getComponent
    await wrapper.getComponent(Checkbox).trigger('click');
    expect(wrapper.props('modelValue')).toEqual(['checkbox1']);
  });
});
