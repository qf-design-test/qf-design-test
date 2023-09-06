import DefaultTheme from "vitepress/theme";
import qfDesignTest from "qf-design-test";
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }: any) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.use(qfDesignTest);
  },
};
