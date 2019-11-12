<template>
  <div class="hc-product-container">
    <product-content-banner></product-content-banner>
    <product-content-nav></product-content-nav>
    <div v-show="this.$route.name === 'product-env' ? 'env' : ''">
      <product-content-list-evn></product-content-list-evn>
      <!--          环保-->
      <product-content-evn-section></product-content-evn-section>
    </div>
    <div v-show="this.$route.name === 'product-water' ? 'water' : ''">
      <product-content-list-water></product-content-list-water>
      <!--          水务-->
      <product-content-water-section></product-content-water-section>
    </div>
    <div v-show="this.$route.name === 'product-park' ? 'park' : ''">
      <product-content-list-park></product-content-list-park>
      <!--          园区-->
      <product-content-park-section></product-content-park-section>
    </div>
  </div>
</template>

<script>
import ProductContentBanner from "./ProductContentBanner";
import ProductContentNav from "./ProductContentNav";
import ProductContentEvnSection from "./ProductContentEvnSection";
// import ProductContentList from "./ProductContentList";
import ProductContentWaterSection from "./ProductContentWaterSection";
import ProductContentParkSection from "./ProductContentParkSection";

import ProductContentListEvn from "./ProductContentListEvn";
import ProductContentListWater from "./ProductContentListWater";
import ProductContentListPark from "./ProductContentListPark";
export default {
  components: {
    ProductContentWaterSection,
    // ProductContentList,
    ProductContentEvnSection,
    ProductContentNav,
    ProductContentBanner,
    ProductContentParkSection,

    ProductContentListEvn,
    ProductContentListWater,
    ProductContentListPark
  },
  data() {
    return {
      showContent: ""
    };
  },
  mounted() {
    console.log(this.$route
    )
  }
};
</script>
<style lang="less" scoped>
@import "../assets/css/global";
  .hc-product-container {
    padding-top: 68px;
  }
</style>
