<template>
  <div class="hc-header">
    <div class="hc-logo">
      <a href="index.html"
        ><img src="../assets/images/img_logo_nav_1.png" alt="hc"
      /></a>
    </div>
    <div class="hc-nav">
      <div
        :class="['nav-link-wrap', nav.name !== 'product' ? 'relative-pos' : '']"
        v-for="(nav, index) in headerNav"
        :key="index"
        @mouseover="toggle(index)"
        @mouseleave="active = -1"
      >
        <!-- 其他 -->
        <a
          v-if="nav.direction"
          :exact="index === 0"
          :class="[
            'main-nav-link',
            activeCurNav.indexOf(nav.name) > -1 ? 'a-active' : ''
          ]"
          :href="`${nav.direction}${nav.name === 'index' ? '' : '.html'}`"
          >{{ nav.title }}</a
        >
        <a
          v-else
          :exact="index === 0"
          :class="[
            'main-nav-link',
            activeCurNav.indexOf(nav.name) > -1 ? 'a-active' : ''
          ]"
          >{{ nav.title }}</a
        >
        <!-- 解决方案的下拉菜单 -->
        <drop-down-menu
          v-if="active === index && nav.name === 'solution'"
          :menu-items="solutionMenuItems"
          @hideOnClick="hideOnClick"
        ></drop-down-menu>
        <!-- 产品中心的下拉菜单 -->
        <product-navigation-box
          v-show="active === index && nav.name === 'product'"
        ></product-navigation-box>
      </div>
    </div>
  </div>
</template>

<script>
import DropDownMenu from "./DropDownMenu";
import ProductNavigationBox from "./product/ProductNavigationBox";
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
      activeCurNav: "",
      headerNav: [
        { title: "首页", name: "index", direction: "/" },
        { title: "关于虹川", name: "about", direction: "about" },
        {
          title: "解决方案",
          name: "solution",
          direction: ""
        },
        { title: "产品中心", name: "product", direction: "wisdom-env-product" },
        { title: "广纳贤才", name: "careers", direction: "careers" }
      ],
      solutionMenuItems: [
        {
          direction: "wisdom-city-solution",
          name: "city-solution",
          title: "智慧城市"
        },
        {
          direction: "wisdom-env-solution",
          name: "env-solution",
          title: "智慧环保"
        },
        {
          direction: "wisdom-water-solution",
          name: "water-solution",
          title: "智慧水务"
        },
        {
          direction: "wisdom-park-solution",
          name: "park-solution",
          title: "智慧园区"
        }
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
      localStorage.clear();
    },
    activeNav() {
      // 判断是否当前已激活的导航
      const pathName = window.location.pathname.replace(/^\/|\.html$/g, "");
      this.activeCurNav = pathName ? pathName : "index";
    }
  },
  mounted: function() {
    this.activeNav();
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
