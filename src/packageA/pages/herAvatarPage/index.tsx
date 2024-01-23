import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, Text } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import {Toast} from "@nutui/nutui-react-taro";
import "@nutui/nutui-react-taro/dist/style.css";

import NavBar from "../../../components/customnavbar";
import IconFont from "../../../components/iconfont";
import withComponent from "../../../components/generalComponent/mixin";
import "./index.scss";
import systemTool from "../../../utils/systemTool";

const { navBarHeight, navBarExtendHeight } = systemTool.getSystemInfo();

const { tabbarHeight } = systemTool.height;

type PageStateProps = {
  store: {
    registerStore: {
      setAvatarIndex: Function;
      avatar:any;
      submitAvatar: Function;
      avatarMsg: any;
      clearData: Function;
    };
  };
};

interface HerAvatarPage {
  props: PageStateProps;
}

@inject("store")
@observer
class HerAvatarPage extends Component {
  state = {
    showToast: false,
    toast: {
      msg: "请选择头像",
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
      url: "/packageA/pages/herUsernamePage/index",
    });
  };

  toSkipPage = () => {
    Taro.navigateTo({
      url: "/packageA/pages/herUsernamePage/index",
    });
  };

  selectAvatar=(index)=>{
    // console.log("index = ",index)
    const { registerStore } = this.props.store;
    registerStore.setAvatarIndex(index+1)
  }

  submitAvatar = () => {
    const { registerStore } = this.props.store;
    let isPass = registerStore.submitAvatar(registerStore.avatar);
    // console.log("isPass", isPass);
    if (!isPass) {
      var toast = this.state.toast;
      toast.msg = registerStore.avatarMsg;
      this.setState({
        showToast: true,
        toast,
      });
    } else {
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
            // home
            onBack={this.gobackClick}
            // onHome={this.handlerGohomeClick}
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
          <View className="Avatarpart w-full h-full px-4 py-2 flex-col justify-between items-center inline-flex">
            <View className="Upper w-full self-stretch h-full flex-col justify-between items-center inline-flex">
              <View className="SkipButton self-stretch justify-end items-center gap-2.5 inline-flex">
                <View
                  className="Riht w-8 text-center text-gray-500 text-xs font-normal font-['Inter'] leading-none"
                  style={{ position: "absolute", right: "8px" }}
                  hoverClass="Text-hover scale-90"
                  hoverStayTime={100}
                  onClick={this.toSkipPage}
                >
                  跳过
                </View>
              </View>
              <View className="Titlepart self-stretch h-full flex-col justify-center items-center flex">
                <View className="Title self-stretch justify-center items-center inline-flex">
                  <Text className="Content drop-shadow-2xl grow shrink basis-0 text-center text-gray-50 text-2xl font-bold font-['Inter'] leading-loose">
                    随机头像
                  </Text>
                </View>
                <View className="Description self-stretch h-12 flex-col justify-center items-center flex">
                    <Text className="Content drop-shadow-xl self-stretch text-center text-gray-50 text-base font-semibold font-['Inter'] leading-normal">
                      暂时从下面随机选择头像，未来将开放自己上传展现在问答中
                    </Text>
                  </View>
              </View>
            </View>
            <View className="Middle bg-white my-4 w-full h-full rounded-lg justify-center items-center inline-flex">
              <View className="avatarPart drop-shadow-2xl justify-center items-center gap-4 flex flex-row flex-wrap">
                {
                  [1,2,3,4,5,6,7,8,9,10].map((_,index)=>{
                    {
                    return registerStore.avatar===(index+1) ?
                    (
                    <View className="View-hover scale-90">
                      <IconFont name={`icon-avatar-${index+1}`}  size={80} />
                    </View>
                    )
                    :
                    (
                    <View w-full h-full
                    hoverClass="View-hover scale-90"
                    hoverStayTime={100}
                    onClick={this.selectAvatar.bind(this, index)}
                    >
                      <IconFont name={`icon-avatar-${index+1}`}  size={80} />
                    </View>
                    )
                    }
                  })
                }
              </View>
            </View>
            <View className="Bottom w-full self-stretch h-10 flex-col justify-center items-center gap-4 flex">
              <View
                className="Button drop-shadow-2xl self-stretch py-1.5 bg-white rounded-3xl shadow justify-center items-center inline-flex"
                onClick={this.submitAvatar}
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

export default HerAvatarPage;
