<template>
    <div class="hc-header">
        <div class="hc-logo"><div class="logo"></div></div>
        <div class="hc-nav-box">
            <div class="nav-item"><router-link :to="{name:'home'}">首页</router-link></div>
            <div class="nav-item"><router-link :to="{name:'about'}">关于虹川</router-link></div>
            <div class="nav-item"><router-link :to="{name:'solution'}">解决方案</router-link></div>
            <div class="nav-item"><router-link :to="{name:'product'}">产品中心</router-link></div>
            <div class="nav-item"><router-link :to="{name:'careers'}">广纳人才</router-link></div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "hc-header"
  };
</script>

<style lang="less" scoped>
    .hc-header{
        display: flex;
        align-items: center;
        height: 100px;
    }
    .hc-logo{
        flex: 2;
    }
    .logo{
        width: 160px;
        height: 68px;
        background: url("../assets/images/img_logo_nav_1.png") center no-repeat;
        margin: auto;
    }
    .hc-nav-box{
        flex: 3;
        display: flex;
        height: 100%;
        align-items: center;
    }
    .nav-item{
        padding: 0 20px;

    }
    .nav-item a{
        text-decoration: none;
    }
</style>