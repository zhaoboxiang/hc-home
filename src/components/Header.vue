<template>
  <div class="hc-header">
    <div class="hc-logo">
      <a href="index.html"
        ><img src="../assets/images/img_logo_nav_1.png" alt="hc"
      /></a>
    </div>
    <div class="hc-nav">
      <div
        :class="[
          'nav-link-wrap',
          nav.pathName !== 'wisdom-env-product' ? 'relative-pos' : ''
        ]"
        v-for="(nav, index) in headerNav"
        :key="index"
        @mouseover="toggle(index)"
        @mouseleave="active = -1"
      >
        <!-- 其他 -->
        <a
          :exact="index === 0"
          :class="[
            'main-nav-link',
            nav.pathName.indexOf(activeCurNav) > -1 ? 'a-active' : ''
          ]"
          :href="`${nav.pathName}.html`"
          >{{ nav.title }}</a
        >
        <!-- 解决方案的下拉菜单 -->
        <drop-down-menu
          v-if="active === index && nav.pathName === 'wisdom-env-solution'"
          :menu-items="solutionMenuItems"
          @hideOnClick="hideOnClick"
        ></drop-down-menu>
        <!-- 产品中心的下拉菜单 -->
        <product-navigation-box
          v-show="false"
        ></product-navigation-box>
      </div>
    </div>
  </div>
</template>

<script>
import DropDownMenu from "./DropDownMenu";
import ProductNavigationBox from "./ProductNavigationBox";
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
      activeCurNav: window.location.pathname,
      headerNav: [
        { title: "首页", pathName: "index", isActive: true },
        { title: "关于虹川", pathName: "about", isActive: false },
        { title: "解决方案", pathName: "wisdom-env-solution", isActive: false },
        { title: "产品中心", pathName: "wisdom-env-product", isActive: false },
        { title: "广纳贤才", pathName: "careers", isActive: false }
      ],
      solutionMenuItems: [
        { name: "wisdom-city-solution", title: "智慧城市", isActive: false },
        { name: "wisdom-env-solution", title: "智慧环保", isActive: true },
        { name: "wisdom-water-solution", title: "智慧水务", isActive: false },
        { name: "wisdom-park-solution", title: "智慧园区", isActive: false }
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
  mounted: function() {
    const pathName = window.location.pathname
      .replace(/^\/|\.html$/g, "")
      .split("-");
    this.activeCurNav = pathName[pathName.length - 1]
      ? pathName[pathName.length - 1]
      : "index";
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
