<template>
  <div class="evn-section">
    <product-content-section
      :sectitle="section_1.title"
      :imgurl="section_1.imgUrl"
    ></product-content-section>
    <cut-line-content></cut-line-content>
    <div class="product-section">
      <div class="content section-content">
        <div class="section-title">
          一图感知、数据模拟、多维呈现，随时随地掌握环境动态趋势，从容面对各类预警事件
        </div>
        <div class="sec-box">
          <div class="sec-item" data-aos="fade-up" data-aos-delay="100">
            <div class="item-icon icon-1"></div>
            <div class="item-tips">一图感知</div>
          </div>
          <div class="sec-item" data-aos="fade-up" data-aos-delay="300">
            <div class="item-icon icon-2"></div>
            <div class="item-tips">数据模拟</div>
          </div>
          <div class="sec-item" data-aos="fade-up" data-aos-delay="500">
            <div class="item-icon icon-3"></div>
            <div class="item-tips">多维呈现</div>
          </div>
        </div>
      </div>
    </div>
    <cut-line-content></cut-line-content>
    <product-content-section
      :sectitle="section_3.title"
      :imgurl="section_3.imgUrl"
    ></product-content-section>
    <cut-line-content></cut-line-content>
    <product-content-section
      :sectitle="section_4.title"
      :imgurl="section_4.imgUrl"
    ></product-content-section>
  </div>
</template>

<script>
import ProductContentSection from "./ProductContentSection";
import CutLineContent from "./CutLineContent";
export default {
  name: "ProductContentEvnSection",
  components: { CutLineContent, ProductContentSection },
  data() {
    return {
      section_1: {
        imgUrl: require("../assets/images/product/img_cpzx_hbxg_1.png"),
        title:
          "支持各类设备、各类网络、各类协议数据接入，实现多维感知数据无缝衔接"
      },
      section_3: {
        imgUrl: require("../assets/images/product/img_cpzx_hbxg_3.png"),
        title: "基于模型，形成科学结论，支撑环境污染防治的科学决策和进准施策"
      },
      section_4: {
        imgUrl: require("../assets/images/product/img_cpzx_hbxg_4.png"),
        title:
          "平战结合，环境监管全覆盖，环境问题无处遁形，为人民群众环境安全保驾护航"
      }
    };
  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/global";
.product-section {
  .section-content {
    padding: 120px 0;
    .section-title {
      font-size: 24px;
      color: @font-color;
      text-align: center;
      margin-bottom: 80px;
    }
    .sec-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-align: center;
      .sec-item {
        flex: 1;
        position: relative;
        &:after {
          content: "";
          display: block;
          width: 1px;
          height: 100%;
          background: linear-gradient(
            0,
            rgba(149, 171, 216, 0) 0%,
            rgba(149, 171, 216, 1) 50%,
            rgba(149, 171, 216, 0) 100%
          );
          position: absolute;
          right: 0;
          top: 0;
        }
        &:last-child:after {
          display: none;
        }
        .item-icon {
          width: 68px;
          height: 68px;
          margin: 0 auto;
        }
        .icon-1 {
          background: url("../assets/images/product/icon_cpzx_hbxg_1.png")
            center no-repeat;
          background-size: 100% 100%;
        }
        .icon-2 {
          background: url("../assets/images/product/icon_cpzx_hbxg_2.png")
            center no-repeat;
          background-size: 100% 100%;
        }
        .icon-3 {
          background: url("../assets/images/product/icon_cpzx_hbxg_3.png")
            center no-repeat;
          background-size: 100% 100%;
        }
        .item-tips {
          margin-top: 10px;
          font-size: 16px;
          color: @font-color;
        }
      }
    }
  }
}
</style>
