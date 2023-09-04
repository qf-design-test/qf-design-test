import { createApp } from "vue";
import qfDesign from '@qf/components'
import App from "./App.vue";
const app = createApp(App);
app.use(qfDesign)

app.mount("#app");
