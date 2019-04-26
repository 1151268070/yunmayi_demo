<template>
  <div>
    <StoreHeader :store="storeData"></StoreHeader>

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
