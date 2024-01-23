import Taro from "@tarojs/taro";
import { Component } from "react";
import {
  View,
  Text,
  CheckboxGroup,
  Checkbox,
  Button,
  Input,
  Image,
} from "@tarojs/components";
import { observer, inject } from "mobx-react";
import { Picker, Toast, Dialog } from "@nutui/nutui-react-taro";
import "@nutui/nutui-react-taro/dist/style.css";

import logo from "../../../assets/logo/GOTU_v5.png";
import withComponent from "../../../components/generalComponent/mixin";
import "./index.scss";
import systemTool from "../../../utils/systemTool";

const { navBarHeight, navBarExtendHeight } = systemTool.getSystemInfo();
const { tabbarHeight } = systemTool.height;

type PageStateProps = {
  store: {
    loginStore: {
      checked: boolean;
      phoneChanged: boolean;
      phone: any;
      phone_valid: boolean;
      msg_phone: any;
      content_btn: any;
      setPhone: Function;
      rmLastPhone: Function;
      getLength: Function;
      changeStatus: Function;
      getStatus: Function;
      getCode: Function;
      count: number;
      count_init: number;
      next_btn: boolean;
      initalCodeCal: Function;
      selectCode: any;
      isSending: Function;
    };
  };
};

interface LoginPage {
  props: PageStateProps;
}

@inject("store")
@observer
@withComponent
class LoginPage extends Component {
  state = {
    codeVisible: false,
    countryVisible: false,
    baseDefault: [86],
    defaultValue: [86],
    listData1: [
      [
        { value: 86, text: "中国" },
        { value: 65, text: "新加坡" },
        { value: 1, text: "美国" },
        { value: 852, text: "香港" },
        { value: 60, text: "马来西亚" },
      ],
    ],
    showToast: false,
    toast: {
      msg: "请输入手机号",
      type: "warn",
      cover: true,
      duration: 2,
      closeOnOverlayClick: true,
      icon: "",
      center: true,
    },
  };

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  toNextPage = () => {
    Taro.navigateTo({
      url: "/packageC/pages/phoneCodePage/index",
    });
  };

  toSkipPage = () => {
    Taro.navigateTo({
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

  setCountryVisible = (state) => {
    // console.log("set visible ...",state)
    this.setState({
      countryVisible: state,
    });
  };

  confirmPicker = (options, value) => {
    this.setState({
      baseDefault: value,
    });
  };

  getPhoneInput = (e) => {
    const { loginStore } = this.props.store;
    loginStore.setPhone(e.detail.value);
  };

  deleteInput = () => {
    const { loginStore } = this.props.store;
    loginStore.rmLastPhone();
  };

  getCode = () => {
    const { loginStore } = this.props.store;
    if (!loginStore.checked) {
      // Taro.showModal({
      //   title: "用户协议",
      //   content: "是否同意用户协议",
      //   success: (e) => {
      //     if (e.confirm) {
      //       loginStore.checked = true;
      //       loginStore.getCode();
      //       this.toNextPage();
      //     }
      //   },
      // });
      Dialog.open("test", {
        title: "用户协议",
        content: "是否同意用户协议",
        onConfirm: () => {
          Dialog.close("test");
          loginStore.checked = true;
          if (loginStore.phone_valid) {
            if (!loginStore.isSending()) {
              loginStore.getCode();
            }
            this.toNextPage();
          }
        },
        onCancel: () => {
          Dialog.close("test");
        },
      });
    } else {
      loginStore.getCode();
      this.toNextPage();
    }
  };

  switchCheck = (e) => {
    const { loginStore } = this.props.store;
    loginStore.changeStatus();
  };

  getReminder = () => {
    const { loginStore } = this.props.store;
    if (!loginStore.checked) {
      // Taro.showModal({
      //   title: "用户协议",
      //   content: "是否同意用户协议",
      //   success: (e) => {
      //     if (e.confirm) {
      //       loginStore.checked = true;
      //     }
      //   },
      // });
      Dialog.open("test", {
        title: "用户协议",
        content: "是否同意用户协议",
        onConfirm: () => {
          loginStore.checked = true;
          Dialog.close("test");
          if (loginStore.phone_valid) {
            if (!loginStore.isSending()) {
              loginStore.getCode();
            }
            this.toNextPage();
          }
        },
        onCancel: () => {
          Dialog.close("test");
        },
      });
    } else {
      var toast = this.state.toast;
      toast.msg = loginStore.msg_phone;
      this.setState({
        showToast: true,
        toast,
      });
    }
  };

  render() {
    const { loginStore } = this.props.store;
    return (
      <View className="w-full h-full  flex-col justify-center items-center inline-flex">
        <View
          className="Pagepart w-full h-full px-2.5 py-2 flex-col justify-between items-center inline-flex"
          style={{
            paddingTop: navBarHeight + navBarExtendHeight,
            paddingBottom: tabbarHeight,
            // height: "100%",
            // width: "100%",
          }}
        >
          <View className="Upper w-full flex-col justify-start items-center gap-10 flex">
            <View className="Titlepart self-stretch flex-col justify-center items-center flex">
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
            <View className="Phonepart w-full flex-col justify-center items-center gap-5 flex">
              <View className="Phonename self-stretch px-2 justify-start items-center gap-2.5 inline-flex">
                <View className="PhonelinkRing iconfont icon-iphones justify-center items-center flex" />
                <Text className="Name grow shrink basis-0 text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                  手机号码
                </Text>
              </View>
              <View className="Phoneinputpart self-stretch h-16 flex-col justify-center items-center gap-2.5 flex">
                <View className="Inputpart self-stretch px-2 justify-center items-center gap-2.5 inline-flex">
                  <View className="First grow shrink basis-0 h-6 justify-start items-center gap-0.5 flex">
                    <View
                      className="Countryinicator text-center text-gray-500 text-base font-semibold font-['Inter'] leading-normal"
                      onClick={this.setCountryVisible.bind(this, true)}
                    >
                      +{this.state.baseDefault[0]}
                    </View>
                    <View
                      className="IconArrowdown pr-4 py-2 iconfont icon-sort-down drop-shadow-xl justify-center items-center flex"
                      onClick={this.setCountryVisible.bind(this, true)}
                      hoverClass="icon-sort-down-hover"
                      hoverStayTime={100}
                    />
                    <Input
                      className="Numberinput grow shrink basis-0 text-gray-50 text-base font-semibold font-['Inter'] leading-normal"
                      placeholder="输入11位手机号..."
                      maxlength={11}
                      type="number"
                      value={loginStore.phone}
                      onInput={this.getPhoneInput}
                    >
                      18000000000
                    </Input>
                  </View>
                  <View
                    className="IconDelete iconfont icon-delete-left drop-shadow-xl justify-center items-center flex"
                    hoverClass="icon-delete-left-hover"
                    hoverStayTime={100}
                    onClick={this.deleteInput}
                  />
                </View>
                <View className="Underlinepart self-stretch px-2 justify-center items-center gap-2.5 inline-flex">
                  <View className="Underline grow shrink basis-0 h-px bg-gray-400" />
                </View>
                <View className="Codepart self-stretch px-2 justify-between items-center inline-flex">
                  <Text className="Nocode grow shrink basis-0 text-gray-500 text-xs font-normal font-['Inter'] leading-none">
                    注意：记住不要用别人的手机号登陆呢
                  </Text>
                </View>
              </View>
              <View className="Buttonpart self-stretch flex-col justify-center items-center gap-2.5 flex">
                <Button
                  className="Button drop-shadow-2xl px-12 py-1.5 bg-orange-50 rounded-3xl justify-center items-center inline-flex"
                  hoverClass="Button-hover scale-90"
                  hoverStayTime={100}
                  onClick={
                    loginStore.phone_valid && loginStore.checked
                      ? loginStore.count === loginStore.count_init
                        ? this.getCode
                        : loginStore.phoneChanged
                        ? this.getCode
                        : this.toNextPage
                      : this.getReminder
                  }
                >
                  <Text className="Content text-center text-gray-500 text-lg font-bold font-['Inter'] leading-7">
                    验证码
                  </Text>
                </Button>
              </View>
              <View className="Privateagreement self-stretch justify-center items-center gap-0.5 inline-flex">
                <CheckboxGroup onChange={this.switchCheck}>
                  <Checkbox
                    className="CheckCircle drop-shadow-xl justify-center items-center flex"
                    value="c"
                    checked={loginStore.getStatus()}
                  />
                </CheckboxGroup>
                <View className="Privatecontent drop-shadow-xl justify-center items-center flex">
                  <Text className="Content1 text-center text-gray-500 text-xs font-semibold font-['Inter'] leading-none">
                    登录注册即表示同意
                  </Text>
                  <View
                    className="Content2 text-center text-gray-50 text-xs font-semibold font-['Inter'] leading-none"
                    hoverClass="text-gray-700 scale-90"
                    hoverStayTime={100}
                  >
                    GotU用户协议
                  </View>
                  <Text className="Content3 text-center text-gray-500 text-xs font-semibold font-['Inter'] leading-none">
                    和
                  </Text>
                  <View
                    className="Content4 text-center text-gray-50 text-xs font-semibold font-['Inter'] leading-none"
                    hoverClass="text-gray-700 scale-90"
                    hoverStayTime={100}
                  >
                    隐私协议
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className="Bottom self-stretch h-24 py-2 flex-col justify-center items-center gap-4 flex">
            <View className="Logo justify-center items-center gap-2.5 inline-flex">
              <Image className="GotuV51 w-12 h-12" src={logo} />
            </View>
            <View className="Description w-96 justify-center items-center gap-2.5 inline-flex">
              <View className="Content grow shrink basis-0 text-center text-orange-50 text-xs font-normal font-['Inter'] leading-none">
                gotu@她的小纸条
              </View>
            </View>
          </View>
          {/* <View className="Bottom w-full self-stretch flex-col justify-center items-center gap-4 flex">
            <View className="Iconpart self-stretch justify-center items-center gap-2.5 inline-flex">
              <View
                className="Wechatlogo iconfont-wechat icon-wechat drop-shadow-2xl justify-center items-center gap-2.5 flex"
                hoverClass="icon-wechat-hover scale-90"
                hoverStayTime={100}
              />
            </View>
            <View className="Name self-stretch py-2.5 justify-center items-center gap-2.5 inline-flex">
              <View
                className="Content text-center text-gray-50 text-xs font-extrabold font-['Inter'] leading-none"
                hoverClass="text-gray-500 scale-90"
                hoverStayTime={100}
              >
                登录有问题
              </View>
            </View>
          </View> */}
          <Picker
            visible={this.state.countryVisible}
            options={this.state.listData1}
            defaultValue={this.state.defaultValue}
            onConfirm={(list, values) => this.confirmPicker(list, values)}
            onClose={this.setCountryVisible.bind(this, false)}
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
          <Dialog id="test" />
        </View>
      </View>
    );
  }
}

export default LoginPage;
