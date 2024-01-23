import { describe, it, expect } from 'vitest';
import Card from './card.vue';
import { mount } from '@vue/test-utils';

describe('Card 卡片', function () {
  it('header & footer', () => {
    const wrapper = mount(Card, {
      slots: {
        header: 'header',
        footer: 'footer'
      }
    });
    expect(wrapper.find('.qf-card__header').text()).toBe('header');
    expect(wrapper.find('.qf-card__footer').text()).toBe('footer');
  });

  it('shadow type', async () => {
    const wrapper = mount(Card, {
      props: {
        shadowType: 'never'
      }
    });
    expect(wrapper.classes()).toContain('qf-card--never');
    await wrapper.setProps({
      shadowType: 'hover'
    });
    expect(wrapper.classes()).toContain('qf-card--hover');
  });
});
