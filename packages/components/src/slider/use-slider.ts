import { computed, ModelRef, onMounted, ref, Ref } from 'vue';
import { SliderProps } from './slider';

export const useSlider = (
  props: SliderProps,
  model: ModelRef<number, string>,
  container: Ref<null>
) => {
  const percent = ref(0);
  const { min, max, disabled } = props;

  // 挂载时同步modeValue到内部变量，保证v-model不传依然能够正常渲染
  onMounted(() => {
    if (model.value) {
      percent.value = model.value;
    }
  });

  // 获取外层的container ref,用于后续百分比计算
  const containerRect = computed(() => {
    return (container.value as HTMLDivElement).getBoundingClientRect();
  });

  // 计算百分比，需要考虑最大值和最小值的情况
  const convertToPercent = (offsetX: number) => {
    const val = (offsetX / containerRect.value.width) * 100;
    if (val < min) {
      return min;
    } else if (val > max) {
      return max;
    }
    return Math.round(val);
  };

  // 是否为拖动中标识
  let dragging = false;
  // 拖动事件，计算百分比并更新到dom上
  const mousemoveEvent = (event: MouseEvent) => {
    if (!dragging) return;
    const val = convertToPercent(event.clientX - containerRect.value.left);
    if (val < 0 || val > 100) {
      return;
    }
    percent.value = val;
    model.value = val;
  };

  // 鼠标按下事件，按下后绑定 mousemove事件及mouseup事件到 document，同时将拖动标识设为true
  const onMouseDown = () => {
    if (disabled) return;
    dragging = true;
    document.addEventListener('mousemove', mousemoveEvent);
    document.addEventListener('mouseup', onMouseUp);
  };

  // 鼠标释放事件，解除绑定 mousemove事件及mouseup事件，同时将拖动标识设为false
  const onMouseUp = () => {
    if (disabled) return;
    document.removeEventListener('mousemove', mousemoveEvent);
    document.removeEventListener('mouseup', onMouseDown);
    dragging = false;
  };

  // 计算拖动按钮的偏移样式
  const btnStyle = computed(() => {
    return {
      left: `${percent.value}%`
    };
  });

  // 计算进度条的百分比
  const barStyle = computed(() => {
    return {
      width: `${percent.value}%`
    };
  });

  const classList = computed(() => {
    return ['qf-slider', disabled ? `qf-slider--disabled` : ''];
  });

  return {
    onMouseDown,
    onMouseUp,
    btnStyle,
    barStyle,
    classList
  };
};
