<template>
  <div>
    <div class="item">
      <van-row>
        <van-col span="8" style="text-align: center;">
          <img src="http://admin.yunmayi.com/upload/2018/11/05/12c4239edb7efa26dae7c3873393d717.png" class="img" mode="widthFix">
        </van-col>
        <van-col span="14">
          <p class="state">物流状态：<span>正在派送</span></p>
          <p>快递：百世快递</p>
          <p>运单号：70270411841062</p>
        </van-col>
      </van-row>
    </div>
    <div style="padding: 16px;">
      <p style="border-bottom: 1px solid #ddd; padding-bottom: 10px; font-size: 16px;">物流追踪</p>
      <van-steps
        :steps="steps"
        :active="active"
        direction="vertical"
        active-color="#f44"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'logistics',
    data () {
      return {
        steps: [
          {
            text: '快件已发货',
            desc: '2019-05-05 10:00:01'
          },
          {
            text: '[城市]物流状态',
            desc: '2019-05-06 17:00:01'
          },
          {
            text: '[城市]物流状态',
            desc: '2019-05-06 19:00:01'
          }
        ]
      }
    }
  }
</script>

<style scoped>
.item{
  padding: 20px 0;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.item p{
  font-size: 12px;
  color: gray;
}
.item .state{
  font-size: 18px;
  color: #111111;
  margin-bottom: 10px;
}
.item .state>span{
  color: #ef473a;
}
.img{
  width: 80px;
}
</style>
