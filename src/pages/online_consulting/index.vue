<template>
    <div>
        <button class="enterSession" open-type="contact" session-from="weapp">进入客服会话</button>
        <div class="call">拨打客服电话</div>
    </div>
</template>

<script>
  export default {
    name: "index"
  };
</script>

<style scoped>
    .enterSession {
        width: 60%;
        margin: 30px auto 0;
        color: #fff;
        text-align: center;
        font-size: 16px;
        border-radius: 7px;
        padding: 10px 0;
        background-color: #ea5a43;
    }

    .call {
        width: 60%;
        margin: 30px auto 0;
        color: #ffffff;
        text-align: center;
        font-size: 16px;
        border-radius: 7px;
        padding: 10px 0;
        background-color: green;
    }
</style>