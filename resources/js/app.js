import "./bootstrap";

import { createApp } from "vue";

import app from "./components/app.vue";

import router from "./router/index.js";

import "../css/app.css";

createApp(app).use(router).mount("#app");
