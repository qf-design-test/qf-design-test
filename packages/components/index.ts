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
  Collapse,
  Form
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
  Collapse,
  Form
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
  Collapse,
  Form
};

export default {
  install: (app: App) => {
    for (const c in components) {
      app.use((components as any)[c]);
    }
  }
};
