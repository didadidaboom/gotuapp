import { Component } from "react";
import { View, Text, Input } from "@tarojs/components";
import { observer } from "mobx-react";

import { Toast } from "@nutui/nutui-react-taro";
import IconFont from "../../iconfont";

interface LeftRobotProps {
  item: any;
  onClick: Function;
}

@observer
export default class LeftRobot extends Component<LeftRobotProps> {
  state = {
    content: null,
    showToast: false,
    toast: {
      msg: "请输入心跳问题",
      type: "warn",
      cover: true,
      duration: 2,
      closeOnOverlayClick: true,
      icon: "",
      center: true,
    },
  };

  handleClick = (item) => {
    if (item.action && item.action.actionType === 10008) {
      let is_filled = this.state.content ? true : false;
      if (!is_filled) {
        var toast = this.state.toast;
        toast.msg = "请先填写将要发起的“心跳问题”哟";
        this.setState({
          showToast: true,
          toast,
        });
      } else {
        const { onClick } = this.props;
        item.extraContent = this.state.content;
        this.setState({
          content: null,
        });
        onClick && onClick(item);
      }
    } else {
      const { onClick } = this.props;
      item.extraContent = this.state.content;
      this.setState({
        content: null,
      });
      onClick && onClick(item);
    }
  };

  getContentInput = (e) => {
    let value = e.detail.value;
    this.setState({
      content: value,
    });
  };

  render() {
    const { item } = this.props;
    // console.log("left robot", item)

    return (
      <>
        <View className="Leftuser self-stretch h-full py-2 flex-col justify-center items-center gap-2 flex">
          <View className="Time self-stretch text-center text-gray-300 text-xs font-medium font-['Inter'] leading-none">
            {item.time ? item.time : ""}
          </View>
          <View className="Leftmessage self-stretch pl-4 pr-16 justify-center items-start gap-2 inline-flex">
            <View className="Avatar w-12 h-12 flex-col justify-center items-center inline-flex">
              <IconFont name="icon-robot" size={48} />
            </View>
            {/* <View className="Input grow shrink basis-0 p-2 bg-orange-50 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl flex-col justify-center items-center gap-2.5 inline-flex">
              <View className="Content self-stretch text-gray-400 text-sm font-semibold font-['Inter'] leading-tight">
                {item.content ? item.content : "加载中..."}
              </View>
            </View> */}
            <View className="Input grow shrink basis-0 p-2 bg-orange-50 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl flex-col justify-center items-center gap-2.5 inline-flex">
              <View className="Content self-stretch text-gray-400 text-sm font-semibold font-['Inter'] leading-tight">
                {item.content ? item.content : "加载中..."}
              </View>
              <View className="Content self-stretch text-gray-400 text-sm font-semibold font-['Inter'] leading-tight">
                {item.action ? item.action.actionName : ""}
              </View>
              <View className="Content self-stretch text-gray-400 text-sm font-semibold font-['Inter'] leading-tight">
                {item.action ? item.action.actionDescription : ""}
              </View>
              <View className="Content self-stretch text-gray-400 text-sm font-semibold font-['Inter'] leading-tight">
                {item.action ? item.action.actionRule : ""}
              </View>
              <View className="Content self-stretch text-gray-400 text-sm font-semibold font-['Inter'] leading-tight">
                {item.action ? "积分消费："+item.action.actionCredit : ""}
              </View>
              {item.action && item.action.actionType === 10008 && (
                <Input
                  className="Inputpart h-full self-stretch px-2 bg-white border border-orange-500 rounded-lg justify-start items-center gap-2.5 inline-flex"
                  focus
                  placeholder="此填写“心跳问题”"
                  type="text"
                  value={this.state.content}
                  onInput={this.getContentInput}
                >
                  <View className="Content w-28 h-full self-stretch text-center text-gray-400 text-sm font-semibold font-['Inter'] leading-tight">
                    请填写你要提的“心跳问题”
                  </View>
                </Input>
              )}
              {item.action && item.action.actionType === 10007 && (
                <Input
                  className="Inputpart h-full self-stretch px-2 bg-white border border-orange-500 rounded-lg justify-start items-center gap-2.5 inline-flex"
                  focus
                  placeholder="选填写“打赏问题”"
                  type="text"
                  value={this.state.content}
                  onInput={this.getContentInput}
                >
                  <View className="Content w-28 h-full self-stretch text-center text-gray-400 text-sm font-semibold font-['Inter'] leading-tight">
                    选填写“打赏问题”
                  </View>
                </Input>
              )}
            </View>
          </View>

          <View className="Actions self-stretch px-4 justify-center items-center gap-2.5 flex flex-row flex-wrap">
            <View
              className="Action drop-shadow-2xl px-2 py-0.5 bg-orange-50 rounded-2xl border border-orange-500 justify-start items-center gap-2.5 flex"
              hoverClass="Button-hover scale-90"
              hoverStayTime={100}
              onClick={this.handleClick.bind(this, item)}
            >
              <Text className="Content drop-shadow-xl text-gray-500 text-xs font-semibold font-['Inter'] leading-none">
                立即行动
              </Text>
            </View>
          </View>
        </View>
        <Toast
          msg={this.state.toast.msg}
          visible={this.state.showToast}
          type={this.state.toast.type}
          cover={this.state.toast.cover}
          closeOnOverlayClick={this.state.toast.closeOnOverlayClick}
          onClose={() => {
            this.setState({ showToast: false });
          }}
        />
      </>
    );
  }
}
