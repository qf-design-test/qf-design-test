<template>
  <qf-upload
    :action="handleUpload"
    v-model="fileList"
    accept="image/*"
    multiple
  >
    <qf-button>点击上传(仅图片)</qf-button>
  </qf-upload>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const handleUpload = async ({ file }) => {
  return Promise.resolve({
    // 用随机数代替文件id
    id: Math.floor(Math.random() * 10000),
    // 文件名称
    name: file.name
  });
};

const fileList = ref([]);
</script>
