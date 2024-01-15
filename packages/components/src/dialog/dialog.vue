<template>
  <div :class="classList">
    <transition name="fade">
      <div class="qf-dialog__overlay" :style="overlayStyle" v-show="visible">
        <div class="qf-dialog__header">
          <h3 class="qf-dialog__title">{{ title }}</h3>
        </div>
        <div class="qf-dialog__content">
          <slot />
        </div>
        <div class="qf-dialog__footer">
          <qf-button type="primary" @click="handleOk">确认</qf-button>
          <qf-button @click="handleCancel">取消</qf-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue';
import type { DialogProps } from './dialog';
import { useZIndex } from '../../utils';
import QfButton from '../button';

defineOptions({
  name: 'qf-dialog'
});

const emit = defineEmits(['ok', 'cancel']);

const props = defineProps<DialogProps>();
const zIndex = useZIndex();
const hasRendered = ref(false);

const classList = computed(() => ['qf-dialog']);
const overlayStyle = computed(() => {
  return {
    zIndex
  };
});
const visible = computed(() => props.visible);

onMounted(() => {
  if (props.visible) {
    hasRendered.value = true;
  }
});

watch(
  () => props.visible,
  (val: boolean) => {
    console.log('visibel val', val);
    if (val) {
      hasRendered.value = true;
    }
  }
);

const handleOk = () => {
  emit('ok');
};

const handleCancel = () => {
  emit('cancel');
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
