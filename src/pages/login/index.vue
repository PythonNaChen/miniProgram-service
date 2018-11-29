<template>
    <div class="page">
        <div class="logo">
            <img src="https://www.360myhl.com/meixinJF/img/companyLogo.png" class="logo" @click="goHome()">
        </div>
        <div class="info" style="position: relative;">
            <div class="phone">
                <img src="https://www.360myhl.com/meixinJF/MM/ximg/phone_03.png" alt="">
                <input type="text" placeholder="请先输入手机号" maxlength="11" v-model="customermobile ">
            </div>
            <div class="code">
                <img src="https://www.360myhl.com/meixinJF/MM/ximg/code_07.png" alt="">
                <input type="text" placeholder="短信验证码" v-model="code" maxlength="6">
                <button v-if="!bool && isShowCodeButton" open-type="getUserInfo" @getuserinfo="bindGetUserInfo" @click="getUserInfo1">
                    发送验证码
                </button>
                <button v-if="bool && isShowCodeButton" style="font-size: 12px;">
                    已发送...
                </button>
            </div>
            <div class="login" @click="loginValidate()">登 录</div>
        </div>
    </div>
</template>

<script>
  import base64 from "../../../static/images/base64";

  export default {
    name: "index",
    watch: {
      "customermobile": function (phone) {
        if (phone.length === 11){
          this.isShowCodeButton = true
        } else {
          this.isShowCodeButton = false
        }
      },
      "bool": function(v) {
        let that = this;
        if (this.bool === true) {
          setTimeout(function() {
            console.log(that.bool = !v);
          }, 20000);
        }
      }
    },
    data() {
      return {
        customermobile: null, // 登陆者的 手机号码
        code: null, // 登陆者的 短信验证码
        userName: null, // 登陆者的 微信名
        userIMGUrl: null, // 登陆者的 头像地址
        openId: null, // 唯一标识符
        bool: false,
        isLogin: false, // 登录按钮
        isShowCodeButton: false // 默认不显示发送短信按钮
      };
    },
    mounted() {
      // 一进来看看用户是否授权过
      this.getSetting();
    },
    methods: {
      // 跳转到首页
      goHome() {
        const url = '/pages/index/main';
        wx.switchTab({ url });
      },
      // 发送短信验证
      async changeCode(openid) {
        var api = "https://www.360myhl.com/meixinJF/xcx/yzmYA";
        let res = wx.request({
          url: api,
          method: "GET",
          data: {
            customermobile: this.customermobile,
            openid: openid,
            wxphoto: this.userIMGUrl
          },
          header: {
            "content-type": "application/x-www-form-urlencoded;charset=utf-8"
          }
        });
        if (res) {
          console.log("发送短信验证", res);
        }
      },
      // 登录验证
      async loginValidate() {
        let that = this;
        var api = "https://www.360myhl.com/meixinJF/xcx/start2";
        await wx.request({
          url: api,
          method: "POST",
          data: {
            customermobile: this.customermobile,
            pwd: this.code,
            openId: this.openId
          },
          header: {
            /*"content-type": "application/json" // 默认值*/
            "content-type": "application/x-www-form-urlencoded;charset=utf-8"
          },
          success: function(res) {
            if (res) {
              if (res.data === 1) {
                // 登陆成功
                console.log("登陆成功");
                wx.switchTab({
                  url: "/pages/mine/main"
                });
              } else if (res.data === 2) {
                //登录失败
                console.log("登录失败");
                wx.navigateTo({
                  url: "/pages/login/main"
                });
                that.customermobile = "";
                that.code = "";
                // 登录失败提示
                wx.showModal({
                  content: "登录失败，请检查后重试",
                  showCancel: false,
                  success: function(res) {
                    if (res.confirm) {
                      console.log("用户点击确定");
                    }
                  }
                });
              }
            }
          }
        });

      },
      // 一进来看看用户是否授权过
      /*
        调起客户端小程序设置界面，返回用户设置的操作结果。设置界面只会出现小程序已经向用户请求过的权限。
        注意：2.3.0 版本开始，用户发生点击行为后，才可以跳转打开设置页，管理授权信息。
      */
      getSetting() {
        wx.getSetting({
          success(res) {
            if (!res.authSetting["scope.userInfo"]) {
              wx.authorize({
                scope: "scope.userInfo",
                success() {
                  // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                  console.log("用户已经授权过");
                }
              });
            } else {
              console.log("用户还未授权过");
            }
          }
        });
      },
      // 点击发送验证码时候检查微信版本
      getUserInfo1() {
        console.log("click事件首先触发");
        // 判断小程序的API，回调，参数，组件等是否在当前版本可用。  为false 提醒用户升级微信版本
        // console.log(wx.canIUse('button.open-type.getUserInfo'))
        if (wx.canIUse("button.open-type.getUserInfo")) {
          // 用户版本可用
        } else {
          console.log("请升级微信版本");
        }
      },
      bindGetUserInfo(e) {
        let that = this;
        let userInfo = e.mp.detail.userInfo;
        console.log("userInfo", userInfo);
        if (e.mp.detail.rawData) {
          //用户按了允许授权按钮
          console.log("用户按了允许授权按钮");

          // 1.获取openid
          wx.login({
            success: function(res) {
              if (res) {
                console.log("this", this);
                console.log("code", res.code);
                wx.request({
                  url: "https://www.360myhl.com/meixinJF/xcx/app2",
                  data: {
                    js_code: res.code
                  },
                  method: "GET",
                  success: function(resT) {
                    console.log("openid = ", resT.data);
                    that.openid = resT.data;
                    console.log("that.openId", that.openId);

                    // 2.调用发送短信验证码的函数
                    that.bool = true;
                    that.changeCode(resT.data);
                  }
                });
              }
            }
          });

          // 3.获取登陆者 头像，名称以及输入的手机号码交付后台
          this.userName = userInfo.nickName;
          this.userIMGUrl = userInfo.avatarUrl;

          console.log("手机号：", this.customermobile);
          console.log("验证码：", this.code);
          console.log("微信名：", this.userName);
          console.log("头像地址：", this.userIMGUrl);


        } else {
          //用户按了拒绝按钮
          console.log("用户按了拒绝按钮");
        }
      }
    }
  };
</script>

<style scoped>
    .page {
        background-image: url(https://www.360myhl.com/meixinJF/MM/ximg/login_BGI.jpg);
        background-repeat: no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
        height: 100vh;
    }

    .logo {
        width: 70%;
        height: 140px;
        margin: 0 auto 105px;
    }

    .logo img {
        width: 100%;
        height: 100%;
    }

    .phone, .code {
        display: flex;
        font-size: 16px;
        align-items: center;
        color: #aaaaaa;
        width: 80%;
        margin: 40px auto 0;
        border-bottom: 2px solid #ea5944;
        padding: 15px 0;
    }

    .phone img, .code img {
        vertical-align: text-top;
        width: 30px;
        height: 30px;
        margin-right: 20px;
        margin-top: -2px;
    }

    .code input {
        width: 52%;
    }

    .code button {
        border: 2px solid #ea5944;
        font-size: 12px;
        border-radius: 7px;
        padding: 3px 5px;
        color: #ea5944;
        background-color: #f8f8f8;
    }

    .login {
        position: absolute;
        left: 38%;
        bottom: -40%;
        font-size: 16px;
        color: #ffffff;
        padding: 5px 30px;
        background-color: #ea5a43;
        border-radius: 7px;
        cursor: pointer;
    }
</style>
