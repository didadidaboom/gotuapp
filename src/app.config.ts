import { useGlobalIconFont } from "./components/iconfont/helper"

export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/startPage/index',
    'pages/profile/index',
    'pages/about/index',
    'pages/inbox/index',
  ],
  subPackages:[
    {
      root: "packageA",
      pages: [
        'pages/loadingPage/index',
        'pages/shopPage/index',
        'pages/herWelcomePage/index',
        'pages/herAvatarPage/index',
        'pages/herUsernamePage/index',
        'pages/herSchoolSelectionPage/index',
        'pages/herGradeYearPage/index',
        'pages/herAddressPage/index',
        'pages/herGenderPage/index',
        'pages/herAgePage/index',
        'pages/herPhonePage/index',
      ]
    },{
      root: "packageB",
      pages: [
        'pages/editPage/index',
        'pages/schoolSelectionEdit/index',
        'pages/gradeYearEdit/index',
        'pages/genderEdit/index',
        'pages/avatarEdit/index',
        'pages/usernameEdit/index',
        'pages/accountManagePage/index',
        'pages/msgChatPage/index',
      ]
    },{
      root : "packageC",
      pages: [
        'pages/loginPage/index',
        'pages/phoneCodePage/index',
        'pages/welcomePage/index',
        'pages/avatarPage/index',
        'pages/addressPage/index',
        'pages/agePage/index',
        'pages/genderPage/index',
        'pages/gradeYearPage/index',
        'pages/usernamePage/index',
        'pages/schoolSelectionPage/index',
      ]
    }
  ],
  window: {
    navigationStyle: "custom",
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    list: [{
      pagePath: 'pages/index/index',
      text: 'gotu',
      iconPath: 'assets/images/tabbar_scheme1/gotu.png',
      selectedIconPath: 'assets/images/tabbar_scheme1/gotu_active.png'
    },
    {
      pagePath: 'pages/inbox/index',
      text: '消息',
      iconPath: 'assets/images/tabbar_scheme1/inbox.png',
      selectedIconPath: 'assets/images/tabbar_scheme1/inbox_active.png'
    },
    {
      pagePath: 'pages/profile/index',
      text: '我的',
      iconPath: 'assets/images/tabbar_scheme1/profile.png',
      selectedIconPath: 'assets/images/tabbar_scheme1/profile_active.png'
    }
  ],
    color: '#1296db',
    selectedColor: '#F97316',
    // usingComponents: {
    //   customtabbar: "custom-tab-bar/index"
    // }
  },
  usingComponents: Object.assign(useGlobalIconFont()),
  lazyCodeLoading : "requiredComponents",
})

