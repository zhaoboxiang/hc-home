<template>
  <div class="product-section">
    <div class="content section-content">
      <div class="section-title">{{sectitle}}
        <!--基于模型，形成科学结论，支撑环境污染防治的科学决策和进准施策-->
      </div>
      <div class="section-img">
        <img src="../assets/images/product/img_cpzx_hbxg_1.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductContentSection",
  props:['sectitle'],
};
</script>

<style scoped lang="less">
@import "../assets/css/global";
.product-section {
  .section-content {
    padding: 120px 0;
    .section-title {
      font-size: 24px;
      color: @font-color;
      text-align: center;
      margin-bottom: 80px;
    }
    .section-img {
      img {
        display: block;
        margin: 0 auto;
      }
    }
  }
}
</style>
