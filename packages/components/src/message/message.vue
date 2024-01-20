<template>
  <teleport to="body">
    <transition
      name="qf-message-fade"
      @before-leave="emit('close')"
      @after-leave="emit('destroy')"
    >
      <div
        ref="container"
        v-show="selfVisible"
        :id="id"
        :class="classList"
        :style="msgStyle"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
      >
        <div class="qf-message__content">
          <slot />
        </div>
        <div v-if="showClose" class="qf-message__close" @click.stop="close">
          关闭按钮
        </div>
      </div>
    </transition>
  </teleport>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { MessageProps } from './message';
import { useMessage } from './use-message';

defineOptions({
  name: 'qf-message'
});

const props = withDefaults(defineProps<MessageProps>(), {
  delay: 2000,
  offset: 12,
  appendTo: 'body',
  showClose: false
});

const emit = defineEmits(['close', 'destroy']);

const container = ref();

const {
  selfVisible,
  onMouseEnter,
  onMouseLeave,
  msgStyle,
  close,
  bottom,
  classList,
  showClose
} = useMessage(props, container);

defineExpose({
  selfVisible,
  bottom
});
</script>
