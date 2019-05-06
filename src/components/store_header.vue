<template>
  <div class="store_header">
    <div>
      <van-row class="s_header">
        <van-col span="3">
          <p style="margin-top: 10px"></p>
          <van-tabbar-item icon="apps-o" @click="Show">分类</van-tabbar-item>
        </van-col>
        <van-col span="18">
          <van-search placeholder="请输入关键字搜索" @search="onSearch"/>
        </van-col>
        <van-col span="3">
          <p style="margin-top: 10px"></p>
          <van-tabbar-item icon="shopping-cart-o" info="9">购物车</van-tabbar-item>
        </van-col>
      </van-row>
    </div>
    <div>
      <scroll-view scroll-x="true">
        <p v-for="(data, index) in Store_data.data" :key="index" class="scroll_x">{{data.system_name}}</p>
      </scroll-view>
    </div>
    <div>
      <van-popup :show="show" position="left" @close="onClose">
        <van-badge-group :active="num">
          <van-badge v-for="(data, index) in Store_data.data" :key="index" :title="data.system_name" @click="ok(index)"/>
        </van-badge-group>
      </van-popup>
    </div>
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
        Store_data: this.store,
        show: false,
        num: -1
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
      },
      onClose () {
        this.show = false
      },
      Show () {
        console.log(1111)
        this.show = true
      },
      ok (index) {
        console.log(index)
        this.num = index
      }
    }
  }
</script>

<style scoped>
  .store_header{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    background: #fff;
  }
  .s_header{
    height: 200px;
    position: relative;
  }
  .scroll_x{
    display: inline-block;
    white-space: nowrap;
    text-align: center;
    width: 60px;
    padding: 5px 5px;
    height: 30px;
    font-size: 28rpx;
    line-height: 30px;
  }

</style>
