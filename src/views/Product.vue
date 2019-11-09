<template>
  <div>
    <product-content-banner></product-content-banner>
    <product-content-nav></product-content-nav>
    <div v-show="this.$route.params.name === 'envpro' ? 'envpro' : ''">
      <product-content-list></product-content-list>
      <!--          环保-->
      <product-content-evn-section></product-content-evn-section>
    </div>
    <div v-show="this.$route.params.name === 'water' ? 'water' : ''">
      <product-content-list></product-content-list>
      <!--          水务-->
      <product-content-water-section></product-content-water-section>
    </div>
    <div v-show="this.$route.params.name === 'park' ? 'park' : ''">
      <product-content-list></product-content-list>
      <!--          园区-->
      <product-content-park-section></product-content-park-section>
    </div>
  </div>
</template>

<script>
import ProductContentBanner from "./ProductContentBanner";
import ProductContentNav from "./ProductContentNav";
import ProductContentEvnSection from "./ProductContentEvnSection";
import ProductContentList from "./ProductContentList";
import ProductContentWaterSection from "./ProductContentWaterSection";
import ProductContentParkSection from "./ProductContentParkSection";
export default {
  components: {
    ProductContentWaterSection,
    ProductContentList,
    ProductContentEvnSection,
    ProductContentNav,
    ProductContentBanner,
    ProductContentParkSection
  },
  data() {
    return {
      showContent: ""
    };
  }
};
</script>
<style lang="less" scoped>
@import "../assets/css/global";
</style>
