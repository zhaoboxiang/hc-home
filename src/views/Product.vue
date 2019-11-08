<template>
  <div>
    <product-content-banner></product-content-banner>
    <product-content-section sectitle="基于模型，形成科学结论，支撑环境污染防治的科学决策和进准施策" imgurl="hee"></product-content-section>
    <cut-line-content></cut-line-content>
  </div>
</template>

<script>
import ProductContentBanner from "./ProductContentBanner";
import ProductContentSection from "./ProductContentSection";
import CutLineContent from './CutLineContent'
export default {
  components: {
    ProductContentBanner,
    ProductContentSection,
    CutLineContent
  }
};

</script>

<style lang="less" scoped>
  @import "../assets/css/global";
h1 {
  height: 10px;
  color: green;
}
</style>
