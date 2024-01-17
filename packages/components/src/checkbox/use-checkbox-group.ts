import { defineModel, provide, computed } from 'vue';
import { CheckboxGroupProps, checkboxContextKey } from './checkbox';

export const useCheckboxGroup = (
  props: CheckboxGroupProps,
  emit: (event: 'change' | 'update:modelvalue', ...args: any[]) => void
) => {
  // 通过defineModel可以获取到 v-model 传递过来的值，并且可以方便地进行更新
  // 参考文档: https://cn.vuejs.org/guide/components/v-model.html#basic-usage
  const model = defineModel<string[]>({
    // 通过这种方式，我们可以定义 v-model 的默认值
    default() {
      return [];
    }
  });

  // 这里定义change事件，
  // 当使用checkbox-group包住checkbox时，checkbox的值变化会触发该事件
  const changeHandler = (val: string) => {
    const modelValue = model.value;
    const index = modelValue.findIndex((v) => v === val);
    // 选中时，将checkbox的label 更新给 v-model
    if (index === -1) {
      modelValue.push(val);
    } else {
      // 处理取消选中情况，将checkbox移除
      modelValue.splice(index, 1);
    }

    // 更新v-model的值，同时触发change事件
    model.value = modelValue;
    emit('change', model.value);
  };

  // 通过provide，进行下发
  // 包括当前选中的值数组、change回调
  provide(checkboxContextKey, {
    modelValue: model,
    changeHandler
  });

  const classList = computed(() => ['qf-checkbox-group']);

  return {
    classList
  };
};
