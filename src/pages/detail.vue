<template>
    <div style="position: relative;">
      <div class="swipers">
        <swiper autoplay="true" interval="3000" style="height: 100%;">
          <swiper-item v-for="(imgs,index) in imgUrls" :key="index" style="height: 100%;">
            <img :src="imgs" alt="" class="img" mode="widthFix">
          </swiper-item>
        </swiper>
      </div>
      <div class="contact">
        <van-row>
          <van-col span="16">
            <div class="description">
              <p style="margin-bottom: 10px;">绿树果黄金蜜哈密瓜新鲜水果缅甸密瓜包邮黄金蜜瓜黄河甜瓜哈蜜瓜</p>
              <p class="price">¥45.00</p>
              <p class="esse">快递费:订单不满20元,收运费5元</p>
            </div>
          </van-col>
          <van-col span="8">
            <div class="service">
              <img class="imgs" src="http://i1.yunmayi.com/upload/2016/07/22/cfbbd26e949d32c85abf5c8b80ff4a0f.png" mode="widthFix">
              <p>0571-86908200</p>
            </div>
          </van-col>
        </van-row>
      </div>
      <div class="product_detail">
        <p>商品详情</p>
        <img class="img" v-for="(imgs,index) in imgUrls" :key="index" :src="imgs" alt="" mode="widthFix">
        <div class="zero"></div>
      </div>
      <div class="cook">
        <van-goods-action safe-area-inset-bottom="false">
          <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
          <van-goods-action-icon icon="cart-o" text="购物车" @click="Cart" :info="cur.length"/>
          <van-goods-action-button text="加入购物车" type="warning" @click="onClickButton({id: 1, name: '绿树果黄金蜜哈密瓜新鲜水果缅甸密瓜包邮黄金蜜瓜黄河甜瓜哈蜜瓜',imgUrl: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640', price: 45.00})"/>
          <van-goods-action-button text="立即购买" @click="buy" />
        </van-goods-action>
      </div>
      <van-notify id="van-notify"/>
    </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  export default {
    name: 'detail',
    data () {
      return {
        imgUrls: [
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
          'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
        ]
      }
    },
    methods: {
      Cart () {
        this.$router.push('/pages/cart')
      },
      ...mapActions(['onClickButton'])
    },
    computed: {
      ...mapState(['cur'])
    }
  }
</script>

<style scoped>
  .swipers{
    width: 100%;
    height: 300px;
  }
  .img{
    width: 100%;
  }
  .imgs{
    width: 30px;
    margin-bottom: 10px;
  }
  .contact{
    border-bottom: 3px solid #f7f7f7;
  }
  .description{
    padding: 10px;
    border-right: 1px solid #f7f7f7;
  }
  .description p{
    font-size: 32rpx;
  }
  .description p.price{
    font-size: 40rpx;
    color: red;
  }
  .description p.esse{
    font-size: 26rpx;
    color: gray;
  }
  .service{
    text-align: center;
    font-size: 26rpx;
    color: red;
    padding-top: 20%;
  }
  .product_detail>p{
    text-align: center;
    padding: 10px 0;
    font-size: 30rpx;
    color: gray;
  }
  .zero{
    height: 50px;
  }
  .cook{
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: 26rpx;
    padding: 0;
  }
  .van-goods-action--safe{
    padding: 0;
  }
</style>
