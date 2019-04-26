<template>
    <div>
      <div class="earnings">
        <p>未成功充值的好友</p>
        <span>1</span>
      </div>
      <div class="row" style="box-shadow: 2px 0px 2px #9d9d9d; border-bottom: 1px solid #f7f7f7;">
        <div class="col-50">
          <p style="text-align: left; font-size: 16px; color: #4d4d4d; padding-left:10px;">交易类型</p>
        </div>
        <div class="col-50">
          <p style="text-align: right; font-size: 16px; color: #4d4d4d; padding-right: 10px;">金额明细</p>
        </div>
      </div>
      <div>
        <van-cell class="sm"  title="15759086656" size="large" value="2018-12-17 09:48:13" center />
      </div>
    </div>
</template>

<script>
  export default {
    name: 'inviteFriends'
  }
</script>

<style scoped>
  .earnings{
    width: 100%;
    height: 100px;
    background-color: #FF7272;
    text-align: center;
    color: #ffffff;
  }
  .earnings p{
    font-size: 32rpx;
    opacity: 0.7;
    padding-top: 20px;
    margin-bottom: 8px;
  }
  .earnings span{
    font-size: 48rpx;
  }
  .row{
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 5px;
    width: 100%;
  }
  .col-50{
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 50%;
    -moz-box-flex: 0;
    -moz-flex: 0 0 50%;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
</style>
