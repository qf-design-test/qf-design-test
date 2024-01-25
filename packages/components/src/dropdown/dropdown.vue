<template>
  <div class="qf-dropdown">
    <div
      @click="clickHandler"
      @mouseenter="mouseHandler"
      @mouseleave="mouseHandler"
      ref="anchor"
    >
      <slot />
    </div>
    <div :style="style" v-show="visible" class="qf-dropdown__menus">
      <nav>
        <li
          v-for="item in menus"
          :key="item.key"
          @click="emit('select', item.value)"
        >
          {{ item.label }}
        </li>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, ref } from 'vue';
import { DropdownProps } from './dropdown';
import { useDropdown } from './use-dropdown';

defineOptions({
  name: 'qf-dropdown'
});

const props = withDefaults(defineProps<DropdownProps>(), {
  data: () => [],
  trigger: 'hover'
});
const anchor = ref();
const emit = defineEmits(['select']);

const { menus, clickHandler, mouseHandler, visible, style } = useDropdown(
  props,
  anchor
);

console.log('menus', menus);
</script>
