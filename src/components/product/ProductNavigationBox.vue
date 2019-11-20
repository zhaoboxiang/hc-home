<template>
  <div class="hc-drop-down-box" @mouseleave="hideOnMouseLeave">
    <div
      class="drop-down-box-content"
      v-for="product in productList"
      :key="product.id"
    >
      <div class="wisdom-environment">
        <div class="content-title">
          <a href="">{{ product.title }}</a>
          <a href=""
            ><img src="../../assets/images/icon_more_blue.png" alt="" />了解更多</a
          >
        </div>
        <div class="nav-lists-wrap">
          <div
            class="nav-list-left"
            v-for="nav in product.envNavList.navLeft"
            :key="nav.id"
          >
            <a :href="`javascript:;`" @click="test1(nav, product.envNavList.navLeft)">{{ nav.title }}</a>
          </div>
          <div
            class="nav-list-right"
            v-for="nav in product.envNavList.navRight"
            :key="nav.id"
          >
            <a  :href="nav.destination">{{ nav.title }}</a>
          </div>
        </div>
      </div>
      <!--      <div class="wisdom-environment">-->
      <!--        <div class="content-title">-->
      <!--          <a :href="`wisdom-env-product.html`">智慧环保产品</a>-->
      <!--          <a :href="`wisdom-env-product.html`"-->
      <!--            >了解更多 <img src="../assets/images/icon_more_blue.png" alt=""-->
      <!--          /></a>-->
      <!--        </div>-->
      <!--        <div class="nav-lists-wrap">-->
      <!--          <div class="nav-list-left">-->
      <!--            &lt;!&ndash;            v-scroll-to="`#wzjc-sys`"&ndash;&gt;-->
      <!--            <a :href="`env-detail-product.html`" id="#wzjc-sys">微站监测系统</a>-->
      <!--            &lt;!&ndash;            v-scroll-to="`#zhjc-sys`"&ndash;&gt;-->
      <!--            <a :href="`env-detail-product.html`" id="`#zhjc-sys`"-->
      <!--              >走航监测系统</a-->
      <!--            >-->
      <!--            &lt;!&ndash;            v-scroll-to="`#qydljk-sys`"&ndash;&gt;-->
      <!--            <a :href="`env-detail-product.html`" id="`#qydljk-sys`"-->
      <!--              >企业电量监控系统</a-->
      <!--            >-->
      <!--            &lt;!&ndash;            v-scroll-to="`#spjksb-sys`"&ndash;&gt;-->
      <!--            <a :href="`env-detail-product.html`" id="`#spjksb-sys`"-->
      <!--              >视频监控识别系统</a-->
      <!--            >-->
      <!--            &lt;!&ndash;            v-scroll-to="`#kqzlybyj-sys`"&ndash;&gt;-->
      <!--            <a :href="`env-detail-product.html`" id="`#kqzlybyj-sys`"-->
      <!--              >空气质量预报预警系统</a-->
      <!--            >-->
      <!--            &lt;!&ndash;            v-scroll-to="`#yyyd-sys`"&ndash;&gt;-->
      <!--            <a :href="`env-detail-product.html`" id="`#yyyd-sys`"-->
      <!--              >一源一档系统</a-->
      <!--            >-->
      <!--          </div>-->
      <!--          <div class="nav-list-right">-->
      <!--            &lt;!&ndash;            v-scroll-to="`#wghjg-sys`"&ndash;&gt;-->
      <!--            <a :href="`env-detail-product.html`" id="`#wghjg-sys`"-->
      <!--              >网格化监管系统</a-->
      <!--            >-->
      <!--            &lt;!&ndash;            v-scroll-to="`#ztcznjg-sys`"&ndash;&gt;-->
      <!--            <a :href="`env-detail-product.html`" id="`#ztcznjg-sys`"-->
      <!--              >渣土车智能监管系统</a-->
      <!--            >-->
      <!--            &lt;!&ndash;            v-scroll-to="`#zwrtqyjxy-sys`"&ndash;&gt;-->
      <!--            <a :href="`env-detail-product.html`" id="`#zwrtqyjxy-sys`"-->
      <!--              >重污染天气应急响应系统</a-->
      <!--            >-->
      <!--            &lt;!&ndash;            v-scroll-to="`#hjzhfx-sys`"&ndash;&gt;-->
      <!--            <a :href="`env-detail-product.html`" id="`#hjzhfx-sys`"-->
      <!--              >环境综合分析系统</a-->
      <!--            >-->
      <!--            &lt;!&ndash;            v-scroll-to="`#dqwrfzzhjczc-sys`"&ndash;&gt;-->
      <!--            <a :href="`env-detail-product.html`" id="`#dqwrfzzhjczc-sys`"-->
      <!--              >大气污染防治综合决策支持系统</a-->
      <!--            >-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      <div class="wisdom-water">-->
      <!--        <div class="content-title">-->
      <!--          <a :href="`wisdom-water-product.html`" class="title">智慧水务产品</a>-->
      <!--          <a :href="`wisdom-water-product.html`"-->
      <!--            >了解更多 <img src="../assets/images/icon_more_blue.png" alt=""-->
      <!--          /></a>-->
      <!--        </div>-->
      <!--        <div class="nav-lists-wrap">-->
      <!--          <div class="nav-list-left">-->
      <!--            &lt;!&ndash;            v-scroll-to="`#dbsjc-sys`"&ndash;&gt;-->
      <!--            <a :href="`water-detail-product.html`" :style="`color: red`"-->
      <!--              >地表水监测系统</a-->
      <!--            >-->
      <!--            &lt;!&ndash;            v-scroll-to="`#dxsjc-sys`"&ndash;&gt;-->
      <!--            <a :href="`water-detail-product.html`">地下水监测系统</a>-->
      <!--            &lt;!&ndash;            v-scroll-to="`#skhpyqjc-sys`"&ndash;&gt;-->
      <!--            <a :href="`water-detail-product.html`">水库湖泊雨情监测系统</a>-->
      <!--            &lt;!&ndash;            v-scroll-to="`#hhczglxx-sys`"&ndash;&gt;-->
      <!--            <a :href="`water-detail-product.html`">河湖长制管理信息系统</a>-->
      <!--            &lt;!&ndash;            v-scroll-to="`#qsbycjk-sys`"&ndash;&gt;-->
      <!--            <a :href="`water-detail-product.html`">取水泵远程监控系统</a>-->
      <!--            &lt;!&ndash;            v-scroll-to="`#scycjk-sys`"&ndash;&gt;-->
      <!--            <a :href="`water-detail-product.html`">水厂远程监控系统</a>-->
      <!--          </div>-->
      <!--          <div class="nav-list-right">-->
      <!--            &lt;!&ndash;            v-scroll-to="`#gwjc-sys`"&ndash;&gt;-->
      <!--            <a :href="`water-detail-product.html`">管网监测系统</a>-->
      <!--            &lt;!&ndash;            v-scroll-to="`#zyssszxjc-sys`"&ndash;&gt;-->
      <!--            <a :href="`water-detail-product.html`">直饮水实时在线监测系统</a>-->
      <!--            &lt;!&ndash;            v-scroll-to="`#csdljsjcyj-sys`"&ndash;&gt;-->
      <!--            <a :href="`water-detail-product.html`">城市道路积水监测预警系统</a>-->
      <!--            &lt;!&ndash;            v-scroll-to="`#wsclsszxjc-sys`"&ndash;&gt;-->
      <!--            <a :href="`water-detail-product.html`">污水处理实时在线监测系统</a>-->
      <!--            &lt;!&ndash;            v-scroll-to="`#hmcszxjc-sys`"&ndash;&gt;-->
      <!--            <a :href="`water-detail-product.html`">海绵城市在线监测系统</a>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      <div class="wisdom-park">-->
      <!--        <div class="content-title">-->
      <!--          <a class="title" :href="`wisdom-park-product.html`">智慧园区产品</a>-->
      <!--          <a :href="`wisdom-park-product.html`"-->
      <!--            >了解更多 <img src="../assets/images/icon_more_blue.png" alt=""-->
      <!--          /></a>-->
      <!--        </div>-->
      <!--        <div class="nav-lists-wrap">-->
      <!--          <div class="nav-list-left">-->
      <!--            &lt;!&ndash;            v-scroll-to="`#qydahx-sys`"&ndash;&gt;-->
      <!--            <a :href="`park-detail-product.html`">企业档案画像</a>-->
      <!--            &lt;!&ndash;            v-scroll-to="`#wyglyfw-sys`"&ndash;&gt;-->
      <!--            <a :href="`park-detail-product.html`">物业管理与服务</a>-->
      <!--            &lt;!&ndash;            v-scroll-to="`#qyfwpt-sys`"&ndash;&gt;-->
      <!--            <a :href="`park-detail-product.html`">企业服务平台</a>-->
      <!--            &lt;!&ndash;            v-scroll-to="`#yft-sys`"&ndash;&gt;-->
      <!--            <a :href="`park-detail-product.html`">园付通</a>-->
      <!--          </div>-->
      <!--          <div class="nav-list-right" style="width: 150px"></div>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script>
const shortid = require("shortid");
const array = require("lodash/array");
export default {
  name: "DropDownBox",
  data() {
    return {
      isVisible: false,
      navArr: [],
      style: "",
      productList: [
        {
          title: "env",
          destination: "index.html",
          id: shortid.generate(),
          envNavList: {
            navLeft: [
              {
                title: "env-sys",
                destination: "index.html",
                id: shortid.generate()
              }
            ],
            navRight: [
              {
                title: "env-sys",
                destination: "index.html",
                id: shortid.generate()
              }
            ]
          }
        },
        {
          title: "water",
          destination: "index.html",
          id: shortid.generate(),
          envNavList: {
            navLeft: [
              {
                title: "water-sys",
                destination: "index.html",
                id: shortid.generate()
              }
            ],
            navRight: [
              {
                title: "water-sys",
                destination: "index.html",
                id: shortid.generate()
              }
            ]
          }
        },
        {
          title: "park",
          destination: "index.html",
          id: shortid.generate(),
          envNavList: {
            navLeft: [
              {
                title: "park-sys",
                destination: "index.html",
                id: shortid.generate()
              }
            ],
            navRight: [
              {
                title: "park-sys",
                destination: "index.html",
                id: shortid.generate()
              }
            ]
          }
        }
      ]
    };
  },
  methods: {
    scrollTo(element) {
      this.$scrollTo(element, 500, { onStart: false });
    },
    activeCurNav(event) {
      // event.preventDefault()
      this.navArr.push(event.target.innerText);
      console.log("3333", event.target.id, this.navArr);
    },
    hideOnMouseLeave() {
      this.$emit("hideProductNavBox", this.isVisible);
    },
    test1(nav, list) {
      console.log(nav, list)
    }
  },
  mounted() {
    console.log(
      array,
      this.$_.sortedIndexBy(this.productList, {"title": 'water-sys'})
    );
    // var result = array.find(this.productList, ["title", "park-sys"]);
    // console.log(result);
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
  zoverflow: hidden;
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
      a {
        display: block;
        padding: 5px 0;
        border: none !important;
        color: @font-color;

        &:hover {
          text-decoration: none;
          color: rgba(48, 60, 168, 1);
        }
        &:active {
          color: red;
        }
      }
    }
  }
}
</style>
