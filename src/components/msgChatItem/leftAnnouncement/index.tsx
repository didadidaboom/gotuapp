import { Component } from "react";
import { View} from "@tarojs/components";
import { observer } from "mobx-react";

import IconFont from "../../iconfont";

interface LeftAnnouncementProps {
  item: any;
}

@observer
export default class LeftAnnouncement extends Component<LeftAnnouncementProps> {


  render() {
    const { item} = this.props;
    // console.log("left user", msgIntro.actions);
    return (
      <>
        <View className="Leftuser self-stretch h-full py-2 flex-col justify-center items-center gap-2 flex">
          <View className="Time self-stretch text-center text-gray-300 text-xs font-medium font-['Inter'] leading-none">
            {item.time ? item.time : ""}
          </View>
          <View className="Leftmessage self-stretch pl-4 pr-16 justify-center items-start gap-2 inline-flex">
            <View className="Avatar w-12 h-12 flex-col justify-center items-center inline-flex">
              <IconFont name="icon-gonggao" size={48} />
            </View>
            <View className="Input grow shrink basis-0 p-2 bg-orange-50 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl flex-col justify-center items-center gap-2.5 inline-flex">
              <View className="Content drop-shadow-xl self-stretch text-gray-400 text-sm font-semibold font-['Inter'] leading-tight">
                {item.content ? item.content : "加载中..."}
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
}
