import { Component } from "react";
import { View, Text } from "@tarojs/components";
import { observer } from "mobx-react";

import IconFont from "../../iconfont";

interface LeftUserProps {
  item: any;
  msgIntro: any;
  profile: any;
  onClick: Function;
}

@observer
export default class LeftUser extends Component<LeftUserProps> {
  handleClick = (item) => {
    const { onClick } = this.props;
    onClick && onClick(item);
  };

  render() {
    const { item, msgIntro, profile } = this.props;
    // console.log("left user", msgIntro.actions);
    return (
      <>
        <View className="Leftuser self-stretch h-full py-2 flex-col justify-center items-center gap-2 flex">
          <View className="Time self-stretch text-center text-gray-300 text-xs font-medium font-['Inter'] leading-none">
            {item.time ? item.time : ""}
          </View>
          <View className="Leftmessage self-stretch pl-4 pr-16 justify-center items-start gap-2 inline-flex">
            <View className="Avatar w-12 h-12 flex-col justify-center items-center inline-flex">
              {!msgIntro.avatar ? (
                <IconFont name="icon-cartoon-mine" size={48} />
              ) : (
                <IconFont name={`icon-avatar-${msgIntro.avatar}`} size={48} />
              )}
              {/* <Image
                className="Avatar w-12 h-12 rounded-full"
                src={avatarLeft}
              /> */}
            </View>
            <View className="Input grow shrink basis-0 p-2 bg-orange-50 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl flex-col justify-center items-center gap-2.5 inline-flex">
              <View className="Content drop-shadow-xl self-stretch text-gray-400 text-sm font-semibold font-['Inter'] leading-tight">
                {item.content ? item.content : "加载中..."}
              </View>
            </View>
          </View>
          <View className="Actions self-stretch px-4 justify-center items-center gap-2.5 flex flex-row flex-wrap">
            {!!msgIntro.actions &&
              msgIntro.actions.map((item, index) => {
                return (
                  <View
                    className="Action drop-shadow-2xl px-2 py-0.5 bg-orange-50 rounded-2xl border border-orange-500 justify-start items-center gap-2.5 flex"
                    hoverClass="Button-hover scale-90"
                    hoverStayTime={100}
                    onClick={this.handleClick.bind(this, item)}
                  >
                    <Text className="Content drop-shadow-xl text-gray-500 text-xs font-semibold font-['Inter'] leading-none">
                      {item.actionName}
                    </Text>
                  </View>
                );
              })}
          </View>
        </View>
      </>
    );
  }
}
