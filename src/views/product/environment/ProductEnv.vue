<template>
  <div>
    <Header></Header>
    <div class="hc-product-container">
      <product-content-banner></product-content-banner>
      <product-content-nav></product-content-nav>
      <product-content-list-env></product-content-list-env>
      <!--          环保-->
      <product-content-evn-section></product-content-evn-section>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import ProductContentBanner from "../../../components/product/ProductContentBanner";
import ProductContentNav from "../../../components/product/ProductContentNav";
import ProductContentEvnSection from "./ProductContentEvnSection";
import ProductContentListEnv from "./ProductContentListEnv";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default {
  components: {
    Header,
    Footer,
    ProductContentEvnSection,
    ProductContentNav,
    ProductContentBanner,
    ProductContentListEnv
  }
};
</script>
<style lang="less" scoped>
@import "../../../assets/css/global";
.hc-product-container {
  padding-top: 68px;
}
</style>
