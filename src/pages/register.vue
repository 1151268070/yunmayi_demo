<template>
  <div style="background-image: linear-gradient( #F7745A, #F76159 );">
    <div class="banner">
      <img class="img" src="http://i8.yunmayi.com/upload/2019/01/11/cf4e32e16cfb9ecd9c1b4dcc66351ce1.pngXXXXX!!!!!_700x700.jpg" alt="" mode="widthFix">
    </div>
    <div class="case">
      <div class="texts">
        <p>物美价廉，自买省钱，</p>
        <p>全员团购，惠礼无限。</p>
      </div>
      <div v-if="digit == '1'">
        <div class="top">
          <input type="text" placeholder="请输入你的手机号" maxlength="11"/>
        </div>
        <div class="bottom">
          <input type="text" placeholder="请输入验证码"/>
          <van-button class="send" type="primary">发送验证码</van-button>
        </div>
        <p class="enroll">注册</p>
      </div>
      <div v-if="digit == '2'">
        <i class="s_icon"></i>
        <p style="color: rgba(128,128,128,1); text-align: center">您已是我们的会员，赶快下载app体验吧</p>
        <a class="download" href="http://a.app.qq.com/o/simple.jsp?pkgname=com.yunmayi.android" target="_blank">立马下载app</a>
        <p class="text_link" ng-click="action.skip()">直接去微信商城购物<i>&#8250;&#8250;&#8250;</i></p>
      </div>
    </div>
    <div style="height:50px;"></div>
  </div>
</template>

<script>
  export default {
    name: 'register',
    data () {
      return {
        digit: 2
      }
    }
  }
</script>

<style scoped>
  .banner{
    width: 100%;
  }
  .img{
    width: 100%;
  }
  .case{
    width: 90%;
    height: 280px;
    margin: 0 auto;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
  }
  .case .texts{
    padding-top: 25px;
  }
  .case .texts p{
    margin-bottom: 5px;
    text-align: center;
    font-size: 16px;
    color: #4d4d4d;
  }
  .case .top,.case .bottom{
    margin: 15px auto;
    width: 90%;
    height: 40px;
  }
  .case input{
    height: 40px;
    padding-left: 15px;
    background: #F7F7F7;
    line-height: 40px;
    font-size: 14px;
  }
  .m-registers .case .top input{
    width: 100%;
  }
  .case .bottom input{
    width: 60%;
    float: left;
  }
  .case .bottom .send{
    text-align: center;
    line-height: 38px;
  }
  .case .bottom .sends{
    border: 1px solid rgb(175, 175, 175);
    color: rgb(175, 175, 175);
  }
  .case .enroll{
    width:90%;
    height: 40px;
    line-height: 40px;
    margin: 20px auto;
    background-image: linear-gradient(to right, #F44B4B, #F55D4C);
    border-radius: 5px;
    text-align: center;
    font-size: 18px;
    color: #fff;
  }
  .case .s_icon{
    display: block;
    width: 42px;
    height: 42px;
    background: url("http://i8.yunmayi.com/upload/2018/12/13/e8b6370f11232bd89e1b4c01db01a27f.png") no-repeat;
    margin: 20px auto;
  }
  .case .download{
    display: block;
    width: 90%;
    height: 40px;
    background: linear-gradient(to right, #F44B4B, #F55D4C);
    color: white;
    font-size: 18px;
    line-height: 40px;
    border-radius: 5px;
    margin: 15px auto;
    text-align: center;
  }
  .case .text_link{
    margin-top: 15px;
    text-align: center;
    letter-spacing: 2px;
    color: rgba(128,128,128,1);
  }
  .case .text_link i {
    color: #6b6bff;
    font-style: normal;
    position: relative;
    -webkit-animation: float 3s ease infinite;
    animation: float 3s ease infinite;
  }
  @keyframes float {
    0%, 100% {
      right: 0;
    }
    50% {
      right: -5%;
    }
  }
  @-webkit-keyframes float {
    0%, 100% {
      right: 0;
    }
    50% {
      right: -5%;
    }
  }
</style>
