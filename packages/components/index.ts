import { App } from 'vue';
import {
  Button,
  Tabs,
  Row,
  Col,
  Checkbox,
  Dialog,
  Slider,
  Message,
  Input
} from './src';

const components = [
  Button,
  Tabs,
  Row,
  Col,
  Checkbox,
  Dialog,
  Slider,
  Message,
  Input
];

export { Button, Tabs, Row, Col, Checkbox, Dialog, Slider, Message, Input };
export default {
  install: (app: App) => {
    for (const c in components) {
      app.use((components as any)[c]);
    }
  }
};
