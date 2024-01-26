import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Dropdown from './dropdown.vue'; // 导入要测试的下拉菜单组件
import { h, nextTick } from 'vue';

describe('Dropdown 组件', () => {
  it('hover', async () => {
    // 测试鼠标悬停交互
    const wrapper = mount(Dropdown, {
      attachTo: document.body,
      props: {
        data: [
          {
            key: 1,
            label: '选项1',
            value: 1
          }
        ]
      },
      slots: {
        default: h(
          'div',
          {
            id: 'test'
          },
          '下拉列表'
        )
      }
    });
    await wrapper.find('#test').trigger('mouseenter', { bubbles: true }); // 模拟鼠标悬停事件
    await nextTick(); // 等待下一个事件循环
    expect(wrapper.find('.qf-dropdown__menus').isVisible()).toBe(true); // 断言下拉菜单是否可见
  });

  it('disabled', async () => {
    // 测试禁用选项
    const wrapper = mount(Dropdown, {
      attachTo: document.body,
      props: {
        data: [
          {
            key: 1,
            label: '选项1',
            value: 1
          },
          {
            key: 2,
            label: '选项2',
            value: 2,
            disabled: true
          }
        ]
      },
      slots: {
        default: h(
          'div',
          {
            id: 'test'
          },
          '下拉列表'
        )
      }
    });
    await wrapper.find('#test').trigger('mouseenter', { bubbles: true }); // 模拟鼠标悬停事件
    await nextTick(); // 等待下一个事件循环

    const disabledCls = '.qf-dropdown__item--disabled';
    expect(() => wrapper.get(disabledCls)).not.toThrowError(); // 断言是否找到禁用选项
    expect(wrapper.get(disabledCls).text()).toBe('选项2'); // 断言禁用选项的文本内容
    await wrapper.find(disabledCls).trigger('click'); // 模拟点击禁用选项
    expect(wrapper.emitted().select).toBeUndefined(); // 断言禁用选项点击后不会触发select事件
  });

  it('hide on click', async () => {
    // 测试点击后隐藏下拉菜单
    const wrapper = mount(Dropdown, {
      attachTo: document.body,
      props: {
        data: [
          {
            key: 1,
            label: '选项1',
            value: 1
          },
          {
            key: 2,
            label: '选项2',
            value: 2,
            disabled: true
          }
        ]
      },
      slots: {
        default: h(
          'div',
          {
            id: 'test'
          },
          '下拉列表'
        )
      }
    });
    await wrapper.find('.qf-dropdown__anchor').trigger('mouseenter'); // 模拟鼠标悬停事件
    await wrapper.find('.qf-dropdown__item').trigger('click'); // 模拟点击选项
    expect(wrapper.emitted().select).toHaveLength(1); // 断言是否触发了select事件
    expect(wrapper.find('.qf-dropdown__menus').isVisible()).toBe(false); // 断言下拉菜单是否隐藏

    await wrapper.setProps({
      hideOnClick: false
    });
    await wrapper.find('.qf-dropdown__anchor').trigger('mouseenter'); // 模拟鼠标悬停事件
    await wrapper.find('.qf-dropdown__item').trigger('click'); // 模拟点击选项
    expect(wrapper.find('.qf-dropdown__menus').isVisible()).toBe(true); // 断言下拉菜单是否可见
  });
});
