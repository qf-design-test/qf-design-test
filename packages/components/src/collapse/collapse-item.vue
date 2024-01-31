<template>
  <div :class="cls">
    <div @click="onChange(name)" class="qf-collapse-item__title">
      <h4>{{ title }}</h4>
      <i class="qf-collapse-item__icon">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 7L10 12L15 17"
            stroke="#333"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </i>
    </div>
    <collapse-transition>
      <div v-show="isActive" class="qf-collapse-item__content">
        <slot />
      </div>
    </collapse-transition>
  </div>
</template>

<script setup lang="ts">
import { CollapseItemProps } from './collapse';
import CollapseTransition from './collapse-transition.vue';
import { useCollapseItem } from './use-collapse-item';

defineOptions({
  name: 'qf-collapse-item'
});

const props = withDefaults(defineProps<CollapseItemProps>(), {
  name: '',
  title: ''
});
const { name, title } = props;
const { onChange, isActive, cls } = useCollapseItem(props);
</script>
