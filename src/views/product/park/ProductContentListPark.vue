<template>
  <div class="product-list bg-light-purple">
    <div class="content list-content">
      <div class="pro-name">智慧园区产品</div>
      <div class="list-line" v-if="navList && navList.length > 0">
        <a
          v-for="(item, index) in navList"
          @click="activeCurNav(item)"
          :key="index"
          :href="`product-detail.html?name=park`"
          >{{ item.name }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductContentListPark",
  data() {
    return {
      //"qydahx-sys", "wyglyfw-sys", "qyfwpt-sys", "yft-sys"
      navList: [
        {
          anchor: "qydahx-sys",
          name: "企业档案画像"
        },
        {
          anchor: "wyglyfw-sys",
          name: "物业管理与服务"
        },
        {
          anchor: "qyfwpt-sys",
          name: "企业服务平台"
        },
        {
          anchor: "yft-sys",
          name: "园付通"
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
