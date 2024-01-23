import { Component } from "react";
import { View, Text } from "@tarojs/components";
import { observer } from "mobx-react";

import "./index.scss";

interface SchoolItemProps {
  item: any;
  index: number;
  onClick: Function;
  selected: any;
}

@observer
export default class SchoolItem extends Component<SchoolItemProps> {
  handleClick(item) {
    // item.selected = 1;
    const { onClick } = this.props;
    onClick && onClick(item);
  }

  render() {
    const { item, selected } = this.props;
    // console.log("render = ",item)

    return (
      <>
        <View
          className={
            item.id === selected
              ? "Selection View-hover scale-80 drop-shadow-2xl self-stretch h-14 flex-col justify-center items-center rounded-lg flex"
              : "Selection self-stretch h-14 flex-col justify-center items-center rounded-lg flex"
          }
          onClick={this.handleClick.bind(this, item)}
          hoverClass="Button-hover scale-90"
          hoverStayTime={100}
        >
          <View className="Current self-stretch h-14 justify-between items-center inline-flex">
            <View className="Leftcontent grow shrink basis-0 h-px flex-col justify-center items-start gap-0.5 inline-flex">
              <Text className="Upper drop-shadow-xl text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                {item.name}
              </Text>
              <Text className="Down drop-shadow-xl text-gray-400 text-xs font-normal font-['Inter'] leading-none">
                {item.address}
              </Text>
            </View>
            <View className="Rightcontent flex-col justify-center items-center inline-flex">
              <Text className="Upper drop-shadow-xl text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                {item.members}
              </Text>
              <Text className="Down drop-shadow-xl text-center text-gray-400 text-xs font-normal font-['Inter'] leading-none">
                成员数
              </Text>
            </View>
          </View>
          <View className="Underlinepart self-stretch justify-center items-center gap-2.5 inline-flex">
            <View className="Underline grow shrink basis-0 h-px bg-gray-300" />
          </View>
        </View>
      </>
    );
  }
}
