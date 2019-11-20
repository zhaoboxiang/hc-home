<template>
  <div class="hc-drop-down-box" @mouseleave="hideOnMouseLeave">
    <div class="drop-down-box-content">
      <div v-for="product in productList" :key="product.id">
        <div class="content-title">
          <a :href="`${product.destination}`">{{ product.title }}</a>
          <a :href="`${product.destination}`"
            >了解更多
            <img
              :src="`${require('../../assets/images/icon_more_blue.png')}`"
              alt=""
          /></a>
        </div>
        <div class="nav-lists-wrap">
          <div class="nav-list-left">
            <a
              :href="`${navL.destination}`"
              v-for="navL in product.navList.listLeft"
              :key="navL.id"
              @click="activeCurNav(navL)"
              :class="{
                active:
                  storedTitle === navL.title &&
                  navL.destination.indexOf(curPath) > -1
              }"
              >{{ navL.title }}</a
            >
          </div>
          <div class="nav-list-right">
            <a
              :href="`${navR.destination}`"
              v-for="navR in product.navList.listRight"
              :key="navR.id"
              @click="activeCurNav(navR)"
              :class="{
                active:
                  storedTitle === navR.title &&
                  navR.destination.indexOf(curPath) > -1
              }"
              >{{ navR.title }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const shortid = require("shortid");
import Cookies from "js-cookie";

export default {
  name: "DropDownBox",
  data() {
    return {
      storedTitle: Cookies.get("CURRENT_PRODUCT_NAV"),
      curPath: window.location.pathname.replace(/^\/|\.html$/g, ""),
      isVisible: false,
      productList: [
        {
          title: "智慧环保产品",
          destination: "wisdom-env-product.html",
          id: shortid.generate(),
          navList: {
            listLeft: [
              {
                title: "微站监测系统",
                destination: "env-detail-product.html",
                id: shortid.generate()
              },
              {
                title: "走航监测系统",
                destination: "env-detail-product.html",
                id: shortid.generate()
              },
              {
                title: "企业电量监控系统",
                destination: "env-detail-product.html",
                id: shortid.generate()
              },
              {
                title: "视频监控识别系统",
                destination: "env-detail-product.html",
                id: shortid.generate()
              },
              {
                title: "空气质量预报预警系统",
                destination: "env-detail-product.html",
                id: shortid.generate()
              },
              {
                title: "一源一档系统",
                destination: "env-detail-product.html",
                id: shortid.generate()
              }
            ],
            listRight: [
              {
                title: "网格化监管系统",
                destination: "env-detail-product.html",
                id: shortid.generate()
              },
              {
                title: "渣土车智能监管系统",
                destination: "env-detail-product.html",
                id: shortid.generate()
              },
              {
                title: "重污染天气应急响应系统",
                destination: "env-detail-product.html",
                id: shortid.generate()
              },
              {
                title: "环境综合分析系统",
                destination: "env-detail-product.html",
                id: shortid.generate()
              },
              {
                title: "大气污染防治综合决策支持系统",
                destination: "env-detail-product.html",
                id: shortid.generate()
              }
            ]
          }
        },
        {
          title: "智慧水务产品",
          destination: "wisdom-water-product.html",
          id: shortid.generate(),
          navList: {
            listLeft: [
              {
                title: "地表水监测系统",
                destination: "water-detail-product.html",
                id: shortid.generate()
              },
              {
                title: "地下水监测系统",
                destination: "water-detail-product.html",
                id: shortid.generate()
              },
              {
                title: "水库湖泊雨情监测系统",
                destination: "water-detail-product.html",
                id: shortid.generate()
              },
              {
                title: "河湖长制管理信息系统",
                destination: "water-detail-product.html",
                id: shortid.generate()
              },
              {
                title: "取水泵远程监控系统",
                destination: "water-detail-product.html",
                id: shortid.generate()
              },
              {
                title: "水厂远程监控系统",
                destination: "water-detail-product.html",
                id: shortid.generate()
              }
            ],
            listRight: [
              {
                title: "管网监测系统",
                destination: "water-detail-product.html",
                id: shortid.generate()
              },
              {
                title: "直饮水实时在线监测系统",
                destination: "water-detail-product.html",
                id: shortid.generate()
              },
              {
                title: "城市道路积水监测预警系统",
                destination: "water-detail-product.html",
                id: shortid.generate()
              },
              {
                title: "污水处理实时在线监测系统",
                destination: "water-detail-product.html",
                id: shortid.generate()
              },
              {
                title: "海绵城市在线监测系统",
                destination: "water-detail-product.html",
                id: shortid.generate()
              }
            ]
          }
        },
        {
          title: "智慧园区产品",
          destination: "wisdom-park-product.html",
          id: shortid.generate(),
          navList: {
            listLeft: [
              {
                title: "企业档案画像",
                destination: "park-detail-product.html",
                id: shortid.generate()
              },
              {
                title: "物业管理与服务",
                destination: "park-detail-product.html",
                id: shortid.generate()
              },
              {
                title: "企业服务平台",
                destination: "park-detail-product.html",
                id: shortid.generate()
              },
              {
                title: "园付通",
                destination: "park-detail-product.html",
                id: shortid.generate()
              }
            ],
            listRight: []
          }
        }
      ]
    };
  },
  methods: {
    activeCurNav(nav) {
      Cookies.set("CURRENT_PRODUCT_NAV", nav.title);
    },
    hideOnMouseLeave() {
      this.$emit("hideProductNavBox", this.isVisible);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/global";
.hc-drop-down-box {
  width: 100%;
  position: absolute;
  top: 68px;
  left: 0;
  overflow: hidden;
  background: rgba(255, 255, 255, 1);
  border-radius: 0 0 2px 2px;
  z-index: 2;
  height: 282px;
  box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.06);
}
.drop-down-box-content {
  margin: 0 auto;
  width: 1200px;

  display: flex;
  justify-content: space-between;
  .content-title {
    overflow: hidden;
    border-bottom: 1px solid rgba(13, 25, 136, 0.3);
    box-sizing: border-box;
    height: 50px;
    line-height: 50px;
    a {
      color: rgba(48, 60, 168, 1);
      &:hover {
        text-decoration: none;
        color: rgba(48, 60, 168, 1);
      }
      &:first-child {
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC, Microsoft Yahei, sans-serif;
        font-weight: 500;
        float: left;
      }
      &:last-child {
        float: right;
      }
    }
  }
  .nav-lists-wrap {
    display: flex;
    justify-content: space-between;
    .nav-list-left {
      padding-right: 40px;
    }
    .nav-list-left,
    .nav-list-right {
      padding-top: 12px;
      a.active {
        color: rgba(48, 60, 168, 1);
      }
      a {
        display: block;
        padding: 5px 0;
        border: none !important;
        color: @font-color;

        &:hover {
          text-decoration: none;
          color: rgba(48, 60, 168, 1);
        }
      }
    }
    .nav-list-right:last-child {
      width: 180px;
    }
  }
}
</style>
