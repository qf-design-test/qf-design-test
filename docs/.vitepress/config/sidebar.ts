const getSidebar = () => {
  return {
    "/guide/": [
      {
        text: "基础",
        items: [
          {
            text: "介绍",
            link: "/guide/introduce",
          },
          {
            text: "导航",
            link: "/guide/nav",
          },
          {
            text: "安装",
            link: "/guide/installation",
          },
          {
            text: "快速开始",
            link: "/guide/quickstart",
          },
        ],
      },
      {
        text: "进阶",
        items: [
          {
            text: "国际化",
            link: "/guide/i18n",
          },
          {
            text: "主题",
            link: "/guide/theming",
          },
          {
            text: "SSR",
            link: "/guide/ssr",
          },
        ],
      },
      {
        text: "开发",
        items: [
          {
            text: "开发指南",
            link: "/guide/dev-guide",
          },
          {
            text: "开发常见问题",
            link: "/guide/dev-faq",
          },
          {
            text: "联系我们",
            link: "/guide/commit-examples",
          },
        ],
      },
    ],
    "/component/": [
      {
        text: "基础组件",
        items: [
          {
            text: "Button 按钮",
            link: "/component/button/index",
          },
        ],
      },
      {
        text: "表单组件",
        items: [
          {
            text: "Input 输入框",
            link: "/component/input",
          },
        ],
      },
      {
        text: "数据展示",
        items: [
          {
            text: "Card 卡片",
            link: "/component/button",
          },
        ],
      },
      {
        text: "导航栏",
        items: [
          {
            text: "Tabs 标签页",
            link: "/component/tabs/index",
          },
        ],
      },
      {
        text: "反馈组件",
        items: [
          {
            text: "Message 消息提示",
            link: "/component/button",
          },
        ],
      },
      {
        text: "其它",
      },
    ]
  };
};

export const sidebar = getSidebar();