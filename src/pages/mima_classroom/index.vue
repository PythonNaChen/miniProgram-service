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
              <li @click="goArticle()" class="show-item">
                <div class="show-item-user">
                  <div class="awatar-box">
                    <img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">
                  </div>
                  <div class="awatar-right">
                    <p class="name">成都360母婴护理公司</p>
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
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo2.jpg">-->
                <!--</div>-->
                <!--</div>-->
                <p class="title">成都月嫂推荐：关于母乳喂养的小知识</p>
                <div class="talk-area">
                  <p>母乳对于宝宝，是天然、营养的食物，好处 甚多。</p>
                  <p>然而许多妈妈却是在分娩后才意识到要恶补...</p>
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
              <li @click="goArticle()" class="show-item">
                <div class="show-item-user">
                  <div class="awatar-box">
                    <img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">
                  </div>
                  <div class="awatar-right">
                    <p class="name">成都360母婴护理公司</p>
                    <p class="time">2016年07月07日</p>
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
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo2.jpg">-->
                <!--</div>-->
                <!--</div>-->
                <p class="title">孕前优生检查哪些情况要特别注意</p>
                <div class="talk-area">
                  <p>想要生出优质的宝宝，就不能忽视孕前检查的重要性，可以避免很多麻烦。</p>
                  <p>今天360母婴所介绍的内容...</p>
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
              <li @click="goArticle()" class="show-item">
                <div class="show-item-user">
                  <div class="awatar-box">
                    <img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">
                  </div>
                  <div class="awatar-right">
                    <p class="name">成都360母婴护理公司</p>
                    <p class="time">2018年08月23日</p>
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
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo2.jpg">-->
                <!--</div>-->
                <!--</div>-->
                <p class="title">咪嘛月嫂（360母婴）重庆公司9月即将开业</p>
                <div class="talk-area">
                  <p>咪嘛月嫂（360母婴）旗下重庆分公司将于2018年9月10日试营业。</p>
                  <p>公司位于重庆市江北区红旗河沟龙湖新壹街1号楼1314-1319...</p>
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
              <li @click="goArticle()" class="show-item">
                <div class="show-item-user">
                  <div class="awatar-box">
                    <img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">
                  </div>
                  <div class="awatar-right">
                    <p class="name">成都360母婴护理公司</p>
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
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo2.jpg">-->
                <!--</div>-->
                <!--</div>-->
                <p class="title">成都月嫂推荐：关于母乳喂养的小知识</p>
                <div class="talk-area">
                  <p>母乳对于宝宝，是天然、营养的食物，好处 甚多。</p>
                  <p>然而许多妈妈却是在分娩后才意识到要恶补...</p>
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
              <li @click="goArticle()" class="show-item">
                <div class="show-item-user">
                  <div class="awatar-box">
                    <img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">
                  </div>
                  <div class="awatar-right">
                    <p class="name">成都360母婴护理公司 </p>
                    <p class="time">2016年05月05日</p>
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
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo2.jpg">-->
                <!--</div>-->
                <!--</div>-->
                <p class="title">成都月嫂分享：奶瓶选择有讲究</p>
                <div class="talk-area">
                  <p>一、选择什么购买渠道？</p>
                  <p>1、正规的商场大超市会有婴儿...</p>
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
              <li @click="goArticle()" class="show-item">
                <div class="show-item-user">
                  <div class="awatar-box">
                    <img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">
                  </div>
                  <div class="awatar-right">
                    <p class="name">成都360母婴护理公司</p>
                    <p class="time">2016年05月15日</p>
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
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo2.jpg">-->
                <!--</div>-->
                <!--</div>-->
                <p class="title">母乳喂养小知识 乳汁是怎样产生</p>
                <div class="talk-area">
                  <p>今年的5月20日就是第26个“全国母乳喂养宣传日”了，</p>
                  <p>在多年的知识普及舆论宣传下，全国母乳喂养比例依然...</p>
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
              <li @click="goArticle()" class="show-item">
                <div class="show-item-user">
                  <div class="awatar-box">
                    <img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">
                  </div>
                  <div class="awatar-right">
                    <p class="name">成都360母婴护理公司</p>
                    <p class="time">2016年05月09日</p>
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
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo2.jpg">-->
                <!--</div>-->
                <!--</div>-->
                <p class="title">妈妈应该从成都特高级月嫂那里学些什么</p>
                <div class="talk-area">
                  <p>360母婴发现很多妈妈请了月嫂帮忙，</p>
                  <p>觉得自己付了钱就什么也不管，其实这种思维是有问题的...</p>
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
              <li @click="goArticle()" class="show-item">
                <div class="show-item-user">
                  <div class="awatar-box">
                    <img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">
                  </div>
                  <div class="awatar-right">
                    <p class="name">成都360母婴护理公司</p>
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
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo2.jpg">-->
                <!--</div>-->
                <!--</div>-->
                <p class="title">盲目补充营养反而导致胎儿发育不良</p>
                <div class="talk-area">
                  <p>360母婴发现很多准妈妈在知道自己怀孕之后，</p>
                  <p>就走上了一条补充营养的道路上...</p>
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
              <li @click="goArticle()" class="show-item">
                <div class="show-item-user">
                  <div class="awatar-box">
                    <img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">
                  </div>
                  <div class="awatar-right">
                    <p class="name">成都360母婴护理公司</p>
                    <p class="time">2016年07月07日</p>
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
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo2.jpg">-->
                <!--</div>-->
                <!--</div>-->
                <p class="title">孕前优生检查哪些情况要特别注意</p>
                <div class="talk-area">
                  <p>想要生出优质的宝宝，就不能忽视孕前检查的重要性，可以避免很多麻烦。</p>
                  <p>今天360母婴所介绍的内容...</p>
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
              <li @click="goArticle()" class="show-item">
                <div class="show-item-user">
                  <div class="awatar-box">
                    <img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">
                  </div>
                  <div class="awatar-right">
                    <p class="name">成都360母婴护理公司</p>
                    <p class="time">2016年08月25日</p>
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
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo2.jpg">-->
                <!--</div>-->
                <!--</div>-->
                <p class="title">成都金牌月嫂教你如何防止铅中毒</p>
                <div class="talk-area">
                  <p>铅中毒对孕妇有哪些危害？</p>
                  <p>血铅超标会对人体造成伤害，对孕妇这种危害就更大...</p>
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
              <li @click="goArticle()" class="show-item">
                <div class="show-item-user">
                  <div class="awatar-box">
                    <img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">
                  </div>
                  <div class="awatar-right">
                    <p class="name">成都360母婴护理公司</p>
                    <p class="time">2016年08月22日</p>
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
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo2.jpg">-->
                <!--</div>-->
                <!--</div>-->
                <p class="title">成都月嫂分享：怀孕后妈妈的身体变化和对策</p>
                <div class="talk-area">
                  <p>孕育生命是一件很神奇的事情，不仅体内有个小生命在悄悄的长大，</p>
                  <p>而准妈妈自身也会发生不少的变化...</p>
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
              <li @click="goArticle()" class="show-item">
                <div class="show-item-user">
                  <div class="awatar-box">
                    <img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">
                  </div>
                  <div class="awatar-right">
                    <p class="name">成都360母婴护理公司</p>
                    <p class="time">2018年09月15日</p>
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
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo2.jpg">-->
                <!--</div>-->
                <!--</div>-->
                <p class="title">育婴师调价通知</p>
                <div class="talk-area">
                  <p>非常感谢您在本公司平台选择育儿嫂服务，</p>
                  <p>近期咪嘛月嫂全面启动平台制转型我们对原有育婴师服务进行了全面的升级...</p>
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
              <li @click="goArticle()" class="show-item">
                <div class="show-item-user">
                  <div class="awatar-box">
                    <img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">
                  </div>
                  <div class="awatar-right">
                    <p class="name">成都360母婴护理公司</p>
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
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo2.jpg">-->
                <!--</div>-->
                <!--</div>-->
                <p class="title">咪嘛月嫂重庆店9月15日盛大开业，礼献全城！</p>
                <div class="talk-area">
                  <p>金秋时节，备受期待的咪嘛月嫂重庆店即将盛大开业。</p>
                  <p>咪嘛月嫂用四重惊喜优惠，献礼山城，为...</p>
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
              <li @click="goArticle()" class="show-item">
                <div class="show-item-user">
                  <div class="awatar-box">
                    <img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">
                  </div>
                  <div class="awatar-right">
                    <p class="name">成都360母婴护理公司</p>
                    <p class="time">2018年08月23日</p>
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
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo2.jpg">-->
                <!--</div>-->
                <!--</div>-->
                <p class="title">咪嘛月嫂（360母婴）重庆公司9月即将开业</p>
                <div class="talk-area">
                  <p>咪嘛月嫂（360母婴）旗下重庆分公司将于2018年9月10日试营业。</p>
                  <p>公司位于重庆市江北区红旗河沟龙湖新壹街1号楼1314-1319...</p>
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
              <li @click="goArticle()" class="show-item">
                <div class="show-item-user">
                  <div class="awatar-box">
                    <img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">
                  </div>
                  <div class="awatar-right">
                    <p class="name">成都360母婴护理公司</p>
                    <p class="time">2018年08月09日</p>
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
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">-->
                <!--</div>-->
                <!--<div class="img-box">-->
                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo2.jpg">-->
                <!--</div>-->
                <!--</div>-->
                <p class="title">邀友有礼 荐者有份——360母婴（咪嘛月嫂）8月促销活动开启</p>
                <div class="talk-area">
                  <p>360母婴（咪嘛月嫂）已深耕西南母婴护理家政市场6年多，用真心服务了众多产后家庭</p>
                  <p>用真心服务了众多产后家庭...</p>
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
      goArticle(){
        wx.navigateTo({url: "/pages/article/main"});
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
    border-bottom: 5px solid #f6f6f6;
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
    border-bottom: .237037037rem solid #f1f2f6;
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
    font-size: 14px;
    color: #353535;
    text-align: left;
    margin: 10px 0;
  }

  .show-item .talk-area {
    padding: 5px 0;
    border-left: 5px solid #ea5a43;
    font-size: 12px;
    color: #a7a7a7;
  }

  .show-item .talk-area p {
    padding-left: 10px;
    -ms-text-align-last: left;
    text-align-last: left;
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
