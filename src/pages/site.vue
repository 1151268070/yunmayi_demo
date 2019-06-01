<template>
    <div style="background: #f7f7f7;">
      <p v-if="site.length === 0">暂无地址，快来添加地址吧！</p>
      <van-swipe-cell v-for="(list, index) in site" :key="index" right-width="65">
        <van-cell-group>
          <van-cell :data-index="list.addressId"
          :title="list.addresseeName +' ' + list.addresseePhone"
          size="large"
          :label="list.addressDetail">
            <van-icon slot="right-icon" name="edit" class="van-cell__right-icon" color="#888888" size="60rpx" @click="setSite(index)"/>
          </van-cell>
        </van-cell-group>
        <view slot="right">
          <van-button style="height: 100%;" type="danger" @click="delSite(index)">删除</van-button>
        </view>
      </van-swipe-cell>
      <van-button  size="large" type="danger" class="fixation" @click="setSite">新增地址</van-button>
      <van-dialog id="van-dialog" showCancelButton cancelButtonText/>
    </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  let Fly = require('flyio/dist/npm/wx')
  let fly = new Fly()
  export default {
    name: 'site',
    data () {
      return {
      }
    },
    computed: {
      ...mapState(['site'])
    },
    methods: {
      ...mapActions(['delSite']),
      setSite (index) {
        this.$router.push({path: '/pages/editAddress', query: {down: index}})
      },
      init () {
        fly.get('https://easy-mock.com/mock/5c9edbfc8aaa6f3254a8831a/yunmayi/myAddressList')
          .then((res) => {
            // console.log(res)
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
  .fixation{
    width: 100%;
    position: fixed;
    bottom: 0
  }
</style>
