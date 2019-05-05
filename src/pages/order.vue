<template>
  <div>
    <van-tabs :active="active">
      <van-tab title="全部">
        <div class="list">
          <div class="item">
            <div class="top">
              <span class="shop-name">订单编号:  550023543</span>
              <van-icon name="arrow" color="#D4CECE" size="12px" style="float: right"/>
            </div>
            <div class="content">
              <van-row>
                <van-col span="6" class="overall">
                  <img src="http://i8.yunmayi.com/upload/2019/02/28/e52cb54dc307492a90f5bf2f41d4c16e.jpegXXXXX!!!!!_50x50.jpg" class="imgs" mode="scaleToFill">
                </van-col>
                <van-col span="12" class="overall">
                  <p class="intensive">测试供应商商品</p>
                  <p class="timer">2019-03-04 10:33:57</p>
                </van-col>
                <van-col span="6" class="overall">
                  <p class="order-totalPrice">¥ 90.00</p>
                  <p class="order-status"><span>未付款</span></p>
                </van-col>
              </van-row>
            </div>
            <div class="bottom">
              <van-button plain size="small" class="b_button">确认付款</van-button>
              <van-button plain size="small" class="b_button">关闭订单</van-button>
            </div>
          </div>
          <div class="item">
            <div class="top">
              <span class="shop-name">订单编号:  550023543</span>
              <van-icon name="arrow" color="#D4CECE" size="12px" style="float: right"/>
            </div>
            <div class="content">
              <van-row>
                <van-col span="6" class="overall">
                  <img src="http://i8.yunmayi.com/upload/2019/02/28/e52cb54dc307492a90f5bf2f41d4c16e.jpegXXXXX!!!!!_50x50.jpg" class="imgs" mode="scaleToFill">
                </van-col>
                <van-col span="12" class="overall">
                  <p class="intensive">测试供应商商品</p>
                  <p class="timer">2019-03-04 10:33:57</p>
                </van-col>
                <van-col span="6" class="overall">
                  <p class="order-totalPrice">¥ 90.00</p>
                  <p class="order-status"><span>未付款</span></p>
                </van-col>
              </van-row>
            </div>
            <div class="bottom">
              <van-button plain size="small" class="b_button">确认付款</van-button>
              <van-button plain size="small" class="b_button">关闭订单</van-button>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待付款">
        <div class="list">
          <div class="item">
            <div class="top">
              <span class="shop-name">订单编号:  550023543</span>
              <van-icon name="arrow" color="#D4CECE" size="12px" style="float: right"/>
            </div>
            <div class="content">
              <van-row>
                <van-col span="6" class="overall">
                  <img src="http://i8.yunmayi.com/upload/2019/02/28/e52cb54dc307492a90f5bf2f41d4c16e.jpegXXXXX!!!!!_50x50.jpg" class="imgs" mode="scaleToFill">
                </van-col>
                <van-col span="12" class="overall">
                  <p class="intensive">测试供应商商品</p>
                  <p class="timer">2019-03-04 10:33:57</p>
                </van-col>
                <van-col span="6" class="overall">
                  <p class="order-totalPrice">¥ 90.00</p>
                  <p class="order-status"><span>未付款</span></p>
                </van-col>
              </van-row>
            </div>
            <div class="bottom">
              <van-button plain size="small" class="b_button">确认付款</van-button>
              <van-button plain size="small" class="b_button">关闭订单</van-button>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待收货">
        <div class="list">
          <div class="item">
            <div class="top">
              <span class="shop-name">订单编号:  550023543</span>
              <van-icon name="arrow" color="#D4CECE" size="12px" style="float: right"/>
            </div>
            <div class="content">
              <van-row>
                <van-col span="6" class="overall">
                  <img src="http://i8.yunmayi.com/upload/2019/02/28/e52cb54dc307492a90f5bf2f41d4c16e.jpegXXXXX!!!!!_50x50.jpg" class="imgs" mode="scaleToFill">
                </van-col>
                <van-col span="12" class="overall">
                  <p class="intensive">测试供应商商品</p>
                  <p class="timer">2019-03-04 10:33:57</p>
                </van-col>
                <van-col span="6" class="overall">
                  <p class="order-totalPrice">¥ 90.00</p>
                  <p class="order-status"><span>未付款</span></p>
                </van-col>
              </van-row>
            </div>
            <div class="bottom">
              <van-button plain size="small" class="b_button">确认付款</van-button>
              <van-button plain size="small" class="b_button">关闭订单</van-button>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="已完成">
        <div class="list">
          <div class="item">
            <div class="top" @click="jump">
              <span class="shop-name">订单编号:  550023543</span>
              <van-icon name="arrow" color="#D4CECE" size="12px" style="float: right"/>
            </div>
            <div class="content">
              <van-row>
                <van-col span="6" class="overall">
                  <img src="http://i8.yunmayi.com/upload/2019/02/28/e52cb54dc307492a90f5bf2f41d4c16e.jpegXXXXX!!!!!_50x50.jpg" class="imgs" mode="scaleToFill">
                </van-col>
                <van-col span="12" class="overall">
                  <p class="intensive">测试供应商商品</p>
                  <p class="timer">2019-03-04 10:33:57</p>
                </van-col>
                <van-col span="6" class="overall">
                  <p class="order-totalPrice">¥ 90.00</p>
                  <p class="order-status"><span>未付款</span></p>
                </van-col>
              </van-row>
            </div>
            <div class="bottom">
              <van-button plain size="small" class="b_button">确认付款</van-button>
              <van-button plain size="small" class="b_button">关闭订单</van-button>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        active: 0
      }
    },
    methods: {
      jump () {
        this.$router.push('/pages/order/detail')
      }
    }
  }
</script>

<style scoped>
.list{
  margin: 0px auto;
}
.item{
  margin-bottom: 10px;
  padding: 0 8px;
  font-size: 12px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  position: relative;
  z-index: 2;
  display: block;
}
.item .top{
  overflow: hidden;
  border-bottom: 1px solid #eeeeee;
  padding: 3px 0;
  line-height: 28px;
}
.item .top .shop-name{
  font-size: 12px;
  color: #111111;
}
.item .content{
  overflow: hidden;
  padding: 12px 0;
  border-bottom: 1px solid #eeeeee;
}
.item .content .overall{
  height: 60px;
}
.content .intensive{
  font-size: 12px;
  color: #111111;
  font-weight: bold;
  margin: 6px 0 10px 0;
}
.content .timer{
  color: #666;
  font-size: 14px;
  margin-bottom: 2px;
}
.content .order-totalPrice{
  font-weight: bold;
  font-size: 16px;
  text-align: right;
  margin-bottom: 10px;
  padding-right: 10px;
}
.content .order-status{
  color: #908F8F;
  text-align: right;
  padding-right: 10px;
}
.item .bottom{
  overflow: hidden;
  padding: 6px 0;
  line-height: 30px;
}
.bottom .b_button{
  float: right;
  margin-left: 5px;
}
.imgs{
  width: 60px;
  height: 60px;
}
</style>
