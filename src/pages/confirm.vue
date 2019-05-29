<template>
    <div>
      <div class="address">
        <van-cell-group border>
          <van-cell center icon="location-o" title="夏思恒" is-link size="large" label="浙江省 杭州市 余杭区 良储街道 通运街389号 冠宇公寓" url="/pages/site">
          </van-cell>
        </van-cell-group>
      </div>
      <div class="address">
        <p class="listfile" >商品列表：</p>
        <div v-if="list.length === 0" style="border-bottom: 1px solid #ddd; margin-bottom: 10rpx;" v-for="(item, index) in cur" :key="index">
          <van-card
            :num="item.num"
            :price="item.price/100"
            :title="item.name"
            :thumb="'http://i8.yunmayi.com' + item.imgUrl + 'XXXXX!!!!!_160x160.jpg'"
          >
            <view slot="desc">
              <p style="font-size: 24rpx;">{{item.hintMessage}}</p>
            </view>
          </van-card>
        </div>
        <div v-if="list.length !== 0" style="border-bottom: 1px solid #ddd; margin-bottom: 10rpx;" v-for="(item, index) in list" :key="index">
          <van-card
            :num="item.num"
            :price="item.price/100"
            :title="item.name"
            :thumb="'http://i8.yunmayi.com'+ item.imgUrl + 'XXXXX!!!!!_160x160.jpg'"
          >
            <view slot="desc">
              <p style="font-size: 24rpx;">{{item.hintMessage}}</p>
            </view>
          </van-card>
        </div>
      </div>
      <div class="address">
        <p class="listfile">温馨提示：</p>
          <div class="courier">
            <p style="font-size: 14px; color: grey; text-align: center; line-height: 100rpx;">商品都是产地直发，会被拆成多个快件，陆续发货</p>
          </div>
      </div>
      <div class="address">
        <p class="listfile">备注：</p>
        <div>
          <van-cell-group>
            <van-field
              type="textarea"
              placeholder="请输入留言"
              :value="text"
              autosize
            >
            </van-field>
          </van-cell-group>
        </div>
      </div>
      <div class="address">
        <p class="listfile">结算金额：</p>
        <div style="border-bottom: 1px solid #ddd; padding: 20rpx;">
          <van-row>
            <van-col span="12">
              <span style="padding-left: 20rpx; font-size: 30rpx; color: #535353">商品金额</span>
            </van-col>
            <van-col span="12" style="text-align: right">
              <span style="padding-right: 20rpx; font-size: 30rpx; color: #EF473A;">¥ {{original/100}}</span>
            </van-col>
          </van-row>
        </div>
      </div>
      <div class="address">
        <p class="listfile">购物券 <span @click="select_coupon">4张 > ></span></p>
        <div style="border-bottom: 1px solid #ddd; padding: 20rpx;">
          <van-row>
            <van-col span="12">
              <span style="padding-left: 20rpx; font-size: 30rpx; color: #535353">使用购物券</span>
            </van-col>
            <van-col span="12" style="text-align: right">
              <span style="padding-right: 20rpx; font-size: 30rpx; color: #EF473A;">¥ 0.00</span>
            </van-col>
          </van-row>
        </div>
      </div>
      <div class="address">
        <van-switch-cell :disabled="goldCash === 0" :title="'可用'+ goldCash/100 + '蚂蚁金币抵用' + goldCash/100 +'元'" :checked="checked" @change="onSwitch(1)"></van-switch-cell>
        <van-switch-cell :disabled="checked === false" :title="'可用'+ integral + '积分抵用'+ integral/1000 + '元'" :checked="selected" @change="onSwitch(2)"></van-switch-cell>
      </div>
      <div>
        <van-popup :show="hide" position="bottom" @close="onClose">
          <van-radio-group value="1">
            <div class="item">
              <div class="left">
                <p style="padding:20px 0px 10px 10px; font-size: 22px; color: white; line-height: 35px;">¥5
                  <span style="font-size: 14px">满30可用</span>
                </p>
                <p style="padding:0px 0px 10px 10px; color: white; font-size: 14px; line-height: 35px;">有效期至2020-01-01 00:00:00</p>
              </div>
              <div class="right">
                <van-raido class="new_radio" name="1" checked-color="#07c160"></van-raido>
              </div>
            </div>
          </van-radio-group>
          <div class="zero"></div>
        </van-popup>
      </div>
      <div class="zero">
      </div>
      <div>
        <van-submit-bar
          :price="constPrice"
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
        text: '',
        hide: false,
        checked: false,
        selected: false,
        radios: 1,
        original: 0,
        goldCashs: 2990, //  总蚂蚁金币
        goldCash: 0,
        integral: 0, //  积分
        integrals: 0, //  总积分
        constPrice: 0, // 最终价格,
        gold: 0, // 临时储存
        inte: 0
      }
    },
    methods: {
      select_coupon () {
        this.hide = true
      },
      onClose () {
        this.hide = false
      },
      onSwitch (i) {
        if (i === 1) {
          this.checked = !this.checked
        } else {
          this.selected = !this.selected
        }
        this.computedgetGoodmoney()
      },
      computedMoney () {
        if (this.$store.state.list.length !== 0) {
          this.original = this.$store.state.list[0].price * this.$store.state.list[0].num
          this.integral = this.$store.state.list[0].price * 3
          this.integrals = this.integral
        } else {
          this.original = this.$store.getters.getGoodmoney
          for (var i = 0; i < this.$store.state.cur.length; i++) {
            this.integral += this.$store.state.cur[i].price * 3
          }
          this.integrals = this.integral
        }
      },
      computedgetGoodmoney () {
        this.gold = 0
        this.inte = 0
        if (this.original <= 0) {
          this.goldCash = 0
          this.integral = 0
        } else {
          if (this.checked) {
            this.gold = this.goldCash
            if (this.original <= this.goldCashs) {
              this.integral = 0
            } else if (this.integrals / 10 > this.original - this.goldCashs) {
              this.integral = (this.original - this.goldCashs) * 10
            }
          } else {
            this.integral = this.integrals
          }
          if (this.selected) {
            this.inte = this.integral
            if (this.goldCashs > this.original - this.integral / 10) {
              this.goldCash = this.original - this.integral / 10
            }
          } else {
            this.goldCash = Math.min(this.original, this.goldCashs)
          }
        }
        this.constPrice = (this.original - this.gold - this.inte / 10) < 0 ? 0 : (this.original - this.gold - this.inte / 10)
      }
    },
    computed: {
      ...mapState(['cur', 'checkboxList', 'list']),
      ...mapGetters(['getGoodmoney'])
    },
    created () {
    },
    onShow () {
      this.computedMoney()
      this.computedgetGoodmoney()
    }
  }
</script>

<style scoped>
.address{
  padding: 15px 10px;
}
.courier{
  border: 1px solid #ddd;
  height: 100rpx;
}
.listfile{
  font-size: 15px;
  color: grey;
  margin-bottom: 20rpx;
}
.listfile span{
  float: right;
  margin-right: 10rpx;
  color: #EF473A;
}
.zero {
  height: 100px;
}
.item{
  display: flex;
  padding: 5rpx;
  border-radius: 5px;
  margin: 0 auto;
  width: 100%;

}
.item .left{
  width: 80%;
  background: rgb(116,210,212);
}
.item .right{
  flex: 2
}
.new_radio{
  z-index: 99;
  width: 10px;
  height: 10px;
}
</style>
