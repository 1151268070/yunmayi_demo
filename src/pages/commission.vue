<template>
    <div>
      <div class="always">
        <div class="a_header">
          <div class="left">
            <van-icon v-if="is_vip == 0" name="http://i8.yunmayi.com/upload/2019/04/17/59c69bfe61cb3978eb133714c28412d9.png" size="90px"/>
            <van-icon v-if="is_vip == 1" name="http://i8.yunmayi.com/upload/2019/04/17/ced13bcd6a325fbe55cdd7ce4877f98e.png" size="90px"/>
          </div>
          <div class="right">
            <p style="margin: 10px 0; color: white; font-size: 36rpx;">maijia</p>
            <p v-if="is_vip == 0">普通会员</p>
            <p v-if="is_vip == 1">金主会员</p>
            <a class="unfold" @click="jump">推广商品</a>
            <a v-if="parentUsername != ''" class="promoter">邀请人：</a>
          </div>
        </div>
        <div class="condition">
          <p>本月收益</p>
          <p class="vip_condition">¥0.00</p>
          <van-row class="box">
            <van-col span="8">
              <p>金币余额</p>
              <span>0.00</span>
            </van-col>
            <van-col span="8">
              <p>累计收益</p>
              <span>0.00</span>
            </van-col>
            <van-col span="8">
              <p>金主好友</p>
              <span>0</span>
            </van-col>
          </van-row>
          <div class="bracket">
            <p>有0个普通好友未充值哦，再加把劲哦</p>
            <i class="triangles"></i>
          </div>
        </div>
      </div>
      <div class="picture">
        <div v-if="is_vip == 0">
          <img class="img" src="http://i1.yunmayi.com/upload/2019/04/01/ca03bb4a0d4b62df8050e9c5d7852252.png" mode="widthFix">
        </div>
        <div v-if="is_vip == 1">
          <img class="img" src="http://i1.yunmayi.com/upload/2019/04/01/c6f578d47746b92b88b76db5ef2649b0.png" alt="" mode="widthFix">
        </div>
        <div class="notice" v-if="is_vip == 1">
          <van-notice-bar backgroundColor="#F53250" color="white" left-icon="http://i1.yunmayi.com/upload/2019/04/01/20abde733680a68a3e0e05d7fa288c8e.png" :text="text"/>
        </div>
      </div>
      <!-- 空的div 撑开 -->
      <div class="zero"></div>
      <div class="tabbar">
        <van-row v-if="is_vip == 1 ">
          <van-col span="8">
            <van-button type="danger">立即邀请好友加入</van-button>
          </van-col>
          <van-col span="8" style="text-align: center">
            <van-button @click="popup_show">活动规则</van-button>
          </van-col>
          <van-col span="8" style="text-align: right">
            <van-button plain hairline type="danger">兑换优惠券</van-button>
          </van-col>
        </van-row>
        <van-row v-if="is_vip == 0">
          <van-col span="22" offset="1">
            <van-button type="danger" size="large">充值168元成为金主会员</van-button>
          </van-col>
        </van-row>
      </div>
      <div class="popup" v-if="show">
        <van-popup :show="show" position="bottom" close-on-click-overlay overlay @close="onClose">
          <h4>金主会员活动规则</h4>
          <p>如何成为金主会员</p>
          <span>168元即可成为金主会员，享受金主会员所有权益</span>
          <br/>
          <p>金主会员享受的权益</p>
          <span><b>权益1：</b>送价值168元云蚂蚁定制背包</span>
          <span><b>权益2：</b>邀请好友成为金主会员即可赚取50元蚂蚁金币（1金币等于1元人民币）</span>
          <span><b>权益3：</b>送50元无门槛购物券（共4张，一张20元购物券和3张10元购物券）</span>
          <span><b>权益4：</b>分享商品，好友通过分享商品下单后，即可赚取佣金</span>
          <span><b>权益5：</b>邀请好友注册，好友自主购买获得奖励金</span>
          <span><b>权益6：</b>每月可享受一款金主特惠商品</span>
          <br>
          <p>邀请金主会员规则</p>
          <span>好友成功注册云蚂蚁会员，并升级开通成为金主会员，即为邀请成功，每成功邀请1位金主会员，获得50元，以此类推，系统以蚂蚁金币形式自动发放，蚂蚁金币可以申请提现（1金币等于1元人民币）</span>
          <br>
          <span>咨询电话： 057186908200</span>
          <br>
          <span>在法律允许的范围内一切活动解释权归云蚂蚁所属</span>
          <br>
          <br>
        </van-popup>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'commission',
    data () {
      return {
        is_vip: 0,
        parentUsername: '',
        arr: [
          '会员186****8182  刚刚邀请了2位金主会员将获得100元  ',
          '会员137****8170  刚刚邀请了1位金主会员将获得50元  ',
          '会员159****2653  刚刚邀请了1位金主会员将获得50元  ',
          '会员159****2653  刚刚邀请了2位金主会员将获得100元  ',
          '会员157****4248  刚刚邀请了1位金主会员将获得50元  ',
          '会员130****9541  刚刚邀请了1位金主会员将获得50元  ',
          '会员152****5523  刚刚邀请了1位金主会员将获得50元  ',
          '会员151****9002  刚刚邀请了1位金主会员将获得50元  ',
          '会员177****0054  刚刚邀请了1位金主会员将获得50元  ',
          '会员150****2112  刚刚邀请了2位金主会员将获得100元  ',
          '会员130****5055  刚刚邀请了1位金主会员将获得50元  ',
          '会员177****4880  刚刚邀请了2位金主会员将获得100元  ',
          '会员152****1770  刚刚邀请了2位金主会员将获得100元  ',
          '会员159****9247  刚刚邀请了1位金主会员将获得50元  ',
          '会员152****3735  刚刚邀请了2位金主会员将获得100元  ',
          '会员151****3661  刚刚邀请了2位金主会员将获得100元  ',
          '会员152****3724  刚刚邀请了1位金主会员将获得50元  ',
          '会员182****8172  刚刚邀请了2位金主会员将获得100元  ',
          '会员152****2220  刚刚邀请了1位金主会员将获得50元  ',
          '会员152****7288  刚刚邀请了2位金主会员将获得100元  ',
          '会员158****3262  刚刚邀请了1位金主会员将获得50元  ',
          '会员135****0485  刚刚邀请了2位金主会员将获得100元  ',
          '会员187****7114  刚刚邀请了2位金主会员将获得100元  ',
          '会员177****2325  刚刚邀请了1位金主会员将获得50元  ',
          '会员131****8897  刚刚邀请了2位金主会员将获得100元  ',
          '会员137****8927  刚刚邀请了1位金主会员将获得50元  ',
          '会员135****3000  刚刚邀请了1位金主会员将获得50元  ',
          '会员133****5899  刚刚邀请了2位金主会员将获得100元  ',
          '会员136****2306  刚刚邀请了1位金主会员将获得50元  ',
          '会员188****6516  刚刚邀请了2位金主会员将获得100元  '
        ],
        text: '',
        show: false
      }
    },
    methods: {
      jump () {
        this.$router.push('/pages/generalize')
      },
      popup_show () {
        this.show = true
      },
      onClose () {
        this.show = false
      },
      randFun () {
        for (let i = 0, len = this.arr.length; i < len; i++) {
          let index = parseInt(Math.random() * (len - 1))
          let tempValue = this.arr[i]
          this.arr[i] = this.arr[index]
          this.arr[index] = tempValue
        }
        return this.arr
      },
      randtext () {
        for (let i = 0; i < this.arr.length; i++) {
          this.text += this.arr[i]
        }
      }
    },
    mounted () {
      this.randFun()
      this.randtext()
    }
  }
</script>

<style scoped>
.always{
  height: 310px;
  position: relative;
}
.always .a_header{
  display: flex;
  height: 300px;
  width: 100%;
  background: url('http://i8.yunmayi.com/upload/2019/04/17/596829b3333761d95f3c99a49c4688c7.png') no-repeat;
  background-size: 100%;
}
.a_header .left{
  padding: 10px;
}
.a_header .right{
  flex: 2;
  padding: 20px;
  position: relative;
}
.a_header .right p{
  font-size: 14px;
  color: rgba(255,255,255,.7);
}
.a_header .right .unfold{
  display: inline-block;
  position: absolute;
  width: 97px;
  height: 30px;
  background: #F7D072;
  top: 15%;
  right: 0;
  color: white;
  text-align: center;
  line-height: 30px;
  font-size: 16px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}
.a_header .right .promoter{
  position: absolute;
  top: 1%;
  right: 4%;
  color: white;
  font-size: 12px;
}
.condition{
  width: 90%;
  height: 210px;
  margin: 5%;
  background: #FFFFFF;
  border-radius: 20px;
  position: absolute;
  bottom: -2%;
  box-shadow: 1px 1px 10px #888888;
}
.condition>p{
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
}
.condition .vip_condition{
  margin-top: 10px;
  font-size: 25px;
  color: #e62d2d;
}
.condition .box{
  width: 100%;
  height: 52px;
  text-align: center;
  padding: 5px;
}
.condition .box p{
  color: #cccccc;
  font-size: 14px;
  margin-bottom: 5px;
}
.condition .box span{
  font-size: 18px;
  color: #4D4D4D;
}
.condition .bracket{
  width: 80%;
  height: 30px;
  background: #F7F7F7;
  border-radius: 10px;
  margin: 0 auto;
  position: absolute;
  bottom: 4%;
  left: 10%;
}
.condition .bracket p{
  margin: 0;
  text-align: center;
  line-height: 30px;
  color: #999999;
  font-size: 12px;
}
.condition .bracket .triangles{
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  right: 6%;
  bottom: 100%;
  border-top: 10px solid transparent;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #F7F7F7;
}
.picture{
  width: 95%;
  margin: 0 auto;
  position: relative;
}
.img{
  width: 100%;
}
.picture .notice{
  position: absolute;
  width: 95%;
  height: 20px;
  top: 5%;
  left: 2.5%;
}
.zero{
  width: 100%;
  height: 30px;
}
.tabbar{
  position: fixed;
  width: 100%;
  height: 40px;
  background: white;
  bottom: 0;
}
.popup{
  width: 100%;
  height: 200px;
}
.popup h4{
  font-size: 32rpx;
  text-align: center;
}
.popup p{
  font-size: 28rpx;
  padding: 0 20px;
}
.popup span{
  font-size: 24rpx;
  padding: 0 20px;
}
</style>
