import { Component } from "react";
import { View } from "@tarojs/components";
import { observer } from "mobx-react";
import { Loading, ConfigProvider } from "@nutui/nutui-react-taro";

import "@nutui/nutui-react-taro/dist/style.css";
import IconFont from "../iconfont";
import "./index.scss";

interface PayCreditItemProps {
  onClick: Function;
  orderItem: any;
  credit: any;
  selectedItem: any;
  onChangeSelectedItem: any;
  buttongStatus: any;
}

@observer
export default class PayCreditItem extends Component<PayCreditItemProps> {
  onSubmmitPayment = () => {
    // console.log("inside")
    const { onClick } = this.props;
    onClick && onClick();
  };

  selectOrderItem = (item) => {
    const { onChangeSelectedItem } = this.props;

    onChangeSelectedItem && onChangeSelectedItem(item);
  };

  render() {
    const { orderItem, credit, selectedItem, buttongStatus } = this.props;
    // console.log("orderItem = ",orderItem)

    return (
      <>
        <View className="Creditpart w-full h-full px-2 py-2 flex-col justify-center items-center gap-2 inline-flex">
          <View className="Upper w-full self-stretch h-full flex-col justify-start items-start gap-2 flex">
            <View className="Titlepart self-stretch h-full flex-col justify-center items-center flex">
              {credit ? (
                <View className="CoinContent drop-shadow-xl self-stretch justify-center items-center gap-1 inline-flex">
                  <View className="Content text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                    你当前的积分为：
                  </View>
                  <View className="Content text-center text-orange-500 text-2xl font-semibold font-['Inter'] leading-loose">
                    {credit}
                  </View>
                  <IconFont name="icon-credit" size={36} />
                </View>
              ) : (
                <View className="CoinContent drop-shadow-xl self-stretch justify-center items-center gap-1 inline-flex">
                  <View className="Content text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                    未登陆账号
                  </View>
                </View>
              )}
            </View>
            <View className="Credititem w-full py-2 justify-center items-center gap-3 flex flex-row flex-wrap">
              {orderItem.map((item, index) => {
                return selectedItem.id === item.id ? (
                  <View className="Charge drop-shadow-2xl w-26 h-20 px-0.5 py-2 bg-orange-100 rounded-lg border border-orange-300 flex-col justify-center items-center gap-2 inline-flex"
                  style={{position: "relative"}}
                  >
                    {item.discount != 10 && (
                      <View
                        className="Dicount h-5 p-0.5 bg-red-500 rounded-tr-lg rounded-bl-lg justify-center items-center gap-2.5 inline-flex"
                        style={{
                          position: "absolute",
                          top: "0px",
                          right: "0px",
                          zIndex: 11,
                        }}
                      >
                        <View className="Content text-right text-white text-xs font-medium font-['Inter'] leading-none">
                          限时{item.discount}折
                        </View>
                      </View>
                    )}
                    <View className="Button drop-shadow-xl self-stretch px-4 py-1.5 bg-orange-300 rounded-3xl shadow justify-center items-center inline-flex">
                      <View className="Content text-center text-white text-lg font-bold font-['Inter'] leading-7">
                        {item.credit}
                      </View>
                      <IconFont name="icon-credit" size={36} />
                    </View>
                    {item.discount === 10 ? (
                      <View className="Moneydiscount drop-shadow-xl justify-center items-center inline-flex">
                        <View className="Money text-right text-gray-500 text-xs font-semibold font-['Inter'] leading-none">
                          {item.unit}
                          {item.finalPrice}
                        </View>
                      </View>
                    ) : (
                      <View className="Moneydiscount drop-shadow-xl justify-center items-center inline-flex">
                        <View className="Money text-right text-gray-500 text-xs font-semibold font-['Inter'] leading-none">
                          {item.unit}
                          {item.finalPrice}
                        </View>
                        <View className="Money text-gray-500 text-xs font-semibold font-['Inter'] line-through leading-none">
                          {item.unit}
                          {item.price}
                        </View>
                      </View>
                    )}
                  </View>
                ) : (
                  <View
                    className="Charge drop-shadow-2xl w-26 h-20 px-0.5 py-2 bg-gray-100 rounded-lg border border-gray-100 flex-col justify-center items-center gap-2 inline-flex"
                    hoverClass="View-hover scale-90"
                    hoverStayTime={100}
                    onClick={this.selectOrderItem.bind(this, item)}
                    style={{position: "relative"}}
                  >
                    {item.discount != 10 && (
                      <View
                        className="Dicount h-5 p-0.5 bg-red-500 rounded-tr-lg rounded-bl-lg justify-center items-center gap-2.5 inline-flex"
                        style={{
                          position: "absolute",
                          top: "0px",
                          right: "0px",
                          zIndex: 11,
                        }}
                      >
                        <View className="Content text-right text-white text-xs font-medium font-['Inter'] leading-none">
                          限时{item.discount}折
                        </View>
                      </View>
                    )}
                    <View className="Button drop-shadow-xl self-stretch px-4 py-1.5 bg-orange-200 rounded-3xl shadow justify-center items-center inline-flex">
                      <View className="Content text-center text-white text-lg font-bold font-['Inter'] leading-7">
                        {item.credit}
                      </View>
                      <IconFont name="icon-credit" size={36} />
                    </View>
                    {item.discount === 10 ? (
                      <View className="Moneydiscount drop-shadow-xl justify-center items-center inline-flex">
                        <View className="Money text-right text-gray-500 text-xs font-semibold font-['Inter'] leading-none">
                          {item.unit}
                          {item.finalPrice}
                        </View>
                      </View>
                    ) : (
                      <View className="Moneydiscount drop-shadow-xl justify-center items-center inline-flex">
                        <View className="Money text-right text-gray-500 text-xs font-semibold font-['Inter'] leading-none">
                          {item.unit}
                          {item.finalPrice}
                        </View>
                        <View className="Money text-gray-400 text-xs font-semibold font-['Inter'] line-through leading-none">
                          {item.unit}
                          {item.price}
                        </View>
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
          </View>
          <View className="Bottom self-stretch h-20 px-4 flex-col justify-center items-center gap-4 flex">
            <View className="Invitationpart self-stretch h-20 flex-col justify-center items-center gap-5 flex">
              {buttongStatus === "preparing" && (
                <View
                  className="ReSendButton drop-shadow-2xl self-stretch px-5 py-1.5 bg-orange-500 rounded-3xl shadow justify-center items-center inline-flex"
                  hoverClass="View-hover scale-90"
                  hoverStayTime={100}
                  onClick={this.onSubmmitPayment}
                >
                  <View className="Send text-center text-orange-50 text-lg font-bold font-['Inter'] leading-7">
                    立即支付{selectedItem.finalPrice}元
                  </View>
                </View>
              )}
              {buttongStatus === "paying" && (
                <View className="ReSendButton drop-shadow-2xl self-stretch px-5 py-1.5 bg-orange-300 rounded-3xl shadow justify-center items-center inline-flex">
                  <ConfigProvider
                    theme={{
                      nutuiLoadingIconColor: "#fa2c19",
                      nutuiLoadingIconSize: "20px",
                    }}
                  >
                    <Loading type="spinner" />
                  </ConfigProvider>
                  <View className="Send text-center text-orange-50 text-lg font-bold font-['Inter'] leading-7">
                    正在发起支付，请稍侯...
                  </View>
                </View>
              )}
              <View className="Remind flex-col justify-center items-center gap-3 flex">
                <View className="Content drop-shadow-xl text-center text-orange-400 text-xs font-semibold font-['Inter'] leading-none">
                  {"积分仅限于[gotu@她的小纸条]内使用"}
                </View>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
}
