<template>
  <div class="qf-dropdown">
    <div
      @click="clickHandler"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
      ref="anchor"
    >
      <slot />
    </div>
    <transition name="qf-dropdown-fade">
      <div
        :style="style"
        v-show="visible"
        class="qf-dropdown__menus"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
      >
        <nav ref="menuRef">
          <li
            v-for="item in menus"
            :key="item.key"
            @click="itemClick(item.value)"
            :class="[
              'qf-dropdown__item',
              item.disabled ? 'qf-dropdown__item--disabled' : ''
            ]"
          >
            {{ item.label }}
          </li>
        </nav>
      </div>
    </transition>
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
  trigger: 'hover',
  hideOnClick: true
});
const anchor = ref();
const menuRef = ref();
const emit = defineEmits(['select']);

const { menus, clickHandler, onMouseLeave, onMouseEnter, visible, style, itemClick, computeStyle } =
  useDropdown(props, anchor, menuRef, emit);

console.log('menus', menus);
</script>
