// 实现v-model
// 1. v-model
// 禁用
// 前后插槽
// closeable

import { computed, onMounted, Ref, watch, ref } from 'vue';
import { InputProps } from './input';

export const useInput = (
  props: InputProps,
  model: Ref<string>,
  emit: (event: 'focus' | 'blur' | 'change', ...args: any[]) => void
) => {
  const { disabled, closable } = props;
  const selfModel = ref('');
  const isFocus = ref(false);

  onMounted(() => {
    selfModel.value = model.value;
  });

  watch(selfModel, (val: string) => {
    model.value = val;
    emit('change', val);
  });

  const classList = computed(() => {
    return [
      'qf-input',
      disabled ? 'qf-input--disabled' : '',
      isFocus.value ? 'qf-input--focus' : ''
    ];
  });

  const onClose = () => {
    selfModel.value = '';
  };

  const onFocus = () => {
    isFocus.value = true;
    emit('focus');
  };

  const onBlur = () => {
    isFocus.value = true;
    emit('blur');
  };

  return {
    closable,
    disabled,
    onClose,
    selfModel,
    classList,
    onFocus,
    onBlur
  };
};
