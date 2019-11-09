<template>
  <div class="product-section">
    <div class="content section-content">
      <div class="section-title">{{sectitle}}</div>
      <div class="section-img">
        <img :src="imgurl" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductContentSection",
  props:['sectitle','imgurl'],
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
