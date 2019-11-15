<template>
  <div>
    <Header></Header>
    <div class="home">
      <home-content-carousel></home-content-carousel>
      <home-content-introduction></home-content-introduction>
      <home-content-professional></home-content-professional>
      <home-content-core-technology></home-content-core-technology>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HomeContentCarousel from "../../components/Carousel";
import HomeContentIntroduction from "./HomeContentIntroduction";
import HomeContentCoreTechnology from "./HomeContentCoreTechnology";
import HomeContentProfessional from "./HomeContentProfessional";

export default {
  name: "home",
  components: {
    Header,
    Footer,
    HomeContentCarousel,
    HomeContentIntroduction,
    HomeContentCoreTechnology,
    HomeContentProfessional
  }
};
</script>
