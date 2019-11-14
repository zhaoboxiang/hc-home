<template>
  <div class="hc-introduction bg-light-purple">
    <div class="content hc-introduction-content">
      <div class="hc-intro-detail">
        <h1>关于我们</h1>
        <p class="intro-title">深圳虹川科技有限公司</p>
        <p>
          深圳虹川科技有限公司是中国领先的绿色智慧城市解决方案提供商，在智慧城市、环保和水务等领域深耕多年。综合应用物联网、大数据、人工智能和5G等先进技术，向客户提供以改善环境质量为目标的整体解决方案。公司核心人员均来自华为、中兴和平安等公司，成功实施过深圳、上海、济南等多个智慧城市标杆项目。
        </p>
        <div class="btn-more">
          <router-link to="about">了解更多</router-link>
        </div>
      </div>
      <div class="hc-intro-picture">
        <img src="../assets/images/img_about_company_photo.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeContentIntroduction"
};
</script>

<style scoped></style>