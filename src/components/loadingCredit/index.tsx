import { Component } from "react";
import { View } from "@tarojs/components";
import { observer } from "mobx-react";

import "@nutui/nutui-react-taro/dist/style.css";
import IconFont from "../iconfont";
import "./index.scss";

interface LoadingCreditItemProps {
  creditGoods: any;
  onClick: Function;
}

@observer
export default class LoadingCreditItem extends Component<LoadingCreditItemProps> {
  toShopPage = () => {
    const { onClick } = this.props;
    onClick && onClick();
  };

  render() {
    const { creditGoods } = this.props;

    return (
      <>
        <View className="Shoppart w-full h-full px-4 py-2 flex-col justify-between items-center inline-flex">
          <View className="Middle w-full self-stretch flex-col justify-center items-center flex">
            <View className="Creditpart self-stretch h-20 flex-col justify-center items-center flex">
              <View className="CrediteTitle self-stretch h-9 py-2 flex-col justify-center items-center gap-2.5 flex">
                <View className="Content drop-shadow-xl self-stretch text-center text-orange-500 text-sm font-semibold font-['Inter'] leading-tight">
                  恭喜你获得积分奖励
                </View>
              </View>
              <View className="CoinContent drop-shadow-xl self-stretch py-2 justify-center items-center gap-1 inline-flex">
                <IconFont name="icon-plus" size={36} />
                <View className="Content drop-shadow-xl text-center text-orange-500 text-2xl font-semibold font-['Inter'] leading-loose">
                  {
                    creditGoods.filter((item) => item.type === "10005")[0]
                      .credit
                  }
                </View>
                <IconFont name="icon-credit" size={36} />
                {/* <View className="Bag justify-center items-center gap-2.5 flex" /> */}
              </View>
            </View>
            <View className="Activitypart w-full h-full self-stretch flex-col justify-start items-center flex">
              <View className="MiddleTitle w-full self-stretch h-9 py-2 flex-col justify-center items-center gap-2.5 flex">
                <View className="Content drop-shadow-xl self-stretch text-orange-400 text-sm font-semibold font-['Inter'] leading-tight">
                  热门活动：
                </View>
              </View>
              <View className="Selections w-full h-full self-stretch flex-col justify-center items-center gap-2 flex">
                {creditGoods &&
                  creditGoods.slice().map((item, index) => {
                    return (
                      item.status === "consume" && (
                        <View className="Selection drop-shadow-2xl w-full self-stretch py-2 bg-white rounded-lg justify-center items-center inline-flex">
                          <View className="Contentpartinsimple grow shrink basis-0 px-2 flex-col justify-center items-center gap-2 inline-flex">
                            <View className="Content self-stretch text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                              {item.name}
                            </View>
                          </View>
                          <View
                            className="Button drop-shadow-xl px-4 py-1.5 bg-orange-300 rounded-3xl shadow justify-center items-center flex"
                            onClick={this.toShopPage}
                            hoverClass="View-hover scale-90"
                            hoverStayTime={100}
                          >
                            <View className="Content text-center text-white text-lg font-bold font-['Inter'] leading-7">
                              前往
                            </View>
                            {/* <View className="Bag justify-center items-center gap-2.5 flex" /> */}
                            {/* <IconFont name="icon-credit" size={36} /> */}
                          </View>
                        </View>
                      )
                    );
                  })}
              </View>
            </View>
            <View className="Earnpart w-full h-full self-stretch flex-col justify-start items-center flex">
              <View className="MiddleTitle self-stretch h-9 py-2 flex-col justify-center items-start gap-2.5 flex">
                <View className="Content drop-shadow-xl text-orange-400 text-sm font-semibold font-['Inter'] leading-tight">
                  获取更多积分：
                </View>
              </View>
              <View className="Selections w-full self-stretch h-full flex-col justify-center items-center gap-2 flex">
                {creditGoods &&
                  creditGoods.slice().map((item, index) => {
                    return (
                      item.status === "earn" && (
                        <View className="Selection drop-shadow-2xl w-full self-stretch py-2 bg-white rounded-lg justify-center items-center inline-flex">
                          <View className="Contentpartinsimple grow shrink basis-0 px-2 flex-col justify-center items-center gap-2 inline-flex">
                            <View className="Content self-stretch text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                              {item.name}
                            </View>
                          </View>
                          <View
                            className="Button drop-shadow-xl px-4 py-1.5 bg-orange-300 rounded-3xl shadow justify-center items-center flex"
                            onClick={this.toShopPage}
                            hoverClass="View-hover scale-90"
                            hoverStayTime={100}
                          >
                            <View className="Content text-center text-white text-lg font-bold font-['Inter'] leading-7">
                              前往
                            </View>
                            {/* <View className="Bag justify-center items-center gap-s2.5 flex" /> */}
                            {/* <IconFont name="icon-credit" size={36} /> */}
                          </View>
                        </View>
                      )
                    );
                  })}
              </View>
            </View>
          </View>
          <View className="Bottom self-stretch h-20 px-4 pt-8 flex-col justify-center items-center gap-4 flex">
            <View className="Invitationpart self-stretch h-20 flex-col justify-center items-center gap-5 flex">
              <View
                className="ReSendButton drop-shadow-2xl self-stretch px-5 py-1.5 bg-white rounded-3xl shadow justify-center items-center inline-flex"
                onClick={this.toShopPage}
                hoverClass="View-hover scale-90"
                hoverStayTime={100}
              >
                <View className="Send text-center text-orange-500 text-lg font-bold font-['Inter'] leading-7">
                  前往
                </View>
              </View>
              <View className="Remind flex-col justify-center items-center gap-3 flex">
                <View className="Content text-center text-orange-400 text-xs font-semibold font-['Inter'] leading-none">
                  点击前往参与活动
                </View>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
}
