<template>
  <div class="zero">
    <img src="/static/images/images_cart_null@2x.png" alt="">
    <span>您的购物车空空的</span>
  </div>
</template>

<script>
  export default {
    name: 'index'
  }
</script>

<style scoped>
  .zero{
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .zero img{
    width: 340rpx;
    height: 340rpx;
    background-size: 100%;
    position: absolute;
    top: 40%;
    left: 50%;
    margin-left: -170rpx;
    margin-top: -170rpx;
  }
  .zero span{
    font-size: 32rpx;
    color: #888888;
    position: absolute;
    top: 55%;
    left: 35%;
  }
</style>
