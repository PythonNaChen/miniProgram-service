<template>
    <div>
        <button class="enterSession" open-type="contact" session-from="weapp">进入客服会话</button>

        <button class="call" type="default" @click="calling">拨打电话</button>

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
    }
  };
</script>

<style scoped>
    .enterSession {
        width: 60%;
        margin: 30px auto 0;
        color: #fff;
        text-align: center;
        font-size: 16px;
        border-radius: 7px;
        padding: 10px 0;
        background-color: #ea5a43;
    }

    .call {
        width: 60%;
        margin: 30px auto 0;
        color: #ffffff;
        text-align: center;
        font-size: 16px;
        border-radius: 7px;
        padding: 10px 0;
        background-color: green;
    }
    button{
        outline: none;
        border: none;
    }
</style>