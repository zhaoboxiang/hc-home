<template>
  <div class="product-env-detail-wrap">
    <div class="env-detail-banner">
      <div class="banner-content">
        <img src="" alt="" />
        <span>智慧环保产品</span>
      </div>
    </div>
    <div class="env-content-detail-wrap">
      <div class="env-detail-main">
        <div class="detail-content">
          <h1>微站监测系统</h1>
          <p v-show="true">
            通过生态环境大数据中心的数据集成能力，将全市的空气质量微站的在线监测数据，进行采集、清洗、整合并入库；然后依托GIS地图的展示能力，将空气质量微站的点位基础信息，以及监测信息，以实时、直观、动态、可视化的方式进行呈现，用户可以实时掌握各站点的分布情况，实时查询到空气质量状况，以及历史趋势变化情况，并可以分级分参数进行实时排名，所属各级政府可随时了解本辖区空气质量变化趋势状况。
          </p>
          <img src="../assets/images/product-sub-zhhb.png" alt="虹川智慧环保" />
        </div>
      </div>
    </div>
    <div class="anchor-nav">
      <p>地表水监测系统</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductEnvironmentDetail"
};
</script>

<style lang="less" scoped>
@import "../assets/css/variables";
// 外层容器
.product-env-detail-wrap {
  width: 100%;
  font-family: @font-family;
}
// 锚点导航
.anchor-nav {
  width: 240px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  position: fixed;
  top: 408px;
  p {
    width: 220px;
    height: 40px;
    border-radius: 4px;
    padding: 10px;
    margin: 0 auto;
    &:hover {
      background-color: rgba(48, 60, 168, 1);
      color: #fff;
    }
  }
}
// 内容
.env-content-detail-wrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
  .env-detail-main {
    width: 1200px;
    text-align: center;
    .detail-content {
      padding: 80px 0;
      h1,
      p {
        padding-bottom: 30px;
        font-family: @font-family;
      }
      h1 {
        font-size: 32px;
        font-weight: 500;
        color: rgba(48, 60, 168, 1);
        line-height: 32px;
      }
      p {
        margin: 0 auto;
        width: 800px;
        font-size: 14px;
        font-weight: 400;
        color: rgba(68, 68, 68, 1);
        line-height: 24px;
      }
    }
  }
}
.env-detail-banner {
  height: 240px;
  background: linear-gradient(
    135deg,
    rgba(226, 242, 249, 1) 0%,
    rgba(224, 235, 249, 1) 49%,
    rgba(237, 234, 249, 1) 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;
  .banner-content {
    span {
      height: 48px;
      font-size: 48px;
      font-family: @font-family;
      font-weight: 500;
      color: rgba(48, 60, 168, 1);
      line-height: 48px;
    }
  }
}
</style>
