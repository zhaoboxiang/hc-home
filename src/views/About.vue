<template>
  <div class="about">
    <div class="about-banner-box">
      <div class="content banner-content">
        <div class="caption">
          <div class="caption-cn">虹川科技，绿色智慧城市理念倡行者</div>
          <div class="caption-en">
            HCTTOP TECHNOLOGY-GREEN SMART CITY COMMEMORATE ADVOCATE
          </div>
        </div>
      </div>
    </div>
    <!--公司介绍-->
    <div class="introduction-box">
      <div class="content introduction-content">
        <div class="intro-info">
          <div class="info">
            <h3 class="section-h3">公司介绍</h3>
            <h6 class="section-h6">COMPANY INTRODUCTION</h6>
            <p>
              虹川科技成立于2015年，总部位于中国深圳，是中国领先的绿色智慧城市解决方案服务商。<br />
              公司主营业务为智慧环保（环境与安全监测管理、综合和专项环境治理）、智慧水利水务和智慧园区等，致力于物联网、大数据、人工智能和5G通信等技术在上述行业的综合应用和产业落地，向客户提供以环境质量改善为目标的先进技术服务和整体解决方案。<br />
              公司核心团队均来自华为、中兴、阿里、平安等知名企业，成功实施过深圳、上海、济南等多个智慧城市的标杆项目。虹川科技高度重视人才和团队建设，全面设立和实施“优秀合伙人”和“优秀人才”计划，以价值创造为根本，成就共同理想为目标，欢迎各类优秀贤士加入。<br />
              公司始终坚持以“科技赋能、产业报国”为使命，注重科技和产业的并重发展，寻求和加强与自身产业具有高度匹配性的各级政府开展合作，努力创建具有高度竞争力和良好美誉度的行业品牌。<br />
              “适者生存，迎势而为”，虹川科技将矢志不渝的坚持“品质、责任，创新、协作”的发展理念，坚定向着成为大型百亿智慧产业集团的目标奋进。
            </p>
          </div>
          <div class="img"></div>
        </div>
        <div class="intro-advantage">
          <div class="adv-item">
            <div class="adv-icon icon-one"></div>
            <div class="adv-tips">规模化的技术团队</div>
            <div class="adv-p">
              规模的学习型技术团队，技术研发实力雄厚，保证了技术应用的可持续反正和行业领先，为客户提供高品质的整体解决方案。
            </div>
          </div>
          <div class="adv-item">
            <div class="adv-icon icon-two"></div>
            <div class="adv-tips">成熟的研发技术</div>
            <div class="adv-p">
              从底层到应用层，拥有成熟的技术架构，保障多行业系统应用，在安全、性能、UE多维度领先业界。
            </div>
          </div>
          <div class="adv-item">
            <div class="adv-icon icon-three"></div>
            <div class="adv-tips">丰富的实战经验</div>
            <div class="adv-p">
              多年基于实战经验培养的团队技术优势，大量大型项目的实战经验，保障项目完美的落地。
            </div>
          </div>
          <div class="adv-item">
            <div class="adv-icon icon-four"></div>
            <div class="adv-tips">系统集成优势</div>
            <div class="adv-p">
              多行业大型系统应用经验造就了高效的，高融合的数据平台，保障了集成系统和硬件稳定高效的运行。
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--企业文化和企业资质-->
    <div class="culture-box bg-light-purple">
      <div class="content cul-content">
        <h3 class="section-h3">企业文化</h3>
        <h6 class="section-h6">ENTERPRISE CULTURE</h6>
        <company-culture style="margin-top: 80px"></company-culture>
      </div>
      <div class="cul-split"></div>
      <div class="content cul-content">
        <h3 class="section-h3">企业资质</h3>
        <h6 class="section-h6">ENTERPRISE QUALIFICATION</h6>
        <div class="cul-box">
          <div class="cul-left">
            · 多项计算机软件著作权及专利<br />
            · 软件产品证明函 <br />
            · 信息安全管理体系认证<br />
            · 信息技术服务管理体系认证 <br />
            · 质量管理体系认证（ISO9000）<br />
            · 广东省安全技术防范系统设计、施工、维修资格证 <br />
            · CMMI软件能力成熟度集成模型<br />
            ...
          </div>
          <div class="cul-right"></div>
        </div>
      </div>
    </div>
    <!--服务案例-->
    <div class="server-cases-box">
      <div class="content">
        <h3 class="section-h3">服务案例</h3>
        <h6 class="section-h6">SERVICE CASES</h6>
        <div class="cases">
          <p>
            公司通过物联、数联和智联以及大数据领域的技术积累通，
            与人工智能技术的深度融合创新性的推出业界领先的智慧环保环保生态大数据平台、
            水务监管平台和园区监管运营平台等多套成熟平台产品。 <br />
            平台在山东省生态环境厅、北京市公安局和深圳广州等多地产业园区实现落地应用。获得客户一致好评。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CompanyCulture from "./CompanyCulture";
export default {
  name: "about",
  components: { CompanyCulture }
};
</script>
<style scoped lang="less">
@import "../assets/css/global";
.section-h3 {
  font-size: 32px;
  color: @font-color-active;
  font-weight: bold;
}
.section-h6 {
  font-size: 18px;
  color: #95abd8;
  margin-top: 10px;
}

.about-banner-box {
  height: 240px;
  width: 100%;
  padding-top: 68px;
  background: linear-gradient(
    135deg,
    rgba(226, 242, 249, 1) 0%,
    rgba(224, 235, 249, 1) 49%,
    rgba(237, 234, 249, 1) 100%
  );
  color: @font-color-active;
  .banner-content {
    height: 100%;
    background: url("../assets/images/img_about_banner_1_bg.png") right bottom
      no-repeat;
    overflow: auto;
    display: flex;
    align-items: center;
    .caption-cn {
      font-size: 40px;
      font-weight: bold;
    }
    .caption-en {
      font-size: 18px;
      margin-top: 10px;
    }
  }
}

.introduction-box {
  padding: 160px 0 199px;
  .introduction-content {
    .intro-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .info {
        max-width: 600px;
        & > p {
          margin-top: 22px;
          line-height: 24px;
          /*text-indent: 50px;*/
        }
      }
      .img {
        width: 420px;
        height: 280px;
        background: url("../assets/images/img_about_company_photo.png") center
          no-repeat;
      }
    }
    .intro-advantage {
      margin-top: 160px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .adv-item {
        padding: 20px 60px;
        position: relative;
        &:after {
          content: "";
          display: block;
          width: 1px;
          height: 100%;
          position: absolute;
          right: 0;
          top: 0;
          background: linear-gradient(
            rgba(149, 171, 216, 0) 0%,
            rgba(149, 171, 216, 1) 50%,
            rgba(149, 171, 216, 0) 100%
          );
        }
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
          &:after {
            display: none;
          }
        }
        .adv-icon {
          width: 68px;
          height: 68px;
          margin: auto;
        }
        .icon-one {
          background: url("../assets/images/icon_about_youshi_1.png") center
            no-repeat;
        }
        .icon-two {
          background: url("../assets/images/icon_about_youshi_2.png") center
            no-repeat;
        }
        .icon-three {
          background: url("../assets/images/icon_about_youshi_3.png") center
            no-repeat;
        }
        .icon-four {
          background: url("../assets/images/icon_about_youshi_4.png") center
            no-repeat;
        }
        .adv-tips {
          text-align: center;
          padding: 20px 0 30px;
          font-size: 20px;
          color: @font-color;
        }
      }
    }
  }
}
.culture-box {
  padding: 80px 0 210px;
  .cul-content {
    text-align: center;
    & > .cul-box {
      margin-top: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
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
  .cul-split {
    width: 100%;
    height: 250px;
    background: url("../assets/images/img_about_qywh_bg.png") center no-repeat;
    margin-bottom: 20px;
  }
}

.server-cases-box {
  padding: 80px 0 78px;
  .cases {
    width: 1200px;
    height: 800px;
    background: url("../assets/images/img_about_anli_bg.png") center no-repeat;
    margin: 60px auto 0;
    line-height: 24px;
    & > p {
      max-width: 600px;
    }
  }
}
</style>
