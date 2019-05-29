<template>
    <div style="position: relative;">
      <div class="swipers">
        <swiper autoplay="true" interval="3000" style="height: 100%;">
          <swiper-item v-for="(imgs,index) in data.images" :key="index" style="height: 100%;">
            <img :src="'http://i8.yunmayi.com' + imgs + 'XXXXX!!!!!_700x700.jpg'" alt="" class="img" mode="widthFix">
          </swiper-item>
        </swiper>
      </div>
      <div class="contact">
        <van-row>
          <van-col span="16">
            <div class="description">
              <p style="margin-bottom: 10px;">{{data.title}}</p>
              <p class="price">¥{{data.sellPrice/100}}</p>
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
        <div v-html="data.content" style="padding: 0 16px 10px 16px;color: gray;white-space: normal"></div>
        <div class="zero"></div>
      </div>
      <div class="cook">
        <van-goods-action safe-area-inset-bottom="false">
          <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
          <van-goods-action-icon icon="cart-o" text="购物车" @click="Cart" :info="cur.length"/>
          <van-goods-action-button text="加入购物车" type="warning" @click="buy(1)"/>
          <van-goods-action-button text="立即购买" @click="buy(2)" />
        </van-goods-action>
      </div>
      <van-notify id="van-notify"/>
      <van-popup :show="show"
              position="bottom"
              @close="onClose"
      >
        <div style="height: 500px; position: relative;">
          <div class="top">
            <div class="left">
              <img class="imgUrl" :src="'http://i8.yunmayi.com' + data.proImg + 'XXXXX!!!!!_300x300.jpg'" alt="加载中" mode="widthFix">
            </div>
            <div class="right">
              <p>¥ 45.00</p>
              <p v-if="!hintMessage">请选择</p>
              <p v-if="hintMessage">{{hintMessage}}</p>
            </div>
          </div>
          <div v-for="(items, index) of data.props" :key="index" class="items">
            <p class="moda">{{items.name}}</p>
            <div class="choice">
              <span v-for="(item, i) of items.values" :key="i" :class="{checkeds: item.checked}" @click="selecteds(items, item)">{{item.vname}}</span>
            </div>
          </div>
          <div class="items" style="border: 0;">
            <p class="moda" style="float: left">购买数量</p>
            <p style="float: right; padding-right: 60rpx;"><van-stepper :value="quantity" @change="onChange"/></p>
          </div>
          <div style="position: absolute; bottom: 0; left: 0; width: 100%;">
            <van-button v-if="pattern === 1" type="danger" size="large" @click="onClickButton({id: data.id, imgUrl: data.imgUrl, price: data.sellPrice, num: quantity, hintMessage: hintMessage, name: data.title}); onClose()">确定</van-button>
            <van-button v-if="pattern === 2" type="danger" size="large" @click="onConfirm({id: data.id, imgUrl: data.imgUrl, price: data.sellPrice, num: quantity, hintMessage: hintMessage, name: data.title}); onClose()">确定</van-button>
          </div>
        </div>
      </van-popup>
    </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  export default {
    name: 'detail',
    data () {
      return {
        data: {
          content: "<p><img src='https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'/></p><p><img src='https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640'/></p><p><img src='https://images.unsplash.com/photo-1551446591-142875a901a1?w=640' alt=''></p>",
          id: 20003502,
          imgUrl: '/upload/2018/10/05/f7d7823dd44f57b7e6574f32a37393b3.jpg',
          images: [
            '/upload/2018/10/05/f7d7823dd44f57b7e6574f32a37393b3.jpg',
            '/upload/2018/10/05/fb61e2416fabbf663c526f35f9d4cf1d.jpg',
            '/upload/2018/10/05/010064da6541d13d5698a5b0e001ba3e.jpg',
            '/upload/2018/10/05/21aed9fb7fe5472840e9b234d5da6e20.jpg',
            '/upload/2018/10/05/c771f06c5e8144d25490a82676777171.jpg'
          ],
          proImg: '/upload/2018/11/12/cf9bb1a30a6609407080bc01bc145980.png',
          proImgs: [
            {
              create_time: '2019-01-07 15:42:04',
              id: 7069,
              image_url: '',
              item_id: 20003884,
              last_update: '2019-01-07 15:39:37',
              property_id: 200001,
              value_id: 1000003
            }
          ],
          props: {
            200001: {
              checked: true,
              name: '颜色',
              pid: 200001,
              values: [
                {checked: false, vid: 1000003, vname: '黑色'},
                {checked: false, vid: 1000005, vname: '红色'},
                {checked: false, vid: 1000022, vname: '粉色'},
                {checked: false, vid: 1000110, vname: '蓝色'}
              ]
            },
            200002: {
              checked: true,
              name: '尺码',
              pid: 200002,
              values: [
                {checked: false, vid: 1000009, vname: '均码'}
              ]
            }
          },
          sellPrice: 3800,
          skus: {
            33014768: {
              barcode: '',
              goldPrice: 0,
              id: 33014768,
              number: 'L88016',
              price: 3800,
              stock: 995,
              values: [1000003, 1000009]
            },
            33014769: {
              barcode: '',
              goldPrice: 0,
              id: 33014769,
              number: 'L88016',
              price: 3800,
              stock: 989,
              values: [1000005, 1000009]
            },
            33014770: {
              barcode: '',
              goldPrice: 0,
              id: 33014770,
              number: 'L88016',
              price: 3800,
              stock: 995,
              values: [1000009, 1000022]
            },
            33014771: {
              barcode: '',
              goldPrice: 0,
              id: 33014771,
              number: 'L88016',
              price: 3800,
              stock: 987,
              values: [1000009, 1000110]
            }
          },
          stockNum: 3966,
          subTitle: '',
          title: '浪莎保暖背心女士加厚加绒紧身美体打底托胸内衣冬季保暖内衣上衣L88016（均码）SC'
        },
        show: false,
        quantity: 1,
        hintMessage: '',
        skusId: [],
        pattern: ''
      }
    },
    methods: {
      onConfirm (item) {
      },
      Cart () {
        this.$router.push('/pages/cart')
      },
      buy (item) {
        this.show = true
        this.pattern = item
      },
      onClose () {
        this.show = false
      },
      onChange ({mp}) {
        const {detail} = mp
        this.quantity = detail
      },
      selecteds (items, item) {
        this.hintMessage = ''
        items.checked = true
        this.skusId = []
        var data = this.data
        for (var i in data['proImgs']) {
          if (data['proImgs'][i].value_id === item.vid) {
            if (data['proImgs'][i].image_url !== '') {
              data.proImg = data['proImgs'][i].image_url
            } else {
              data.proImg = data['imgUrl']
            }
          }
        }
        for (var k in items.values) {
          items.values[k].checked = false
        }
        item.checked = true
        for (var j in data.props) {
          for (var y in data.props[j].values) {
            if (data.props[j].values[y].checked) {
              this.skusId.push(data.props[j].values[y].vid)
              this.hintMessage += data.props[j].values[y].vname + ' '
            }
          }
        }
        console.log(this.hintMessage)
        console.log(item)
        console.log(items)
        this.skusId.sort()
      },
      ...mapActions(['onClickButton', 'onConfirm'])
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
  .top{
    padding: 10rpx;
    width: 100%;
    height: 240rpx;
    border-bottom: 1px solid #ddd;
  }
  .top .left{
    float: left;
  }
  .top .right{
    float: left;
    padding-left: 40rpx;
  }
  .imgUrl{
    width: 200rpx;
    height: 200rpx;
  }
  .moda{
    font-size: 28rpx;
  }
  .choice>span{
    display: inline-block;
    background: rgba(0, 0, 0, 0.05);
    padding: 4rpx 20rpx;
    margin: 8rpx;
    border-radius: 20rpx;
    font-size: 28rpx;
  }
  .checkeds{
    background: #ef473a;
    color: white;
  }
  .items{
    width: 100%;
    height: 100rpx;
    border-bottom: 1px solid #ddd;
    padding: 32rpx;
  }
</style>
