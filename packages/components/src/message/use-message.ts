import { computed, onMounted, Ref, ref } from 'vue';
import { MessageProps, getLastOffset } from './message';
import { useZIndex } from '../../utils';

export const useMessage = (
  props: MessageProps,
  container: Ref<HTMLElement | null>
) => {
  // 定时器
  let timer: ReturnType<typeof setTimeout>;
  const { delay, offset, id, showClose, type } = props;
  const selfVisible = ref(true);

  // 获取上一个消息通知的offset值, 用于计算当前offset值。
  const _offset = computed(() => {
    const lastOffset = getLastOffset(id);
    return lastOffset + offset;
  });

  // 计算消息通知的bottom值, 用于作为下一个弹窗组件的offset计算
  const bottom = computed(() => {
    let height = 0;
    if (container.value) {
      height = container.value.getBoundingClientRect().height;
    }
    return height + _offset.value;
  });

  const starTimer = () => {
    if (delay === 0) return;
    timer = setTimeout(() => {
      selfVisible.value = false;
    }, delay);
  };

  // 渲染后创建定时器(根据外部参数)
  onMounted(() => {
    starTimer();
  });

  // 鼠标移入时清除定时器，鼠标移出时重新计算
  const onMouseEnter = () => {
    if (timer) clearTimeout(timer);
  };

  const onMouseLeave = () => {
    starTimer();
  };

  // 关闭消息通知
  const close = () => {
    selfVisible.value = false;
  };

  // 计算消息通知框的样式，注意使用useZIndex函数, 保证z-index是最高的，这样可以避免被其他组件遮挡。
  const zIndex = useZIndex();
  const msgStyle = computed(() => {
    return {
      top: `${_offset.value}px`,
      zIndex
    };
  });

  const classList = computed(() => {
    return ['qf-message', type ? `qf-message--${type}` : ''];
  });

  return {
    onMouseEnter,
    onMouseLeave,
    selfVisible,
    msgStyle,
    classList,
    close,
    bottom,
    showClose
  };
};
