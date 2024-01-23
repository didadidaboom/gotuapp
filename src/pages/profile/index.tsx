import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, Text } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import { Button, Dialog } from "@nutui/nutui-react-taro";
import "@nutui/nutui-react-taro/dist/style.css";

import IconFont from "../../components/iconfont";
import withComponent from "../../components/generalComponent/mixin";
import { getRandomImagePath } from "../../utils/imageUtils";
import "./index.scss";
import LableItem from "../../components/labelItem";
import systemTool from "../../utils/systemTool";
const { navBarHeight, navBarExtendHeight } = systemTool.getSystemInfo();
const { tabbarHeight } = systemTool.height;

type PageStateProps = {
  store: {
    globalStore: {
      changeIndex: Function;
    };
    profileStore: {
      getProfile: Function;
      profile: any;
      initData: Function;
      clearData: Function;
    };
    creditStore: {
      creditGoods: any;
      initData: Function;
      clearData: Function;
    };
  };
};

interface Profile {
  props: PageStateProps;
}

@inject("store")
@observer
class Profile extends Component {
  componentDidMount() {
    const { profileStore, creditStore } = this.props.store;
    profileStore.initData();
    creditStore.initData();
    // 开启分享功能
    Taro.showShareMenu({
      withShareTicket: true,
    });
  }

  componentWillUnmount() {
    const { profileStore } = this.props.store;
    profileStore.clearData();
  }

  componentDidShow() {
    this.props.store.globalStore.changeIndex(2);
  }

  componentDidHide() {}

  toEditPage = () => {
    Taro.navigateTo({
      url: "../../packageB/pages/editPage/index",
    });
  };

  toShopPage = () => {
    Taro.navigateTo({
      url: "../../packageA/pages/shopPage/index",
    });
  };

  toHerPhonePage = () => {
    Taro.navigateTo({
      url: "../../packageA/pages/herPhonePage/index",
    });
  };

  toSkipPage = () => {
    Taro.switchTab({
      url: "/pages/index/index",
    });
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

  earnCredit = () => {
    const { creditStore } = this.props.store;
    let item = creditStore.creditGoods.filter(
      (item) => item.type === "10003"
    )[0];
    console.log("item = ", item);
    //判断消费类型和跳转，完成任务才进行积分增加
    Dialog.open("earnCredit", {
      title: "领取任务",
      content: item.name,
      onConfirm: () => {
        Dialog.close("earnCredit");
        this.toHerPhonePage();
      },
      onCancel: () => {
        Dialog.close("earnCredit");
      },
    });
  };

  render() {
    const { profileStore, creditStore } = this.props.store;
    // console.log("profileStore = ", profileStore.profile);

    return (
      <>
        <View className="w-full h-full flex-col justify-center items-center inline-flex">
          {/* <View className="nav">
            <NavBar
              title="个人"
              // background="rgba(0,0,0,0)"
              // background="#F97316"
              background="#FFF7ED"
              // color="#fff"
              color="#F97316"
              // color = "black"
              iconTheme="white"
              // back
              // home
              onBack={this.gobackClick}
              // onHome={this.handlerGohomeClick}
              // extClass="lxy-navbar-extclass"
            />
          </View> */}
          <View
            className="Pagepart w-full h-full px-4 py-2 flex-col justify-start items-center inline-flex"
            style={{
              paddingTop: navBarHeight + navBarExtendHeight,
              paddingBottom: tabbarHeight,
              // height: "100%",
              // width: "100%",
            }}
          >
            {profileStore.profile && (
              <View className="Profilepart w-full h-full rounded-tl-lg rounded-tr-lg flex-col justify-start items-center gap-4 inline-flex">
                <View className="Upper drop-shadow-2xl self-stretch w-full h-full p-4 bg-white flex-col justify-center items-center gap-2 rounded-lg flex">
                  <View className="AvatarPart self-stretch h-12 justify-center items-center gap-2 inline-flex">
                    <View
                      className="Avatar w-12 h-12 flex-col justify-center items-center inline-flex"
                      onClick={this.toEditPage}
                      hoverClass="View-hover scale-90"
                      hoverStayTime={100}
                    >
                      {!profileStore.profile.avatar ? (
                        <IconFont name="icon-cartoon-mine" size={48} />
                      ) : (
                        <IconFont
                          name={`icon-avatar-${profileStore.profile.avatar}`}
                          size={48}
                        />
                      )}
                      {/* <Image
                        className="Avatar w-12 h-12 rounded-full"
                        src={avatar}
                      /> */}
                    </View>
                    <View className="InfoRow w-64 self-stretch justify-around items-center flex">
                      {/* <View className="Review rounded-3xl flex-col justify-center items-center inline-flex">
                        <View className="Name justify-center items-center inline-flex">
                          <View className="Content drop-shadow-xl text-gray-500 text-base font-semibold font-['Inter'] leading-normal">
                            被浏览
                          </View>
                          <View className="View drop-shadow-xl px-0.5 py-0.5 justify-center items-center gap-2.5 flex">
                            <IconFont name="icon-view" size={16} />
                          </View>
                        </View>
                        <View className="Content drop-shadow-xl text-gray-500 text-base font-semibold font-['Inter'] leading-normal">
                          {profileStore.profile.viewCount}
                        </View>
                      </View> */}
                      <View className="Focused rounded-3xl flex-col justify-center items-center inline-flex">
                        <View className="Name justify-center items-center inline-flex">
                          <View className="Content drop-shadow-xl text-gray-500 text-base font-semibold font-['Inter'] leading-normal">
                            朋友
                          </View>
                          <View className="Focused drop-shadow-xl px-0.5 py-0.5 justify-center items-center gap-2.5 flex">
                            <IconFont name="icon-focused" size={16} />
                          </View>
                        </View>
                        <View className="Content drop-shadow-xl text-gray-500 text-base font-semibold font-['Inter'] leading-normal">
                          {profileStore.profile.focusedCount}
                        </View>
                      </View>
                      <View className="Flame rounded-3xl flex-col justify-center items-center inline-flex">
                        <View className="Name justify-center items-center inline-flex">
                          <View className="Content drop-shadow-xl text-gray-500 text-base font-semibold font-['Inter'] leading-normal">
                            热度
                          </View>
                          <View className="Hot drop-shadow-xl px-0.5 py-0.5 justify-center items-center gap-2.5 flex">
                            <IconFont
                              name={`icon-hot${profileStore.profile.hotClass}`}
                              size={16}
                            />
                          </View>
                        </View>
                        <View className="Content drop-shadow-xl text-gray-500 text-base font-semibold font-['Inter'] leading-normal">
                          {profileStore.profile.hotCount}
                        </View>
                      </View>
                    </View>
                  </View>
                  <View className="NameStatus self-stretch h-12 flex-col justify-center items-start flex">
                    <View className="Name rounded-3xl justify-start items-center inline-flex">
                      <View className="Content drop-shadow-xl text-gray-500 text-base font-semibold font-['Inter'] leading-normal">
                        {profileStore.profile.userName}
                      </View>
                    </View>
                    <View className="Status rounded-3xl justify-start items-center inline-flex">
                      <View className="Content drop-shadow-xl text-orange-300 text-xs font-semibold font-['Inter'] leading-none">
                        @{profileStore.profile.account}
                      </View>
                    </View>
                  </View>
                  <View className="Verified self-stretch h-20 flex-col justify-center items-start gap-2 flex">
                    {profileStore.profile.isFacial ? (
                      <View className="Facepart drop-shadow-xl justify-center items-center gap-0.5 inline-flex">
                        <View className="Face justify-center items-center gap-2.5 flex">
                          <IconFont name="icon-facial" size={18} />
                        </View>
                        <View className="Content text-orange-500 text-xs font-semibold font-['Inter'] leading-none">
                          账号已人脸识别认领
                        </View>
                      </View>
                    ) : (
                      <View className="Facepart drop-shadow-xl justify-center items-center gap-0.5 inline-flex">
                        <View className="Face justify-center items-center gap-2.5 flex">
                          <IconFont name="icon-facial-inactive" size={18} />
                        </View>
                        <View className="Content text-gray-400 text-xs font-semibold font-['Inter'] leading-none">
                          账号尚未人脸认证
                        </View>
                      </View>
                    )}
                    {profileStore.profile.isPhone ? (
                      <View className="Phonepart drop-shadow-xl justify-center items-center gap-0.5 inline-flex">
                        <View className="PhoneFill justify-center items-center gap-2.5 flex">
                          <IconFont name="icon-iPhone" size={18} />
                        </View>
                        <View className="Content text-orange-500 text-xs font-semibold font-['Inter'] leading-none">
                          账号已手机验证认领
                        </View>
                      </View>
                    ) : (
                      <View className="Phonepart drop-shadow-xl justify-center items-center gap-0.5 inline-flex">
                        <View className="PhoneFill justify-center items-center gap-2.5 flex">
                          <IconFont name="icon-iPhone-inactive" size={18} />
                        </View>
                        <View className="Content text-gray-400 text-xs font-semibold font-['Inter'] leading-none">
                          账号尚未手机验证
                        </View>
                      </View>
                    )}
                    {profileStore.profile.isWechat ? (
                      <View className="Wechatpart drop-shadow-xl justify-center items-center gap-0.5 inline-flex">
                        <View className="Wechat justify-center items-center gap-2.5 flex">
                          <IconFont name="icon-wechat" size={18} />
                        </View>
                        <View className="Content text-orange-500 text-xs font-semibold font-['Inter'] leading-none">
                          账号已微信授权认领
                        </View>
                      </View>
                    ) : (
                      <View className="Wechatpart drop-shadow-xl justify-center items-center gap-0.5 inline-flex">
                        <View className="Wechat justify-center items-center gap-2.5 flex">
                          <IconFont name="icon-wechat-inactive" size={18} />
                        </View>
                        <View className="Content text-gray-400 text-xs font-semibold font-['Inter'] leading-none">
                          账号尚未微信授权认证
                        </View>
                      </View>
                    )}
                  </View>
                  <View className="Grade w-full h-6 justify-between items-center inline-flex">
                    <View className="Left justify-start items-center gap-2 flex">
                      <View
                        className="Universitypart drop-shadow-xl justify-center items-center gap-0.5 flex"
                        onClick={this.toEditPage}
                        hoverClass="scale-90"
                        hoverStayTime={100}
                      >
                        <View className="University flex-col justify-start items-start gap-2.5 inline-flex">
                          <IconFont name="icon-school" size={18} />
                        </View>
                        <View className="Content text-orange-500 text-xs font-semibold font-['Inter'] leading-none">
                          {profileStore.profile.schoolName
                            ? profileStore.profile.schoolName
                            : "点击设置"}
                        </View>
                      </View>
                      <View
                        className="Gradepart drop-shadow-xl justify-center items-center gap-0.5 flex"
                        onClick={this.toEditPage}
                        hoverClass="scale-90"
                        hoverStayTime={100}
                      >
                        <View className="Grade flex-col justify-start items-start gap-2.5 flex">
                          <IconFont name="icon-grade" size={18} />
                        </View>
                        <View className="Content text-orange-500 text-xs font-semibold font-['Inter'] leading-none">
                          {profileStore.profile.gradeClass
                            ? profileStore.profile.gradeClass
                            : "点击设置"}
                        </View>
                      </View>
                    </View>
                    <View
                      className="Edit w-20 p-0.5 justify-end items-center gap-2.5 flex"
                      onClick={this.toEditPage}
                      hoverClass="scale-90"
                      hoverStayTime={100}
                    >
                      <IconFont name="icon-edit" size={18} />
                    </View>
                  </View>
                </View>
                <View className="Middle self-stretch w-full h-full flex-col justify-center items-center flex">
                  <View className="Creditpart self-stretch h-14 flex-col justify-center items-center flex">
                    <View
                      className="Current drop-shadow-2xl self-stretch h-14 px-4 bg-white justify-center items-center rounded-lg inline-flex"
                      onClick={this.toShopPage}
                      hoverClass="View-hover scale-90"
                      hoverStayTime={100}
                    >
                      <View className="Leftcontent drop-shadow-xl grow shrink basis-0 self-stretch justify-center items-center gap-0.5 flex">
                        <View className="Bag justify-center items-center gap-2.5 flex">
                          <IconFont name="icon-credit" size={18} />
                        </View>
                        <View className="Content w-32 text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                          你拥有的积分为
                        </View>
                      </View>
                      <View className="Rightcontent grow shrink basis-0 h-14 justify-center items-center flex">
                        <View className="Content drop-shadow-xl grow shrink basis-0 text-right text-orange-500 text-sm font-semibold font-['Inter'] leading-tight">
                          {profileStore.profile.credit
                            ? profileStore.profile.credit
                            : 0}
                        </View>
                        <View className="ArrowRight py-1.5 justify-center items-center gap-2.5 flex">
                          <IconFont name="icon-arrow-right" size={18} />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View className="Bottom self-stretch w-full h-full pb-20 flex-col justify-start items-center gap-2 flex">
                  <View className="Statisticpart self-stretch w-full h-full flex-col justify-center items-center flex">
                    <View className="Title self-stretch justify-start items-center gap-0.5 inline-flex">
                      <View className="Content drop-shadow-xl text-gray-400 text-sm font-semibold font-['Inter'] leading-tight">
                        基于你圈子统计（近7天）
                      </View>
                    </View>
                    <View className="Current drop-shadow-2xl self-stretch w-full h-full px-4 bg-white justify-between items-center rounded-lg inline-flex">
                      <View className="Leftcontent drop-shadow-xl w-64 self-stretch justify-start items-center gap-0.5 flex">
                        <View className="Bag justify-center items-center gap-2.5 flex">
                          <IconFont
                            name={`icon-hot${profileStore.profile.hotClass}`}
                            size={16}
                          />
                        </View>
                        <View className="Content text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                          你的受欢迎程度排名为
                        </View>
                      </View>
                      <View className="Rightcontent grow shrink basis-0 h-14 justify-center items-center flex">
                        <View className="Content grow shrink basis-0 text-right text-orange-500 text-sm font-semibold font-['Inter'] leading-tight">
                          {profileStore.profile.rankPicked7days
                            ? profileStore.profile.rankPicked7days
                            : "暂无"}
                        </View>
                      </View>
                    </View>
                    <View className="Underlinepart self-stretch px-2 justify-center items-center gap-2.5 inline-flex">
                      <View className="Underline grow shrink basis-0 h-px bg-gray-300 shadow" />
                    </View>
                    <View className="Current drop-shadow-2xl self-stretch w-full h-full px-4 bg-white justify-between items-center rounded-lg inline-flex">
                      <View className="Leftcontent drop-shadow-xl w-64 self-stretch justify-start items-center gap-0.5 flex">
                        <View className="Bag justify-center items-center gap-2.5 flex">
                          <IconFont name="icon-gift" size={18} />
                        </View>
                        <View className="Content grow shrink basis-0 text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                          朋友为你付出的积分排名
                        </View>
                      </View>
                      <View className="Rightcontent grow shrink basis-0 h-14 justify-center items-center flex">
                        <View className="Content drop-shadow-xl grow shrink basis-0 text-right text-orange-500 text-sm font-semibold font-['Inter'] leading-tight">
                          {profileStore.profile.rankCreditPicked7days
                            ? profileStore.profile.rankCreditPicked7days
                            : "暂无"}
                        </View>
                      </View>
                    </View>
                  </View>
                  <View className="Statisticpart self-stretch w-full h-full flex-col justify-center items-center flex">
                    <View className="Title w-full h-full self-stretch justify-start items-center gap-0.5 inline-flex">
                      <View className="Content drop-shadow-xl text-gray-400 text-sm font-semibold font-['Inter'] leading-tight">
                        基于你圈子统计
                      </View>
                    </View>
                    <View className="Current drop-shadow-2xl self-stretch w-full h-full px-4 bg-white justify-between items-center rounded-lg inline-flex">
                      <View className="Leftcontent drop-shadow-xl w-64 self-stretch justify-start items-center gap-0.5 flex">
                        <View className="Bag justify-center items-center gap-2.5 flex">
                          <IconFont
                            name={`icon-hot${profileStore.profile.hotClass}`}
                            size={16}
                          />
                        </View>
                        <View className="Content text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                          你的受欢迎程度排名为
                        </View>
                      </View>
                      <View className="Rightcontent grow shrink basis-0 h-14 justify-center items-center flex">
                        <View className="Content drop-shadow-xl grow shrink basis-0 text-right text-orange-500 text-sm font-semibold font-['Inter'] leading-tight">
                          {profileStore.profile.rankPicked
                            ? profileStore.profile.rankPicked
                            : "暂无"}
                        </View>
                      </View>
                    </View>
                    <View className="Underlinepart w-full h-full self-stretch px-2 justify-center items-center gap-2.5 inline-flex">
                      <View className="Underline grow shrink basis-0 h-px bg-gray-300 shadow" />
                    </View>
                    <View className="Current drop-shadow-2xl self-stretch w-full h-full px-4 bg-white justify-between items-center rounded-lg inline-flex">
                      <View className="Leftcontent drop-shadow-xl w-64 self-stretch justify-start items-center gap-0.5 flex">
                        <View className="Bag justify-center items-center gap-2.5 flex">
                          <IconFont name="icon-gift" size={18} />
                        </View>
                        <View className="Content text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                          朋友为你付出的积分排名
                        </View>
                      </View>
                      <View className="Rightcontent grow shrink basis-0 h-14 justify-center items-center flex">
                        <View className="Content drop-shadow-xl grow shrink basis-0 text-right text-orange-500 text-sm font-semibold font-['Inter'] leading-tight">
                          {profileStore.profile.rankCreditPicked
                            ? profileStore.profile.rankCreditPicked
                            : "暂无"}
                        </View>
                      </View>
                    </View>
                  </View>
                  <View className="LabelLast7days self-stretch pb-20 w-full flex-col justify-start items-center gap-2 flex">
                    <View className="MiddleTitle self-stretch h-9 py-2 flex-col justify-center items-center gap-2.5 flex">
                      <View className="Content drop-shadow-xl self-stretch text-gray-400 text-sm font-semibold font-['Inter'] leading-tight">
                        根据近7天热度互动，AI猜测朋友眼中你的标签如下：
                      </View>
                    </View>
                    <View className="Labelpart w-full h-full self-stretch justify-center items-start gap-4 inline-flex">
                      {profileStore.profile.labels7days.length > 0 ? (
                        <LableItem labels={profileStore.profile.labels7days} />
                      ) : (
                        <View className="Invitationpart w-full self-stretch h-20 flex-col justify-center items-center gap-5 flex">
                          <View className="Remind flex-col justify-center items-center gap-3 flex">
                            <View className="Content text-center text-orange-400 text-xs font-semibold font-['Inter'] leading-none">
                              没有更多互动记录，"邀请好友"互动增加热度标签哟;"新建好友"增加互动对象
                            </View>
                          </View>
                          <View className="Buttonpart w-100 self-stretch justify-center items-center gap-4 inline-flex">
                            {creditStore.creditGoods && (
                              <View
                                className="Add drop-shadow-2xl grow shrink basis-0 h-10 bg-white rounded-3xl justify-center items-center flex"
                                hoverClass="View-hover scale-90"
                                hoverStayTime={100}
                                onClick={this.earnCredit}
                              >
                                <View className="Content text-center text-orange-500 text-lg font-bold font-['Inter'] leading-7">
                                  新建朋友
                                </View>
                              </View>
                            )}
                            <View
                              className="Invite drop-shadow-2xl grow shrink basis-0 h-10  bg-white rounded-3xl justify-center items-center flex"
                              hoverClass="View-hover scale-90"
                            >
                              <Button
                                className=""
                                // hoverClass="Button-hover scale-90"
                                hoverStayTime={100}
                                openType="share"
                                style={{
                                  border: "none",
                                  width: "100%",
                                  height: "100%",
                                  margin: "0",
                                  padding: "0",
                                }}
                              >
                                <Text className="Content text-center text-orange-500 text-lg font-bold font-['Inter'] leading-7">
                                  邀请朋友
                                </Text>
                              </Button>
                            </View>
                          </View>
                        </View>
                      )}
                    </View>
                    <View className="MiddleTitle self-stretch h-9 py-2 flex-col justify-center items-center gap-2.5 flex">
                      <View className="Content self-stretch text-gray-400 text-sm font-semibold font-['Inter'] leading-tight">
                        根据的热度互动，AI推断朋友眼中你的标签如下：
                      </View>
                    </View>
                    <View className="label w-full h-full self-stretch justify-center items-start gap-4 inline-flex">
                      {profileStore.profile.labels.length > 0 ? (
                        <LableItem labels={profileStore.profile.labels} />
                      ) : (
                        <View className="Invitationpart w-full self-stretch h-20 flex-col justify-center items-center gap-5 flex">
                          <View className="Remind flex-col justify-center items-center gap-3 flex">
                            <View className="Content text-center text-orange-400 text-xs font-semibold font-['Inter'] leading-none">
                              没有更多互动记录，"邀请好友"互动增加热度标签哟;"新建好友"增加互动对象
                            </View>
                          </View>
                          <View className="Buttonpart self-stretch justify-center items-center gap-4 inline-flex">
                            {creditStore.creditGoods && (
                              <View
                                className="Add drop-shadow-2xl grow shrink basis-0 h-10 bg-white rounded-3xl justify-center items-center flex"
                                hoverClass="View-hover scale-90"
                                hoverStayTime={100}
                                onClick={this.earnCredit}
                              >
                                <View className="Content text-center text-orange-500 text-lg font-bold font-['Inter'] leading-7">
                                  新建朋友
                                </View>
                              </View>
                            )}
                            <View
                              className="Invite drop-shadow-2xl grow shrink basis-0 h-10 bg-white rounded-3xl justify-center items-center flex"
                              hoverClass="View-hover scale-90"
                            >
                              <Button
                                className=""
                                // hoverClass="Button-hover scale-90"
                                hoverStayTime={100}
                                openType="share"
                                style={{
                                  border: "none",
                                  width: "100%",
                                  height: "100%",
                                  margin: "0",
                                  padding: "0",
                                }}
                              >
                                <Text className="Content text-center text-orange-500 text-lg font-bold font-['Inter'] leading-7">
                                  邀请朋友
                                </Text>
                              </Button>
                            </View>
                          </View>
                        </View>
                      )}
                    </View>
                  </View>
                </View>
              </View>
            )}
            <Dialog id="earnCredit" />
          </View>
        </View>
      </>
    );
  }
}

export default Profile;
