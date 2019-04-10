<template>
  <div class="cart_option">
    <div class="operate">
      <a @click="miuns">-</a>
      <p>{{num}}</p>
      <a @click="adds">+</a>
    </div>
    <div class="joins">
      <a>加入购物车</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'addit',
    data () {
      return {
        num: 1
      }
    },
    methods: {
      adds () {
        this.num++
      },
      miuns () {
        this.num--
        if (this.num < 1) {
          this.num = 1
        }
      }
    }
  }
</script>

<style scoped>
   .cart_option{
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    /**padding: 15px;**/
  }
   .cart_option .operate a{
    float: left;
    width: 60rpx;
    height: 60rpx;
    border: 1px solid #cccccc;
    font-size: 18px;
    text-align: center;
    line-height: 60rpx;

  }
  .cart_option .operate p{
    float: left;
    width: 88rpx;
    height: 60rpx;
    text-align: center;
    border-top: 1px solid #CCCCCC;
    border-bottom: 1px solid #CCCCCC;
    line-height: 60rpx;
    font-size: 28rpx;
  }
  .cart_option .joins a{
    float: left;
    width: 200rpx;
    height: 64rpx;
    background: #E62D2D;
    margin-left: 30rpx;
    line-height: 64rpx;
    border-radius: 5px;
    text-align: center;
    color: #ffffff;
    font-size: 28rpx;
  }
</style>
