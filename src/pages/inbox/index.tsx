import Taro from "@tarojs/taro";
import { Component } from "react";
import { View } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import { InfiniteLoading } from "@nutui/nutui-react-taro";
import "@nutui/nutui-react-taro/dist/style.css";

import NavBar from "../../components/customnavbar";
import withComponent from "../../components/generalComponent/mixin";
import MsgList from "../../components/msgList";
import "./index.scss";
import systemTool from "../../utils/systemTool";
const { navBarHeight, navBarExtendHeight } = systemTool.getSystemInfo();
const { tabbarHeight } = systemTool.height;

type PageStateProps = {
  store: {
    globalStore: {
      changeIndex: Function;
    };
    notificationStore: {
      notificationList: any;
      getNotificationList: Function;
      initData: Function;
      clearData: Function;
      changeReadStatus: Function;
      deleteItem: Function;
    };
  };
};

interface Inbox {
  props: PageStateProps;
}

@inject("store")
@observer
class Inbox extends Component {
  state = {
    hasMore: true,
  };

  componentDidMount() {
    const { notificationStore } = this.props.store;
    notificationStore.initData();
  }

  componentWillUnmount() {
    const { notificationStore } = this.props.store;
    notificationStore.clearData();
  }

  componentDidShow() {
    this.props.store.globalStore.changeIndex(1);
  }

  componentDidHide() {}

  setbaseDefault = () => {};

  toNextPage = (msgNotify_id) => {
    Taro.navigateTo({
      url: "/packageB/pages/msgChatPage/index?msgNotify_id=" + msgNotify_id,
    });
  };

  toSkipPage = () => {
    Taro.switchTab({
      url: "/pages/index/index",
    });
  };

  /**
   *
   * @param id notification id
   * @param msgType nidification type
   * @param read msg status
   */
  openMsg = (id, readStatus) => {
    const { notificationStore } = this.props.store;
    //change read status
    if (!readStatus) {
      notificationStore.changeReadStatus(id);
    }
    //go to msg detail page
    this.toNextPage(id);
  };

  deleteItem = (id, index) => {
    // console.log("id = ", id, "index = ", index);
    const { notificationStore } = this.props.store;
    const updateList = notificationStore.notificationList.slice();
    updateList.splice(index, 1);
    notificationStore.notificationList = updateList;
    // delete item from database throught API
    const del = notificationStore.deleteItem(id);
  };

  render() {
    const { notificationStore } = this.props.store;
    // console.log("notification = ",notificationStore.notificationList)
    const containerHeight = notificationStore.notificationList.length * 200;

    return (
      <>
        <View className="nav">
          <NavBar
            title="消息"
            // background="rgba(0,0,0,0)"
            // background="#F97316"
            background="#FFF7ED"
            // color="#fff"
            color="#F97316"
            // color = "black"
            iconTheme="white"
            // back
            // home
            onBack={this.gobackClick}
            // onHome={this.handlerGohomeClick}
            // extClass="lxy-navbar-extclass"
          />
        </View>
        <View
          className="flex-col justify-start items-center flex"
          id="scrollDemo"
          style={{
            width: "100%",
            height: "100%",
            paddingTop: navBarHeight + navBarExtendHeight,
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <InfiniteLoading loadingText=" " loadMoreText=" " target="scrollDemo">
            {notificationStore.notificationList.length > 0 &&
              notificationStore.notificationList.slice().map((item, index) => {
                return (
                  <MsgList
                    key={index}
                    item={item}
                    index={index}
                    onClick={this.openMsg}
                    onDelete={this.deleteItem}
                  />
                );
              })}
          </InfiniteLoading>
        </View>
        {/* <View
          className="Pagepart w-full h-full flex-col justify-start items-center flex"
          style={{
            paddingTop: navBarHeight + navBarExtendHeight,
            // paddingBottom: tabbarHeight,
            // height: "100%",
            // width: "100%",
          }}
        >
          <View
            className="Msgpart w-full h-full flex-col justify-start items-center flex"
            style={{
              height: containerHeight + "px",
              overflowX: "hidden",
              overflowY: "auto",
            }}
            // style={{ overflowX: "hidden", overflowY: "auto" }}
          >
            {notificationStore.notificationList.length > 0 &&
              notificationStore.notificationList.slice().map((item, index) => {
                return (
                  <MsgList
                    key={index}
                    item={item}
                    index={index}
                    onClick={this.openMsg}
                    onDelete={this.deleteItem}
                  />
                );
              })}
          </View>
        </View> */}
      </>
      // <>
      //   <View className="nav">
      //     <NavBar
      //       title="消息"
      //       // background="rgba(0,0,0,0)"
      //       // background="#F97316"
      //       background="#FFF7ED"
      //       // color="#fff"
      //       color="#F97316"
      //       // color = "black"
      //       iconTheme="white"
      //       // back
      //       // home
      //       onBack={this.gobackClick}
      //       // onHome={this.handlerGohomeClick}
      //       // extClass="lxy-navbar-extclass"
      //     />
      //   </View>
      //   <View
      //     className="Pagepart w-full h-full flex-col justify-start items-center flex"
      //     style={{
      //       paddingTop: navBarHeight + navBarExtendHeight,
      //       // paddingBottom: tabbarHeight,
      //       // height: "100%",
      //       // width: "100%",
      //     }}
      //   >
      //     <View
      //       className="Msgpart w-full h-full flex-col justify-start items-center flex"
      //       style={{ height: containerHeight + "px", overflowX: "hidden", overflowY: "auto" }}
      //       // style={{ overflowX: "hidden", overflowY: "auto" }}
      //     >
      //       {notificationStore.notificationList.length > 0 &&
      //         notificationStore.notificationList.slice().map((item, index) => {
      //           return (
      //             <MsgList
      //               key={index}
      //               item={item}
      //               index={index}
      //               onClick={this.openMsg}
      //               onDelete={this.deleteItem}
      //             />
      //           );
      //         })}
      //     </View>
      //   </View>
      // </>
    );
  }
}

export default Inbox;
