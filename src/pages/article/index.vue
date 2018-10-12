<template>
  <div class="page">
    <!--标题-->
    <div class="show-item">
      <div class="show-item-user">
        <div class="awatar-box">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">
        </div>
        <div class="awatar-right">
          <p class="name">成都360母婴护理公司</p>
          <p class="time">2018年09月15日</p>
        </div>
      </div>
      <p class="title">为啥一到换季就病？脆弱的抵抗力正是“罪魁祸首”</p>
      <div class="article_content">
        <p>俗话说，七月流火，八月萑苇。炎热的夏季，室内室外处处都有热浪袭人，让人无处躲藏，宝宝们更易感到不适，以致于引发各种肌肤问题。</p>
        <p>
          作为妈妈，总想要给宝宝全方位的呵护，想要让宝宝一直拥有初生般柔嫩的肌肤，即便在炎热的夏季，也想和宝宝清爽无痱度夏日，和宝宝更亲密，零距离。只是，夏日宝宝肌肤问题多，如痱热、痱痒、痱红不适，肌肤黏腻……纷纷袭来，令初为人母的妈妈们无所适从，究竟该怎么做才能和宝宝一起度过清爽无痱夏日呢？</p>
        <p>研究表明，婴幼儿汗腺的神经调节要到2~3岁才能发育完备。所以婴儿汗腺的密度大于成人，出汗温度也高于成人，好动的宝宝极易因日常活动而大量出汗，导致毛孔堵塞形成热痱等肌肤问题。</p>
      </div>
      <div class="img-group">
        <div class="img-box">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/baby-awatar.jpg">
        </div>
        <div class="img-box">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo4.jpg">
        </div>
        <div class="img-box">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "article",
    methods:{
      //返回上一页
      goBack() {
        this.$router.go(-1);
      },
    }
  }
</script>

<style scoped lang="less">
  .page {
    p, a, span {
      font-weight: normal;
    }
    /*内容*/
    .show-item {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding: 14px 10px 0;
      .show-item-user {
        display: flex;
        .awatar-box {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 0.3rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .awatar-right {
          margin-left: 10px;
          .name {
            font-size: 14px;
            line-height: 24px;
            color: #353535;
          }
          .time {
            font-size: 12px;
            color: #a7a7a7;
          }
        }
      }
      /*图片区域*/
      .img-group {
        display: flex;
        flex-wrap: wrap;
        padding-top: 20px;
        .img-box {
          flex: 0 0 33.33%;
          display: flex;
          justify-content: center;
          margin-bottom: 2px;
          img {
            width: 109px;
            height: 95px;
            border-radius: 3px;
          }
        }
      }
      /* 文字部分 */
      .title {
        font-size: 14px;
        color: #353535;
        text-align: left;
        padding: 10px 0;
      }
      .article_content {
        p {
          text-indent: 23px;
          line-height: 23px;
          font-size: 12px;
          color: #7a7a7a;
        }
      }
    }
  }
</style>
