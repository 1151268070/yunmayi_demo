<template>
    <div>
      <div class="front">
        <van-row>
          <van-col span="12">
            <p>共{{cur.length}}件商品</p>
          </van-col>
          <van-col span="12" style="text-align: right">
            <van-button type="danger" size="mini" class="s-button">管理</van-button>
          </van-col>
        </van-row>
      </div>
      <div v-if="!cur.length">购物车空空的</div>
      <div v-else class="list">
        <van-checkbox-group>
          <div v-for="(item, index) in cur" :key="index">
          <van-checkbox>
            <van-card
              :title="item.name"
              :price="item.price"
              :thumb="item.imgUrl"
            >
              <view slot="tags">
                <span>红色</span>
                <span>M</span>
              </view>
              <view slot="footer">
                <van-stepper min="1" :value="item.num" integer @plus="addNum(index)" @minus="reduceNum(index)"/>
              </view>
            </van-card>
          </van-checkbox>
          </div>
        </van-checkbox-group>
      </div>
    </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    name: 'cart',
    data () {
      return {

      }
    },
    methods: {
      ...mapActions(['addNum', 'reduceNum'])
    },
    computed: {
      ...mapState(['cur'])
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
</style>
