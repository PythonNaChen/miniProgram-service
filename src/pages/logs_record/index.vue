<!--用药记录-->
<template>
    <div class="page">
        <p>宝宝护理</p>
        <div class="baby_nurse">
            <div class="nurse_item" v-for="(item, index) in baby_nurse_list" :key="index">
                <img :src="item.imgSrc" alt="" @click="goBabyDetail(item)">
            </div>
        </div>
        <div class="percentage">
            <div class="percentage_box" v-if="!isSwitch" @click="isSwitch = !isSwitch">
                <div class="mask" :style="{height:maskHeight + '%'}"></div>
                <div class="percentage_power"></div>
            </div>
            <!-- 南孚聚能环 -->
            <div class="Annular_box" v-else  @click="isSwitch = !isSwitch">
                <img src="../../../static/images/openRuler.png" alt="">
                <span class="percentNum">35%</span>
                <span class="percentDecimal">0.1234</span>
            </div>
        </div>
        <p>妈妈护理</p>
        <div class="mm_nurse">
            <div class="nurse_item" v-for="(item, index) in mm_nurse_list" :key="index">
                <img :src="item.imgSrc" alt="" @click="goMotherDetail(item)">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        baby_nurse_list: [
          { index: 0, imgSrc: "https://www.360myhl.com/meixinJF/static/images/b_2_1.png" },
          { index: 1, imgSrc: "https://www.360myhl.com/meixinJF/static/images/b_2_2.png" },
          { index: 2, imgSrc: "https://www.360myhl.com/meixinJF/static/images/b_2_3.png" },
          { index: 3, imgSrc: "https://www.360myhl.com/meixinJF/static/images/b_2_4.png" },
          { index: 4, imgSrc: "https://www.360myhl.com/meixinJF/static/images/b_2_5.png" },
          { index: 5, imgSrc: "https://www.360myhl.com/meixinJF/static/images/b_2_6.png" },
          { index: 6, imgSrc: "https://www.360myhl.com/meixinJF/static/images/b_2_7.png" },
          { index: 7, imgSrc: "https://www.360myhl.com/meixinJF/static/images/b_2_8.png" },
          { index: 8, imgSrc: "https://www.360myhl.com/meixinJF/static/images/b_2_9.png" },
          { index: 9, imgSrc: "https://www.360myhl.com/meixinJF/static/images/b_2_10.png" },
          { index: 10, imgSrc: "https://www.360myhl.com/meixinJF/static/images/b_2_11.png" },
          { index: 11, imgSrc: "https://www.360myhl.com/meixinJF/static/images/b_2_12.png" },
          { index: 12, imgSrc: "https://www.360myhl.com/meixinJF/static/images/b_2_13.png" }
        ],
        mm_nurse_list: [
          { index: 0, imgSrc: "https://www.360myhl.com/meixinJF/static/images/m_2_1.png" },
          { index: 1, imgSrc: "https://www.360myhl.com/meixinJF/static/images/m_2_2.png" },
          { index: 2, imgSrc: "https://www.360myhl.com/meixinJF/static/images/m_2_3.png" },
          { index: 3, imgSrc: "https://www.360myhl.com/meixinJF/static/images/m_2_4.png" },
          { index: 4, imgSrc: "https://www.360myhl.com/meixinJF/static/images/m_2_5.png" },
          { index: 5, imgSrc: "https://www.360myhl.com/meixinJF/static/images/m_2_6.png" },
          { index: 6, imgSrc: "https://www.360myhl.com/meixinJF/static/images/m_2_7.png" },
          { index: 7, imgSrc: "https://www.360myhl.com/meixinJF/static/images/m_2_8.png" },
          { index: 8, imgSrc: "https://www.360myhl.com/meixinJF/static/images/m_2_9.png" },
          { index: 9, imgSrc: "https://www.360myhl.com/meixinJF/static/images/m_2_10.png" }
        ],
        orderid: "",
        maskHeight: 60, // 标尺高度 %
        isSwitch: false, // 切换展现形式
      };
    },
    methods: {
      goBabyDetail(options) {
        let that = this;
        let suffix;
        switch (options.index) {
          case 0:
            suffix = "Rbabytw"; // 宝宝体温
            break;
          case 1:
            suffix = "Rbabycl"; // 身长、体重、头围（周）
            break;
          case 2:
            suffix = "Rbabyqm"; // 早教启蒙
            break;
          case 3:
            suffix = "Rbabyqd"; // 脐带护理
            break;
          case 4:
            suffix = "Rbabyhd"; // 黄疸观察
            break;
          case 5:
            suffix = "Rbabywy"; // 喂养记录
            break;
          case 6:
            suffix = "Rbabymy"; // 沐浴
            break;
          case 7:
            suffix = "Rbabypf"; // 皮肤观察
            break;
          case 8:
            suffix = "Rbabydb"; // 大便观察
            break;
          case 9:
            suffix = "Rbabyxb"; // 小便观察
            break;
          case 10:
            suffix = "Rbabysm"; // 睡眠观察
            break;
          case 11:
            suffix = "Rbabyhx"; // 呼吸观察
            break;
          case 12:
            suffix = "Rbabynj"; // 奶具消毒
            break;
        }
        const api = "https://www.360myhl.com/meixinJF/xcx/" + suffix;
        wx.request({
          url: api,
          method: "GET",
          data: {
            orderid: that.orderid
          },
          header: {
            "content-type": "application/x-www-form-urlencoded;charset=utf-8"
          },
          success: function(res) {
            if (res) {
              const url = "../dataDetail/main?index=" + "b" + options.index + "&orderid=" + that.orderid + '&yname=' + that.yname;
              wx.redirectTo({ url });
            }
          }
        });
      },
      goMotherDetail(v) {
        let suffix;
        let that = this;
        switch (v.index) {
          case 0:
            suffix = "Rmothertw"; // 妈妈体温
            break;
          case 1:
            suffix = "Rmotheryzc"; // 做月子餐
            break;
          case 2:
            suffix = "Rmotherhl"; // 身体护理
            break;
          case 3:
            suffix = "Rmotherxbhl"; // 胸部护理
            break;
          case 4:
            suffix = "Rmotherel"; // 恶露观察
            break;
          case 5:
            suffix = "Rmotherjl"; // 经络按摩
            break;
          case 6:
            suffix = "Rmotherxtc"; // 形体操指导
            break;
          case 7:
            suffix = "Rmotherfd"; // 腹带塑身
            break;
          case 8:
            suffix = "Rmotherxd"; // 清洗与消毒
            break;
          case 9:
            suffix = "Rmotheryy"; // 用药记录
            break;
        }
        const api = "https://www.360myhl.com/meixinJF/xcx/" + suffix;
        wx.request({
          url: api,
          method: "GET",
          data: {
            orderid: that.orderid
          },
          header: {
            "content-type": "application/x-www-form-urlencoded;charset=utf-8"
          },
          success: function(res) {
            if (res) {
              const url = "../dataDetail/main?api=" + api + "&index=" + "m" + v.index + "&orderid=" + that.orderid + '&yname=' + that.yname;
              console.log('mother', that.orderid);
              wx.redirectTo({ url });
            }
          }
        });
      }
    },
    onLoad: function(options) {
      console.log('session会话：', wx.getStorageSync('yname'));
      this.orderid = wx.getStorageSync('orderid'); // 获取session存储的orderid
      console.log('getCurrentPages', getCurrentPages());
    },
  };
</script>

<style scoped>
    .page {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0 10px;
        position: relative;
    }
    .page .baby_nurse, .mm_nurse {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }
    .page .baby_nurse {
        margin-bottom: 10px;
    }
    .page .nurse_item {
        width: 88px;
        height: 88px;
    }
    .page .nurse_item img {
        width: 100%;
        height: 100%;
    }
    .page p {
        font-size: 14px;
        color: #e73900;
        font-weight: 800;
        margin-left: 20px;
        height: 25px;
        line-height: 25px;
    }

    /* 标尺 */
    .percentage{
        position: absolute;
        width: 20px;
        height: 90px;
        right: 8%;
        top: 45%;
    }
    .percentage .percentage_box{
        width: 100%;
        height: 100%;
        background: url("../../../static/images/Ruler.png") no-repeat;
        -webkit-background-size: 19px 90px;
        background-size: 19px 90px;
        position: relative;
    }
    .percentage .percentage_box .mask{
        background-color: #704e2d;
        position: absolute;
        left: 4px;
        top: 4px;
        width: 13px;
        z-index: 1;
    }
    .percentage .percentage_box .percentage_power{
        position: absolute;
        background: url("../../../static/images/RulerContent.png") no-repeat;
        -webkit-background-size: 12px 116px;
        background-size: 12px 116px;
        width:11px;
        height:85px;
        left:5px;
        top:4px;
    }
    /* 南孚聚能环 */
    .Annular_box{
        position: relative;
    }
    .Annular_box img{
        width:130px;
        height:65px;
        position: absolute;
        right: 0;
        top: 17px;
    }
    .Annular_box .percentNum{
        position: absolute;
        right:84px;
        top:40px;
        font-size: 12px;
    }
    .Annular_box .percentDecimal{
        position: absolute;
        right:21px;
        top:35px;
        font-size: 12px;
    }
</style>