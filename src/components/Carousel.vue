<template>
  <md-card>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide class="slide-1">
          <div class="slide-content">
            <div class="tips">
              <div class="tips-en">
                HCTTOP TECHNOLOGY<br />GREEN SMART CITY COMMEMORATE ADVOCATE
              </div>
              <div class="tips-ch">虹川科技，绿色智慧城市理念倡行者</div>
              <a href="wisdom-city-solution.html" class="btn btn-white"
                >解决方案</a
              >
            </div>
            <div class="particle-content">
              <vue-particles
                color="#fff"
                :particleOpacity="0.7"
                :particlesNumber="60"
                shapeType="circle"
                :particleSize="2"
                linesColor="#fff"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.4"
                :linesDistance="150"
                :moveSpeed="2"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="false"
                clickMode="push"
                class="lizi"
              >
              </vue-particles>
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
  },
  methods: {},
  mounted: function() {}
};
</script>

<style lang="less" scoped>
@import "../assets/css/global";
.swiper-slide {
  height: 660px;
  .slide-content {
    width: 100%;
    height: 100%;
    display: flex;
    /*align-items: center;*/
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    font-family: PingFangSC-Semibold, PingFang SC;
    .tips {
      color: #fff;

      .tips-ch {
        font-size: 48px;
        font-weight: bold;
        margin-top: 40px;
      }
      .tips-en {
        font-size: 24px;
        margin-top: 210px;
        line-height: 35px;
      }
    }
  }

  &.slide-1 {
    background: linear-gradient(to right, #e2f1f9, #eceaf9);
    position: relative;
    .slide-content {
      background: #0a0b2c url("../assets/images/img_index_banner_3_bg.png")
        center no-repeat;
      background-size: auto 100%;
      /*position: absolute;*/
      /*left: 0;*/
      /*top: 0;*/
      /*z-index: 100;*/

      .tips {
        position: absolute;
        z-index: 99;
      }

      .particle-content {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 9;
      }
      .btn {
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        top: 400px;
        z-index: 199;
      }
    }
  }

  &.slide-2 {
    background: #eceaf9;
    .slide-content {
      background: url("../assets/images/img_index_banner_1_bg.png") center
        no-repeat;
      background-size: auto 100%;
    }
  }
}
</style>
