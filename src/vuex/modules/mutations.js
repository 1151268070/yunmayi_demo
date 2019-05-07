export default {
  onClickButton (state, info) {
    let isOwn = state.cur.some(function (item) {
      if (item.id === info.id) {
        item.num++
        return true
      } else {
        return false
      }
    })
    if (!isOwn) {
      state.cur.push({id: info.id, name: info.name, price: info.price, imgUrl: info.imgUrl, num: 1})
    }
  },
  addNum (state, index) {
    state.cur[index].num++
  },
  reduceNum (state, index) {
    if (state.cur[index].num === 0) {
      state.cur[index].num = 1
    } else {
      state.cur[index].num--
    }
  }
}
