<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<style lang="less">
@import "./assets/css/global.less";
</style>
<style>
#nav a.router-link-exact-active {
  color: #373ea4;
}

</style>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
