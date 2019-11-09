<template>
  <div class="product-list bg-light-purple">
    <div class="content list-content">
      <div class="pro-name">智慧环保产品</div>
      <div class="list-line" v-if="navList && navList.length > 0">
        <router-link
          v-for="(item, index) in navList"
          :key="index"
          :to="{ name: item.url, params: { name: item.params } }"
          >{{ item.name }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductContentListEvn",
  data() {
    // wzjc-sys zhjc-sys spjksb-sys qydljk-sys kqzlybbj-sys yyyd-sys wghjg-sys ztcznjg-sys zwrtqyjxy-sys hjzhfx-sys
    return {
      navList: [
        {
          url: "product-detail",
          params: "wzjc-sys",
          name: "微站监测系统"
        },
        {
          url: "product-detail",
          params: "zhjc-sys",
          name: "走航监测系统"
        },
        {
          url: "product-detail",
          params: "spjksb-sys",
          name: "视频监控识别系统"
        },
        {
          url: "product-detail",
          params: "qydljk-sys",
          name: "企业电量监控系统"
        },
        {
          url: "product-detail",
          params: "kqzlybbj-sys",
          name: "空气质量预报预警系统"
        },
        {
          url: "product-detail",
          params: "yyyd-sys",
          name: "一源一档系统"
        },
        {
          url: "product-detail",
          params: "wghjg-sys",
          name: "网格化监管系统"
        },
        {
          url: "product-detail",
          params: "ztcznjg-sys",
          name: "渣土车智能监管系统"
        },
        {
          url: "product-detail",
          params: "zwrtqyjxy-sys",
          name: "重污染天气应急响应系统"
        },
        {
          url: "product-detail",
          params: "hjzhfx-sys",
          name: "环境综合分析系统"
        },
        {
          url: "product-detail",
          params: "dqwrfzzhjczc-sys",
          name: "大气污染防治综合决策支持系统"
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
@import "../assets/css/global";
.product-list {
  padding: 80px 120px;
  .pro-name {
    font-size: 36px;
    color: @font-color-active;
    margin-bottom: 48px;
    text-align: center;
  }
  .list-line {
    a {
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
        text-decoration: none;
      }
    }
  }
}
</style>
