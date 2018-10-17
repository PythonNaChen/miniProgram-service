<template>
  <div class="yuesao-index" style="font-weight: 800;">
    <!--头部-->
    <div class="header">
      <div class="header_top">
        <div class="yuesao_head_img">
          <img :src="urlPrefix + data.tx" v-if="data.tx !== '' && data.tx !== null">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/normalHeadImg.png" v-else>
        </div>
        <div class="header-detail">
          <p class="yuesao_name">{{data.name}} <span>{{data.class_name}}</span></p>
          <p class="yuesao_salary">{{priceType == 1 ? data.class_price : data.class_price_yu}}<span>元/26天</span></p>
          <p class="yuesao_experience">
            <span class="experience_item">{{data.age}}岁</span>|
            <span class="experience_item">来自{{data.places}}</span>|
            <span class="experience_item">{{data.nx}}年工作经验</span>
            <!--<span>服务过46户</span>-->
          </p>
          <p class="watch_detail" @click="goSchedule">查看档期</p>
        </div>
      </div>
      <div class="header_bottom">
        <div class="header_bottom_item">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/renzheng-icon.png" alt="">
          <span>实名认证</span>
        </div>
        <div class="header_bottom_item">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/pt-icon.png" alt="">
          <span>母婴护理证书</span>
        </div>
        <div class="header_bottom_item">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/medical-icon.png" alt="">
          <span>体检合格</span>
        </div>
      </div>
    </div>
    <!--个人资料-->
    <div class="info">
      <div class="title">
        <img src="http://www.360myhl.com/meixinJF/MM/ximg/user-icon.png" alt="">
        <span>个人资料</span>
      </div>
      <div class="info-detail">
        <ul>
          <li>年 龄：<span style="font-family: 微软雅黑;font-weight: 500;">{{data.age}}岁</span></li>
          <li>属 相：<span style="font-family: 微软雅黑;font-weight: 500;">{{data.zodiac}}</span></li>
          <li>身 高：<span style="font-family: 微软雅黑;font-weight: 500;">{{data.high}}</span></li>
          <li>体 重：<span style="font-family: 微软雅黑;font-weight: 500;">{{data.heavy}}kg</span></li>
        </ul>
        <ul>
          <li>出生日期：<span style="font-family: 微软雅黑;font-weight: 500;">{{birthday}}</span></li>
          <li>培训学校：<span style="font-family: 微软雅黑;font-weight: 500;">360母婴</span></li>
          <li>籍 贯：<span style="font-family: 微软雅黑;font-weight: 500;">{{data.places}}</span></li>
          <li>学 历：<span style="font-family: 微软雅黑;font-weight: 500;">{{data.education}}</span></li>
        </ul>
        <ul>
          <li>擅长菜系：<span style="font-family: 微软雅黑;font-weight: 500;">川菜</span></li>
          <li>擅长口味：<span style="font-family: 微软雅黑;font-weight: 500;">清淡</span></li>
          <li>生育状况：
            <span style="font-family: 微软雅黑;font-weight: 500;" v-if="data.marriage === '已婚' ">已育</span>
            <span style="font-family: 微软雅黑;font-weight: 500;" v-else>未育</span>
          </li>
        </ul>
      </div>
    </div>
    <!--个人技能-->
    <div class="info">
      <div class="title">
        <img src="http://www.360myhl.com/meixinJF/MM/ximg/skill-icon.png">
        <span>个人技能</span>
      </div>
      <div class="info-detail">
        <ul>
          <li>理论考核：{{data.jnA}}分</li>
        </ul>
        <ul style="margin-left: 25px;">
          <li>实操考核：{{data.jnB}}分</li>
        </ul>
        <ul>
          <li>综合素质：{{data.jnC}}分</li>
        </ul>
      </div>
    </div>
    <!--性格评价-->
    <div class="character">
      <div class="title">
        <img src="http://www.360myhl.com/meixinJF/MM/ximg/character-icon.png">
        <span>性格评价</span>
      </div>
      <div class="character-detail">
        <ul>
          <li>
            <span>责任感：</span>
            <img v-for="item  in data.xgA" :key="item" src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png"
                 alt="">
          </li>
          <li>
            <span>爱  心：</span>
            <img v-for="item  in data.xgB" :key="item" src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png"
                 alt="">
          </li>
          <li>
            <span>细  节：</span>
            <img v-for="item  in data.xgC" :key="item" src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png"
                 alt="">
          </li>
          <li>
            <span>主动性：</span>
            <img v-for="item  in data.xgD" :key="item" src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png"
                 alt="">
          </li>
        </ul>
        <ul class="character-ul-right">
          <li>
            <span>交 流：</span>
            <img v-for="item  in data.xgE" :key="item" src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png"
                 alt="">
          </li>
          <li>
            <span>执行力：</span>
            <img v-for="item  in data.xgF" :key="item" src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png"
                 alt="">
          </li>
          <li>
            <span>体 力：</span>
            <img v-for="item in data.xgG" :key="item" src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png"
                 alt="">
          </li>
          <li>
            <span>个人卫生：</span>
            <img v-for="item  in data.xgH" :key="item" src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png"
                 alt="">
          </li>
        </ul>
      </div>
    </div>
    <!--咪嘛月嫂评价-->
    <div class="response">
      <div class="title">咪嘛月嫂评价：</div>
      <p>{{data.pj}}</p>
    </div>
    <!--工作照片-->
    <div class="work-photo">
      <div class="title">
        <img src="http://www.360myhl.com/meixinJF/MM/ximg/pic-icon.png">
        <span>工作照片</span>
      </div>
      <div class="photo-box">
        <div class="scroll-box">
          <div class="img-box" v-for="(item, index) in files" :key="index" @click="predivImage(item)">
            <img :src="item" :id="item">
          </div>
        </div>
      </div>
    </div>
    <!--工作视频-->
    <div class="work-video">
      <div class="title">
        <img src="https://www.360myhl.com/meixinJF/MM/ximg/video_icon_03.png">
        <span>工作视频</span>
      </div>
      <div class="video-list">
        <div class="item" v-for="(item, index) in videos" :key="index">
          <video controls="controls" :src="item"></video>
        </div>
      </div>
    </div>
    <!--评分<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png">-->
    <!--<div class="star_score">-->
    <!--<div class="title">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/star-icon.png">-->
    <!--<span>评分</span>-->
    <!--</div>-->
    <!--<div class="mark-detail">-->
    <!--<div class="mark-detail-left">4.9</div>-->
    <!--<div class="mark-detail-right">-->
    <!--<div class="star-item">-->
    <!--<div class="star-total">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--</div>-->

    <!--<div class="line">-->
    <!--<div class="line-inner"></div>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="star-item">-->
    <!--<div class="star-total">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--</div>-->
    <!--<div class="line">-->
    <!--<div class="line-inner" style="width:60%"></div>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="star-item">-->
    <!--<div class="star-total">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--</div>-->
    <!--<div class="line">-->
    <!--<div class="line-inner" style="width:30%"></div>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="star-item">-->
    <!--<div class="star-total">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--</div>-->
    <!--<div class="line">-->
    <!--<div class="line-inner" style="width:10%"></div>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="star-item">-->
    <!--<div class="star-total">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--</div>-->
    <!--<div class="line">-->
    <!--<div class="line-inner" style="width:10%"></div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--护理员标签-->
    <!--<div class="caregiver_label">-->
    <!--<div class="title">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/talk-icon.png">-->
    <!--<span>护理员标签</span>-->
    <!--</div>-->
    <!--<ul>-->
    <!--<li>-->
    <!--<div>仪表整洁-->
    <!--<span>118</span>-->
    <!--</div>-->
    <!--</li>-->
    <!--<li>-->
    <!--<div>仪表整洁-->
    <!--<span>118</span>-->
    <!--</div>-->
    <!--</li>-->
    <!--<li>-->
    <!--<div>仪表整洁-->
    <!--<span>118</span>-->
    <!--</div>-->
    <!--</li>-->
    <!--<li>-->
    <!--<div>整洁-->
    <!--<span>118</span>-->
    <!--</div>-->
    <!--</li>-->
    <!--<li>-->
    <!--<div>仪表整洁-->
    <!--<span>118</span>-->
    <!--</div>-->
    <!--</li>-->
    <!--<li>-->
    <!--<div>仪表整洁-->
    <!--<span>118</span>-->
    <!--</div>-->
    <!--</li>-->
    <!--<li>-->
    <!--<div>仪表整洁-->
    <!--<span>118</span>-->
    <!--</div>-->
    <!--</li>-->
    <!--<li>-->
    <!--<div>仪表整洁-->
    <!--<span>118</span>-->
    <!--</div>-->
    <!--</li>-->
    <!--<li>-->
    <!--<div>仪表整洁-->
    <!--<span>118</span>-->
    <!--</div>-->
    <!--</li>-->
    <!--</ul>-->
    <!--</div>-->
    <!--底部按钮-->
    <!--<div class="footer">-->
    <!--<div class="footer-item">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/collection_icon_normal.png">-->
    <!--<p>收藏</p>-->
    <!--</div>-->
    <!--<div class="footer-item">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/consultation_icon_normal.png">-->
    <!--<p>咨询</p>-->
    <!--</div>-->
    <!--<div class="footer-item">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/bespeak_icon_normal.png">-->
    <!--<p>预约</p>-->
    <!--</div>-->
    <!--</div>-->
    <!-- 精选留言 -->
    <!--<div class="leaving_msg">-->
    <!--<div class="title">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/leav_msg_icon_03.png">-->
    <!--<span>精选留言</span>-->
    <!--</div>-->
    <!--<div class="item">-->
    <!--<div class="topBox">-->
    <!--<div class="headImg">-->
    <!--<img src="https://www.360myhl.com/meixinJF/MM/ximg/normalHeadImg.png" alt="">-->
    <!--</div>-->
    <!--<div class="name_and_date">-->
    <!--<p class="line_one">雇主：王先生</p>-->
    <!--<p class="line_two">2018年5月28日</p>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="botBox">-->
    <!--Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cumque dignissimos dolorem enim ex excepturi explicabo fuga, illo in laudantium molestias nobis officia optio, possimus qui tempore temporibus ut voluptas?-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="item">-->
    <!--<div class="topBox">-->
    <!--<div class="headImg">-->
    <!--<img src="https://www.360myhl.com/meixinJF/MM/ximg/normalHeadImg.png" alt="">-->
    <!--</div>-->
    <!--<div class="name_and_date">-->
    <!--<p class="line_one">雇主：王先生</p>-->
    <!--<p class="line_two">2018年5月28日</p>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="botBox">-->
    <!--Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cumque dignissimos dolorem enim ex excepturi explicabo fuga, illo in laudantium molestias nobis officia optio, possimus qui tempore temporibus ut voluptas?-->
    <!--</div>-->
    <!--</div>-->

    <!--</div>-->
    <!--技能打钩-->
    <div class="skills">
      <div class="item">
        <div class="skill_banner">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/skill_banner_06.png">
        </div>
        <div class="info_detail">
          <ul>
            <li><img src="/static/images/selected_icon_07.png" alt="">生活护理</li>
            <li><img src="/static/images/selected_icon_07.png" alt="">常规形体恢复</li>
            <li><img src="/static/images/selected_icon_07.png" alt="">基础膳食</li>
            <li><img src="/static/images/selected_icon_07.png" alt="">瑜伽形体恢复</li>
            <li><img src="/static/images/selected_icon_07.png" alt="">肩颈头部放松</li>
            <li><img src="/static/images/selected_icon_07.png" alt="">浮肿、背部酸痛调理</li>
            <li><img src="/static/images/selected_icon_07.png" alt="">产后失眠调理</li>
            <li><img src="/static/images/selected_icon_07.png" alt="">产后抑郁疏导</li>
          </ul>
          <ul>
            <li><img src="/static/images/selected_icon_07.png" alt="">基础月子餐</li>
            <li><img src="/static/images/selected_icon_07.png" alt="">家常点心之作</li>
            <li><img src="/static/images/selected_icon_07.png" alt="">足浴</li>
            <li><img src="/static/images/selected_icon_07.png" alt="">膳食调补方案</li>
            <li><img src="/static/images/selected_icon_07.png" alt="">子宫复旧</li>
            <li><img src="/static/images/selected_icon_07.png" alt="">卵巢保养</li>
            <li><img src="/static/images/selected_icon_07.png" alt="">满月发汗</li>
          </ul>
        </div>
      </div>
      <div class="item">
        <div class="skill_banner">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/skill_banner_15.png">
        </div>
        <div class="info_detail">
          <ul>
            <li><img src="/static/images/selected_icon_07.png" alt="">生活护理</li>
            <li><img src="/static/images/selected_icon_07.png" alt="">健康观察</li>
            <li><img src="/static/images/selected_icon_07.png" alt="">新生儿喂饭</li>
            <li><img src="/static/images/selected_icon_07.png" alt="">常见疾病观察及护理</li>
          </ul>
          <ul>
            <li><img src="/static/images/selected_icon_07.png" alt="">睡眠习惯纠正</li>
            <li><img src="/static/images/selected_icon_07.png" alt="">早产儿、双胞胎喂养</li>
            <li><img src="/static/images/selected_icon_07.png" alt="">新生儿营养方案</li>
            <li><img src="/static/images/selected_icon_07.png" alt="">小儿推拿</li>
          </ul>
        </div>
      </div>
      <div class="item">
        <div class="skill_banner">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/skill_banner_17.png">
        </div>
        <div class="info_detail">
          <ul>
            <li><img src="/static/images/selected_icon_07.png" alt="">初级体能发育指导</li>
            <li><img src="/static/images/selected_icon_07.png" alt="">感官发育指导</li>
            <li><img src="/static/images/selected_icon_07.png" alt="">大运动能力培养</li>
            <li><img src="/static/images/selected_icon_07.png" alt="">早期音乐能力培养</li>
          </ul>
          <ul>
            <li><img src="/static/images/selected_icon_07.png" alt="">家庭阅读环境创设</li>
            <li><img src="/static/images/selected_icon_07.png" alt="">早期阅读能力培养</li>
            <li><img src="/static/images/selected_icon_07.png" alt="">精细动作培养</li>
          </ul>
        </div>
      </div>
      <div class="item">
        <div class="skill_banner">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/skill_banner_20.png">
        </div>
        <div class="info_detail">
          <ul>
            <li><img src="/static/images/selected_icon_07.png" alt="">促进母乳喂养</li>
            <li><img src="/static/images/selected_icon_07.png" alt="">乳腺管经络疏通</li>
            <li><img src="/static/images/selected_icon_07.png" alt="">乳房常见问题处理</li>
            <li><img src="/static/images/selected_icon_07.png" alt="">母乳不足辨证施治</li>
          </ul>
          <ul>
            <li><img src="/static/images/selected_icon_07.png" alt="">回来及膳食调理</li>
            <li><img src="/static/images/selected_icon_07.png" alt="">奶涨施治</li>
            <li><img src="/static/images/selected_icon_07.png" alt="">乳房恢复保养</li>
          </ul>
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
        files: [], // 图片数组
        videos: [], // 视频数组
        data: null, // 月嫂个人信息
        birthday: "", // 从身份证中提取的年月日
        Yid: '', //月嫂id
        urlPrefix: "https://www.360myhl.com/meixinJF/img/",
        priceType: null //月嫂價格
      };
    },
    methods: {
      // 图片浏览
      predivImage(imgSrc) {
        wx.previewImage({
          current: imgSrc, // 当前显示图片的http链接
          urls: this.files // 需要预览的图片http链接列表
        });
      },
      // 跳转到 档期
      goSchedule() {
        const url = "../schedule/main";
        wx.navigateTo({url});
      },
      // 获取图片
      async requestPhotos(Yid) {
        var that = this;
        var api = "https://www.360myhl.com/meixinJF/hy/queryIMG"; // 对应上传图片
        await wx.request({
          url: api,
          data: {
            id: Yid
          },
          header: {
            "content-type": "application/json" // 默认值
          },
          success: function (res) {
            console.log('yid', Yid);
            if (res) {
              that.files = [];
              for (let i = 0; i < res.data.length; i++) {
                let fullPicturePath = "https://www.360myhl.com/FHMYSQL/uploadFiles/uploadImgs/" + res.data[i].address;
                that.files.push(fullPicturePath);
              }
            }
          }
        });
      },
      // 获取视频
      async requestVideos(Yid) {
        var that = this;
        var api = "https://www.360myhl.com/meixinJF/hy/queryMP4"; // 对应上传图片
        await wx.request({
          url: api,
          data: {
            id: Yid
          },
          header: {
            "content-type": "application/json" // 默认值
          },
          success: function (res) {
            if (res) {
              that.videos = []
              console.log('视频：', res);
              for (let i = 0; i < res.data.length; i++) {
                let fullVideosPath = "https://www.360myhl.com/FHMYSQL/uploadFiles/video/" + res.data[i].address;
                that.videos.push(fullVideosPath);
              }
              console.log('videos', that.videos);
            }
          }
        });
      },
      // 获取月嫂个人信息
      async requestPersonalDetail(Yid) {
        var that = this;
        var api = "https://www.360myhl.com/meixinJF/hy/queryIDSE"; // 查询护理员对应的详情资料
        await wx.request({
          url: api,
          data: {
            id: Yid
          },
          header: {
            "content-type": "application/json" // 默认值
          },
          success: function (res) {
            if (res) {
              console.log("detail", res.data);
              that.data = res.data;
              // 遍历星星评分 String --> Number
              that.data.xgA = Number(res.data.xgA);
              that.data.xgB = Number(res.data.xgB);
              that.data.xgC = Number(res.data.xgC);
              that.data.xgD = Number(res.data.xgD);
              that.data.xgE = Number(res.data.xgE);
              that.data.xgF = Number(res.data.xgF);
              that.data.xgG = Number(res.data.xgG);
              that.data.xgH = Number(res.data.xgH);
            }

            that.getBirthday(); // 从身份证中提取年月日并拼接成生日
          }
        });
      },
      // 从月嫂身份证中提取生日日期，在 created() 后, 被 requestPersonalDetail() 调用
      getBirthday() {
        this.birthday = this.data.idcard.slice(8, 14);
        // console.log(this.birthday);
      }
    },
    onLoad: function (options) {
      console.log('接受传递过来的：', options);
      console.log('接受传递过来的type：', options.type);

      this.priceType = options.type;
      let Yid = options.id;
      this.Yid = options.id;
      this.requestPhotos(Yid);
      this.requestPersonalDetail(Yid);
      this.requestVideos(Yid)
    },
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
      console.log('Yid', this.Yid)
    }
  };
</script>

<style scoped lang="less">
  .Active {
    color: #ea5a43;
  }

  .header {
    position: relative;
    border-bottom: 6px solid #f1f2f6;
    /*头部上半部分*/
    .header_top {
      border-bottom: 1px dashed #dcd8cc;
      background-image: url("https://www.360myhl.com/meixinJF/MM/images/index/headerBGI.png");
      background-repeat: no-repeat;
      -webkit-background-size: 100% 152px;
      background-size: 100% 152px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding-top: 80px;
      .yuesao_head_img {
        width: 86px;
        height: 86px;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto;
        img {
          width: 107px;
          height: 100%;
          margin-left: -10px;
        }
      }
      .header-detail {
        text-align: center;
        padding-bottom: 7px;
        .yuesao_name {
          color: #f2673a;
          font-size: 15px;
          padding-top: 8px;
          span {
            color: #fff;
            background-color: #ff0000;
            padding: 1px;
            border-radius: 4px;
            font-size: 12px;
          }
        }
        .yuesao_salary {
          color: #ea5944;
          font-size: 14px;
          padding-top: 11px;
          span {
            font-size: 12px;
            color: #000;
            font-weight: 100;
          }
        }
        .yuesao_experience {
          color: #9d9d9d;
          font-size: 12px;
          padding-top: 5px;
          .experience_item {
            margin-right: 5px;
          }
        }
        .watch_detail {
          margin: 9px auto 0;
          padding: 0 5px;
          color: #f57247;
          border: 2px solid #ea5944;
          font-size: 12px;
          border-radius: 4px;
          width: 50px;
        }
      }
    }
    /*头部下半部分*/
    .header_bottom {
      height: 42px;
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      width: 85%;
      .header_bottom_item {
        display: flex;
        align-items: center;
        img {
          width: 18px;
          height: 18px;
          margin-right: 4px;
        }
        span {
          color: #841d1d;
          font-size: 12px;
        }
      }
    }
  }

  /*个人资料 & 技能*/
  .info {
    border-bottom: 6px solid #f1f2f6;
    .title {
      height: 27px;
      line-height: 27px;
      display: flex;
      align-items: center;
      padding-left: 13px;
      border-bottom: 1px solid #f1f2f6;
      font-size: 12px;
      img {
        width: 19px;
        height: 19px;
        margin-right: 5px;
      }
    }
    .info-detail {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      padding: 6px 23px 9px;
      ul {
        width: 140px;
      }
      ul:last-child {
        margin-right: -30px;
        li {
          color: #000;
          margin-bottom: 8px;
          overflow: hidden; /*溢出隐藏*/
          white-space: nowrap; /*文字不能转行*/
          text-overflow: ellipsis; /*隐藏的部分用...表示*/
        }
      }
    }
  }

  .personSkills {
    border-bottom: 6px solid #f1f2f6;
    .title {
      height: 27px;
      line-height: 27px;
      display: flex;
      align-items: center;
      padding-left: 13px;
      border-bottom: 1px solid #f1f2f6;
      font-size: 12px;
      img {
        width: 19px;
        height: 19px;
        margin-right: 5px;
      }
    }
    .info-detail {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      padding: 6px 23px 0;
      ul {
        width: 140px;
      }
      ul:last-child {
        margin-left: 25px;
        li {
          color: #000;
          margin-bottom: 8px;
          overflow: hidden; /*溢出隐藏*/
          white-space: nowrap; /*文字不能转行*/
          text-overflow: ellipsis; /*隐藏的部分用...表示*/
        }
      }
    }
  }

  /* 性格评价 */
  .character {
    border-bottom: 6px solid #f1f2f6;
    .title {
      height: 27px;
      line-height: 27px;
      display: flex;
      align-items: center;
      padding-left: 13px;
      border-bottom: 1px solid #f1f2f6;
      font-size: 12px;
      img {
        width: 19px;
        height: 19px;
        margin-right: 5px;
      }
    }
    .character-detail {
      display: flex;
      padding: 12px 24px 18px;
      justify-content: space-between;
      ul {
        width: 150px;
        li {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          margin-bottom: 8px;
          span {
            width: 60px;
            height: 23px;
            line-height: 23px;
            display: inline-block;
            font-size: 12px;
          }
          img {
            width: 10px;
            height: 10px;
          }
        }
      }
      .character-ul-right {
        li {
          span {
            width: 2.6666666667rem;
            text-align: right;
          }
        }
      }
    }
  }

  /* 咪嘛月嫂评价 */
  .response {
    border-bottom: 6px solid #f1f2f6;
    padding: 8px 12px;
    .title {
      font-size: 14px;
      color: #000;
      font-weight: 600;
      margin-bottom: 10px;
    }
    p {
      font-size: 12px;
      color: #000;
      line-height: 20px;
    }
  }

  /*工作照片*/
  .work-photo {
    border-bottom: 6px solid #f1f2f6;
    .title {
      height: 27px;
      line-height: 27px;
      display: flex;
      align-items: center;
      padding-left: 13px;
      font-size: 12px;
      img {
        width: 19px;
        height: 19px;
        margin-right: 5px;
      }
    }
    .photo-box {
      margin: 5px 12px 12px;
      overflow-x: scroll;
      .scroll-box {
        width: 20000px;
        .img-box {
          width: 85px;
          height: 89px;
          overflow: hidden;
          float: left;
          margin-right: 6px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  /*工作视频*/
  .work-video {
    .title {
      height: 27px;
      line-height: 27px;
      display: flex;
      align-items: center;
      padding-left: 13px;
      font-size: 12px;
      img {
        width: 19px;
        height: 14px;
        margin-right: 5px;
      }
    }
    .video-list {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      .item {
        width: 158px;
        height: 1114px;
        video {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  /*技能*/
  .skills {
    .skill_banner {
      border-top: 10px solid #f1f2f6;
      width: 100%;
      height: 120px;
      margin-bottom: 15px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .info_detail {
      display: flex;
      justify-content: space-around;
      font-size: 12px;
      ul {
        padding-bottom: 24px;
        li {
          font-size: 12px;
          img {
            width: 10px;
            height: 10px;
            vertical-align: middle;
            margin-right: 3px;
          }
        }
      }
    }
  }

  /*评分*/
  .yuesao-index .star_score {
    border-bottom: 20px solid #f1f2f6;
    height: 100px;
  }

  .yuesao-index .star_score .title {
    height: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: .5185185185rem;
    border-bottom: 10px solid #f1f2f6;
    font-size: 14px;
    border-bottom: 1px solid #f1f2f6;
  }

  .yuesao-index .star_score .title img {
    width: 19px;
    height: 17px;
    margin-right: 5px;
  }

  .yuesao-index .mark-detail-left {
    font-size: 60px;
    color: #eb604a;
    font-weight: 600;
    float: left;
    margin-left: 40px;
  }

  .yuesao-index .mark-detail-right {
    padding-top: 15px;
  }

  .yuesao-index .mark-detail-right .star-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    float: right;
    margin-right: 10px;
  }

  .yuesao-index .mark-detail-right .star-item .star-total {
    width: 100px;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .yuesao-index .mark-detail-right .star-item .star-total img {
    width: 10px;
    height: 10px;
  }

  .yuesao-index .mark-detail-right .star-item .line {
    width: 120px;
    height: 6px;
    margin-left: 3px;
    background: #f1f2f6;
  }

  .yuesao-index .mark-detail-right .star-item .line-inner {
    width: 80%;
    height: .1481481481rem;
    background: #fcc7bf;
  }

  /*护理员标签*/
  .yuesao-index .caregiver_label {
    border-bottom: 10px solid #f1f2f6;
    padding-bottom: 30px;
  }

  .yuesao-index .caregiver_label {
    border-bottom: 10px solid #f1f2f6;
  }

  .yuesao-index .caregiver_label .title {
    height: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: .5185185185rem;
    border-bottom: 10px solid #f1f2f6;
    font-size: 14px;
  }

  .yuesao-index .caregiver_label .title img {
    width: 19px;
    height: 17px;
    margin-right: 5px;
  }

  .yuesao-index .caregiver_label ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex: 0 0 25%;
    margin-bottom: .3703703704rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .yuesao-index .caregiver_label ul li div {
    padding: 4px 6px;
    border: 1px solid #eb604a;
    color: #eb604a;
    font-size: 10px;
    border-radius: 15px;
  }

  /* 收藏按钮 */
  .yuesao-index .footer {
    position: fixed;
    right: 0;
    top: 6%;
    img {
      width: 80px;
      height: 180px;
    }
    #collection {
      width: 60px;
      height: 60px;
      position: absolute;
      top: 18px;
      left: 8px;
      border-radius: 20px;
      z-index: 1;
    }
    #appointment {
      width: 60px;
      height: 60px;
      position: absolute;
      bottom: 25px;
      left: 8px;
      border-radius: 20px;
      z-index: 1;
    }
  }

  /* 留言 */
  .leaving_msg .title {
    height: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: .5185185185rem;
    border-bottom: 10px solid #f1f2f6;
    font-size: 14px;
  }

  .leaving_msg .title img {
    width: 19px;
    height: 18px;
    margin-right: 5px;
  }

  .topBox {
    display: flex;
    margin-left: 20px;
    margin-top: 20px;
  }

  .topBox .headImg {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
  }

  .topBox .headImg img {
    width: 100%;
    height: 100%;
  }

  .name_and_date {
    margin-top: 6px;
    margin-left: 15px;
  }

  .name_and_date p {
    font-size: 12px;
    font-weight: bold;
  }

  .name_and_date .line_two {
    font-weight: normal;
    color: #979797;
  }

  .botBox {
    font-size: 14px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 10px 10px 25px;
  }

</style>
