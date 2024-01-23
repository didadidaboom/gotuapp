import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, Image } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import { Animate } from "@nutui/nutui-react-taro";
import "@nutui/nutui-react-taro/dist/style.css";
import "./index.scss";
import logo from "../../assets/logo/GOTU_v5.png";
import systemTool from "../../utils/systemTool";
const { navBarHeight, navBarExtendHeight } = systemTool.getSystemInfo();
const { tabbarHeight } = systemTool.height;

type PageStateProps = {
  store: {
    counterStore: {
      counter: number;
      increment: Function;
      decrement: Function;
      incrementAsync: Function;
    };
  };
};

interface StartPage {
  props: PageStateProps;
}

@inject("store")
@observer
class StartPage extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  toNextPage = () => {
    Taro.navigateTo({
      url: "/packageC/pages/loginPage/index",
    });
  };

  // toNextPage = () => {
  //   Taro.switchTab({
  //     url: "/pages/index/index",
  //   });
  // };

  toSkipPage = () => {
    Taro.switchTab({
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
      Taro.switchTab({
        url: "/pages/index/index",
      });
    }
  };

  render() {
    return (
      <View
        className="w-full h-full flex-col justify-center items-center inline-flex"
        // style={{
        //   height: "100%",
        //   width: "100%",
        // }}
      >
        <View
          className="Pagepart w-full h-full px-2 py-2 flex-col justify-between items-center inline-flex"
          style={{
            paddingTop: navBarHeight + navBarExtendHeight,
            paddingBottom: tabbarHeight,
            // height: "100%",
            // width: "100%",
          }}
        >
          <View className="Upper self-stretch flex-col justify-center items-center gap-28 inline-flex">
            {/* <View className="SkipButton self-stretch justify-center items-center gap-2.5 inline-flex">
              <View className="Skip grow shrink basis-0 text-right text-white text-base font-medium font-['Inter'] leading-normal">
                关于
              </View>
            </View> */}
            <View className="SkipButton self-stretch justify-end items-center gap-2.5 inline-flex">
              <View
                className="Help iconfont icon-help w-5 p-0.5 justify-between items-center flex"
                hoverClass="icon-help-hover scale-90"
                hoverStayTime={100}
              />
            </View>
          </View>
          <View className="Middle self-stretch flex-col justify-center items-center inline-flex"
          onClick={this.toNextPage}
          hoverClass="text-orange-500 scale-90"
          hoverStayTime={100}
          >
            <Animate type="twinkle" loop>
              <View className="TitlePart self-stretch justify-center items-center gap-2.5 inline-flex">
                <Animate type="breath" loop>
                  <View
                    className="Content drop-shadow-2xl text-center text-white text-base font-semibold font-['Inter'] leading-normal"

                  >
                    开启探索之旅
                  </View>
                </Animate>
              </View>
            </Animate>
          </View>
          <View className="Bottom self-stretch flex-col justify-center items-center gap-4 inline-flex">
            <View className="Logo justify-center items-center gap-2.5 inline-flex">
              <Image className="GotuV51 w-12 h-12" src={logo} />
            </View>
            <View className="Description self-stretch justify-center items-center gap-2.5 inline-flex">
              <View className="Content grow shrink basis-0 text-center text-orange-50 text-xs font-normal font-['Inter'] leading-none">
                gotu@她的小纸条
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default StartPage;
