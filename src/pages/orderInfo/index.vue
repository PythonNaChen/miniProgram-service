<template>
    <div class="page" style="font-weight: 800;">
        <div class="page__bd">
            <!--头部-->
            <div id="tab_header">
                <ul>
                    <li :class="{selected: status === 0}" @click="getEachList(0)">全部</li>
                    <li :class="{selected: status === 1}" @click="getEachList(1)">已预约</li>
                    <li :class="{selected: status === 2}" @click="getEachList(2)">执行中</li>
                    <li :class="{selected: status === 3}" @click="getEachList(3)">已结束</li>
                    <li :class="{selected: status === 4}" @click="getEachList(4)">已取消</li>
                    <li :class="{selected: status === 5}" @click="getEachList(5)">待支付</li>
                </ul>
            </div>
            <!--内容-->
            <div id="tab_content">
                <div class="dom" style="display:block">
                    <div class="item doing" v-for="(item, index) in allData" :key="index">
                        <div class="title2">
                            <img src="http://www.360myhl.com/meixinJF/MM/ximg/orderList_icon_03.png" alt="">
                            <span v-if="item.status === 0">待安排</span>
                            <span v-if="item.status === 1">执行中</span>
                            <span v-if="item.status === 11">提前结束申请中</span>
                            <span v-if="item.status === 2">休息中</span>
                            <span v-if="item.status === 207">申请休息</span>
                            <span v-if="item.status === 2077">申请回岗</span>
                            <span v-if="item.status === 2">休息中</span>
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
                                <img :src="'' + item.tx" alt="">
                            </div>
                            <div class="img_box" v-else @click="go_logs_record(item.id, item.name)">
                                <img src="https://www.360myhl.com/meixinJF/MM/ximg/normalHeadImg.png" alt="">
                            </div>
                            <div class="desc">
                                <div class="word" style="background-color: #fef0f0;">
                                    <span class="job" v-if="item.typs === 1">月嫂</span>
                                    <span class="job" v-if="item.typs === 2">育儿嫂</span>
                                    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/zhuanjia.png" alt="">-->
                                    <span class="level">{{item.class_name}}</span>
                                    <span class="edit-number">编号：{{item.cid}}</span>
                                </div>
                                <p>用户名：{{item.name}}</p>
                                <p style="overflow: hidden">服务地址：{{item.address}}</p>
                                <p>到岗时间：{{item.stime}}</p>
                                <p>联系电话：{{item.customermobile}}</p>
                            </div>
                        </div>
                        <div class="salary_total" v-if="item.typs === 1">共计金额：￥<span>{{item.class_price}}</span>/26天
                        </div>
                        <div class="salary_total" v-if="item.typs === 2">共计金额：￥<span>{{item.class_price_yu}}</span>/26天
                        </div>
                        <div class="bott">
                            <span v-if="item.status === 0 || item.status === 4" @click="getOrderID(item.oid,item.disID)">到岗确认</span>
                            <span v-if="item.status === 1" @click="endS(item.oid)">请求提前结束</span>
                            <span v-if="item.status === 11" @click="endE(item.oid)">放弃提前结束</span>
                            <span v-if="item.li === 1 && item.status === 1" @click="li(item.oid,item.disID,3099)">离岗确认</span>
                            <span v-if="item.li === 1 && item.status === 20" @click="li(item.oid,item.disID,20999)">退单离岗确认</span>

                            <span v-if="item.status === 1" @click="rest(item.oid,item.disID,207,'申请休息')">休息申请</span>
                            <span v-if="item.status === 2" @click="rest(item.oid,item.disID,2077,'申请回岗')">申请回岗</span>

                         </div>
                        <!-- 确认时间 -->
                        <div class="InputConfirm" v-if="isDialog">
                            <div>
                                护理员到岗时间
                            </div>
                            <div class="inputBox">
                                <picker class="weui-btn" mode="date" :value="startDate" start="1999-01-01" end="2099-01-01"
                                        @change="DateChange">
                                    <span>{{selectedDate}}</span>
                                </picker>
                            </div>
                            <div class="InputConfirm_btn">
                                <span class="cancel" @click="closeInputConfirm()">取消</span>
                                <span class="search" @click="sendDate()">确定</span>
                            </div>
                        </div>
                        <!-- 退单时间 -->
                        <div class="InputConfirm" v-if="isComeToWork">
                            <div class="inputBox">
                                <picker class="weui-btn" mode="date" :value="startDate" start="1999-01-01" end="2099-01-01"
                                        @change="DateChange">
                                    <span>{{selectedRefundDate}}</span>
                                </picker>
                            </div>
                            <div class="InputConfirm_btn">
                                <span class="cancel" @click="closeComeToWork()">取消</span>
                                <span class="search" @click="sureComeToWork()">确定</span>
                            </div>
                        </div>
                    </div>
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
        isDialog: false, //  确认时间弹框
        selectedDate: "点击选择日期", // 存储用户选择的年月日
        status: 0, // 默认激活 "全部" 选项
      };
    },
    methods: {
      // 点击获取各自的列表信息
      getEachList(status) {
        console.log('status', status);
        let that = this
        this.status = status;
        let api = "https://www.360myhl.com/meixinJF/xcx/orderDis";
        wx.request({
          url: api,
          data: {
            yid: wx.getStorageSync("Yid"),
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
      },

      DateChange(e) {
        console.log("选中的日期为：" + e.mp.detail.value);
        this.selectedDate = e.mp.detail.value; // 到岗时间
        this.selectedRefundDate = e.mp.detail.value; // 退单时间
      },

      // 关闭弹框
      closeInputConfirm() {
        this.isDialog = !this.isDialog; // 关闭确认时间的弹框
        this.selectedDate = "点击选择日期";
      },
      // 关闭到退单弹框
      closeComeToWork() {
        this.isComeToWork = !this.isComeToWork; // 关闭确认时间的弹框
        this.selectedDate = "点击选择日期";
      },
      // 确认时间
      getOrderID(item,disID){

        console.log(item);
        console.log(disID);
        wx.showModal({
          title: "确认到岗",
          content: "提前点击可能会导致用户意义。",
          confirmText: "确认",
          cancelText: "取消",
          success: function(res) {
            console.log(res);
            if (res.confirm) {
              let api = "https://www.360myhl.com/meixinJF/xcx/goHome";
              console.log("订单号", item);
              console.log("yid", wx.getStorageSync("Yid"));
              wx.request({
                url: api,
                data: {
                  orderid: item,
                  yid: wx.getStorageSync("Yid"),
                  disID:disID
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
      li(item,disID,id){
        wx.showModal({
          title: "确认离岗",
          content: "确认当前时间为您的离岗时间.",
          confirmText: "确认",
          cancelText: "取消",
          success: function(res) {
            console.log(res);
            if (res.confirm) {
              console.log("用户点击确认");

                let api = "https://www.360myhl.com/meixinJF/xcx/liOrder";
                wx.request({
                  url: api,
                  data: {
                    orderid: item,
                    id: id,
                    disID: disID
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
        })
      },

      // 关闭弹框
      closeInputConfirm() {
        this.isDialog = !this.isDialog; // 关闭确认时间的弹框
        this.selectedDate = "点击选择日期";
      },
      // 请求提前结束
      endS(orderid) {

        console.log("选中的日期为：" + orderid);

        wx.showModal({
          title: "申请离单",
          content: "确认提前离岗？",
          confirmText: "确认",
          cancelText: "取消",
          success: function(res) {
            console.log(res);
            if (res.confirm) {
              let api = "https://www.360myhl.com/meixinJF/xcx/orderFQ";
              wx.request({
                url: api,
                data: {
                  orderid: orderid,
                  type: 11
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

      rest(orderid,disID,type,str) {

        console.log("选中的日期为：" + orderid);

        wx.showModal({
          title: str,
          content: "请确认？",
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


      // 放弃提前结束
      endE(orderid) {
        wx.showModal({
          title: "放弃离单申请",
          content: "确认放弃离单申请开始工作？",
          confirmText: "确认",
          cancelText: "取消",
          success: function(res) {
            console.log(res);
            if (res.confirm) {
              let api = "https://www.360myhl.com/meixinJF/xcx/orderFQ";
              wx.request({
                url: api,
                data: {
                  orderid: orderid,
                  type: 1
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

      // 发送确认时间
      sendDate(orderid) {
        let that = this;
        this.isDialog = !this.isDialog; // 关闭确认时间的弹框
        let api = "https://www.360myhl.com/meixinJF/xcx/goHome";
        console.log("订单号", orderid);
        console.log("yid", wx.getStorageSync("Yid"));
        wx.request({
          url: api,
          data: {
            orderid: orderid,
            yid: wx.getStorageSync("Yid"),
          },
          header: {
            "content-type": "application/x-www-form-urlencoded;charset=utf-8" // 默认值
          },
          success: function(res) {
            if (res) {
              that.selectedDate = "点击选择日期";
            }
          }
        });
      },
      // 获取订单列表
      getOrderList(status) {
        let that = this;
        console.log("status", that.status);
        let api = "https://www.360myhl.com/meixinJF/xcx/orderDis";
        wx.request({
          url: api,
          data: {
            yid: wx.getStorageSync("Yid"),
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
      const myDate = new Date()
      let year = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
      let month = myDate.getMonth()+1; //获取当前月份(0-11,0代表1月)
      let day = myDate.getDate(); //获取当前日(1-31)
      console.log(year, month, day);

      console.log(myDate<'2018-05-03');
    },
    onLoad: function(options) {
      this.openid = options.openid;
      this.getOrderList(options.status);// 获取订单列表
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
        font-weight:normal;
        font-size:16px;
    }

    .selected {
        border-bottom: 2px solid #e2584a;
    }

    /* 内容 */
    #tab_content {
    }

    .doing {
        margin-bottom: 5px;
        background-color: #fff;
        margin-top: 5px;
    }

    .title2 {
        height: 25px;
        line-height: 25px;
        color: #ea5a43;
        padding-left: 20px;
        font-size: 14px;
    }

    .title2 img {
        width: 15px;
        height: 15px;
        vertical-align: middle;
        padding-right: 10px;
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

    .cont .desc .word {
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

    /* 模态层 */
    .dialogMask {
        width: 100vh;
        height: 100vh;
        background-color: #000000;
        opacity: 0.8;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 500;
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

</style>