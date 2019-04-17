<template>
  <div>
    <div class="coupon">
      <div class="left">
        <div class="wire"></div>
        <div class="right">
          <div class="top row">
            <div class="col-50" style="text-align: center; color: rgb(239, 71, 58); line-height: 50px;">
              <span>¥</span>
              <span style="color: rgb(0,0,0); font-size: 30px; line-height: 70px">5</span>
            </div>
            <div class="col-50" style="padding: 10px;">
              <p>购物券</p>
              <span>满0可用</span>
            </div>
          </div>
          <div class="bottom">
            <span>截止至2020-01-01 00:00:00</span>
          </div>
        </div>
      </div>
      <div class="right grees">
        <div class="wavy-line"></div>
        <span>可使用</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'coupon'
  }
</script>

<style scoped>
 .coupon{
   width: 95%;
   height: 120px;
   margin: 0 auto;
   display: flex;
   border-radius: 5px;
   box-shadow: 0px 2px 2px #4d4d4d;
   overflow: hidden;
   margin-top: 10px;
}
 .coupon .left {
   width: 75%;
   height: 120px;
   display: flex;
 }
 .coupon .right{
   flex: 2;
 }
 .coupon .left>div.wire{
   width: 1%;
   height: 120px;
   background: rgb(50, 219, 100);
 }
 .coupon .top {
   width: 100%;
   height: 90px;
 }
 .coupon .top p,.coupon .top span{
   font-size: 28rpx;
 }
 .coupon .bottom {
   width: 100%;
   height: 30px;
   padding-left: 20px;
   padding-bottom: 10px;
   font-size: 28rpx;
 }
 .coupon .grees{
   background: rgb(50, 219, 100);
   position: relative;
   text-align: center;
 }
 .wavy-line{
   position: absolute;
   top: 0%;
   width: 4px;
   height: 100%;
   background-image: radial-gradient(circle,transparent,transparent 4px,#fff 4px,#fff);
   background-size: 10px 11px;
 }
 .coupon .grees span{
   display: inline-block;
   width: 20px;
   height: 120px;
   font-size: 20px;
   color: white;
   line-height: 40px;
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
