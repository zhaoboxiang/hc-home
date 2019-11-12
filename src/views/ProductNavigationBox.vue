<template>
  <div class="hc-drop-down-box" @mouseleave="hideOnMouseLeave">
    <div class="drop-down-box-content">
      <div class="wisdom-environment">
        <div class="content-title">
          <router-link :to="{ name: 'product-env' }">智慧环保产品</router-link>
          <router-link :to="{ name: 'product-env' }">了解更多 <img src="../assets/images/icon_more_blue.png"/></router-link>
        </div>
        <div class="nav-lists-wrap">
          <div class="nav-list-left">
            <router-link
              :to="{ name: 'product-detail-env', params: { name: 'wzjc-sys' } }"
              v-scroll-to="`#wzjc-sys`"
              >微站监测系统</router-link
            >
            <router-link
              :to="{ name: 'product-detail-env', params: { name: 'zhjc-sys' } }"
              v-scroll-to="`#zhjc-sys`"
              >走航监测系统</router-link
            >
            <router-link
              :to="{
                name: 'product-detail-env',
                params: { name: 'qydljk-sys' }
              }"
              v-scroll-to="`#qydljk-sys`"
              >企业电量监控系统</router-link
            >
            <router-link
              :to="{
                name: 'product-detail-env',
                params: { name: 'spjksb-sys' }
              }"
              v-scroll-to="`#spjksb-sys`"
              >视频监控识别系统</router-link
            >
            <router-link
              :to="{
                name: 'product-detail-env',
                params: { name: 'kqzlybyj-sys' }
              }"
              v-scroll-to="`#kqzlybyj-sys`"
              >空气质量预报预警系统</router-link
            >
            <router-link
              :to="{ name: 'product-detail-env', params: { name: 'yyyd-sys' } }"
              v-scroll-to="`#yyyd-sys`"
              >一源一档系统</router-link
            >
          </div>
          <div class="nav-list-right">
            <router-link
              :to="{
                name: 'product-detail-env',
                params: { name: 'wghjg-sys' }
              }"
              v-scroll-to="`#wghjg-sys`"
              >网格化监管系统</router-link
            >

            <router-link
              :to="{
                name: 'product-detail-env',
                params: { name: 'ztcznjg-sys' }
              }"
              v-scroll-to="`#ztcznjg-sys`"
              >渣土车智能监管系统</router-link
            >

            <router-link
              :to="{
                name: 'product-detail-env',
                params: { name: 'zwrtqyjxy-sys' }
              }"
              v-scroll-to="`#zwrtqyjxy-sys`"
              >重污染天气应急响应系统</router-link
            >

            <router-link
              :to="{
                name: 'product-detail-env',
                params: { name: 'hjzhfx-sys' }
              }"
              v-scroll-to="`#hjzhfx-sys`"
              >环境综合分析系统</router-link
            >

            <router-link
              :to="{
                name: 'product-detail-env',
                params: { name: 'dqwrfzzhjczc-sys' }
              }"
              v-scroll-to="`#dqwrfzzhjczc-sys`"
              >大气污染防治综合决策支持系统</router-link
            >
          </div>
        </div>
      </div>
      <div class="wisdom-water">
        <div class="content-title">
          <router-link :to="{ name: 'product-water' }" class="title"
            >智慧水务产品</router-link
          >
          <router-link :to="{ name: 'product-water' }">了解更多 <img src="../assets/images/icon_more_blue.png"/></router-link>
        </div>
        <div class="nav-lists-wrap">
          <div class="nav-list-left">
            <router-link
              :to="{
                name: 'product-detail-water',
                params: { name: 'dbsjc-sys' }
              }"
              v-scroll-to="`#dbsjc-sys`"
              >地表水监测系统</router-link
            >
            <router-link
              :to="{
                name: 'product-detail-water',
                params: { name: 'dxsjc-sys' }
              }"
              v-scroll-to="`#dxsjc-sys`"
              >地下水监测系统</router-link
            >
            <router-link
              :to="{
                name: 'product-detail-water',
                params: { name: 'skjc-sys' }
              }"
              v-scroll-to="`#skjc-sys`"
              >水库监测系统</router-link
            >
            <router-link
              :to="{
                name: 'product-detail-water',
                params: { name: 'hhczglxx-sys' }
              }"
              v-scroll-to="`#hhczglxx-sys`"
              >河湖长制管理信息系统</router-link
            >
            <router-link
              :to="{
                name: 'product-detail-water',
                params: { name: 'qsbycjk-sys' }
              }"
              v-scroll-to="`#qsbycjk-sys`"
              >取水泵远程监控系统</router-link
            >
            <router-link
              :to="{
                name: 'product-detail-water',
                params: { name: 'scycjk-sys' }
              }"
              v-scroll-to="`#scycjk-sys`"
              >水厂远程监控系统</router-link
            >
          </div>
          <div class="nav-list-right">
            <router-link
              :to="{
                name: 'product-detail-water',
                params: { name: 'gwjc-sys' }
              }"
              v-scroll-to="`#gwjc-sys`"
              >管网监测系统</router-link
            >
            <router-link
              :to="{
                name: 'product-detail-water',
                params: { name: 'zyssszxjc-sys' }
              }"
              v-scroll-to="`#zyssszxjc-sys`"
              >直饮水实时在线监测系统</router-link
            >
            <router-link
              :to="{
                name: 'product-detail-water',
                params: { name: 'csdljsjcyj-sys' }
              }"
              v-scroll-to="`#csdljsjcyj-sys`"
              >城市道路积水监测预警系统</router-link
            >
            <router-link
              :to="{
                name: 'product-detail-water',
                params: { name: 'wsclsszxjc-sys' }
              }"
              v-scroll-to="`#wsclsszxjc-sys`"
              >污水处理实时在线监测系统</router-link
            >
            <router-link
              :to="{
                name: 'product-detail-water',
                params: { name: 'hmcszxjc-sys' }
              }"
              v-scroll-to="`#hmcszxjc-sys`"
              >海绵城市在线监测系统</router-link
            >
          </div>
        </div>
      </div>
      <div class="wisdom-park">
        <div class="content-title">
          <router-link class="title" :to="{ name: 'product-park' }"
            >智慧园区产品</router-link
          >
          <router-link :to="{ name: 'product-park' }">了解更多 <img src="../assets/images/icon_more_blue.png"/></router-link>
        </div>
        <div class="nav-lists-wrap">
          <div class="nav-list-left">
            <router-link
              :to="{
                name: 'product-detail-park',
                params: { name: 'qydahx-sys' }
              }"
              v-scroll-to="`#qydahx-sys`"
              >企业档案画像</router-link
            >
            <router-link
              :to="{
                name: 'product-detail-park',
                params: { name: 'wyglyfw-sys' }
              }"
              v-scroll-to="`#wyglyfw-sys`"
              >物业管理与服务</router-link
            >
            <router-link
              :to="{
                name: 'product-detail-park',
                params: { name: 'qyfwpt-sys' }
              }"
              v-scroll-to="`#qyfwpt-sys`"
              >企业服务平台</router-link
            >
            <router-link
              :to="{ name: 'product-detail-park', params: { name: 'yft-sys' } }"
              v-scroll-to="`#yft-sys`"
              >园付通</router-link
            >
          </div>
          <div class="nav-list-right" style="width: 150px"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropDownBox",
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    hideOnMouseLeave() {
      this.$emit("hideProductNavBox", this.isVisible);
    }
  }
};
</script>

<style lang="scss" scoped>
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
      a {
        display: block;
        padding: 5px 0;
        border: none !important;
        &:hover {
          text-decoration: none;
          color: rgba(48, 60, 168, 1);
        }
      }
    }
  }
}
</style>
