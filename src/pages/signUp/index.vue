<template>
    <div class="page" style="font-weight: 800;">
        <div class="page__bd">
            <div class="item doing" v-for="(item, index) in allData" :key="index">
                <div class="title">
                    <img src="http://www.360myhl.com/meixinJF/MM/ximg/orderList_icon_03.png" alt="">
                    <span v-if="item.status === 0">待安排</span>
                    <span v-if="item.status === 1">执行中</span>
                    <span v-if="item.status === 11">执行中</span>
                    <span v-if="item.status === 2">休息中</span>
                    <span v-if="item.status === 207">申请休息</span>
                    <span v-if="item.status === 2077">申请回岗</span>
                    <span v-if="item.status === 3">已结束</span>
                    <span v-if="item.status === 4">挂单中</span>
                    <span v-if="item.status === 5">退款中</span>
                    <span v-if="item.status === 6">等待用户确认</span>
                    <span v-if="item.status === 20">退单退款</span>
                    <span v-if="item.status === 2099">退单申请中</span>
                    <span v-if="item.status === 3099">下单等待用户确认</span>
                    <span v-if="item.status === 20999">退单结束等待用户确认</span>
                    <span v-if="item.status === 21">正常结束(退)</span>
                    <span v-if="item.status === 22">正常结束</span>
                    <span v-if="item.status === 16">协助派工中</span>
                    <span v-if="item.status === 31">已结束(评价完成)</span>
                    <span v-if="item.status === 201">已退单(评价完成)</span>
                    <span v-if="item.status === 211">已结束(退,评价完成)</span>
                    <span v-if="item.status === 221">已结束(评价完成)</span>
                    <span v-if="item.status === 2011">已退单(评价完成-已退款)</span>
                    <span v-if="item.status === 2111">已结束(退,评价完成-已退款)</span>
                </div>
                <div class="cont">
                    <div class="img_box" v-if="item.tx !== '' && item.tx !== undefined && item.tx !== null"
                         @click="go_logs_record(item.id, item.yname)">
                        <img :src="'https://www.360myhl.com/meixinJF/img/' + item.tx" alt="">
                    </div>
                    <div class="img_box" v-else @click="go_logs_record(item.id, item.name)">
                        <img src="http://www.360myhl.com/meixinJF/MM/ximg/normalHeadIm.png" alt="">
                    </div>
                    <div class="desc">
                        <div class="word" style="background-color: #fef0f0;">
                            <span class="job" v-if="item.typs === 1">月嫂</span>
                            <span class="job" v-if="item.typs === 2">育儿嫂</span>
                            <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/zhuanjia.png" alt="">-->
                            <span class="level">{{item.JBID}}</span>
                            <span class="edit-number">编号：{{item.yid}}</span>
                        </div>
                        <p>护理员姓名：{{item.yname}}</p>
                        <p style="overflow: hidden">服务地址：{{item.address}}</p>
                        <p>结单时间：{{item.startDate}}</p>
                        <p>联系电话：{{item.yphone}}</p>
                    </div>
                </div>
                <div class="salary_total" v-if="item.typs === 1">共计金额：￥<span>{{item.class_price}}</span>/26天</div>
                <div class="salary_total" v-if="item.typs === 2">共计金额：￥<span>{{item.class_price_yu}}</span>/26天</div>
                <div class="bott">

                    <span v-if="item.status === 6" @click="sureTime(item.id,item.Dstime)">确认到岗</span>
                    <span v-if="item.status === 3099" @click="li(item.id,item.Detime,4)">确认离岗</span>
                    <span v-if="item.status === 20999" @click="li(item.id,item.Detime,20)">确认离岗</span>


                    <span v-if="item.status === 207" @click="rest(item.id,item.disID,2,'同意休息')">同意休息</span>
                    <span v-if="item.status === 2077" @click="rest(item.id,item.disID,1,'同意回岗')">同意回岗</span>

                    <!--<span v-if="item.status === 1">立即支付</span>-->
                    <span v-if="item.status === 3 || item.status === 5 || item.status === 20 || item.status === 21 || item.status === 22">点评</span>
                    <span v-if="item.status === 0 || item.status === 1 || item.status === 4 || item.status === 6 "
                          @click="orderTD(item.id,item.disID)">退单申请</span>
                    <!--<span v-if="item.status === 0 || item.status === 1 || item.status === 2 || item.status === 3 || item.status === 4 || item.status === 5 || item.status === 20 || item.status === 21 || item.status === 22 || item.status === 16 || item.status === 31 || item.status === 201 || item.status === 211 || item.status === 221 || item.status === 2011 || item.status === 2111">再次续单</span>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        openid: "",
        allData: null,
        startDate: "2018-08-09",
        selectedRefundDate: "选择退单时间", // 存储用户选择 的 退单时间 年月日
        orderid: "", // 订单号
        Dstime: "", // 到岗时间
        status: 0 // 默认激活 "全部" 选项
      };
    },
    methods: {
      tabClick(e) {
        console.log(e);
        this.activeIndex = e.currentTarget.id;
        this.getOrderList(e.currentTarget.id); // 切换tab时刷新对应数据列表
        console.log(e.currentTarget.id);
        console.log(typeof e.currentTarget.id);// string
        console.log(this.tabs[-1]);
      },

      // 确认时间
      sureTime(orderid, Dstime) {
        wx.showModal({
          title: "确认到岗时间",
          content: "确认:" + Dstime + "护理员到岗",
          confirmText: "确认",
          cancelText: "取消",
          success: function(res) {
            console.log(res);
            if (res.confirm) {
              let api = "https://www.360myhl.com/meixinJF/xcx/USgoHome";
              wx.request({
                url: api,
                data: {
                  orderid: orderid,
                  start_time: Dstime
                },
                header: {
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8" // 默认值
                },
                success: function(res) {
                  const url = "/pages/mine/main";
                  wx.switchTab({ url });
                }
              });
            } else {
              console.log("用户点击取消");
            }
          }
        });
      },

      // 离岗
      li(item, Detime, id) {
        wx.showModal({
          title: "确认离岗",
          content: "确认:" + time + "护理员离开",
          confirmText: "确认",
          cancelText: "取消",
          success: function(res) {
            console.log(res);
            if (res.confirm) {
              let api = "https://www.360myhl.com/meixinJF/xcx/liOrder2";
              wx.request({
                url: api,
                data: {
                  orderid: item,
                  id: id
                },
                header: {
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8" // 默认值
                },
                success: function(res) {
                  const url = "/pages/mine/main";
                  wx.switchTab({ url });
                }
              });
            } else {
              console.log("用户点击取消");
            }
          }
        });
      },

      // 同意休息、同意回岗
      rest(orderid, disID, type, str) {
        wx.showModal({
          title: str,
          content: `确认护理员${str}`,
          confirmText: "确认",
          cancelText: "取消",
          success: function(res) {
            console.log(res);
            if (res.confirm) {
              let api = "https://www.360myhl.com/meixinJF/xcx/restA";
              wx.request({
                url: api,
                data: {
                  orderid: orderid,
                  disID: disID,
                  type: type
                },
                header: {
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8" // 默认值
                },
                success: function(res) {
                  const url = "/pages/mine/main";
                  wx.switchTab({ url });
                }
              });
            } else {
              console.log("用户点击取消");
            }
          }
        });
      },

      // 退单申请
      orderTD(orderid, disID) {
        wx.showModal({
          title: "确认退单",
          content: "确认:" + disID + "护理员退单",
          confirmText: "确认",
          cancelText: "取消",
          success: function(res) {
            if (res.confirm) {
              let api = "https://www.360myhl.com/meixinJF/xcx/UsTD";
              wx.request({
                url: api,
                data: {
                  orderid: orderid,
                  disID: disID,
                },
                header: {
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8" // 默认值
                },
                success: function(res) {
                  const url = "/pages/mine/main";
                  wx.switchTab({ url });
                }
              });
            } else {
              console.log("用户点击取消");
            }
          }
        });
      },

      // 获取订单列表
      getOrderList(status) {
        let that = this;
        this.status = status;
        console.log("status", that.status);
        let api = "https://www.360myhl.com/meixinJF/xcx/orderQu";
        wx.request({
          url: api,
          data: {
            openid: that.openid,
            status: status
          },
          header: {
            "content-type": "application/x-www-form-urlencoded;charset=utf-8" // 默认值
          },
          success: function(res) {
            if (res) {
              console.log("orderList", res.data);
              that.allData = res.data;
            }
          }
        });
        that.activeIndex = status;
        if (this.activeIndex === "status") {
          return "weui-navbar__slider_" + status;
        }
      },

      // 点击头像跳转到日志页面 /pages/logs_record/main
      go_logs_record(id) {
        console.log("点击头像跳转到日志页面", id);
        wx.setStorageSync("orderid", id); // 设置 session 会话
        const url = "../logs_record/main";
        wx.navigateTo({ url });
      }
    },
    created() {
      console.log("created", this.openid);
    },
    onLoad: function(options) {
      this.openid = options.openid;
      this.getOrderList(Number(options.status));// 获取订单列表
    }
  };
</script>

<style scoped>
    .page__bd {
        background-color: #f6f6f6;
    }

    .page__bd {
        height: 100%;
    }

    .page__bd {
        padding-bottom: 0;
    }

    /* 头部 */
    #tab_header ul {
        display: -webkit-box;
        overflow-x: scroll;
        overflow-y: hidden;
        border-bottom: 5px solid #F6F6F6;
    }

    #tab_header ul li {
        height: 25px;
        line-height: 25px;
        padding: 0 15px;
        margin: 0 10px;
        font-weight: normal;
        font-size: 16px;
    }

    .selected {
        border-bottom: 2px solid #e2584a;
    }

    /*弹框选择日期*/
    .InputConfirm {
        text-align: center;
        width: 80%;
        margin: 0 auto;
        font-size: 14px;
        font-weight: 800;
        position: fixed;
        top: 35%;
        left: 10%;
        background-color: #fff;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 15px 20px;
        box-shadow: 1px 1px 5px 5px #353535;
        z-index: 90000;
    }

    .InputConfirm .inputBox {
        display: flex;
        font-size: 14px;
        color: #353535;
        width: 35%;
        margin: 0 0 0 90px;
    }

    .InputConfirm input {
        border-bottom: 1px solid #353535;
    }

    .InputConfirm .InputConfirm_btn {
        margin-top: 30px;
        font-size: 14px;
        color: #000;
    }

    .InputConfirm .InputConfirm_btn .cancel {
        background-color: #e83900;
        color: #ffffff;
        margin-right: 20px;
        padding: 5px 15px;
        border-radius: 10px;
    }

    .InputConfirm .InputConfirm_btn .search {
        background-color: #e83900;
        color: #ffffff;
        padding: 5px 15px;
        border-radius: 10px;
    }

    .doing {
        margin-bottom: 5px;
        background-color: #fff;
        margin-top: 5px;
    }

    .title {
        height: 25px;
        line-height: 25px;
        color: #ea5a43;
        padding-left: 20px;
        font-size: 14px;
    }

    .title img {
        width: 15px;
        height: 15px;
        padding-right: 5px;
        vertical-align: middle;
    }

    .cont {
        display: flex;
        padding: 10px 20px 2px;
        background-color: #fef0f0;
        box-sizing: border-box;
    }

    .cont img {
        width: 110px;
        height: 110px;
        margin-right: 15px;
    }

    .cont .desc {
        font-size: 12px;
    }

    .cont .desc .word {
        background-color: #fff;
        padding-bottom: 10px;
    }

    .cont .desc .word .edit-number {
        float: right;
    }

    .cont .desc .word .level {
        color: #fff;
        background-color: #ff0000;
        padding: 1px 3px;
        border-radius: 4px;
        font-size: 12px;
        margin: 0 5px;
    }

    .cont .desc .word .job {
        font-weight: bold;
        font-size: 14px;
    }

    .cont .desc p {
        height: 20px;
        line-height: 20px;
    }

    cont .desc .word {
        background-color: #fef0f0;
    }

    .cont .desc .word img {
        width: 40px;
        height: 16px;
        vertical-align: text-top;
        padding: 0 3px;
    }

    .doing .salary_total {
        font-size: 14px;
        text-align: right;
        height: 30px;
        line-height: 30px;
        display: flex;
        justify-content: flex-end;
        margin-right: 30px;
    }

    .doing .salary_total span {
        font-weight: bold;
    }

    .doing .bott {
        text-align: right;
        font-size: 14px;
        color: #505050;
        margin-bottom: 7px;
        padding-bottom: 10px;
        margin-right: 20px;
    }

    .doing .bott span {
        padding: 1px 5px;
        border: 2px solid #d2d2d2;
        border-radius: 8px;
        margin-left: 10px;
    }
</style>
