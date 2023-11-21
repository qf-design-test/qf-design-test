import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress';
import { en as nav } from './navbar';
import { en as sidebar } from './sidebar';

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    nav,
    sidebar,
  },
};
