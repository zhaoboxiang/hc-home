<template>
  <div class="product-nav">
    <div class="nav-box">
      <div class="content banner-nav">
        <div
          :class="[
            'ban-nav-item',
            { 'ban-nav-cur': this.$route.name === 'product-env' }
          ]"
        >
          <router-link :to="{ name: 'product-env' }">
            <div class="item-icon icon-1"></div>
            <div class="item-tips">智慧环保产品</div>
          </router-link>
        </div>
        <div
          :class="[
            'ban-nav-item',
            { 'ban-nav-cur': this.$route.name === 'product-water' }
          ]"
        >
          <router-link :to="{ name: 'product-water' }">
            <div class="item-icon icon-2"></div>
            <div class="item-tips">智慧水务产品</div>
          </router-link>
        </div>
        <div
          :class="[
            'ban-nav-item',
            { 'ban-nav-cur': this.$route.name === 'product-park' }
          ]"
        >
          <router-link :to="{ name: 'product-park' }">
            <div class="item-icon icon-3"></div>
            <div class="item-tips">智慧园区产品</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductContentNav"
};
</script>

<style scoped lang="less">
@import "../assets/css/global";
.product-nav {
  position: relative;
  .nav-box {
    position: absolute;
    background: rgba(21, 32, 131, 0.3);
    left: 0;
    right: 0;
    bottom: 0;
    .banner-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 160px;
      color: #fff;
      .ban-nav-item {
        height: 100%;
        flex: 1;
        text-align: center;
        .item-icon {
          width: 64px;
          height: 64px;
          margin: 24px auto 16px;
        }
        .icon-1 {
          background: url("../assets/images/product/icon_yewu_1.png") center
            no-repeat;
          background-size: 100% 100%;
        }
        .icon-2 {
          background: url("../assets/images/product/icon_yewu_2.png") center
            no-repeat;
          background-size: 100% 100%;
        }
        .icon-3 {
          background: url("../assets/images/product/icon_yewu_3.png") center
            no-repeat;
          background-size: 100% 100%;
        }
        .item-tips {
          font-size: 20px;
          color: #fff;
        }
      }
      .ban-nav-cur,
      .ban-nav-item:hover {
        background: linear-gradient(
          180deg,
          rgba(83, 98, 235, 1) 0%,
          rgba(48, 60, 168, 1) 100%
        );
        cursor: pointer;
      }
    }
  }
}
</style>
