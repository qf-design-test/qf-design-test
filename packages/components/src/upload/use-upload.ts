import { ref, watch } from 'vue';
import { UploadProps } from './upload';
import { HTMLInputElement } from 'happy-dom';

export const useUpload = (
  props: UploadProps,
  model: Ref<any[]>,
  emit: (event: 'exceed', ...args: any[]) => void,
  inputRef: Ref<HTMLInputElement>
) => {
  const { action, multiple, accept, maxFiles } = props;
  const fileList = ref(props.modelValue);

  // 监听modelValue的变化
  watch(model, (newValue) => {
    fileList.value = newValue;
  });
  const handleFileChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const files = Array.from(input.files);

      if (files.length + fileList.value.length > maxFiles) {
        emit('exceed');
        return;
      }

      uploadFiles(files);
    }
  };

  const uploadFiles = (files: File[]) => {
    files.forEach((file) => {
      const formData = new FormData();
      formData.append('file', file); // 将文件添加到formData中
      action({
        file,
        formData
      })
        .then((fileItem) => {
          fileList.value.push(fileItem);
          model.value = fileList.value;
        })
        .catch(() => {
          emit('error', file);
        });
    });
  };

  const handleClick = () => {
    inputRef.value.value = '';
    inputRef.value.click();
  };

  const removeFile = (file: FileItem) => {
    const index = fileList.value.indexOf(file);
    if (index !== -1) {
      fileList.value.splice(index, 1);
      model.value = fileList.value;
    }
  };

  return {
    multiple,
    accept,
    fileList,
    handleFileChange,
    handleClick,
    removeFile
  };
};
