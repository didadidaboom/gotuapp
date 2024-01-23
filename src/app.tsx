import { Component, PropsWithChildren } from 'react'
import { Provider } from 'mobx-react'

import loginStore from "./store/login";
import globalStore from "./store/globalData";
import navibarStore from "./store/navbar";
import registerStore from './store/register';
import questionStore from './store/question';
import notificationStore from './store/notification';
import profileStore from './store/profile';
import accountManageStore from './store/accountManage';
import creditStore from './store/credit';
import activityStore from './store/activity';
import msgChatStore from './store/msgChat';

import './app.scss'

const store = {
  loginStore,
  globalStore,
  navibarStore,
  registerStore,
  questionStore,
  notificationStore,
  profileStore,
  accountManageStore,
  creditStore,
  activityStore,
  msgChatStore,
}

class App extends Component<PropsWithChildren> {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
