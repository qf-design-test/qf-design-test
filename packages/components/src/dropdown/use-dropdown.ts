import { ref, computed, Ref } from 'vue';
import { DropdownProps } from './dropdown';
import { useZIndex } from '../../utils';

export const useDropdown = (props: DropdownProps, anchor: Ref<HTMLElement>) => {
  const visible = ref(false);

  const toggle = () => (visible.value = !visible.value);

  const mouseHandler = () => {
    if (props.trigger === 'hover') {
      toggle();
    }
  };

  const clickHandler = () => {
    if (props.trigger === 'click') {
      toggle();
    }
  };

  const menus = computed(() => props.data);

  const style = computed(() => {
    if (!anchor.value) return {};
    const { bottom, left } = anchor.value.getBoundingClientRect();

    return {
      zIndex: useZIndex(),
      top: `${bottom + 10}px`,
      left: `${left - 50}px`
    };
  });

  return {
    visible,
    mouseHandler,
    clickHandler,
    menus,
    style
  };
};
