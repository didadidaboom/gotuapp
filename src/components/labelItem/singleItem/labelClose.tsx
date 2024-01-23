import { Component } from "react";
import { View, Text, Button } from "@tarojs/components";
import { observer } from "mobx-react";
import { relative } from "path";

@observer
export default class LableClose extends Component {
  handleClick = () => {
    const { onClick } = this.props;
    onClick && onClick();
  };

  render() {
    const { label } = this.props;
    return (
      <>
        <View className="LabelClose" style={{ position: "relative" }}>
          <View className="Label View-hover scale-50 px-4 py-2 bg-gray-200 rounded-3xl justify-center items-center flex">
            <Text className="Content text-center text-gray-500 text-base font-semibold font-['Inter'] leading-normal">
              {label.name}
            </Text>
          </View>
          <View
            className="Close iconfont icon-closefill icofont-spin text-gray-600 justify-center items-center gap-2.5 flex"
            style={{ position: "absolute", right: "-5rpx", top: "0rpx" }}
            // onClick={this.handleClick}
          />
        </View>
      </>
    );
  }
}
