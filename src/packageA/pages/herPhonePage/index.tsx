import Taro from "@tarojs/taro";
import { Component } from "react";
import {
  View,
  Text,
  Button,
  Input,
  Image,
} from "@tarojs/components";
import { observer, inject } from "mobx-react";
import { Picker, Toast, Dialog } from "@nutui/nutui-react-taro";
import "@nutui/nutui-react-taro/dist/style.css";

import NavBar from "../../../components/customnavbar";
import withComponent from "../../../components/generalComponent/mixin";
import logo from "../../../assets/logo/GOTU_v5.png";
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
      isExist: any;
    };
    registerStore: {
      setPhone: Function;
    }
  };
};

interface HerPhonePage {
  props: PageStateProps;
}

@inject("store")
@observer
@withComponent
class HerPhonePage extends Component {
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
      url: "/packageA/pages/herAgePage/index",
    });
  };

  toSkipPage = () => {
    Taro.navigateTo({
      url: "/packageA/pages/herAgePage/index",
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

  getReminder = () => {
    const { loginStore } = this.props.store;
    var toast = this.state.toast;
    if(loginStore.isExist){
      toast.msg = "此手机号用户已经存在";
    }else{
      toast.msg = loginStore.msg_phone;
    }
    this.setState({
      showToast: true,
      toast,
    });
  };

  moveToNext=()=>{
    const { loginStore, registerStore } = this.props.store;
    let phone = loginStore.phone;
    if(phone){
      registerStore.setPhone(phone);
      this.toNextPage();

    }else{
      var toast = this.state.toast;
      toast.msg = "手机号用户未存入";
      this.setState({
        showToast: true,
        toast,
      });
    }
  }

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
            home
            onBack={this.gobackClick}
            onHome={this.handlerGohomeClick}
            // extClass="lxy-navbar-extclass"
          />
        </View>
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
                  建立虚拟好友
                </Text>
              </View>
              <View className="Description self-stretch justify-center items-center gap-2.5 inline-flex">
                <Text className="Content drop-shadow-xl grow shrink basis-0 text-center text-gray-50 text-base font-semibold font-['Inter'] leading-normal">
                  建立后可以和他问答互动，一旦他注册登陆，将认领此虚拟账号及此账号的一切互动通知
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
                      placeholder="输入他的11位手机号..."
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
                  <Text className="Nocode grow shrink basis-0 text-gray-700 text-xs font-normal font-['Inter'] leading-none">
                    注意：一定要真实哟，不然他一旦注册将领取不到此账号
                  </Text>
                </View>
              </View>
              <View className="Buttonpart self-stretch flex-col justify-center items-center gap-2.5 flex">
                <Button
                  className="Button drop-shadow-2xl px-12 py-1.5 bg-orange-50 rounded-3xl justify-center items-center inline-flex"
                  hoverClass="Button-hover scale-90"
                  hoverStayTime={100}
                  onClick={
                    loginStore.phone_valid && !loginStore.isExist
                      ? this.moveToNext
                      : this.getReminder
                  }
                >
                  <Text className="Content text-center text-gray-500 text-lg font-bold font-['Inter'] leading-7">
                    下一步
                  </Text>
                </Button>
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

export default HerPhonePage;
