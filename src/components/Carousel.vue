<template>
  <md-card>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide class="slide-1">
          <div class="slide-content">
            <div class="tips">
              <div class="tips-ch">虹川科技，绿色智慧城市理念倡行者</div>
              <div class="tips-en">
                HCTTOP TECHNOLOGY<br />GREEN SMART CITY COMMEMORATE ADVOCATE
              </div>
            </div>
          </div>
        </swiper-slide>
        <!--<swiper-slide class="slide-2">-->
          <!--<div class="slide-content">-->
            <!--<div class="tips">-->
              <!--<div class="tips-ch">111虹川科技，绿色智慧城市理念倡行者</div>-->
              <!--<div class="tips-en">-->
                <!--111HCTTOP TECHNOLOGY<br />111GREEN SMART CITY COMMEMORATE ADVOCATE-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</swiper-slide>-->
        <div
          class="swiper-pagination swiper-pagination-white"
          slot="pagination"
        ></div>
      </swiper>
    </md-card-media>
  </md-card>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.swiper-slide {
  height: 480px;
  .slide-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    font-family: PingFangSC-Semibold, PingFang SC;
    .tips {
      color: #303ca8;

      .tips-ch {
        font-size: 56px;
        font-weight: bold;
      }
      .tips-en {
        font-size: 24px;
        margin-top: 24px;
      }
    }
  }

  &.slide-1{
    background: linear-gradient(to right, #e2f1f9, #eceaf9);
    .slide-content {
      background: url("../assets/images/img_index_banner_1_bg.png") center
      no-repeat;
      background-size: auto 100%;
    }
  }

  &.slide-2{
    background: #eceaf9;
    .slide-content {
      background: url("../assets/images/img_index_banner_1_bg.png") center
      no-repeat;
      background-size: auto 100%;
    }
  }
}
</style>
