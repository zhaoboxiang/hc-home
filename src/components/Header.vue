<template>
  <div class="hc-header">
    <div class="hc-logo">
      <router-link :to="{ name: 'home' }"
        ><img src="../assets/images/img_logo_nav_1.png" alt="hc"
      /></router-link>
    </div>
    <div class="hc-nav">
      <div class="nav-link-wrap">
        <router-link class="main-nav-link" exact :to="{ name: 'home' }"
          >首页</router-link
        >
      </div>
      <div class="nav-link-wrap">
        <router-link class="main-nav-link" :to="{ name: 'about' }"
          >关于虹川</router-link
        >
      </div>
      <div
        class="nav-link-wrap"
        @mouseenter="showSolutionNav = true"
        @mouseleave="showSolutionNav = false"
      >
        <router-link class="main-nav-link" :to="{ name: 'solution' }"
          >解决方案</router-link
        >
        <drop-down-menu
          v-show="showSolutionNav"
          :menu-items="solutionMenuItems"
          @hideOnClick="hideOnClick"
        ></drop-down-menu>
      </div>
      <div class="nav-link-wrap" @mouseenter="showProductNavBox = true">
        <router-link class="main-nav-link" :to="{ name: 'product', params: {name: 'envpro'} }"
          >产品中心</router-link
        >
      </div>
      <div class="nav-link-wrap">
        <router-link class="main-nav-link" :to="{ name: 'careers' }"
          >广纳人才</router-link
        >
      </div>
    </div>
    <product-navigation-box v-show="showProductNavBox" @hideProductNavBox="hideProductNavBox"></product-navigation-box>
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
      solutionMenuItems: [
        { name: "wisdom-city", title: "智慧城市" },
        { name: "wisdom-environment", title: "智慧环保" },
        { name: "wisdom-water", title: "智慧水务" },
        { name: "wisdom-park", title: "智慧园区" }
      ]
    };
  },
  methods: {
    hideOnClick(isVisible) {
      this.showSolutionNav = isVisible;
    },
    hideProductNavBox(isVisible) {
      this.showProductNavBox = isVisible;
    }
  }
};
</script>

<style scoped>
.nav-link-wrap {
  display: inline-block;
  position: relative;
}
</style>
