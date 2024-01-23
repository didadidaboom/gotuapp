import { action, observable } from 'mobx'

class NavibarStore{
  @observable selected = 1;

  @action
  changeNavIndex(index) {
    this.selected = index;
  }

}



const navibarStore = new NavibarStore();

export default navibarStore
