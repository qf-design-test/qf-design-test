import { describe, expect, it } from 'vitest';
import Collapse from './collapse.vue';
import CollapseItem from './collapse-item.vue';
import { mount } from '@vue/test-utils';
import { h } from 'vue';

describe('collapse组件', () => {
  it('v-model', async () => {
    const wrapper = mount(Collapse, {
      props: {
        modelValue: [],
        'onUpdate:modelValue': (val: string[]) => {
          wrapper.setProps({
            modelValue: val
          });
        }
      },
      slots: {
        default: [
          h(CollapseItem, {
            title: '选项1',
            name: '1'
          }),
          h(CollapseItem, {
            title: '选项1',
            name: '2'
          })
        ]
      }
    });

    const titles = wrapper.findAll('.qf-collapse-item__title');
    await titles[0].trigger('click');
    expect(wrapper.props('modelValue')).toEqual(['1']);
    await titles[1].trigger('click');
    expect(wrapper.props('modelValue')).toEqual(['1', '2']);
  });

  it('accordion', async () => {
    const wrapper = mount(Collapse, {
      props: {
        modelValue: '1',
        accordion: true,
        'onUpdate:modelValue': (val: string[] | string) => {
          wrapper.setProps({
            modelValue: val
          });
        }
      },
      slots: {
        default: [
          h(CollapseItem, {
            title: '选项1',
            name: '1'
          }),
          h(CollapseItem, {
            title: '选项1',
            name: '2'
          })
        ]
      }
    });

    const titles = wrapper.findAll('.qf-collapse-item__title');
    await titles[0].trigger('click');
    expect(wrapper.props('modelValue')).toEqual('1');
    await titles[1].trigger('click');
    expect(wrapper.props('modelValue')).toEqual('2');
  });
});
