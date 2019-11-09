<template>
  <div class="evn-section">
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
import ProductContentSection from "./ProductContentSection";
import CutLineContent from "./CutLineContent";
export default {
  name: "ProductContentEvnSection",
  components: { CutLineContent, ProductContentSection },
  data() {
    return {
      section_1: {
        imgUrl: require("../assets/images/product/img_cpzx_hbxg_1.png"),
        title: "支持各类设备、各类网络、各类协议数据接入，实现多维感知数据无缝衔接"
      },
      section_2: {
        imgUrl: require("../assets/images/product/img_cpzx_hbxg_2.png"),
        title:
                "一图感知、数据模拟、多维呈现，随时随地掌握环境动态趋势，从容面对各类预警事件"
      },
      section_3: {
        imgUrl: require("../assets/images/product/img_cpzx_hbxg_3.png"),
        title: "基于模型，形成科学结论，支撑环境污染防治的科学决策和进准施策"
      },
      section_4: {
        imgUrl: require("../assets/images/product/img_cpzx_hbxg_4.png"),
        title:
                "平战结合，环境监管全覆盖，环境问题无处遁形，为人民群众环境安全保驾护航"
      }
    };
  }
};
</script>

<style scoped></style>
