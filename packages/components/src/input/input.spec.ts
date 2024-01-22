import { describe, it, expect } from 'vitest';
import Input from './input.vue';
import { mount } from '@vue/test-utils';

describe('Input 组件', () => {
  it('v-model', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: '123',
        'onUpdate:modelValue': (val) => {
          wrapper.setProps({
            modelValue: val
          });
        }
      }
    });
    expect(wrapper.classes()).toContain('qf-input');
    await wrapper.find('input').setValue('456');
    expect(wrapper.props('modelValue')).toBe('456');
  });

  it('without v-model', async () => {
    const wrapper = mount(Input);
    expect(wrapper.classes()).toContain('qf-input');
    await wrapper.find('input').setValue('456');
    expect(wrapper.emitted().change[0]).toEqual(['456']);
  });

  it('disabled', async () => {
    const wrapper = mount(Input, {
      props: {
        disabled: true
      }
    });
    expect(wrapper.classes()).toContain('qf-input');
    await wrapper.find('input').setValue('456');
    expect(wrapper.emitted().change).toBeUndefined();
  });

  it('closable', async () => {
    const wrapper = mount(Input, {
      attachTo: document.body,
      props: {
        modelValue: '123',
        closable: true
      }
    });
    await wrapper.find('input').trigger('focus');
    expect(wrapper.get('.qf-input__close').isVisible()).toBe(true);
    await wrapper.get('.qf-input__close').trigger('click');
    expect(wrapper.find('input').element.value).toBe('');
  });
});
