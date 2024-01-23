import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, Text, Image, Button } from "@tarojs/components";
import { observer, inject } from "mobx-react";

import withComponent from "../../../components/generalComponent/mixin";
import { getRandomImagePath } from "../../../utils/imageUtils";
import "./index.scss";
import logo from "../../../assets/logo/GOTU_v5.png";
import systemTool from "../../../utils/systemTool";
const { navBarHeight, navBarExtendHeight } = systemTool.getSystemInfo();
const { tabbarHeight } = systemTool.height;

type PageStateProps = {
  store: {
    profileStore: {
      profile: any;
    };
  };
};

interface LoadingPage {
  props: PageStateProps;
}

@inject("store")
@observer
class LoadingPage extends Component {
  componentDidMount() {
    // 开启分享功能
    Taro.showShareMenu({
      withShareTicket: true,
    });
  }

  componentWillUnmount() {}

  componentDidShow() {}

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

  toHomePage = () => {
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

  render() {
    return (
      <>
        <View className="w-full h-full opacity-95	bg-orange-500 flex-col justify-center items-center inline-flex">
          {/* <View className="nav">
          <NavBar
            // title="gpage"
            background="rgba(0,0,0,0)"
            color="#fff"
            iconTheme="white"
            back
            // home
            onBack={this.gobackClick}
            // onHome={this.handlerGohomeClick}
            // extClass="lxy-navbar-extclass"
          />
        </View> */}
          <View
            className="Pagepart w-full h-full flex-col justify-center items-center inline-flex"
            style={{
              paddingTop: navBarHeight + navBarExtendHeight,
              paddingBottom: tabbarHeight,
              // height: "100%",
              // width: "100%",
            }}
          >
            <View className="Sharepart w-full h-full px-4 py-2 flex-col justify-between items-center inline-flex">
              <View className="Upper w-full self-stretch h-5 flex-col justify-center items-center gap-28 flex">
                <View className="SkipButton w-full self-stretch justify-end items-center gap-2.5 inline-flex">
                  <View className="Help iconfont icon-help h-5 p-0.5 justify-between items-center flex" />
                </View>
              </View>
              <View className="Middle w-full self-stretch h-32 px-14 py-4 rounded-lg flex-col justify-center items-center gap-8 flex">
                <View className="Description self-stretch justify-center items-center gap-2.5 inline-flex">
                  <View className="Content drop-shadow-xl w-80 text-center text-white text-base font-semibold font-['Inter'] leading-normal">
                    邀请更多朋友来玩
                  </View>
                </View>
                <View
                  className="Sharebutton drop-shadow-2xl bg-white rounded-3xl shadow justify-center items-center inline-flex"
                  hoverClass="View-hover scale-90"
                >
                  <Button
                    className=""
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
                      分享app
                    </Text>
                  </Button>
                </View>
              </View>
              <View className="Bottom w-full self-stretch h-20 flex-col justify-center items-center gap-2.5 flex">
                <View
                  className="Logo drop-shadow-xl justify-center items-center gap-2.5 inline-flex"
                  hoverClass="Button-hover scale-90"
                  hoverStayTime={100}
                  onClick={this.toHomePage}
                >
                  <Image className="GotuV51 w-12 h-12" src={logo} />
                </View>
                <View className="Description self-stretch justify-center items-center gap-2.5 inline-flex">
                  <View
                    className="Content drop-shadow-xl grow shrink basis-0 text-center text-orange-50 text-xs font-normal font-['Inter'] leading-none"
                    hoverClass="Text-hover scale-90"
                    hoverStayTime={100}
                    onClick={this.toHomePage}
                  >
                    gotu@她的小纸条
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
}

export default LoadingPage;
