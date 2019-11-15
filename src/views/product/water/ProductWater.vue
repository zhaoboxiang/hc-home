<template>
  <div>
    <Header></Header>
    <div class="hc-product-container">
      <product-content-banner></product-content-banner>
      <product-content-nav></product-content-nav>
      <product-content-list-water></product-content-list-water>
      <!--          水务-->
      <product-content-water-section></product-content-water-section>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import ProductContentBanner from "../../../components/ProductContentBanner";
import ProductContentNav from "../../../components/ProductContentNav";
import ProductContentListWater from "./ProductContentListWater";
import ProductContentWaterSection from "./ProductContentWaterSection";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default {
  components: {
    Header,
    Footer,
    ProductContentListWater,
    ProductContentNav,
    ProductContentBanner,
    ProductContentWaterSection
  }
};
</script>
<style lang="less" scoped>
@import "../../../assets/css/global";
.hc-product-container {
  padding-top: 68px;
}
</style>
