import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, Text } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import { Picker,Toast } from "@nutui/nutui-react-taro";
import "@nutui/nutui-react-taro/dist/style.css";

import NavBar from "../../../components/customnavbar";
import withComponent from "../../../components/generalComponent/mixin";
import "./index.scss";
import systemTool from "../../../utils/systemTool";
const { navBarHeight, navBarExtendHeight } = systemTool.getSystemInfo();
const { tabbarHeight } = systemTool.height;

type PageStateProps = {
  store: {
    registerStore: {
      submitAge: Function;
      ageMsg: any;
      clearData: Function;
    };
  };
};

interface HerAgePage {
  props: PageStateProps;
}

@inject("store")
@observer
class HerAgePage extends Component {
  state = {
    ageVisible: false,
    baseDefault: "",
    defaultValue: [0],
    listData1: [
      [
        { value: 10, text: "10" },
        { value: 11, text: "11" },
        { value: 12, text: "12" },
        { value: 13, text: "13" },
        { value: 14, text: "14" },
        { value: 15, text: "15" },
        { value: 0, text: "--" },
        { value: 16, text: "16" },
        { value: 17, text: "17" },
        { value: 18, text: "18" },
        { value: 19, text: "19" },
        { value: 20, text: "20" },
        { value: 21, text: "21" },
        { value: 22, text: "22" },
        { value: 23, text: "23" },
        { value: 24, text: "24" },
        { value: 25, text: "25" },
        { value: 26, text: "26" },
        { value: 27, text: "27" },
        { value: 28, text: "28" },
        { value: 29, text: "29" },
        { value: 30, text: "30" },
        { value: 31, text: "31" },
        { value: 32, text: "32" },
        { value: 33, text: "33" },
        { value: 34, text: "34" },
        { value: 35, text: "35" },
        { value: 36, text: "36" },
        { value: 37, text: "37" },
        { value: 38, text: "38" },
        { value: 39, text: "39" },
      ],
    ],
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
      url: "/packageA/pages/herGenderPage/index",
    });
  };

  toSkipPage = () => {
    Taro.navigateTo({
      url: "/packageA/pages/herGenderPage/index",
    });
  };

  handlerGohomeClick = () => {
    Taro.switchTab({
      url: "/pages/index/index",
    });
  }

  gobackClick() {
    const pages = Taro.getCurrentPages();
      if (pages.length >= 2) {
        Taro.navigateBack({
          delta: 1
        });
      } else {
        Taro.switchTab({
          url: "/pages/index/index",
        });
      }
  }

  setAgeVisible = (state) => {
    this.setState({
      ageVisible: state,
    });
  };

  confirmPicker = (options, value) => {
    this.setState({
      baseDefault: value,
    });
  };

  submitAge = () => {
    const { registerStore } = this.props.store;
    let isPass = registerStore.submitAge(this.state.baseDefault[0]);
    // console.log("isPass", isPass);
    if (!isPass) {
      var toast = this.state.toast;
      toast.msg = registerStore.ageMsg;
      this.setState({
        showToast: true,
        toast,
      });
    } else {
      this.toNextPage();
    }
  };

  render() {
    return (
      <View className="w-full h-full flex-col justify-center items-center inline-flex">
        <View className="nav">
          <NavBar
            // title="gpage"
            background="rgba(0,0,0,0)"
            color="#fff"
            iconTheme="white"
            back
            home
            onBack={this.gobackClick}
            onHome={this.handlerGohomeClick}
            // extClass="lxy-navbar-extclass"
          />
        </View>
        <View
          className="Pagepart w-full h-full px-2 py-2 flex-col justify-between items-center inline-flex"
          style={{
            paddingTop: navBarHeight + navBarExtendHeight,
            paddingBottom: tabbarHeight,
            // height: "100%",
            // width: "100%",
          }}
        >
          <View className="Upper w-full self-stretch flex-col justify-center items-center gap-28 flex">
            <View className="SkipButton self-stretch justify-end items-center gap-2.5 inline-flex">
              <View
                className="Help iconfont icon-help p-0.5 justify-between items-center flex"
                hoverClass="icon-help-hover scale-90"
                hoverStayTime={100}
              />
            </View>
          </View>
          <View className="Middle w-full self-stretch flex-col justify-center items-center flex">
            <View className="TitlePart justify-center items-center gap-0.5 inline-flex"
            onClick={this.setAgeVisible.bind(this, true)}
            hoverClass="Text-hover"
            hoverStayTime={100}
            >
              <View className="Content drop-shadow-xl text-center text-white text-base font-semibold font-['Inter'] leading-normal">
                他的年龄是？
              </View>
              <View
                className="Arrowdown iconfont icon-sort-down-white drop-shadow-2xl justify-center items-center flex"
                hoverClass="icon-sort-down-hover"
                hoverStayTime={100}
                onClick={this.setAgeVisible.bind(this, true)}
              />
              <Text className="Content drop-shadow-xl text-center text-white text-base font-semibold font-['Inter'] leading-normal">
                {this.state.baseDefault[0] == "0"
                  ? ""
                  : this.state.baseDefault[0]}
              </Text>
            </View>
          </View>
          <View className="Bottom w-full self-stretch py-2 flex-col justify-center items-center gap-4 flex">
            <View
              className="Button drop-shadow-2xl w-80 h-10 py-1.5 bg-white rounded-3xl shadow justify-center items-center inline-flex"
              onClick={this.submitAge}
              hoverClass="Button-hover scale-90"
              hoverStayTime={100}
            >
              <View className="Content grow shrink basis-0 text-center text-gray-500 text-lg font-bold font-['Inter'] leading-7">
                下一步
              </View>
            </View>
          </View>
          <Picker
            visible={this.state.ageVisible}
            options={this.state.listData1}
            defaultValue={this.state.defaultValue}
            onConfirm={(list, values) => this.confirmPicker(list, values)}
            onClose={this.setAgeVisible.bind(this, false)}
          />
          <Toast
            msg={this.state.toast.msg}
            visible={this.state.showToast}
            type={this.state.toast.type}
            cover={this.state.toast.cover}
            closeOnOverlayClick={this.state.toast.closeOnOverlayClick}
            onClose={() => {
              this.setState({ showToast: false });
            }}
          />
        </View>
      </View>
    );
  }
}

export default HerAgePage;
