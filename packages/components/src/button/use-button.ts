import { computed } from 'vue';
import { ButtonProps } from './button';

export const useButton = (props: ButtonProps) => {
  // 兼容html
  const _props = computed(() => {
    return {
      ariaDisabled: props.disabled,
      disabled: props.disabled
    };
  });

  return {
    _props
  };
};
