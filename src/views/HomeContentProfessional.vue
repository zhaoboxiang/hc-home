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
        v-if="this.isMenuShow === 'core-city'"
      >
        <div class="title-box">
          <div class="business-title">
            <b>智慧城市</b><span>信息技术与城市现代化深度融合、迭代演进</span>
          </div>
          <div class="btn btn-white"><router-link to="solution/wisdom-city">了解更多</router-link><i></i></div>
        </div>
        <div class="business-content">

          <div data-aos="fade-up" data-aos-delay="100">
            <div class="item">
              <div class="cont-icon cont-icon-two"></div>
              <div class="tips"><span>城</span>·智能</div>
              <div class="cont-intro">
                <p>基础设施智慧化<br />基础设施 · 物联智慧</p>
                <div>
                  建设智慧化的城市基础设施 智慧楼宇、智慧照明、智慧交通、智慧能源
                  <br />…
                </div>
              </div>
              <div class="cont"></div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <div class="item">
              <div class="cont-icon cont-icon-three"></div>
              <div class="tips"><span>市</span>·繁荣</div>
              <div class="cont-intro">
                <p>经济产业智慧化<br />经济生产 · 产业智慧</p>
                <div>
                  促进工农业生产、市场经济智慧化 智慧产业、智慧农业、电子商务<br />…
                </div>
              </div>
              <div class="cont"></div>
            </div>
          </div>
          <div data-aos="fade-up"  data-aos-delay="500">
            <div class="item">
              <div class="cont-icon cont-icon-one"></div>
              <div class="tips"><span>人</span>·幸福</div>
              <div class="cont-intro">
                <p>民生及管理智慧化<br />社会治理 · 人文智慧</p>
                <div>
                  促进民生服务和社会管理智慧化 智慧教育、智慧医疗、智慧政务
                  <br />…
                </div>
              </div>
              <div class="cont"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        :class="['business-item', 'content']"
        v-if="this.isMenuShow === 'core-huanb'"
      >
        <div class="title-box">
          <div class="business-title">
            <b>智慧环保</b><span>覆盖生态环境全数据，为中国生态保驾护航</span>
          </div>
          <div class="btn btn-white"><router-link to="solution/wisdom-environment">了解更多</router-link><i></i></div>
        </div>
        <div class="business-content">
          <div data-aos="fade-up" data-aos-delay="100" class="data-aos">
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
      </div>
      <div
        :class="['business-item', 'content']"
        v-if="this.isMenuShow === 'core-water'"
      >
        <div class="title-box">
          <div class="business-title">
            <b>智慧水务</b><span>供水排水水务全流程管理，为城市生活供给生</span>
          </div>
          <div class="btn btn-white"><router-link to="solution/wisdom-water">了解更多</router-link><i></i></div>
        </div>
        <div class="business-content">
          <div data-aos="fade-up" data-aos-delay="100" class="data-aos">
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
      </div>
      <div
        :class="['business-item', 'content']"
        v-if="this.isMenuShow === 'core-park'"
      >
        <div class="title-box">
          <div class="business-title">
            <b>智慧园区</b><span>让园区管理像操作APP一样简单</span>
          </div>
          <div class="btn btn-white"><router-link to="solution/wisdom-park">了解更多</router-link><i></i></div>
        </div>
        <div class="business-content">
          <div data-aos="fade-up" data-aos-delay="100" class="data-aos">
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
          delay: 100
        },
        {
          text: "智慧环保",
          className: "core-huanb",
          isActive: "",
          delay: 300
        },
        {
          text: "智慧水务",
          className: "core-water",
          isActive: "",
          delay: 500
        },
        {
          text: "智慧园区",
          className: "core-park",
          isActive: "",
          delay: 700
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

.core-business {
  text-align: center;
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
        display: flex;
        align-items: center;
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
      .data-aos{
        width: 100%;
      }
      .item {
        text-align: center;
        width: 320px;
        border-radius: 4px;

        .tips {
          font-size: 24px;
        }
        width: 320px;
        height: 400px;
        padding: 0 40px 47px;
        background: rgba(13, 25, 136, 0.3);
        margin-top: 50px;
        .cont-icon {
          width: 90px;
          height: 90px;
          margin: 43px auto 27px;
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
        .cont-intro {
          & > p {
            font-size: 18px;
            line-height: 24px;
            margin: 22px 0 20px;
          }
          & > div {
            line-height: 22px;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.16);
          }
        }
      }
      ul {
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

.btn {
  padding: 13px 40px;
  border-radius: 30px;
  display: flex;
  justify-items: center;
  align-items: center;
  a{
    color: inherit;
  }
  &:hover {
    cursor: pointer;
    a{
      text-decoration: none;
    }
  }
  & > span,
  i {
    display: block;
  }
  & > i {
    width: 14px;
    height: 14px;
    margin-left: 3px;
  }
}
.btn-white {
  border: 1px solid #fff;
  color: #fff;
  &:hover {
    background: #fff;
    color: @font-color-active;
    & > i {
      background: url("../assets/images/icon_more_blue.png") center no-repeat;
      background-size: 100% 100%;
    }
  }
  & > i {
    background: url("../assets/images/icon_more_white.png") center no-repeat;
    background-size: 100% 100%;
  }
}
.btn-blue {
  border: 1px solid @font-color-active;
  color: @font-color-active;
  &:hover {
    background: @font-color-active;
    color: #fff;
    & > i {
      background: url("../assets/images/icon_more_white.png") center no-repeat;
      background-size: 100% 100%;
    }
  }
  & > i {
    background: url("../assets/images/icon_more_blue.png") center no-repeat;
    background-size: 100% 100%;
  }
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
