<template>
  <div class="page">
    <img src="http://www.360myhl.com/meixinJF/MM/ximg/contract-icon_03.png" alt="">
    <h6>点击按钮联系在线客服</h6>
    <button class="enterSession" open-type="contact" session-from="weapp">进入客服会话</button>
    <button class="enterSession" @click="calling">拨打电话</button>
  </div>
</template>

<script>
  export default {
    name: "index",
    methods:{
      calling: function () {
        wx.makePhoneCall({
            phoneNumber: '4000360028',
            success: function () {
              console.log("拨打电话成功！")
            },
            fail: function () {
              console.log("拨打电话失败！")
            }
          }
        )}
    },
    created(){
      let pages = getCurrentPages();    //获取加载的页面
      let currentPage = pages[pages.length - 1];    //获取当前页面的对象
      console.log("获取当前页面的对象", currentPage);
    },
  };
</script>

<style scoped lang="less">
   .page {
    text-align: center;
    .enterSession {
      width: 200px;
      margin: 20px auto 0;
      color: #fff;
      text-align: center;
      font-size: 16px;
      -webkit-border-radius: 57px;
      -moz-border-radius: 57px;
      border-radius: 57px;
      background-color: #ea5a43;
    }
    h6{
      text-align: center;
      font-size: 14px;
      line-height: 30px;
      color: #5a4f5f;
    }
    img {
      width: 95px;
      height: 105px;
      margin: 120px auto 45px;
    }
    button {
      outline: none;
      border: none;
    }
    .textDialog{
      background-color: #fff;
      position: fixed;
      top: 25%;
      left: 8%;
      border: 1px solid #000;
      .text{
        textarea{
          text-align: left;
          color: #646464;
          padding-left: 10px;
          padding-top: 10px;
        }
      }
      .operation{
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid slategray;
        .cancel{
          border-right: 1px solid #c7c7c7;
        }
        .cancel, .sure{
          width: 49%;
          padding: 8px;
        }
      }
    }
  }
</style>
