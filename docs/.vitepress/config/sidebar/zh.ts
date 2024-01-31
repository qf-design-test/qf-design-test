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
    activeMatch: '/component/',
    items: [
      {
        text: 'Button 按钮',
        link: '/component/button/index'
      },
      {
        text: 'Input 输入框',
        link: '/component/input/index'
      },
      {
        text: 'Switch 开关',
        link: '/component/switch/index'
      },
      {
        text: 'Tabs 标签页',
        link: '/component/tabs/index'
      },
      {
        text: 'Transfer 穿梭框',
        link: '/component/transfer/index'
      },
      {
        text: 'Layout 布局',
        link: '/component/layout/index'
      },
      {
        text: 'Card 卡片',
        link: '/component/card/index'
      },
      {
        text: 'Checkbox 多选框',
        link: '/component/checkbox/index'
      },
      {
        text: 'Carousel 跑马灯',
        link: '/component/carousel/index'
      },
      {
        text: 'Upload 上传组件',
        link: '/component/upload/index'
      },
      {
        text: 'Dialog 对话框',
        link: '/component/dialog/index'
      },
      {
        text: 'Dropdown 下拉菜单',
        link: '/component/dropdown/index'
      },
      {
        text: 'Slider 滑块',
        link: '/component/slider/index'
      },
      {
        text: 'Collapse 折叠面板',
        link: '/component/collapse/index'
      },
      {
        text: 'Message 消息通知',
        link: '/component/message/index'
      }
    ]
  },
  {
    text: '资源',
    link: '/resource/index',
    activeMatch: '/resource/'
  }
];
