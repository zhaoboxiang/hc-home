<template>
    <div class="content hc-header">
        <div class="hc-logo"><div class="logo"></div></div>
        <div class="hc-nav-box">
            <div class="nav-item"><router-link :to="{name:'home'}">首页</router-link></div>
            <div class="nav-item"><router-link :to="{name:'about'}">关于虹川</router-link></div>
            <div class="nav-item"><router-link :to="{name:'solution-city'}">解决方案-城市</router-link></div>
            <div class="nav-item"><router-link :to="{name:'solution-evn-pro'}">解决方案-环保</router-link></div>
            <div class="nav-item"><router-link :to="{name:'solution-water'}">解决方案-水务</router-link></div>
            <div class="nav-item"><router-link :to="{name:'solution-park'}">解决方案-园区</router-link></div>
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
    @import "../assets/css/global";
    .hc-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 68px;
        font-size: 14px;
        .hc-logo{
            .logo{
                width: 160px;
                height: 68px;
                background: url("../assets/images/img_logo_nav_1.png") center no-repeat;
                margin: auto;
            }
        }
        .hc-nav-box{
            display: flex;
            height: 100%;
            align-items: center;
            .nav-item{
                height: 100%;
                &>a{
                    text-decoration: none;
                    display: block;
                    line-height: 68px;
                    padding: 0 20px;
                    color: @font-color;
                    font-weight: 400;
                }
                &:hover, &.cur{
                    border-bottom: 2px solid @font-color-active;
                    background:rgba(247,249,255,1);
                    color: @font-color-active;
                    &>a{
                        color: @font-color-active;
                        font-weight: 500;
                    }
                }

            }

        }
    }




</style>