import { App } from 'vue';
// import * as components from "./src";
// export * from "./src";
import { Button, Tabs } from './src';

const components = [Button, Tabs];

export default {
  install: (app: App) => {
    for (const c in components) {
      app.use((components as any)[c]);
    }
  }
};
