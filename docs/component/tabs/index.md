# Tabs 标签页

## 基础用法

基础的、简洁的标签页。
Tabs 组件提供了选项卡功能， 默认选中第一个标签页。
可以通 <code>v-model:active</code> 进行双向绑定

<div class="example">
  <!-- <qf-tabs :data="[{label: '标签页1', value: "1"}, {label: '标签页2', value: "2"}]" :width="300">默认按钮</qf-tabs> -->
</div>

```vue
<template>
  <div>
    <qf-tabs
      :data="[
        { label: '标签1', value: '1' },
        { label: '标签2', value: '2' }
      ]"
      :width="300"
      v-model:activeKey="num"
    ></qf-tabs>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';

  const num = ref('1');
</script>
```

## 字段说明

| 参数    | 说明   | 类型    | 可选值                                             | 默认值  |
| ------- | ------ | ------- | -------------------------------------------------- | ------- |
| size    | 尺寸   | string  | large / small / mini                               | default |
| type    | 类型   | string  | primary / success / warning / info / danger / text | primary |
| loading | 加载中 | boolean | —                                                  | false   |
