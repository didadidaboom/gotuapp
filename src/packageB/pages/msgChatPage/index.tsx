import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, ScrollView } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import { Dialog,Toast } from "@nutui/nutui-react-taro";
import "@nutui/nutui-react-taro/dist/style.css";

import "./index.scss";
import NavBar from "../../../components/customnavbar";
import MsgChatItem from "../../../components/msgChatItem";
import systemTool from "../../../utils/systemTool";
const { navBarHeight, navBarExtendHeight } = systemTool.getSystemInfo();
const { tabbarHeight } = systemTool.height;


type PageStateProps = {
  store: {
    msgChatStore: {
      initData: Function;
      clearData: Function;
      msgList: any;
      msgIntro: any;
      getMsgIntro: Function;
      getMsgList: Function;
      msgNotify_id: any;
      setMsgNotify: Function;
      sendActionMsg: Function;
      getFocuse: Function;
    };
    profileStore: {
      profile: any;
      initData: Function;
    };
    creditStore:{
      initData: Function;
      clearData: Function;
      creditGoods: any;
      consumeCredit: Function;
      earnCredit: Function;
      getOrderItem: Function;
      orderItem: any;
      selectedItem: any;
      buttongStatus: any;
      setButtongStatus: Function;
      onSubmmitPayment: Function;
      selectedActivity: any;
      doInitateAction: Function;
    };
  };
};

interface MsgChatPage {
  props: PageStateProps;
}

@inject("store")
@observer
class MsgChatPage extends Component {
  state={
    showToastA: false,
    toastA: {
      msg: "",
      type: "success",
      cover: true,
      duration: 5,
      closeOnOverlayClick: true,
      icon: "",
      center: true,
    },
    showToastB: false,
    toastB: {
      msg: "",
      type: "success",
      cover: true,
      duration: 2,
      closeOnOverlayClick: true,
      icon: "",
      center: true,
    },
  }


  onLoad(options) {
    console.log("onLoad", options);
    const { msgChatStore } = this.props.store;
    if (options.msgNotify_id) {
      msgChatStore.setMsgNotify(options.msgNotify_id);
    }
  }

  componentDidMount() {
    const { msgChatStore,profileStore, creditStore } = this.props.store;
    msgChatStore.setMsgNotify(1111);
    let res = msgChatStore.initData();
    if (!res) {
      console.log("数据初始化失败");
    }
    if(!profileStore.profile.id){
      profileStore.initData();
      // console.log("profileStore.profile", profileStore.profile.credit)
    }
    if(!creditStore.creditGoods){
      creditStore.initData();
    }
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  toNextPage = () => {
    Taro.navigateTo({
      url: "/pages/loginPage/index",
    });
  };

  toShopPage = () => {
    Taro.navigateTo({
      url: "/packageA/pages/shopPage/index",
    });
  };

  toSkipPage = () => {
    Taro.navigateTo({
      url: "/pages/index/index",
    });
  };

  gobackClick = () => {
    const pages = Taro.getCurrentPages();
    if (pages.length >= 2) {
      Taro.navigateBack({
        delta: 1,
      });
    } else {
      Taro.navigateTo({
        url: "/pages/index/index",
      });
    }
  };

  consumeCredit = (msgitem) => {
    let item = msgitem.action
    const { creditStore, profileStore,msgChatStore } = this.props.store;
    // console.log("item in consumeCredit", item)
    // console.log("profileStore.profile.credit", profileStore.profile)
    if (
      profileStore.profile.credit &&
      profileStore.profile.credit > item.actionCredit
    ) {
      /**
       * 分别处理不同活动类型，进入不同流程
       * actionId:1,
          actionName:"赏一下",
          actionDescription:"活动介绍：随机赏赐他一些积分，会在聊天窗口通知他，引起他的注意",
          actionRule: "活动规则：每天只能赏一次，每次赏赐的积分随机，最多不超过10积分",
          actionType:10007,
          actionCredit:10,
       */
      // 赏一个
      if(item.actionType===10007){
        console.log("赏一个")
        //获取小于 item.actionCredit 的随机数
        let randomCredit = Math.floor(Math.random() * item.actionCredit);
        // 1.扣除积分
        creditStore.consumeCredit(item.actionType,randomCredit)
        // 2.增加赏赐记录,并在数据库自动建立消息通知
        let data ={
          target_user_id: msgChatStore.msgIntro.user_id,
          credit_goods_type: item.actionType,
          extraContent: msgitem.extraContent,
          credit : randomCredit,
        }
        creditStore.doInitateAction(data)

        var toastA = this.state.toastA;
        toastA.msg = "打赏成功，赏赐积分："+randomCredit
        this.setState({
          showToastA: true,
          toastA,
        });
      }
      // 发起心跳活动
      if(item.actionType===10008){
        console.log("发起心跳活动",msgitem.extraContent)

        // 1.扣除积分
        creditStore.consumeCredit(item.actionType,item.actionCredit)
        // 2.增加赏赐记录
        let data ={
          target_user_id: msgChatStore.msgIntro.user_id,
          credit_goods_type: item.actionType,
          extraContent: msgitem.extraContent,
        }
        creditStore.doInitateAction(data)
        var toastA = this.state.toastA;
        toastA.msg = '发起活动成功，消耗积分'+item.actionCredit
        this.setState({
          showToastA: true,
          toastA,
        });
      }
      // 加速出现在他的问答中
      if(item.actionType===10002){
        console.log("加速出现在他的问答中")
        // 1.扣除积分
        creditStore.consumeCredit(item.actionType,item.actionCredit)
        // 2.增加赏赐记录
        let data ={
          target_user_id: msgChatStore.msgIntro.user_id,
          credit_goods_type: item.actionType,
        }
        creditStore.doInitateAction(data)
        var toastA = this.state.toastA;
        toastA.msg = '发起活动成功，消耗积分'+item.actionCredit
        this.setState({
          showToastA: true,
          toastA,
        });
      }
      // 加速出现在指定学校所有人的问答中
      // if(item.actionType===10001){
      //   console.log("加速出现在指定学校所有人的问答中")
      // }
      // 加速出现在所有人问题中
      // if(item.actionType===10009){
      //   console.log("加速出现在所有人问题中")
      // }
      // 加他入我的随机问答中
      if(item.actionType===10010){
        console.log("加他入我的随机问答中")
        // 1.扣除积分
        creditStore.consumeCredit(item.actionType,item.actionCredit)
        // 2.增加赏赐记录
        let data ={
          target_user_id: msgChatStore.msgIntro.user_id,
          credit_goods_type: item.actionType,
        }
        creditStore.doInitateAction(data)
        var toastA = this.state.toastA;
        toastA.msg = '发起活动成功，消耗积分'+item.actionCredit
        this.setState({
          showToastA: true,
          toastA,
        });
      }
      // 看他的名字
      if(item.actionType===10011){
        console.log("看他的名字")
        // 1.扣除积分
        creditStore.consumeCredit(item.actionType,item.actionCredit)
        // 2.增加赏赐记录
        let data ={
          target_user_id: msgChatStore.msgIntro.user_id,
          credit_goods_type: item.actionType,
        }
        creditStore.doInitateAction(data)
        var toastA = this.state.toastA;
        toastA.msg = '发起活动成功，消耗积分'+item.actionCredit
        this.setState({
          showToastA: true,
          toastA,
        });
      }
    } else {
      //credit不足 去充值
      Dialog.open("lackCredit", {
        title: "积分不足",
        content: "您的积分不足，请前往充值？",
        onConfirm: () => {
          this.toShopPage();
          Dialog.close("lackCredit");
        },
        onCancel: () => {
          Dialog.close("lackCredit");
        },
      });
    }
  };

  sendActionMsg=(action)=>{
    const { msgChatStore } = this.props.store;
    msgChatStore.sendActionMsg(action);

    var toastB = this.state.toastB;
    toastB.msg = "请下拉到底部，查看具体规则";
      this.setState({
        showToastB: true,
        toastB,
      });
  }

  getFocuse=()=>{
    console.log("getFocuse")
    const { msgChatStore } = this.props.store;
    let user_id = msgChatStore.msgIntro.user_id;
    msgChatStore.getFocuse(user_id);
    msgChatStore.msgIntro.isFocused = !msgChatStore.msgIntro.isFocused;

  }

  render() {
    const { msgChatStore, profileStore } = this.props.store;

    return (
      <View
        className="w-full h-full opacity-95 bg-white flex-col justify-center items-center inline-flex"
        // style={{
        //   height: "100%",
        //   width: "100%",
        // }}
      >
        <View className="nav">
          <NavBar
            title={msgChatStore.msgIntro && msgChatStore.msgIntro.userName}
            background="rgba(0,0,0,0)"
            color="black"
            iconTheme="black"
            back
            // home
            onBack={this.gobackClick}
            // onHome={this.handlerGohomeClick}
            // extClass="lxy-navbar-extclass"
          />
        </View>
        <View
          className="Pagepart w-full h-full flex-col justify-center items-center inline-flex"
          style={{
            paddingTop: navBarHeight + navBarExtendHeight,
            // paddingBottom: tabbarHeight,
            // height: "100%",
            // width: "100%",
          }}
        >
          <View className="Msgpart w-full h-full flex-col justify-between items-center inline-flex">
            <View
              className="MsgScroll w-full h-full"
              style={{ padding: "0", overflowX: "hidden", overflowY: "auto" }}
            >
              <ScrollView scrollY id="scroll-view">
                {msgChatStore.msgIntro && msgChatStore.msgList.length>0 && (
                  <MsgChatItem
                    msgIntro={msgChatStore.msgIntro}
                    msgList={msgChatStore.msgList}
                    profile = {profileStore.profile}
                    onClick={this.sendActionMsg}
                    consumeCredit = {this.consumeCredit}
                    getFocuse = {this.getFocuse}
                  />
                )}
              </ScrollView>
            </View>
            <View
              id="bottom-h"
              className="Bottom w-full self-stretch px-4 pt-2 bg-white flex-col justify-center items-center flex"
              style={{ zIndex: "10000000000" }}
              // style={{position:"fixed",bottom:0}}
            >
              <View className="Typeinput self-stretch px-4 py-1.5 bg-gray-50 rounded-3xl justify-start items-center inline-flex">
                <View className="Content text-center text-gray-300 text-sm font-semibold font-['Inter'] leading-tight">
                  更多功能等待开放中
                </View>
              </View>
              <View
                className="Background w-full self-stretch px-4 py-1.5 rounded-3xl justify-start items-center inline-flex"
                style={{ height: tabbarHeight }}
              />
            </View>
          </View>
          <Toast
            msg={this.state.toastA.msg}
            visible={this.state.showToastA}
            type={this.state.toastA.type}
            cover={this.state.toastA.cover}
            closeOnOverlayClick={this.state.toastA.closeOnOverlayClick}
            onClose={() => {
              this.setState({ showToastA: false });
            }}
          />
          <Toast
            msg={this.state.toastB.msg}
            visible={this.state.showToastB}
            type={this.state.toastB.type}
            cover={this.state.toastB.cover}
            closeOnOverlayClick={this.state.toastB.closeOnOverlayClick}
            onClose={() => {
              this.setState({ showToastB: false });
            }}
          />
          <Dialog id="lackCredit" />
        </View>
      </View>
    );
  }
}

export default MsgChatPage;
