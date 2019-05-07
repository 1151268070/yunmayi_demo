export default {
  onClickButton ({commit}, params) {
    commit('onClickButton', params)
  },
  addNum ({commit}, params) {
    commit('addNum', params)
  },
  reduceNum ({commit}, params) {
    commit('reduceNum', params)
  }
}
