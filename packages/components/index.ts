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
  Input,
  Upload,
  Switch,
  Transfer,
  Card,
  Carousel,
  Dropdown
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
  Input,
  Upload,
  Switch,
  Transfer,
  Card,
  Carousel,
  Dropdown
];

export {
  Button,
  Tabs,
  Row,
  Col,
  Checkbox,
  Dialog,
  Slider,
  Message,
  Input,
  Upload,
  Switch,
  Transfer,
  Card,
  Carousel,
  Dropdown
};

export default {
  install: (app: App) => {
    for (const c in components) {
      app.use((components as any)[c]);
    }
  }
};
