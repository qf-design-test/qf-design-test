import { describe, expect, it } from 'vitest';
import Row from './row.vue';
import { mount } from '@vue/test-utils';

describe('Row 组件', () => {
  // 检测是否渲染成功
  it('create', () => {
    const wrapper = mount(Row);
    expect(wrapper.classes()).toContain('qf-row');
  });

  it('gutter', () => {
    // 检测gutter样式是否正确生成
    const wrapper = mount(Row, {
      props: {
        gutter: 10
      }
    });
    expect(wrapper.attributes('style')).toBe(
      'margin-left: -5px; margin-right: -5px;'
    );
  });
});
