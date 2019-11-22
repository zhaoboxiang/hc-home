import Vue from "vue";
import ProductDetail from "../../components/product/ProductDetail";
import "vue-material/dist/vue-material.min.css";
import "../../assets/css/index.less";
import VueScrollTo from "vue-scrollto";
Vue.use(VueScrollTo);
Vue.config.productionTip = false;

new Vue({
  render: h => h(ProductDetail)
}).$mount("#app");
