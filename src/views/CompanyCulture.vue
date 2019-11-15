<template>
  <div class="company-culture">
    <div class="culture-box">
      <div class="content cul-content">
        <div class="cul-item" data-aos="fade-up" data-aos-delay="100">
          <div class="keyword">使命</div>
          <div class="keyword-en">MISSION</div>
          <p>科技赋能、产业报国</p>
        </div>
        <div class="line" data-aos="zoom-in" data-aos-delay="500"></div>
        <div class="cul-item" data-aos="fade-up" data-aos-delay="300">
          <div class="keyword">愿景</div>
          <div class="keyword-en">ASPIRATION</div>
          <p>绿色智慧城市理念倡行者</p>
        </div>
        <div class="line" data-aos="zoom-in" data-aos-delay="500"></div>
        <div class="cul-item" data-aos="fade-up" data-aos-delay="500">
          <div class="keyword">价值观</div>
          <div class="keyword-en">SENSE OF WORTH</div>
          <p>品质、责任、创新、协作</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyCulture"
};
</script>

<style scoped lang="less">
@import "../assets/css/global";
.culture-box {
  .cul-content {
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .cul-item {
      width: 220px;
      height: 220px;
      background: @font-color-active;
      color: #fff;
      border-radius: 100%;
      position: relative;
      border: 1px solid #95abd8;
      .keyword {
        font-size: 24px;
        margin-top: 46px;
      }
      .keyword-en {
        font-size: 12px;
        margin: 6px 0 16px;
      }
      & > p {
        line-height: 24px;
      }
    }
    .line {
      width: 218px;
      height: 4px;
      background: url("../assets/images/img_about_culture_line.png") center
        repeat-x;
      position: relative;
      &:before,
      &:after {
        content: "";
        display: block;
        width: 12px;
        height: 12px;
        background: #95abd8;
        border-radius: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      &:before {
        left: -16px;
      }
      &:after {
        right: -16px;
      }
    }
    .cul-left {
      text-align: left;
      line-height: 36px;
    }
    .cul-right {
      width: 800px;
      height: 400px;
      background: url("../assets/images/img_about_qyzz.png") center no-repeat;
    }
  }
}
</style>
