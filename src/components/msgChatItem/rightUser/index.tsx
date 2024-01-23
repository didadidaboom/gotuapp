import { Component } from "react";
import { View } from "@tarojs/components";
import { observer } from "mobx-react";

import IconFont from "../../iconfont";

interface RightUserProps {
  item: any;
  msgIntro: any;
  profile: any;
  onClick: Function;
}

@observer
export default class RightUser extends Component<RightUserProps> {
  handleClick = () => {
    const { onClick } = this.props;
    onClick && onClick();
  };

  render() {
    const { item, profile } = this.props;
    // console.log("right user",msgIntro.actions);
    return (
      <>
        <View className="Rightuser self-stretch h-full py-2 flex-col justify-center items-center gap-2 flex">
          <View className="Time self-stretch text-center text-gray-300 text-xs font-medium font-['Inter'] leading-none">
            {item.time ? item.time : ""}
          </View>
          <View className="Leftmessage self-stretch pl-16 pr-4 justify-center items-start gap-2 inline-flex">
            <View className="Input grow shrink basis-0 p-2 bg-orange-50 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl flex-col justify-center items-center gap-2.5 inline-flex">
              <View className="Content drop-shadow-xl self-stretch text-gray-400 text-sm font-semibold font-['Inter'] leading-tight">
                {item.content ? item.content : "加载中..."}
              </View>
            </View>
            <View className="Avatar w-12 h-12 flex-col justify-center items-center inline-flex">
              {!profile.avatar ? (
                <IconFont name="icon-cartoon-mine" size={48} />
              ) : (
                <IconFont name={`icon-avatar-${profile.avatar}`} size={48} />
              )}
              {/* <Image
                className="Avatar w-12 h-12 rounded-full"
                src={avatarRight}
              /> */}
            </View>
          </View>
        </View>
      </>
    );
  }
}
