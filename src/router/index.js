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

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  // {
  //   path: "/solution",
  //   name: "solution",
  //   component: Solution
  // },
  {
    path: "/solution-city",
    name: "solution-city",
    component: SolutionCity
  },
  {
    path: "/solution-evn-pro",
    name: "solution-evn-pro",
    component: SolutionEvnPro
  },
  {
    path: "/solution-water",
    name: "solution-water",
    component: SolutionWater
  },
  {
    path: "/solution-park",
    name: "solution-park",
    component: SolutionPark
  },
  {
    path: "/product",
    name: "product",
    component: Product
  },
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
