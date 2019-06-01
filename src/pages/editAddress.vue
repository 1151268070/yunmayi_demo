<template>
  <div>
    <div style="padding: 20rpx;">
      <van-cell-group>
        <van-field
          :value="list.addresseeName"
          placeholder="收货人"
          @change="getName"
        />
        <van-field
          type="number"
          :value="list.addresseePhone"
          placeholder="手机号码"
          @change="getPhone"
        />
        <van-cell :title="list.province + ' ' + list.city + ' ' + list.area" is-link  @click="getAddress"/>
        <van-field
          type="textarea"
          placeholder="详细地址：如道路、门牌号、小区、楼栋号、单元式等"
          :value="list.text"
          autosize="true"
          @change="setText"
        >
        </van-field>
      </van-cell-group>
    </div>
    <van-button class="van-button" size="large" type="danger" @click="editor({list, down})">保存</van-button>
    <van-popup :show="show" @close="onClose" position="bottom">
      <div style="width: 100%; height: 500px;">
        <p>添加地区</p>
        <van-area :area-list="areaList" @confirm="affirm" @cancel="onClose" :value="setAddress"/>
      </div>
    </van-popup>
    <van-dialog id="van-dialog" />
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    name: 'editAddress',
    data () {
      return {
        down: null,
        list: {},
        show: false,
        setAddress: null
      }
    },
    methods: {
      getAddress () {
        this.show = true
      },
      getName ({mp}) {
        const {detail} = mp
        this.list.addresseeName = detail
        console.log(this.down)
      },
      getPhone ({mp}) {
        const {detail} = mp
        this.list.addresseePhone = detail
      },
      setText ({mp}) {
        const {detail} = mp
        this.list.text = detail
        this.list.addressDetail = this.list.province + ' ' + this.list.city + ' ' + this.list.area + ' ' + this.list.text
      },
      onClose () {
        this.show = false
      },
      affirm ({mp}) {
        const {detail} = mp
        this.setAddress = detail
        this.list.province = this.setAddress.values[0].name
        this.list.city = this.setAddress.values[1].name
        this.list.area = this.setAddress.values[2].name
        this.show = false
      },
      init () {
        this.list = {}
        this.list = this.$store.state.site[this.down]
      },
      ...mapActions(['editor'])
    },
    computed: {
      ...mapState(['site', 'areaList'])
    },
    mounted () {
      this.down = this.$root.$mp.query.down
      this.init()
    }
  }
</script>

<style scoped>

</style>
