<template>
  <div>
    <Header></Header>
    <div class="solution">
      <!--智慧城市-->
      <div class="solution-banner-box">
        <div class="content banner-content">
          <div class="ban-left">
            <div data-aos="fade-down">
              <div class="ban-h3">智慧城市</div>
              <div class="ban-h6">信息技术与城市现代化深度融合、迭代演进</div>
            </div>
            <div data-aos="fade-up">
              <div class="ban-p">
                智慧城市定位为城市内生态环境、公共管理、公共服务的决策指挥大脑，
                以“物联、数联、智联”为特征，做强核心、广泛延伸、细化感知，创新城市日常管理和运营模式的手段。
                强化主动发现和协同指挥处置功能，借助人工智能、大数据、物联网新技术，实现对城市精细化管理的智能化手段，
                不断提升城市在环保、水利水务、城市管理等复杂事项的多部门协同指挥处置。
              </div>
            </div>
          </div>
          <div data-aos="fade-up">
            <div class="ban-right">
              <img
                :src="
                  require(`../../../assets/images/solution/img_jjfa_zhcs_topimg.png`)
                "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="section section-1">
        <div class="content section-content">
          <h3 class="section-h3">方案理念</h3>
          <h6 class="section-h6">SOLUTION CONCEPT</h6>
          <div class="section-flex">
            <div data-aos="fade-up" data-aos-delay="100">
              <div class="flex-item">
                <div class="item-icon icon-2"></div>
                <div class="item-tips">城·智能</div>
                <div class="item-h">
                  基础设施智慧化<br />
                  基础设施 · 物联智慧
                </div>
                <div class="item-p">
                  建设智慧化的城市基础设施<br />
                  智慧楼宇、智慧照明、智慧交通、智慧能源<br />…
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <div class="flex-item">
                <div class="item-icon icon-3"></div>
                <div class="item-tips">市·繁华</div>
                <div class="item-h">
                  经济产业智慧化<br />经济生产 · 产业智慧
                </div>
                <div class="item-p">
                  促进工农业生产、市场经济智慧化<br />
                  智慧产业、智慧农业、电子商务<br />…
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <div class="flex-item">
                <div class="item-icon icon-1"></div>
                <div class="item-tips">人·幸福</div>
                <div class="item-h">
                  民生及管理智慧化<br />社会治理 · 人文智慧
                </div>
                <div class="item-p">
                  促进民生服务和社会管理智慧化<br />智慧教育、智慧医疗、智慧政务<br />…
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-2 bg-light-purple">
        <div class="content section-content">
          <h3 class="section-h3">顶层架构</h3>
          <h6 class="section-h6">TOP ARCHITECTURE</h6>
          <div data-aos="fade-up">
            <div class="info-container">
              <img
                :src="
                  require(`../../../assets/images/solution/img_jjfa_zhcs_dcjg.png`)
                "
                alt=""
              />
            </div>
          </div>
          <div class="tec-box">
            <div data-aos="fade-up" data-aos-delay="100">
              <div class="tec-item tec-item-1">
                <div class="tips-en">BIG DATA</div>
                <div class="tips-ch">大数据</div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <div class="tec-item tec-item-2">
                <div class="tips-en">INTERNET OF THINGS</div>
                <div class="tips-ch">物联网</div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <div class="tec-item tec-item-3">
                <div class="tips-en">ARTIFICIAL INTELLIGENCE</div>
                <div class="tips-ch">人工智能</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-3">
        <div class="content section-content">
          <h3 class="section-h3">方案特点</h3>
          <h6 class="section-h6">PROGRAM FEATURES</h6>
          <div class="section-flex">
            <div data-aos="fade-up" data-aos-delay="100">
              <div class="flex-item item-1">
                <div class="left">1·服务</div>
                <div class="right">
                  从顶层规划的理念出发，构建契合城市实际和特色的一整套智慧城市的综合信息服务体系。
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <div class="flex-item item-2">
                <div class="left">2·平台</div>
                <div class="right">
                  构建两大支撑平台，能够支撑智慧城市建设的城市云计算平台和智慧城市大数据融合服务平台。
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <div class="flex-item item-n">
                <div class="left">N·应用</div>
                <div class="right">
                  搭建涵盖城市运行体征、民生民情、生态环境、水文水利等多项应用体系，形成智慧城市的完整生态系统。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
export default {
  name: "SolutionCity",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="less" scoped>
@import "../../../assets/css/solution";
</style>
