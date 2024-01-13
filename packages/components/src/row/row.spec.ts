import { describe, expect, it } from 'vitest';
import Row from './row.vue';
import { mount } from '@vue/test-utils';

describe('Row 组件', () => {
  it('create', () => {
    const wrapper = mount(Row);
    expect(wrapper.classes()).toContain('qf-row');
  });

  it('gutter', () => {
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
