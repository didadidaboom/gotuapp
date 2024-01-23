import { observable, action } from "mobx";
import tool from "../utils/tool";
import serviceProfile from "../services/profile";

/**
 * 处理朋友互动问答
 */
class ProfileStore {
  @observable initProfile = {
    id: null,
    shareCode: null,
    userName: null,
    account: null,
    avatar: null,
    gender:null,
    isFacial: false,
    isPhone: false,
    isWechat: false,
    viewCount: null,
    focusedCount: null,
    hotClass: null,
    hotCount: null,
    schoolName: null,
    gradeClass: null,
    credit: null,
    rankPicked7days: null,
    rankCreditPicked7days: null,
    rankPicked: null,
    rankCreditPicked: null,
    labels7days: [],
    labels: [],
  };
  /**
   *
        {
          id: 10000,
          shareCode:'13223232323',
          userName: '浩浩',
          account: '123456789',
          avatar: 1,
          gender:10,
          isFacial: true,
          isPhone: false,
          isWechat: true,
          viewCount: 10,
          focusedCount: 10,
          hotClass: 1,
          hotCount: 20,
          schoolName: '北京大学',
          gradeClass:"大一",
          credit:128,
          rankPicked7days: 1,
          rankCreditPicked7days: 2,
          rankPicked: 1,
          rankCreditPicked: null,
          labels7days: [],
          labels: [],
        }
   */
  //获取的的参数
  @observable profile = {
    id: null,
    shareCode: null,
    userName: null,
    account: null,
    avatar: null,
    gender: null,    // 女：10； 男：11； 同性：12
    isFacial: false,
    isPhone: false,
    isWechat: false,
    viewCount: null,
    focusedCount: null,
    hotClass: null,
    hotCount: null,
    schoolName: null,
    gradeClass: null,
    credit: null,
    rankPicked7days: null,
    rankCreditPicked7days: null,
    rankPicked: null,
    rankCreditPicked: null,
    labels7days: [],
    labels: [],
  };
  //需要保存的参数


  @action
  setSchool() {
    // this.endTime = value;
  }

  //------------API--------
  @action
  async getProfile() {
    const res = await serviceProfile.getProfileTest();
    // console.log("res = ",res)
    if (res && res.success && res.data) {
      try {
        this.profile = res.data;
        // console.log("data = ",res.data)
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: get profile ");
      return res;
    } else {
      console.log("else get profile");
      return res
    }
  }



  @action
  async initData() {
    if(this.profile.id == null){
      await this.getProfile();
    }
    //  console.log("profile = ",this.profile)
  }

  @action
  clearData() {
    // 在组件卸载前清除数据或执行其他内存管理操作
    this.profile = this.initProfile;
  }
}

const profileStore = new ProfileStore();

export default profileStore;
