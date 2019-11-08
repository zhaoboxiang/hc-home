<template>
  <div class="product-banner-box">
    <div class="product-banner">
      <div class="content banner-content">
        <h3>产品中心</h3>
        <h6>PRODUCT CENTER</h6>
      </div>
      <div class="banner-nav-box">
        <div class="content banner-nav">
          <div
            class="ban-nav-item ban-nav-cur"
            @mouseover="navOver(bannerNavType.evnpro)"
          >
            <div class="item-icon icon-1"></div>
            <div class="item-tips">智慧环保产品</div>
          </div>
          <div class="ban-nav-item" @mouseover="navOver(bannerNavType.water)">
            <div class="item-icon icon-2"></div>
            <div class="item-tips">智慧水务产品</div>
          </div>
          <div class="ban-nav-item" @mouseover="navOver(bannerNavType.park)">
            <div class="item-icon icon-3"></div>
            <div class="item-tips">智慧园区产品</div>
          </div>
        </div>
      </div>
    </div>

    <div class="product-list bg-light-purple">
      <div class="content list-content">
        <div class="pro-name">
          {{ productShowObj.proName ? productShowObj.proName : "" }}
        </div>
        <div
          class="list-line"
          v-if="productShowObj.navList && productShowObj.navList.length > 0"
        >
          <span
            v-for="( item, index ) in productShowObj.navList"
            :key="index"
            >{{ item.name }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductContentBanner",
  data() {
    return {
      bannerNavType: {
        water: "water",
        park: "park",
        evnpro: "evnpro"
      },
      productList: {
        evnPro: {
          proName: "智慧环保产品",
          navList: [
            {
              url: "",
              name: "微站监测系统"
            },
            {
              url: "",
              name: "走航监测系统"
            },
            {
              url: "",
              name: "视频监控识别系统"
            },
            {
              url: "",
              name: "企业电量监控系统"
            },
            {
              url: "",
              name: "空气质量预报预警系统"
            },
            {
              url: "",
              name: "一源一档系统"
            },
            {
              url: "",
              name: "网格化监管系统"
            },
            {
              url: "",
              name: "渣土车智能监管系统"
            },
            {
              url: "",
              name: "重污染天气应急响应系统"
            },
            {
              url: "",
              name: "环境综合分析系统"
            },
            {
              url: "",
              name: "大气污染防治综合决策支持系统"
            }
          ]
        },
        waterPro: {
          proName: "智慧水务产品",
          navList: [
            {
              url: "",
              name: "水质监测预警系统"
            },{
              url: "",
              name: "地下水监测系统"
            },{
              url: "",
              name: "水库湖泊雨情监测系统"
            },{
              url: "",
              name: "河湖长制管理信息系统"
            },{
              url: "",
              name: "取水泵远程监控系统"
            },{
              url: "",
              name: "水厂远程监控系统"
            },{
              url: "",
              name: "管网监测系统"
            },{
              url: "",
              name: "直饮水实时在线监测系统"
            },{
              url: "",
              name: "城市道路积水监测预警系统"
            },{
              url: "",
              name: "污水处理实时在线监测系统"
            },{
              url: "",
              name: "海绵城市在线监测系统"
            }
          ]
        },
        parkPro: {
          proName: "智慧园区产品",
          navList: [
            {
              url: "",
              name: "智能停车系统"
            },
            {
              url: "",
              name: "楼宇及设备管理"
            },
            {
              url: "",
              name: "层园区环境在线监测系统"
            },
            {
              url: "",
              name: "园区安防系统"
            },
            {
              url: "",
              name: "消防监控管理系统"
            },
            {
              url: "",
              name: "园区可视化智能监控系统"
            }
          ]
        }
      },
      productShowObj: {}
    };
  },
  methods: {
    navOver: function(t) {
      if (t == this.bannerNavType.water) {
        this.productShowObj = this.productList.waterPro;
      } else if (t == this.bannerNavType.park) {
        this.productShowObj = this.productList.parkPro;
      } else {
        this.productShowObj = this.productList.evnPro;
      }
    },
    initProductShowObj: function() {
      this.productShowObj = this.productList.evnPro;
    }
  },
  mounted() {
    this.initProductShowObj();
    console.log(this.productShowObj);
  }
};
</script>

<style scoped lang="less">
@import "../assets/css/global";
.product-banner {
  background: @font-color-active;
  height: 600px;
  color: #fff;
  position: relative;

  .banner-content {
    background: url("../assets/images/product/img_cpzx_topimg.png") right top
      no-repeat;
    height: 100%;
    h3 {
      font-size: 48px;
      padding: 180px 0 20px;
    }
    h6 {
      font-size: 32px;
    }
  }
  .banner-nav-box {
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
      .ban-nav-item {
        height: 100%;
        flex: 1;
        text-align: center;
        .item-icon {
          width: 64px;
          height: 64px;
          background: bisque;
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
.product-list {
  padding: 80px 120px;
  .pro-name {
    font-size: 36px;
    color: @font-color-active;
    margin-bottom: 48px;
    text-align: center;
  }
  .list-line {
    span {
      display: inline-block;
      width: 300px;
      height: 68px;
      line-height: 68px;
      border: 1px solid @font-color-active;
      border-radius: 34px;
      font-size: 16px;
      color: @font-color-active;
      margin-right: 148px;
      text-align: center;
      margin-top: 32px;
      &:nth-child(3n) {
        margin-right: 0;
      }
      &:hover {
        background: @font-color-active;
        color: #fff;
        box-shadow: 0px 8px 16px 0px rgba(48, 60, 168, 0.2);
        cursor: pointer;
      }
    }
  }
}
</style>