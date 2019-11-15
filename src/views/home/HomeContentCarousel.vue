<template>
  <md-card>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide class="slide-1"> </swiper-slide>
        <swiper-slide class="slide-2"></swiper-slide>
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
  background-size: cover;
  background: #e2f2f9
      linear-gradient(
        135deg,
        rgba(226, 242, 249, 1) 0%,
        rgba(224, 235, 249, 1) 49%,
        rgba(237, 234, 249, 1) 100%
      ),
    no-repeat, center;

  &.slide-1 {
    background-image: url("../../assets/images/banner_0191107113737.png");
  }

  &.slide-2 {
    background-image: url("../../assets/images/img_about_company_photo.png");
  }
}
</style>
