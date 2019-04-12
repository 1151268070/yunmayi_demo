<template>
    <div class="price">
      <p>¥55555</p>
      <img src="/static/images/icon_arrow_down@2x.png" alt="">
    </div>
</template>

<script>
  export default {
    name: 'priceAndKid',
    props: {
      pandk: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data () {
      return {
        data: this.pandk
      }
    },
    watch: {
      pandk: {
        handler (v) {
          console.log(v)
          this.data = v
        }
      }
    }
  }
</script>

<style scoped>
  .price{
    width: 100%;
    display: flex;
    margin-top: 10px;
  }
   .price p{
    font-size: 28rpx;
    color: #E62D2D;
  }
  .price img{
    width: 32rpx;
    height: 18rpx;
    background-size: 100%;
    padding-top: 10rpx;
    padding-left: 10rpx;
  }
</style>
