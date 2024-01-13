import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Button from './button.vue';

describe('Button组件', () => {
  it('create', () => {
    const wrapper = mount(Button);
    expect(wrapper.classes()).toContain('qf-button');
  });
});
