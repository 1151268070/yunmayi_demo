<template>
    <div>
      <div class="headline">
        <img class="img" src="http://i8.yunmayi.com/upload/2019/04/17/fe1fb93fdf3dcd41103b68253158bc74.png" alt="" mode="widthFix">
      </div>
      <div style="background: white;">
        <van-row class="headTitle">
          <van-col span="8">
            <van-icon name="http://i8.yunmayi.com/upload/2019/04/17/4025ba04faec7fb728dcfdade076d555.png" size="50rpx;"/>
            <span>100%正品</span>
          </van-col>
          <van-col span="8">
            <van-icon name="http://i8.yunmayi.com/upload/2019/04/17/a2a8926efbf68932e9f918b18700c04e.png" size="50rpx;"/>
            <span>全场低价</span>
          </van-col>
          <van-col span="8">
            <van-icon name="http://i8.yunmayi.com/upload/2019/04/17/654932e7b1b56e9761ac18db2ee062fb.png" size="50rpx;"/>
            <span>全场包邮</span>
          </van-col>
        </van-row>
      </div>
      <div class="headCard">
        <van-card class="product_card"
          title="CH海飞丝柔润滋养型去屑护发素400ml"
          thumb="http://i8.yunmayi.com/upload/2017/11/04/4dbf59d91d015c8b2772cbad87ac41f4.jpgXXXXX!!!!!_400x400.jpg"
          price="34.90"
          origin-price="46.90"
        >
          <view slot="tags">
            <van-tag type="danger">金主特价</van-tag>
            <van-tag type="danger">限购一件</van-tag>
          </view>
        </van-card>
      </div>
      <div class="headCard">
        <van-card class="product_card"
                  title="CH海飞丝柔润滋养型去屑护发素400ml"
                  thumb="http://i8.yunmayi.com/upload/2017/11/04/4dbf59d91d015c8b2772cbad87ac41f4.jpgXXXXX!!!!!_400x400.jpg"
                  price="34.90"
                  origin-price="46.90"
        >
          <view slot="tags">
            <van-tag type="danger">金主特价</van-tag>
            <van-tag type="danger">限购一件</van-tag>
          </view>
        </van-card>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'preference'
  }
</script>

<style scoped>
  .headline{
    width: 100%;
  }
  .img{
    width: 100%;
  }
  .headTitle{
   text-align: center;
    height: 50px;
   margin-top: 10px;
    margin-bottom: 10px;
    background: white;
  }
  .headTitle span{
    font-size: 28rpx;
    line-height: 30px;
    padding-left: 10px;
  }
  .headCard{
    width: 100%;
    margin-bottom: 10px;
    background: white;
  }
  .headCard .title-class{
    font-size: 30px;
  }
</style>
