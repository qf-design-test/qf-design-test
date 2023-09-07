import { nav } from "./nav";
import { sidebar } from "./sidebar";
export default {
  title: "Qf Design 官方文档",
  themeConfig: {
    logo: "/logo2.png",
    logoSmall: "logo2.png",
    title: "qf design test",
    nav,
    sidebar,
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/qf-design-test/qf-design-test",
      },
    ],
  },
  locales: {
    zh: { label: "简体中文" },
    root: { label: "English" },
    ja: { label: "日本語" },
    es: { label: "Español" },
    pt: { label: "Português" },
    ko: { label: "한국어" },
  },
  markdown: {
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark",
    },
  },
};
