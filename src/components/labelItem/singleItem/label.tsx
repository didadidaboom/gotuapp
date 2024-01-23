import { Component } from "react";
import { View, Text, Button } from "@tarojs/components";
import { observer } from "mobx-react";

@observer
export default class Lable extends Component {
  handleClick = () => {
    const { onClick } = this.props;
    onClick && onClick();
  };

  render() {
    const { label } = this.props;
    return (
      <>
        <View
          className="Label drop-shadow-xl px-4 py-2 bg-orange-500 rounded-3xl justify-center items-center flex"
          // onClick={this.handleClick}
          // hoverClass="Button-hover scale-90"
        >
          <Text className="Content text-center text-white text-base font-semibold font-['Inter'] leading-normal">
            {label.name}
          </Text>
        </View>
      </>
    );
  }
}
