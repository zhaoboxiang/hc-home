<template>
  <div class="hc-core-technology">
    <!--核心技术-->
    <div class="core-technology-box">
      <div class="content">
        <div data-aos="fade-up">
          <h6>核心技术</h6>
          <b>优质的解决方案需要先进的技术</b>
          <span>
            强大的数据处理能力和人工智能分析是我们得以处理各类复杂业务应用场景的有力基石。<br />
            虹川科技致力与各重点院校以及专业的研究机构一起合作，开发各类数据模型，<br />
            已在环境监测、气象预测、灾难模拟等场景应用卓见成效。
          </span>
        </div>
        <div data-aos="fade-up">
          <div class="tec-box">
            <div class="tec-item tec-item-one">
              <div class="tips-en">BIG DATA</div>
              <div class="tips-ch">大数据</div>
            </div>
            <div class="tec-item tec-item-two">
              <div class="tips-en">INTERNET OF THINGS</div>
              <div class="tips-ch">物联网</div>
            </div>
            <div class="tec-item tec-item-three">
              <div class="tips-en">ARTIFICIAL INTELLIGENCE</div>
              <div class="tips-ch">人工智能</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeContentCoreTechnology"
};
</script>

<style scoped lang="less">
@import "../assets/css/global";
.section-box {
  width: 100%;
}

.core-technology-box {
  height: 660px;
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  align-items: center;
  text-align: center;
  h6 {
    color: @font-color-active;
    font-size: 32px;
    padding-bottom: 16px;
  }
  b {
    font-size: 20px;
    display: block;
    padding: 16px 0 40px;
  }
  p {
    padding: 40px 0 60px;
    line-height: 24px;
  }
  .tec-box {
    padding-top: 60px;
    display: flex;
    justify-content: space-between;
    .tec-item {
      width: 320px;
      height: 180px;
      background: bisque;
      text-align: left;
      .tips-en {
        padding: 20px 0 3px 20px;
        color: rgba(149, 171, 216, 1);
        font-size: 16px;
      }
      .tips-ch {
        padding-left: 20px;
        font-size: 24px;
        color: @font-color-active;
      }
    }
    .tec-item-one {
      background: url("../assets/images/img_index__technology_1.png") center
        no-repeat;
      background-size: 100% 100%;
    }
    .tec-item-two {
      background: url("../assets/images/img_index__technology_2.png") center
        no-repeat;
      background-size: 100% 100%;
    }
    .tec-item-three {
      background: url("../assets/images/img_index__technology_3.png") center
        no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
