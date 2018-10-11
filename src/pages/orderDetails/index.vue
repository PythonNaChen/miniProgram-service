<!-- 订单详情 列表-->
<template>
    <div class="page">
        <div class="info">
            <ul>
                <li>
                    <div class="left">
                        <img src="http://www.360myhl.com/meixinJF/MM/ximg/user-icon.png" alt="">
                        <p>年龄</p></div>
                    <div class="right"><input type="text" :value="age" v-model="age" maxlength="2"></div>
                </li>
                <li>
                    <div class="left">
                        <img src="http://www.360myhl.com/meixinJF/MM/ximg/user-icon.png" alt="">
                        <p>出生日期</p></div>
                    <div class="right">
                        <picker class="weui-btn" mode="date" :value="date" start="1960-01-01" end="2099-01-01"
                                @change="DateChange">
                            <p type="default">{{date}}</p>
                        </picker>
                    </div>
                </li>
                <!--<li>-->
                    <!--<div class="left">-->
                        <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/user-icon.png" alt="">-->
                        <!--<p>擅长菜系</p></div>-->
                    <!--&lt;!&ndash;<div class="right"><input type="text" :value=" '川菜' "></div>&ndash;&gt;-->
                    <!--<div class="right"><p>清淡</p></div>-->
                <!--</li>-->
                <li>
                    <div class="left">
                        <img src="http://www.360myhl.com/meixinJF/MM/ximg/user-icon.png" alt="">
                        <p>属相</p></div>
                    <div class="right">
                        <picker class="weui-btn" @change="zodiacPickerChange" :value="zodiacPicker"
                                :range="zodiacArray">
                            <p type="default">{{zodiac}}</p>
                        </picker>
                    </div>
                </li>
                <li>
                    <div class="left">
                        <img src="http://www.360myhl.com/meixinJF/MM/ximg/user-icon.png" alt="">
                        <p>培训学校</p></div>
                    <div class="right"><p>咪嘛教育</p></div>
                </li>
                <li>
                    <div class="left">
                        <img src="http://www.360myhl.com/meixinJF/MM/ximg/user-icon.png" alt="">
                        <p>擅长口味</p></div>
                    <!--<div class="right"><input type="text" :value=" '清淡' "></div>-->
                    <div class="right"><p>清淡</p></div>
                </li>
                <li>
                    <div class="left">
                        <img src="http://www.360myhl.com/meixinJF/MM/ximg/user-icon.png" alt="">
                        <p>身高</p></div>
                    <div class="right"><input type="text" :value="height" v-model="height" maxlength="3">&nbsp;<p>cm</p>
                    </div>
                </li>
                <li>
                    <div class="left">
                        <img src="http://www.360myhl.com/meixinJF/MM/ximg/user-icon.png" alt="">
                        <p>籍贯</p></div>
                    <div class="right"><input type="text" :value="city" v-model="city" maxlength="5"></div>
                </li>
                <li>
                    <div class="left">
                        <img src="http://www.360myhl.com/meixinJF/MM/ximg/user-icon.png" alt="">
                        <p>生育状况</p></div>
                    <div class="right">
                        <picker class="weui-btn" @change="birthPickerChange" :value="birthPicker"
                                :range="birthArray">
                            <p type="default">{{birth}}</p>
                        </picker>
                    </div>
                </li>
                <li>
                    <div class="left">
                        <img src="http://www.360myhl.com/meixinJF/MM/ximg/user-icon.png" alt="">
                        <p>体重</p></div>
                    <div class="right"><input type="text" :value="weight" v-model="weight">&nbsp;<p>kg</p></div>
                </li>
                <li>
                    <div class="left">
                        <img src="http://www.360myhl.com/meixinJF/MM/ximg/user-icon.png" alt="">
                        <p>学历</p></div>
                    <div class="right">
                        <picker class="weui-btn" @change="educationPickerChange" :value="educationPicker"
                                :range="educationArray">
                            <p type="default">{{education}}</p>
                        </picker>
                    </div>
                </li>
            </ul>
        </div>
        <div class="submitBtn" @click="saveData()">提 交</div>
    </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        // 学历
        education: "初中",
        educationPicker: 1,
        educationArray: ["小学", "初中", "高中/职高", "中专", "大专", "大学"],
        // 学历
        zodiac: "牛",
        zodiacPicker: 1,
        zodiacArray: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"],
        // 生育概况
        birth: "已孕",
        birthPicker: 1,
        birthArray: ["已孕", "未孕"],
        // 默认日期
        date: "2016-09-01",
        age: "28", // 默认年龄
        height: 160, // 默认身高
        weight: 48, // 默认体重
        city: "雅安汉源" // 籍贯
      };
    },
    methods: {
      // 学历选择器
      educationPickerChange(e) {
        console.log("选中的值为：" + this.educationArray[e.mp.detail.value]);
        this.education = this.educationArray[e.mp.detail.value];
      },
      // 生效选择器
      zodiacPickerChange(e) {
        console.log("选中的值为：" + this.zodiacArray[e.mp.detail.value]);
        this.zodiac = this.zodiacArray[e.mp.detail.value];
      },
      // 生日 年-月-日 选择器
      DateChange(e) {
        console.log("选中的日期为：" + e.mp.detail.value);
        this.date = e.mp.detail.value;
      },
      // 生育概况
      birthPickerChange(e) {
        console.log("选中的值为：" + this.birthArray[e.mp.detail.value]);
        this.birth = this.birthArray[e.mp.detail.value];
      },
      // 保存数据
      saveData() {
        let that = this;
        let api = "https://www.360myhl.com/meixinJF/xcx/YAQsave"; // 对应上传图片
        wx.request({
          url: api,
          method:'post',
          data: {
            id: wx.getStorageSync("Yid"),
            birthday: this.date,
            age: this.age,
            high: this.height,
            heavy: this.weight,
            place: this.city,
            education: this.education,
            marriage: this.birth,
            zodiac: this.zodiac
          },
          header: {
            "content-type": "application/x-www-form-urlencoded;charset=utf-8" // 默认值
          },
          success: function(res) {
            if (res) {
              console.log(res.data);
              // 保存成功后返回 我的 页面
              const url = "/pages/mine/main";
              wx.switchTab({ url });
            }
          }
        });
      }
    },
    onLoad() {
      let that = this;
      let api = "https://www.360myhl.com/meixinJF/xcx/YAQID"; // 对应上传图片
      wx.request({
        url: api,
        data: {
          id: wx.getStorageSync("Yid")
          // marriage: this.birth,
          // education: this.education,
          // birthday: this.date,
          // age: this.age,
          // zodiac: this.zodiac,
          // high: this.height,
          // heavy: this.weight,
          // place: this.city
        },
        header: {
          "content-type": "application/json" // 默认值
        },
        success: function(res) {
          if (res) {
            console.log(res.data);
            that.birth = res.data.marriage;
            that.education = res.data.education;
            that.date = res.data.birthday.split(' ')[0];
            that.age = res.data.age;
            that.zodiac = res.data.zodiac;
            that.height = res.data.high;
            that.weight = res.data.heavy;
            that.city = res.data.place;
          }
        }
      });
    }
  };
</script>

<style scoped lang="less">
    .page {
        .info {
            ul {
                li {
                    border-bottom: 1px solid #dadada;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                    padding: 0 20px;
                    height: 40px;
                    .left {
                        display: flex;
                        align-items: center;
                        img {
                            width: 15px;
                            height: 15px;
                            padding-right: 5px;
                        }
                        p {
                            font-size: 14px;
                            color: #000000;
                        }
                    }
                    .right {
                        display: flex;
                        align-items: center;
                        input, p {
                            color: #797979;
                            font-size: 14px;
                            text-align: right;
                        }
                    }
                }
            }
        }
        .submitBtn {
            padding: 10px 10px;
            color: #ffffff;
            background-color: #ea5432;
            border-radius: 7px;
            width: 30%;
            margin: 30px auto 0;
            text-align: center;
            font-size: 14px;
        }
    }
</style>