<template>
  <div class="home">
    <hc-header></hc-header>
    <!--banner-->
    <div class="banner-content">
      <div class="content slider-content">banner</div>
    </div>
    <!--关于我们-->
    <div class="section-box intro-box">
      <div class="content intro">
        <div class="text-box">
          <h3>关于我们</h3>
          <h6>深圳虹川科技有限公司</h6>
          <p>深圳虹川科技有限公司是中国领先的智慧城市整体解决方案提供商，
            在智慧环保、智慧水务和数字园区等领域深耕多年，致力于大数据、
            人工智能与物联网等技术在行业的落地应用。作为国内先进的绿色智慧城市理念的倡导者，
            以客户需求为己任，持续为客户创造价值。</p>
          <div class="btn btn-blue">了解更多</div>
        </div>
        <div class="img-box"></div>
      </div>
    </div>
    <!--专业领域-->
    <div class="section-box core-business">
      <div class="content">
        <h3>专业领域</h3>
        <h6>四大核心领域，专业的场景化解决方案</h6>
        <div class="core-item-box">
          <div class="item core-city">
            <div class="img"></div>
            <div class="txt">智慧城市</div>
          </div>
          <div class="item core-huanb">
            <div class="img"></div>
            <div class="txt">智慧环保</div>
          </div>
          <div class="item core-water">
            <div class="img"></div>
            <div class="txt">智慧水务</div>
          </div>
          <div class="item core-park">
            <div class="img"></div>
            <div class="txt">智慧园区</div>
          </div>
        </div>
      </div>
    </div>
    <!--单个业务介绍-->
    <div class="business-intro">
      <div class="business-item content">
        <div class="title-box">
          <div class="business-title">
            <b>智慧城市</b><span>信息技术与城市现代化深度融合、迭代演进</span>
          </div>
          <div class="btn btn-white">了解更多</div>
        </div>
        <div class="business-content">
          <div class="item">
            <div class="tips"><b>人</b>·幸福</div>
            <div class="cont">
              <div class="cont-icon cont-icon-one"></div>
              <div class="cont-intro">
                <h6>民生及管理智慧化</h6>
                <p>社会治理 · 人文智慧</p>
                <div>促进民生服务和社会管理智慧化 智慧教育、智慧医疗、智慧政务 <br/>…</div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="tips"><b>城</b>·智能</div>
            <div class="cont">
              <div class="cont-icon cont-icon-two"></div>
              <div class="cont-intro">
                <h6>基础设施智慧化</h6>
                <p>基础设施 · 物联智慧</p>
                <div>建设智慧化的城市基础设施 智慧楼宇、智慧照明、智慧交通、智慧能源 <br/>…</div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="tips"><b>市</b>·繁华</div>
            <div class="cont">
              <div class="cont-icon cont-icon-three"></div>
              <div class="cont-intro">
                <h6>经济产业智慧化</h6>
                <p>经济生产 · 产业智慧</p>
                <div>促进工农业生产、市场经济智慧化 智慧产业、智慧农业、电子商务<br/>…</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--核心技术-->
    <div class="core-technology-box">
      <div class="content">
        <h6>核心技术</h6>
        <b>优质的解决方案需要先进的技术</b>
        <p>强大的数据处理和AI智能分析是我们得以处理各类复杂业务应用场景的有力基石。<br/>
          虹川科技致力与各重点院校以及专业的研究机构一起合作，开发各类数据模型，<br/>
          已在环境监测、气象预测、灾难模拟等场景应用卓见成效。</p>
        <div class="tec-box">
          <div class="tec-item tec-item-one">
            <div class="tips-en">big data</div>
            <div class="tips-ch">大数据</div>
          </div>
          <div class="tec-item tec-item-two">
            <div class="tips-en">big data</div>
            <div class="tips-ch">大数据</div>
          </div>
          <div class="tec-item tec-item-three">
            <div class="tips-en">big data</div>
            <div class="tips-ch">大数据</div>
          </div>
        </div>
      </div>
    </div>
    <hc-footer></hc-footer>
  </div>
</template>

<script>
  import HcHeader from "../components/hc-header";
  import HcFooter from '../components/hc-footer';
export default {
  name: "home",
  components: { HcHeader, HcFooter }
};
</script>
<style scoped lang="less">
  @import "../assets/css/global";
  .section-box{
    width: 100%;
  }

  .intro-box{
    background:rgba(247,249,255,1);
    .intro{
      padding: 70px 0 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .text-box{
        h3{
          height:32px;
          line-height: 32px;
          font-size:32px;
          color: @font-color-active;
        }
        h6{
          height:20px;
          font-size:20px;
          line-height: 20px;
          color: @font-color;
          margin-top: 16px;
        }
        p{
          color: @font-color-default;
          margin-top: 30px;
          width: 600px;
          line-height:24px;
        }
        .btn-blue{
          display: inline-block;
          margin-top: 60px;
        }
      }
      .img-box{
        width: 400px;
        height: 270px;
        background: url("../assets/images/img_about_company_photo.png") center no-repeat;
      }
    }
  }

  .core-business{
    text-align: center;
    padding: 80px 0 70px;
    h3{
      color: @font-color-active;
      font-size: 32px;
      line-height: 32px;
    }
    h6{
      font-size: 20px;
      line-height: 20px;
      margin-top: 16px;
    }
    .core-item-box{
      margin-top: 44px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      &>.item{
        .img{
          width: 120px;
          height: 120px;
        }
        .txt{
          font-size: 18px;
          color: @font-color-default;
          margin-top: 20px;
        }
        &:hover{
          .txt{
            color: @font-color-active;
          }
        }
      }
      &>.core-city{
        .img{
          background: url("../assets/images/icon_city.png") center no-repeat;
        }
        &:hover{
          .img{
            background: url("../assets/images/icon_city_cur.png") center no-repeat;
          }
        }
      }
      &>.core-water{
        .img{
          background: url("../assets/images/icon_water.png") center no-repeat;
        }
        &:hover{
          .img{
            background: url("../assets/images/icon_water_cur.png") center no-repeat;
          }
        }
      }
      &>.core-huanb{
        .img{
          background: url("../assets/images/icon_huanb.png") center no-repeat;
        }
        &:hover{
          .img{
            background: url("../assets/images/icon_huanb_cur.png") center no-repeat;
          }
        }
      }
      &>.core-park{
        .img{
          background: url("../assets/images/icon_park.png") center no-repeat;
        }
        &:hover{
          .img{
            background: url("../assets/images/icon_park_cur.png") center no-repeat;
          }
        }
      }
    }
  }

  .business-intro{
    width: 100%;
    background: @font-color-active url("../assets/images/img_core_info_bg.png") no-repeat center;
    background-size: auto 100%;
    padding-bottom: 106px;
    .business-item{
      color:#fff;
      .title-box{
        padding: 44px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(255,255,255,0.16);
        .business-title{
          font-size:20px;
          &>b{
            font-size:32px;
            padding-right: 20px;
            border-right: 1px solid rgba(255,255,255,0.16);
          }
          &>span{
            padding-left: 20px;
          }
        }
      }
      .business-content{
        display: flex;
        justify-content: space-between;
        &>.item{
          text-align: center;
          width: 320px;
          padding-top:60px;

          .tips{
            font-size: 36px;
            font-weight: 100;
          }
          .cont{
            position: relative;
            padding: 58px 40px 47px;
            background:rgba(13,25,136,0.3);
            margin-top: 78px;
            .cont-icon{
              position: absolute;
              width: 76px;
              height: 76px;
              left: 0;
              right: 0;
              top: -38px;
              margin: auto;
              border-radius: 100%;
            }
            .cont-icon-one{
              background: url("../assets/images/icon_zhcs_1.png") center no-repeat;
              background-size: 100% 100%;
            }
            .cont-icon-two{
              background: url("../assets/images/icon_zhcs_2.png") center no-repeat;
              background-size: 100% 100%;
            }
            .cont-icon-three{
              background: url("../assets/images/icon_zhcs_3.png") center no-repeat;
              background-size: 100% 100%;
            }
          }
          .cont-intro{
            h6{
              font-size: 20px;
              font-weight: normal;
              margin-bottom: 14px;
            }
            &>div{
              line-height: 22px;
              margin-top: 20px;
              padding-top: 20px;
              border-top: 1px solid rgba(255,255,255,0.16);
            }
          }
        }
      }
    }
  }

  .core-technology-box{
    text-align: center;
    padding: 80px 0 160px;
    h6{
      color: @font-color-active;
      font-size:32px;
      padding-bottom: 16px;
    }
    b{
      font-size: 20px;
    }
    p{
      padding: 40px 0 60px;
      line-height:24px;
    }
    .tec-box{
      display: flex;
      justify-content: space-between;
      .tec-item{
        width: 320px;
        height: 180px;
        background: bisque;
        text-align: left;
        .tips-en{
          padding: 20px 0 3px 20px;
          color:rgba(149,171,216,1);
          font-size: 16px;
        }
        .tips-ch{
          padding-left: 20px;
          font-size: 24px;
          color: @font-color-active;
        }
      }
      .tec-item-one{
        background: url("../assets/images/img_index__technology_1.png") center no-repeat;
        background-size: 100% 100%;
      }
      .tec-item-two{
        background: url("../assets/images/img_index__technology_2.png") center no-repeat;
        background-size: 100% 100%;
      }
      .tec-item-three{
        background: url("../assets/images/img_index__technology_3.png") center no-repeat;
        background-size: 100% 100%;
      }
    }
  }

  .btn{
    padding: 13px 40px;
    border-radius:30px;
    &:hover{
      cursor: pointer;
    }
  }
  .btn-white{
    border:1px solid #fff;
    color:#fff;
  }
  .btn-blue{
    border:1px solid @font-color-active;
    color: @font-color-active;
  }
</style>

