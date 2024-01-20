import { App } from 'vue';
import {
  Button,
  Tabs,
  Row,
  Col,
  Checkbox,
  Dialog,
  Slider,
  Message
} from './src';

const components = [Button, Tabs, Row, Col, Checkbox, Dialog, Slider, Message];

export { Button, Tabs, Row, Col, Checkbox, Dialog, Slider, Message };
export default {
  install: (app: App) => {
    for (const c in components) {
      app.use((components as any)[c]);
    }
  }
};
