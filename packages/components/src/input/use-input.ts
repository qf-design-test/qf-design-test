import { computed, onMounted, Ref, watch, ref } from 'vue';
import { InputProps } from './input';

export const useInput = (
  props: InputProps, // 输入框组件的属性
  model: Ref<string>, // 输入框的 v-model 绑定值
  emit: (event: 'focus' | 'blur' | 'change', ...args: any[]) => void // 用于触发事件的函数
) => {
  const { disabled, closable } = props; // 从属性中获取禁用和可关闭的状态
  const selfModel = ref(''); // 内部维护的输入框值
  const isFocus = ref(false); // 是否获得焦点的状态

  onMounted(() => {
    selfModel.value = model.value; // 在组件挂载后，将内部维护的输入框值初始化为 v-model 绑定的值
  });

  watch(selfModel, (val: string) => {
    model.value = val; // 监听内部维护的输入框值变化，并同步到 v-model 绑定的值
    emit('change', val); // 触发 change 事件，通知父组件输入框值发生变化
  });

  const classList = computed(() => {
    return [
      'qf-input', // 输入框的基础样式
      disabled ? 'qf-input--disabled' : '', // 如果输入框被禁用，则添加禁用样式
      isFocus.value ? 'qf-input--focus' : '' // 如果输入框获得焦点，则添加焦点样式
    ];
  });

  const onClose = () => {
    selfModel.value = ''; // 点击关闭按钮时，清空输入框的值
  };

  const onFocus = () => {
    isFocus.value = true; // 输入框获得焦点时，更新焦点状态为 true
    emit('focus'); // 触发 focus 事件，通知父组件输入框获得焦点
  };

  const onBlur = () => {
    isFocus.value = false; // 输入框失去焦点时，更新焦点状态为 false
    emit('blur'); // 触发 blur 事件，通知父组件输入框失去焦点
  };

  return {
    closable, // 是否可关闭
    disabled, // 是否禁用
    onClose, // 关闭按钮点击事件处理函数
    selfModel, // 内部维护的输入框值
    classList, // 计算后的输入框样式列表
    onFocus, // 输入框获得焦点事件处理函数
    onBlur // 输入框失去焦点事件处理函数
  };
};
