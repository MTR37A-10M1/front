import Vue from "vue";
import App from "./App.vue";
import "@progress/kendo-ui";
import "@progress/kendo-theme-default/dist/all.css";
import { Chart, ChartInstaller } from "@progress/kendo-charts-vue-wrapper";

Vue.use(ChartInstaller);

Vue.config.productionTip = false;

new Vue({
  components: {
    Chart,
  },
  render: (h) => h(App),
}).$mount("#app");
