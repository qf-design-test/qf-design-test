import { ref, watch, Ref } from 'vue';
import { UploadProps, FileItem } from './upload';

/**
 * useUpload 自定义 hook，用于处理上传组件的逻辑
 * @param props - 上传组件的属性
 * @param model - 绑定的 model 数据
 * @param emit - 事件触发函数
 * @param inputRef - 输入框的引用
 * @returns 返回上传组件的相关逻辑和数据
 */
export const useUpload = (
  props: UploadProps, // 上传组件的属性
  model: Ref<any[]>, // 绑定的 model 数据
  emit: (event: 'exceed' | 'error', ...args: any[]) => void, // 事件触发函数
  inputRef: Ref<HTMLInputElement> // 输入框的引用
) => {
  const { action, multiple, accept, maxFiles } = props; // 从属性中解构需要的值
  const fileList = ref(props.modelValue); // 使用 ref 创建响应式的 fileList

  // 监听 modelValue 的变化
  watch(model, (newValue) => {
    fileList.value = newValue; // 当 modelValue 变化时更新 fileList
  });

  /**
   * 处理文件改变事件
   * @param event - 事件对象
   */
  const handleFileChange = (event: Event) => {
    const input = event.target as HTMLInputElement; // 将事件目标转换为 HTMLInputElement
    if (input.files) {
      const files = Array.from(input.files); // 将 FileList 转换为数组

      if (maxFiles && files.length + fileList.value.length > maxFiles) {
        emit('exceed'); // 触发 exceed 事件
        return;
      }

      uploadFiles(files); // 上传文件
    }
  };

  /**
   * 上传文件
   * @param files - 要上传的文件列表
   */
  const uploadFiles = (files: File[]) => {
    files.forEach((file) => {
      const formData = new FormData(); // 创建 FormData 对象
      formData.append('file', file); // 将文件添加到 formData 中
      action({
        file,
        formData
      })
        .then((fileItem) => {
          fileList.value.push(fileItem); // 将上传成功的文件添加到 fileList
          model.value = fileList.value; // 更新 model 数据
        })
        .catch(() => {
          emit('error', file); // 触发 error 事件
        });
    });
  };

  /**
   * 处理点击事件
   */
  const handleClick = () => {
    inputRef.value.value = ''; // 清空输入框的值
    inputRef.value.click(); // 触发点击事件
  };

  /**
   * 移除文件
   * @param file - 要移除的文件
   */
  const removeFile = (file: FileItem) => {
    const index = fileList.value.indexOf(file); // 获取要移除文件的索引
    if (index !== -1) {
      fileList.value.splice(index, 1); // 从 fileList 中移除文件
      model.value = fileList.value; // 更新 model 数据
    }
  };

  return {
    multiple, // 是否支持多文件上传
    accept, // 接受的文件类型
    fileList, // 文件列表
    handleFileChange, // 处理文件改变事件的函数
    handleClick, // 处理点击事件的函数
    removeFile // 移除文件的函数
  };
};
