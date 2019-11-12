import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAwesomeSwiper from "vue-awesome-swiper"; // 轮播
import "swiper/dist/css/swiper.css";
import AOS from "aos"; // 滚动动画
import "aos/dist/aos.css";
import "./assets/css/index.less";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import VueScrollTo from "vue-scrollto";
import VueLodash from "./utilities/lodash";
Vue.use(VueLodash);
Vue.use(VueScrollTo);

Vue.use(VueMaterial);

Vue.use(VueAwesomeSwiper /* { default global options } */);

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-in-sine"
    });
  },
  router,
  store,
  VueLodash,
  render: h => h(App)
}).$mount("#app");
