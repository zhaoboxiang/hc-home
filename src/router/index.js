import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
const About = () => import("../views/About.vue");
const SolutionCity = () => import("../views/SolutionCity.vue");
const SolutionWater = () => import("../views/SolutionWater.vue");
const SolutionPark = () => import("../views/SolutionPark.vue");
const SolutionEvnPro = () => import("../views/SolutionEvnPro.vue");
const Product = () => import("../views/Product.vue");
const Careers = () => import("../views/Careers.vue");
// const ProductDetail = () => import("../views/ProductDetail.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  // 关于虹川
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  // 解决方案
  {
    path: "/solution",
    name: "solution",
    redirect: "/solution/wisdom-city",
    component: SolutionCity
  },
  {
    path: "/solution/wisdom-city", // 智慧城市
    name: "wisdom-city",
    component: SolutionCity,
    // a meta field
    meta: { requiresAuth: true }
  },
  {
    path: "/solution/wisdom-environment", // 智慧环保
    name: "wisdom-environment",
    component: SolutionEvnPro,
    // a meta field
    meta: { requiresAuth: true }
  },
  {
    path: "/solution/wisdom-water", // 智慧水务
    name: "wisdom-water",
    component: SolutionWater,
    // a meta field
    meta: { requiresAuth: true }
  },
  {
    path: "/solution/wisdom-park", // 智慧园区
    name: "wisdom-park",
    component: SolutionPark,
    // a meta field
    meta: { requiresAuth: true }
  },
  // 产品中心
  {
    path: "/product/:name",
    name: "product",
    component: Product
  },
    // 产品中心 --- 主页面

  {
    path: "/careers",
    name: "careers",
    component: Careers
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
