<template>
    <div>
      <div class="item">
        <p>订单编号：<span>550023543</span></p>
        <p> 收 货 人 ：<span>测试</span></p>
        <p>联系方式：<span>15279975523</span></p>
        <p>收货地址：<span>杭州市拱墅区平安雅苑</span></p>
        <p>订单时间：<span>2019-03-04 10:33:47</span></p>
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
          <view slot="footer">
            <van-button type="primary" round size="mini" @click="logistics">查看物流</van-button>
          </view>
        </van-card>
      </div>
      <div class="item">
        <van-cell title="价格" value="¥90*1"/>
        <van-cell title="总价" value="¥ 90.00"/>
      </div>
      <div class="item not_border">
        <van-cell title="订单总金额" value="¥ 90.00"/>
        <van-cell title="支付方式" value="支付宝支付"/>
        <van-cell title="支付状况" value="未付款"/>
        <van-cell title="优惠券" value="¥ 0.00"/>
        <van-cell title="备注" value=" "/>
        <van-cell title="实付" value="¥ 90.00" class="text_color"/>
        <van-cell title="客服热线" value="0571-86908200"/>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'order-detail',
    data () {

    },
    methods: {
      logistics () {
        this.$router.push('/pages/logistics')
      }
    }
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
.item>h3{
  padding-left: 15px;
  font-size: 16px;
}
.item>p{
  padding-left: 15px;
  font-size: 14px;
}
.item>p>span{
  color: gray;
}
.not_border{
  border: 0;
}
.text_color{
  color: #ff0000;
}
</style>
