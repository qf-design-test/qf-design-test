import { DefaultTheme } from "vitepress";

export const zh: DefaultTheme.NavItem[] = [
  {
    text: '指南',
    // link: '/guide/introduce',
    activeMatch: '/guide/',
    items: [
      {
        text: '主题色',
        link: '/guide/theme',
        activeMatch: '/guide'
      }
    ]
  },
  {
    text: '组件',
    link: '/component/button/index',
    activeMatch: '/component/'
  },
  {
    text: '资源',
    link: '/resource/index',
    activeMatch: '/resource/'
  }
];
