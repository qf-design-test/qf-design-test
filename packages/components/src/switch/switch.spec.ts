import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Switch from './switch.vue';

// 描述一个Switch组件的测试套件
describe('Switch 组件', () => {
  // 测试v-model
  it('v-model', async () => {
    // 创建一个Switch组件的包装器
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
        'onUpdate:modelValue': (val: boolean) => {
          // 更新modelValue属性
          wrapper.setProps({
            modelValue: val
          });
        }
      }
    });
    // 设置input的值为true
    await wrapper.find('input').setValue(true);
    // 断言modelValue属性为true
    expect(wrapper.props('modelValue')).toBe(true);
  });

  // 测试disabled属性
  it('disabled', async () => {
    // 创建一个Switch组件的包装器
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
        disabled: true,
        'onUpdate:modelValue': (val: boolean) => {
          // 更新modelValue属性
          wrapper.setProps({
            modelValue: val
          });
        }
      }
    });

    // 设置input的值为true
    await wrapper.find('input').setValue(true);
    // 断言modelValue属性为false
    expect(wrapper.props('modelValue')).toBe(false);
    // 断言change事件未被触发
    expect(wrapper.emitted().change).toBeUndefined();
  });

  // 测试loading属性
  it('loading', async () => {
    // 创建一个Switch组件的包装器
    const wrapper = mount(Switch, {
      props: {
        loading: true
      }
    });

    // 断言.qf-switch__loading-icon元素存在
    expect(() => wrapper.get('.qf-switch__loading-icon')).not.toThrowError();
    // 设置input的值为true
    await wrapper.find('input').setValue(true);
    // 断言change事件未被触发
    expect(wrapper.emitted().change).toBeUndefined();
  });

  // 测试active-text属性
  it('active-text', async () => {
    // 创建一个Switch组件的包装器
    const wrapper = mount(Switch, {
      props: {
        activeText: '是'
      }
    });

    // 断言.active-text元素不存在
    expect(() => wrapper.get('.active-text')).toThrowError();
    // 设置input的值为true
    await wrapper.find('input').setValue(true);
    // 断言.active-text元素的文本为'是'
    expect(wrapper.get('.active-text').text()).toBe('是');
  });

  // 测试inactive-text属性
  it('inactive-text', async () => {
    // 创建一个Switch组件的包装器
    const wrapper = mount(Switch, {
      props: {
        inactiveText: '是'
      }
    });

    // 断言.inactive-text元素存在
    expect(() => wrapper.get('.inactive-text')).not.toThrowError();
    // 设置input的值为true
    await wrapper.find('input').setValue(true);
    // 断言.inactive-text元素不存在
    expect(() => wrapper.get('.inactive-text')).toThrowError();
  });
});
