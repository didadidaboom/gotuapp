import Taro from "@tarojs/taro";
import { Component } from "react";
import { View } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import { Dialog } from "@nutui/nutui-react-taro";
import "@nutui/nutui-react-taro/dist/style.css";

import { getRandomImagePath } from "../../utils/imageUtils";
import "./index.scss";
import AnswerItem from "../../components/answerItem";
import WaitingItem from "../../components/waitingItem";
import LoadingItem from "../../components/loadingItem";
import LoadingCreditItem from "../../components/loadingCredit";
import systemTool from "../../utils/systemTool";
const { navBarHeight, navBarExtendHeight } = systemTool.getSystemInfo();
const { tabbarHeight } = systemTool.height;

type PageStateProps = {
  store: {
    globalStore: {
      changeIndex: Function;
    };
    questionStore: {
      initPollData: Function;
      getCurrentQuestionId: Function;
      startCountdown: Function;
      saveAnsweredQuestion: Function;
      setIsWaitingPoll: Function;
      saveAnswer: Function;
      getAnswerList: Function;
      clearData: Function;
      resetSelectedAnswer: Function;
      getExposed: Function;
      setSelectedAnswer: Function;
      setExpose: Function;
      resetExpose: Function;
      setIsShuffle: Function;
      getQustionList: Function;
      questionList: any;
      current: any;
      answerList: any;
      exposedAnswer: any;
      expose: any;
      selected: any;
      isShuffle: true;
      tmpAnswer: any;
      isWaitingPoll: any;
      endTime: any;
      timeLeft: any;
      jumpQuickStart: Function;
    };
    creditStore: {
      initData: Function;
      clearData: Function;
      creditGoods: any;
      getOrderItem: Function;
      orderItem: any;
      consumeCredit: Function;
      getCreditProduct: Function;
      creditProducts: any;
    };
    profileStore: {
      profile: any;
    };
  };
};

interface Index {
  props: PageStateProps;
}

@inject("store")
@observer
class Index extends Component {
  onLoad(options) {
    console.log("onLoad", options);
  }

  componentDidMount() {
    const { questionStore, creditStore } = this.props.store;
    questionStore.initPollData();
    creditStore.initData();
    // 开启分享功能
    Taro.showShareMenu({
      withShareTicket: true,
    });
  }

  componentWillUnmount() {
    const { questionStore } = this.props.store;
    questionStore.clearData();
  }

  componentDidShow() {
    this.props.store.globalStore.changeIndex(0);
  }

  componentDidHide() {}

  setbaseDefault = () => {};

  toNextPage = () => {
    Taro.navigateTo({
      url: "/pages/genderPage/index",
    });
  };

  toSkipPage = () => {
    Taro.switchTab({
      url: "/pages/index/index",
    });
  };

  toShopPage = () => {
    Taro.navigateTo({
      url: "/packageA/pages/shopPage/index",
    });
  };

  toSkipQustion = async () => {
    // console.log("skip to next")
    const { questionStore } = this.props.store;
    ++questionStore.current;
    if (questionStore.current == 10) {
      questionStore.current = 0;
      questionStore.setIsWaitingPoll("55");
      await questionStore.saveAnsweredQuestion();
      return;
    }
    let qustion_id = questionStore.getCurrentQuestionId();
    if (qustion_id) {
      await questionStore.getAnswerList(qustion_id);
    }
  };

  getShuffle = () => {
    // console.log("shuffle .. ");
    const { questionStore } = this.props.store;
    questionStore.getExposed();
  };

  sumbmitAnswer = (data) => {
    const { questionStore } = this.props.store;
    questionStore.saveAnswer(data);
    this.toSkipQustion();
  };

  onShareAppMessage(res) {
    const { profileStore } = this.props.store;
    const user_id = profileStore.profile.id ? profileStore.profile.id : "new"; // 获取当前用户的 user_id
    const randomImagePath = getRandomImagePath();
    if (res.from === "button") {
      return {
        title: `她的小纸条`,
        path: `/pages/index/index?scene=${user_id}`, // 将 user_id 作为参数传递给被分享者
        imageUrl: `../../assets/bg/${randomImagePath}`,
      };
    } else {
      return {
        title: "她的小纸条",
        path: `/pages/index/index?scene=${user_id}`,
        imageUrl: `../../assets/bg/${randomImagePath}`,
      };
    }
  }

  passWaitingTime = async () => {
    console.log("pressed ");
    const { creditStore,questionStore } = this.props.store;
    await creditStore.getCreditProduct();
    const products = creditStore.creditProducts;
    if (products) {
      const actionType = products["10012"].type;
      const actionCredit = products["10012"].credit;
      Dialog.open("pass", {
        title: "再玩一次",
        content: "“快速跳过”将消耗" + actionCredit + "个积分，继续跳过吗",
        onConfirm: () => {
          creditStore.consumeCredit(actionType, actionCredit);
          questionStore.jumpQuickStart();
          Dialog.close("pass");
        },
        onCancel: () => {
          Dialog.close("pass");
        },
      });
    }
  };

  render() {
    const { questionStore, creditStore } = this.props.store;

    return (
      <>
        <View
          className={
            questionStore.isWaitingPoll === "22" ||
            questionStore.isWaitingPoll === "55"
              ? "w-full h-full opacity-95	bg-orange-50 flex-col justify-center items-center inline-flex"
              : "w-full h-full opacity-95	bg-orange-500 flex-col justify-center items-center inline-flex"
          }
        >
          {/* <View className="nav">
            <NavBar
              // title="问答"
              background="rgba(0,0,0,0)"
              // color="#fff"
              color="white"
              iconTheme="white"
              back
              // home
              onBack={this.gobackClick}
              // onHome={this.handlerGohomeClick}
              extClass="lxy-navbar-extclass"
              //   renderCenter={
              //     <View className="nav-bar-tab">
              //       <View className="nav-bar-tab-content">
              //         <View className="nav-bar-tab-content-text">关注</View>
              //         <View className="nav-bar-tab-icon iconfont-caret-up icon-caret-up"></View>
              //       </View>
              //       <View className="nav-bar-tab-content">
              //         <View className='nav-bar-tab-content-text-selected'>推荐</View>
              //         <View className="nav-bar-tab-icon iconfont-caret-up icon-caret-up"></View>
              //       </View>
              //     </View>
              //   }
            />
          </View> */}
          <View
            className="Pagepart w-full h-full flex-col justify-between items-center inline-flex"
            style={{
              paddingTop: navBarHeight + navBarExtendHeight,
              paddingBottom: tabbarHeight,
              // height: "100%",
              // width: "100%",
            }}
          >
            {questionStore.isWaitingPoll === "11" &&
              questionStore.questionList.length > 0 &&
              questionStore.questionList.slice().map((item, index) => {
                return (
                  index === questionStore.current && (
                    <AnswerItem
                      key={index}
                      item={item}
                      index={index}
                      onClickSkip={this.toSkipQustion}
                      answers={questionStore.tmpAnswer.slice()}
                      onClickShuffle={this.getShuffle}
                      isShuffle={questionStore.isShuffle}
                      onClick={this.sumbmitAnswer}
                    />
                  )
                );
              })}
            {questionStore.isWaitingPoll === "22" && (
              <WaitingItem
                timeLeft={questionStore.timeLeft}
                onClick={this.passWaitingTime}
              />
            )}
            {questionStore.isWaitingPoll === "55" &&
              creditStore.creditGoods && (
                <LoadingCreditItem
                  creditGoods={creditStore.creditGoods}
                  onClick={this.toShopPage}
                />
              )}
            {questionStore.isWaitingPoll != "11" &&
              questionStore.isWaitingPoll != "22" &&
              questionStore.isWaitingPoll != "55" && <LoadingItem />}
          </View>
        </View>
        <Dialog id="pass" />
      </>
    );
  }
}

export default Index;
