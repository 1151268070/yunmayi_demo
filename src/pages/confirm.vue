<template>
    <div>
      <div class="address">
        <van-cell-group border>
          <van-cell center icon="location-o" title="夏思恒" is-link size="large" label="浙江省 杭州市 余杭区 良储街道 通运街389号 冠宇公寓" url="/pages/site">
          </van-cell>
        </van-cell-group>
      </div>
      <div class="address">
        <p style="font-size: 15px; color: grey; margin-bottom: 20rpx;">商品列表：</p>
        <div style="border-bottom: 1px solid #ddd; margin-bottom: 10rpx;" v-for="(item, index) in cur" :key="index">
          <van-card
            :num="item.num"
            :price="item.price"
            :title="item.name"
            :thumb="item.imgUrl"
          />
        </div>
      </div>
      <div>
        <van-submit-bar
          :price="getGoodmoney * 100"
          button-text="提交订单"
          @submit="onSubmit"
        >
        </van-submit-bar>
      </div>
    </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  export default {
    name: 'confirm',
    data () {
      return {
      }
    },
    methods: {
    },
    computed: {
      ...mapState(['cur', 'checkboxList']),
      ...mapGetters(['getGoodmoney'])
    },
    created () {
    }
  }
</script>

<style scoped>
.address{
  padding: 15px 10px;
}
</style>
