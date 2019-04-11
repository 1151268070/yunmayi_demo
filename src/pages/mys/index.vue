<template>
    <div style="background: #f7f7f7; height: 100%;">
      <div class="my_header">
        <img src="/static/images/images_logo_small@3x.png" alt="">
        <p>立刻登录</p>
      </div>
      <div class="condition">
        <div class="indent">
          <!--<img class="icon_s" src="/static/images/icon_me_order@2x.png" alt="">-->
          <span>我的订单</span>
          <!--<img class="icon_a" src="/static/images/icon_arrow_right@2x.png" alt="">-->
        </div>
        <div class="site">
          <span>我的收货地址</span>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'index',
    config: {
      'navigationBarTitleText': '我的'
    }
  }
</script>

<style scoped>
  .my_header{
    width: 100%;
    height: 350rpx;
    background: #fff;
    text-align: center;
  }
  .my_header img{
    width: 140rpx;
    height: 140rpx;
    background-size: 100%;
    margin-top: 50rpx;
  }
  .my_header p{
    color: #1f1f1f;
    font-size: 36rpx;
    margin-top: 10px;
  }
  .condition{
    margin-top: 10px;
    width: 100%;
    height: 126rpx;
    background: #fff;
  }
  .condition>div{
    width: 100%;
    height: 60rpx;
    padding: 10px;
    display: flex;
    line-height: 32px;
    border-bottom: 1px solid #F7F7F7;
  }
  .indent .icon_s{
    width: 34rpx;
    height: 38rpx;
    background-size: 100%;
  }
  .indent span{
    font-size: 32rpx;
  }
  .indent .icon_a{
    width: 27rpx;
    height: 51rpx;
    background-size: 100%;
  }
</style>
