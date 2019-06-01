<template>
  <div>
    <div style="padding: 20rpx;">
      <van-cell-group>
        <van-field
          :value="name"
          placeholder="收货人"
          @change="getName"
        />
        <van-field
          type="number"
          :value="phone"
          placeholder="手机号码"
          @change="getPhone"
        />
        <van-cell :title="province ? province + ' '+ city + ' ' + area : '所在地区'" is-link  @click="getAddress"/>
        <van-field
          type="textarea"
          placeholder="详细地址：如道路、门牌号、小区、楼栋号、单元式等"
          :value="text"
          autosize="true"
          @change="setText"
        >
        </van-field>
      </van-cell-group>
    </div>
    <van-button class="van-button" size="large" type="danger" @click="save({addresseeName: Name, addresseePhone: phone, addressDetail: addressDetail, city: city, province: province, area: area, text: text})">保存</van-button>
    <van-popup :show="show" @close="onClose" position="bottom">
      <div style="width: 100%; height: 500px;">
        <p>添加地区</p>
        <van-area :area-list="areaList" @confirm="affirm" @cancel="onCancel" :value="setAddress"/>
      </div>
    </van-popup>
    <van-dialog id="van-dialog" />
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  export default {
    name: 'address',
    data () {
      return {
        Name: '',
        phone: '',
        show: false,
        setAddress: null,
        province: '', // 省,
        city: '', // 市
        area: '', // 区
        text: '', // 详细地址,
        addressDetail: '' // 全部地址
      }
    },
    methods: {
      ...mapActions(['save']),
      getAddress () {
        this.show = true
      },
      onClose () {
        this.show = false
      },
      getName ({mp}) {
        const {detail} = mp
        this.Name = detail
      },
      getPhone ({mp}) {
        const {detail} = mp
        this.phone = detail
      },
      affirm ({mp}) {
        const {detail} = mp
        this.setAddress = detail
        this.province = this.setAddress.values[0].name
        this.city = this.setAddress.values[1].name
        this.area = this.setAddress.values[2].name
        this.show = false
      },
      onCancel () {
        this.show = false
      },
      setText ({mp}) {
        const {detail} = mp
        this.text = detail
        this.addressDetail = this.province + ' ' + this.city + ' ' + this.area + ' ' + this.text
      },
      init () {
        setTimeout(() => {
          this.province = ''
          this.city = ''
          this.area = ''
          this.phone = ''
          this.text = ''
          this.Name = ''
        })
      }
    },
    computed: {
      ...mapState(['areaList'])
    },
    onShow () {
      this.init()
    }
  }
</script>

<style scoped>
.van-button{
  width: 100%;
  position: fixed;
  bottom: 0
}
</style>
