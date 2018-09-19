import Vue from 'vue'
import App from './App'
import "../static/weui/weui.css"; //http://kuangpf.com/mpvue-weui/
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      "pages/index/main",
      "pages/mima_classroom/main",
      "pages/online_consulting/main",
      "^pages/mine/main",
      "pages/login/main",
      "pages/detail_list/main",
      "pages/logs_record/main", // 日志记录选项
      "pages/dataDetail/main", // 日志记录  -->  数据填写
      "pages/collection/main", // 档期详情
      "pages/schedule/main", // 档期详情
      "pages/orderInfo/main", // 订单列表
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '咪嘛月嫂商家版',
      navigationBarTextStyle: 'black'
    },
    "tabBar": {
      selectedColor: "#eb604a",
      backgroundColor: "#e0e1e3",
      "list": [
        {
          "pagePath": "pages/index/main",
          "text": "主页",
          "iconPath": "/static/images/index_icon_normal.png",
          "selectedIconPath": "/static/images/index_icon_active.png"
        },
        {
          "pagePath": "pages/mima_classroom/main",
          "text": "咪嘛课堂",
          "iconPath": "/static/images/mimaClassroom_icon_normal.png",
          "selectedIconPath": "/static/images/mimaClassroom_icon_active.png"
        },
        {
          "pagePath": "pages/online_consulting/main",
          "text": "在线咨询",
          "iconPath": "/static/images/onlineConsulting_icon_normal.png",
          "selectedIconPath": "/static/images/onlineConsulting_icon_active.png"
        },
        {
          "pagePath": "pages/mine/main",
          "text": "我的",
          "iconPath": "/static/images/mine_icon_normal.png",
          "selectedIconPath": "/static/images/mine_icon_active.png"
        }
      ]
    }
  }
}
