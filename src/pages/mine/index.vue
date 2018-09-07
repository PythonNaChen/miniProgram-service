<template>
    <div class="page">
        <div class="head">
            <div class="head_box">
                <div class="headIMG">
                    <img :src="userPhoto[0]" alt="">
                </div>
                <div class="userInfo">
                    <p class="line_one" v-if="customername === null">未设置<span class="level">专家级</span></p>
                    <p class="line_one" v-else>{{customername}}<span class="level">专家级</span></p>
                    <p class="line_two">{{phone}}</p>
                </div>
            </div>
        </div>
        <div class="manager">
            <img src="http://www.360myhl.com/meixinJF/MM/ximg/user_03.png" alt="">
            <span class="lab1">客户经理：</span>
            <span class="lab2" v-if="YNAME">{{YNAME}}</span>
            <span class="lab2" v-else>暂无</span>
        </div>
        <div class="phone">
            <img src="http://www.360myhl.com/meixinJF/MM/ximg/user_07.png" alt="">
            <span class="lab1">联系电话：</span>
            <span class="lab2" v-if="YPHONE">{{YPHONE}}</span>
            <span class="lab2" v-else>暂无</span>
        </div>
        <!--<div class="manager_msg">-->
        <!--<div class="item">-->
        <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/user_14.png" alt="">-->
        <!--<span>钱包</span>-->
        <!--</div>-->
        <!--<div class="item">-->
        <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/user_11.png" alt="">-->
        <!--<span>消息</span>-->
        <!--<div class="messages">1</div>-->
        <!--</div>-->
        <!--</div>-->
        <div class="order">
            <div class="title">订单列表</div>
            <div class="order_list" v-if="No_data === true" v-for="(item, index) in data" :key="index">
                <div @click="goOrderList()">
                    <div class="customer">
                        <span class="lable" v-if="item.typs===1">月嫂</span>
                        <span class="lable" v-if="item.typs===2">育儿嫂</span>
                        <span class="lable2">客户：{{item.customername}}</span>
                    </div>
                    <div class="time">
                        <img src="http://www.360myhl.com/meixinJF/MM/ximg/time_icon_19.png" alt="">
                        <span class="lable2">服务时间：{{item.stime}} - {{item.etime}}</span>
                    </div>
                    <div class="state">
                        <img src="http://www.360myhl.com/meixinJF/MM/ximg/state.png" alt="">
                        <span class="lable2">订单状态：
                        <span style="color: #EA5A42;" v-if="item.status === 0">订单未执行</span>
                        <span style="color: #EA5A42;" v-if="item.status === 1">执行中</span>
                        <span style="color: #EA5A42;" v-if="item.status === 2">休息中</span>
                        <span style="color: #EA5A42;" v-if="item.status === 3">已结束</span>
                        <span style="color: #EA5A42;" v-if="item.status === 4">挂单中</span>
                        <span style="color: #EA5A42;" v-if="item.status === 5">退款中</span>
                        <span style="color: #EA5A42;" v-if="item.status === 6">等待用户确认</span>
                        <span style="color: #EA5A42;" v-if="item.status === 20">退单退款</span>
                        <span style="color: #EA5A42;" v-if="item.status === 21">正常结束(退)</span>
                        <span style="color: #EA5A42;" v-if="item.status === 22">正常结束</span>
                        <span style="color: #EA5A42;" v-if="item.status === 16">协助派工中</span>
                        <span style="color: #EA5A42;" v-if="item.status === 31">已结束(评价完成)</span>
                        <span style="color: #EA5A42;" v-if="item.status === 201">已退单(评价完成)</span>
                        <span style="color: #EA5A42;" v-if="item.status === 211">已结束(退,评价完成)</span>
                        <span style="color: #EA5A42;" v-if="item.status === 221">已结束(评价完成)</span>
                        <span style="color: #EA5A42;" v-if="item.status === 2011">已退单(评价完成-已退款)</span>
                        <span style="color: #EA5A42;" v-if="item.status === 2111">已结束(退,评价完成-已退款)</span>
                    </span>
                    </div>
                </div>
                <div class="rightTo" @click="go_logs_record(item.order_id, item.customername)"><img
                            src="https://www.360myhl.com/meixinJF/MM/ximg/rightTo.png" alt=""></div>

            </div>
            <div class="order_list" v-if="No_data === false">
               <span style="color: #ea5a43;">暂无数据...</span>
            </div>
        </div>
        <div class="menu-list">
            <div class="menu-list-item" @click="goCollection()">
                <img src="http://www.360myhl.com/meixinJF/MM/ximg/schedule.png" class="img1">
                <p>档期</p>
            </div>
            <div class="menu-list-item" @click="goOrderList()">
                <img src="http://www.360myhl.com/meixinJF/MM/ximg/order.png" class="img2">
                <p>订单</p>
            </div>
            <div class="menu-list-item">
                <img src="http://www.360myhl.com/meixinJF/MM/ximg/signUp.png" class="img2">
                <p>报名</p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        userPhoto: [],
        customername: "",
        phone: '',
        YNAME: "",
        YPHONE: "",
        class_name:"", // 级别
        openid: "",
        data: "",
        id: null,
        No_data: true
      };
    },
    methods: {
      // 跳转到 预约 列表
      goOrderList() {
        const url = "../orderInfo/main?openid=" + this.openid + "&status=" + 0;
        wx.navigateTo({ url });
      },
      // 获取用户头像
      getUserHeadeImg() {
        let that = this;
        wx.getUserInfo({
          success: function(data) {
            that.userPhoto.push(data.userInfo.avatarUrl);
          }
        });
      },
      // 获取用户的授权信息（名称、城市）
      getSetting() {
        let that = this;
        const login = new Promise((resolve, reject) => {
          wx.login({
            success: function(res) {
              if (res) {
                console.log("res.code", res.code);
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
              success: function(resT) {
                if (resT) {
                  that.openid = resT.data; //openid  ogx_x0G_WFS7kKhkmq4Nbk-bwKpk
                  console.log("that.openid", that.openid);
                  resolve(resT.data);
                } else {
                  reject(resT);
                }
              }
            });
          });
        })
          .then(value => {
            wx.request({
              url: "https://www.360myhl.com/meixinJF/xcx/hlyOp",
              data: {
                openid: value,
                wxphoto: that.userPhoto[0]
              },
              method: "GET",
              success: function(response) {
                console.log("用户数据：", response.data);
                console.log("用户数据：", response.data.id);
                wx.setStorageSync('Yid', response.data.id) // 设置 session 会话
                if (response.data) {
                  that.customername = response.data.name;
                  that.YNAME = response.data.YNAME;
                  that.YPHONE = response.data.YPHONE;
                  that.phone = response.data.phone;
                  that.id = response.data.id;
                  // that.class_name = response.data.class_name;
                }
                // 如果没有拉取到用户的openid，则返回登录页
                if (response.data.type == 0) {
                  wx.navigateTo({
                    url: "/pages/login/main"
                  });
                }
              }
            });

            wx.request({
              url: "https://www.360myhl.com/meixinJF/xcx/hlyListOrder2",
              data: {
                openid: that.openid
              },
              method: "GET",
              success: function(res) {
                if (res) {
                  for (let i = 0; i < res.data.length; i++) {
                    res.data[i].stime = res.data[i].stime.slice(0, 10);
                    res.data[i].etime = res.data[i].etime.slice(0, 10);
                  }
                  that.data = res.data;
                  console.log('that.data', that.data.length);
                  console.log(typeof that.data);
                  if (that.data.length > 0) {
                    that.No_data = true
                  } else {
                    that.No_data = false
                  }
                }
              }
            });
          });
      },
      // 点击跳转到日志记录页面 /pages/logs_record/main
      go_logs_record(orderid, name) {
        wx.setStorageSync('orderid', orderid) // 设置 session 会话
        wx.setStorageSync('yname', name) // 设置 session 会话
        const url = "../logs_record/main?name=" + name;
        wx.navigateTo({ url });
      },
      // 跳转到档期
      goCollection(){
        // const url = "../collection/main?id=" + this.id;
        const url = "../schedule/main";
        wx.navigateTo({ url });
      }
    },
    onLoad() {
      this.getUserHeadeImg(); //  获取用户头像
      this.getSetting(); // 获取用户信息
      wx.getSetting({
        success(res) {
          if (res.authSetting["scope.userInfo"]) {
            console.log(111);
          }else{
            // 没有授权过的用户，跳转到自己写的授权提示页面
            wx.navigateTo({
              url: "/pages/login/main"
            });
          }
        }
      });
    },
  };
</script>

<style scoped>
    .head {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 20px 0 0 40px;
        background-image: url("https://www.360myhl.com/meixinJF/MM/ximg/mine_BIMG.png");
        background-repeat: no-repeat;
        background-size: 100% 180px;
        height: 180px;
    }

    .head_box {
        font-size: 14px;
        color: #ffffff;
        display: flex;
        align-items: center;
    }

    .head_box .headIMG {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        overflow: hidden;
        text-align: center;
        border: 5px solid #ffffff;
    }

    .head_box .headIMG img {
        width: 100%;
        height: 100%;
    }

    .head_box .userInfo {
        margin-left: 15px;
    }

    .head_box .line_two {
        font-size: 16px;
    }

    .level {
        color: #fff;
        background-color: #ff0000;
        padding: 1px 3px;
        border-radius: 4px;
        font-size: 12px;
        margin: 0 5px;
    }

    .manager {
        font-size: 14px;
        height: 25px;
        line-height: 25px;
        background-color: #ffffff;
        border-bottom: 5px solid #f6f6f6;
    }

    .manager img {
        width: 15px;
        height: 15px;
        padding: 0 15px 0 20px;
    }

    .phone {
        font-size: 14px;
        height: 25px;
        line-height: 25px;
        background-color: #ffffff;
        border-bottom: 5px solid #f6f6f6;
    }

    .phone img {
        width: 15px;
        height: 15px;
        padding: 0 15px 0px 20px;
    }

    .manager_msg {
        position: relative;
        width: 100%;
        margin: 0 auto;
        height: 45px;
        display: flex;
        justify-content: space-between;
        background-color: #f6f6f6;
        border-bottom: 4px solid #F6F6F6;
    }

    .manager_msg .item {
        width: 49%;
        height: 45px;
        background-color: #ffffff;
        text-align: center;
        line-height: 45px;
    }

    .manager_msg .item img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
        padding-right: 10px;
    }

    .manager_msg .item .messages {
        position: absolute;
        top: 8px;
        right: 42px;
        width: 10px;
        height: 10px;
        text-align: center;
        line-height: 10px;
        padding: 5px;
        border-radius: 50%;
        color: #ffffff;
        background-color: #e52b0d;
        font-size: 12px;
    }

    .manager_msg .item span {
        font-size: 14px;
    }

    /*订单列表*/
    .order {
        border-bottom: 1px solid #f6f6f6;
        background-color: #ffffff;
    }

    .order .title {
        border-top: 5px solid #f6f6f6;;
        font-size: 14px;
        border-bottom: 1px solid #ededef;
        padding-left: 20px;
    }

    .order .order_list {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0 20px 10px 20px;
        font-size: 14px;
        position: relative;
        border-bottom: 1px solid #ffffff;
    }

    .order .order_list img {
        width: 15px;
        height: 15px;
        padding-right: 10px;
        vertical-align: middle;
    }

    .order .order_list .customer {
        height: 30px;
        line-height: 30px;
        padding-top: 10px;
    }

    .order .order_list .customer .lable {
        font-size: 12px;
        padding: 0 3px;
        color: #ffffff;
        background-color: #ea5a43;
        margin-right: 5px;
        border-radius: 4px;
    }

    .order .order_list .time {
        height: 30px;
        line-height: 30px;
    }

    .order .order_list .state {
        height: 30px;
        line-height: 30px;
    }

    .order .order_list .rightTo {
        position: absolute;
        right: 0;
        top: 50%;
    }

    /*菜单列表*/
    .menu-list {
        font-size: 14px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        background: #fff;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        text-align: center;
        justify-content: space-around;
        border-bottom: 6px solid #eaeaea;
    }

    .menu-list img {
        width: 35px;
        height: 35px;
    }

    .menu-list .menu-list-item p {
        line-height: 25px;
        height: 25px;
    }

</style>