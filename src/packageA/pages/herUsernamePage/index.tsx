import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, Text, Input } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import { Toast } from "@nutui/nutui-react-taro";
import "@nutui/nutui-react-taro/dist/style.css";

import NavBar from "../../../components/customnavbar";
import "./index.scss";
import systemTool from "../../../utils/systemTool";
const { navBarHeight, navBarExtendHeight } = systemTool.getSystemInfo();
const { tabbarHeight } = systemTool.height;

type PageStateProps = {
  store: {
    registerStore: {
      userName: any;
      saveUserNameInput: Function,
      saveHerAll: Function;
      clearData: Function;
    };
    profileStore: {
      profile: any;
      initData: Function;
    };
    creditStore: {
      earnCredit: Function;
      selectedActivity: any;
      initData: Function;
    }
  };
};

interface HerUsernamePage {
  props: PageStateProps;
}

@inject("store")
@observer
class HerUsernamePage extends Component {
  state = {
    showToast: false,
    toast: {
      msg: "请输入名字",
      type: "warn",
      cover: true,
      duration: 2,
      closeOnOverlayClick: true,
      icon: "",
      center: true,
    },
  };
  componentDidMount() {
    const {profileStore } = this.props.store
    if(profileStore.profile.id){
      profileStore.initData()
    }

  }

  componentWillUnmount() {
    const { registerStore } = this.props.store;
    registerStore.clearData()
  }

  componentDidShow() {}

  componentDidHide() {}

  toNextPage = () => {
    Taro.redirectTo({
      url: "/packageA/pages/herWelcomePage/index",
    });
  };

  toSkipPage = () => {
    Taro.switchTab({
      url: "/packageA/pages/herWelcomePage/index",
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

  getUserNameInput = (e) => {
    const { registerStore } = this.props.store;
    registerStore.saveUserNameInput(e.detail.value);
  };

  submitUsername = () => {
    const { registerStore,profileStore,creditStore } = this.props.store;
    let is_filled = registerStore.userName
    if (!is_filled) {
      var toast = this.state.toast;
      toast.msg = "请填写真实姓名,方便在参与问答中被朋友选中哟";
      this.setState({
        showToast: true,
        toast,
      });
    } else {
      registerStore.saveHerAll();
      let item = creditStore.selectedActivity;
      if (profileStore.profile.id) {
        profileStore.profile.credit = profileStore.profile.credit + item.credit;
      }
      if(item.status==="earn"){
        creditStore.earnCredit(item.type, item.credit);
        creditStore.selectedActivity = null;
      }
      this.toNextPage();
    }
  };

  render() {
    const { registerStore } = this.props.store;

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
          className="Pagepart w-full h-full px-4 py-2 flex-col justify-between items-center inline-flex"
          style={{
            paddingTop: navBarHeight + navBarExtendHeight,
            paddingBottom: tabbarHeight,
            // height: "100%",
            // width: "100%",
          }}
        >
          <View className="Pagepart w-full h-full rounded-tl-lg rounded-tr-lg flex-col justify-between items-center inline-flex">
            <View className="Upper w-full self-stretch h-28 px-4 flex-col justify-center items-center gap-2 flex">
              <View className="SkipButton self-stretch justify-end items-center gap-2.5 inline-flex">
                <View className="Help iconfont icon-help h-5 p-0.5 justify-between items-center flex"
                style={{position:"absolute",right:"8px"}}
                hoverClass="icon-help-hover scale-90"
                hoverStayTime={100}
                />
              </View>
              <View className="Titlepart self-stretch h-20 flex-col justify-center items-center flex">
                <View className="Title self-stretch justify-center items-center inline-flex">
                  <Text className="Content drop-shadow-2xl grow shrink basis-0 text-center text-gray-50 text-2xl font-bold font-['Inter'] leading-loose">
                    填写一个用户名
                  </Text>
                </View>
                <View className="Description self-stretch h-12 flex-col justify-center items-center flex">
                  <Text className="Content drop-shadow-xl self-stretch text-center text-gray-50 text-base font-semibold font-['Inter'] leading-normal">
                    要求填真实名字，方便在参与问答中被朋友选中哟
                  </Text>
                </View>
              </View>
            </View>
            <View className="Middle w-full self-stretch h-14 px-4 flex-col justify-center items-center flex">
              <Input className="Content self-stretch h-14 px-2 bg-orange-100 rounded-lg justify-start items-center gap-2.5 inline-flex"
              focus
              placeholder="请填写真实姓名"
              maxlength={11}
              type="text"
              value={registerStore.userName}
              onInput={this.getUserNameInput}
              >
                <View className="Content drop-shadow-xl text-center text-gray-400 text-sm font-semibold font-['Inter'] leading-tight">
                  请填写真实姓名...
                </View>
              </Input>
            </View>
            <View className="Bottom self-stretch h-10 px-4 flex-col justify-center items-center gap-4 flex">
              <View className="Button drop-shadow-2xl self-stretch py-1.5 bg-white rounded-3xl shadow justify-center items-center inline-flex"
              onClick={this.submitUsername}
              hoverClass="Button-hover scale-90"
              hoverStayTime={100}
              >
                <Text className="Content grow shrink basis-0 text-center text-gray-500 text-lg font-bold font-['Inter'] leading-7">
                  下一步
                </Text>
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
      </View>
    );
  }
}

export default HerUsernamePage;
