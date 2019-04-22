<template>
  <div style="background: #f7f7f7">
    <StoreHeader :store="storeData"></StoreHeader>
    <div class="swiper">
      <swiper autoplay="true" interval="3000">
        <swiper-item v-for="(imgs,index) in imgUrls" :key="index">
          <img :src="imgs" alt="" class="img" style="background-size: 100%" mode="widthFix">
        </swiper-item>
      </swiper>
    </div>
    <van-row class="apps">
      <van-col span="8" @click="go">
        <van-icon name="http://pifa.yunmayi.com/upload/2018/12/10/6740b143f11068aaa248f1122d034ade.png" size="60px" />
        <p>金主特惠</p>
      </van-col>
      <van-col span="8">
        <van-icon name="http://pifa.yunmayi.com/upload/2018/12/10/d4a3e9a5a93a279cb6c03a91cf7a8dd5.png" size="60px" />
        <p>吃遍中国</p>
      </van-col>
      <van-col span="8">
        <van-icon name="http://pifa.yunmayi.com/upload/2018/12/10/bb1960de463180784ce5a1040fac3857.png" size="60px" />
        <p>服务承诺</p>
      </van-col>
    </van-row>
    <div style="background: white; text-align: center; padding-bottom: 10px">
      <div class="invite">
        <img class="img" src="http://i8.yunmayi.com/upload/2019/04/01/0114b233867feaf2a9a4bff81471f7de.pngXXXXX!!!!!_700x700.jpg" mode="widthFix"/>
      </div>
      <div class="explosive">
        <img class="img" src="http://i8.yunmayi.com/upload/2018/12/17/91e8130411d4db5e8af3341b225fd783.pngXXXXX!!!!!_700x700.jpg" mode="widthFix"/>
      </div>
      <div class="explosive">
        <img class="img" src="http://i8.yunmayi.com/upload/2019/03/19/2411bbf9b1a0ee26e4cfc2238562098d.jpgXXXXX!!!!!_700x700.jpg" mode="widthFix"/>
      </div>
    </div>
    <div style="width:95%; margin: 0 auto; background: white; text-align: center;">
      <div class="handpick">
        <img class="img" src="http://i8.yunmayi.com/upload/2018/12/10/8363a004e8ef2aee19408b83c55dfbbb.png" mode="widthFix"/>
      </div>
      <van-row>
        <van-col span="12">
          <img class="img" src="http://i8.yunmayi.com/upload/2019/01/02/b0136b63d9e60bf82b9bbe18dd930967.jpgXXXXX!!!!!_700x700.jpg" mode="widthFix"/>
        </van-col>
        <van-col span="12">
          <img class="img" src="http://i8.yunmayi.com/upload/2019/01/02/b0136b63d9e60bf82b9bbe18dd930967.jpgXXXXX!!!!!_700x700.jpg" mode="widthFix"/>
        </van-col>
        <van-col span="12">
          <img class="img" src="http://i8.yunmayi.com/upload/2019/01/02/b0136b63d9e60bf82b9bbe18dd930967.jpgXXXXX!!!!!_700x700.jpg" mode="widthFix"/>
        </van-col>
        <van-col span="12">
          <img class="img" src="http://i8.yunmayi.com/upload/2019/01/02/b0136b63d9e60bf82b9bbe18dd930967.jpgXXXXX!!!!!_700x700.jpg" mode="widthFix"/>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import StoreHeader from '@/components/store_header'
import Addit from '@/components/addit'
export default {
  data () {
    return {
      texts: '',
      datas: null,
      lists: null,
      curNav: 0,
      storeData: {},
      imgUrls: [
        'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      ]
    }
  },
  components: {
    Addit,
    StoreHeader
  },
  watch: {

  },
  computed: {

  },
  methods: {
    go () {
      this.$router.push('/pages/login')
    }
  },

  mounted () {

  }

}
</script>

<style scoped>
  .swiper{
    width: 100%;
    height: 300rpx;
    margin-bottom: 20px;
  }
  .apps{
    text-align: center;
    background: white;
  }
  .apps p{
    font-size: 28rpx;
  }
  .invite{
    width: 95%;
    margin: 0 auto;
    margin-top: 10px;
  }
  .explosive{
    width: 95%;
    margin: 0 auto;
    margin-top: 15px;
  }
  .spring{
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
  .vessel{
    width: 49%;
    min-height: 185px;
    background: #fff;
    margin-bottom: 5px;
    border-radius: 10px;
  }
  .img{
    width: 100%;
  }

</style>
