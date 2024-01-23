import { Component } from "react";
import { View, Text } from "@tarojs/components";
import { observer } from "mobx-react";

import "@nutui/nutui-react-taro/dist/style.css";
import LeftUser from "./leftUser";
import RightUser from "./rightUser";
import LeftRobot from "./leftRobot";
import LeftAnnouncement from "./leftAnnouncement";
import LeftSystem from "./leftSystem";
import IconFont from "../iconfont";
import "./index.scss";


interface MsgChatItemProps {
  msgList: any;
  msgIntro: any;
  profile: any;
  onClick: Function;
  consumeCredit: Function;
  getFocuse: Function;
}

@observer
export default class MsgChatItem extends Component<MsgChatItemProps> {

  handleClick=(item)=>{
    // console.log("item in msgChatItem = ",item)
    const { onClick } = this.props;
    onClick && onClick(item);
  }

  consumeCredit=(item)=>{
    const { consumeCredit } = this.props;
    consumeCredit && consumeCredit(item);
  }

  getFocuse=()=>{
    const { getFocuse } = this.props;
    getFocuse && getFocuse();
  }

  render() {
    const { msgList, msgIntro, profile } = this.props;
    // console.log("msgList = ", msgList);
    // console.log("msgIntro = ", msgIntro.intro.slice());

    return (
      <>
        <View className="Middle w-full h-full self-stretch grow shrink basis-0 flex-col justify-start items-center flex">
          <View className="Titlepart w-full self-stretch h-8 flex-col justify-center items-center flex">
            <View className="Title self-stretch justify-center items-center inline-flex">
              <View className="Content text-center text-orange-50 text-2xl font-bold font-['Inter'] leading-loose">
                gotu@她的小纸条
              </View>
            </View>
          </View>
          <View className="Descriptionpart h-full flex-col justify-start items-center gap-1.5 flex">
            <View className="AvatarPart w-full justify-between items-center inline-flex">
              <View className="LeftPart w-64 h-12 pl-4 justify-start items-center gap-1.5 flex">
                <View className="Avatar w-12 h-12 flex-col justify-center items-center inline-flex">
                  {!msgIntro.avatar ? (
                    <IconFont name="icon-cartoon-mine" size={48} />
                  ) : (
                    <IconFont
                      name={`icon-avatar-${msgIntro.avatar}`}
                      size={48}
                    />
                  )}
                  {/* <Image
                    className="Avatar w-12 h-12 rounded-full"
                    src={avatarLeft}
                  /> */}
                </View>
                <View className="NameStatus w-48 h-12 flex-col justify-center items-start inline-flex">
                  <View className="Name w-48 rounded-3xl justify-start items-center inline-flex">
                    <View className="Content w-44 h-6 text-gray-400 text-sm font-semibold font-['Inter'] leading-tight">
                      {msgIntro.userName? msgIntro.userName : "xxx"}
                    </View>
                  </View>
                  <View className="Status w-48 rounded-xl justify-start items-center inline-flex">
                    <View className="Content w-48 text-gray-400 text-xs font-bold font-['Inter'] leading-none">
                      学校年级
                    </View>
                  </View>
                </View>
              </View>
              <View className="RightPart w-28 self-stretch pr-2 justify-end items-center flex">
                {msgIntro.isFocused ? (
                  <View
                    className="Button drop-shadow-2xl px-3 py-0.5 rounded-3xl border border-orange-500 justify-center items-center flex"
                    hoverClass="Button-hover scale-90"
                    hoverStayTime={100}
                    onClick={this.getFocuse}
                  >
                    <Text className="Content text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                      已关注
                    </Text>
                  </View>
                ) : (
                  <View
                    className="Button drop-shadow-2xl px-3 py-0.5 bg-orange-500 rounded-3xl border border-orange-500 justify-center items-center flex"
                    hoverClass="Button-hover scale-90"
                    hoverStayTime={100}
                    onClick={this.getFocuse}
                  >
                    <Text className="Content text-center text-white text-sm font-semibold font-['Inter'] leading-tight">
                      关注
                    </Text>
                  </View>
                )}
              </View>
            </View>
            <View className="Labepart self-stretch h-full pb-2 rounded-bl-2xl rounded-br-2xl border-b-2 border-gray-200 flex-col justify-center items-center gap-2 flex">
              {msgIntro.intro &&
                msgIntro.intro.slice().map((item, index) => {
                  return (
                    <>
                      <View className="Label drop-shadow-xl self-stretch px-4 rounded-3xl justify-start items-center inline-flex">
                        <IconFont name="icon-circle-dot" size={10} />
                        <Text className="Content grow shrink basis-0 text-gray-400 text-xs font-semibold font-['Inter'] leading-none">
                          {item.description}
                        </Text>
                      </View>
                      {item.respond && (
                        <View className="LabelResult px-2 py-0.5 bg-orange-50 rounded-3xl border border-orange-300 justify-center items-center gap-2.5 inline-flex">
                          <Text className="Content text-gray-400 text-xs font-semibold font-['Inter'] leading-none">
                            {item.respond}
                          </Text>
                        </View>
                      )}
                    </>
                  );
                })}
            </View>
          </View>
          {msgList &&
            msgList.slice().map((item, index) => {
              // console.log("item = ",item.sender === "other")
              return (
                <>
                  {item.sender === "other" && <LeftUser key={index} item ={item} msgIntro={msgIntro} profile={profile} onClick={this.handleClick} />}
                  {item.sender === "user" && <RightUser key={index} item ={item} msgIntro={msgIntro} profile={profile} onClick={this.handleClick} />}
                  {item.sender === "robot" && <LeftRobot key={index} item ={item} onClick={this.consumeCredit} />}
                  {item.sender === "system" && <LeftSystem key={index} item ={item} />}
                  {item.sender === "official" && <LeftAnnouncement key={index} item ={item} />}
                </>
              );
            })}
        </View>
      </>
    );
  }
}
