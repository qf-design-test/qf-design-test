import {ref, computed, Ref, watch, nextTick} from 'vue';
import { DropdownProps } from './dropdown';
import { useZIndex } from '../../utils';

export const useDropdown = (
  props: DropdownProps,
  anchor: Ref<HTMLElement>,
  menuRef: Ref<HTMLElement>,
  emit: (event: 'select', ...args) => void
) => {
  const visible = ref(false);
  const style = ref({});
  const computeStyle = () => {
    if (!anchor.value && !visible.value) return {};
    const { bottom, left, width } = anchor.value.getBoundingClientRect();
    const { width: menuWidth } = menuRef.value.getBoundingClientRect();
    style.value = {
      zIndex: useZIndex(),
      top: `${bottom + 6}px`,
      left: `${left + width / 2 - menuWidth / 2}px`
    };
  };

  watch(visible, () => {
    nextTick(computeStyle)
  });

  const toggle = () => {
    visible.value = !visible.value;
  };

  const onMouseEnter = () => {
    if (props.trigger === 'hover' && !visible.value) {
      visible.value = true;
    }
  };

  const onMouseLeave = () => {
    if (props.trigger === 'hover' && visible.value) {
      visible.value = false;
    }
  };

  const clickHandler = () => {
    if (props.trigger === 'click') {
      toggle();
    }
  };

  const itemClick = (value) => {
    emit('select', value);
    if (props.hideOnClick) {
      toggle();
    }
  };

  const menus = computed(() => props.data);

  return {
    visible,
    onMouseEnter,
    onMouseLeave,
    clickHandler,
    menus,
    style,
    itemClick,
    computeStyle
  };
};
