import Vue from 'vue'
import App from './App'
import MpvueRouterPatch from 'mpvue-router-patch'
import store from './vuex/store'

Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false
App.mpType = 'app'
App.store = store
const app = new Vue(App)
app.$mount()
