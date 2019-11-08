<template>
  <div class="hc-header">
    <div class="hc-logo">
      <router-link :to="{ name: 'home' }"
        ><img src="../assets/images/img_logo_nav_1.png" alt="hc"
      /></router-link>
    </div>
    <div class="hc-nav">
      <div class="nav-link-wrap">
        <router-link exact :to="{ name: 'home' }">首页</router-link>
      </div>
      <div class="nav-link-wrap">
        <router-link :to="{ name: 'about' }">关于虹川</router-link>
      </div>
      <div
        class="nav-link-wrap"
        @mouseenter="showSubNav"
        @mouseleave="hideSubNav"
      >
        <router-link :to="{ name: 'solution' }">解决方案</router-link>
        <drop-down-menu
          v-show="hasSubNav"
          :menu-items="solutionMenuItems"
          @hideMenu="hideMenu"
        ></drop-down-menu>
      </div>
      <div class="nav-link-wrap">
        <router-link :to="{ name: 'product' }">产品中心</router-link>
      </div>
      <div class="nav-link-wrap">
        <router-link :to="{ name: 'careers' }">广纳人才</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import DropDownMenu from "./DropDownMenu";
export default {
  name: "Header",
  data() {
    return {
      hasSubNav: false,
      solutionMenuItems: [
        { name: "wisdom-city", title: "智慧城市" },
        { name: "wisdom-environment", title: "智慧环保" },
        { name: "wisdom-water", title: "智慧水务" },
        { name: "wisdom-park", title: "智慧园区" }
      ]
    };
  },
  components: {
    DropDownMenu
  },
  methods: {
    showSubNav() {
      this.hasSubNav = true;
    },
    hideSubNav() {
      this.hasSubNav = false;
    },
    hideMenu(value) {
      console.log(value)
      this.hasSubNav = value
    }
  }
};
</script>

<style scoped>
.nav-link-wrap {
  display: inline-block;
}
</style>
