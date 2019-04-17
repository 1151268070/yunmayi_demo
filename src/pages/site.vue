<template>
    <div style="background: #f7f7f7;">
      <van-cell v-for="(list, index) in lists" :key="index" :data-index="list.addressId"
      :title="list.addresseeName +' ' + list.addresseePhone"
      size="large"
      :label="list.addressDetail">
        <van-icon slot="right-icon" name="edit" class="van-cell__right-icon" color="#888888" size="60rpx" @click="setSite(list.addressId)"/>
      </van-cell>
      <van-button size="large" type="danger" class="fixation" @click="setSite">新增地址</van-button>
    </div>
</template>

<script>
  let Fly = require('flyio/dist/npm/wx')
  let fly = new Fly()
  export default {
    name: 'site',
    data () {
      return {
        lists: null
      }
    },
    methods: {
      setSite (index) {
        this.$router.push({path: '/pages/address', query: {id: index}})
      },
      init () {
        fly.get('https://easy-mock.com/mock/5c9edbfc8aaa6f3254a8831a/yunmayi/myAddressList')
          .then((res) => {
            this.lists = res.data.data
            console.log(this.lists)
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
