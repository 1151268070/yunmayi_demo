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
            <a class="unfold">推广商品</a>
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
        <div class="picture">
          <div v-if="is_vip == 0">
            <img class="img" src="http://i1.yunmayi.com/upload/2019/04/01/ca03bb4a0d4b62df8050e9c5d7852252.png" mode="widthFix">
          </div>
          <div v-if="is_vip == 1">
            <img class="img" src="http://i1.yunmayi.com/upload/2019/04/01/c6f578d47746b92b88b76db5ef2649b0.png" alt="" mode="widthFix">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'commission',
    data () {
      return {
        is_vip: 1,
        parentUsername: '',
        arr: [
          '会员186****8182  刚刚邀请了2位金主会员将获得100元',
          '会员137****8170  刚刚邀请了1位金主会员将获得50元',
          '会员159****2653  刚刚邀请了1位金主会员将获得50元',
          '会员159****2653  刚刚邀请了2位金主会员将获得100元',
          '会员157****4248  刚刚邀请了1位金主会员将获得50元',
          '会员130****9541  刚刚邀请了1位金主会员将获得50元',
          '会员152****5523  刚刚邀请了1位金主会员将获得50元',
          '会员151****9002  刚刚邀请了1位金主会员将获得50元',
          '会员177****0054  刚刚邀请了1位金主会员将获得50元',
          '会员150****2112  刚刚邀请了2位金主会员将获得100元',
          '会员130****5055  刚刚邀请了1位金主会员将获得50元',
          '会员177****4880  刚刚邀请了2位金主会员将获得100元',
          '会员152****1770  刚刚邀请了2位金主会员将获得100元',
          '会员159****9247  刚刚邀请了1位金主会员将获得50元',
          '会员152****3735  刚刚邀请了2位金主会员将获得100元',
          '会员151****3661  刚刚邀请了2位金主会员将获得100元',
          '会员152****3724  刚刚邀请了1位金主会员将获得50元',
          '会员182****8172  刚刚邀请了2位金主会员将获得100元',
          '会员152****2220  刚刚邀请了1位金主会员将获得50元',
          '会员152****7288  刚刚邀请了2位金主会员将获得100元',
          '会员158****3262  刚刚邀请了1位金主会员将获得50元',
          '会员135****0485  刚刚邀请了2位金主会员将获得100元',
          '会员187****7114  刚刚邀请了2位金主会员将获得100元',
          '会员177****2325  刚刚邀请了1位金主会员将获得50元',
          '会员131****8897  刚刚邀请了2位金主会员将获得100元',
          '会员137****8927  刚刚邀请了1位金主会员将获得50元',
          '会员135****3000  刚刚邀请了1位金主会员将获得50元',
          '会员133****5899  刚刚邀请了2位金主会员将获得100元',
          '会员136****2306  刚刚邀请了1位金主会员将获得50元',
          '会员188****6516  刚刚邀请了2位金主会员将获得100元'
        ],
        text: ''
      }
    },
    methods: {
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
        console.log(this.text)
      }
    },
    mounted () {
      this.randFun()
      this.randtext()
      console.log(this.arr)
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
</style>
