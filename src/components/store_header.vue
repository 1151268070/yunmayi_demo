<template>
  <div style="background: #fff;">
    <van-row class="s_header">
      <van-col span="3" style="text-align: center; padding-top: 20px">
        <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
      </van-col>
      <van-col span="18">
        <van-search placeholder="请输入关键字搜索"/>
      </van-col>
      <van-col>
        <van-tabbar-item icon="shopping-cart-o" info="9">购物车</van-tabbar-item>
      </van-col>
    </van-row>
    <scroll-view scroll-x="true">
       <div class="scroll_x">
          <div>生鲜水果</div>
          <div>地方特产</div>
          <div>食品零食</div>
          <div>美容洗护</div>
          <div>服装服饰</div>
          <div>家居生活</div>
          <div>酒水饮料</div>
          <div>保健养生</div>
          <div>云蚂蚁定制</div>
          <div>原装进口</div>
          <div>粮油调味</div>
          <div>玩具乐园</div>
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
  .scroll_x>div{
    text-align: center;
    width: 200px;
    padding: 0 10px;
    height: 200rpx;
    font-size: 28rpx;
    line-height: 28rpx;
  }
</style>
