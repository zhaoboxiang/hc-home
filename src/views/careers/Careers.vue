<template>
  <div>
    <Header></Header>
    <div class="careers">
      <div class="careers-banner">
        <div class="content-title">
          <h3>加入我们</h3>
          <h6>JOIN US</h6>
        </div>
        <company-culture></company-culture>
      </div>
      <div class="careers-container">
        <div class="cont-head">
          <h6>虹川科技期待您的加入</h6>
          <p>
            虹川科技高度重视人才和团队建设，全面设立和实施“优秀合伙人”和“优秀人才”计划，以价值创造为根本，成就共同理想为目标，欢迎各类优秀贤士加入。
            <br />
            应聘人员请将个人简历发送至<span>hr@hcttop.com</span>邮箱，合则约见，勿访。
          </p>
        </div>
        <div class="cont-section content">
          <div class="sec-head">
            <div class="sec-h-left">
              <h3>规划专家</h3>
              <p>
                <span>职位类别：产品类</span><span>工作地点：深圳 </span
                ><span>招聘人数：1人</span>
              </p>
            </div>
            <div class="sec-h-right">
              <div
                :class="['change', { spread: sectionListShowFlag[0] }]"
                @click="changeShow(0)"
              ></div>
            </div>
          </div>
          <collapse>
            <div class="sec-details" v-show="sectionListShowFlag[0]">
              <div class="sec-d-box">
                <div class="sec-d-h">任职资格</div>
                <div class="sec-d-p">
                  1、在国内政府部门、国际500强企业、国内环保类上市公司、政府环境管理机构具备8年及以上工作经历；<br />
                  2、至少具备以下一项工作经验：<br />
                  <span>·</span
                  >有从事研究咨询和战略规划研究工作经验，具有较高的理论政策水平、研究素质、战略思维能力和立足长远、把握全局的意识，能高质量地组织完成重大研究任务；
                  <br />
                  <span>·</span
                  >具备扎实的技术功底，在生态环境、水务治理、园区管理中任一领域有良好的工作成果（获得专利或市级以上奖项者优先）；<br />
                  <span>·</span
                  >具备较好的经济学、企业战略与管理、金融、财会、法律方面的专业知识，从事主管及以上管理岗位者。<br />
                  3、有很强的文字和口头表达能力，较强的团队领导能力和激励、沟通、协调能力；<br />
                  4、理解公司使命、经营理念、企业文化，忠诚敬业、成熟自信、进取心强，有较强的再学习能力和创新精神；<br />
                  5、专长突出者，以上条件可适当放宽。
                </div>
              </div>
              <div class="sec-d-box">
                <div class="sec-d-h">工作职责</div>
                <div class="sec-d-p">
                  1、围绕公司发展的全局性、战略性和前瞻性战略新兴业务，研究和制定公司智慧城市和物联网发展战略和中长期发展规划；<br />
                  2、跟踪和评价公司智慧城市和物联网战略规划的实施情况，提出不断改进和完善的对策建议；<br />
                  3、研究与制定公司智慧城市和物联网业务板块的战略投资、资本运作、并购重组、产业整合及运营方案；<br />
                  4、组织协调科研院校开展产学研合作，在咨询、人才培养、科技成果转化方面为智慧城市和物联网业务提供支持；<br />
                  5、研究国内关于智慧城市的重大方针政策，密切关注和分析研究物联网产业的宏观变化趋势，提供决策参考。
                </div>
              </div>
            </div>
          </collapse>
        </div>

        <div class="cont-section content">
          <div class="sec-head">
            <div class="sec-h-left">
              <h3>产品经理</h3>
              <p>
                <span>职位类别：产品类</span><span>工作地点：深圳</span
                ><span>招聘人数：5人</span>
              </p>
            </div>
            <div class="sec-h-right">
              <div
                :class="['change', { spread: sectionListShowFlag[1] }]"
                @click="changeShow(1)"
              ></div>
            </div>
          </div>
          <collapse>
            <div class="sec-details" v-show="sectionListShowFlag[1]">
              <div class="sec-d-box">
                <div class="sec-d-h">任职资格</div>
                <div class="sec-d-p">
                  1、计算机、信息管理等相关专业，具有5年及以上相关工作经验，特别优秀者不受限制；<br />
                  2、具备良好的沟通和表达能力、协调组织能力、需求分析和客户引导能力，逻辑思维能力清晰，学习能力强，自驱力和推动能力强；<br />
                  3、熟练掌握售前文档及解决方案（包括演示PPT、客户方案、项目申报等材料）的编制和演讲；<br />
                  4、熟练掌握相关需求分析及原型建模工具（Axure RP）<br />
                  5、有ERP经验及电力行业软件分析经验优先；<br />
                  6、有技术开发经验者或数据建模经验者优先。
                </div>
              </div>
              <div class="sec-d-box">
                <div class="sec-d-h">工作职责</div>
                <div class="sec-d-p">
                  1、负责产品或项目的需求调研，完成调研报告和需求规格说明书；<br />
                  2、负责用户需求到产品需求的转换，负责产品若项目的原型设计；<br />
                  3、负责解决方案编制和用户汇报演讲等；<br />
                  4、负责需求的生命周期的管理过程，保证需求的最终效果。
                </div>
              </div>
            </div>
          </collapse>
        </div>

        <div class="cont-section content">
          <div class="sec-head">
            <div class="sec-h-left">
              <h3>人工智能工程师</h3>
              <p>
                <span>职位类别：研发类</span><span>工作地点：深圳</span
                ><span>招聘人数：1人</span>
              </p>
            </div>
            <div class="sec-h-right">
              <div
                :class="['change', { spread: sectionListShowFlag[2] }]"
                @click="changeShow(2)"
              ></div>
            </div>
          </div>
          <collapse>
            <div class="sec-details" v-show="sectionListShowFlag[2]">
              <div class="sec-d-box">
                <div class="sec-d-h">任职资格</div>
                <div class="sec-d-p">
                  1、硕士及以上学历，有相关工作经验者优先；<br />
                  2、在校博士、研究相关领域者优先； <br />
                  3、熟悉机器学习算法及模型，有人机交互领域相关工作经验；<br />
                  4、良好的学习能力、逻辑思维能力和创新能力。
                </div>
              </div>
              <div class="sec-d-box">
                <div class="sec-d-h">工作职责</div>
                <div class="sec-d-p">
                  1、负责人工智能、机器学习相关项目的应用研究； <br />
                  2、参与模型/图像/语音/自然语言算法的研究与开发；<br />
                  3、人工智能领域的技术探索、对外合作及专利申报。
                </div>
              </div>
            </div>
          </collapse>
        </div>

        <div class="cont-section content">
          <div class="sec-head">
            <div class="sec-h-left">
              <h3>Phython开发工程师</h3>
              <p>
                <span>职位类别：研发类</span><span>工作地点：深圳</span
                ><span>招聘人数：若干</span>
              </p>
            </div>
            <div class="sec-h-right">
              <div
                :class="['change', { spread: sectionListShowFlag[3] }]"
                @click="changeShow(3)"
              ></div>
            </div>
          </div>
          <collapse>
            <div class="sec-details" v-show="sectionListShowFlag[3]">
              <div class="sec-d-box">
                <div class="sec-d-h">任职资格</div>
                <div class="sec-d-p">
                  1、精通Python语言，熟悉Tensorflow、Pytorch等主流框架； <br />
                  2、深刻理解面向对象设计理念和面向服务架构；<br />
                  3、有良好的代码编写能力，对机器学习常规算法CNN、RNN、FNN等有一定的了解；
                  <br />
                  4、熟练产品设计文档编写、应用方案PPT编写；<br />
                  5、善于沟通交流，能出差；<br />
                  6、有自然语言处理经验者优先；<br />
                  7、熟悉JAVA语言及其主流框架Springboot等优先。
                </div>
              </div>
              <div class="sec-d-box">
                <div class="sec-d-h">工作职责</div>
                <div class="sec-d-p">
                  1、设计搭建Python项目基础工程；<br />
                  2、基于Tensorflow、Pytorch等主流框架，进行相关算法实现功能；<br />
                  3、将python核心算法工程与业务系统集成方案设计； <br />
                  4、自然语言处理相关应用设计方案编写及与客户沟通交流。
                </div>
              </div>
            </div>
          </collapse>
        </div>

        <div class="cont-section content">
          <div class="sec-head">
            <div class="sec-h-left">
              <h3>Java开发工程师</h3>
              <p>
                <span>职位类别：研发类</span><span>工作地点：深圳</span
                ><span>招聘人数：若干</span>
              </p>
            </div>
            <div class="sec-h-right">
              <div
                :class="['change', { spread: sectionListShowFlag[4] }]"
                @click="changeShow(4)"
              ></div>
            </div>
          </div>
          <collapse>
            <div class="sec-details" v-show="sectionListShowFlag[4]">
              <div class="sec-d-box">
                <div class="sec-d-h">任职资格</div>
                <div class="sec-d-p">
                  1、本科及以上学历，5年及以上相关工作经验；<br />
                  2、良好的数据结构与算法基础，具有较好的软件开发及设计思维；<br />
                  3、具有Java
                  web开发经验，熟悉Spring/Hibernate/Axis2等Java平台主流技术栈；
                  <br />
                  4、能熟悉使用Jvisualvm/Jstack/MemoryAnalyzer等JVM调优工具；
                  <br />
                  5、至少熟悉使用包括Weblogic/WAS/Tomcat在内的一款主流的Web应用服务器；<br />
                  6、SQL功底扎实，熟练使用Oracle、MySql数据库，具备较好的数据库设计能力。
                </div>
              </div>
              <div class="sec-d-box">
                <div class="sec-d-h">工作职责</div>
                <div class="sec-d-p">
                  1、参与主数据系统的业务分析，负责架构设计与编码实现，确保技术方案能够按计划要求，高质量的完成；<br />
                  2、对技术有较强的钻研及学习精神，能够深入了解开源技术、现有系统技术等相关技术原理，出现问题时能够通过较强的技术手段较好的解决问题；<br />
                  3、具备良好的沟通表达能力，保证项目质量与进度；<br />
                  4、针对新人、初级和中级开发人员进行有效辅导，帮助其快速成长。
                </div>
              </div>
            </div>
          </collapse>
        </div>

        <div class="cont-section content">
          <div class="sec-head">
            <div class="sec-h-left">
              <h3>销售经理</h3>
              <p>
                <span>职位类别：市场类</span><span> 工作地点：深圳</span
                ><span>招聘人数：若干</span>
              </p>
            </div>
            <div class="sec-h-right">
              <div
                :class="['change', { spread: sectionListShowFlag[5] }]"
                @click="changeShow(5)"
              ></div>
            </div>
          </div>
          <collapse>
            <div class="sec-details" v-show="sectionListShowFlag[5]">
              <div class="sec-d-box">
                <div class="sec-d-h">任职资格</div>
                <div class="sec-d-p">
                  1、计算机或营销等相关专业，大学本科及以上学历；<br />
                  2、有敏感的市场洞察力及良好的逻辑思维能力，及较强的组织、协调、沟通及市场开拓能力；<br />
                  3、具有一定的IT行业、政府、大型企业的销售经验或客户资源，拥有较好的人脉资源；<br />
                  4、熟悉项目销售投标、商务洽谈和执行流程，且有实操经验；<br />
                  5、有相关行业背景及社会背景者优先考虑。
                </div>
              </div>
              <div class="sec-d-box">
                <div class="sec-d-h">工作职责</div>
                <div class="sec-d-p">
                  1、负责产品的市场渠道开拓与销售工作，执行并完成个人年度销售计划；
                  <br />
                  2、配合与监督公司职能部门完成合同的履行，维护客户关系； <br />
                  3、完成合同应收货款的回笼；<br />
                  4、了解、掌握竞争对手的情况，为公司的决策和市场竞争提供帮助。
                </div>
              </div>
            </div>
          </collapse>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import CompanyCulture from "./CompanyCulture";
import collapse from "../../assets/javascript/collapse";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default {
  components: { CompanyCulture, collapse, Header, Footer },
  data() {
    return {
      sectionListShowFlag: [true, false, false, false, false, false],
      isActive: false
    };
  },
  methods: {
    changeShow: function(e) {
      this.sectionListShowFlag[e] = !this.sectionListShowFlag[e];
      this.sectionListShowFlag.splice();
    }
  }
};
</script>

<style scoped lang="less">
@import "../../assets/css/global";
.careers {
  padding-top: 68px;
}
.careers-banner {
  padding: 120px 100px;
  background: @font-color-active
    url("../../assets/images/careers/img_gnxc_topimg.png") center no-repeat;
  background-size: auto 100%;
  .content-title {
    color: #fff;
    text-align: center;
    h3 {
      font-size: 48px;
    }
    h6 {
      font-size: 32px;
      margin: 20px 0 60px;
    }
  }
}
.careers-container {
  padding: 60px 0 120px;
  .cont-head {
    text-align: center;
    /*width: 505px;*/
    margin: 30px auto 60px;
    & > h6 {
      color: @font-color-active;
      font-size: 32px;
      margin-bottom: 30px;
    }
    & > p {
      line-height: 24px;
      & > a,
      span {
        color: @font-color-active;
        cursor: pointer;
      }
    }
  }
  .cont-section {
    box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    padding: 30px;
    margin-top: 30px;
    .sec-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .sec-h-left {
        h3 {
          color: @font-color;
          font-size: 24px;
        }
        & > p {
          font-size: 16px;
          span {
            margin-right: 40px;
          }
        }
      }
      .sec-h-right {
        .change {
          width: 36px;
          height: 36px;
          background: @font-color-active
            url("../../assets/images/careers/icon_gnxc_list_zhankai.png") center
            no-repeat;
          transform: rotate(180deg);
        }
        .spread {
          transform: rotate(0deg);
        }
      }
    }
    .sec-details {
      padding-top: 30px;
      .sec-d-box {
        padding-top: 30px;
        &:first-child {
          border-top: 1px solid rgba(149, 171, 216, 0.2);
        }
        .sec-d-h {
          font-size: 20px;
          color: @font-color-active;
        }
        .sec-d-p {
          line-height: 24px;
          margin-top: 10px;
          & > span {
            padding: 0 10px 0 28px;
          }
        }
      }
    }
  }
}
</style>
