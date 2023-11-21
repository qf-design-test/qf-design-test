import type { DefaultTheme } from 'vitepress';

export const en: DefaultTheme.Sidebar = {
  '/en/guide/': [
    {
      text: 'Basics',
      items: [
        {
          text: 'introduce',
          link: '/en/guide/introduce'
        },
        {
          text: 'Navigation',
          link: '/en/guide/nav'
        },
        {
          text: 'Installation',
          link: '/en/guide/installation'
        },
        {
          text: 'Quick Start',
          link: '/en/guide/quickstart'
        }
      ]
    },
    {
      text: 'Advanced',
      items: [
        {
          text: 'i18n',
          link: '/en/guide/i18n'
        },
        {
          text: 'Theming',
          link: '/en/guide/theming'
        },
        {
          text: 'SSR',
          link: '/en/guide/ssr'
        }
      ]
    },
    {
      text: 'Development',
      items: [
        {
          text: 'Development Guide',
          link: '/en/guide/dev-guide'
        },
        {
          text: 'Development FAQ',
          link: '/en/guide/dev-faq'
        },
        {
          text: 'Contact Us',
          link: '/en/guide/commit-examples'
        }
      ]
    }
  ],
  '/en/component/': [
    {
      text: 'Basics Component',
      items: [
        {
          text: 'Button',
          link: '/en/component/button'
        }
      ]
    },
    {
      text: 'Form',
      items: [
        {
          text: 'Input',
          link: '/en/component/input'
        }
      ]
    },
    {
      text: 'Data',
      items: [
        {
          text: 'Card',
          link: '/en/component/button'
        }
      ]
    },
    {
      text: 'Navigation',
      items: [
        {
          text: 'Tabs',
          link: '/en/component/tabs'
        }
      ]
    },
    {
      text: 'Feedback',
      items: [
        {
          text: 'Message',
          link: '/en/component/button'
        }
      ]
    },
    {
      text: 'other'
    }
  ]
};
