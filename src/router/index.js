// import Vue from "vue";
// import VueRouter from "vue-router";
// import Home from "../views/home/Home.vue";
// const About = () => import("../views/About.vue");
// const SolutionCity = () => import("../views/SolutionCity.vue");
// const SolutionWater = () => import("../views/SolutionWater.vue");
// const SolutionPark = () => import("../views/SolutionPark.vue");
// const SolutionEvnPro = () => import("../views/SolutionEnv.vue");
// const Product = () => import("../views/ProductPark.vue");
// const Careers = () => import("../views/Careers.vue");
// // const ProductDetail = () => import("../views/ProductDetail.vue");
// //
// // import ProductContentListEvn from "../views/ProductContentListEvn";
// // import ProductContentListWater from "../views/ProductContentListWater";
// // import ProductContentListPark from "../views/ProductContentListPark";
//
// import ProductDetail from "../views/ProductDetail";
//
// Vue.use(VueRouter);
//
// const routes = [
//   {
//     path: "/",
//     name: "home",
//     component: Home
//   },
//   // 关于虹川
//   {
//     path: "/about",
//     name: "about",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: About
//   },
//   // 解决方案
//   {
//     path: "/solution",
//     name: "solution",
//     redirect: "/solution/wisdom-city",
//     component: SolutionCity
//   },
//   {
//     path: "/solution/wisdom-city", // 智慧城市
//     name: "wisdom-city",
//     component: SolutionCity,
//     // a meta field
//     meta: { requiresAuth: true }
//   },
//   {
//     path: "/solution/wisdom-environment", // 智慧环保
//     name: "wisdom-environment",
//     component: SolutionEvnPro,
//     // a meta field
//     meta: { requiresAuth: true }
//   },
//   {
//     path: "/solution/wisdom-water", // 智慧水务
//     name: "wisdom-water",
//     component: SolutionWater,
//     // a meta field
//     meta: { requiresAuth: true }
//   },
//   {
//     path: "/solution/wisdom-park", // 智慧园区
//     name: "wisdom-park",
//     component: SolutionPark,
//     // a meta field
//     meta: { requiresAuth: true }
//   },
//   // 产品中心 --- 主页面
//   {
//     path: "/product",
//     name: "product",
//     redirect: "/product/env",
//     component: Product
//   },
//   {
//     path: "/product/env",
//     name: "product-env",
//     component: Product
//   },
//   {
//     path: "/product/water",
//     name: "product-water",
//     component: Product
//   },
//   {
//     path: "/product/park",
//     name: "product-park",
//     component: Product
//   },
//   // 产品中心 --- 子页面
//   {
//     path: "/product/:name/env-detail",
//     name: "product-detail-env",
//     component: ProductDetail,
//     props: true
//   },
//   {
//     path: "/product/:name/water-detail",
//     name: "product-detail-water",
//     component: ProductDetail,
//     props: true
//   },
//   {
//     path: "/product/:name/park-detail",
//     name: "product-detail-park",
//     component: ProductDetail,
//     props: true
//   },
//   {
//     path: "/careers",
//     name: "careers",
//     component: Careers
//   }
// ];
//
// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes,
//   scrollBehavior(to, form, savedPosition) {
//     if (savedPosition) {
//       return savedPosition;
//     }
//     if (to.hash) {
//       return { selector: to.hash };
//     }
//     return { x: 0, y: 0 };
//   }
// });
//
// export default router;
