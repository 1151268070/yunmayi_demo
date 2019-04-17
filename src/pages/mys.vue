<template>
    <div>
      <div class="Avatar">
        <img v-if="!data_login" src="http://i1.yunmayi.com/upload/2016/07/22/4e0957371cf740a1f3403e6f1647ceef.png" >
        <img v-if="data_login" src="http://pifa.yunmayi.com/upload/2018/12/14/138c91a20ebae5938ef804c2b88a7bb8.png" >
        <p v-if="data_login">15279975523</p>
        <p v-if="!data_login" @click="login">立刻登录</p>
        <span class="accountManage"> 账户管理 ></span>
      </div>
      <div class="auth">
        <div class="left" @click="go(1)">
          <div class="print">
            <van-icon name="http://i8.yunmayi.com/upload/2018/12/13/27da1f545d0042aa9969abb92cc2058c.png" size="50px" />
          </div>
          <div class="editor">
            <h4>金主赚钱</h4>
            <p>分享商品赚赏金</p>
          </div>
        </div>
        <div class="right" @click="go(2)">
          <div class="print">
            <van-icon name="http://i8.yunmayi.com/upload/2018/12/13/96103843f3ab0880001a01716da1bb73.png" size="50px"/>
          </div>
          <div class="editor">
            <h4>金主特惠</h4>
            <p>买到就是赚到</p>
          </div>
        </div>
      </div>
      <van-row class="balance" @click="jump(1)">
        <van-col span="6">
          <van-icon name="http://i8.yunmayi.com/upload/2018/12/13/dffb84ad5877f5154037b4e859304d16.png" info="99.9" size="48rpx"/>
          <p>蚂蚁金币</p>
        </van-col>
        <van-col span="6" @click="jump(2)">
          <van-icon name="http://i8.yunmayi.com/upload/2018/12/14/c1bb4af61b12f06ee82dc11396d7d7a2.png" info="4" size="48rpx"/>
          <p>购物券</p>
        </van-col>
        <van-col span="6" @click="jump(3)">
          <van-icon name="http://i8.yunmayi.com/upload/2018/12/14/975b21f13a61964cf40a590a2ee24941.png" size="48rpx"/>
          <p>收货地址</p>
        </van-col>
      </van-row>
      <van-button v-if="data_login" class="quit" size="large" plain hairline type="danger">退出登录</van-button>
    </div>
</template>

<script>
  export default {
    name: 'index',
    config: {
      'navigationBarTitleText': '我的'
    },
    data () {
      return {
        data_login: false
      }
    },
    methods: {
      go (index) {
        if (index === 1) {
          this.$router.push('/pages/commission')
        } else if (index === 2) {
          this.$router.push('/pages/preference')
        }
      },
      jump (index) {
        if (index === 1) {
          this.$router.push('/pages/gold')
        } else if (index === 2) {
          this.$router.push('/pages/coupon')
        } else if (index === 3) {
          this.$router.push('/pages/site')
        }
      },
      login () {
        this.$router.push('/pages/login')
      }
    }
  }
</script>

<style scoped>
  .Avatar{
    width: 100%;
    height: 120px;
    background: linear-gradient( #F44B4B, #F55D4C);
    position: relative;
    margin-bottom: 10px;
  }
  .Avatar img{
    width: 120rpx;
    height: 120rpx;
    margin-left: -90rpx;
    left: 20%;
    position: absolute;
    top: 70rpx;
  }
  .Avatar p{
    font: 17px arial,sans-serif;
    color: white;
    padding-top: 80rpx;
    margin-left: 30%;
  }
  .Avatar .accountManage{
    position: absolute;
    display: inline-block;
    width: 200rpx;
    background: rgba(255,0,0 ,0.7);
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    top: 45px;
    right: -10px;
    line-height: 30px;
    text-align: center;
    color: white;
    font-size: 28rpx;
  }
  .auth{
    width: 95%;
    height: 80px;
    margin: 0 auto;
    margin-bottom: 15px;
  }
  .auth>div{
    width: 49%;
    height: 80px;
    background: #F7F7F7;
  }
  .auth .left{
    display: flex;
    float: left;
  }
  .auth .right{
    float: right;
    display: flex;
  }
  .auth .print{
    width: 50px;
    height: 50px;
    margin: 15px 0 0 5px;
  }
  .auth .editor{
    flex: 1;
  }
  .auth .editor h4{
    font-size: 32rpx;
    padding: 20px 0 4px 7%;
    color: #4d4d4d;
  }
  .auth .editor p{
    font-size: 24rpx;
    padding-left: 7%;
    color: #cccccc;
  }
  .balance{
    height: 60px;
    text-align: center;
  }
  .balance p{
    font-size: 28rpx;
  }
  .quit{
    width: 100%;
    position: absolute;
    bottom: 0;
  }
</style>
