import { computed, Ref, ref, provide } from 'vue';
import { CollapseContext, CollapseProps } from './collapse';

export const useCollapse = (
  props: CollapseProps,
  model: Ref<string[] | string>,
  emit: (event: 'change', ...args: any[]) => void
) => {
  const selfModel = ref(
    Array.isArray(props.modelValue!) ? props.modelValue! : [props.modelValue!]
  );

  const activeNames = computed(() => selfModel.value);

  const onChange = (name: string) => {
    const index = selfModel.value.indexOf(name);
    if (index !== -1) {
      selfModel.value.splice(index, 1);
    } else {
      if (!props.accordion) {
        selfModel.value.push(name);
      } else {
        selfModel.value = [name];
      }
    }

    const payload = props.accordion ? selfModel.value[0] : selfModel.value;
    model.value = payload;
    emit('change', payload);
  };

  provide(CollapseContext, {
    activeNames,
    onChange
  });
};
