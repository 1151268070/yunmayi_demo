<template>
    <div>
      <div class="front">
        <van-row>
          <van-col span="12">
            <p>选中{{checkboxList.length}}件商品</p>
          </van-col>
          <van-col span="12" style="text-align: right">
            <van-button type="danger" size="mini" class="s-button" @click="del">删除</van-button>
          </van-col>
        </van-row>
      </div>
      <div v-if="!cur.length">购物车空空的</div>
      <div v-else class="list">
          <div v-for="(item, index) in cur" :key="index" style="display: flex">
            <div style="width: 10%;">
              <checkbox :value="item.id" :checked="item.checked"  @click="onChange(index)"/>
            </div>
            <div style="flex: 2">
              <van-card
                :title="item.name"
                :price="item.price/100"
                :thumb="'http://i8.yunmayi.com'+ item.imgUrl + 'XXXXX!!!!!_160x160.jpg'"
              >
                <view slot="desc">
                  <p style="font-size: 24rpx;">{{item.hintMessage}}</p>
                </view>
                <view slot="footer">
                  <van-stepper min="1" :value="item.num" integer @plus="addNum({id: item.id})" @minus="reduceNum({id: item.id})"/>
                </view>
              </van-card>
            </div>
          </div>
      </div>
      <div>
        <van-submit-bar
          :price="getGoodmoney"
          button-text="结算"
          @submit="onSubmit"
        >
          <input class="checkBox" type="checkbox" :checked="isCheckedAll" @click="onCheckedAll" />全选
        </van-submit-bar>
      </div>
      <van-notify id="van-notify" />
    </div>
</template>

<script>
  import Notify from '@/../static/vant/notify/notify'
  import {mapState, mapActions, mapGetters} from 'vuex'
  export default {
    name: 'cart',
    data () {
      return {
      }
    },
    methods: {
      ...mapActions(['addNum', 'reduceNum', 'onChange', 'onCheckedAll', 'initCur', 'del']),
      onSubmit () {
        if (this.$store.state.checkboxList.length > 0) {
          this.$router.push('/pages/confirm')
        } else {
          Notify('请勾选需要的商品')
        }
      }
    },
    computed: {
      ...mapState(['cur', 'isCheckedAll', 'checkboxList']),
      ...mapGetters(['getGoodmoney'])
    },
    created () {
      this.initCur()
    }
  }
</script>

<style scoped>
  .front{
    height: 50px;
  }
  .front p{
    padding:0 10px;
    font-size: 16px;
    line-height: 50px;
    color: #ff0000;
  }
  .front .s-button{
    line-height: 50px;
    padding-right: 10px;
  }
  .list{
    width: 100%;
  }
  .list .item{
    padding: 16px;

  }
  .checkBox{
    padding-left: 20px;
  }
</style>
