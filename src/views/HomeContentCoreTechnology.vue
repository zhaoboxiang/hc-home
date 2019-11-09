<template>
  <div class="hc-core-technology">
    <!--核心技术-->
    <div class="core-technology-box">
      <div class="content">
        <div data-aos="fade-up">
          <h6>核心技术</h6>
          <b>优质的解决方案需要先进的技术</b>
          <span>
            强大的数据处理和AI智能分析是我们得以处理各类复杂业务应用场景的有力基石。<br />
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

.intro-box {
  background: rgba(247, 249, 255, 1);
  .intro {
    padding: 70px 0 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text-box {
      h3 {
        height: 32px;
        line-height: 32px;
        font-size: 32px;
        color: @font-color-active;
      }
      h6 {
        height: 20px;
        font-size: 20px;
        line-height: 20px;
        color: @font-color;
        margin-top: 16px;
      }
      p {
        color: @font-color-default;
        margin-top: 30px;
        width: 600px;
        line-height: 24px;
      }
      .btn-blue {
        display: inline-block;
        margin-top: 60px;
      }
    }
    .img-box {
      width: 400px;
      height: 270px;
      background: url("../assets/images/img_about_company_photo.png") center
        no-repeat;
    }
  }
}

.core-business {
  text-align: center;
  padding: 80px 0 70px;
  h3 {
    color: @font-color-active;
    font-size: 32px;
    line-height: 32px;
  }
  h6 {
    font-size: 20px;
    line-height: 20px;
    margin-top: 16px;
  }
  .core-item-box {
    margin-top: 44px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    & > .item {
      .img {
        width: 120px;
        height: 120px;
      }
      .txt {
        font-size: 18px;
        color: @font-color-default;
        margin-top: 20px;
      }
      &:hover {
        .txt {
          color: @font-color-active;
        }
      }
    }
    & > .core-city {
      .img {
        background: url("../assets/images/icon_city.png") center no-repeat;
      }
      &:hover {
        .img {
          background: url("../assets/images/icon_city_cur.png") center no-repeat;
        }
      }
    }
    & > .core-water {
      .img {
        background: url("../assets/images/icon_water.png") center no-repeat;
      }
      &:hover {
        .img {
          background: url("../assets/images/icon_water_cur.png") center
            no-repeat;
        }
      }
    }
    & > .core-huanb {
      .img {
        background: url("../assets/images/icon_huanb.png") center no-repeat;
      }
      &:hover {
        .img {
          background: url("../assets/images/icon_huanb_cur.png") center
            no-repeat;
        }
      }
    }
    & > .core-park {
      .img {
        background: url("../assets/images/icon_park.png") center no-repeat;
      }
      &:hover {
        .img {
          background: url("../assets/images/icon_park_cur.png") center no-repeat;
        }
      }
    }
  }
}

.business-intro {
  width: 100%;
  background: @font-color-active url("../assets/images/img_core_info_bg.png")
    no-repeat center;
  background-size: auto 100%;
  padding-bottom: 106px;
  .business-item {
    color: #fff;
    .title-box {
      padding: 44px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.16);
      .business-title {
        font-size: 20px;
        & > b {
          font-size: 32px;
          padding-right: 20px;
          border-right: 1px solid rgba(255, 255, 255, 0.16);
        }
        & > span {
          padding-left: 20px;
        }
      }
    }
    .business-content {
      display: flex;
      justify-content: space-between;
      & > .item {
        text-align: center;
        width: 320px;
        padding-top: 60px;

        .tips {
          font-size: 36px;
          font-weight: 100;
        }
        .cont {
          position: relative;
          padding: 58px 40px 47px;
          background: rgba(13, 25, 136, 0.3);
          margin-top: 78px;
          .cont-icon {
            position: absolute;
            width: 76px;
            height: 76px;
            left: 0;
            right: 0;
            top: -38px;
            margin: auto;
            border-radius: 100%;
          }
          .cont-icon-one {
            background: url("../assets/images/icon_zhcs_1.png") center no-repeat;
            background-size: 100% 100%;
          }
          .cont-icon-two {
            background: url("../assets/images/icon_zhcs_2.png") center no-repeat;
            background-size: 100% 100%;
          }
          .cont-icon-three {
            background: url("../assets/images/icon_zhcs_3.png") center no-repeat;
            background-size: 100% 100%;
          }
        }
        .cont-intro {
          h6 {
            font-size: 20px;
            font-weight: normal;
            margin-bottom: 14px;
          }
          & > div {
            line-height: 22px;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.16);
          }
        }
      }
      & > ul {
        width: 100%;
        padding: 120px 0 180px;
        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 80px;
          &:first-child {
            margin-top: 0;
          }
          & > span {
            display: inline-block;
            width: 200px;
            height: 80px;
            line-height: 80px;
            font-size: 18px;
            text-align: center;
            background: rgba(13, 25, 136, 0.3);
            border-radius: 4px;
          }
        }
      }
    }
  }
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

.btn {
  padding: 13px 40px;
  border-radius: 30px;
  &:hover {
    cursor: pointer;
  }
}
.btn-white {
  border: 1px solid #fff;
  color: #fff;
  &:hover{
    background: #fff;
    color: @font-color-active;
  }
}
.btn-blue {
  border: 1px solid @font-color-active;
  color: @font-color-active;
}
</style>
