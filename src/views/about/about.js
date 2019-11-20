import Vue from "vue";
import About from "./About.vue";
import "../../assets/css/index.less";
import "vue-material/dist/vue-material.min.css";
import AOS from "aos"; // 滚动动画
import "aos/dist/aos.css";

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-in-sine"
    });
  },
  render: h => h(About)
}).$mount("#app");
