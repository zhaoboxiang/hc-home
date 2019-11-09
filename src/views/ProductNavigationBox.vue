<template>
  <div class="hc-drop-down-box" @mouseleave="hideOnMouseLeave">
    <div class="drop-down-box-content">
      <div class="wisdom-environment">
        <div class="content-title">
          <p class="title" style="float: left">智慧环保产品</p>
          <p style="float: right;">了解更多 ></p>
        </div>
        <div class="nav-lists-wrap">
          <div class="nav-list-left">
            <router-link :to="{ name: 'home' }">微站监测系统</router-link>
            <router-link :to="{ name: 'home' }">走航监测系统</router-link>
            <router-link :to="{ name: 'home' }">企业电量监控系统</router-link>
            <router-link :to="{ name: 'home' }">视频监控识别系统</router-link>
            <router-link :to="{ name: 'home' }"
              >空气质量预报预警系统</router-link
            >
            <router-link :to="{ name: 'home' }">一源一档系统</router-link>
          </div>
          <div class="nav-list-right">
            <router-link :to="{ name: 'home' }">网格化监管系统</router-link>

            <router-link :to="{ name: 'home' }">渣土车智能监管系统</router-link>

            <router-link :to="{ name: 'home' }"
              >重污染天气应急响应系统</router-link
            >

            <router-link :to="{ name: 'home' }">环境综合分析系统</router-link>

            <router-link :to="{ name: 'home' }"
              >大气污染防治综合决策支持系统</router-link
            >
          </div>
        </div>
      </div>
      <div class="wisdom-water">
        <div class="content-title">
          <p class="title">智慧水务产品</p>
          <p>了解更多 ></p>
        </div>
        <div class="nav-lists-wrap">
          <div class="nav-list-left">
            <router-link :to="{ name: 'home' }">地表水监测系统</router-link>
            <router-link :to="{ name: 'home' }">地下水监测系统</router-link>
            <router-link :to="{ name: 'home' }">水库监测系统</router-link>
            <router-link :to="{ name: 'home' }"
              >河湖长制管理信息系统</router-link
            >
            <router-link :to="{ name: 'home' }">取水泵远程监控系统</router-link>
            <router-link :to="{ name: 'home' }">水厂远程监控系统</router-link>
          </div>
          <div class="nav-list-right">
            <router-link :to="{ name: 'home' }">管网监测系统</router-link>
            <router-link :to="{ name: 'home' }"
              >直饮水实时在线监测系统</router-link
            >
            <router-link :to="{ name: 'home' }"
              >城市道路积水监测预警系统</router-link
            >
            <router-link :to="{ name: 'home' }"
              >污水处理实时在线监测系统</router-link
            >
            <router-link :to="{ name: 'home' }"
              >海绵城市在线监测系统</router-link
            >
          </div>
        </div>
      </div>
      <div class="wisdom-park">
        <div class="content-title">
          <p class="title">智慧园区产品</p>
          <p>了解更多 ></p>
        </div>
        <div class="nav-lists-wrap">
          <div class="nav-list-left">
            <router-link :to="{ name: 'home' }">企业档案画像</router-link>
            <router-link :to="{ name: 'home' }">物业管理与服务</router-link>
            <router-link :to="{ name: 'home' }">企业服务平台</router-link>
            <router-link :to="{ name: 'home' }">园付通</router-link>
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
    p {
      color: rgba(48, 60, 168, 1);
    }
    p:first-child {
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC, Microsoft Yahei, sans-serif;
      font-weight: 500;
      float: left;
    }
    p:last-child {
      float: right;
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
        &:hover {
          text-decoration: none;
          color: rgba(48, 60, 168, 1);
        }
      }
    }
  }
}
</style>
