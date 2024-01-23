import { Component, createRef } from "react";
import { View, Text } from "@tarojs/components";
import { observer } from "mobx-react";
import { Animate } from "@nutui/nutui-react-taro";
import { AtSwipeAction } from "taro-ui";

import "@nutui/nutui-react-taro/dist/style.css";
import IconFont from "../iconfont";
import "./index.scss";

interface MsgListProps {
  index: any;
  item: any;
  onClick: Function;
  onDelete: Function;
}

// {
//   id: 10000,
//   msgType: 2001,   //1001:系统消息 2001:官方公告信息  3001:同学消息
//   grade: null,
//   grade_class: '',
//   gender: null,  //girl0  boy11  homo2
//   gender_name:"",
//   name:'官方',
//   sendTime:"2021-08-01 12:00:00",
//   timeGap:"6m",
//   read: false,
// }

@observer
export default class MsgList extends Component<MsgListProps> {
  openMsg = (item) => {
    const { onClick } = this.props;
    onClick && onClick(item.id, item.readStatus);
    if (!item.readStatus) {
      item.readStatus = true;
    }
  };

  handleSingle(index) {
    // console.log(index);
  }
  handleChange(id, index) {
    const { onDelete } = this.props;
    onDelete && onDelete(id, index);
  }

  render() {
    const { item, index } = this.props;
    // console.log("item = ", item, index);

    return (
      <>
        {item.msgType === "2001" && (
          <View
            className="w-100 h-100"
            hoverClass="View-hover scale-90"
            hoverStayTime={100}
            style={{ borderRadius: "20rpx !important" }}
          >
            <AtSwipeAction
              className="swipe"
              key={item.id}
              onOpened={this.handleSingle.bind(this, index)}
              isOpened={false}
              options={[
                {
                  text: "删除",
                  style: {
                    backgroundColor: "#FF4949",
                  },
                },
              ]}
              onClick={this.handleChange.bind(this, item.id, index)}
            >
              <View
                className={
                  !item.readStatus
                    ? "Message drop-shadow-2xl self-stretch h-14 px-4 pt-2 pb-2 bg-white rounded justify-between items-center inline-flex"
                    : "Message opacity-60 drop-shadow-2xl self-stretch h-14 px-4 pt-2 pb-2 bg-white rounded justify-between items-center inline-flex"
                }
                // style={{ marginRight: "15%" }}
                style={{ width: "750rpx" }}
                onClick={this.openMsg.bind(this, item)}
              >
                <View className="Left justify-start items-center gap-2 flex">
                  <View className="Group w-8 h-8 relative items-center flex">
                    <IconFont name="icon-gonggao" size={24} />
                  </View>
                  <View className="Content justify-start items-center gap-0.5 flex">
                    <Text className="Pre drop-shadow-xl text-center text-gray-500 text-base font-semibold font-['Inter'] leading-normal">
                      来自
                    </Text>
                    <Text className="Name drop-shadow-xl text-center text-orange-500 text-base font-semibold font-['Inter'] leading-normal">
                      {item.name}
                    </Text>
                    <Text className="Post drop-shadow-xl text-center text-gray-500 text-base font-semibold font-['Inter'] leading-normal">
                      的消息
                    </Text>
                  </View>
                </View>
                <View className="Right drop-shadow-xl text-center text-gray-500 text-xs font-semibold font-['Inter'] leading-none">
                  {item.timeGap}
                </View>
              </View>
            </AtSwipeAction>
          </View>
        )}
        {item.msgType === "1001" && (
          <View
            className="w-100 h-100"
            hoverClass="View-hover scale-90"
            hoverStayTime={100}
            style={{ borderRadius: "20rpx !important" }}
          >
            <AtSwipeAction
              className="swipe"
              key={item.id}
              onOpened={this.handleSingle.bind(this, index)}
              isOpened={false}
              options={[
                {
                  text: "删除",
                  style: {
                    backgroundColor: "#FF4949",
                  },
                },
              ]}
              onClick={this.handleChange.bind(this, item.id, index)}
            >
              <View
                className={
                  !item.readStatus
                    ? "Message drop-shadow-2xl self-stretch h-14 px-4 pt-2 pb-2 bg-white rounded justify-between items-center inline-flex"
                    : "Message opacity-60 drop-shadow-2xl self-stretch h-14 px-4 pt-2 pb-2 bg-white rounded justify-between items-center inline-flex"
                }
                // style={{ marginRight: "15%" }}
                style={{ width: "750rpx" }}
                onClick={this.openMsg.bind(this, item)}
              >
                <View className="Left justify-start items-center gap-2 flex">
                  <View className="Group w-8 h-8 relative items-center flex">
                    <IconFont name="icon-systemmsg" size={24} />
                  </View>
                  <View className="Content justify-start items-center gap-0.5 flex">
                    <Text className="Pre drop-shadow-xl text-center text-gray-500 text-base font-semibold font-['Inter'] leading-normal">
                      来自
                    </Text>
                    <Text className="Name drop-shadow-xl text-center text-orange-500 text-base font-semibold font-['Inter'] leading-normal">
                      {item.name}
                    </Text>
                    <Text className="Post drop-shadow-xl text-center text-gray-500 text-base font-semibold font-['Inter'] leading-normal">
                      的消息
                    </Text>
                  </View>
                </View>
                <Text className="Right drop-shadow-xl text-center text-gray-500 text-xs font-semibold font-['Inter'] leading-none">
                  {item.timeGap}
                </Text>
              </View>
            </AtSwipeAction>
          </View>
        )}
        {item.msgType === "3001" && item.questionType === 0 && (
          <View
            className="w-100 h-100"
            hoverClass="View-hover scale-90"
            hoverStayTime={100}
            style={{ borderRadius: "20rpx !important" }}
          >
            <AtSwipeAction
              className="swipe"
              key={item.id}
              onOpened={this.handleSingle.bind(this, index)}
              isOpened={false}
              options={[
                {
                  text: "删除",
                  style: {
                    backgroundColor: "#FF4949",
                  },
                },
              ]}
              onClick={this.handleChange.bind(this, item.id, index)}
            >
              <View
                className={
                  !item.readStatus
                    ? "Message drop-shadow-2xl self-stretch h-14 px-4 pt-2 pb-2 bg-white rounded justify-between items-center inline-flex"
                    : "Message opacity-60 drop-shadow-2xl self-stretch h-14 px-4 pt-2 pb-2 bg-white rounded justify-between items-center inline-flex"
                }
                // style={{ marginRight: "15%" }}
                style={{ width: "750rpx" }}
                onClick={this.openMsg.bind(this, item)}
              >
                <View className="Left justify-start items-center gap-2 flex">
                  <View className="Girl Boy homo w-8 h-8 relative items-center flex">
                    {item.gender === 10 && (
                      <IconFont name="icon-gender-girl" size={24} />
                    )}
                    {item.gender === 11 && (
                      <IconFont name="icon-gender-boy" size={24} />
                    )}
                    {item.gender === 12 && (
                      <IconFont name="icon-gender-homo" size={24} />
                    )}
                  </View>
                  <View className="Content justify-start items-center gap-0.5 flex">
                    <Text className="Pre drop-shadow-xl text-center text-gray-500 text-base font-semibold font-['Inter'] leading-normal">
                      一个
                    </Text>
                    <Text className="Name drop-shadow-xl text-center text-orange-500 text-base font-semibold font-['Inter'] leading-normal">
                      {item.gradeClass}的{item.genderName}
                      {/* {item.name} */}
                    </Text>
                    <Text className="Post drop-shadow-xl text-center text-gray-500 text-base font-semibold font-['Inter'] leading-normal">
                      选择了你
                    </Text>
                  </View>
                </View>
                <Text className="Right drop-shadow-xl text-center text-gray-500 text-xs font-semibold font-['Inter'] leading-none">
                  {item.timeGap}
                </Text>
              </View>
            </AtSwipeAction>
          </View>
        )}
        {item.msgType === "3001" &&
          item.questionType === 1 &&
          (!item.readStatus ? (
            <Animate type="ripple" loop>
              <View
                className="w-100 h-100"
                hoverClass="View-hover scale-90"
                hoverStayTime={100}
                style={{ borderRadius: "20rpx !important" }}
              >
                <AtSwipeAction
                  className="swipe"
                  key={item.id}
                  onOpened={this.handleSingle.bind(this, index)}
                  isOpened={false}
                  options={[
                    {
                      text: "删除",
                      style: {
                        backgroundColor: "#FF4949",
                      },
                    },
                  ]}
                  onClick={this.handleChange.bind(this, item.id, index)}
                >
                  <View
                    className="Message drop-shadow-2xl self-stretch h-14 px-4 pt-2 pb-2 bg-white rounded justify-between items-center inline-flex"
                    // style={{ marginRight: "15%" }}
                    style={{ width: "750rpx" }}
                    onClick={this.openMsg.bind(this, item)}
                  >
                    <View className="Left justify-start items-center gap-2 flex">
                      <View className="Girl Boy homo w-8 h-8 relative items-center flex">
                        {item.gender === 10 && (
                          <IconFont name="icon-gender-girl" size={24} />
                        )}
                        {item.gender === 11 && (
                          <IconFont name="icon-gender-boy" size={24} />
                        )}
                        {item.gender === 12 && (
                          <IconFont name="icon-gender-homo" size={24} />
                        )}
                      </View>
                      <View className="Content justify-start items-center gap-0.5 flex">
                        <Text className="Pre drop-shadow-xl text-center text-gray-500 text-base font-semibold font-['Inter'] leading-normal">
                          一个
                        </Text>
                        <Text className="Name drop-shadow-xl text-center text-orange-500 text-base font-semibold font-['Inter'] leading-normal">
                          {item.gradeClass}的{item.genderName}
                          {item.name}
                        </Text>
                        <Text className="Post drop-shadow-xl text-center text-gray-500 text-base font-semibold font-['Inter'] leading-normal">
                          表白了你
                        </Text>
                      </View>
                    </View>
                    <Text className="Right drop-shadow-xl text-center text-gray-500 text-xs font-semibold font-['Inter'] leading-none">
                      {item.timeGap}
                    </Text>
                  </View>
                </AtSwipeAction>
              </View>
            </Animate>
          ) : (
            <View
              className="w-100 h-100"
              hoverClass="View-hover scale-90"
              hoverStayTime={100}
              style={{ borderRadius: "20rpx !important" }}
            >
              <AtSwipeAction
                className="swipe"
                key={item.id}
                onOpened={this.handleSingle.bind(this, index)}
                isOpened={false}
                options={[
                  {
                    text: "删除",
                    style: {
                      backgroundColor: "#FF4949",
                    },
                  },
                ]}
                onClick={this.handleChange.bind(this, item.id, index)}
              >
                <View
                  className="Message opacity-60 drop-shadow-2xl self-stretch h-14 px-4 pt-2 pb-2 bg-white rounded justify-between items-center inline-flex"
                  // style={{ marginRight: "15%" }}
                  style={{ width: "750rpx" }}
                  // hoverClass="View-hover scale-90"
                  // hoverStayTime={100}
                  onClick={this.openMsg.bind(this, item)}
                >
                  <View className="Left justify-start items-center gap-2 flex">
                    <View className="Girl Boy homo w-8 h-8 relative items-center flex">
                      {item.gender === 10 && (
                        <IconFont name="icon-gender-girl" size={24} />
                      )}
                      {item.gender === 11 && (
                        <IconFont name="icon-gender-boy" size={24} />
                      )}
                      {item.gender === 12 && (
                        <IconFont name="icon-gender-homo" size={24} />
                      )}
                    </View>
                    <View className="Content justify-start items-center gap-0.5 flex">
                      <Text className="Pre drop-shadow-xl text-center text-gray-500 text-base font-semibold font-['Inter'] leading-normal">
                        一个
                      </Text>
                      <Text className="Name drop-shadow-xl text-center text-orange-500 text-base font-semibold font-['Inter'] leading-normal">
                        {item.gradeClass}的{item.genderName}
                        {item.name}
                      </Text>
                      <Text className="Post drop-shadow-xl text-center text-gray-500 text-base font-semibold font-['Inter'] leading-normal">
                        表白了你
                      </Text>
                    </View>
                  </View>
                  <Text className="Right drop-shadow-xl text-center text-gray-500 text-xs font-semibold font-['Inter'] leading-none">
                    {item.timeGap}
                  </Text>
                </View>
              </AtSwipeAction>
            </View>
          ))}
      </>
    );
  }
}
