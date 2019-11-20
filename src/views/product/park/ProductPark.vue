<template>
  <div>
    <Header></Header>
    <div class="hc-product-container">
      <product-content-banner></product-content-banner>
      <product-content-nav></product-content-nav>
      <product-content-list-park></product-content-list-park>
      <!--          园区-->
      <product-content-park-section></product-content-park-section>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import ProductContentBanner from "../../../components/product/ProductContentBanner";
import ProductContentNav from "../../../components/product/ProductContentNav";
import ProductContentListPark from "./ProductContentListPark";
import ProductContentParkSection from "./ProductContentParkSection";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default {
  components: {
    Header,
    Footer,
    ProductContentListPark,
    ProductContentNav,
    ProductContentBanner,
    ProductContentParkSection
  }
};
</script>
<style lang="less" scoped>
@import "../../../assets/css/global";
.hc-product-container {
  padding-top: 68px;
}
</style>
