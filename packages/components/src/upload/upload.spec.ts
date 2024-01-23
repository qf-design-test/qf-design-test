import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import Upload from './upload.vue';

// 模拟获取文件的函数
const mockGetFile = (element: HTMLInputElement, files: File[]) =>
  vi.spyOn(element, 'files', 'get').mockImplementation((): any => files);

// 测试 Upload 组件
describe('Upload 组件', () => {
  // 测试上传文件
  it('upload file', async () => {
    const wrapper = mount(Upload, {
      props: {
        // 模拟 action 函数返回的数据
        action: async ({ file }: { file: File }) => {
          return {
            id: 1,
            name: file.name
          };
        }
      }
    });

    const file = new File(['content'], 'test.txt');
    mockGetFile(wrapper.find('input').element, [file]); // 模拟获取文件
    await wrapper.find('input').trigger('change'); // 触发文件改变事件
    expect(wrapper.find('.qf-upload__item:first-child').text()).toContain(
      'test.txt'
    ); // 断言上传的文件是否显示在组件中
  });

  // 测试超过最大文件数限制
  it('maxFiles', async () => {
    const wrapper = mount(Upload, {
      props: {
        // 模拟 action 函数返回的数据
        action: async ({ file }: { file: File }) => {
          return {
            id: Math.floor(Math.random() * 1000),
            name: file.name
          };
        },
        maxFiles: 1 // 设置最大文件数为 1
      }
    });

    const files = [
      new File(['content'], 'test1.txt'),
      new File(['content'], 'test2.txt')
    ];
    mockGetFile(wrapper.find('input').element, files); // 模拟获取文件
    await wrapper.find('input').trigger('change'); // 触发文件改变事件
    expect(wrapper.findAll('.qf-upload__item')).toHaveLength(1); // 断言文件列表中只有一个文件
    expect(wrapper.emitted().exceed).toHaveLength(1); // 断言 exceed 事件被触发
  });
});
