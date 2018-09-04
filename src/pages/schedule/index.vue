<template>
    <div class="page">
        <div id="box">
            <div class="selectedDate" style="background-color: #fff;height: 62px;display: flex;line-height: 62px;justify-content: space-around;font-size: 18px;">
                <!-- 开始日期 -->
                <picker mode="date" :value="startDate" start="1999-01-01" end="2099-01-01"
                        @change="selectedStartDate">
                    <span type="default">{{s_date}}</span>
                </picker>
                <!-- 结束日期 -->
                <picker mode="date" :value="endDate" start="1999-01-01" end="2099-01-01"
                        @change="selectedEndDate">
                    <span type="default">{{e_date}}</span>
                </picker>
            </div>
            <div class="thead_mask"></div>
            <Calendar :value="value" @next="next" @prev="prev" :events="events" multi disabled
                      @select="select" ref="calendar" @selectMonth="selectMonth" @selectYear="selectYear"/>
            <!--<button @click="setToday">返回今日</button>-->
            <div class="unclick_mask"></div>
        </div>
    </div>
</template>
<script>
  import Calendar from "mpvue-calendar";

  var myDate = new Date(); //获取系统当前时间
  var thisYear = myDate.getFullYear(); // 获取完整的年份(4位,1970-????)
  var thisMonth = myDate.getMonth() + 1; // 获取当前月份(0-11,0代表1月)
  var thisDay = myDate.getDate(); // 获取当前天
  console.log("thisDay", thisDay);
  export default {
    data() {
      return {
        value: [[thisYear, thisMonth, thisDay]], // 当前 年 月 日
        startDate: `${thisYear}-${thisMonth}-${thisDay}`, // 开始日期
        s_date: '开始日期', // 所选的开始日期
        endDate: `${thisYear}-${thisMonth}-${thisDay}`, // 结束日期
        e_date: '结束日期', // 所选的开始日期
      };
    },
    components: { Calendar },
    methods: {
      selectMonth(month, year) { console.log(year, month); },
      prev(month) { console.log(month); },
      next(month) { console.log(month); },
      selectYear(year) { console.log(year); },
      setToday(val, val1, val2) { this.$refs.calendar.setToday(); },
      select(val, val2) {
        console.log(val);
        console.log(val2);
      },
      // 选中的开始日期为
      selectedStartDate(e) {
        console.log("选中的开始日期为：" + e.mp.detail.value);
        this.s_date = e.mp.detail.value
      },
      // 选中的结束日期为
      selectedEndDate(e) {
        console.log("选中的结束日期为：" + e.mp.detail.value);
        this.e_date = e.mp.detail.value
      }
    },
    onLoad() {
      let that = this;
      var api = "https://www.360myhl.com/meixinJF/xcx/ht?attendantsid=1";
      wx.request({
        url: api,
        data: {},
        header: {
          "content-type": "application/json" // 默认值
        },
        success: function(res) {
          if (res) {
            console.log("档期信息：", res);
            let str = res.data;
            let eachElement = []; // 用来存储拆分后的字符串 "2018-8-31" --> "2018,8,31"
            let newDate = []; // 用来存储 转换为int型的数组 [ [2018,8,30], [2018,8,31] ]

            // 拆分原型 转换为一维数组，每个元素都是个二维数组
            for (let i in str) {
              eachElement.push(str[i].split("-"));
            }
            console.log("一维数组：", eachElement);

            // 遍历一维数组长度，并生成对应数量的 空数组 []
            for (let j in eachElement) {
              console.log("二维数组：", eachElement[j]);
              let newLi = [];
              // 遍历二维数组的每个元素（年，月，日），并转换类型 str --> Number()，再存到与之对应的空数组里
              for (let x in eachElement[j]) {
                newLi.push(Number(eachElement[j][x]));
              }
              newDate.push(newLi); // 再把每个数组 存进 最大的 空数组里
            }
            console.log(newDate);
            that.value = newDate;
          }
        }
      });
    }
  };
</script>

<style scoped>
    .page {
        width: 100vh;
        height: 100vh;
        background-color: #000000;
    }

    #box {
        position: fixed;
        left: 0;
        top: 20%;
        width: 100%;
    }

    #box .thead_mask {
        width: 100%;
        height: 40px;
        background-color: #ccc;
        position: absolute;
        top: 13%;
        left: 0;
        opacity: 0.3;
        z-index: 50;
    }

    #box .unclick_mask {
        border: 1px solid #000;
        width: 100%;
        height: 250px;
        background-color: #ccc;
        position: absolute;
        top: 20%;
        left: 0;
        opacity: 0;
    }
</style>
