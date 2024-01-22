<template>
  <qf-upload
    :action="handleUpload"
    v-model="fileList"
    accept="image/*"
    multiple
  >
    <qf-button>点击上传</qf-button>
  </qf-upload>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue';

// 将文件转化base64
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>
      resolve(
        reader.result
          .toString()
          .substr(reader.result.toString().indexOf(',') + 1)
      );
    reader.onerror = (error) => reject(error);
  });
}
const handleUpload = async ({ file }) => {
  return fileToBase64(file).then((res) => {
    return {
      // 用随机数代替文件id
      id: Math.floor(Math.random() * 10000),
      // 文件名称
      name: file.name,
      // 文件缩略图
      thumbUrl: `data:image/jpeg;base64,${res}`
    };
  });
};

const fileList = shallowRef([]);
</script>
