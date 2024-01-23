import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, Text } from "@tarojs/components";
import { observer, inject } from "mobx-react";

import "@nutui/nutui-react-taro/dist/style.css";
// import NavBar from "../..././components/customnavbar";
import withComponent from "../../../components/generalComponent/mixin";
import "./index.scss";
import systemTool from "../../../utils/systemTool";

const { navBarHeight, navBarExtendHeight } = systemTool.getSystemInfo();

const { tabbarHeight } = systemTool.height;

type PageStateProps = {
  store: {
    registerStore: {
      clearData: Function;
    };
  };
};

interface WelcomePage {
  props: PageStateProps;
}

@inject("store")
@observer
class WelcomePage extends Component {
  state = {
    showToast: false,
    toast: {
      msg: "请选择年龄",
      type: "warn",
      cover: true,
      duration: 2,
      closeOnOverlayClick: true,
      icon: "",
      center: true,
    },
  };

  componentDidMount() {}

  componentWillUnmount() {
    const { registerStore } = this.props.store;
    registerStore.clearData()
  }

  componentDidShow() {}

  componentDidHide() {}

  setbaseDefault = () => {};

  toNextPage = () => {
    Taro.navigateTo({
      url: "/packageB/pages/genderPage/index",
    });
  };

  toSkipPage = () => {
    Taro.switchTab({
      url: "/packageB/pages/index/index",
    });
  };

  toHomePage = () => {
    Taro.switchTab({
      url: "/pages/index/index",
    });
  };


  render() {
    return (
      <View className="w-full h-full flex-col justify-center items-center inline-flex">
        {/* <View className="nav">
          <NavBar
            // title="gpage"
            background="rgba(0,0,0,0)"
            color="#fff"
            iconTheme="black"
            back
            // home
            onBack={this.gobackClick}
            // onHome={this.handlerGohomeClick}
            // extClass="lxy-navbar-extclass"
          />
        </View> */}
        <View
          className="Pagepart w-full h-full px-2 py-2 flex-col justify-between items-center inline-flex"
          style={{
            paddingTop: navBarHeight + navBarExtendHeight,
            paddingBottom: tabbarHeight,
            // height: "100%",
            // width: "100%",
          }}
        >
          <View className="Welcomepart w-full h-full px-4 flex-col justify-between items-center inline-flex">
            <View className="Upper w-full self-stretch h-14 flex-col justify-center items-center gap-28 flex">
              <View className="Titilepart self-stretch h-14 flex-col justify-center items-center gap-2 flex">
                <View className="Titlepart self-stretch h-8 flex-col justify-center items-center flex">
                  <View className="Title self-stretch justify-center items-center inline-flex">
                    <Text className="Content drop-shadow-2xl text-center text-orange-500 text-2xl font-bold font-['Inter'] leading-loose">
                      躁起来吧
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View className="Middle w-full self-stretch p-4 rounded-lg justify-center items-center gap-4 inline-flex" />
            <View className="Bottom w-full self-stretch h-10 flex-col justify-center items-center gap-4 flex">
              <View className="Button drop-shadow-2xl self-stretch py-1.5 bg-orange-500 rounded-3xl justify-center items-center inline-flex"
              onClick={this.toHomePage}
              hoverClass="Button-hover scale-90"
              hoverStayTime={100}
              >
                <Text className="Content text-center text-white text-lg font-bold font-['Inter'] leading-7">
                  开始
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default WelcomePage;
