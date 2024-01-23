import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Transfer from './transfer.vue';

describe('Transfer 组件', () => {
  it('action disable', () => {
    const wrapper = mount(Transfer, {
      props: {
        data: [
          {
            key: '1',
            label: '选项1'
          }
        ]
      }
    });
    const btns = wrapper.findAllComponents({
      name: 'qf-button'
    });
    btns.forEach((b) => {
      expect(b.props('disabled')).toBe(true);
    });
  });

  it('transfer', async () => {
    const wrapper = mount(Transfer, {
      props: {
        data: [
          {
            key: '1',
            label: '选项1'
          }
        ]
      }
    });
    wrapper.findComponent({ name: 'qf-checkbox' }).vm.$emit('change', true);
    const btns = wrapper.findAllComponents({ name: 'qf-button' });
    const ltrBtn = btns[1];
    ltrBtn.vm.$emit('click');
    expect(wrapper.emitted().change[0]).toEqual([
      [
        {
          key: '1',
          label: '选项1'
        }
      ]
    ]);
  });

  it('disabled', async () => {
    const wrapper = mount(Transfer, {
      props: {
        data: [
          {
            key: '1',
            label: '选项1',
            disabled: true
          }
        ]
      }
    });
    expect(
      wrapper.findComponent({ name: 'qf-checkbox' }).props('disabled')
    ).toBe(true);
  });
});
