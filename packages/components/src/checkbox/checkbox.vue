<template>
  <div :class="classList" @click="handleUpdate">
    <span class="qf-checkbox__inner" />
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { computed, inject, ref, nextTick } from 'vue';
import { CheckboxProps, checkboxContextKey } from './checkbox';

defineOptions({
  name: 'qf-checkbox'
});

const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: undefined
});

const emit = defineEmits(['change', 'update:modelValue']);

const checkboxContext = inject(checkboxContextKey, undefined);
const isGroup = computed(() => checkboxContext !== undefined);
const selfModel = ref(false);

const model = computed({
  get() {
    if (isGroup.value) {
      return checkboxContext?.modelValue?.value;
    }
    return props.modelValue ?? selfModel.value;
  },
  set(val: boolean) {
    if (isGroup.value) {
      checkboxContext?.changeHandler(props.label);
    } else {
      emit('update:modelValue', val);
      selfModel.value = val;
    }
  }
});

const isDisabled = computed(() => props.disabled);

const isChecked = computed(() => {
  if (Array.isArray(model.value)) {
    return model.value.includes(props.label);
  } else {
    return model.value;
  }
});

const classList = computed(() => {
  return [
    'qf-checkbox',
    props.disabled ? `qf-checkbox--disabled` : '',
    isChecked.value ? `qf-checkbox--checked` : ''
  ];
});

const handleUpdate = async () => {
  if (isDisabled.value) return;
  model.value = !model.value;

  await nextTick();
  emit('change', model.value);
};
</script>
