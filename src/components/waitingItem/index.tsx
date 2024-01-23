import { Component } from "react";
import { View, Text } from "@tarojs/components";
import { observer } from "mobx-react";
import { Button } from "@nutui/nutui-react-taro";
import "@nutui/nutui-react-taro/dist/style.css";
import "./index.scss";

interface WaitingItemProps {
  timeLeft: any;
  onClick: Function;
}

@observer
export default class WaitingItem extends Component<WaitingItemProps> {

  passWaitingTime=()=>{
    const {onClick} = this.props;
    onClick && onClick();
  }

  render() {
    const { timeLeft } = this.props;

    return (
      <>
        <View className="Waitingpart w-full h-full px-4 py-8 rounded-tl-lg rounded-tr-lg flex-col justify-between items-center inline-flex">
          <View className="Upper w-full self-stretch h-8 flex-col justify-center items-center gap-28 flex">
            <View className="Titlepart self-stretch h-8 flex-col justify-center items-center flex">
              <View className="Title self-stretch justify-center items-center inline-flex">
                <Text className="Content drop-shadow-2xl text-center text-orange-500 text-2xl font-bold font-['Inter'] leading-loose">
                  再玩一次
                </Text>
              </View>
            </View>
          </View>
          <View className="Middle w-full self-stretch h-28 flex-col justify-center items-center flex">
            <View className="Lock px-2 py-1 justify-center items-center gap-2.5 inline-flex" />
            {timeLeft.hours !== "00" && (
              <View className="Description self-stretch pt-4 pb-2 justify-center items-center gap-0.5 inline-flex">
                <Text className="Left drop-shadow-xl text-center text-gray-500 text-base font-normal font-['Inter'] leading-normal">
                  下一轮将在
                </Text>
                <Text className="Middle drop-shadow-2xl text-center text-gray-500 text-2xl font-semibold font-['Inter'] leading-loose">
                  {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
                </Text>
                <Text className="Right drop-shadow-xl text-center text-gray-500 text-base font-normal font-['Inter'] leading-normal">
                  后开放
                </Text>
              </View>
            )}
            {timeLeft.hours === "00" && (
              <View className="Description self-stretch pt-4 pb-2 justify-center items-center gap-0.5 inline-flex">
                <Text className="Left drop-shadow-xl text-center text-gray-500 text-base font-normal font-['Inter'] leading-normal">
                  下一轮将在
                </Text>
                <Text className="Middle drop-shadow-2xl text-center text-gray-500 text-2xl font-semibold font-['Inter'] leading-loose">
                  {timeLeft.minutes}:{timeLeft.seconds}
                </Text>
                <Text className="Right drop-shadow-xl text-center text-gray-500 text-base font-normal font-['Inter'] leading-normal">
                  后开放
                </Text>
              </View>
            )}
          </View>
          <View className="Bottom w-full self-stretch h-20 px-4 flex-col justify-center items-center gap-4 flex">
            <View className="Invitationpart w-full self-stretch h-20 flex-col justify-center items-center gap-5 flex">
              <View className="Remind flex-col justify-center items-center gap-3 flex"
                hoverClass="View-hover scale-90"
                hoverStayTime={100}
                onClick={this.passWaitingTime}
              >
                <Text className="Content drop-shadow-xl text-center text-orange-400 text-xs font-semibold font-['Inter'] leading-none">
                  快速跳过
                </Text>
              </View>
              <View className="Remind flex-col justify-center items-center gap-3 flex">
                <Text className="Content drop-shadow-xl text-center text-gray-400 text-xs font-semibold font-['Inter'] leading-none">
                  点击“邀请朋友”跳过等待时间哟
                </Text>
              </View>
              <View
                className="ReSendButton w-full drop-shadow-2xl bg-white rounded-3xl justify-center items-center inline-flex"
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
                  <Text className="Send text-center text-orange-500 text-lg font-bold font-['Inter'] leading-7">
                    邀请朋友
                  </Text>
                </Button>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
}
