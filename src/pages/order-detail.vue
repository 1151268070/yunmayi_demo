<template>
    <div>
      <div class="item">
        <van-row>
          <van-col span="4" style="text-align: center;">
            <van-icon name="location-o" size="30px" color="#FA3603"/>
          </van-col>
          <van-col span="20" class="address">
            <p>测试 <span> 15279975523</span></p>
            <p>杭州市拱墅区平安雅苑</p>
          </van-col>
        </van-row>
      </div>
      <div class="item not_border">
        <van-card
          num="1"
          price="19.90"
          title="测试供应商商品"
          thumb="http://i8.yunmayi.com/upload/2019/02/28/e52cb54dc307492a90f5bf2f41d4c16e.jpegXXXXX!!!!!_160x160.jpg"
        >
          <view slot="tags">
            <p>颜色：白色</p>
            <p>尺码：xxr</p>
          </view>
        </van-card>
      </div>
      <div class="item">
        <van-row class="price">
          <van-col span="12">
            <p class="left">价格：</p>
          </van-col>
          <van-col span="12">
            <p class="right">¥ 90 * 1</p>
          </van-col>
          <van-col span="12">
            <p class="left">总价：</p>
          </van-col>
          <van-col span="12">
            <p class="right">¥ 90.00</p>
          </van-col>
        </van-row>
      </div>
      <div class="item">
        <p>订单编号：<span>550023543</span></p>
        <p> 收 货 人：<span>测试</span></p>
        <p>联系方式：<span>15279975523</span></p>
        <p>收货地址：<span>杭州市拱墅区平安雅苑</span></p>
        <p>订单时间：<span>2019-03-04 10:33:47</span></p>
      </div>
      <div class="item not_border">
        <van-row>
          <van-col span="8" style="margin-bottom: 10px;">
            <img src="http://i8.yunmayi.com/upload/2019/02/28/e52cb54dc307492a90f5bf2f41d4c16e.jpegXXXXX!!!!!_160x160.jpg" class="imgs" mode="scaleToFill">
          </van-col>
          <van-col span="16"></van-col>
        </van-row>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'order-detail'
  }
</script>

<style scoped>
.item{
  padding: 20px 0;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.item .address p{
  font-size: 14px;
}
.item .address p span{
  color: gray;
}
.item>p{
  padding-left: 10px;
  font-size: 14px;
}
.item>p>span{
  color: gray;
}
.price p{
  font-size: 14px;
  color: gray;
}
.price .left{
  padding-left: 10px;
}
.price .right{
  text-align: right;
  padding-right: 10px;
}
.not_border{
  border: 0;
}
.imgs{
  width: 88px;
  height: 88px;
}
</style>
