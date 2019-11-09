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
  import ProductContentSection from "./ProductContentSection";
  import CutLineContent from "./CutLineContent";
  export default {
    name: "ProductContentParkSection",
    components: { CutLineContent, ProductContentSection },
    data() {
      return {
        section_1: {
          imgUrl: require("../assets/images/product/img_cpzx_yqxg_1.png"),
          title: "全面接入园区内各类物联感知设备，实时获取设备数据信息进行统一管理"
        },
        section_2: {
          imgUrl: require("../assets/images/product/img_cpzx_yqxg_2.png"),
          title:
            "统一接入一个数据中台，实现面对不同业务场景不同数据模型服务，快速适应园区复杂多变业务类型"
        },
        section_3: {
          imgUrl: require("../assets/images/product/img_cpzx_yqxg_3.png"),
          title: "基于GIS可视化平台实时展示掌控园区动态，方便处理园区各项日常事务和紧急问题"
        },
        section_4: {
          imgUrl: require("../assets/images/product/img_cpzx_yqxg_4.png"),
          title:
            "从以项目为核心的招商业务链到为企业和员工全方位服务支持，园区服务覆盖方方面面"
        }
      };
    }
  };
</script>

<style scoped>

</style>