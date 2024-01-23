import _isFunction from "lodash/isFunction";
import Taro from "@tarojs/taro";

const getSysInfo = () => {
  // 注意，获取的都是 px单位
  const systemInfo = Taro.getSystemInfoSync();
  const menuButtonObject = Taro.getMenuButtonBoundingClientRect();

  let statusBarHeight = systemInfo.statusBarHeight;
  let menuBottomHeight = menuButtonObject.height;
  let menuBottomTop = menuButtonObject.top;

  // 屏幕高度
  let screenHeight = systemInfo.screenHeight;

  // windowHeight  页面可使用高度，已去除nav的高度
  let windowHeight = systemInfo.windowHeight;

  // -------下面是计算后的高度-------

  // 计算底部安全区高度
  let tabbarHeightIncSafe =
    systemInfo.screenHeight - systemInfo.safeArea.bottom;

  // 计算导航栏高度
  let navBarHeight =
    statusBarHeight + menuBottomHeight + (menuBottomTop - statusBarHeight) * 2;

  // 计算可用的页面高度（页面可使用高度 - tabbar高度)（去除掉tabbar和nav的高度
  let pageAvaHeightExcTabNav = systemInfo.windowHeight - tabbarHeightIncSafe;

  // 排除掉tabbar的高度（screenHeight(屏幕高度) - tabbar高度）
  let pageAvaHeightExcTab = systemInfo.screenHeight - tabbarHeightIncSafe;

  console.log(`可使用窗口高度(不包含导航栏) ==>${systemInfo.windowHeight}`);
  console.log(`导航栏高度 ==>${navBarHeight}`);
  console.log(`tabbar高度 ==>${tabbarHeightIncSafe}`);
  console.log(`排除掉tabbar的高度 ==>${pageAvaHeightExcTab}`);
  console.log(`排除掉tabbar 和 nav 的高度 ==>${pageAvaHeightExcTabNav}`);
};

const getSystemInfoH5 = () => {
  // var sys = {
  //   model: "h5",
  //   navBarExtendHeight: 4,
  //   navBarHeight: 60,
  //   statusBarHeight: 20,
  // };

  var sys = {
    SDKVersion: "3.1.4",
    batteryLevel: 100,
    benchmarkLevel: 1,
    bluetoothEnabled: true,
    brand: "devtools",
    cameraAuthorized: true,
    capsulePosition: {
      bottom: 56,
      height: 32,
      left: 281,
      right: 367,
      top: 24,
      width: 86
    },
    deviceOrientation: "portrait",
    devicePixelRatio: 2,
    enableDebug: false,
    fontSizeSetting: 16,
    host: {env: "WeChat"},
    ios: true,
    language: "zh_CN",
    locationAuthorized: true,
    locationEnabled: true,
    microphoneAuthorized: true,
    mode: "default",
    model: "h5",
    navBarExtendHeight: 4,
    navBarHeight: 60,
    notificationAuthorized: true,
    pixelRatio: 2,
    platform: "devtools",
    safeArea: {top: 20, left: 0, right: 375, bottom: 667, width: 375},
    screenHeight: 667,
    screenWidth: 375,
    statusBarHeight: 20,
    system: "iOS 10.0.1",
    version: "8.0.5",
    wifiEnabled: true,
    windowHeight: 667,
    windowWidth: 375,
  }
  return sys;
};

// const getSystemInfo = () => {
//   return getSystemInfoH5();
// };

const getSystemInfo = () => {
  if ((Taro as any).globalSystemInfo && !(Taro as any).globalSystemInfo.ios) {
    return (Taro as any).globalSystemInfo;
  } else {
    // h5环境下忽略navbar
    if (!_isFunction(Taro.getSystemInfoSync)) {
      return getSystemInfoH5();
    }
    if (process.env.TARO_ENV === "h5") {
      return getSystemInfoH5();
    }
    let systemInfo: any = Taro.getSystemInfoSync();
    let ios = !!(systemInfo.system.toLowerCase().search("ios") + 1);
    let rect: IReact | null;
    try {
      rect = Taro.getMenuButtonBoundingClientRect
        ? Taro.getMenuButtonBoundingClientRect()
        : null;
      if (rect === null) {
        throw "getMenuButtonBoundingClientRect error";
      }
      //取值为0的情况  有可能width不为0 top为0的情况
      if (!rect.width || !rect.top || !rect.left || !rect.height) {
        throw "getMenuButtonBoundingClientRect error";
      }
    } catch (error) {
      let gap = 0; //胶囊按钮上下间距 使导航内容居中
      let width = 96; //胶囊的宽度
      if (systemInfo.platform === "android") {
        gap = 8;
        width = 96;
      } else if (systemInfo.platform === "devtools") {
        if (ios) {
          gap = 5.5; //开发工具中ios手机
        } else {
          gap = 7.5; //开发工具中android和其他手机
        }
      } else {
        gap = 4;
        width = 88;
      }
      if (!systemInfo.statusBarHeight) {
        //开启wifi的情况下修复statusBarHeight值获取不到
        systemInfo.statusBarHeight =
          systemInfo.screenHeight - systemInfo.windowHeight - 20;
      }
      rect = {
        //获取不到胶囊信息就自定义重置一个
        bottom: systemInfo.statusBarHeight + gap + 32,
        height: 32,
        left: systemInfo.windowWidth - width - 10,
        right: systemInfo.windowWidth - 10,
        top: systemInfo.statusBarHeight + gap,
        width: width,
      };
      console.log("error", error);
      console.log("rect", rect);
    }

    let navBarHeight = 0;
    if (!systemInfo.statusBarHeight) {
      //开启wifi和打电话下
      systemInfo.statusBarHeight =
        systemInfo.screenHeight - systemInfo.windowHeight - 20;
      navBarHeight = (function () {
        let gap = rect.top - systemInfo.statusBarHeight;
        return 2 * gap + rect.height;
      })();

      systemInfo.statusBarHeight = 0;
      systemInfo.navBarExtendHeight = 0; //下方扩展4像素高度 防止下方边距太小
    } else {
      navBarHeight = (function () {
        let gap = rect.top - systemInfo.statusBarHeight;
        return systemInfo.statusBarHeight + 2 * gap + rect.height;
      })();
      if (ios) {
        systemInfo.navBarExtendHeight = 4; //下方扩展4像素高度 防止下方边距太小
      } else {
        systemInfo.navBarExtendHeight = 0;
      }
    }

    systemInfo.navBarHeight = navBarHeight; //导航栏高度不包括statusBarHeight
    systemInfo.capsulePosition = rect; //右上角胶囊按钮信息bottom: 58 height: 32 left: 317 right: 404 top: 26 width: 87 目前发现在大多机型都是固定值 为防止不一样所以会使用动态值来计算nav元素大小
    systemInfo.ios = ios; //是否ios
    (Taro as any).globalSystemInfo = systemInfo; //将信息保存到全局变量中,后边再用就不用重新异步获取了
    //console.log('systemInfo', systemInfo);
    return systemInfo;
  }
};

const systemTool = {
  height: {
    tabbarHeight: "150rpx",
    iosHeight: 44,
    androidHeight: 48,
    devtoolsHeight: 42,
  },
  getSystemInfo: getSystemInfo,
  // getSystemInfo: process.env.TARO_ENV === 'h5'? getSystemInfo,
  //const { statusBarHeight, navBarHeight, capsulePosition, navBarExtendHeight, ios, windowWidth } = getSystemInfo()
};

export default systemTool;
