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
  initCur ({commit}, params) {
    setTimeout(() => {
      let result = 'ok'
      if (result === 'ok') {
        commit('initCur', params)
      }
    }, 300)
  },
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
  },
  del ({commit}, params) {
    let result = 'ok'
    if (result === 'ok') {
      commit('del', params)
    }
  }
}
const mutations = {
  initCur (state) {
    state.cur.forEach((item) => {
      item.checked = false
    })
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
  //  单选
  onChange (state, j) {
    state.cur[j].checked = !state.cur[j].checked
    if (state.cur[j].checked) {
      state.checkboxList.push(state.cur[j].id)
    } else {
      for (var i = 0; i < state.checkboxList.length; i++) {
        if (state.checkboxList[i] === state.cur[j].id) {
          state.checkboxList.splice(i, 1)
        }
      }
    }
    if (state.cur.every(item => item.checked) === true) {
      state.isCheckedAll = true
    } else {
      state.isCheckedAll = false
    }
  },
  // 全选
  onCheckedAll (state) {
    state.isCheckedAll = !state.isCheckedAll
    state.checkboxList = []
    state.cur.forEach((item) => {
      if (state.isCheckedAll) {
        item.checked = true
        state.checkboxList.push(item.id)
      } else {
        item.checked = false
        state.checkboxList = []
      }
    })
  },
  // 删除
  del (state) {
    console.log(111)
    for (var i = 0; i < state.cur.length; i++) {
      state.checkboxList.filter((Id) => {
        if (Id === state.cur[i].id) {
          state.cur.splice(i, 1)
          state.checkboxList.splice(i, 1)
        }
      })
    }
  }
}
const getters = {
  getGoodmoney (state) {
    let money = 0
    state.cur.forEach((item) => {
      state.checkboxList.filter((Id) => {
        if (Id === item.id) {
          money += item.price * item.num
        }
      })
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
