import Taro from "@tarojs/taro";
import { Component } from "react";
import { View} from "@tarojs/components";
import { observer, inject } from "mobx-react";

import NavBar from "../../../components/customnavbar";
import IconFont from "../../../components/iconfont";
import "./index.scss";
import systemTool from "../../../utils/systemTool";
const { navBarHeight, navBarExtendHeight } = systemTool.getSystemInfo();
// const { tabbarHeight } = systemTool.height;

type PageStateProps = {
  store: {
    registerStore: {
      submitGender: Function;
      clearData: Function;
    };
  };
};

interface GenderPage {
  props: PageStateProps;
}

@inject("store")
@observer
class GenderPage extends Component {
  state = {
    selected: null,
  };
  componentDidMount() {}

  componentWillUnmount() {
    const { registerStore } = this.props.store;
    registerStore.clearData()
  }

  componentDidShow() {}

  componentDidHide() {}

  toNextPage = () => {
    Taro.navigateTo({
      url: "/packageC/pages/addressPage/index",
    });
  };

  toSkipPage = () => {
    Taro.switchTab({
      url: "/packageC/pages/addressPage/index",
    });
  };

  selectGender = (selected) => {
    // console.log("selected = ", selected);
    const { registerStore } = this.props.store;
    let res = registerStore.submitGender(selected);

    this.setState({
      selected,
    });

    if (res) {
      this.toNextPage();
    }
  };

  render() {
    // const { defaultValue, listData1}= this.state
    return (
      <View className="w-full h-full flex-col justify-center items-center inline-flex">
        <View className="nav">
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
        </View>
        <View
          className="Pagepart w-full h-full px-4 pt-2 flex-col justify-between items-center inline-flex"
          style={{
            paddingTop: navBarHeight + navBarExtendHeight,
            // paddingBottom: tabbarHeight,
            // height: "100%",
            // width: "100%",
          }}
        >
          <View className="Genderpart w-full h-full px-4 flex-col justify-between items-center inline-flex">
            <View className="Upper w-full self-stretch h-20 flex-col justify-center items-center gap-2 flex">
              <View className="SkipButton self-stretch justify-end items-center gap-2.5 inline-flex">
                <View
                  className="Help iconfont icon-help h-5 p-0.5 justify-between items-center flex"
                  hoverClass="icon-help-hover scale-90"
                  hoverStayTime={100}
                  style={{ position: "absolute", right: "8px" }}
                />
              </View>
              <View className="Titlepart w-full self-stretch h-14 flex-col justify-center items-center flex">
                <View className="Title self-stretch px-2.5 justify-center items-center gap-2.5 inline-flex">
                  <View className="Content drop-shadow-2xl text-center text-gray-50 text-2xl font-bold font-['Inter'] leading-loose">
                    你的性别
                  </View>
                </View>
                <View className="Description w-full self-stretch px-2.5 justify-center items-center gap-2.5 inline-flex">
                  <View className="Content drop-shadow-xl text-center text-gray-50 text-base font-semibold font-['Inter'] leading-normal">
                    慎重选择，后面修改有限且有次数限制
                  </View>
                </View>
              </View>
            </View>
            <View className="Middle drop-shadow-2xl w-full self-stretch h-96 py-4 rounded-lg flex-col justify-center items-center gap-3.5 flex">
              <View className="BoyAndGirl w-full justify-center items-center gap-4 inline-flex">
                <View
                  className={
                    this.state.selected === 11
                      ? "Boy scale-80 drop-shadow-xl p-7 bg-blue-500 bg-opacity-20 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex"
                      : "Boy p-7 bg-blue-500 bg-opacity-20 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex"
                  }
                  hoverClass="View-hover scale-90"
                  hoverStayTime={100}
                  onClick={this.selectGender.bind(this, 11)}
                >
                  {/* <Text className="Boy drop-shadow-xl text-center text-gray-50 text-3xl font-semibold font-['Inter'] leading-9">
                    男生
                  </Text> */}
                  <IconFont name="icon-gender-boy" />
                </View>
                <View
                  className={
                    this.state.selected==10
                    ?"Girl scale-80 drop-shadow-xl p-7 bg-pink-500 bg-opacity-20 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex"
                    :"Girl p-7 bg-pink-500 bg-opacity-20 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex"
                  }
                  hoverClass="View-hover scale-90"
                  hoverStayTime={100}
                  onClick={this.selectGender.bind(this, 10)}
                >
                  {/* <Text className="Girl drop-shadow-xl text-center text-gray-50 text-3xl font-semibold font-['Inter'] leading-9">
                    女生
                  </Text> */}
                  <IconFont name="icon-gender-girl" />
                </View>
              </View>
              <View
                className={
                  this.state.selected===12
                  ?"NonBinary scale-80 drop-shadow-xl p-7 bg-white bg-opacity-20 rounded-lg flex-col justify-center items-center gap-2.5 flex"
                  :"NonBinary p-7 bg-gray-500 bg-opacity-20 rounded-lg flex-col justify-center items-center gap-2.5 flex"
                }
                hoverClass="View-hover scale-90"
                hoverStayTime={100}
                onClick={this.selectGender.bind(this, 12)}
              >
                {/* <Text className="NonBinary drop-shadow-xl text-center text-gray-50 text-3xl font-semibold font-['Inter'] leading-9">
                  非二元性别
                </Text> */}
                <IconFont name="icon-gender-homo" size={96}/>
              </View>
            </View>
            <View className="Bottom self-stretch h-14 flex-col justify-end items-center gap-4 flex">
              <View className="Button w-2 h-14 text-center text-gray-50 text-xs font-extrabold font-['Inter'] leading-none">
                {" "}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default GenderPage;
