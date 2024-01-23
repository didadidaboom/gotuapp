import Taro from "@tarojs/taro";
import { Component } from "react";
import { View } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import {
  Picker,
  ActionSheet,
  Overlay,
  Loading,
  Toast,
  Dialog,
  ConfigProvider,
} from "@nutui/nutui-react-taro";

import "@nutui/nutui-react-taro/dist/style.css";
import NavBar from "../../../components/customnavbar";
import IconFont from "../../../components/iconfont";
import PayCreditItem from "../../../components/payCreditItem";
// import Random3InAnswerItem from "../../components/random3InAnswer";
import "./index.scss";
import systemTool from "../../../utils/systemTool";
const { navBarHeight, navBarExtendHeight } = systemTool.getSystemInfo();
const { tabbarHeight } = systemTool.height;

type PageStateProps = {
  store: {
    creditStore: {
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
    };
    profileStore: {
      profile: any;
      initData: Function;
    };
    activityStore: {
      activityTypeList: any;
      getActivityType: Function;
      defaultValue: any;
      saveMembershipOrder: Function;
    };
  };
};

interface ShopPage {
  props: PageStateProps;
}

@inject("store")
@observer
class ShopPage extends Component {
  state = {
    isVisible: false,
    payVisible: false,
    WrapperStyle: {
      display: "flex",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    //activity picker
    isActivityVisible: false,
    baseDefault: "",
    defaultValue: [0],
  };

  componentDidMount() {
    const { creditStore, profileStore } = this.props.store;
    creditStore.initData();
    if (!profileStore.profile.id) {
      profileStore.initData();
    }
  }

  componentWillUnmount() {
    // const { creditStore } = this.props.store;
    // creditStore.clearData();
  }

  componentDidShow() {}

  componentDidHide() {}

  toHerPhonePage = () => {
    Taro.redirectTo({
      url: "/packageA/pages/herPhonePage/index",
    });
  };

  toHomePage = () => {
    Taro.switchTab({
      url: "/pages/index/index",
    });
  };

  toSharePage = () => {
    Taro.navigateTo({
      url: "/packageA/pages/loadingPage/index",
    });
  };

  handlerGohomeClick = () => {
    Taro.switchTab({
      url: "/pages/index/index",
    });
  };

  consumeCredit = async (item) => {
    const { creditStore, profileStore } = this.props.store;
    if (
      profileStore.profile.credit &&
      profileStore.profile.credit > item.credit
    ) {
      //上弹确认消费，选择活动对象
      creditStore.selectedActivity = item;
      await this.getActivityType(item.type);
    } else {
      //credit不足 去充值
      Dialog.open("lackCredit", {
        title: "积分不足",
        content: "您的积分不足，请前往充值？",
        onConfirm: () => {
          this.goChargeCredit();
          Dialog.close("lackCredit");
        },
        onCancel: () => {
          Dialog.close("lackCredit");
        },
      });
    }
  };

  earnCredit = (item) => {
    const { creditStore } = this.props.store;
    creditStore.selectedActivity = item;

    //判断消费类型和跳转，完成任务才进行积分增加
    Dialog.open("earnCredit", {
      title: "领取任务",
      content: item.name,
      onConfirm: () => {
        Dialog.close("earnCredit");
        if (item.type === "10003") {
          this.toHerPhonePage();
        }
        if (item.type === "10004") {
          this.toSharePage();
        }
        if (item.type === "10005") {
          this.toHomePage();
        }
        if (item.type === "10006") {
          this.toSharePage();
        }
      },
      onCancel: () => {
        Dialog.close("earnCredit");
      },
    });

    // if (profileStore.profile.credit) {
    //   profileStore.profile.credit = profileStore.profile.credit + item.credit;
    //   creditStore.earnCredit(item.id, item.credit);
    // }
  };

  goChargeCredit = () => {
    const { creditStore } = this.props.store;
    let res = creditStore.getOrderItem();
    if (res) {
      this.setState({
        isVisible: true,
      });
    }
  };

  onChangeSelectedItem = (item) => {
    const { creditStore } = this.props.store;
    creditStore.selectedItem = item;
    creditStore.setButtongStatus("preparing");
  };

  onSubmmitPayment = async () => {
    console.log("submmit ");
    const { creditStore } = this.props.store;
    if (creditStore.selectedItem) {
      creditStore.setButtongStatus("paying");
      this.setState({
        payVisible: true,
      });
      let res = await creditStore.onSubmmitPayment();
      console.log("res page", res);
      if (res) {
        // console.log("success");
        this.setState({
          payVisible: false,
          isVisible: false,
        });
        creditStore.setButtongStatus("preparing");
        Toast.show("successPayment", {
          title: "支付成功",
          type: "success",
          duration: 3,
          position: "center",
          icon: "success",
          size: "large",
          lockScroll: true,
          onClose: () => {
            console.log("close");
          },
        });
        //更新profile
        const { profileStore } = this.props.store;
        profileStore.profile.credit =
          profileStore.profile.credit + creditStore.selectedItem.credit;
      } else {
        this.setState({
          payVisible: false,
          isVisible: false,
        });
        creditStore.setButtongStatus("preparing");
        // console.log("fail");
        Toast.show("failPayment", {
          title: "支付失败",
          type: "fail",
          duration: 3,
          position: "center",
          icon: "fail",
          size: "large",
          lockScroll: true,
          onClose: () => {
            console.log("close");
          },
        });
      }
    }
  };

  // random in 3 answers
  getActivityType = async (type) => {
    const { activityStore } = this.props.store;
    await activityStore.getActivityType(type);
    this.setActivityVisible(true);
  };

  setActivityVisible = (visible) => {
    this.setState({
      isActivityVisible: visible,
    });
  };

  confirmActivitySchoolPicker = (list, values) => {
    // console.log("values", values);
    // console.log("list", list);
    const { activityStore, creditStore, profileStore } = this.props.store;
    let item = creditStore.selectedActivity;
    if (item.status === "consume") {
      profileStore.profile.credit = profileStore.profile.credit - item.credit;
      creditStore.consumeCredit(item.type, item.credit);
      activityStore.saveMembershipOrder(item, values[0]);
      creditStore.selectedActivity = null;
    }
  };

  onClickSelectedToDetail = (item) => {
    item.selected = 1;
  };

  onClickRemoveDetail = (item) => {
    item.selected = null;
  };

  render() {
    const { creditStore, profileStore, activityStore } = this.props.store;

    return (
      <View className="w-full h-full flex-col justify-center items-center inline-flex">
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
          <View className="Shoppart w-full h-full self-stretch flex-col justify-start items-center gap-4 inline-flex">
            <View className="Middle w-full h-full self-stretch grow shrink basis-0 flex-col justify-start items-center flex">
              <View className="Coinpart w-full self-stretch h-32 flex-col justify-start items-center flex">
                <View className="MiddleTitle w-full self-stretch h-9 pl-2 py-2 flex-col justify-center items-center gap-2.5 flex">
                  <View className="Content drop-shadow-xl self-stretch text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                    你当前的积分为
                  </View>
                </View>
                <View className="CoinContent drop-shadow-2xl w-full self-stretch py-2 justify-center items-center gap-1 inline-flex">
                  <IconFont name="icon-credit" size={36} />
                  <View className="Content text-center text-orange-500 text-2xl font-semibold font-['Inter'] leading-loose">
                    {profileStore.profile.credit
                      ? profileStore.profile.credit
                      : 0}
                  </View>
                </View>
                <View
                  className="Rapidgetcredit drop-shadow-2xl px-4 py-1.5 bg-orange-300 rounded-3xl justify-center items-center gap-2.5 inline-flex"
                  hoverClass="Text-hover scale-90"
                  hoverStayTime={100}
                  onClick={this.goChargeCredit}
                >
                  <View className="Content text-center text-white text-base font-semibold font-['Inter'] leading-normal">
                    去充值
                  </View>
                </View>
              </View>
              <View className="Activitypart w-full h-full self-stretch flex-col justify-start items-center flex">
                <View className="MiddleTitle w-full self-stretch h-9 py-2 flex-col justify-center items-center gap-2.5 flex">
                  <View className="Content drop-shadow-xl self-stretch text-orange-400 text-sm font-semibold font-['Inter'] leading-tight">
                    热门活动：
                  </View>
                </View>
                <View className="Selections w-full h-full self-stretch flex-col justify-center items-center gap-2 flex">
                  {creditStore.creditGoods &&
                    creditStore.creditGoods.slice().map((item, index) => {
                      return (
                        item.status === "consume" && (
                          <View className="Selection drop-shadow-2xl w-full self-stretch py-2 bg-white rounded-lg justify-center items-center inline-flex">
                            <View className="Contentpartinsimple grow shrink basis-0 px-2 flex-col justify-center items-center gap-2 inline-flex">
                              <View className="Content self-stretch text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                                {item.name}
                              </View>
                              {item.selected === null ? (
                                <View
                                  className="Description self-stretch text-center text-gray-400 text-sm font-semibold font-['Inter'] leading-tight"
                                  hoverClass="View-hover scale-90"
                                  hoverStayTime={100}
                                  onClick={this.onClickSelectedToDetail.bind(
                                    this,
                                    item
                                  )}
                                >
                                  展开详细了解
                                </View>
                              ) : (
                                <>
                                  <View
                                    className="Description self-stretch text-gray-400 text-sm font-semibold font-['Inter'] leading-tight"
                                    onClick={this.onClickRemoveDetail.bind(
                                      this,
                                      item
                                    )}
                                  >
                                    {item.description}
                                  </View>
                                  <View
                                    className="Rule self-stretch text-gray-400 text-sm font-semibold font-['Inter'] leading-tight"
                                    hoverClass="View-hover scale-90"
                                    hoverStayTime={100}
                                    onClick={this.onClickRemoveDetail.bind(
                                      this,
                                      item
                                    )}
                                  >
                                    {item.rule}
                                  </View>
                                </>
                              )}
                            </View>
                            <View
                              className="Button drop-shadow-xl px-4 py-1.5 bg-orange-300 rounded-3xl shadow justify-center items-center flex"
                              hoverClass="View-hover scale-90"
                              hoverStayTime={100}
                              onClick={this.consumeCredit.bind(this, item)}
                            >
                              <View className="Content text-center text-white text-lg font-bold font-['Inter'] leading-7">
                                -{item.credit}
                              </View>
                              {/* <View className="Bag justify-center items-center gap-2.5 flex" /> */}
                              {/* <IconFont name="icon-credit" size={36} /> */}
                            </View>
                          </View>
                        )
                      );
                    })}
                </View>
              </View>
              <View className="Earnpart w-full h-full self-stretch flex-col justify-start items-center flex">
                <View className="MiddleTitle self-stretch h-9 py-2 flex-col justify-center items-start gap-2.5 flex">
                  <View className="Content drop-shadow-xl text-orange-400 text-sm font-semibold font-['Inter'] leading-tight">
                    获取更多积分：
                  </View>
                </View>
                <View className="Selections w-full self-stretch h-full flex-col justify-center items-center gap-2 flex">
                  {creditStore.creditGoods &&
                    creditStore.creditGoods.slice().map((item, index) => {
                      return (
                        item.status === "earn" && (
                          <View className="Selection drop-shadow-2xl w-full self-stretch py-2 bg-white rounded-lg justify-center items-center inline-flex">
                            <View className="Contentpartinsimple grow shrink basis-0 px-2 flex-col justify-center items-center gap-2 inline-flex">
                              <View className="Content self-stretch text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                                {item.name}
                              </View>
                              {item.selected === null ? (
                                <View
                                  className="Description self-stretch text-center text-gray-400 text-sm font-semibold font-['Inter'] leading-tight"
                                  hoverClass="View-hover scale-90"
                                  hoverStayTime={100}
                                  onClick={this.onClickSelectedToDetail.bind(
                                    this,
                                    item
                                  )}
                                >
                                  展开详细了解
                                </View>
                              ) : (
                                <>
                                  <View
                                    className="Description self-stretch text-gray-400 text-sm font-semibold font-['Inter'] leading-tight"
                                    onClick={this.onClickRemoveDetail.bind(
                                      this,
                                      item
                                    )}
                                  >
                                    {item.description}
                                  </View>
                                  <View
                                    className="Rule self-stretch text-gray-400 text-sm font-semibold font-['Inter'] leading-tight"
                                    hoverClass="View-hover scale-90"
                                    hoverStayTime={100}
                                    onClick={this.onClickRemoveDetail.bind(
                                      this,
                                      item
                                    )}
                                  >
                                    {item.rule}
                                  </View>
                                </>
                              )}
                            </View>
                            <View
                              className="Button drop-shadow-xl px-4 py-1.5 bg-orange-300 rounded-3xl shadow justify-center items-center flex"
                              hoverClass="View-hover scale-90"
                              hoverStayTime={100}
                              onClick={this.earnCredit.bind(this, item)}
                            >
                              <View className="Content text-center text-white text-lg font-bold font-['Inter'] leading-7">
                                +{item.credit}
                              </View>
                              {/* <View className="Bag justify-center items-center gap-s2.5 flex" /> */}
                              {/* <IconFont name="icon-credit" size={36} /> */}
                            </View>
                          </View>
                        )
                      );
                    })}
                </View>
              </View>
            </View>
          </View>
          <ActionSheet
            visible={this.state.isVisible}
            title={`积分充值`}
            cancelText={`取消`}
            onSelect={() => {
              this.setState({ isVisible: false });
            }}
            onCancel={() => this.setState({ isVisible: false })}
          >
            {/* {creditStore.orderItem && profileStore.profile.credit!=null && (
              <PayCreditItem
                onClick={this.toPayCreditGoods}
                orderItem={creditStore.orderItem}
                credit={profileStore.profile.credit}
              />
            )} */}
            {!!!creditStore.orderItem && (
              <View>
                <ConfigProvider theme={{ nutuiLoadingTextColor: "#F97316" }}>
                  <Loading>加载中</Loading>
                </ConfigProvider>
              </View>
            )}
            {creditStore.orderItem && (
              <PayCreditItem
                onClick={this.onSubmmitPayment}
                orderItem={creditStore.orderItem.slice()}
                selectedItem={creditStore.selectedItem}
                credit={profileStore.profile.credit}
                onChangeSelectedItem={this.onChangeSelectedItem}
                buttongStatus={creditStore.buttongStatus}
              />
            )}
          </ActionSheet>
          <Picker
            visible={this.state.isActivityVisible}
            title="选择活动对象"
            options={
              activityStore.activityTypeList
                ? activityStore.activityTypeList
                : []
            } //数据源
            defaultValue={activityStore.defaultValue}
            onConfirm={(list, values) =>
              this.confirmActivitySchoolPicker(list, values)
            }
            onClose={this.setActivityVisible.bind(this, false)}
          />
          <Overlay visible={this.state.payVisible}>
            <View className="wrapper" style={this.state.WrapperStyle}>
              <Loading direction="vertical">支付中</Loading>
            </View>
          </Overlay>
          <Toast id="failPayment" />
          <Toast id="successPayment" />
          <Dialog id="lackCredit" />
          <Dialog id="earnCredit" />
        </View>
      </View>
    );
  }
}

export default ShopPage;
