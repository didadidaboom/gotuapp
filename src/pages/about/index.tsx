import Taro from "@tarojs/taro";
import { Component } from "react";
import { View } from "@tarojs/components";
import { observer, inject } from "mobx-react";

import NavBar from "../../components/customnavbar";
import "./index.scss";
import systemTool from "../../utils/systemTool";
const { navBarHeight, navBarExtendHeight } = systemTool.getSystemInfo();
const { tabbarHeight } = systemTool.height;

type PageStateProps = {
  store: {
    registerStore: {
      submitGender: Function;
    };
  };
};

interface About {
  props: PageStateProps;
}

@inject("store")
@observer
class About extends Component {
  state = {
    selected: null,
  };
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  toAccountPage = () => {
    Taro.navigateTo({
      url: "/pages/accountManagePage/index",
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

  render() {
    // const { defaultValue, listData1}= this.state
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
          <View className="About w-full h-full flex-col justify-center items-center gap-4 inline-flex">
            <View className="Middle w-full self-stretch grow shrink basis-0 flex-col justify-start items-center flex">
              <View className="MiddleTitle w-full self-stretch h-9 px-0.5 py-2 flex-col justify-center items-center gap-2.5 flex">
                <View className="Content drop-shadow-xl self-stretch text-gray-400 text-sm font-semibold font-['Inter'] leading-tight">
                  关于(待开放中)
                </View>
              </View>
              <View className="Selections w-full self-stretch h-72 flex-col justify-center items-center gap-2 flex">
                <View className="Selection drop-shadow-2xl w-full self-stretch h-12 py-4 bg-white rounded-lg flex-col justify-center items-center flex"
                hoverClass="View-hover scale-90"
                hoverStayTime={100}
                >
                  <View className="Content self-stretch text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                    如何玩
                  </View>
                </View>
                <View className="Selection drop-shadow-2xl w-full self-stretch h-12 py-4 bg-white rounded-lg flex-col justify-center items-center flex"
                hoverClass="View-hover scale-90"
                hoverStayTime={100}
                >
                  <View className="Content self-stretch text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                    常见问答
                  </View>
                </View>
                <View className="Selection drop-shadow-2xl w-full self-stretch h-12 py-4 bg-white rounded-lg flex-col justify-center items-center flex"
                hoverClass="View-hover scale-90"
                hoverStayTime={100}
                >
                  <View className="Content self-stretch text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                    反馈
                  </View>
                </View>
                <View className="Selection drop-shadow-2xl w-full self-stretch h-12 py-4 bg-white rounded-lg flex-col justify-center items-center flex"
                hoverClass="View-hover scale-90"
                hoverStayTime={100}
                >
                  <View className="Content self-stretch text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                    帮助
                  </View>
                </View>
                <View className="Selection drop-shadow-2xl w-full self-stretch h-12 py-4 bg-white rounded-lg flex-col justify-center items-center flex"
                hoverClass="View-hover scale-90"
                hoverStayTime={100}
                >
                  <View className="Content self-stretch text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                    安全中心
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default About;
