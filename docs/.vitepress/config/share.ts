import {
  containerPreview,
  componentPreview
} from '@vitepress-demo-preview/plugin';
// import { defineConfig } from 'vitepress';

export default {
  base: process.env.NODE_ENV === 'production' ? '/qf-design-test/' : '/',
  title: 'Qf Design',
  head: [
    // 添加以下行来配置网站图标
    ['link', { rel: 'icon', href: '/logo.ico' }] // 修改路径为你的图标文件路径
  ],
  themeConfig: {
    logo: '/logo2.png',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/qf-design-test/qf-design-test'
      }
    ],
    // 搜索
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present wangkai'
    }
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    }
  }
};
