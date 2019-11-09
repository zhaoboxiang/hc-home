<template>
  <div>
    <h1></h1>
    <product-content-banner></product-content-banner>
    <product-content-nav></product-content-nav>
    <product-content-list></product-content-list>
    <product-content-park-section></product-content-park-section>
    <product-content-water-section></product-content-water-section>
    <product-content-evn-section></product-content-evn-section>
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
  }
};
</script>
<style lang="less" scoped>
@import "../assets/css/global";
</style>
