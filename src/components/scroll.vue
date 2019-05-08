<template>
    <div>
        <scroll-view scroll-x="true" style="white-space: nowrap; display: inline-block;">
          <p v-for="(data, index) in system.data" :key="index" class="scroll_x">{{data.system_name}}</p>
        </scroll-view>
    </div>
</template>

<script>
  export default {
    name: 'scroll',
    // props: {
    //   system: {
    //     type: Object,
    //     default () {
    //       return {}
    //     }
    //   }
    // },
    props: ['system'],
    data () {
      return {
      }
    },
    watch: {
      // system: {
      //   handler (v) {
      //     this.data1 = v
      //     console.log(this.data1)
      //   },
      //   deep: true
      // }
    }
  }
</script>

<style scoped>
  .scroll_x{
    display: inline-block;
    white-space: nowrap;
    text-align: center;
    width: 70px;
    padding: 5px 5px;
    height: 30px;
    font-size: 28rpx;
    line-height: 30px;
  }
</style>
