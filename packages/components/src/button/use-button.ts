import { computed } from 'vue';
import { ButtonProps } from './button';

export const useButton = (props: ButtonProps) => {
  const { disabled } = props;

  // 兼容html
  const _props = computed(() => {
    return {
      ariaDisabled: disabled,
      disabled: disabled
    };
  });

  return {
    _props
  };
};
