<template>
  <div style="background: #fff;">
    <van-row class="s_header">
      <van-col span="3" style="text-align: center; padding-top: 20px">
        <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
      </van-col>
      <van-col span="18">
        <van-search placeholder="请输入关键字搜索" @search="onSearch"/>
      </van-col>
      <van-col span="3">
        <van-tabbar-item icon="shopping-cart-o" info="9">购物车</van-tabbar-item>
      </van-col>
    </van-row>
    <scroll-view scroll-x="true">
       <div class="scroll_x">
          <p>生鲜水果</p>
          <p>地方特产</p>
          <p>食品零食</p>
          <p>美容洗护</p>
          <p>服装服饰</p>
          <p>家居生活</p>
          <p>酒水饮料</p>
          <p>保健养生</p>
          <p>云蚂蚁定制</p>
          <p>原装进口</p>
          <p>粮油调味</p>
          <p>玩具乐园</p>
       </div>
    </scroll-view>
  </div>
</template>

<script>
  export default {
    name: 'store_header',
    props: {
      store: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data () {
      return {
        Store_data: this.store
      }
    },
    watch: {
      store: {
        handler (v) {
          this.Store_data = v
        },
        deep: true
      }
    },
    methods: {
      onSearch () {
        this.$router.push('/pages/search')
      }
    }
  }
</script>

<style scoped>
  .s_header{
    height: 200px;
    position: relative;
  }
  .scroll_x{
    display: flex;
    flex-direction: row;
  }
  .scroll_x > p{
    text-align: center;
    width: 200px;
    padding: 0 10px;
    height: 30px;
    font-size: 28rpx;
    line-height: 28rpx;
  }
</style>
