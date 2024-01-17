import { App } from 'vue';
import { Button, Tabs, Row, Col, Checkbox, Dialog } from './src';

const components = [Button, Tabs, Row, Col, Checkbox, Dialog];

export default {
  install: (app: App) => {
    for (const c in components) {
      app.use((components as any)[c]);
    }
  }
};
