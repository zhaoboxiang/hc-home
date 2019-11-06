<template>
  <!--<div class="banner-slider">-->
    <!--<b-carousel id="carousel-fade" fade indicators interval="1000">-->
      <!--<b-carousel-slide caption="First slide">-->
        <!--<div class="banner-slider-item item-one">-->
          <!--<div class="item-caption">虹川科技，绿色智慧城市理念倡行者</div>-->
          <!--<div class="item-tips">-->
            <!--HCTTOP TECHNOLOGY<br />ADVOCATE THE CONCEPT OF GREEN SMART CITY-->
          <!--</div>-->
        <!--</div>-->
      <!--</b-carousel-slide>-->
      <!--<b-carousel-slide caption="Second slide">-->
        <!--<div class="banner-slider-item item-one">-->
          <!--<div class="item-caption">虹川科技，绿色智慧城市理念倡行者</div>-->
          <!--<div class="item-tips">-->
            <!--HCTTOP TECHNOLOGY<br />ADVOCATE THE CONCEPT OF GREEN SMART CITY-->
          <!--</div>-->
        <!--</div>-->
      <!--</b-carousel-slide>-->
    <!--</b-carousel>-->
  <!--</div>-->

    <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            fade
            indicators
            img-width="1024"
            img-height="480"
            interval="1000"
    >
        <b-carousel-slide
                caption="First slide"
                img-src="https://picsum.photos/1024/480/?image=10"
        ></b-carousel-slide>
        <b-carousel-slide
                caption="Second Slide"
                img-src="https://picsum.photos/1024/480/?image=12"
        ></b-carousel-slide>
        <b-carousel-slide
                caption="Third Slide"
                img-src="https://picsum.photos/1024/480/?image=22"
        ></b-carousel-slide>
    </b-carousel>
</template>

<script>
export default {
  name: "banner"
};
</script>

<style lang="less" scoped>
@import "../assets/css/global";

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
</style>