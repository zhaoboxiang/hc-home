<template>
  <div class="home">
    <home-content-carousel></home-content-carousel>
    <home-content-introduction></home-content-introduction>
    <home-content-professional></home-content-professional>
    <home-content-core-technology></home-content-core-technology>
  </div>
</template>

<script>
import HomeContentCarousel from "../components/Carousel";
import HomeContentIntroduction from "../views/HomeContentIntroduction";
import HomeContentCoreTechnology from "../views/HomeContentCoreTechnology";
import HomeContentProfessional from "../views/HomeContentProfessional";

export default {
  name: "home",
  components: {
    HomeContentCarousel,
    HomeContentIntroduction,
    HomeContentCoreTechnology,
    HomeContentProfessional
  }
};
</script>
