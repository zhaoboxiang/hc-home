<template>
  <div class="product-env-detail-wrap">
    <div class="env-detail-banner">
      <div class="banner-content">
        <img
          :src="
            require(`../assets/images/product/${productDetailTitleIcon}.png`)
          "
          alt=""
        />
        <span>{{ productDetailTitle }}</span>
      </div>
    </div>
    <div class="env-content-detail-wrap">
      <div
        class="env-detail-main"
        id="wzjc"
        v-for="(item, index) in productDetailList"
        :key="index"
      >
        <div class="detail-content" :id="item.title">
          <h1>{{ item.title }}</h1>
          <p v-show="true">
            {{ item.description }}
          </p>
          <img
            :src="item.img && require(`../assets/images/product/${item.img}`)"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="anchor-nav">
      <div v-for="(item, index) in productDetailList" :key="index">
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductEnvironmentDetail",
  props: ["name"],
  data() {
    return {
      productDetailTitle: "",
      productDetailTitleIcon: "icon-env",
      productDetailList: [],
      productEnv: [
        "wzjc-sys",
        "zhjc-sys",
        "spjksb-sys",
        "qydljk-sys",
        "kqzlybbj-sys",
        "yyyd-sys",
        "wghjg-sys",
        "ztcznjg-sys",
        "zwrtqyjxy-sys",
        "hjzhfx-sys",
        "dqwrfzzhjczc-sys"
      ],
      productWater: [],
      productPark: []
    };
  },
  computed: {},
  beforeRouteEnter(to, from, next) {
    console.log(to, from, next);
    const paramsName = to.params.name;
    const envData = [
      {
        title: "微站监测系统",
        description:
          "通过生态环境大数据中心的数据集成能力，将全市的空气质量微站的在线监测数据，进行采集、清洗、整合并入库；然后依托GIS地图的展示能力，将空气质量微站的点位基础信息，以及监测信息，以实时、直观、动态、可视化的方式进行呈现，用户可以实时掌握各站点的分布情况，实时查询到空气质量状况，以及历史趋势变化情况，并可以分级分参数进行实时排名，所属各级政府可随时了解本辖区空气质量变化趋势状况。",
        img: "product-sub-wzjc.png",
        anchor: "wzjc-sys"
      },
      {
        title: "走航监测系统",
        description:
          "通过出租车安装颗粒物监测设备对全市道路进行走航实时监测。污染状况可以按路段、区县、街道办事处进行排名，排名信息推送至区县、街道办事处和城管部门。同时，系统自动分析筛选污染重的路段推送至环保监管平台，由所在网格员现场排查原因，原因反馈后推送至责任单位及时处置。该项走航监测技术，以出租车为载体，具有运行成本低、时空分辨率高、数据稳定可靠等优势，是大数据分析在环保领域的创新性应用。",
        img: "",
        anchor: "zhjc-sys"
      },
      {
        title: "企业电量监控系统",
        description:
          "目前对企业的监控更多的侧重排污口排污情况的动态管控，无法监管企业的生产和治污过程数据。鉴于此，为了进一步加强污染源企业监管，方便环保部门远程了解企业的生产状况和污染治理设施运行情况，建设企业电量监控智能分析系统，通过在企业内部的生产关键环节和治污设施都安装用电监测传感器，并用“企业信息搜集”理顺每个测点生产、治污设施用电情况，结合企业排污数据建立企业用电与排污的关联模型，不间断全天候监控企业生产、治污设施运行情况，实现对污染源企业的全面监管；通过实时监测及统计分析，实现数据的展示、汇总及分类；通过“综合分析”对各种用电情况进行数据分析，实现企业产能与污染排放的量化关系，为后续的精细化管理提供数据分析的基础。",
        img: "product-sub-qydljk.png",
        anchor: "qydljk-sys"
      },
      {
        title: "视频监控识别系统",
        description:
          "鉴于环保监控的视频具有类型众多、来源复杂、管理多头、监控困难的特点，系统通过自主研发的视频控件，能以国标方式接入各种类型的视频信号，进行远程播放和控制；同时能对接入的视频以人工智能的方式进行分析识别，统计识别结果，发现违规情况产生报警，推送给责任单位进行处理。在无需增加大量人工监控的情况下，极大的提升监控范围和效率。",
        img: "product-sub-spjksb.png",
        anchor: "spjksb-sys"
      },
      {
        title: "空气质量预报预警系统",
        description:
          "本系统以第三代空气质量模型为核心，融合最新的资料通话、集合预报、深度学习等先进技术，是业内领先的空气质量预报预警系统，能实现未来24、48、72小时城市空气质量预报；提供未来七天区域污染趋势预报预测；集成各类气象观测与预报资源（如美国NCEP、欧洲ECMWF、中国气象局、中国民航气象中心等气象机构）；提供日常情况和重污染应急期间气象条件（地面气压、温度、相对湿度、雨量、风场图、不同高度天气形势等）的演变趋势分析，提供外部下载的实况气象资料、预报气象图查看与分析功能。",
        img: "product-sub-kqzlybbj.png",
        anchor: "kqzlybbj-sys"
      },
      {
        title: "一源一档系统",
        description:
          "污染源企业监管是环境管理工作的重要组成。在我国现有的污染源企业监管模式下，污染源企业的整个生命周期的不同阶段涉及到多个部门主管的不同业务。污染源企业数据分为基础数据和业务数据，目前不同部门都各自掌握一套独立的基础数据，业务数据分散在各业务职责部门。这就导致污染源基础数据“一源多数”，不能保证数据的准确性；同时业务数据分散，成为“孤岛数据”，并未实现数据共享和数据整合，更难以对污染源数据进行深度挖掘。因此，亟需建立统一的排污单位环境管理系统，实现排污单位全过程监管信息的汇集、快速检索统计及共享应用，推进企业环保数据资源的有序化管理，彻底解决“信息孤岛”问题，真正使杂乱无章的数据变成可用的资源，实现一数一源、一源多用、多源共享的应用目标。\n" +
          "一源一档系统以排污许可制度为基础，结合第二次污染源普查和历年环境统计数据，然后整合污染源企业相关的所有环保历史数据（包括环境影响评价、三同时验收、达标管理、总量核算、企业自行监测、监督性监测、环境执法、信访、行政处罚、环境统计、绿色信贷等环境管理数据），建立污染源全生命周期档案，从建设项目审批到长效管理，再到最终的关停并转。\n" +
          "系统还能实现污染源环保档案的动态管理，及时补充对企业环保监管中形成的监理、监测资料和治污设施运行管理方面的资料，准确反映企业环保工作状态。最终实现一个污染源一套环保档案，一套档案支撑所有环保管理需要的管理目标。",
        img: "product-sub-yyyd.png",
        anchor: "yyyd-sys"
      },
      {
        title: "网格化监管系统",
        description:
          "为全市进一步完善网格化环境监管体系建设工作方案,保护生态环境,实现环境监管的网格化、精细化、智慧化、法治化，以环境监管网格“横向到边、纵向到底”为目标,完善网格化环境监管体系建设,科学设置管理网格,明确各级网格职责,理顺工作机制,加强基层环保机构及网格员队伍建设,全面落实“定区域、定职责、定人员、定任务、定考核”要求,通过智慧环保网格化监管系统提供平台，支持网格巡查监管，任务事件的发布、处理、查看、查询，并据此进行数据分析和统计，直观展示统计数据，可直观反应网格监管情况，供各局办对环保及时有效的改善依据。",
        img: "product-sub-wghjg.png",
        anchor: "wghjg-sys"
      },
      {
        title: "渣土车智能监管系统",
        description:
          "渣土车智能监管系统利用车联网、人工智能、无线传输、北斗定位、大数据、云计算、视频监控等高科技手段，实现建筑工地、渣土消纳场、渣土运输车辆全程实时监管。\n" +
          "系统的工地管理、消纳场管理模块，通过在出入口安装车辆道闸、车牌识别摄像、智能监控主机、摄像头、智能识别相机、智能冲洗等设备，对接监管部门的渣土车智能监管平台，实现对进出口的渣土车车牌智能识别、冲洗监控，源头杜绝黑车、套牌车的非法运营行为及车辆带泥上路现象发生。\n" +
          "系统的车辆管理模块，通过安装车载GPS定位系统、传感系统、智能识别系统、监控系统、视频图像采集模块、数据采集模块、车载显示仪表、4G视频终端等，对接监管部门的渣土车智能监管平台，实现渣土车多部门联合远程定位监控管理目的。\n" +
          "渣土车智能监管平台可控制工地及消纳场的审批，控制渣土运输车辆的承运资格，控制运输过程中不按规定线路行驶，抛洒滴漏，乱堆乱倒等车辆违规现象，确保车辆严格按照规定将渣土运至目的地。",
        img: "",
        anchor: "ztcznjg-sys"
      },
      {
        title: "重污染天气应急响应系统",
        description:
          "本系统通过重污染天气应急响应的全流程管理和效果评估，实现了：\n" +
          "应急启动与任务分派：实现重污染天气时预警研判、预警启动、过程监控、效果评估、预警解除；\n" +
          "应急过程的实时监控：通过对企业每天排放量和用电量的关联分析，实时监控企业限产、停产的实际执行情况，按照区域、企业的形式形成报告，通过短信、微信的形式对执行不力的企业进行动态督办；\n" +
          "应急后的效果评估：对比分析预测、实测不同调控措施下PM2.5浓度、AQI等变化及减排率并以专题图形式直观显示，评估空气质量改善效果，分析调控措施和气象条件之间的相对贡献率；\n" +
          "应急后台管理和统计：对应急预案、成员单位、减排清单进行管理；统计重污染天气应急响应次数等。",
        img: "product-sub-zwrtqyjxy.png",
        anchor: "zwrtqyjxy-sys"
      },
      {
        title: "环境综合分析系统",
        description:
          "针对济南市严峻的复合型大气污染，以颗粒物和臭氧为核心，对接环保部“国家大气颗粒物组分及光化学监测管理平台”，从污染水平-污染特征-溯源解析-传输分析-气象影响等层面开展专题性综合分析，形成科学结论，支撑济南市大气污染防治的科学决策和精准施策。",
        img: "product-sub-hjzhfx.png",
        anchor: "hjzhfx-sys"
      },
      {
        title: "大气污染防治综合决策支持系统",
        description:
          "本系统由减排措施与减排潜力动态评估系统、社会经济成本系统、减排与空气质量快速响应系统、达标评估系统、效益评估系统和数据融合及可视化分析工具等6个独立的工具组成的集成化工具。它为科学家和决策者们提供了一个用户友好的系统化框架，能实现“经济发展-能源消耗-防控措施-污染排放-空气质量-人群健康”的系统化评估，为决策者提供快速辅助决策支持。",
        img: "product-sub-dqwrfzzhjczc.png",
        anchor: "dqwrfzzhjczc-sys"
      }
    ];
    next(vm => {
      console.log("vm---", vm);
      if (vm.productEnv.indexOf(paramsName) !== -1) {
        vm.productDetailList = envData;
        vm.productDetailTitle = "智慧环保产品";
        vm.productDetailTitleIcon = "icon-env";
      }
      next();
    });
  }
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
  flex-flow: column wrap;
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
    display: flex;
    justify-content: center;
    align-items: center;
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
