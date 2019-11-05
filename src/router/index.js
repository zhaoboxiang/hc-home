import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
const About = () => import("../views/About.vue");
const Solution = () => import("../views/Solution.vue");
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
  {
    path: "/solution",
    name: "solution",
    component: Solution
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
