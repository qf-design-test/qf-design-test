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
  Dropdown,
  Collapse
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
  Dropdown,
  Collapse
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
  Dropdown,
  Collapse
};

export default {
  install: (app: App) => {
    for (const c in components) {
      app.use((components as any)[c]);
    }
  }
};
