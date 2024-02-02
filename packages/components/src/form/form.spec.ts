import { describe, expect, it } from 'vitest';
import Form from './form.vue';
import FormItem from './form-item.vue';
import Input from '../input/input.vue';
import { h, reactive } from 'vue';
import { mount } from '@vue/test-utils';

describe('Form 组件', () => {
  it('render', () => {
    // 测试渲染
    const wrapper = mount(Form, {
      slots: {
        default: () =>
          h(
            FormItem,
            {
              label: 'Name',
              prop: 'name'
            },
            () => h(Input)
          )
      }
    });
    // 断言是否渲染成功
    expect(() => wrapper.get('.qf-form-item')).not.toThrow();
    // 断言label是否包含'Name'
    expect(wrapper.get('.qf-form-item label').text()).toContain('Name');
    // 断言是否渲染成功
    expect(() => wrapper.get('.qf-input')).not.toThrow();
  });

  it('label width from form', () => {
    // 测试从form组件设置label宽度
    const wrapper = mount(Form, {
      props: {
        labelWidth: 50
      },
      slots: {
        default: () =>
          h(FormItem, {
            label: 'Name',
            prop: 'name'
          })
      }
    });
    // 断言label的宽度是否为50px
    expect(wrapper.get('.qf-form-item label').attributes().style).toContain(
      'width: 50px'
    );
  });

  it('label width from form-item', () => {
    // 测试从form-item组件设置label宽度
    const wrapper = mount(Form, {
      props: {
        labelWidth: 50
      },
      slots: {
        default: () =>
          h(
            FormItem,
            {
              label: 'Name',
              prop: 'name',
              labelWidth: 100
            },
            () => h(Input)
          )
      }
    });
    // 断言label的宽度是否为100px
    expect(wrapper.get('.qf-form-item label').attributes().style).toContain(
      'width: 100px'
    );
  });

  it('validate', async () => {
    // 测试验证
    const model = reactive({
      name: ''
    });
    const wrapper = mount(Form, {
      props: {
        rules: {
          name: {
            type: 'string',
            required: true,
            message: '请输入name'
          }
        },
        model
      },
      slots: {
        default: () =>
          h(
            FormItem,
            {
              label: 'Name',
              prop: 'name',
              labelWidth: 100
            },
            () => h(Input)
          )
      }
    });

    // 断言验证失败时是否返回正确的错误消息
    expect(wrapper.vm.validate()).rejects.toEqual({
      name: '请输入name'
    });

    model.name = 'qf-test';
    // 断言验证成功时是否返回true
    expect(wrapper.vm.validate()).resolves.toBe(true);
  });
});
