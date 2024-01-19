<template>
  <div ref="container" class="theme-container">
    <qf-button @click="toggleTheme">切换主题色</qf-button>
    <p>
      <qf-tabs
        :data="[
          { label: '标签1', value: '1' },
          { label: '标签2', value: '2' },
          { label: '标签3', value: '3' },
          { label: '标签4', value: '4' }
        ]"
        :width="300"
      ></qf-tabs>
    </p>
    <p>
      <qf-checkbox-group v-model="checkedList">
        <qf-checkbox label="option1"> 选项1 </qf-checkbox>
        <qf-checkbox label="option2"> 选项2 </qf-checkbox>
      </qf-checkbox-group>
    </p>

    <p>
      <qf-slider v-model="percent">
      </qf-slider>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const container = ref();

const checkedList = reactive(['option1']);

const percent = ref(30);

function setCssVar(prop, val, dom) {
  dom.style.setProperty(prop, val);
}

function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgba(${r}, ${g}, ${b}, 0.8)`;
}

function toggleTheme() {
  const color = randomColor();
  setCssVar('--primary-color', color, container.value);
  setCssVar('--active-bg-color', color, container.value);
  setCssVar('--checkbox-checked-color', color, container.value);
}
</script>


<style>
.theme-container p {
  margin-top: 40px;
}
</style>
