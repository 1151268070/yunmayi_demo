<template>
  <div>
    <div style="position: relative; margin-bottom: 30px;">
    <van-cell-group>
      <van-field
        v-model='username'
        required
        clearable
        label="用户名/手机"
        placeholder="请输入用户名"
      />

      <van-field
        v-model='password'
        type="password"
        center
        clearable
        label="密 码"
        placeholder="请输入密码"
        required
        border="false"
        use-button-slot
      />
    </van-cell-group>
    <van-button class="i_button" slot="button" size="small" type="primary" @click="verification">发送验证码</van-button>
    </div>
    <van-button size="large" type="danger">登录</van-button>
    <p class="text">  温馨提示:批发用户请用批发账号登录,未注册云蚂蚁账号的手机号,登录时将自动注册,且代表您已同意 <span style="color: red;" @click="go">《云蚂蚁用户协议》</span></p>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        username: null,
        password: null
      }
    },
    methods: {
      verification () {
        console.log(1111)
      },
      go () {
        this.$router.push('/pages/explain')
      }
    }
  }
</script>

<style scoped>
  .i_button{
    position: absolute;
    right: 2%;
    bottom: 7%;
    z-index: 999;
  }
  .text{
    font-size: 28rpx;
  }
</style>
