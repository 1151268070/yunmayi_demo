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
          <van-tabbar-item icon="shopping-cart-o" info="9" @click="Cart">购物车</van-tabbar-item>
        </van-col>
      </van-row>
    </div>
    <Scroll :system="Store_data"></Scroll>
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
  import Scroll from '@/components/scroll'
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
    components: {
      Scroll
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
      },
      Cart () {
        this.$router.push('/pages/cart')
      }
    }
  }
</script>

<style scoped>
  .store_header{
    width: 100%;
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

</style>
