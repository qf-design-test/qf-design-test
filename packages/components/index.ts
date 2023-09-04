import { App } from "vue";
import Button from "./button";

export * from "./button";

const components = [Button];

export default {
  install: (app: App) => {
    components.forEach((c) => app.use(c));
  },
};
