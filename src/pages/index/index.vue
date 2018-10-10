<template>
    <div class="home">
        <!--头部-->
        <div class="header">
            <div class="city">
                <span>成都</span>
                <img src="https://www.360myhl.com/meixinJF/static/images/open.png">
            </div>
            <img src="https://www.360myhl.com/meixinJF/static/images/logo.jpg" class="logo">
            <img src="https://www.360myhl.com/meixinJF/static/images/phone-icon.png" class="kefu" @click="calling">
        </div>

        <!--轮播图-->
        <div class="banner">
            <div class="page__bd page__bd_spacing">
                <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
                        :circular="circular" @change="swiperChange" @animationfinish="animationfinish">
                    <div v-for="item in imgUrls" :key="index">
                        <swiper-item>
                            <image :src="item" class="slide-image"/>
                        </swiper-item>
                    </div>
                </swiper>
            </div>
        </div>

        <!--分类-->
        <div class="classify">
            <div class="classify-item" @click="getEachInfo(2)">
                <img src="https://www.360myhl.com/meixinJF/static/images/yuesao1.png">
                <span>月嫂</span>
            </div>
            <div class="classify-item" @click="getEachInfo(1)">
                <img src="https://www.360myhl.com/meixinJF/static/images/baby-cart.png">
                <span>育儿嫂</span>
            </div>
            <a href="https://det.zoosnet.net/lr/chatpre.aspx?id=det55046512&lng=cn">
                <button class="connect_kefu" open-type="contact" session-from="weapp">
                    <img src="http://www.360myhl.com/meixinJF/MM/ximg/kefu_icon.png" alt="">
                </button>
            </a>
        </div>

        <!--推荐订单标题-->
        <div class="recommend">
            <div class="Left">
                <p><img src="https://www.360myhl.com/meixinJF/static/images/order_icon.png" alt="">推荐订单</p>
            </div>
            <div class="Right">恭喜张姐抢到<span>¥8000</span>育儿嫂订单</div>
        </div>

        <!--推荐订单列表-->
        <div class="list" v-if="data" v-for="(item, index) in data" :key="index" @click="goOrderDetail(item.oid)">
            <h3 v-if="item.typs === 2">{{item.JBID}}月嫂</h3>
            <h3 v-if="item.typs === 1">{{item.JBID}}育儿嫂</h3>
            <div class="time">
                <div class="Left" v-if="item.typs === 2"><span>预产期：{{item.expecteddate}}</span><span>  时长：26天</span>
                </div>
                <div class="Left" v-if="item.typs === 1">
                    <span v-if="item.stime === '' || item.stime === null">上班时间：<span
                            style="color: red">立即到岗</span></span>
                    <span v-if="item.stime">上班时间：{{item.stime}}</span><span>  时长：26天</span>
                </div>
                <div class="price" v-if="item.typs === 2">{{item.att_yue_price}}元</div>
                <div class="price" v-if="item.typs === 1">{{item.att_yu_price}}元</div>
            </div>
            <div class="address">
                <div class="Left1" style="width: 200px; overflow: hidden">地 址：{{item.address}}</div>
                <div class="Right1">已有<span>{{item.nums}}</span>位护理员报名</div>
            </div>
        </div>
        <div class="order_list" v-if="data && data.length === 0" style="display: flex;align-items: center">
            <span style="color: #ea5a43; width: 100px;margin: 30px auto 0;">暂无数据...</span>
        </div>
    </div>
</template>

<script>

  export default {
    data() {
      return {
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 900,
        circular: true,
        imgUrls: [
          "https://www.360myhl.com/meixinJF/static/images/banner1.jpg",
          "https://www.360myhl.com/meixinJF/static/images/baby-awatar.jpg",
          "https://www.360myhl.com/meixinJF/static/images/awatar.jpg"
        ],
        openid: "",
        data: null,
      };
    },

    components: {},

    methods: {
      goOrderDetail(id) {
        const url = "../detail_list/main?orderid=" + id + "&openid=" + this.openid;
        wx.navigateTo({ url });
      },
      getSetting() {
        let that = this;
        const login = new Promise((resolve, reject) => {
          wx.login({
            success: function(res) {
              if (res) {
                console.log("wx.login: ", res.code);
                resolve(res.code);
              } else {
                reject(res);
              }
            }
          });
        });
        login.then(value => {
          return new Promise(function(resolve, reject) {
            wx.request({
              url: "https://www.360myhl.com/meixinJF/xcx/app2",
              data: {
                js_code: value
              },
              method: "GET",
              success: function(response) {
                if (response) {
                  that.openid = response.data; //openid  ogx_x0G_WFS7kKhkmq4Nbk-bwKpk
                  console.log("that.openid", that.openid);
                  resolve(response.data);
                } else {
                  reject(response);
                }
              }
            });
          });
        })
          .then(openid => {
            // 推荐订单列表接口查询
            wx.request({
              url: "https://www.360myhl.com/meixinJF/xcx/gxIndex",
              data: {
                openid: openid,
                typs: 0
              },
              header: {
                "content-type": "application/json" // 默认值
              },
              success: function(res) {
                for (let i = 0; i < res.data.length; i++) {
                  if (res.data[i].stime) {
                    res.data[i].stime = res.data[i].stime.slice(0, 10);
                  }
                }

                for (let i = 0; i < res.data.length; i++) {
                  if (res.data[i].expecteddate) {
                    res.data[i].expecteddate = res.data[i].expecteddate.slice(0, 10);
                  }
                }
                that.data = res.data;
              }
            });
          });
      },
      // 拨打电话
      calling: function() {
        wx.makePhoneCall({
          phoneNumber: "4000360028",
          success: function() {
            console.log("拨打电话成功！");
          },
          fail: function() {
            console.log("拨打电话失败！");
          }
        });
      },
      getEachInfo(type) {
        let that = this;
        wx.request({
          url: "https://www.360myhl.com/meixinJF/xcx/gxIndex",
          data: {
            openid: this.openid,
            typs: type
          },
          header: {
            "content-type": "application/json" // 默认值
          },
          success: function(res) {

            for (let i = 0; i < res.data.length; i++) {
              if (res.data[i].stime) {
                res.data[i].stime = res.data[i].stime.slice(0, 10);
              }
            }

            for (let i = 0; i < res.data.length; i++) {
              if (res.data[i].expecteddate) {
                res.data[i].expecteddate = res.data[i].expecteddate.slice(0, 10);
              }
            }
            that.data = res.data;
            console.log("月嫂/育儿嫂：", that.data);
          }
        });
      }
    },

    onLoad() {
      // this.getSetting();
      this.getEachInfo(2);
    }
  };
</script>

<style scoped>
    /* 头部 */
    .home .header {
        height: 20px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 10px;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    .home .header .city {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .home .header .city img {
        width: 10px;
        height: 10px;
    }

    .home .header .city span {
        font-size: 12px;
        color: #000;
        margin-right: 10px;
    }

    .home .header .logo {
        width: 120px;
        height: 60px;
    }

    .home .header .kefu {
        width: 20px;
        height: 20px;
    }

    /* 轮播图 */
    .banner .page__bd {
        width: 375px;
        height: 150px;
    }

    .banner .slide-image {
        width: 100%;
        height: 100%;
    }

    /* 分类 */
    .home .classify {
        position: relative;
        height: 100px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    .home .classify-item {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin: 32px;
    }

    .home .classify .connect_kefu {
        position: fixed;
        right: 10px;
        top: 40%;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        box-shadow: 0 0 2px 2px #ebc0bc;
        background-color: #fff;
    }

    .home .classify .connect_kefu img {
        width:45px;
        height:100%;
        margin-left: -9px;
    }

    .home .classify-item img {
        width: 60px;
        height: 60px;
    }

    .home .classify-item span {
        font-size: 12px;
    }

    /* 推荐订单 */
    .home .recommend {
        height: 30px;
        line-height: 30px;
        padding: 0 15px;
        background-color: #f1f2f6;
    }

    .home .recommend:after {
        display: table;
        content: "";
        line-height: 0;
    }

    .home .recommend .Left {
        float: left;
        font-size: 14px;
    }

    .home .recommend .Left img {
        float: left;
        width: 10px;
        height: 10px;
        margin-top: 10px;
        padding-right: 5px;
    }

    .home .recommend .Right {
        float: right;
        font-size: 12px;
    }

    .home .recommend .Right span {
        color: #ea5944;
    }

    /*推荐订单列表*/
    .home .list {
        background-color: #fff;
        padding: 10px 12px 20px;
        color: #848484;
        height: 60px;
        border-bottom: 5px solid #f1f2f6;
    }

    .home .list h3 {
        font-size: 14px;
        font-weight: bold;
        line-height: 20px;
        color: #000000;
    }

    .home .list .time {
        line-height: 20px;
    }

    .home .list .time .Left {
        float: left;
        font-size: 12px;
    }

    .home .list .time .price {
        float: right;
        font-size: 14px;
        color: #ea5944;
    }

    .home .list .address {
        line-height: 20px;
    }

    .home .list .address .Left1 {
        float: left;
        font-size: 12px;
    }

    .home .list .address .Right1 {
        float: right;
        font-size: 12px;
    }

    .home .list .address .Right1 span {
        color: #ea5944;
    }
</style>
