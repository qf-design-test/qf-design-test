import { App } from 'vue';
import { Button, Tabs, Row, Col } from './src';

const components = [Button, Tabs, Row, Col];

export default {
  install: (app: App) => {
    for (const c in components) {
      app.use((components as any)[c]);
    }
  }
};
