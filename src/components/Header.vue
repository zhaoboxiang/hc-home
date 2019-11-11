<template>
  <div class="hc-header">
    <div class="hc-logo">
      <router-link :to="{ name: 'home' }"
        ><img src="../assets/images/img_logo_nav_1.png" alt="hc"
      /></router-link>
    </div>
    <div class="hc-nav">
      <div
        :class="[
          'nav-link-wrap',
          nav.path.indexOf('product') === -1 ? 'relative-pos' : ''
        ]"
        v-for="(nav, index) in headerNav"
        :key="index"
        @mouseover="toggle(index)"
        @mouseleave="active = -1"
      >
        <router-link class="main-nav-link" exact :to="{ path: nav.path }">{{
          nav.title
        }}</router-link>
        <!-- 解决方案的下拉菜单 -->
        <drop-down-menu
          v-if="active === index && nav.path === '/solution'"
          :menu-items="solutionMenuItems"
          @hideOnClick="hideOnClick"
        ></drop-down-menu>
        <!-- 产品中心的下拉菜单 -->
        <product-navigation-box
          v-if="active === index && nav.path.indexOf('product') !== -1"
        ></product-navigation-box>
      </div>
    </div>
  </div>
</template>

<script>
import DropDownMenu from "./DropDownMenu";
import ProductNavigationBox from "../views/ProductNavigationBox";
export default {
  name: "Header",
  components: {
    DropDownMenu,
    ProductNavigationBox
  },
  data() {
    return {
      showSolutionNav: false,
      showProductNavBox: false,
      active: -1,
      headerNav: [
        { title: "首页", path: "/" },
        { title: "关于虹川", path: "/about" },
        { title: "解决方案", path: "/solution" },
        { title: "产品中心", path: "/product/envpro" },
        { title: "广纳贤才", path: "careers" }
      ],
      solutionMenuItems: [
        { name: "wisdom-city", title: "智慧城市" },
        { name: "wisdom-environment", title: "智慧环保" },
        { name: "wisdom-water", title: "智慧水务" },
        { name: "wisdom-park", title: "智慧园区" }
      ]
    };
  },
  methods: {
    hideOnClick() {
      this.active = -1;
    },
    hideProductNavBox(isVisible) {
      this.showProductNavBox = isVisible;
    },
    toggle(index) {
      this.active = index;
    }
  },
  computed: {
    relativePos(nav, index) {
      console.log("nnn", nav, index);
      return nav.path.indexOf("product") !== -1 && index !== -1 ? "" : "22";
    }
  }
};
</script>

<style scoped>
.nav-link-wrap {
  display: inline-block;
}
.nav-link-wrap.relative-pos {
  position: relative;
}
</style>
