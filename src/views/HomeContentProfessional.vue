<template>
  <div>
    <!--专业领域-->
    <div class="section-box core-business">
      <div class="content">
        <h3>专业领域</h3>
        <h6>四大核心领域，专业的场景化解决方案</h6>
        <div class="core-item-box">
          <div
            v-for="(item, index) in items"
            :class="['item', item.className, item.isActive]"
            :key="index"
            @mouseover="mouseOver(item, items)"
          >
            <div data-aos="fade-up" :data-aos-delay="item.delay">
              <div class="img"></div>
              <div class="txt">{{ item.text }}</div>
              <div class="arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--单个业务介绍-->
    <div class="business-intro">
      <div
        :class="['business-item', 'content']"
        v-show="this.isMenuShow === 'core-city'"
      >
        <div class="title-box">
          <div class="business-title">
            <b>智慧城市</b><span>信息技术与城市现代化深度融合、迭代演进</span>
          </div>
          <div class="btn btn-white">了解更多</div>
        </div>
        <div class="business-content">
          <div class="item">
            <div class="tips"><span>人</span>·幸福</div>
            <div class="cont">
              <div class="cont-icon cont-icon-one"></div>
              <div class="cont-intro">
                <h6>民生及管理智慧化</h6>
                <p>社会治理 · 人文智慧</p>
                <div>
                  促进民生服务和社会管理智慧化 智慧教育、智慧医疗、智慧政务
                  <br />…
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="tips"><span>城</span>·智能</div>
            <div class="cont">
              <div class="cont-icon cont-icon-two"></div>
              <div class="cont-intro">
                <h6>基础设施智慧化</h6>
                <p>基础设施 · 物联智慧</p>
                <div>
                  建设智慧化的城市基础设施
                  智慧楼宇、智慧照明、智慧交通、智慧能源
                  <br />…
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="tips"><span>市</span>·繁华</div>
            <div class="cont">
              <div class="cont-icon cont-icon-three"></div>
              <div class="cont-intro">
                <h6>经济产业智慧化</h6>
                <p>经济生产 · 产业智慧</p>
                <div>
                  促进工农业生产、市场经济智慧化 智慧产业、智慧农业、电子商务<br />…
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        :class="['business-item', 'content']"
        v-show="this.isMenuShow === 'core-huanb'"
      >
        <div class="title-box">
          <div class="business-title">
            <b>智慧环保</b><span>覆盖生态环境全数据，为中国生态保驾护航</span>
          </div>
          <div class="btn btn-white">了解更多</div>
        </div>
        <div class="business-content">
          <ul>
            <li>
              <span>大气环境监测</span>
              <span>企业电量监控</span>
              <span>AI图像识别</span>
              <span>污染源特征分析</span>
              <span>空气质量预报</span>
            </li>
            <li>
              <span>环境综合分析</span>
              <span>网格监管</span>
              <span>重污染天气应对</span>
              <span>空气质量评估</span>
              <span>节能减排评估</span>
            </li>
          </ul>
        </div>
      </div>
      <div
        :class="['business-item', 'content']"
        v-show="this.isMenuShow === 'core-water'"
      >
        <div class="title-box">
          <div class="business-title">
            <b>智慧水务</b><span>供水排水水务全流程管理，为城市生活供给生</span>
          </div>
          <div class="btn btn-white">了解更多</div>
        </div>
        <div class="business-content">
          <ul>
            <li>
              <span>水源水质监测</span>
              <span>供排水管理</span>
              <span>GIS管网</span>
              <span>直饮水水质监测</span>
              <span>水利管理</span>
            </li>
            <li>
              <span>防汛抗旱</span>
              <span>SCADA运行调度</span>
              <span>河湖长制管理</span>
              <span>海绵城市</span>
              <span>污水处理监测</span>
            </li>
          </ul>
        </div>
      </div>
      <div
        :class="['business-item', 'content']"
        v-show="this.isMenuShow === 'core-park'"
      >
        <div class="title-box">
          <div class="business-title">
            <b>智慧园区</b><span>让园区管理像操作APP一样简单</span>
          </div>
          <div class="btn btn-white">了解更多</div>
        </div>
        <div class="business-content">
          <ul>
            <li>
              <span>物业管理</span>
              <span>移动OA</span>
              <span>招商管理</span>
              <span>视频监控</span>
              <span>客户管理</span>
            </li>
            <li>
              <span>能耗管理</span>
              <span>门禁管理</span>
              <span>消防管理</span>
              <span>租赁管理</span>
              <span>资产管理</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeContentProfessional",
  data() {
    return {
      isCurNavTab: false,
      isMenuShow: "core-city",
      items: [
        {
          text: "智慧城市",
          className: "core-city",
          isActive: "active",
          delay: 0
        },
        {
          text: "智慧环保",
          className: "core-huanb",
          isActive: "",
          delay: 100
        },
        {
          text: "智慧水务",
          className: "core-water",
          isActive: "",
          delay: 200
        },
        {
          text: "智慧园区",
          className: "core-park",
          isActive: "",
          delay: 300
        }
      ],
      menuItems: [
        {
          title: "智慧城市"
        },
        {
          title: "智慧环保"
        },
        {
          title: "智慧水务"
        },
        {
          title: "智慧园区"
        }
      ]
    };
  },

  methods: {
    mouseOver(item, items) {
      this.isCurNavTab = true;
      item.isActive = this.isCurNavTab ? "active" : "";
      this.isMenuShow = item.className;
      items.map(function(itm) {
        if (itm.text !== item.text) {
          itm.isActive = "";
        }
      });
    }
  }
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
  /*padding: 80px 0 70px;*/
  height: 420px;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
    cursor: pointer;
    margin-top: 44px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .active {
      .arrow {
        display: block;
      }
    }
    & > .item {
      position: relative;
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
  height: 660px;
  .active {
    display: block;
  }
  .business-item {
    /*display: none;*/

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
          font-weight: normal;
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
            border-radius: 28px;
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
  text-align: center;
  padding: 80px 0 160px;
  h6 {
    color: @font-color-active;
    font-size: 32px;
    padding-bottom: 16px;
  }
  b {
    font-size: 20px;
  }
  p {
    padding: 40px 0 60px;
    line-height: 24px;
  }
  .tec-box {
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

// 箭头
.arrow {
  width: 0;
  height: 0;
  border-bottom: 16px solid rgba(48, 60, 168, 1);
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  margin: 0 auto;
  position: absolute;
  bottom: -75px;
  left: 45px;
  display: none;
}
</style>
