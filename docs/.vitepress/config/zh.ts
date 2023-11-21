import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress';
import { zh as nav } from './navbar';
import { zh as sidebar } from './sidebar';

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    nav,
    sidebar,
  },
};
