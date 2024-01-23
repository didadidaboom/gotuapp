import Taro from "@tarojs/taro";
import { Component } from "react";
import {
  View,
  Text
} from "@tarojs/components";
import { observer, inject } from "mobx-react";

import NavBar from "../../../components/customnavbar";
import "./index.scss";
import systemTool from "../../../utils/systemTool";
const { navBarHeight, navBarExtendHeight } = systemTool.getSystemInfo();

// const { tabbarHeight } = systemTool.height;

type PageStateProps = {
  store: {
    registerStore: {
      clearData:Function;
      submitGrade:Function;
    };
  };
};

interface HerGradeYearPage {
  props: PageStateProps;
}

@inject("store")
@observer
class HerGradeYearPage extends Component {
  state={
    selected:null
  }

  componentDidMount() {}

  componentWillUnmount() {
    const { registerStore } = this.props.store;
    registerStore.clearData()
  }

  componentDidShow() {}

  componentDidHide() {}

  toNextPage = () => {
    Taro.navigateTo({
      url: "/packageA/pages/herSchoolSelectionPage/index",
    });
  };

  toSkipPage = () => {
    Taro.navigateTo({
      url: "/packageA/pages/herSchoolSelectionPage/index",
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

  selectedGrade = (selected) => {
    // console.log("selected = ", selected);
    const { registerStore } = this.props.store;
    let res =  registerStore.submitGrade(selected)
    this.setState({
      selected
    })
    if(res){
      this.toNextPage()
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
          <View className="Gradepart w-full h-full rounded-tl-lg rounded-tr-lg flex-col justify-start items-center inline-flex">
            <View className="Upper w-full self-stretch h-24 flex-col justify-center items-center flex">
              <View className="Titilepart self-stretch h-24 rounded-tl-lg rounded-tr-lg flex-col justify-center items-center flex">
                <View className="Title self-stretch pt-4 pb-2 justify-between items-center inline-flex">
                  <View className="Left w-8 text-center text-white text-base font-semibold font-['Inter'] leading-normal">
                    {" "}
                  </View>
                  <View className="Title drop-shadow-2xl text-center text-white text-base font-semibold font-['Inter'] leading-normal">
                    你目前就读哪个年级？
                    <View className="Help iconfont icon-help w-5 p-0.5 justify-between items-center inline-flex"
                    hoverClass="icon-help-hover scale-90"
                    hoverStayTime={100}
                    />
                  </View>
                  <View
                    className="Riht w-8 text-center text-gray-500 text-xs font-normal font-['Inter'] leading-none"
                    hoverClass="Text-hover scale-90"
                    hoverStayTime={100}
                    onClick={this.toSkipPage}
                  >
                    跳过
                  </View>
                </View>
                <View
                  className={
                    this.state.selected===14
                    ?"Lastbutton View-hover scale-80 rounded-lg self-stretch px-4 h-14 bg-orange-200 rounded-tl-lg rounded-tr-lg justify-center items-center gap-2.5 inline-flex"
                    :"Lastbutton self-stretch px-4 h-14 bg-white rounded-tl-lg rounded-tr-lg justify-center items-center gap-2.5 inline-flex"
                  }
                  hoverClass="Button-hover scale-90"
                  hoverStayTime={100}
                  onClick={this.selectedGrade.bind(this, 14)}
                >
                  <Text className="Content drop-shadow-xl text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                    不是高中
                  </Text>
                </View>
              </View>
            </View>
            <View className="Middle w-full h-full self-stretch grow shrink basis-0 bg-white flex-col justify-center items-center flex">
              <View className="CurrentTitle self-stretch h-9 p-2 bg-orange-100 flex-col justify-center items-start gap-2.5 flex">
                <Text className="Content drop-shadow-xl text-gray-400 text-sm font-semibold font-['Inter'] leading-tight">
                  高中
                </Text>
              </View>
              <View className="Selections w-full h-full px-4 py-2 rounded-tl-lg rounded-tr-lg flex-col justify-start items-center inline-flex">
                <View
                  className={
                    this.state.selected===15
                    ?"Selection View-hover scale-80 self-stretch h-14 rounded-lg flex-col justify-center items-center flex"
                    :"Selection self-stretch h-14 flex-col justify-center items-center flex"
                  }
                  hoverClass="Button-hover scale-90"
                  hoverStayTime={100}
                  onClick={this.selectedGrade.bind(this, 15)}
                >
                  <View className="Current self-stretch h-14 justify-center items-center gap-2 inline-flex">
                    <Text className="Leftcontent drop-shadow-xl w-28 text-gray-400 text-sm font-normal font-['Inter'] leading-tight">
                      {/* {" "} */}2023级
                    </Text>
                    <Text className="Content drop-shadow-xl grow shrink basis-0 text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                      高一
                    </Text>
                    <Text className="Rightcontent drop-shadow-xl w-28 text-right text-gray-400 text-sm font-normal font-['Inter'] leading-tight">
                      2026届
                    </Text>
                  </View>
                  <View className="Underlinepart self-stretch justify-center items-center gap-2.5 inline-flex">
                    <View className="Underline drop-shadow-xl grow shrink basis-0 h-px bg-gray-300" />
                  </View>
                </View>
                <View
                  className={
                    this.state.selected===16
                    ?"Selection View-hover scale-80 self-stretch h-14 rounded-lg flex-col justify-center items-center flex"
                    :"Selection self-stretch h-14 flex-col justify-center items-center flex"
                  }
                  hoverClass="Button-hover scale-90"
                  hoverStayTime={100}
                  onClick={this.selectedGrade.bind(this, 16)}
                >
                  <View className="Current self-stretch h-14 justify-center items-center gap-2 inline-flex">
                    <Text className="Leftcontent drop-shadow-xl w-28 text-gray-400 text-sm font-normal font-['Inter'] leading-tight">
                      {/* {" "} */}2022级
                    </Text>
                    <Text className="Content drop-shadow-xl grow shrink basis-0 text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                      高二
                    </Text>
                    <Text className="Rightcontent drop-shadow-xl w-28 text-right text-gray-400 text-sm font-normal font-['Inter'] leading-tight">
                      2025届
                    </Text>
                  </View>
                  <View className="Underlinepart self-stretch justify-center items-center gap-2.5 inline-flex">
                    <View className="Underline drop-shadow-xl grow shrink basis-0 h-px bg-gray-300" />
                  </View>
                </View>
                <View
                  className={
                    this.state.selected===17
                    ?"Selection View-hover scale-80 self-stretch h-14 rounded-lg flex-col justify-center items-center flex"
                    :"Selection self-stretch h-14 flex-col justify-center items-center flex"
                  }
                  hoverClass="Button-hover scale-90"
                  hoverStayTime={100}
                  onClick={this.selectedGrade.bind(this, 17)}
                >
                  <View className="Current self-stretch h-14 justify-center items-center gap-2 inline-flex">
                    <Text className="Leftcontent drop-shadow-xl w-28 text-gray-400 text-sm font-normal font-['Inter'] leading-tight">
                      {/* {" "} */}2021级
                    </Text>
                    <Text className="Content drop-shadow-xl grow shrink basis-0 text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                      高三
                    </Text>
                    <Text className="Rightcontent drop-shadow-xl w-28 text-right text-gray-400 text-sm font-normal font-['Inter'] leading-tight">
                      2024届
                    </Text>
                  </View>
                  <View className="Underlinepart self-stretch justify-center items-center gap-2.5 inline-flex">
                    <View className="Underline drop-shadow-xl grow shrink basis-0 h-px bg-gray-300" />
                  </View>
                </View>
                <View
                  className={
                    this.state.selected===18
                    ?"Nextbutton View-hover scale-80 self-stretch h-14 rounded-lg flex-col justify-center items-center flex"
                    :"Nextbutton self-stretch h-14 flex-col justify-center items-center flex"
                  }
                  hoverClass="Button-hover scale-90"
                  hoverStayTime={100}
                  onClick={this.selectedGrade.bind(this, 18)}
                >
                  <View className="Current self-stretch py-5 justify-center items-center gap-2.5 inline-flex">
                    <Text className="Content drop-shadow-xl text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                      高中已毕业
                    </Text>
                  </View>
                  <View className="Underlinepart self-stretch justify-center items-center gap-2.5 inline-flex">
                    <View className="Underline drop-shadow-xl grow shrink basis-0 h-px bg-gray-300" />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default HerGradeYearPage;
