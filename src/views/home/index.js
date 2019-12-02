import Vue from "vue";
import Home from "./Home";
import "vue-material/dist/vue-material.min.css";
import VueAwesomeSwiper from "vue-awesome-swiper"; // 轮播
import "swiper/dist/css/swiper.css";
import AOS from "aos"; // 滚动动画
import "aos/dist/aos.css";
import "../../assets/css/index.less";
import VueMaterial from "vue-material";
import VueParticles from "vue-particles";

Vue.use(VueMaterial);

Vue.use(VueAwesomeSwiper /* { default global options } */);

Vue.use(VueParticles);

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-in-sine"
    });
  },
  render: h => h(Home)
}).$mount("#app");
