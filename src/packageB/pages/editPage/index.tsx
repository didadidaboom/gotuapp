import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, Text } from "@tarojs/components";
import { observer, inject } from "mobx-react";

import NavBar from "../../../components/customnavbar";
import IconFont from "../../../components/iconfont";
import "./index.scss";
import systemTool from "../../../utils/systemTool";
const { navBarHeight, navBarExtendHeight } = systemTool.getSystemInfo();
const { tabbarHeight } = systemTool.height;

type PageStateProps = {
  store: {
    registerStore: {
      saveAll: Function;
    };
    profileStore: {
      profile: any;
      initData: Function;
      clearData: Function;
    };
  };
};

interface EditPage {
  props: PageStateProps;
}

@inject("store")
@observer
class EditPage extends Component {
  state = {
    selected: null,
  };
  componentDidMount() {}

  componentWillUnmount() {
    const { profileStore } = this.props.store;
    profileStore.initData();
  }

  componentDidShow() {}

  componentDidHide() {}

  toAccountPage = () => {
    Taro.navigateTo({
      url: "/packageB/pages/accountManagePage/index",
    });
  };

  toUsernameEdit = () => {
    Taro.navigateTo({
      url: "/packageB/pages/usernameEdit/index",
    });
  };

  toGenderEdit = () => {
    Taro.navigateTo({
      url: "/packageB/pages/genderEdit/index",
    });
  };

  toSchoolSelectionEdit = () => {
    Taro.navigateTo({
      url: "/packageB/pages/schoolSelectionEdit/index",
    });
  };

  toGradeYearEdit = () => {
    Taro.navigateTo({
      url: "/packageB/pages/gradeYearEdit/index",
    });
  };

  toAvatarEdit = () => {
    Taro.navigateTo({
      url: "/packageB/pages/avatarEdit/index",
    });
  };

  gobackClick() {
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
  }

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

  submitProfile = () => {
    //save all data to server
    const { registerStore } = this.props.store;
    let success = registerStore.saveAll();
    if (success) {
      this.gobackClick();
    }
  };

  render() {
    const { profileStore } = this.props.store;
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
          <View className="Editpart w-full h-full flex-col justify-start items-center gap-4 inline-flex">
            <View className="Middle self-stretch w-full h-full flex-col justify-center items-center flex">
              <View
                className="Avatar drop-shadow-2xl p-1 justify-start items-center gap-2.5 inline-flex"
                hoverClass="View-hover scale-90"
                hoverStayTime={100}
                onClick={this.toAvatarEdit}
              >
                {!profileStore.profile.avatar ? (
                  <IconFont name="icon-cartoon-mine" size={80} />
                ) : (
                  <IconFont
                    name={`icon-avatar-${profileStore.profile.avatar}`}
                    size={80}
                  />
                )}
              </View>
              {/* <div className="Avatar w-14 h-14 bg-zinc-300 rounded-full" /> */}
              <View className="Nameandgender w-full self-stretch h-32 py-2 flex-col justify-center items-center flex">
                <View className="Username w-full self-stretch h-14 flex-col justify-center items-center flex">
                  <View
                    className="Current drop-shadow-2xl w-full self-stretch h-14 px-4 bg-white rounded-lg justify-center items-center inline-flex"
                    hoverClass="View-hover scale-90"
                    hoverStayTime={100}
                    onClick={this.toUsernameEdit}
                  >
                    <View className="Leftcontent grow shrink basis-0 h-5 flex-col justify-between items-center inline-flex">
                      <View className="Content self-stretch text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                        用户名（建议实名）
                      </View>
                    </View>
                    <View className="Rightcontent w-40 h-6 justify-between items-center flex">
                      <View className="Content text-orange-500 text-sm font-semibold font-['Inter'] leading-tight">
                        {profileStore.profile.userName
                          ? profileStore.profile.userName
                          : "暂无"}
                      </View>
                      <View className="ArrowRight px-2 py-1.5 justify-center items-center gap-2.5 flex">
                        <IconFont name="icon-arrow-right" size={16} />
                      </View>
                    </View>
                  </View>
                  <View className="Underlinepart self-stretch px-2 justify-center items-center gap-2.5 inline-flex">
                    <View className="Underline grow shrink basis-0 h-px bg-gray-300 shadow" />
                  </View>
                </View>
                <View className="Gender w-full self-stretch h-14 flex-col justify-center items-center flex">
                  <View
                    className="Current drop-shadow-2xl w-full self-stretch h-14 px-4 bg-white rounded-lg justify-between items-center inline-flex"
                    hoverClass="View-hover scale-90"
                    hoverStayTime={100}
                    onClick={this.toGenderEdit}
                  >
                    <View className="Leftcontent w-full flex-col justify-center items-center inline-flex">
                      <View className="Content self-stretch text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                        性别
                      </View>
                    </View>
                    <View className="Rightcontent w-full h-6 justify-center items-center flex">
                      <View className="Content grow shrink basis-0 text-orange-500 text-sm font-semibold font-['Inter'] leading-tight">
                        {profileStore.profile.gender === 10 && (
                          <IconFont name="icon-gender-girl" size={16} />
                        )}
                        {profileStore.profile.gender === 11 && (
                          <IconFont name="icon-gender-boy" size={16} />
                        )}
                        {profileStore.profile.gender === 12 && (
                          <IconFont name="icon-gender-homo" size={16} />
                        )}
                      </View>
                      <View className="ArrowRight px-2 py-1.5 justify-center items-center gap-2.5 flex">
                        <IconFont name="icon-arrow-right" size={16} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View className="SchoolTitle w-full h-9 pl-2 py-2 flex-col justify-center items-center gap-2.5 flex">
                <View className="Content drop-shadow-xl self-stretch text-gray-400 text-sm font-semibold font-['Inter'] leading-tight">
                  学校
                </View>
              </View>
              <View className="Schoolandgrade w-full self-stretch h-32 py-2 flex-col justify-center items-center flex">
                <View className="School self-stretch grow shrink basis-0 flex-col justify-center items-center flex">
                  <View
                    className="Current drop-shadow-2xl self-stretch h-14 px-4 bg-white rounded-lg justify-center items-center inline-flex"
                    hoverClass="View-hover scale-90"
                    hoverStayTime={100}
                    onClick={this.toSchoolSelectionEdit}
                  >
                    <View className="Leftcontent grow shrink basis-0 h-6 justify-center items-center gap-2 flex">
                      <View className="University p-px flex-col justify-center items-center gap-2.5 inline-flex">
                        <IconFont name="icon-school" size={16} />
                      </View>
                      <View className="Content w-32 self-stretch text-gray-500 text-sm font-semibold font-['Inter'] leading-tight flex-col justify-center items-start flex">
                        学校
                      </View>
                    </View>
                    <View className="Rightcontent grow shrink basis-0 self-stretch justify-center items-center flex">
                      <View className="Content grow shrink basis-0 text-orange-500 text-sm font-semibold font-['Inter'] leading-tight">
                        {profileStore.profile.schoolName
                          ? profileStore.profile.schoolName
                          : "暂无"}
                      </View>
                      <View className="ArrowRight px-2 py-1.5 justify-center items-center gap-2.5 flex">
                        <IconFont name="icon-arrow-right" size={16} />
                      </View>
                    </View>
                  </View>
                  <View className="Underlinepart self-stretch px-2 justify-center items-center gap-2.5 inline-flex">
                    <View className="Underline grow shrink basis-0 h-px bg-gray-300 shadow" />
                  </View>
                </View>
                <View className="Grade w-full self-stretch h-14 flex-col justify-center items-center flex">
                  <View
                    className="Current drop-shadow-2xl self-stretch h-14 px-4 bg-white rounded-lg justify-center items-center inline-flex"
                    hoverClass="View-hover scale-90"
                    hoverStayTime={100}
                    onClick={this.toGradeYearEdit}
                  >
                    <View className="Leftcontent grow shrink basis-0 h-5 justify-center items-center gap-2 flex">
                      <View className="Grade px-1 py-0.5 justify-start items-start gap-2.5 flex">
                        <IconFont name="icon-grade" size={16} />
                      </View>
                      <View className="Content grow shrink basis-0 self-stretch text-gray-500 text-sm font-semibold font-['Inter'] leading-tight flex-col justify-center items-start flex">
                        年级
                      </View>
                    </View>
                    <View className="Rightcontent grow shrink basis-0 h-6 justify-center items-center flex">
                      <View className="Content grow shrink basis-0 text-orange-500 text-sm font-semibold font-['Inter'] leading-tight">
                        {profileStore.profile.gradeClass
                          ? profileStore.profile.gradeClass
                          : "暂无"}
                      </View>
                      <View className="Down text-center text-gray-400 text-xs font-normal font-['Inter'] leading-none">
                        {profileStore.profile.gradeYear
                          ? profileStore.profile.gradeYear
                          : "暂无"}
                      </View>
                      <View className="ArrowRight px-2 py-1.5 justify-center items-center gap-2.5 flex">
                        <IconFont name="icon-arrow-right" size={16} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View className="SettingTitle w-full h-9 pl-2 py-2 flex-col justify-center items-center gap-2.5 flex">
                <View className="Content drop-shadow-xl self-stretch text-gray-400 text-sm font-semibold font-['Inter'] leading-tight">
                  账号设置
                </View>
              </View>
              <View className="Accountsetting w-full self-stretch h-16 py-2 rounded-lg flex-col justify-center items-center gap-2 flex">
                <View
                  className="Current drop-shadow-2xl self-stretch h-14 px-4 bg-white rounded-lg justify-center items-center gap-2 inline-flex"
                  hoverClass="View-hover scale-90"
                  hoverStayTime={100}
                  onClick={this.toAccountPage}
                >
                  <View className="Setting p-px justify-center items-center gap-2.5 flex" />
                  <View className="Content drop-shadow-xl h-6 text-gray-500 text-sm font-semibold font-['Inter'] leading-tight flex-col justify-center items-center flex">
                    账号管理
                  </View>
                </View>
              </View>
              <View className="Bottom w-full self-stretch h-20 flex-col justify-center items-center gap-4 flex">
                <View
                  className="Button drop-shadow-2xl self-stretch py-1.5 bg-orange-500 rounded-3xl shadow justify-center items-center inline-flex"
                  onClick={this.submitProfile}
                  hoverClass="Button-hover scale-90"
                  hoverStayTime={100}
                >
                  <Text className="Content grow shrink basis-0 text-center text-orange-50 text-lg font-bold font-['Inter'] leading-7">
                    完成
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default EditPage;
