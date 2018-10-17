<template>
  <div class="page" style="font-weight: 800;">
    <div class="page__bd">
      <div class="weui-tab">
        <div class="weui-navbar">
          <block v-for="(item,index) in tabs" :key="index">
            <div :id="index" :class="{'weui-bar__item_on':activeIndex == index}" class="weui-navbar__item"
                 @click="tabClick">
              <div class="weui-navbar__title">{{item}}</div>
            </div>
          </block>
          <div class="weui-navbar__slider" :class="navbarSliderClass"></div>
        </div>
        <div class="weui-tab__panel">
          <div class="weui-tab__content" :hidden="activeIndex != 0">
            <ul>
              <li @click="goArticle(1)" class="show-item">
                <div class="show-item-user">
                  <div class="awatar-box">
                    <img src="../../../static/images/muyingzhishi.png">
                  </div>
                  <div class="awatar-right">
                    <p class="title">成都月嫂推荐：关于母乳喂养的小知识</p>
                    <p class="time">2016年03月24日</p>
                  </div>
                </div>
                <!--<div class="img-group">-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/baby-awatar.jpg">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo4.jpg">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/normalHeadImg.png">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo2.jpg">-->
                <!--</div>-->
                <!--</div>-->
                <div class="talk-area">
                  <p>母乳对于宝宝，是天然、营养的食物，好处 甚多。然而许多妈妈却是在分娩后才意识到要恶补...</p>
                </div>
                <!--<div class="view-amount">-->
                <!--<div class="view-amount-item view-amount-left">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/talk.png">-->
                <!--<span>点击次数:625</span>-->
                <!--</div>-->
                <!--<div class="view-amount-item">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/view.png">-->
                <!--<span>1256阅读</span>-->
                <!--</div>-->
                <!--</div>-->
              </li>
              <li @click="goArticle(2)" class="show-item">
                <div class="show-item-user">
                  <div class="awatar-box">
                    <img src="../../../static/images/yunqifenxiang.png">
                  </div>
                  <div class="awatar-right">
                    <p class="title">盲目补充营养反而导致胎儿发育不良</p>
                    <p class="time">2016年08月12日</p>
                  </div>
                </div>
                <!--<div class="img-group">-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/baby-awatar.jpg">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo4.jpg">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/normalHeadImg.png">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo2.jpg">-->
                <!--</div>-->
                <!--</div>-->
                <div class="talk-area">
                  <p>360母婴发现很多准妈妈在知道自己怀孕之后，就走上了一条补充营养的道路上...</p>
                </div>
                <!--<div class="view-amount">-->
                <!--<div class="view-amount-item view-amount-left">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/talk.png">-->
                <!--<span>点击次数:625</span>-->
                <!--</div>-->
                <!--<div class="view-amount-item">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/view.png">-->
                <!--<span>1256阅读</span>-->
                <!--</div>-->
                <!--</div>-->
              </li>
              <li @click="goArticle(3)" class="show-item">
                <div class="show-item-user">
                  <div class="awatar-box">
                    <img src="../../../static/images/mimayuesao.png">
                  </div>
                  <div class="awatar-right">
                    <p class="title">咪嘛月嫂重庆店9月15日盛大开业，礼献全城！</p>
                    <p class="time">2018年09月12日</p>
                  </div>
                </div>
                <!--<div class="img-group">-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/baby-awatar.jpg">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo4.jpg">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/normalHeadImg.png">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo2.jpg">-->
                <!--</div>-->
                <!--</div>-->
                <div class="talk-area">
                  <p>金秋时节，备受期待的咪嘛月嫂重庆店即将盛大开业。咪嘛月嫂用四重惊喜优惠...</p>
                </div>
                <!--<div class="view-amount">-->
                <!--<div class="view-amount-item view-amount-left">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/talk.png">-->
                <!--<span>点击次数:625</span>-->
                <!--</div>-->
                <!--<div class="view-amount-item">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/view.png">-->
                <!--<span>1256阅读</span>-->
                <!--</div>-->
                <!--</div>-->
              </li>
            </ul>
          </div>
          <div class="weui-tab__content" :hidden="activeIndex != 1">
            <ul>
              <li @click="goArticle(1)" class="show-item">
                <div class="show-item-user">
                  <div class="awatar-box">
                    <img src="../../../static/images/muyingzhishi.png">
                  </div>
                  <div class="awatar-right">
                    <p class="title">成都月嫂推荐：关于母乳喂养的小知识</p>
                    <p class="time">2016年03月24日</p>
                  </div>
                </div>
                <!--<div class="img-group">-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/baby-awatar.jpg">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo4.jpg">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/normalHeadImg.png">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo2.jpg">-->
                <!--</div>-->
                <!--</div>-->
                <div class="talk-area">
                  <p>母乳对于宝宝，是天然、营养的食物，好处 甚多。然而许多妈妈却是在分娩后才意识到要恶补...</p>
                </div>
                <!--<div class="view-amount">-->
                <!--<div class="view-amount-item view-amount-left">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/talk.png">-->
                <!--<span>点击次数:625</span>-->
                <!--</div>-->
                <!--<div class="view-amount-item">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/view.png">-->
                <!--<span>1256阅读</span>-->
                <!--</div>-->
                <!--</div>-->
              </li>
            </ul>
          </div>
          <div class="weui-tab__content" :hidden="activeIndex != 2">
            <ul>
              <li @click="goArticle(2)" class="show-item">
                <div class="show-item-user">
                  <div class="awatar-box">
                    <img src="../../../static/images/yunqifenxiang.png">
                  </div>
                  <div class="awatar-right">
                    <p class="title">盲目补充营养反而导致胎儿发育不良</p>
                    <p class="time">2016年08月12日</p>
                  </div>
                </div>
                <!--<div class="img-group">-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/baby-awatar.jpg">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo4.jpg">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/normalHeadImg.png">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo2.jpg">-->
                <!--</div>-->
                <!--</div>-->
                <div class="talk-area">
                  <p>360母婴发现很多准妈妈在知道自己怀孕之后，就走上了一条补充营养的道路上...</p>
                </div>
                <!--<div class="view-amount">-->
                <!--<div class="view-amount-item view-amount-left">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/talk.png">-->
                <!--<span>点击次数:625</span>-->
                <!--</div>-->
                <!--<div class="view-amount-item">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/view.png">-->
                <!--<span>1256阅读</span>-->
                <!--</div>-->
                <!--</div>-->
              </li>
            </ul>
          </div>
          <div class="weui-tab__content" :hidden="activeIndex != 3">
            <ul>
              <li @click="goArticle(3)" class="show-item">
                <div class="show-item-user">
                  <div class="awatar-box">
                    <img src="../../../static/images/mimayuesao.png">
                  </div>
                  <div class="awatar-right">
                    <p class="title">咪嘛月嫂重庆店9月15日盛大开业，礼献全城！</p>
                    <p class="time">2018年09月12日</p>
                  </div>
                </div>
                <!--<div class="img-group">-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/baby-awatar.jpg">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo4.jpg">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/normalHeadImg.png">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo2.jpg">-->
                <!--</div>-->
                <!--</div>-->
                <div class="talk-area">
                  <p>金秋时节，备受期待的咪嘛月嫂重庆店即将盛大开业。咪嘛月嫂用四重惊喜优惠...</p>
                </div>
                <!--<div class="view-amount">-->
                <!--<div class="view-amount-item view-amount-left">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/talk.png">-->
                <!--<span>点击次数:625</span>-->
                <!--</div>-->
                <!--<div class="view-amount-item">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/view.png">-->
                <!--<span>1256阅读</span>-->
                <!--</div>-->
                <!--</div>-->
              </li>
            </ul>
          </div>
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
        tabs: ["推荐", "母婴知识", "孕期分享", "咪嘛新闻"],
        activeIndex: 0,
        fontSize: 30
      };
    },
    computed: {
      navbarSliderClass() {
        if (this.activeIndex == 0) {
          return "weui-navbar__slider_0";
        }
        if (this.activeIndex == 1) {
          return "weui-navbar__slider_1";
        }
        if (this.activeIndex == 2) {
          return "weui-navbar__slider_2";
        }
        if (this.activeIndex == 3) {
          return "weui-navbar__slider_3";
        }
      }
    },
    methods: {
      tabClick(e) {
        console.log(e);
        this.activeIndex = e.currentTarget.id;
      },
      goArticle(type) {
        wx.navigateTo({url: "/pages/article/main?type=" + type});
      }
    }
  };
</script>

<style scoped lang="less">
  p, a, span {
    font-weight: normal;
  }

  .page__bd {
    height: 100%;
  }

  .page__bd {
    padding-bottom: 0;
  }

  .weui-navbar {
    background-color: #fff;
    border-bottom: 3px solid #f6f6f6;
  }

  .weui-tab__content {
    text-align: center;
  }

  .weui-navbar__item {
    padding: 2px 0;
  }

  .weui-navbar__item.weui-bar__item_on {
    color: #000;
    font-weight: bold;
  }

  .weui-navbar__slider {
    background-color: #eb5b43;
  }

  /*灰色代码勿删*/
  .weui-navbar__slider_0 {
    left: 30px;
    transform: translateX(0);
    width: 34px;
  }

  .weui-navbar__slider_1 {
    left: 16px;
    transform: translateX(93px);
    width: 64px;
  }

  .weui-navbar__slider_2 {
    left: 16px;
    transform: translateX(186px);
    width: 64px;
  }

  .weui-navbar__slider_3 {
    left: 16px;
    transform: translateX(280px);
    width: 64px;
  }

  /*灰色代码勿删*/

  /* 内容一 */
  .show-item {
    padding: 0 20px 10px;
    border-bottom: .04rem solid #f1f2f6;
  }

  .show-item-user {
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    padding-top: 10px;
  }

  .show-item-user .awatar-box {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
    padding-bottom: 5px;
  }

  .show-item-user .awatar-box img {
    width: 100%;
    height: 100%;
  }

  .show-item-user .awatar-right {
    margin-left: 10px;
  }

  .show-item-user .awatar-right .name {
    font-size: 14px;
    color: #353535;
  }

  .show-item-user .awatar-right .time {
    font-size: 12px;
    color: #a7a7a7;
    text-align: left;
  }

  /*图片区域*/
  .show-item .img-group {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .show-item .img-group .img-box {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 33.33%;
    flex: 0 0 33.33%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-bottom: 2px;
  }

  .show-item .img-group .img-box img {
    width: 110px;
    height: 110px;
    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
    border-radius: 7px;
  }

  /* 文字部分 */
  .show-item .title {
    font-size: 16px;
    color: #353535;
    text-align: left;
    line-height: 25px;
    width: 260px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .show-item .talk-area {
    padding: 5px 0;
    border-left: 5px solid #ea5a43;
    font-size: 12px;
    color: #a7a7a7;
    margin-top: 10px;
  }

  .show-item .talk-area p {
    padding-left: 10px;
    -ms-text-align-last: left;
    text-align-last: left;
    font-size: 14px;
    text-indent: unset;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .show-item .view-amount {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }

  .show-item .view-amount img {
    width: 10px;
    height: 10px;
  }

  .show-item .view-amount-left {
    margin-right: 5px;
  }

  .show-item .view-amount-item span {
    font-size: 12px;
    color: #a7a7a7;
    margin-left: 2px;
  }

  li:last-child {
    border-bottom: none;
    padding-bottom: 0.5rem;
  }
</style>
