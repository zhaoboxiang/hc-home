<template>
    <div class="product-list bg-light-purple">
        <div class="content list-content">
            <div class="pro-name">智慧水务产品</div>
            <div
                    class="list-line"
                    v-if="navList && navList.length > 0"
            >
                <a
                        v-for="( item, index ) in navList"
                        :key="index"
                >{{ item.name }}</a
                >
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "ProductContentListWater",
    data() {
      return {
        navList: [
          {
            url: "",
            name: "水质监测预警系统"
          },{
            url: "",
            name: "地下水监测系统"
          },{
            url: "",
            name: "水库湖泊雨情监测系统"
          },{
            url: "",
            name: "河湖长制管理信息系统"
          },{
            url: "",
            name: "取水泵远程监控系统"
          },{
            url: "",
            name: "水厂远程监控系统"
          },{
            url: "",
            name: "管网监测系统"
          },{
            url: "",
            name: "直饮水实时在线监测系统"
          },{
            url: "",
            name: "城市道路积水监测预警系统"
          },{
            url: "",
            name: "污水处理实时在线监测系统"
          },{
            url: "",
            name: "海绵城市在线监测系统"
          }
        ]
      };
    },
  };
</script>

<style scoped lang="less">
    @import "../assets/css/global";
    .product-list {
        padding: 80px 120px;
        .pro-name {
            font-size: 36px;
            color: @font-color-active;
            margin-bottom: 48px;
            text-align: center;
        }
        .list-line {
            a {
                display: inline-block;
                width: 300px;
                height: 68px;
                line-height: 68px;
                border: 1px solid @font-color-active;
                border-radius: 34px;
                font-size: 16px;
                color: @font-color-active;
                margin-right: 148px;
                text-align: center;
                margin-top: 32px;
                &:nth-child(3n) {
                    margin-right: 0;
                }
                &:hover {
                    background: @font-color-active;
                    color: #fff;
                    box-shadow: 0px 8px 16px 0px rgba(48, 60, 168, 0.2);
                    cursor: pointer;
                    text-decoration: none;
                }
            }
        }
    }
</style>