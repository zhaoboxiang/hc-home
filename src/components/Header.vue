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
          nav.pathName !== 'product' ? 'relative-pos' : ''
        ]"
        v-for="(nav, index) in headerNav"
        :key="index"
        @mouseover="toggle(index)"
        @mouseleave="active = -1"
      >
        <!-- 其他 -->
        <router-link
          :exact="index === 0"
          class="main-nav-link"
          :to="{ name: nav.pathName }"
          >{{ nav.title }}</router-link
        >
        <!-- 解决方案的下拉菜单 -->
        <drop-down-menu
          v-if="active === index && nav.pathName === 'solution'"
          :menu-items="solutionMenuItems"
          @hideOnClick="hideOnClick"
        ></drop-down-menu>
        <!-- 产品中心的下拉菜单 -->
        <product-navigation-box
          v-if="active === index && nav.pathName === 'product'"
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
        { title: "首页", pathName: "home" },
        { title: "关于虹川", pathName: "about" },
        { title: "解决方案", pathName: "solution" },
        { title: "产品中心", pathName: "product" },
        { title: "广纳贤才", pathName: "careers" }
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
      console.log(index, this.active);
      this.active = index;
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
.hc-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 2;
}
</style>
