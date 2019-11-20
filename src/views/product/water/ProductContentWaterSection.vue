<template>
  <div class="water-section">
    <product-content-section
      :sectitle="section_1.title"
      :imgurl="section_1.imgUrl"
    ></product-content-section>
    <cut-line-content></cut-line-content>
    <product-content-section
      :sectitle="section_2.title"
      :imgurl="section_2.imgUrl"
    ></product-content-section>
    <cut-line-content></cut-line-content>
    <product-content-section
      :sectitle="section_3.title"
      :imgurl="section_3.imgUrl"
    ></product-content-section>
    <cut-line-content></cut-line-content>
    <product-content-section
      :sectitle="section_4.title"
      :imgurl="section_4.imgUrl"
    ></product-content-section>
  </div>
</template>

<script>
import ProductContentSection from "../../../components/product/ProductContentSection";
import CutLineContent from "../../../components/CutLineContent";
export default {
  name: "ProductContentWaterSection",
  components: { CutLineContent, ProductContentSection },
  data() {
    return {
      section_1: {
        imgUrl: require("../../../assets/images/product/img_cpzx_swxg_1.png"),
        title: "多维度全方位监控水源地，保证水源地优质的储水供水"
      },
      section_2: {
        imgUrl: require("../../../assets/images/product/img_cpzx_swxg_2.png"),
        title: "管网建模为业务应用提供科学合理的基础数据和辅助决策"
      },
      section_3: {
        imgUrl: require("../../../assets/images/product/img_cpzx_swxg_3.png"),
        title:
          "污水处理各个业务流程进行生产过程监视、状态实时展示、异常情况预警"
      },
      section_4: {
        imgUrl: require("../../../assets/images/product/img_cpzx_swxg_4.png"),
        title: "水务监管"
      }
    };
  }
};
</script>

<style scoped></style>
