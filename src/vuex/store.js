// vuex/store.js
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './modules/actions'
import state from './modules/states'
import mutations from './modules/mutations'
Vue.use(Vuex)

const store = new Vuex.Store({
  actions,
  state,
  mutations
})
export default store
