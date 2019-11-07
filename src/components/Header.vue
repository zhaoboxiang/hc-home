<template>
  <div class="hc-header">
    <div class="hc-logo">
      <router-link :to="{ name: 'home' }"
        ><img src="../assets/images/img_logo_nav_1.png" alt="hc"
      /></router-link>
    </div>
    <div class="hc-nav">
      <router-link :to="{ name: 'home' }">首页</router-link>
      <router-link :to="{ name: 'about' }">关于虹川</router-link>
      <router-link :to="{ name: 'solution' }">解决方案</router-link>
      <router-link :to="{ name: 'product' }">产品中心</router-link>
      <router-link :to="{ name: 'careers' }">广纳人才</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped></style>
