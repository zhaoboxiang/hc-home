<template>
  <div class="product-nav">
    <div class="nav-box">
      <div class="content banner-nav">
        <div
          :class="['ban-nav-item']"

        >
          <router-link :to="{ name: 'product-env' }">
            <div class="item-icon icon-1"></div>
            <div class="item-tips">智慧环保产品</div>
          </router-link>
        </div>
        <div
          :class="['ban-nav-item']"

        >
          <router-link :to="{ name: 'product-water'}">
            <div class="item-icon icon-2"></div>
            <div class="item-tips">智慧水务产品</div>
          </router-link>
        </div>
        <div
          :class="['ban-nav-item']"

        >
          <router-link :to="{ name: 'product-park' }">
            <div class="item-icon icon-3"></div>
            <div class="item-tips">智慧园区产品</div>
          </router-link>
        </div>
      </div>
      <!--<div-->
      <!--v-if="navListObj && navListObj.length > 0"-->
      <!--class="content banner-nav"-->
      <!--&gt;-->
      <!--<div-->
      <!--v-for="(item, index) in navListObj"-->
      <!--:key="index"-->
      <!--:class="['ban-nav-item', {'ban-nav-cur':item.isCurrent}]"-->
      <!--@click="navClick1(item.navType)"-->
      <!--&gt;-->
      <!--<div :class="['item-icon', 'icon-' + (index + 1)]"></div>-->
      <!--<div class="item-tips">{{ item.navTitle }}</div>-->
      <!--</div>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductContentNav",
  data() {
    const TYPE_OBJ = {
      water: "water",
      park: "park",
      envpro: "envpro"
    };
    return {
      bannerNavType: {
        water: TYPE_OBJ.water,
        park: TYPE_OBJ.park,
        envpro: TYPE_OBJ.envpro
      },
      // currentIsEvnPro: true,
      // currentIsWater: false,
      // currentIsPark: false,
      navListObj: [
        {
          navType: TYPE_OBJ.envpro,
          isCurrent: true,
          navTitle: "智慧环保产品1"
        },
        {
          navType: TYPE_OBJ.water,
          isCurrent: false,
          navTitle: "智慧水务产品1"
        },
        {
          navType: TYPE_OBJ.park,
          isCurrent: false,
          navTitle: "智慧园区产品1"
        }
      ]
    };
  },
  methods: {
    // navClick: function() {
    //   // this.changeCur(e);
    // },
    // changeCur: function(e) {
    //   if (e === this.bannerNavType.water) {
    //     this.clearCur();
    //     this.currentIsWater = true;
    //   } else if (e === this.bannerNavType.park) {
    //     this.clearCur();
    //     this.currentIsPark = true;
    //   } else {
    //     this.clearCur();
    //     this.currentIsEvnPro = true;
    //   }
    // },
    // clearCur: function() {
    //   this.currentIsEvnPro = false;
    //   this.currentIsWater = false;
    //   this.currentIsPark = false;
    // }
  }
};
</script>

<style scoped lang="less">
@import "../assets/css/global";
.product-nav {
  position: relative;
  .nav-box {
    position: absolute;
    background: rgba(21, 32, 131, 0.3);
    left: 0;
    right: 0;
    bottom: 0;
    .banner-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 160px;
      color: #fff;
      .ban-nav-item {
        height: 100%;
        flex: 1;
        text-align: center;
        .item-icon {
          width: 64px;
          height: 64px;
          margin: 24px auto 16px;
        }
        .icon-1 {
          background: url("../assets/images/product/icon_yewu_1.png") center
            no-repeat;
          background-size: 100% 100%;
        }
        .icon-2 {
          background: url("../assets/images/product/icon_yewu_2.png") center
            no-repeat;
          background-size: 100% 100%;
        }
        .icon-3 {
          background: url("../assets/images/product/icon_yewu_3.png") center
            no-repeat;
          background-size: 100% 100%;
        }
        .item-tips {
          font-size: 20px;
          color: #fff;
        }
      }
      .ban-nav-cur,
      .ban-nav-item:hover {
        background: linear-gradient(
          180deg,
          rgba(83, 98, 235, 1) 0%,
          rgba(48, 60, 168, 1) 100%
        );
        cursor: pointer;
      }
    }
  }
}
</style>
