import { observable } from 'mobx'

const globalStore = observable({
  selected: 0,

  changeIndex(index) {
    this.selected = index;
  },

})

export default globalStore
