import Vue from "vue";
import About from "./About.vue";
import "../../assets/css/index.less";
import "vue-material/dist/vue-material.min.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(About)
}).$mount("#app");
