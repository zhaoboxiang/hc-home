<template>
  <div class="product-list bg-light-purple">
    <div class="content list-content">
      <div class="pro-name">智慧环保产品</div>
      <div class="list-line" v-if="navList && navList.length > 0">
        <a
          v-for="(item, index) in navList"
          @click="activeCurNav(item)"
          :key="index"
          :href="`product-detail.html?name=env`"
          >{{ item.name }}</a
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
          anchor: "wzjc-sys",
          name: "微站监测系统"
        },
        {
          anchor: "zhjc-sys",
          name: "走航监测系统"
        },
        {
          anchor: "spjksb-sys",
          name: "视频监控识别系统"
        },
        {
          anchor: "qydljk-sys",
          name: "企业电量监控系统"
        },
        {
          anchor: "kqzlybyj-sys",
          name: "空气质量预报预警系统"
        },
        {
          anchor: "yyyd-sys",
          name: "一源一档系统"
        },
        {
          anchor: "wghjg-sys",
          name: "网格化监管系统"
        },
        {
          anchor: "ztcznjg-sys",
          name: "渣土车智能监管系统"
        },
        {
          anchor: "zwrtqyjxy-sys",
          name: "重污染天气应急响应系统"
        },
        {
          anchor: "hjzhfx-sys",
          name: "环境综合分析系统"
        },
        {
          anchor: "dqwrfzzhjczc-sys",
          name: "大气污染防治综合决策支持系统"
        }
      ]
    };
  },
  methods: {
    activeCurNav(nav) {
      localStorage.setItem("CURRENT_ANCHOR", nav.anchor);
    }
  }
};
</script>

<style scoped lang="less">
@import "../../../assets/css/global";
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
