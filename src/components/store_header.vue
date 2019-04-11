<template>
  <div style="background: #fff;">
    <div class="message">
      <div class="imgs">
        <img src="../../static/images/dd.png" alt="">
      </div>
      <div class="texts">
        <p>杭州格燃食品有限公司</p>
        <p class="phone">电话：18265656798</p>
        <p class="address">地址：浙江省杭州市西湖区文三路188号</p>
      </div>
    </div>
    <div class="notice">
      <img src="../../static/images/icon_infrom@2x.png" alt="">
      <span>劳动节特惠，全场7折，数量有限，先到先得</span>
    </div>
    <div class="scan">
      <input type="text" placeholder="搜索商品" v-model.lazy="texts">
      <img class="icons" src="../../static/images/common_icon_search@2x.png" alt="" @click="add">
      <div class="scans" @click= "sys">
        <img src="../../static/images/common_icon_scan@2x.png" alt="">
        <p>扫一扫</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'store_header'
  }
</script>

<style scoped>
  .message{
    display: flex;
    width: 100%;
    height: 203rpx;
  }
  .message .imgs{
    width: 25%;
    height: 100px;
  }
  .message .imgs img{
    width: 160rpx;
    height: 160rpx;
    background-size: 100%;
    margin-left: 20px;
  }
  .message .texts{
    flex: 1;
  }
  .texts p{
    padding-left: 30px;
    font-size: 18px;
    margin-bottom: 10px;
    color: #1F1F1F;
  }
  .texts p.phone, .texts p.address{
    font-size: 14px;
    color: #888888
  }
  .notice{
    padding-left: 20px;
    padding-bottom: 10px;
  }
  .notice img{
    width: 36rpx;
    height: 38rpx;
    background-size: 100%;
  }
  .notice span{
    font-size: 14px;
    color: #E62D2D;
    padding-left: 10px;
  }
  .scan{
    padding-left: 20px;
    position: relative;
    padding-bottom: 20px;
  }
  .scan input{
    width: 500rpx;
    height: 70rpx;
    background: #F5F5F5;
    padding-left: 40px;
    font-size: 16px;
  }
  .scan .icons{
    width: 42rpx;
    height: 42rpx;
    background-size: 100%;
    position: absolute;
    top: 15%;
    left: 8%;
  }
  .scan .scans{
    width: 72rpx;
    height: 70rpx;
    position: absolute;
    right: 4%;
    top: 0;
    text-align: center;
  }
  .scan .scans img{
    width: 42rpx;
    height: 42rpx;
  }
  .scan .scans p{
    font-size: 20rpx;
    color: #888888;
  }
</style>
