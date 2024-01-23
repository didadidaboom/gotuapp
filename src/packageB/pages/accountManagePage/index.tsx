import Taro from "@tarojs/taro";
import { Component } from "react";
import { View} from "@tarojs/components";
import { observer, inject } from "mobx-react";
import { Switch, Dialog } from "@nutui/nutui-react-taro";
import "@nutui/nutui-react-taro/dist/style.css";

import NavBar from "../../../components/customnavbar";
import IconFont from "../../../components/iconfont";
import "./index.scss";
import systemTool from "../../../utils/systemTool";
const { navBarHeight, navBarExtendHeight } = systemTool.getSystemInfo();
const { tabbarHeight } = systemTool.height;

type PageStateProps = {
  store: {
    accountManageStore: {
      initData: Function;
      accountManage: any;
      setReduceNotify: Function;
      setLeaveQuestion7days: Function;
      setLeave: Function;
      delAccount: Function;
      resetBlockList: Function;
      restorePurchase: Function;
    };
  };
};

interface AccountManagePage {
  props: PageStateProps;
}

@inject("store")
@observer
class AccountManagePage extends Component {
  state = {
    selected: null,
  };
  componentDidMount() {
    const { accountManageStore } = this.props.store;
    accountManageStore.initData();
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  toNextPage = () => {
    Taro.navigateTo({
      url: "/pages/gradeYearPage/index",
    });
  };

  toSkipPage = () => {
    Taro.switchTab({
      url: "/pages/gradeYearPage/index",
    });
  };

  handlerGohomeClick = () => {
    Taro.switchTab({
      url: "/pages/index/index",
    });
  };

  onChangeReduceNotifyStatus=(value, event)=>{
    const { accountManageStore } = this.props.store;
    accountManageStore.setReduceNotify(value)
  }

  onChangeLeaveQuestion7daysStatus=(value, event)=>{
    const { accountManageStore } = this.props.store;
    accountManageStore.setLeaveQuestion7days(value)
  }

  onChangeLeaveStatus=(value, event)=>{
    const { accountManageStore } = this.props.store;
    accountManageStore.setLeave(value)
  }

  resetBlockList=()=>{
    const { accountManageStore } = this.props.store;
    Dialog.open('resetBlockList', {
      title: '重置拉黑列表',
      content: '确定要清空拉黑列表吗？',
      onConfirm: () => {
        accountManageStore.resetBlockList()
        Dialog.close('resetBlockList')
      },
      onCancel: () => {
        Dialog.close('resetBlockList')
      },
    })
  }

  restorePurchase=()=>{
    const { accountManageStore } = this.props.store;
    Dialog.open('restorePurchase', {
      title: '恢复购买',
      content: '必须同一个注册手机号才能恢复，确定恢复购买积分吗？',
      onConfirm: () => {
        accountManageStore.restorePurchase()
        Dialog.close('restorePurchase')
      },
      onCancel: () => {
        Dialog.close('restorePurchase')
      },
    })
  }

  delAccount=()=>{
    const { accountManageStore } = this.props.store;
    Dialog.open('delAccount', {
      title: '删除账号',
      content: '将清除个人的所有互动记录，除购买积分外，其他记录无法恢复，确定要本账号吗？',
      onConfirm: () => {
        accountManageStore.delAccount()
        Dialog.close('delAccount')
      },
      onCancel: () => {
        Dialog.close('delAccount')
      },
    })
  }

  render() {
    const { accountManageStore } = this.props.store;
    // console.log(
    //   "accountManageStore.accountManage = ",
    //   accountManageStore.accountManage
    // );

    return (
      <View className="w-full h-full opacity-95 bg-orange-50 flex-col justify-center items-center inline-flex">
        <View className="nav">
          <NavBar
            // title="gpage"
            background="rgba(0,0,0,0)"
            color="#fff"
            iconTheme="#F97316"
            back
            home
            onBack={this.gobackClick}
            onHome={this.handlerGohomeClick}
            // extClass="lxy-navbar-extclass"
          />
        </View>
        <View
          className="Pagepart w-full h-full px-4 pt-2 flex-col justify-start items-center inline-flex"
          style={{
            paddingTop: navBarHeight + navBarExtendHeight,
            paddingBottom: tabbarHeight,
            // height: "100%",
            // width: "100%",
          }}
        >
          <View className="Accountpart w-full h-full flex-col justify-center items-center gap-4 inline-flex">
            <View className="Middle w-full h-full self-stretch grow shrink basis-0 flex-col justify-start items-center flex">
              <View className="NotifyTitle w-full self-stretch h-9 pl-2 py-2 flex-col justify-center items-start gap-2.5 flex">
                <View className="Content drop-shadow-xl text-center text-gray-400 text-sm font-semibold font-['Inter'] leading-tight">
                  通知设置
                </View>
              </View>
              <View className="Notifysetting w-full self-stretch h-48 py-2 flex-col justify-start items-center flex">
                <View className="Reducenotify w-full self-stretch h-14 flex-col justify-center items-center flex">
                  <View className="Current drop-shadow-2xl w-full h-14 px-4 bg-white rounded-lg justify-between items-center inline-flex">
                    <View className="Leftcontent w-full self-stretch justify-start items-center gap-2 flex">
                      <IconFont name="icon-reduce-notify" size={16} />
                      <View className="Content text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                        减少通知
                      </View>
                    </View>
                    <View className="Rightcontent drop-shadow-xl self-stretch flex-col justify-center items-center inline-flex">
                      {accountManageStore.accountManage && (
                        <Switch
                          defaultChecked={
                            accountManageStore.accountManage.is_reduce_notify}
                            onChange={(value, event) => this.onChangeReduceNotifyStatus(value, event)}
                        />
                      )}
                      {!accountManageStore.accountManage && (
                        <Switch defaultChecked disabled />
                      )}
                    </View>
                  </View>
                  <View className="Underlinepart self-stretch px-2 justify-center items-center gap-2.5 inline-flex">
                    <View className="Underline grow shrink basis-0 h-px bg-gray-300 shadow" />
                  </View>
                </View>
                <View className="Leave7days w-full self-stretch h-14 flex-col justify-center items-center flex">
                  <View className="Current drop-shadow-2xl w-full self-stretch h-14 px-4 bg-white rounded-lg justify-between items-center inline-flex">
                    <View className="Leftcontent w-full self-stretch justify-start items-center gap-2 flex">
                      <IconFont name="icon-waiting7days" size={16} />
                      <View className="Content text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                        暂时不出现在问答中（7天有效）
                      </View>
                    </View>
                    <View className="Rightcontent drop-shadow-xl self-stretch justify-center items-center flex">
                      {accountManageStore.accountManage && (
                        <Switch
                          defaultChecked={
                            accountManageStore.accountManage
                              .is_leave_question7days
                          }
                          onChange={(value, event) => this.onChangeLeaveQuestion7daysStatus(value, event)}
                        />
                      )}
                      {!accountManageStore.accountManage && (
                        <Switch defaultChecked disabled />
                      )}
                    </View>
                  </View>
                  <View className="Underlinepart w-full self-stretch px-2 justify-center items-center gap-2.5 inline-flex">
                    <View className="Underline grow shrink basis-0 h-px bg-gray-300 shadow" />
                  </View>
                </View>
                <View className="SelectionTemporary w-full self-stretch h-14 flex-col justify-center items-center flex">
                  <View className="Current drop-shadow-2xl w-full self-stretch h-14 px-4 bg-white rounded-lg justify-between items-center inline-flex">
                    <View className="Leftcontent w-full self-stretch justify-start items-center gap-2 flex">
                      <IconFont name="icon-tmp-leave" size={16} />
                      <View className="Content text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                        暂时离开
                      </View>
                    </View>
                    <View className="Rightcontent drop-shadow-xl self-stretch justify-center items-center flex">
                      {accountManageStore.accountManage && (
                        <Switch
                          defaultChecked={
                            accountManageStore.accountManage.is_leave
                          }
                          onChange={(value, event) => this.onChangeLeaveStatus(value, event)}
                        />
                      )}
                      {!accountManageStore.accountManage && (
                        <Switch defaultChecked disabled />
                      )}
                    </View>
                  </View>
                </View>
              </View>
              <View className="ManageTitle w-full h-12 py-2 flex-col justify-center items-center gap-2.5 flex">
                <View className="Content drop-shadow-xl self-stretch text-gray-400 text-sm font-semibold font-['Inter'] leading-tight">
                  账号管理
                </View>
                <View className="Selection" />
              </View>
              <View className="Accountmanagement self-stretch h-60 flex-col justify-center items-center gap-1 flex">
                <View
                  className="Selection drop-shadow-2xl self-stretch h-14 bg-white rounded-lg flex-col justify-center items-center flex"
                  hoverClass="View-hover scale-90"
                  hoverStayTime={100}
                  onClick={this.resetBlockList}
                >
                  <View className="Content self-stretch text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                    重置拉黑列表
                  </View>
                </View>
                <View
                  className="Selection drop-shadow-2xl self-stretch h-14 bg-white rounded-lg flex-col justify-center items-center flex"
                  hoverClass="View-hover scale-90"
                  hoverStayTime={100}
                  onClick={this.restorePurchase}
                >
                  <View className="Content self-stretch text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                    恢复购买
                  </View>
                </View>
                <View
                  className="Selection drop-shadow-2xl self-stretch h-14 bg-white rounded-lg flex-col justify-center items-center flex"
                  hoverClass="View-hover scale-90"
                  hoverStayTime={100}
                  onClick={this.delAccount}
                >
                  <View className="Content self-stretch text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                    删除账号
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Dialog id="resetBlockList" />
          <Dialog id="restorePurchase" />
          <Dialog id="delAccount" />
        </View>
      </View>
    );
  }
}

export default AccountManagePage;
