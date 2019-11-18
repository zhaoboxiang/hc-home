<template>
  <div class="product-nav">
    <div class="nav-box">
      <div class="content banner-nav">
        <div :class="['ban-nav-item', { 'ban-nav-cur': currentFlag[0] }]">
          <a href="wisdom-env-product.html">
            <div class="item-icon icon-1"></div>
            <div class="item-tips">智慧环保产品</div>
          </a>
        </div>
        <div :class="['ban-nav-item', { 'ban-nav-cur': currentFlag[1] }]">
          <a href="wisdom-water-product.html">
            <div class="item-icon icon-2"></div>
            <div class="item-tips">智慧水务产品</div>
          </a>
        </div>
        <div :class="['ban-nav-item', { 'ban-nav-cur': currentFlag[2] }]">
          <a href="wisdom-park-product.html">
            <div class="item-icon icon-3"></div>
            <div class="item-tips">智慧园区产品</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductContentNav",
  data() {
    return {
      currentFlag: [true, false, false]
    };
  },
  mounted: function() {
    let pathname = window.location.pathname;
    for (let i = 0; i < this.currentFlag.length; i++) {
      this.currentFlag[i] = false;
    }
    if (pathname.includes("water")) {
      this.currentFlag[1] = true;
    } else if (pathname.includes("park")) {
      this.currentFlag[2] = true;
    } else {
      this.currentFlag[0] = true;
    }
    this.currentFlag.splice();
  }
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

        a:hover {
          text-decoration: none;
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
