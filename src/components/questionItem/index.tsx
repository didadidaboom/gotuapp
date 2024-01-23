import { Component } from "react";
import { View, Text } from "@tarojs/components";
import { observer } from "mobx-react";

import "./index.scss";
import systemTool from "../../utils/systemTool";

const {
  navBarHeight,
  navBarExtendHeight,
} = systemTool.getSystemInfo()

const {
  tabbarHeight,

} = systemTool.height

@observer
export default class QAItem extends Component {
  handleClick(selected) {
    const { onClick, item, index } = this.props;
    onClick && onClick(index, selected);
  }
  toSkipPage() {
    const { toSkipPage } = this.props;
    toSkipPage && toSkipPage();
  }

  render() {
    const { item, index } = this.props;
    // console.log("render = ",item.selected)

    return (
      <>
        <View className="Content w-80 flex-col justify-between items-center inline-flex"
          style={{ paddingTop: navBarHeight + navBarExtendHeight, paddingBottom: tabbarHeight, height:'100%'}}
        >
          <View className="Upper h-20 flex-col justify-start items-center gap-28 flex">
            <View className="Titilepart w-80 h-28 flex-col justify-center items-center gap-2.5 inline-flex">
              <View className="SkipButton self-stretch px-1.5 justify-end items-center gap-2.5 inline-flex">
                <View className="Skip text-right text-gray-200 text-xs font-semibold font-['Inter'] leading-none"
                onClick={() => this.toSkipPage()}
                hoverClass="View-hover scale-50"
                >
                  跳过
                </View>
              </View>
              <View className="Title w-80 justify-start items-center gap-2.5 inline-flex">
                <View className="Content text-gray-50 text-2xl font-bold font-['Inter'] leading-loose">
                  角色设定({index + 1}/10)
                </View>
              </View>
              <View className="Description w-80 justify-center items-center gap-2.5 inline-flex">
                <View className="Content grow shrink basis-0 self-stretch text-gray-50 text-sm font-semibold font-['Inter'] leading-tight">
                  根据你的设定，用于分析你发布的活动参与者和你的熟悉程度，同时解锁其他活动
                </View>
              </View>
            </View>
          </View>
          {item.number === 2 && (
            <View className="Middle drop-shadow-2xl w-80 h-52 p-4 bg-gray-200 rounded-lg flex-col justify-center items-center gap-4 flex">
              <View className="Description w-80 px-4 justify-center items-center gap-2.5 inline-flex">
                <Text className="Content grow shrink basis-0 self-stretch text-gray-500 text-base font-semibold font-['Inter'] leading-normal">
                  {item.title}
                </Text>
              </View>
              <View className="Fillpart w-72 h-36 p-0.5 justify-center items-center gap-2 inline-flex">
                <View
                  className={
                    item.selected === 0
                      ? "Fill1 View-hover scale-80 drop-shadow-xl w-36 h-36 bg-white rounded-lg flex-col justify-center items-center inline-flex"
                      : "Fill1 drop-shadow-xl w-36 h-36 bg-white rounded-lg flex-col justify-center items-center inline-flex"
                  }
                  onClick={this.handleClick.bind(this, 0)}
                  hoverClass="Button-hover scale-90"
                >
                  <Text className="Content text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                    {item.answers[0]}
                  </Text>
                </View>
                <View
                  className={
                    item.selected === 1
                      ? "Fill2 View-hover scale-80 drop-shadow-xl w-36 h-36 bg-white rounded-lg flex-col justify-center items-center inline-flex"
                      : "Fill2 drop-shadow-xl w-36 h-36 bg-white rounded-lg flex-col justify-center items-center inline-flex"
                  }
                  onClick={this.handleClick.bind(this, 1)}
                  hoverClass="Button-hover scale-90"
                >
                  <Text className="Content text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                    {item.answers[1]}
                  </Text>
                </View>
              </View>
            </View>
          )}
          {item.number === 3 && (
            <View className="Middle drop-shadow-2xl w-80 h-64 p-4 bg-gray-200 rounded-lg flex-col justify-center items-center gap-4 inline-flex">
              <View className="Description w-80 px-4 justify-center items-center gap-2.5 inline-flex">
                <Text className="Content grow shrink basis-0 self-stretch text-gray-500 text-base font-semibold font-['Inter'] leading-normal">
                  {item.title}
                </Text>
              </View>
              <View className="Fillpart w-72 h-48 flex-col justify-start items-center gap-2 flex">
                <View
                  className={
                    item.selected == 0
                      ? "Fill1 View-hover scale-80 drop-shadow-xl self-stretch h-14 p-0.5 bg-white rounded-lg flex-col justify-center items-center flex"
                      : "Fill1 drop-shadow-xl self-stretch h-14 p-0.5 bg-white rounded-lg flex-col justify-center items-center flex"
                  }
                  onClick={this.handleClick.bind(this, 0)}
                  hoverClass="Button-hover scale-90"
                >
                  <Text className="Content text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                    {item.answers[0]}
                  </Text>
                </View>
                <View
                  className={
                    item.selected === 1
                      ? "Fill2 View-hover scale-80 drop-shadow-xl self-stretch h-14 p-0.5 bg-white rounded-lg flex-col justify-center items-center flex"
                      : "Fill2 drop-shadow-xl self-stretch h-14 p-0.5 bg-white rounded-lg flex-col justify-center items-center flex"
                  }
                  onClick={this.handleClick.bind(this, 1)}
                  hoverClass="Button-hover scale-90"
                >
                  <Text className="Content self-stretch text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                    {item.answers[1]}
                  </Text>
                </View>
                <View
                  className={
                    item.selected === 2
                      ? "Fill3 View-hover scale-80 drop-shadow-xl self-stretch h-14 p-0.5 bg-white rounded-lg flex-col justify-center items-center flex"
                      : "Fill3 drop-shadow-xl self-stretch h-14 p-0.5 bg-white rounded-lg flex-col justify-center items-center flex"
                  }
                  onClick={this.handleClick.bind(this, 2)}
                  hoverClass="Button-hover scale-90"
                >
                  <Text className="Content self-stretch text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                    {item.answers[2]}
                  </Text>
                </View>
              </View>
            </View>
          )}
          {item.number === 4 && (
            <View className="Middle drop-shadow-2xl w-80 h-72 p-4 bg-gray-200 rounded-lg flex-col justify-center items-center gap-4 inline-flex">
              <View className="Description w-80 px-4 justify-center items-center gap-2.5 inline-flex">
                <View className="Content grow shrink basis-0 self-stretch text-gray-500 text-base font-semibold font-['Inter'] leading-normal">
                  {item.title}
                </View>
              </View>
              <View className="Fillpart w-72 h-52 flex-col justify-center items-center gap-2 flex">
                <View className="Fillup w-72 h-24 justify-center items-center gap-2 inline-flex">
                  <View
                    className={
                      item.selected === 0
                        ? "Fill1 View-hover scale-80 drop-shadow-xl w-36 h-24 p-0.5 bg-white rounded-lg flex-col justify-center items-center inline-flex"
                        : "Fill1 drop-shadow-xl w-36 h-24 p-0.5 bg-white rounded-lg flex-col justify-center items-center inline-flex"
                    }
                    onClick={this.handleClick.bind(this, 0)}
                    hoverClass="Button-hover scale-90"
                  >
                    <Text className="Content text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                      {item.answers[0]}
                    </Text>
                  </View>
                  <View
                    className={
                      item.selected === 1
                        ? "Fill2 View-hover scale-80 drop-shadow-xl w-36 h-24 p-0.5 bg-white rounded-lg justify-center items-center flex"
                        : "Fill2 drop-shadow-xl w-36 h-24 p-0.5 bg-white rounded-lg justify-center items-center flex"
                    }
                    onClick={this.handleClick.bind(this, 1)}
                    hoverClass="Button-hover scale-90"
                  >
                    <Text className="Content text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                      {item.answers[1]}
                    </Text>
                  </View>
                </View>
                <View className="Filldown w-72 h-24 justify-center items-center gap-2 inline-flex">
                  <View
                    className={
                      item.selected === 2
                        ? "Fill3 View-hover scale-80 drop-shadow-xl w-36 h-24 p-0.5 bg-white rounded-lg flex-col justify-center items-center inline-flex"
                        : "Fill3 drop-shadow-xl w-36 h-24 p-0.5 bg-white rounded-lg flex-col justify-center items-center inline-flex"
                    }
                    onClick={this.handleClick.bind(this, 2)}
                    hoverClass="Button-hover scale-90"
                  >
                    <Text className="Content text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                      {item.answers[2]}
                    </Text>
                  </View>
                  <View
                    className={
                      item.selected === 3
                        ? "Fill4 View-hover scale-80 drop-shadow-xl w-36 h-24 p-0.5 bg-white rounded-lg flex-col justify-center items-center inline-flex"
                        : "Fill4 drop-shadow-xl w-36 h-24 p-0.5 bg-white rounded-lg flex-col justify-center items-center inline-flex"
                    }
                    onClick={this.handleClick.bind(this, 3)}
                    hoverClass="Button-hover scale-90"
                  >
                    <Text className="Content self-stretch text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                      {item.answers[3]}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}
          <View className="Bottom self-stretch h-14 flex-col justify-center items-center gap-4 flex">
            <View className="Button w-2 h-14 text-center text-gray-50 text-xs font-extrabold font-['Inter'] leading-none">
              {" "}
            </View>
          </View>
        </View>
      </>
    );
  }
}
