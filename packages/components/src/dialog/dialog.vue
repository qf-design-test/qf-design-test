<template>
  <div :class="classList">
    <transition name="qf-dialog-fade">
      <div
        class="qf-dialog__overlay"
        :style="overlayStyle"
        v-show="visible"
        @click.self="handleMaskClick"
      >
        <div class="qf-dialog__wrapper">
          <div class="qf-dialog__header">
            <h4 class="qf-dialog__title">{{ title }}</h4>
          </div>
          <div class="qf-dialog__content">
            <slot />
          </div>
          <div class="qf-dialog__footer">
            <qf-button type="primary" @click="handleOk">确认</qf-button>
            <qf-button @click="handleCancel">取消</qf-button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import type { DialogProps } from './dialog';
import QfButton from '../button';
import { useDialog } from './use-dialog';

defineOptions({
  name: 'qf-dialog'
});

const emit = defineEmits(['onOk', 'onCancel', 'update:visible']);

const props = withDefaults(defineProps<DialogProps>(), {
  visible: false,
  closeOnClickMask: true
});

const {
  classList,
  overlayStyle,
  handleOk,
  handleCancel,
  visible,
  handleMaskClick
} = useDialog(props, emit);
</script>
