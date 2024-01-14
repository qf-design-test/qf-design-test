import { App } from 'vue';
import { Button, Tabs, Row, Col, Checkbox } from './src';

const components = [Button, Tabs, Row, Col, Checkbox];

export default {
  install: (app: App) => {
    for (const c in components) {
      app.use((components as any)[c]);
    }
  }
};
