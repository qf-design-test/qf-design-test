<template>
  <qf-upload
    :action="handleUpload"
    v-model="fileList"
    :maxFiles="2"
    @exceed="handleExceed"
    multiple
  >
    <qf-button>点击上传</qf-button>
  </qf-upload>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue';
import { Message } from 'qf-design-test';

const handleUpload = async ({ file }) => {
  return Promise.resolve({
    // 用随机数代替文件id
    id: Math.floor(Math.random() * 10000),
    // 文件名称
    name: file.name
  });
};

const fileList = shallowRef([]);
const handleExceed = () => {
  Message.warning({
    message: '超过最大上传个数'
  });
};
</script>
