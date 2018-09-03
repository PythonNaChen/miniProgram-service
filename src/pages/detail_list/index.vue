<template>
    <div class="mother-detail" style="font-weight: 800;">
        <ul class="info-list">
            <li>
                <div class="li-left">
                    <img src="http://www.360myhl.com/meixinJF/MM/ximg/mother_icon_03.png" class="img-1">
                    <span>订单类型</span>
                </div>
                <div class="li-right" v-if="data.typs === 1">
                    {{data.JBID}}月嫂
                </div>
                <div class="li-right" v-if="data.typs === 2">
                    {{data.JBID}}育儿嫂
                </div>
            </li>
            <li>
                <div class="li-left">
                    <img src="http://www.360myhl.com/meixinJF/MM/ximg/mother_icon_06.png" class="img-2">
                    <span>到手工资</span>
                </div>
                <div class="li-right" style="color: #ec6f5b;" v-if="data.typs === 1">
                    {{data.att_yue_price}}
                </div>
                <div class="li-right" style="color: #ec6f5b;" v-if="data.typs === 2">
                    {{data.att_yu_price}}
                </div>
            </li>
            <li>
                <div class="li-left">
                    <img src="http://www.360myhl.com/meixinJF/MM/ximg/mother_icon_08.png" class="img-3">
                    <span v-if="data.typs === 1">预产期</span>
                    <span v-if="data.typs === 2">到岗试用期</span>
                </div>
                <div class="li-right" style="color: #ec6f5b;" v-if="data.typs === 1">
                    {{data.expecteddate}}
                </div>
                <div class="li-right" style="color: #ec6f5b;" v-if="data.typs === 2">
                    <span v-if="data.startDate === '' || data.startDate === null">上班时间：<span
                            style="color: red">立即到岗</span></span>
                    <span v-if="data.startDate">上班时间：{{data.startDate}}</span>
                </div>
            </li>
            <li>
                <div class="li-left">
                    <img src="http://www.360myhl.com/meixinJF/MM/ximg/mother_icon_10.png" class="img-4">
                    <span>服务时长</span>
                </div>
                <div class="li-right">
                    {{data.days}}天
                </div>
            </li>
            <li>
                <div class="li-left">
                    <img src="http://www.360myhl.com/meixinJF/MM/ximg/mother_icon_10.png" class="img-4">
                    <span>服务地址</span>
                </div>
                <div class="li-right">
                    {{data.address}}
                </div>
            </li>
            <li>
                <div class="li-left">
                    <img src="http://www.360myhl.com/meixinJF/MM/ximg/mother_icon_10.png" class="img-4">
                    <span>年龄要求</span>
                </div>
                <div class="li-right">
                    {{data.yearYQ}}
                </div>
            </li>
            <li>
                <div class="li-left">
                    <img src="http://www.360myhl.com/meixinJF/MM/ximg/mother_icon_10.png" class="img-4">
                    <span>证件要求</span>
                </div>
                <div class="li-right">
                    {{data.zjYQ}}
                </div>
            </li>
            <li>
                <div class="li-left">
                    <img src="http://www.360myhl.com/meixinJF/MM/ximg/mother_icon_10.png" class="img-4">
                    <span>具体要求</span>
                </div>
                <div class="desc">
                    {{data.jtYQ}}
                </div>
            </li>
        </ul>
        <button class="submit" @click="signUp()">报 名</button>
    </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        openid: "",
        orderid: "",
        data: null
      };
    },
    methods: {
      getDetailList(orderid) {
        let that = this;
        // 订单详情接口查询
        wx.request({
          url: "https://www.360myhl.com/meixinJF/xcx/queryOrder",
          data: {
            orderid: orderid
          },
          header: {
            "content-type": "application/json" // 默认值
          },
          success: function(res) {
            that.data = res.data;
            console.log("详情：", that.data);
          }
        });
      },
      signUp() {
        wx.request({
          url: "https://www.360myhl.com/meixinJF/xcx/GXin",
          data: {
            xid: this.orderid,
            openid: this.openid
          },
          header: {
            "content-type": "application/json" // 默认值
          },
          success: function(res) {
            console.log("response", res);
            switch (res.data) {
              case 1:
                wx.showModal({
                  content: "恭喜您已经报名成功！",
                  showCancel: false,
                  success: function(res) {
                    if (res.confirm) {
                      console.log("用户点击确定");
                      const url = "/pages/index/main";
                      wx.switchTab({ url });
                    }
                  }
                });
                break;
              case 0:
                wx.showModal({
                  content: "报名失败！请稍后重试",
                  showCancel: false,
                  success: function(res) {
                    if (res.confirm) {
                      console.log("用户点击确定");
                    }
                  }
                });
                break;
              case 99:
                wx.showModal({
                  content: "您已经报过名了！",
                  showCancel: false,
                  success: function(res) {
                    if (res.confirm) {
                      console.log("用户点击确定");
                      const url = "/pages/index/main";
                      wx.switchTab({ url });
                    }
                  }
                });
                break;
            }
          }
        });
      }
    },
    onLoad(options) {
      console.log("options", options);
      this.openid = options.openid;
      this.orderid = options.orderid;
      this.getDetailList(options.orderid);
    }
  };
</script>

<style scoped>
    .mother-detail {
        height: 100vh;
        background-color: #f6f6f6;
    }

    .mother-detail img {
        width: 15px;
        height: 15px;
        vertical-align: middle;
        padding-right: 10px;
    }

    .mother-detail .info-list {
        background-color: #fff;
        padding-bottom: 50px;
    }

    .mother-detail .info-list li {
        height: 44px;
        line-height: 44px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-datas: center;
        border-bottom: 1px solid #8f8e8e;
        padding: 0 20px;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        font-size: 14px;
    }

    .mother-detail .info-list li .li-right {
        color: #797979;
    }

    .mother-detail .info-list li:last-child {
        border: none;
        display: inline-block;
    }

    .desc {
        font-size: 14px;
        margin-left: 24px;
        color: #787878;
        margin-top: -10px
    }

    .submit {
        position: fixed;
        bottom: 3%;
        left: 10%;
        width: 80%;
        background-color: #ef6f5b;
        color: #ffffff;
        font-weight: normal;
    }
</style>