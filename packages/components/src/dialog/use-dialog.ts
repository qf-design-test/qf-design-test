import { useZIndex } from '../../utils';
import { computed, onMounted, ref, watch } from 'vue';
import { DialogProps } from './dialog';

export const useDialog = (
  props: DialogProps,
  emit: (event: 'onOk' | 'onCancel' | 'update:visible', ...args: any[]) => void
) => {
  // useZIndex返回当前的index层级，主要是为了所有用到z-index的组件不会因为层级问题而相互覆盖
  const zIndex = useZIndex();
  const hasRendered = ref(false);
  const selfVisible = ref(false);

  const classList = computed(() => ['qf-dialog']);
  const overlayStyle = computed(() => {
    return {
      zIndex
    };
  });

  const visible = computed(() => props.visible ?? selfVisible);

  // 挂载的时候，需要检测 visible是否为true，是的话 就直接显示弹窗
  onMounted(() => {
    if (props.visible) {
      selfVisible.value = true;
      hasRendered.value = true;
    }
  });

  // 更新visible的值
  watch(
    () => props.visible,
    (val: boolean) => {
      if (val) {
        hasRendered.value = true;
      }
      selfVisible.value = val;
      // 触发更新visible事件
      emit('update:visible', val);
    }
  );

  // 触发 onOk 事件
  const handleOk = () => {
    emit('onOk');
  };

  // 触发 onCancel 事件
  const handleCancel = () => {
    emit('onCancel');
  };

  // 蒙层点击事件，当closeOnClickMask为false的时候，不关闭弹窗，否则关闭弹窗。
  const handleMaskClick = () => {
    if (!props.closeOnClickMask) return;
    emit('update:visible', false);
  };

  return {
    handleCancel,
    handleOk,
    handleMaskClick,
    visible,
    classList,
    overlayStyle
  };
};
