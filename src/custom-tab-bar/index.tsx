import { CoverImage, CoverView } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { inject, observer } from "mobx-react";
import { Component } from "react";
import { isIphoneSafeArea } from "../utils/common";
import "./index.scss";
import Intellect from "../assets/images/global_red.png";

type PageStateProps = {
  store: {
    globalStore: {
      selected: number;
      changeIndex: Function;
    };
  };
};

interface customTabBar {
  props: PageStateProps;
}

const IS_IPHONEX = isIphoneSafeArea();

@inject("store")
@observer
class customTabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#1296db",
      // selectedColor:"#F97316",
      selectedColor: "#FFCC66",
      list: [
        {
          pagePath: "pages/index/index",
          text: "gotu",
          iconPath:
            Taro.getEnv() === "WEB"
              ? require("../assets/images/tabbar_scheme1/gotu.png")
              : "/assets/images/tabbar_scheme1/gotu.png",
          selectedIconPath:
            Taro.getEnv() === "WEB"
              ? require("../assets/images/tabbar_scheme1/gotu_active.png")
              : "/assets/images/tabbar_scheme1/gotu_active.png",
        },
        {
          pagePath: "pages/inbox/index",
          text: "消息",
          iconPath:
            Taro.getEnv() === "WEB"
              ? require("../assets/images/tabbar_scheme1/inbox.png")
              : "/assets/images/tabbar_scheme1/inbox.png",
          selectedIconPath:
            Taro.getEnv() === "WEB"
              ? require("../assets/images/tabbar_scheme1/inbox_active.png")
              : "/assets/images/tabbar_scheme1/inbox_active.png",
        },
        {
          pagePath: "pages/profile/index",
          text: "我的",
          iconPath:
            Taro.getEnv() === "WEB"
              ? require("../assets/images/tabbar_scheme1/profile.png")
              : "/assets/images/tabbar_scheme1/profile.png",
          selectedIconPath:
            Taro.getEnv() === "WEB"
              ? require("../assets/images/tabbar_scheme1/profile_active.png")
              : "/assets/images/tabbar_scheme1/profile_active.png",
        },
      ],
      num: 9,
    };
  }

  switchTab = (item) => {
    const url = "/" + item.pagePath;
    // console.log("url = ",url)
    Taro.switchTab({
      url: url,
    });
  };

  jumpIntellect = () => {
    Taro.navigateTo({ url: "/pages/about/index" });
  };

  render() {
    const {
      globalStore: { selected },
    } = this.props.store;

    // console.log("selected = ", selected)
    const hideIndex = 1;

    // const { selected, hideIndex } = this.props

    return (
      <>
        <CoverView
          className={`tab-bar ${IS_IPHONEX ? "bottom-safe-area" : ""} ${
            hideIndex === selected ? "tab-bar-hide" : ""
          }`}
        >
          {this.state.list.map((item, index) => {
            const { pagePath, selectedIconPath, iconPath, text } = item;
            return (
              <CoverView
                key={text}
                hoverClass="tab-bar-item-hover"
                className={`tab-bar-item ${
                  selected === index ? "tab-item-active" : ""
                }`}
                onClick={this.switchTab.bind(this, item)}
              >
                <CoverImage
                  className="tab-bar-image"
                  src={selected === index ? selectedIconPath : iconPath}
                />
                <CoverView
                  className="tab-bar-text"
                  style={{
                    color:
                      selected === index
                        ? this.state.selectedColor
                        : this.state.color,
                  }}
                >
                  {item.text}
                </CoverView>
              </CoverView>
            );
          })}
        </CoverView>
        {hideIndex === selected ? (
          <CoverView
            className="tab-center"
            onClick={this.jumpIntellect}
          >
            <CoverImage className="intellect-icon" src={Intellect} />
          </CoverView>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default customTabBar;
