// vuex/store.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  cur: [
    {id: 2, price: 30, imgUrl: 'http://i8.yunmayi.com/upload/2018/11/29/4c03843b417ea4abad1d2272fd41071f.pngXXXXX!!!!!_160x160.jpg', name: '手工麦芽糖营养糕核桃红枣枸杞黑芝麻麦芽营养糕批发SC7', num: 1}
  ],
  checkboxList: [],
  isCheckedAll: false
}
const actions = {
  // initCur ({commit}) {
  //   setTimeout(() => {
  //     let results = JSON.parse(localStorage.cur || '[]')
  //     commit('initCur', results)
  //   }, 300)
  // },
  onClickButton ({commit}, params) {
    setTimeout(() => {
      let result = 'ok'
      if (result === 'ok') {
        commit('onClickButton', params)
      }
    }, 300)
  },
  addNum ({commit}, params) {
    setTimeout(() => {
      let result = 'ok'
      if (result === 'ok') {
        commit('addNum', params)
      }
    }, 300)
  },
  reduceNum ({commit}, params) {
    setTimeout(() => {
      let result = 'ok'
      if (result === 'ok') {
        commit('reduceNum', params)
      }
    }, 300)
  },
  onChange ({commit}, params) {
    let result = 'ok'
    if (result === 'ok') {
      commit('onChange', params)
    }
  },
  onCheckedAll ({commit}, params) {
    let result = 'ok'
    if (result === 'ok') {
      commit('onCheckedAll', params)
    }
  }
}
const mutations = {
  initCur (state, cur) {
    state.cur = cur
  },
  onClickButton (state, { id, name, imgUrl, price }) {
    let isOwn = state.cur.some(function (item) {
      if (item.id === id) {
        item.num++
        return true
      } else {
        return false
      }
    })
    if (!isOwn) {
      state.cur.push({ id, name, price, imgUrl, num: 1 })
    }
  },
  addNum (state, { id }) {
    var len = state.cur.length
    for (var i = 0; i < len; i++) {
      if (state.cur[i].id === id) {
        state.cur[i].num++
      }
    }
  },
  reduceNum (state, { id }) {
    var len = state.cur.length
    for (var i = 0; i < len; i++) {
      if (state.cur[i].id === id) {
        state.cur[i].num--
        if (state.cur[i].num < 1) {
          state.cur[i].num = 1
        }
      }
    }
  },
  onChange (state) {
    var len = state.cur.length
    var list = state.checkboxList.length
    if (len === list) {
      state.isCheckedAll = true
    } else {
      state.isCheckedAll = false
    }
  },
  onCheckedAll (state) {
    if (state.isCheckedAll) {
      state.checkboxList = []
      state.cur.forEach((item) => {
        state.checkboxList.push(item.id)
      })
    } else {
      state.checkboxList = []
    }
  }
}
const getters = {
  getGoodsmoney (state) {
    let money = 0
    state.cur.forEach((item) => {
      state.checkboxList.filter((checkId) => {
        if (checkId === item.id) {
          money += item.price * item.num
        }
      })
    })
    return money
  },
  getGoodtotal (state) {
    let money = 0
    state.cur.forEach((item) => {
      money += item.price * item.num
    })
    return money
  }
}
const store = new Vuex.Store({
  actions,
  state,
  mutations,
  getters
})
export default store
