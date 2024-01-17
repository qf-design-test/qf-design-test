import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Tabs from './tabs.vue';

describe('Tabs 组件', () => {
  // 检测tabs组件是否正常创建
  it('create', () => {
    const wrapper = mount(Tabs, {
      props: {
        data: [
          {
            label: 'tab1',
            value: 1
          }
        ],
        width: 300
      }
    });
    expect(wrapper.classes()).toContain('qf-tabs');
    expect(wrapper.text()).toContain('tab1');
  });
});
