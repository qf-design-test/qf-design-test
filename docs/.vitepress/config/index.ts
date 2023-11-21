import { enConfig } from './en';
// import { uzConfig } from './uz';
import { zhConfig } from './zh'
import shareConfig from './share';

export default {
  ...shareConfig,
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      ...zhConfig
    },
    en: {
      label: 'English',
      lang: 'en-US',
      ...enConfig
    },
    // ja: { label: '日本語' },
    // es: { label: 'Español' },
    // pt: { label: 'Português' },
    // ko: { label: '한국어' }
  }
};
