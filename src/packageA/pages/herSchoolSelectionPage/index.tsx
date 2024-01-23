import Taro from "@tarojs/taro";
import { Component } from "react";
import {
  View,
  Input,
} from "@tarojs/components";
import { observer, inject } from "mobx-react";
import { Dialog, Toast } from "@nutui/nutui-react-taro";
import "@nutui/nutui-react-taro/dist/style.css";

import NavBar from "../../../components/customnavbar";
import SchoolItem from "../../../components/schoolList";
import withComponent from "../../../components/generalComponent/mixin";
import "./index.scss";
import systemTool from "../../../utils/systemTool";

const { navBarHeight, navBarExtendHeight } = systemTool.getSystemInfo();
// const { tabbarHeight } = systemTool.height;

type PageStateProps = {
  store: {
    registerStore: {
      schoolList: any;
      getSchoolList: Function;
      selectedSchool: any;
      searchValue: any;
      getSchoolSearch: Function;
      saveSearchInput: Function;
      getSchoolSearchList: Function;
      schoolSearchList: any;
      getSchoolSearchListInit: Function;
      submitSchool: Function;
      clearData: Function;
    };
  };
};

interface HerSchoolSelectionPage {
  props: PageStateProps;
}

@inject("store")
@observer
class HerSchoolSelectionPage extends Component {
  state = {
    is_search: false,
    moreVisible: false,
    page: {
      currentpage: 0,
      size: 2,
    },
    spage: {
      currentpage: 0,
      size: 2,
    },
    showToast: false,
    toast: {
      msg: "请输入输入搜索内容",
      type: "warn",
      cover: true,
      duration: 2,
      closeOnOverlayClick: true,
      icon: "",
      center: true,
    },
  };

  // componentDidMount() {
  //   this.getSchoolList();
  // }

  async componentDidMount() {
    await this.getSchoolList();
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  toNextPage = () => {
    Taro.navigateTo({
      url: "/packageA/pages/herAvatarPage/index",
    });
  };

  toSkipPage = () => {
    Taro.navigateTo({
      url: "/packageA/pages/herAvatarPage/index",
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

  setMoreVisible = (state) => {
    this.setState({
      moreVisible: state,
    });
  };

  confirmPicker = () => {
    this.setMoreVisible(false);
  };

  getSchoolList = async () => {
    let current = this.state.page.currentpage;
    let size = this.state.page.size;
    const { registerStore } = this.props.store;
    await registerStore.getSchoolList(current, size);
  };

  selectedSchool = (item) => {
    const { registerStore } = this.props.store;
    registerStore.selectedSchool = item.id;
    registerStore.submitSchool();
    this.toNextPage();
  };

  getMoreSchool = async () => {
    const { registerStore } = this.props.store;
    let keyword = registerStore.searchValue;
    if (keyword) {
      let spage = this.state.spage;
      spage.currentpage++;
      let size = this.state.spage.size;
      this.setState({
        spage,
      });
      // console.log("page ,",page.currentpage,size)

      let res = true;
      res = await registerStore.getSchoolSearchList(
        spage.currentpage,
        size,
        keyword
      );
      if (!res) {
        this.setMoreVisible(true);
      }
    } else {
      registerStore.schoolSearchList = [];
      let spage = this.state.spage;
      spage.currentpage = 0;
      let page = this.state.page;
      page.currentpage++;
      let size = this.state.page.size;
      this.setState({
        page,
      });
      // console.log("page ,",page.currentpage,size)
      let res = true;
      res = await registerStore.getSchoolList(page.currentpage, size);
      if (res===null) {
        this.setMoreVisible(true);
      }
    }
  };

  getSearchInput = (e) => {
    const { registerStore } = this.props.store;
    registerStore.saveSearchInput(e.detail.value);
    if (!e.detail.value) {
      registerStore.schoolSearchList = [];
      this.setState({
        is_search: false,
      });
    }
  };

  confromSearch = async () => {
    const { registerStore } = this.props.store;
    let keyword = registerStore.searchValue;
    if (keyword) {
      let res = await registerStore.getSchoolSearchListInit(0, 2, keyword);
      this.setState({
        is_search: res,
      });
    } else {
      this.setState({
        showToast: true,
      });
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
          className="Pagepart w-full h-full px-4 pt-2 flex-col justify-between items-center inline-flex"
          style={{
            paddingTop: navBarHeight + navBarExtendHeight,
            // paddingBottom: tabbarHeight,
            // height: "100%",
            // width: "100%",
          }}
        >
          <View className="Highpart w-full h-full rounded-tl-lg rounded-tr-lg flex-col justify-start items-center inline-flex">
            <View className="Upper w-full self-stretch  flex-col justify-center items-center flex">
              <View className="Titilepart self-stretch rounded-tl-lg rounded-tr-lg flex-col justify-center items-center flex">
                <View className="Title self-stretch px-1.5 pt-4 pb-2 justify-between items-center inline-flex">
                  <View className="Left w-8 text-center text-gray-500 text-xs font-medium font-['Inter'] leading-none">
                    {" "}
                  </View>
                  <View className="Title drop-shadow-2xl text-center text-white text-base font-semibold font-['Inter'] leading-normal">
                    选择你的学校
                    <View
                      className="Help iconfont icon-help w-5 p-0.5 justify-between items-center inline-flex"
                      hoverClass="icon-help-hover scale-90"
                      hoverStayTime={100}
                    />
                  </View>
                  <View
                    className="w-8 text-center text-gray-500 text-xs font-normal font-['Inter'] leading-none"
                    hoverClass="Text-hover scale-90"
                    hoverStayTime={100}
                    onClick={this.toSkipPage}
                  >
                    跳过
                  </View>
                </View>
                <View className="Content self-stretch h-14 px-2 bg-white rounded-tl-lg rounded-tr-lg justify-center items-center gap-2.5 inline-flex">
                  <View
                    className="Search drop-shadow-xl iconfont icon-search p-0.5 justify-start items-center gap-2.5 flex"
                    onClick={this.confromSearch}
                    hoverClass="icon-search-hover scale-90"
                    hoverStayTime={100}
                  />
                  <Input
                    className="Content grow shrink basis-0 text-gray-400 text-sm font-semibold font-['Inter'] leading-tight"
                    focus
                    placeholder="搜索..."
                    type="text"
                    value={registerStore.searchValue}
                    onInput={this.getSearchInput}
                  >
                    搜索...
                  </Input>
                </View>
                <View className="Underlinepart w-full px-2 justify-center items-center gap-2.5 inline-flex">
                  <View className="Underline w-full grow shrink basis-0 h-px bg-gray-300" />
                </View>
              </View>
            </View>
            <View className="Middle w-full h-full self-stretch grow shrink basis-0 bg-white flex-col justify-start items-center flex">
              <View className="Selections w-full h-full self-stretch grow shrink basis-0 px-4 py-0.5 rounded-tl-lg rounded-tr-lg flex-col justify-start items-center gap-0.5 flex">
                {this.state.is_search
                  ? registerStore.schoolSearchList.map((item, index) => {
                      return (
                        <SchoolItem
                          key={index}
                          item={item}
                          index={index}
                          onClick={this.selectedSchool}
                          selected={registerStore.selectedSchool}
                        />
                      );
                    })
                  : registerStore.schoolList.map((item, index) => {
                      return (
                        <SchoolItem
                          key={index}
                          item={item}
                          index={index}
                          onClick={this.selectedSchool}
                          selected={registerStore.selectedSchool}
                        />
                      );
                    })}
                <View
                  className="Choosebutton w-full self-stretch h-14 flex-col justify-center items-center rounded-lg flex"
                  onClick={this.getMoreSchool}
                  hoverClass="Button-hover scale-90"
                  hoverStayTime={100}
                >
                  <View className="Current self-stretch h-14 justify-center items-center inline-flex">
                    <View className="Content text-center text-gray-500 text-sm font-normal font-['Inter'] leading-tight">
                      更多
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Dialog
            title="跳转重置坐标？"
            content="基于你现在位置没有更多学校，点击确认跳转设置坐标"
            visible={this.state.moreVisible}
            footerDirection="vertical"
            onConfirm={this.confirmPicker}
            onCancel={this.setMoreVisible.bind(this, false)}
          ></Dialog>
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

export default HerSchoolSelectionPage;
