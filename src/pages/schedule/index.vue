<template>
    <div class="page">
        <div id="box">
            <div class="selectedRadio">
                <div class="radio" :class="{active: isActive}" @click="singleElection(0)">休息</div>
                <div class="radio" :class="{active: !isActive}" @click="singleElection(1)">可预约</div>
                <!-- 开始日期 -->
                <div class="startTime">
                    <picker mode="date" :value="startDate" start="1999-01-01" end="2099-01-01"
                            @change="selectedStartDate">
                        <span type="default">{{s_date}}</span>
                    </picker>
                </div>
                <!-- 结束日期 -->
                <div class="endTime">
                    <picker mode="date" :value="endDate" start="1999-01-01" end="2099-01-01"
                            @change="selectedEndDate">
                        <span type="default">{{e_date}}</span>
                    </picker>
                </div>
                <div class="submitTime" @click="submitSchedule()">提交时间</div>
            </div>
            <div class="thead_mask"></div>
            <Calendar @next="next" @prev="prev" multi @select="select" ref="calendar" :tileContent="tileContent"
                      :now="now"/>
            <div class="unclick_mask"></div>
            <!-- 提示 -->
            <div class="notice">
                <div class="notice_box">
                    <div class="line_one"></div>
                    <div class="line_two">休息</div>
                    <div class="line_three"></div>
                    <div class="line_four">可预约</div>
                    <div class="line_five"></div>
                    <div class="line_six">已安排</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import Calendar from "mpvue-calendar";

  var myDate = new Date(); //获取系统当前时间
  var thisYear = myDate.getFullYear(); // 获取完整的年份(4位,1970-????)
  var thisMonth = myDate.getMonth() + 1; // 获取当前月份(0-11,0代表1月)
  var thisDay = myDate.getDate(); // 获取当前天
  export default {
    data() {
      return {
        startDate: `${thisYear}-${thisMonth}-${thisDay}`, // 开始日期
        s_date: "选择开始日期", // 所选的开始日期
        endDate: `${thisYear}-${thisMonth}-${thisDay}`, // 结束日期
        e_date: "选择结束日期", // 所选的开始日期
        isActive: true, // 勾选了安排调休为 true ，为 false 时表示选择了 安排工作
        isActiveValue: "0", // 显示 安排调休或者工作
        now: false, // 是否显示今日的图标
        tileContent:[]
      };
    },
    // props: {
    //   tileContent: Array
    // },
    // watch: {
    //   tileContent: {
    //     handler(val) {
    //       this.tileContent = val;
    //     },
    //     deep: true,
    //     immediate: true
    //   }
    // },
    components: { Calendar },
    methods: {
      // 选择调休还是工作
      singleElection(v) {
        if (v === 0) {
          console.log("您选择了休息");
          this.isActive = true;
          console.log("状态", this.isActive);
          this.isActiveValue = "0";
          console.log("值", this.isActiveValue);
          this.$forceUpdate();
        } else if (v === 1) {
          console.log("您选择了可预约");
          this.isActive = false;
          this.isActiveValue = "1";
        }
      },
      selectMonth(month, year) { console.log(year, month); },
      prev(month) { console.log(month); },
      next(month) { console.log(month); },
      selectYear(year) { console.log(year); },
      setToday(val, val1, val2) { this.$refs.calendar.setToday(); },
      select(val, val2) {},
      // 选中的开始日期为
      selectedStartDate(e) {
        // console.log("选中的开始日期为：" + e.mp.detail.value);
        this.s_date = e.mp.detail.value;
      },
      // 选中的结束日期为
      selectedEndDate(e) {
        // console.log("选中的结束日期为：" + e.mp.detail.value);
        this.e_date = e.mp.detail.value;
      },
      // 提交
      submitSchedule() {
        let that = this;
        const api = "https://www.360myhl.com/meixinJF/xcx/dq?status=" + this.isActiveValue + "&attendantid=" + wx.getStorageSync("Yid") + "&start_date=" + this.s_date + "&end_date=" + this.e_date;
        wx.request({
          url: api,
          header: {
            "content-type": "application/x-www-form-urlencoded;charset=utf-8" // 默认值
          },
          success: function(res) {
            if (res) {
              // console.log('submitSchedule', res);


              wx.request({
                url: "https://www.360myhl.com/meixinJF/xcx/ht?attendantsid=" + wx.getStorageSync("Yid"),
                data: {},
                header: {
                  "content-type": "application/json" // 默认值
                },
                success: function(res) {
                  if (res) {
                    console.log("档期信息：", res.data);
                    that.tileContent = res.data;
                    // that.$refs.calendar.renderer(2018, 8);

                    wx.showToast({
                      title: "已完成",
                      icon: " success",
                      duration: 1500,
                      mask: true
                    });
                  }
                }
              });

            }
          }
        });
        // 重新获取数据

      }
    },
    created() {
      let that = this;
      var api = "https://www.360myhl.com/meixinJF/xcx/ht?attendantsid=" + wx.getStorageSync("Yid");
      wx.request({
        url: api,
        data: {},
        header: {
          "content-type": "application/json" // 默认值
        },
        success: function(res) {
          if (res) {
            console.log("档期信息：", res.data);
            that.tileContent = res.data;
            // let str = res.data;
            // let eachElement = []; // 用来存储拆分后的字符串 "2018-8-31" --> "2018,8,31"
            // let newDate = []; // 用来存储 转换为int型的数组 [ [2018,8,30], [2018,8,31] ]
            //
            // // 拆分原型 转换为一维数组，每个元素都是个二维数组
            // for (let i in str) {
            //   eachElement.push(str[i].split("-"));
            // }
            // // console.log("一维数组：", eachElement);
            //
            // // 遍历一维数组长度，并生成对应数量的 空数组 []
            // for (let j in eachElement) {
            //   // console.log("二维数组：", eachElement[j]);
            //   let newLi = [];
            //   // 遍历二维数组的每个元素（年，月，日），并转换类型 str --> Number()，再存到与之对应的空数组里
            //   for (let x in eachElement[j]) {
            //     newLi.push(Number(eachElement[j][x]));
            //   }
            //   newDate.push(newLi); // 再把每个数组 存进 最大的 空数组里
            // }
            // // console.log(newDate);
            // that.value = newDate;
          }
        }
      });
    }
  };
</script>

<style scoped>
    .holiday {
        background-color: green !important;
    }

    /* 上方操作台 */
    .selectedRadio {
        background-color: #fff;
        height: 100px;
        font-size: 14px;
        display: flex;
        justify-content: space-around;
        position: relative;
    }

    /* 开始时间 定位*/
    .startTime {
        position: absolute;
        bottom: 15%;
        left: 6%;
        border-bottom: 1px solid #cccccc;
    }

    /* 结束时间 定位*/
    .endTime {
        position: absolute;
        bottom: 15%;
        left: 39%;
        border-bottom: 1px solid #cccccc;
    }

    /* 安排 调休 和 工作 的公共样式 */
    .radio {
        margin-top: 10px;
        width: 80px;
        height: 30px;
        line-height: 30px;
        border: 1px solid #ccc;
        color: #000;
        text-align: center;
        border-radius: 7px;
    }

    /* 选择其中某项 后激活的样式*/
    .active {
        background-color: #00b26a !important;
        color: #ffffff !important;
    }

    /* 提交时间的按钮 */
    .submitTime {
        margin-top: 35px;
        width: 80px;
        height: 30px;
        line-height: 30px;
        background-color: #ea5a43;
        border-radius: 14px;
        color: #ffffff;
        text-align: center;
    }

    .page {
        width: 100vh;
        height: 100vh;
        background-color: #000000;
    }

    #box {
        position: fixed;
        left: 0;
        top: 5%;
        width: 100%;
    }

    #box .thead_mask {
        width: 100%;
        height: 40px;
        background-color: #ccc;
        position: absolute;
        top: 148px;
        left: 0;
        opacity: 0.3;
        z-index: 50;
    }

    #box .unclick_mask {
        border: 1px solid #000;
        width: 100%;
        height: 280px;
        background-color: #ccc;
        position: absolute;
        top: 39%;
        left: 0;
        opacity: 0;
    }

    .notice {
        height: 60px;
        width: 100%;
        background-color: #fff;
        text-align: center;
        position: absolute;
        bottom: -50px;
        left: 0;
    }

    .notice .notice_box {
        width: 90%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    /* 休息 */
    .notice .line_one {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        color: #585858;
        font-weight: normal;
        font-size: 14px;
        line-height: 30px;
        text-align: center;
        border: 3px solid #ea5a43;
        background-color: #fff;
    }

    .notice .line_two {
        font-size: 16px;
        height: 35px;
        line-height: 35px;
    }

    /* 已安排 */
    .notice .line_three {
        height: 30px;
        width: 30px;
        color: #585858;
        font-weight: normal;
        border-radius: 50%;
        font-size: 14px;
        line-height: 30px;
        text-align: center;
        background-color: #fff;
        border: 3px solid #ccc;
    }

    .notice .line_four {
        font-size: 16px;
        height: 35px;
        line-height: 35px;
    }

    /* 可预约 */
    .notice .line_five {
        height: 30px;
        width: 30px;
        color: #ffffff;
        font-weight: normal;
        font-size: 14px;
        line-height: 30px;
        text-align: center;
        border-radius: 50%;
        background-color: #ea5a43;
    }

    .notice .line_six {
        font-size: 16px;
        height: 35px;
        line-height: 35px;
    }
</style>
