<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--<router-link :to="{ name: 'home' }">首页</router-link>|-->
      <!--<router-link :to="{ name: 'about' }">关于虹川</router-link>-->
      <!--<router-link :to="{ name: 'solution' }">解决方案</router-link>-->
      <!--<router-link :to="{ name: 'product' }">产品中心</router-link>-->
      <!--<router-link :to="{ name: 'careers' }">广纳贤才</router-link>-->
    <!--</div>-->
    <router-view />
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
