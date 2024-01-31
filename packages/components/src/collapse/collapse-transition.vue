<template>
  <transition
    name="collapse"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <slot></slot>
  </transition>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

const dimension = 'height';
const duration = 300;
const easing = 'ease-in-out';

const cachedStyles = ref<any>(null);

const convertToCssProperty = (style: string) => {
  const upperChars = style.match(/([A-Z])/g);

  if (!upperChars) {
    return style;
  }

  for (let i = 0, n = upperChars.length; i < n; i++) {
    style = style.replace(
      new RegExp(upperChars[i]),
      '-' + upperChars[i].toLowerCase()
    );
  }

  if (style.slice(0, 1) === '-') {
    style = style.slice(1);
  }

  return style;
};

const transition = computed(() => {
  let transitions: string[] = [];

  Object.keys(cachedStyles.value).forEach((key) => {
    transitions.push(`${convertToCssProperty(key)} ${duration}ms ${easing}`);
  });

  return transitions.join(', ');
});

const enter = (el: HTMLElement, done: () => void) => {
  detectAndCacheDimensions(el);
  setClosedDimensions(el);
  hideOverflow(el);
  forceRepaint(el);
  setTransition(el);
  setOpenedDimensions(el);
  setTimeout(done, duration);
};

const afterEnter = (el: HTMLElement) => {
  // Clean up inline styles
  unsetOverflow(el);
  unsetTransition(el);
  unsetDimensions(el);
  clearCachedDimensions();
};

const leave = (el: HTMLElement, done: () => void) => {
  detectAndCacheDimensions(el);

  setOpenedDimensions(el);
  hideOverflow(el);
  forceRepaint(el);
  setTransition(el);
  setClosedDimensions(el);

  setTimeout(done, duration);
};

const afterLeave = (el: HTMLElement) => {
  unsetOverflow(el);
  unsetTransition(el);
  unsetDimensions(el);
  clearCachedDimensions();
};

const detectAndCacheDimensions = (el: HTMLElement) => {
  // Cache actual dimensions
  // only once to void invalid values when
  // triggering during a transition
  if (cachedStyles.value) return;

  const visibility = el.style.visibility;
  const display = el.style.display;

  // Trick to get the width and
  // height of a hidden element
  el.style.visibility = 'hidden';
  el.style.display = '';

  cachedStyles.value = detectRelevantDimensions(el);

  // Restore any original styling
  el.style.visibility = visibility;
  el.style.display = display;
};

const clearCachedDimensions = () => {
  cachedStyles.value = null;
};

const detectRelevantDimensions = (el: HTMLElement) => {
  return {
    height: el.offsetHeight + 'px',
    paddingTop: el.style.paddingTop || getCssValue(el, 'padding-top'),
    paddingBottom: el.style.paddingBottom || getCssValue(el, 'padding-bottom')
  };
};

const setTransition = (el: HTMLElement) => {
  el.style.transition = transition.value;
};

const unsetTransition = (el: HTMLElement) => {
  el.style.transition = '';
};

const hideOverflow = (el: HTMLElement) => {
  el.style.overflow = 'hidden';
};

const unsetOverflow = (el: HTMLElement) => {
  el.style.overflow = '';
};

const setClosedDimensions = (el: HTMLElement) => {
  Object.keys(cachedStyles.value).forEach((key: string) => {
    el.style.setProperty(key, '0');
  });
};

const setOpenedDimensions = (el: HTMLElement) => {
  Object.keys(cachedStyles.value).forEach((key: string) => {
    el.style.setProperty(key, cachedStyles.value[key]);
  });
};

const unsetDimensions = (el: HTMLElement) => {
  Object.keys(cachedStyles.value).forEach((key: string) => {
    el.style.setProperty(key, '');
  });
};

const forceRepaint = (el: HTMLElement) => {
  // 强制重绘以确保动画正确触发。
  // 感谢: https://markus.oberlehner.net/blog/transition-to-height-auto-with-vue/
  getComputedStyle(el)[dimension];
};

const getCssValue = (el: HTMLElement, style: string) => {
  return getComputedStyle(el, null).getPropertyValue(style);
};
</script>
