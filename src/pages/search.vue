<template>
  <div style="background: #f8f8f8;">
    <StoreHeader :store="storeData" :info="cur"></StoreHeader>
    <div class="strut"></div>
    <van-row>
      <van-col span="12">
        <div class="item-box">
          <div style="margin-bottom: 16rpx; height: 280rpx; overflow: hidden; text-align: center;">
            <img class="img" src="http://i8.yunmayi.com/upload/2018/11/07/10d625807b6867dd0655798196f2242e.pngXXXXX!!!!!_300x300.jpg" mode="widthFix">
          </div>
          <p class="title">云南特产石林人参果大果圆果 黄肉 新鲜水果 味甜vj（5斤装24-30个）sc</p>
          <p class="title"><span class="assertive">¥32.00</span><span class="assertive mallCommission">奖励金：¥0.87</span></p>
        </div>
      </van-col>
      <van-col span="12">
        <div class="item-box">
          <div style="margin-bottom: 16rpx; height: 280rpx; overflow: hidden; text-align: center;">
            <img class="img" src="http://i8.yunmayi.com/upload/2018/11/07/10d625807b6867dd0655798196f2242e.pngXXXXX!!!!!_300x300.jpg" mode="widthFix">
          </div>
          <p class="title">云南特产石林人参果大果圆果 黄肉 新鲜水果 味甜vj（5斤装24-30个）sc</p>
          <p class="title"><span class="assertive">¥32.00</span><span class="assertive mallCommission">奖励金：¥0.87</span></p>
        </div>
      </van-col>
      <van-col span="12">
        <div class="item-box">
          <div style="margin-bottom: 16rpx; height: 280rpx; overflow: hidden; text-align: center;">
            <img class="img" src="http://i8.yunmayi.com/upload/2018/11/07/10d625807b6867dd0655798196f2242e.pngXXXXX!!!!!_300x300.jpg" mode="widthFix">
          </div>
          <p class="title">云南特产石林人参果大果圆果 黄肉 新鲜水果 味甜vj（5斤装24-30个）sc</p>
          <p class="title"><span class="assertive">¥32.00</span><span class="assertive mallCommission">奖励金：¥0.87</span></p>
        </div>
      </van-col>
      <van-col span="12">
        <div class="item-box">
          <div style="margin-bottom: 16rpx; height: 280rpx; overflow: hidden; text-align: center;">
            <img class="img" src="http://i8.yunmayi.com/upload/2018/11/07/10d625807b6867dd0655798196f2242e.pngXXXXX!!!!!_300x300.jpg" mode="widthFix">
          </div>
          <p class="title">云南特产石林人参果大果圆果 黄肉 新鲜水果 味甜vj（5斤装24-30个）sc</p>
          <p class="title"><span class="assertive">¥32.00</span><span class="assertive mallCommission">奖励金：¥0.87</span></p>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import StoreHeader from '@/components/store_header'
  import {mapState} from 'vuex'
  export default {
    name: 'search',
    data () {
      return {
        text: this.$router.kw,
        storeData: {
          data: [
            {
              system_name: '生鲜水果'
            },
            {
              system_name: '地方特产'
            },
            {
              system_name: '食品零食'
            },
            {
              system_name: '美容洗护'
            },
            {
              system_name: '服装服饰'
            },
            {
              system_name: '家居生活'
            },
            {
              system_name: '酒水饮料'
            },
            {
              system_name: '保健养生'
            },
            {
              system_name: '云蚂蚁定制'
            },
            {
              system_name: '原装进口'
            },
            {
              system_name: '粮油调味'
            },
            {
              system_name: '玩具乐园'
            }
          ]
        }
      }
    },
    components: {
      StoreHeader
    },
    computed: {
      ...mapState(['cur'])
    }
  }
</script>

<style scoped>
  .strut{
    height: 105px;
  }
  .item-box{
    padding: 2%;
    background: white;
  }
  .item-box .img{
    width: 80%;
  }
  .title{
    padding-left: 10rpx;
    font-size: 26rpx;
    font-weight: bold;
    overflow: hidden;
    width: 100%;
    height: 30rpx;
    margin-bottom: 20rpx;
  }
  .title .assertive{
    color: #ef473a;
  }
  .title .mallCommission{
    float: right;
    padding-right: 10rpx;
  }
</style>
