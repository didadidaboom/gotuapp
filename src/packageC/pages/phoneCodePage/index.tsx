import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, Text, Input, Button } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import { Toast, Loading, Overlay } from "@nutui/nutui-react-taro";
import "@nutui/nutui-react-taro/dist/style.css";

import NavBar from "../../../components/customnavbar";
import withComponent from "../../../components/generalComponent/mixin";
import "./index.scss";
import systemTool from "../../../utils/systemTool";

const { navBarHeight, navBarExtendHeight } = systemTool.getSystemInfo();

const { tabbarHeight } = systemTool.height;

const WrapperStyle = {
  display: "flex",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
};

type PageStateProps = {
  store: {
    loginStore: {
      phone: any;
      selectCode: any;
      isFocusNumber: boolean;
      active: boolean;
      phoneCode: any;
      setCode: Function;
      getCodeLength: Function;
      getCode: Function;
      content_code: any;
      show_btn: boolean;
      next_btn: boolean;
      isCodeValid: Function;
      msg_code: any;
      initalCodeCal: Function;
      is_new: any;
      is_valid: any;
      clearData: Function;
      initData: Function;
    };
    profileStore: {
      initData: Function;
    };
  };
};

interface PhoneCodePage {
  props: PageStateProps;
}

@inject("store")
@observer
class PhoneCodePage extends Component {
  state = {
    showToast: false,
    toast: {
      msg: "请输入验证码",
      type: "warn",
      cover: true,
      duration: 2,
      closeOnOverlayClick: true,
      icon: "",
      center: true,
    },
    overlayVisible: false,
  };

  componentDidMount() {
    // console.log("componentDidMount")
    const { loginStore } = this.props.store;
    loginStore.initData();
  }

  componentWillUnmount() {
    // console.log("componentWillUnmounts")
    const { loginStore } = this.props.store;
    if (loginStore.is_valid) {
      if (!loginStore.is_new) {
        loginStore.clearData();
      }
    }
  }

  componentDidShow() {}

  componentDidHide() {}

  setbaseDefault = () => {};

  toNextPage = () => {
    Taro.redirectTo({
      url: "/packageC/pages/agePage/index",
    });
  };

  toHomePage = () => {
    Taro.switchTab({
      url: "/pages/index/index",
    });
  };

  toWelPage = () => {
    Taro.redirectTo({
      url: "/packageC/pages/welcomePage/index",
    });
  };

  toSkipPage = () => {
    Taro.navigateTo({
      url: "/packageC/pages/agePage/index",
    });
  };

  getCode = () => {
    const { loginStore } = this.props.store;
    loginStore.getCode();
    // console.log("getcode ");
    // Taro.navigateTo({
    //   url: "/pages/genderPage/index",
    // });
  };

  handleChangeCode = async (e) => {
    const { loginStore, profileStore } = this.props.store;
    let value = e.detail.value;
    // console.log("test  ",e);
    const data = value.split("");
    let dataItem = ["", "", "", ""];
    data.map((item, index) => {
      dataItem[index] = item;
    });
    loginStore.selectCode = dataItem;
    await loginStore.isCodeValid();

    if (loginStore.is_valid) {
      this.showOverlay();
      if (loginStore.is_new) {
        this.toNextPage();
      } else {
        profileStore.initData();
        this.toWelPage();
      }
    }
    // console.log("handleinput0 = ", loginStore.selectCode[0]);
    // console.log("handleinput1 = ", loginStore.selectCode[1]);
    // console.log("handleinput2 = ", loginStore.selectCode[2]);
    // console.log("handleinput3 = ", loginStore.selectCode[3]);
    // loginStore.isFocusNumber = false;
  };

  wakeFocus = () => {
    const { loginStore } = this.props.store;
    loginStore.isFocusNumber = true;
    loginStore.active = true;
    // console.log("handleinput0 = ", loginStore.selectCode[0]);
    // console.log("handleinput1 = ", loginStore.selectCode[1]);
    // console.log("handleinput2 = ", loginStore.selectCode[2]);
    // console.log("handleinput3 = ", loginStore.selectCode[3]);
  };

  showWarning = () => {
    const { loginStore } = this.props.store;
    var toast = this.state.toast;
    toast.msg = loginStore.msg_code;
    this.setState({
      showToast: true,
      toast,
    });
  };

  showOverlay = () => {
    this.setState({
      overlayVisible: true,
    });
    setTimeout(() => {
      this.setState({
        overlayVisible: false,
      });
    }, 2000);
  };

  render() {
    const { loginStore } = this.props.store;

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
          className="Pagepart w-full h-full p-2 flex-col justify-start items-center gap-72 inline-flex"
          style={{
            paddingTop: navBarHeight + navBarExtendHeight,
            paddingBottom: tabbarHeight,
            // height: "100%",
            // width: "100%",
          }}
        >
          <View className="Upper w-full flex-col justify-center items-center gap-10 inline-flex">
            <View className="Titlepart self-stretch h-14 flex-col justify-center items-center flex">
              <View className="Title self-stretch justify-center items-center gap-2.5 inline-flex">
                <Text className="Content drop-shadow-2xl grow shrink basis-0 text-center text-gray-50 text-2xl font-bold font-['Inter'] leading-loose">
                  gotu@她的小纸条
                </Text>
              </View>
              <View className="Description self-stretch justify-center items-center gap-2.5 inline-flex">
                <Text className="Content drop-shadow-xl grow shrink basis-0 text-center text-gray-50 text-base font-semibold font-['Inter'] leading-normal">
                  校园的她和他们真心话大冒险的地方
                </Text>
              </View>
            </View>
            <View className="Codepart self-stretch px-6 flex-col justify-center items-center gap-12 flex">
              <View className="Code self-stretch flex-col justify-center items-center gap-5 flex">
                <View className="CodeName self-stretch justify-start items-center gap-2.5 inline-flex">
                  <View className="Key iconfont icon-key w-5 h-5 relative"></View>
                  <View className="CodeTitle text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                    验证码输入
                  </View>
                  <Input
                    maxlength={4}
                    type="text"
                    focus={loginStore.isFocusNumber}
                    className="w-0 h-0 opacity-0"
                    // cursorSpacing={120}
                    onInput={this.handleChangeCode}
                    onBlur={() => {
                      loginStore.isFocusNumber = false;
                      loginStore.active = false;
                    }}
                  />
                </View>
                {loginStore.active ? (
                  <View className="CodeInput animate-bounce justify-center items-center gap-7 inline-flex">
                    <View className="Input1 animate-bounce drop-shadow-2xl w-9 h-9 p-2.5 bg-gray-200 rounded-lg shadow">
                      {loginStore.selectCode[0]}
                    </View>
                    <View className="Input2 animate-bounce drop-shadow-2xl w-9 h-9 p-2.5 bg-gray-200 rounded-lg shadow">
                      {loginStore.selectCode[1]}
                    </View>
                    <View className="Input3 animate-bounce drop-shadow-2xl w-9 h-9 p-2.5 bg-gray-200 rounded-lg shadow">
                      {loginStore.selectCode[2]}
                    </View>
                    <View className="Input4 animate-bounce drop-shadow-2xl w-9 h-9 p-2.5 bg-gray-200 rounded-lg shadow">
                      {loginStore.selectCode[3]}
                    </View>
                  </View>
                ) : (
                  <View
                    className="CodeInput justify-center items-center gap-7 inline-flex"
                    onClick={this.wakeFocus}
                  >
                    <View className="Input1 drop-shadow-2xl w-9 h-9 p-2.5 bg-gray-200 rounded-lg shadow">
                      {loginStore.selectCode[0]}
                    </View>
                    <View className="Input2 drop-shadow-2xl w-9 h-9 p-2.5 bg-gray-200 rounded-lg shadow">
                      {loginStore.selectCode[1]}
                    </View>
                    <View className="Input3 drop-shadow-2xl w-9 h-9 p-2.5 bg-gray-200 rounded-lg shadow">
                      {loginStore.selectCode[2]}
                    </View>
                    <View className="Input4 drop-shadow-2xl w-9 h-9 p-2.5 bg-gray-200 rounded-lg shadow">
                      {loginStore.selectCode[3]}
                    </View>
                  </View>
                )}
              </View>
              <View className="CodeButton self-stretchs flex-col justify-center items-center gap-5 flex">
                {loginStore.show_btn ? (
                  <Button
                    className="ReSendButton drop-shadow-2xl px-5 py-1.5 bg-gray-200 rounded-3xl justify-center items-center inline-flex"
                    hoverClass="Button-hover scale-90"
                    hoverStayTime={100}
                    onClick={() => this.getCode()}
                    loading={loginStore.next_btn ? true : false}
                    disabled={loginStore.next_btn ? true : false}
                  >
                    <Text className="Send text-center text-gray-500 text-lg font-bold leading-7">
                      {loginStore.content_code}
                    </Text>
                  </Button>
                ) : (
                  <Button
                    className="ReSendButton drop-shadow-2xl px-5 py-1.5 bg-gray-200 rounded-3xl justify-center items-center inline-flex"
                    hoverClass="Button-hover scale-90"
                    hoverStayTime={100}
                    onClick={this.showWarning}
                  >
                    <Text className="Send text-center text-gray-500 text-lg font-bold leading-7">
                      {loginStore.content_code}
                    </Text>
                  </Button>
                )}
                <View className="Remind flex-col justify-center items-center gap-3 flex">
                  <View className="NoCode text-center text-gray-500 text-xs font-semibold font-['Inter'] leading-none">
                    没收到验证码
                  </View>
                  <View className="CodeRemind justify-center items-center gap-0.5 inline-flex">
                    <View className="Name text-center text-gray-500 text-xs font-semibold font-['Inter'] leading-none">
                      验证码已发送至
                    </View>
                    <Text className="PhoneNumber text-center text-gray-500 text-xs font-semibold font-['Inter'] leading-none">
                      {loginStore.phone ? loginStore.phone : "手机号错误"}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
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
        <Overlay visible={this.state.overlayVisible}>
          <View className="wrapper" style={WrapperStyle}>
            <Loading direction="vertical">请稍后</Loading>
          </View>
        </Overlay>
      </View>
    );
  }
}

export default PhoneCodePage;
