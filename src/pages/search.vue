<template>
  <div>
    <StoreHeader :store="storeData"></StoreHeader>
    <van-row>
      <van-col span="12">555</van-col>
      <van-col span="12">555</van-col>
      <van-col span="12">555</van-col>
      <van-col span="12">555</van-col>
    </van-row>
  </div>
</template>

<script>
  import StoreHeader from '@/components/store_header'
  export default {
    name: 'search',
    data () {
      return {
        storeData: {}
      }
    },
    components: {
      StoreHeader
    }
  }
</script>

<style scoped>

</style>
