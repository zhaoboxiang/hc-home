<template>
    <div class="hc-footer-box">
        <div class="content hc-footer">
            <div class="hc-footer-content">
                <div class="hc-map"></div>
                <div class="hc-info-content">
                    <div class="tel">0755-22202959</div>
                    <div class="addr">商务合作：business@hcttop.com <br/>公司地址：深圳市南山区科技园中区国人通信大厦A座13层</div>
                    <div class="footer-logo"></div>
                </div>
            </div>
            <footer>© 2019 虹川科技Hong Chuan Technology. All Rights Reserved. 粤ICP备XXXXX号</footer>
        </div>
    </div>
</template>

<script>
  export default {
    name: "hc-footer"
  };
</script>

<style lang="less" scoped>
    @import "../assets/css/global.less";
    .hc-footer-box{
        background: #F7F9FF;
        .hc-footer{
            .hc-footer-content{
                display: flex;
                align-items: center;
                .hc-map{
                    width: 800px;
                    height: 384px;
                    background: url("../assets/images/img_footer_map.png") center no-repeat;
                    background-size: 100% 100%;
                }
                .hc-info-content{
                    padding-left: 20px;
                    font-size: 14px;
                    .tel{
                        font-size:24px;
                        color: @font-color-active;
                        padding-bottom: 10px;
                    }
                    .addr{
                        line-height:24px;
                    }
                    .footer-logo{
                        width: 200px;
                        height: 80px;
                        background: url("../assets/images/img_footer_logo.png") center no-repeat;
                        background-size: 100% 100%;
                        margin-top: 32px;
                    }
                }
            }
            footer{
                text-align: center;
                color:#95ABD8;
                font-size: 12px;
                padding: 12px 0;
                position: relative;
                &:before{
                    content: '';
                    display: block;
                    width: 100%;
                    height: 1px;
                    background:linear-gradient(270deg,rgba(149,171,216,0) 0%,rgba(149,171,216,1) 50%,rgba(149,171,216,0) 100%);
                    position: absolute;
                    top:0;
                    left: 0;
                }
            }
        }

    }

</style>