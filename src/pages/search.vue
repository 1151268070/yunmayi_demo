<template>
  <div>
    <StoreHeader :store="storeData"></StoreHeader>
    <div class="strut"></div>
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
    }
  }
</script>

<style scoped>
  .strut{
    height: 105px;
  }
</style>
