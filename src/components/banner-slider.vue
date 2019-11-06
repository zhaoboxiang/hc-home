<template>
  <!--<div class="banner-slider">-->
    <!--https://vuejsexamples.com/a-customizable-carousel-slider-optimized-for-vue/-->
    <!--<hooper :progress="true" :autoPlay="true" :playSpeed="2000">-->
    <!--<hooper>-->
      <!--<slide>-->
        <!--<div class="banner-slider-item item-one">-->
          <!--<div class="item-caption">虹川科技，绿色智慧城市理念倡行者</div>-->
          <!--<div class="item-tips">-->
            <!--HCTTOP TECHNOLOGY<br />ADVOCATE THE CONCEPT OF GREEN SMART CITY-->
          <!--</div>-->
        <!--</div>-->
      <!--</slide>-->
      <!--<slide>-->
        <!--<div class="banner-slider-item item-one">-->
          <!--<div class="item-caption">虹川科技，绿色智慧城市理念倡行者</div>-->
          <!--<div class="item-tips">-->
            <!--HCTTOP TECHNOLOGY<br />ADVOCATE THE CONCEPT OF GREEN SMART CITY-->
          <!--</div>-->
        <!--</div>-->
      <!--</slide>-->
      <!--<hooper-pagination slot="hooper-addons"></hooper-pagination>-->
    <!--</hooper>-->
  <!--</div>-->
    <div></div>
</template>

<script>
// import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
export default {
  name: "banner-slider",
  components: {
    // Hooper,
    // Slide,
    // HooperPagination
  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/global";
/*@import "../assets/css/hooper-slider.less";*/

.banner-slider {
  width: 100%;
  height: 480px;
  background: linear-gradient(
    135deg,
    rgba(226, 242, 249, 1) 0%,
    rgba(224, 235, 249, 1) 49%,
    rgba(237, 234, 249, 1) 100%
  );
  .banner-slider-item {
    width: 100%;
    height: 100%;
    .item-caption {
      color: @font-color-active;
      font-size: 56px;
      padding: 169px 0 30px;
    }
    .item-tips {
      color: @font-color-active;
      font-size: 20px;
      line-height: 28px;
    }
  }
  .item-one {
    background: url("../assets/images/img_index_banner_1_bg.png") center
      no-repeat;
    background-size: auto 100%;
    text-align: center;
  }

  .two {
    background: blue;
  }
}

.hooper {
  height: 100%;
}
.hooper-indicators {
  background: red;
}
.hooper-indicator {
  height: 12px;
  width: 12px;
  border-radius: 100%;
  margin: 0 6px;
  background: rgba(0, 0, 0, 0.2);
}
.hooper-indicator:hover,
.hooper-indicator.is-active {
  background-color: #fff;
}
</style>