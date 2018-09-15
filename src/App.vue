<script>
  export default {
    created() {
      // 调用API从本地缓存中获取数据
      const logs = wx.getStorageSync("logs") || [];
      logs.unshift(Date.now());
      wx.setStorageSync("logs", logs);

      console.log("app created and cache logs by setStorageSync");
    }
  };
</script>

<style>
    .container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 200 rpx 0;
        box-sizing: border-box;
        font-weight: 800;
    }

    /* this rule will be remove */
    * {
        font-weight: 800;
        transition: width 2s;
        -moz-transition: width 2s;
        -webkit-transition: width 2s;
        -o-transition: width 2s;
    }
    /* 日历 样式*/
    .week {
        color: #ea5a43;
    }
    .calendar-tools {
        box-shadow: unset !important;
    }
    /*!* 所有周一 到 周五的样式*!*/
    .calendar ._td ._span {
        background-color: #fff;
        border: 1px solid #ea5a43;
        color: #585858;
    }
    /* 所有 周六日 的样式*/
    .calendar ._td ._span.red {
    }
    /*!* 选中日期（周一 ~ 周五） *!*/
    /*.calendar ._td.selected ._span {*/
        /*background-color: #ffffff !important;*/
        /*color: #585858 !important;*/
        /*border: 1px solid #585858;*/
    /*}*/
    /*!* 选中的 周六日*!*/
    /*.calendar ._td:not(.disabled) ._span.red {*/
        /*background-color: #ffffff;*/
        /*color: #585858 !important;*/
        /*border: 1px solid #585858;*/
    /*}*/
    /* 未选择日期的周六日 */
    .calendar ._td:not(.selected) ._span.red {
        color: #585858 ;
        border: 1px solid #ea5a43;
    }
    /* 被禁止点击的日期 上下月 */
    .calendar ._td.disabled ._span {
        color: #ccc !important;
        background-color: #fff !important;
        border: unset !important;
    }
    .calendar ._td.selected ._span.red{
        background-color: unset !important;
        color: #ea6151 !important;
    }
    /* 休息 */
    .rest span{
        background-color: #fff !important;
        color: #585858 !important;
        border: 1px solid #ea5a43 !important;
    }
    /* 可预约 */
    .reservable span{
        color: #585858 !important;
        border: 1px solid #ccc !important;
        background-color: #fff !important;
    }
    /* 已安排 */
    .arranged span{
        background-color: #ea5a43 !important;
        color: #fff !important;
    }
</style>
