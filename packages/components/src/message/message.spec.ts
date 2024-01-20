import { describe, expect, it, vi } from 'vitest';
import Message from './index';
import { mount } from '@vue/test-utils';
import MessageComponent from './message.vue';

const props = {
  delay: 1000, // 设置延迟时间为1000毫秒
  offset: 10, // 设置偏移量为10
  id: 'testId', // 设置id为'testId'
  appendTo: 'body' // 将组件附加到body元素上
};

// 描述测试套件，测试Message组件
describe('Message 组件', () => {
  // 测试服务
  it('service', () => {
    Message(); // 调用Message函数
    const dom = document.body.querySelector('.qf-message'); // 查询.qf-message元素
    expect(dom).not.toBe(null); // 断言.qf-message元素不为null
  });

  // 测试延迟
  it('delay', () => {
    vi.useFakeTimers(); // 使用虚拟定时器
    const wrapper = mount(MessageComponent, {
      props // 使用props渲染MessageComponent
    });
    vi.runAllTimers(); // 运行所有定时器
    expect(wrapper.vm.selfVisible).toBeFalsy(); // 断言selfVisible属性为假
  });

  // 测试偏移量
  it('offset', () => {
    const wrapper = mount(MessageComponent, {
      props: {
        delay: 0, // 设置延迟时间为0
        offset: 10 // 设置偏移量为10
      },
      global: {
        stubs: {
          teleport: true // 使用teleport的存根
        }
      }
    });
    expect(wrapper.find('.qf-message').attributes().style).toContain(
      'top: 10px' // 断言.qf-message元素的样式包含'top: 10px'
    );
  });

  // 测试偏移量
  it('type', () => {
    const types = ['success', 'warning', 'error', 'info'];
    for (const type of types) {
      const wrapper = mount(MessageComponent, {
        props: {
          delay: 0,
          type
        },
        global: {
          stubs: {
            teleport: true // 使用teleport的存根
          }
        }
      });
      expect(wrapper.find('.qf-message').classes()).toContain(
        `qf-message--${type}`
      );
    }
  });

  it('close', async () => {
    const wrapper = mount(MessageComponent, {
      props: {
        delay: 0,
        showClose: true
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    });
    expect(() => wrapper.get('.qf-message__close')).not.toThrow();
    await wrapper.get('.qf-message__close').trigger('click');
    expect(wrapper.vm.selfVisible).toBe(false);
  });
});
