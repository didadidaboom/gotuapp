import { Component } from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import { observer } from "mobx-react";

import "@nutui/nutui-react-taro/dist/style.css";
import logo from "../../assets/logo/GOTU_v5.png";
import "./index.scss";

interface LoadingItemProps {
  // timeLeft: any;
}

@observer
export default class LoadingItem extends Component<LoadingItemProps> {


  render() {
    // const { timeLeft } = this.props;

    return (
      <>
        <View className="Questionpart w-full h-full px-4 py-8 flex-col justify-between items-center inline-flex">
          <View className="Upper w-full self-stretch h-8 flex-col justify-center items-center gap-28 flex" />
          <View className="Middle w-full self-stretch h-36 px-14 py-4 rounded-lg flex-col justify-center items-center gap-8 flex">
            <View className="Description w-full self-stretch justify-center items-center gap-2.5 inline-flex">
              <View className="Content drop-shadow-xl w-80 text-center text-white text-base font-semibold font-['Inter'] leading-normal">
                邀请更多朋友来玩
              </View>
            </View>
            <View className="Sharebuttons drop-shadow-2xl bg-white rounded-3xl justify-center items-center inline-flex"
            hoverClass="View-hover scale-90"
            >
            <Button
              className=""
              hoverStayTime={100}
              openType="share"
              style={{
                border: "none",
                width: "100%",
                height: "100%",
                margin: "0",
                padding: "0",
              }}
            >
              <Text className="Content text-center text-orange-500 text-lg font-bold font-['Inter'] leading-7">
                分享app
              </Text>
            </Button>
            </View>
          </View>
          <View className="Bottom w-full h-20 flex-col justify-center items-center gap-2.5 inline-flex">
            <View className="Logo justify-center items-center gap-2.5 inline-flex">
              <Image className="GotuV51 w-12 h-12" src={logo} />
            </View>
            <View className="Description w-full justify-center items-center gap-2.5 inline-flex">
              <View className="Content grow shrink basis-0 text-center text-orange-50 text-xs font-normal font-['Inter'] leading-none">
                gotu@她的小纸条
              </View>
            </View>
          </View>
          {/* <View className="Bottom w-full self-stretch h-20 px-4 flex-col justify-center items-center gap-4 flex">

          </View> */}
        </View>
      </>
    );
  }
}
