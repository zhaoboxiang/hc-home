<template>
  <div class="product-env-detail-wrap">
    <div class="env-detail-banner">
      <div
        :class="['content banner-content', `banner-content-${bannerClassName}`]"
      >
        <img style="display: none"
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
        <div class="detail-content" :id="item.anchor">
          <h1>{{ item.title }}</h1>
          <p v-show="true">
            {{ item.description }}
          </p>
          <img
            :src="item.img && require(`../assets/images/product/${item.img}`)"
            alt=""
          />
        </div>
        <cut-line-content
          :class="[{ hide: index == productDetailList.length - 1 }]"
        ></cut-line-content>
      </div>
    </div>
    <div class="anchor-nav">
      <div
        v-for="(item, index) in productDetailList"
        :key="index"
        v-scroll-to="`#${item.anchor}`"
      >
        <p @click="toggle(index)" :class="{ active: index === active }">
          {{ item.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CutLineContent from "./CutLineContent";

export default {
  name: "ProductEnvironmentDetail",
  components: { CutLineContent },
  props: ["name"],

  data() {
    return {
      active: -1,
      productDetailTitle: "",
      productDetailTitleIcon: "icon-env",
      bannerClassName: "env",
      productDetailList: [],
      productEnv: [
        "wzjc-sys",
        "zhjc-sys",
        "spjksb-sys",
        "qydljk-sys",
        "kqzlybyj-sys",
        "yyyd-sys",
        "wghjg-sys",
        "ztcznjg-sys",
        "zwrtqyjxy-sys",
        "hjzhfx-sys",
        "dqwrfzzhjczc-sys"
      ],
      productWater: [
        "dbsjc-sys",
        "dxsjc-sys",
        "skhbyqjc-sys",
        "hhczglxx-sys",
        "qsbycjk-sys",
        "scycjk-sys",
        "gwjc-sys",
        "zyssszxjc-sys",
        "csdljsjcyj-sys",
        "wsclsszxjc-sys",
        "hmcszxjc-sys"
      ],
      productPark: ["qydahx-sys", "wyglyfw-sys", "qyfwpt-sys", "yft-sys"]
    };
  },
  methods: {
    toggle(index) {
      this.active = index;
    }
  },
  mounted() {},
  beforeRouteEnter(to, from, next) {
    const paramsName = to.params.name;
    const waterData = [
      {
        title: "地表水监测系统",
        description:
          "水质监测预警系统是一套以在线自动分析仪器为核心，运用现代传感器技术、自动测量技术、自动控制技术及相关的专用分析软件所组成的一个综合性自动监测数据的采集系统。该系统可应用于水资源循环利用的各个环节，实现对饮用水及生产、生活污水水质的实时连续监测，并将监测数据和信息传送到主管部门，为监管提供技术支持。 系统支持针对江、河、湖泊、水库等水源地的水温、溶解氧、PH、电导率、盐度、浊度、蓝绿藻，氨氮离子、余氯等参数监测，并可扩展其它监测功能。针对排污口及污水处理厂的浊度、PH、COD、氨氮离子、溶解氧、重金属离子等参数监测，并可扩展其它监测功能。 系统主要由采水单元、配水及预处理、监测分析、自动控制（包括数据采集通讯）、站房及配套设施以及水质自动监测等模块组成。",
        img: "product-sub-dbsjc.png",
        anchor: "dbsjc-sys"
      },
      {
        title: "地下水监测系统",
        description:
          "地下水监测系统是掌握地下水变化规律、了解地下水开采状况、指导地下水资源保护的重要手段。地下水监测系统可对地下水的水位、水温、水质等参数进行长期监测并自动存储监测数据，可进行图形化展示地下水监测数据，并根据业务需求进行报警、分析和管理，可对地下水的变化规律进行动态分析。 为掌握地下水变化规律、指导地下水资源保护发挥了重要作用。 系统主要由以下功能模块组成： 数据汇聚-实时接收各监测点的上报数据，自动将监测数据存储至数据库。 数据展示-GIS地图展示测点位置、状态和单点数据，并支持列表查询。 智能报警-通过颜色变化、弹窗提示报警，自动向责任人发送报警短信。 统计分析-智能生成区域等水位图，统计分析报表，时段分析曲线。",
        img: "product-sub-dxsjc.png",
        anchor: "dxsjc-sys"
      },
      {
        title: "水库湖泊雨情监测系统",
        description:
          "水库监测系统适用于水利管理部门远程监测水库的水位、降雨量等实时数据，同时支持远程图像监控，为保障水库的适度蓄水和安全度汛提供了准确、及时的现场信息。 系统通过远程监测水库分布位置、水位、降雨量及现场设备运行状态等实时数据，当水位/降雨量超过阈值或现场设备故障时，系统自动报警向责任人发送短信报警。系统支持自定义水库水位/降雨量的时、日、月、年数据报表，自动生成水位、降雨量等数据过程曲线。",
        img: "product-sub-skhbyqjc.png",
        anchor: "skhpyqjc-sys"
      },
      {
        title: "河湖长制管理信息系统",
        description:
          "国家河长制建设主要包括加强水资源保护、加强河湖长水域岸线管理保护、加强水污染防治、加强水环境治理、加强水生态修复和加强执法监管六项内容。 围绕以上六项内容，河湖长制管理信息系统是一个跨移动和PC端平台，该系统包括巡检轨迹记录、污染现场情况记录、污染源整改监控记录、工单处理记录等数据结构设计。 在PC端可以清晰看到河长上报的每个污染问题类型、污染源分类、问题等级等，当问题得到及时解决后，可以回放河道整改事件过程。 在移动端可以开启巡河，在巡查过程中能保存河长巡查轨迹，自动保存巡查记录实时上传信息平台。",
        img: "product-sub-hhczglxx.png",
        anchor: "hhczglxx-sys"
      },
      {
        title: "取水泵远程监控系统",
        description:
          "水厂远程监控系统适用于供水企业远程监控管理水厂。水厂操作人员可以在水厂控制室远程监测厂内水池水位、进厂流量、出厂流量、出厂压力、水质等信息；远程监测加压泵组、配电设备及其它自动化设备的工作情况；远程控制加压泵的启停。水司调度中心工作人员及公司主管领导可以远程监测各水厂的工作情况及水厂操作人员的操作情况。",
        img: "product-sub-qsbycjk.png",
        anchor: "qsbycjk-sys"
      },
      {
        title: "水厂远程监控系统",
        description:
          "水厂远程监控系统适用于供水企业远程监控管理水厂。 水厂操作人员可以在水厂控制室远程监测厂内水池水位、进厂流量、出厂流量、出厂压力、水质等信息；远程监测加压泵组、配电设备及其它自动化设备的工作情况；远程控制加压泵的启停。 水司调度中心工作人员及公司主管领导可以远程监测各水厂的工作情况及水厂操作人员的操作情况。",
        img: "product-sub-scycjk.png",
        anchor: "scycjk-sys"
      },
      {
        title: "管网监测系统",
        description:
          "管网监测系统适用于供水企业远程监测供水管网。供水调度人员在管网监测中心即可远程监测全市供水管网的压力及流量情况，以科学指挥各水厂启停供水设备、保障供水压力平衡和流量稳定、并及时发现和预测爆管事故。 并支持管网末梢水质监测和阀门远程控制功能。 管网监测系统采用GIS方式实现对供水排水体系中所有的管线、设备、构筑物空间位置信息、属性信息进行统一的数据和业务管理。主要包括管网数据查询、信息统计以及管网设备日常维护管理、管网的纵断面分析、设备预警分析、爆管分析、关阀分析、二次关阀分析等功能，为管网建模与供水调度、设备管理、维修维护、爆管处理、工程建设及水质管理等业务应用提供科学合理的基础数据和辅助决策功能。",
        img: "product-sub-gwjc.png",
        anchor: "gwjc-sys"
      },
      {
        title: "直饮水实时在线监测系统",
        description:
          "在饮用水终端，设置直饮水制水设备，实时显示水质指标，当检测指标超标时，即时显示在屏幕上，提醒公众勿饮用; 同时向信息管理平台告警，启动突发事件应急反应机制。系统通过互联网和移动互联网架构的物感网络，监测直饮水设备 内的设备的工作状态，环境参数和水质情况(温度、余氯、浊度、PH值等)。可感知直饮水设备的实时工作情况;根据设 备的工作状态和环境参数，采用大数据分析技术，在故障发生前就捕获到事件，并分配给相应的支持人员进行处理，并可 根据人工智能算法模型，实现直饮水设备的最佳节能自动运营模式。",
        img: "product-sub-zyssszxjc.png",
        anchor: "zyssszxjc-sys"
      },
      {
        title: "城市道路积水监测预警系统",
        description:
          "城市道路积水监测预警系统可实时监测城区各低洼路段的积水水位并实现自动预警。市政管理部门借助该系统可整体把握整个城区内涝状况，及时进行排水调度。交通管理部门通过该系统可获取各路段的实时积水水位，并借助广播、电视等媒体为广大群众提供出行指南，避免人员、车辆误入深水路段造成重大损失。 系统支持实时监测道路低洼处、下穿式立交桥和隧道的积水水位，并通过GPRS/CDMA/4G网络或光纤网络远程传送至城市内涝监测预警中心。立交桥、隧道监测点可通过情报板自动提示（或监测中心远程手动提示）当前积水水位值或“允许通行”、“谨慎通行”、“禁止通行”等警示信息。",
        img: "product-sub-csdljsjcyj.png",
        anchor: "csdljsjcyj-sys"
      },
      {
        title: "污水处理实时在线监测系统",
        description:
          "污水处理实时在线监测系统将污水处理厂生产监控与企业管理有机地结合起来，系统在企业管理层和现场自动化控制层之间起到了承上启下的作用。通过从数据库层面将实时运行数据和设备资产数据统一起来，使得管理层可以及时的获得任何一个运行单位的实时数据，同时又可以调阅各类设备、设施的管理数据。通过生产运行管理数据库使控制层采集数据直接应用到管理层的日常工作中，减少信息传输过程中不必要的滞后与可能发生的人为错误。使管理和控制，计划与生产紧密结合，达到管控一体化的目标。 系统在业务管理方面侧重3条主线： 对设备和备件等资产实现全面的维修、养护、库存管理，对资产变动过程进行跟踪和记录。提供完善的维护/维修、备件需求/消耗、资产档案等报表。 对安全生产，文明厂区，质量管理进行考核并生成完整的报表。 对动态的生产运行情况进行监视和记录，并提供多种分析工具（无故障运行时间、运行历史比较等等）。",
        img: "product-sub-wsclsszxjc.png",
        anchor: "wsclsszxjc-sys"
      },
      {
        title: "海绵城市在线监测系统",
        description:
          "“海绵城市”是指城市能够像海绵一样，在适应环境变化和应对自然灾害等方面具有良好的弹性，下雨时吸水、蓄水、渗水、净水，需要时将蓄存的水“释放”并加以利用。 海绵城市监测评价系统基于“物联网” 理念，利用先进的传感技术，实时监测城市水文信息，结合住建部颁布执行的《海绵城市建设绩效评价与考核办法》，综合运用在线监测数据、填报数据、系统集成数据，逐项细化分解考核指标，建立考核评估指标体系，支持海绵城市建设效果6个方面、18项指标的全方位、可视化、精细化评估，实现海绵建设效果（各项指标）的逐级追溯、实时更新，并通过多种展示方式进行考核评估指标的综合展示、对比分析等。 海绵城市监测评价系统主要功能有：GIS地图可视化管理、项目管理、在线监测、模型分析和专项考核等。",
        img: "product-sub-hmcszxjc.png",
        anchor: "hmcszxjc-sys"
      }
    ];
    const parkData = [
      {
        title: "企业档案画像",
        description: "",
        img: "product-sub-qydahx.png",
        anchor: "qydahx-sys"
      },
      {
        title: "物业管理与服务",
        description: "",
        img: "product-sub-wyglyfw.png",
        anchor: "wyglyfw-sys"
      },
      {
        title: "企业服务平台",
        description: "",
        img: "product-sub-qyfwpt.png",
        anchor: "qyfwpt-sys"
      },
      {
        title: "园付通",
        description: "",
        img: "product-sub-yft.png",
        anchor: "yft-sys"
      }
    ];
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
        img: "product-sub-kqzlybyj.png",
        anchor: "kqzlybyj-sys"
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
        anchor: `dqwrfzzhjczc-sys`
      }
    ];

    next(vm => {
      if (vm.productEnv.indexOf(paramsName) !== -1) {
        vm.productDetailList = envData;
        vm.productDetailTitle = "智慧环保产品";
        vm.productDetailTitleIcon = "icon-env";
        vm.bannerClassName = "env";
        vm.active = vm.productEnv.indexOf(paramsName);
      } else if (vm.productPark.indexOf(paramsName) !== -1) {
        vm.productDetailList = parkData;
        vm.productDetailTitle = "智慧园区产品";
        vm.productDetailTitleIcon = "icon-park";
        vm.bannerClassName = "park";
        vm.active = vm.productPark.indexOf(paramsName);
      } else if (vm.productWater.indexOf(paramsName) !== -1) {
        vm.productDetailList = waterData;
        vm.productDetailTitle = "智慧水务产品";
        vm.productDetailTitleIcon = "icon-water";
        vm.bannerClassName = "water";
        vm.active = vm.productWater.indexOf(paramsName);
      } else {
        next();
      }
      next();
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.active = this.$_.findIndex(this.productDetailList, [
      "anchor",
      to.params.name
    ]);
    next();
  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/variables";
.hide {
  display: none;
}
// 外层容器
.product-env-detail-wrap {
  padding-top: 68px;
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
    &:hover,
    &.active {
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
        text-align: left;
      }
    }
  }
}
.env-detail-banner {
  height: 360px;
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
    height: 100%;
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
.banner-content-env {
  background: url("../assets/images/product/img_cpzx_zhhbcp_topimg.png") center
    no-repeat;
}
.banner-content-park {
  background: url("../assets/images/product/img_cpzx_zhyqcp_topimg.png") center
    no-repeat;
}
.banner-content-water {
  background: url("../assets/images/product/img_cpzx_zhswcp_topimg.png") center
    no-repeat;
}
</style>
