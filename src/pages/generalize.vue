<template>
  <div>
    <div class="card">
      <van-card
        title= "有售后 Mac Pro最高配视网膜屏定制ME665处理器i7-16G-768固态硬盘"
        thumb= "http://i8.yunmayi.com/upload/2018/12/17/f5e7bf0484810018700627fa16211314.jpgXXXXX!!!!!_300x300.jpg"
        :desc= "'商品售价:¥'+ prices"
        :price= "'推广佣金:'+ num"
      />
      <a @click="partager">推广</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'generalize',
    data () {
      return {
        prices: 6288,
        num: 175
      }
    },
    methods: {
      partager () {
        wx.onShareAppMessage(() => {
        })
      }
    }
  }
</script>

<style scoped>
  .card{
    border: 2px solid #f7f7f7;
    position: relative;
    padding: 10px;
  }
  .card a{
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 1px solid rgb(239, 71, 58);
    border-radius: 50%;
    position: absolute;
    bottom: 15%;
    right: 8%;
    text-align: center;
    line-height: 40px;
    color: rgb(239, 71, 58);
    font-size: 28rpx;
  }
</style>
