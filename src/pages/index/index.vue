<template>
  <div>
    <div class="message">
      <div class="imgs">
        <img src="../../../static/images/dd.png" alt="">
      </div>
      <div class="texts">
        <p>杭州格燃食品有限公司</p>
        <p class="phone">电话：18265656798</p>
        <p class="address">地址：浙江省杭州市西湖区文三路188号</p>
      </div>
    </div>
    <div class="notice">
      <img src="../../../static/images/icon_infrom@2x.png" alt="">
      <span>劳动节特惠，全场7折，数量有限，先到先得</span>
    </div>
    <div class="scan">
      <input type="text" placeholder="搜索商品" v-model.lazy="texts">
      <img class="icons" src="../../../static/images/common_icon_search@2x.png" alt="" @click="add">
      <div class="scans" @click= "sys">
        <img src="../../../static/images/common_icon_scan@2x.png" alt="">
        <p>扫一扫</p>
      </div>
    </div>
    <div class="product">
      <ul class="cate">
        <li v-for="(data,index) of datas" :data-id="data.id" :key="index" @click="pid(data.id)">{{data.name}}</li>
      </ul>
      <ul class="product_word">
        <li v-for="(list, index) of lists" :key='index'>
          <div class="description">
            <div>
              <img :src="list.urlImg" alt="">
            </div>
            <div class="news">
              <p>{{list.name}}</p>
              <div class="price">
                <p>¥{{list.price}}/{{list.kid}}</p>
                <img src="../../../static/images/icon_arrow_down@2x.png" alt="">
              </div>
            </div>
          </div>
          <Addit></Addit>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Addit from '@/components/addit'
let Fly = require('flyio/dist/npm/wx')
let fly = new Fly()
export default {
  data () {
    return {
      texts: '',
      datas: null,
      lists: null
    }
  },
  components: {
    Addit
  },
  methods: {
    add () {
      console.log(1111)
      console.log(this.texts)
    },
    sys () {
      wx.scanCode({
        success (res) {
          console.log(res)
        }
      })
    },
    pid (index) {
      console.log('id是：' + index)
      fly.post('https://easy-mock.com/mock/5c9edbfc8aaa6f3254a8831a/yunmayi/getGoodsListByCid', {
        id: index,
        page: 1,
        pageSize: 5
      })
        .then((res) => {
          console.log(res)
          this.lists = res.data.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    init () {
      fly.get('https://easy-mock.com/mock/5c9edbfc8aaa6f3254a8831a/yunmayi/getTopCat')
        .then((res) => {
          console.log(res)
          this.datas = res.data.data
          console.log(this.datas)
        })
        .catch((err) => {
          console.log(err)
        })
      fly.post('https://easy-mock.com/mock/5c9edbfc8aaa6f3254a8831a/yunmayi/getGoodsListByCid', {
        id: 1,
        page: 1,
        pageSize: 5
      })
        .then((res) => {
          console.log(res)
          this.lists = res.data.data
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },

  mounted () {
    this.init()
  }

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
    margin-bottom: 20px;
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
    top: 20%;
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
  .product{
    width: 100%;
    display: flex;
    margin-top: 10px;
  }
  .product ul.cate{
    width: 33%;
    background-color: #F5F5F5;
  }
  .product ul.cate li{
    width: 100%;
    height: 100rpx;
    text-align: center;
    line-height: 100rpx;
    font-size: 28rpx;
  }
  .product ul.product_word{
    flex: 1;
  }
  .product ul.product_word li{
    width: 100%;
    padding: 15px;
    margin-bottom: 25px;
  }
  .product ul.product_word .description{
    width: 100%;
    display: flex;
  }
  .product_word .description img{
    width: 120rpx;
    height: 120rpx;
    background-size: 100%;
  }
  .product_word .description .news{
    flex: 1;
    padding: 0px 10px;
    font-size: 28rpx;
  }
  .product_word .description .news .price{
    width: 100%;
    display: flex;
    margin-top: 10px;
  }
  .product_word .description .news .price p{
    font-size: 28rpx;
    color: #E62D2D;
  }
  .product_word .description .news .price img{
    width: 32rpx;
    height: 18rpx;
    background-size: 100%;
    padding-top: 10rpx;
    padding-left: 10rpx;
  }
  /**.product_word .cart_option{
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .product_word .cart_option .operate a{
    float: left;
    width: 60rpx;
    height: 60rpx;
    border: 1px solid #cccccc;
    font-size: 18px;
    text-align: center;
    line-height: 60rpx;

  }
  .product_word .cart_option .operate p{
    float: left;
    width: 88rpx;
    height: 60rpx;
    text-align: center;
    border-top: 1px solid #CCCCCC;
    border-bottom: 1px solid #CCCCCC;
    line-height: 60rpx;
    font-size: 28rpx;
  }
  .product_word .cart_option .joins a{
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
  }**/
</style>
