<template>
  <div class="product-banner-box">
    <div class="product-banner">
      <div class="content banner-content">
        <h3>产品中心</h3>
        <h6>PRODUCT CENTER</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductContentBanner"
};
</script>

<style scoped lang="less">
@import "../../assets/css/global";
.product-banner {
  background: @font-color-active;
  height: 600px;
  color: #fff;
  position: relative;

  .banner-content {
    background: url("../../assets/images/product/img_cpzx_topimg.png") right top
      no-repeat;
    height: 100%;
    h3 {
      font-size: 48px;
      padding: 180px 0 20px;
    }
    h6 {
      font-size: 32px;
    }
  }
}
.product-list {
  padding: 80px 120px;
  .pro-name {
    font-size: 36px;
    color: @font-color-active;
    margin-bottom: 48px;
    text-align: center;
  }
  .list-line {
    a {
      display: inline-block;
      width: 300px;
      height: 68px;
      line-height: 68px;
      border: 1px solid @font-color-active;
      border-radius: 34px;
      font-size: 16px;
      color: @font-color-active;
      margin-right: 148px;
      text-align: center;
      margin-top: 32px;
      &:nth-child(3n) {
        margin-right: 0;
      }
      &:hover {
        background: @font-color-active;
        color: #fff;
        box-shadow: 0px 8px 16px 0px rgba(48, 60, 168, 0.2);
        cursor: pointer;
        text-decoration: none;
      }
    }
  }
}
</style>
