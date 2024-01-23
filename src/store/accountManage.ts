import { observable, action } from "mobx";
import tool from "../utils/tool";
import serviceAccountManage from "../services/accountManage";

/**
 * 处理朋友互动问答
 */
class AccountManageStore {
  //获取的的参数
  /**
   *
    }
      is_reduce_notify: true,
      is_leave_question7days: false,
      is_leave: true,
    }
   */
  @observable accountManage = null;
  //需要保存的参数
  @observable is_reduce_notify = null;
  @observable is_leave_question7days = null;
  @observable is_leave = null;


  @action
  setReduceNotify(value) {
    this.is_reduce_notify = value
    if(this.is_reduce_notify != null){
      this.saveReduceNotify()
    }
  }

  @action
  setLeaveQuestion7days(value){
    this.is_leave_question7days = value
    if(this.is_leave_question7days != null){
      this.saveLeaveQuestion7days()
    }
  }

  @action
  setLeave(value){
    this.is_leave = value
    if(this.is_leave!=null){
      this.saveLeave()
    }
  }


  //------------API--------
  @action
  async delAccount() {
    const res = await serviceAccountManage.delAccountTest();
    // console.log("res = ",res)
    if (res && res.success && res.data) {
      try {
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: delAccount ");
      return res;
    } else {
      console.log("else delAccount");
      return res
    }
  }

  @action
  async restorePurchase() {
    const res = await serviceAccountManage.restorePurchaseTest();
    // console.log("res = ",res)
    if (res && res.success && res.data) {
      try {
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: restorePurchase ");
      return res;
    } else {
      console.log("else restorePurchase");
      return res
    }
  }

  @action
  async resetBlockList() {
    const res = await serviceAccountManage.resetBlockListTest();
    // console.log("res = ",res)
    if (res && res.success && res.data) {
      try {
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: resetBlockList ");
      return res;
    } else {
      console.log("else resetBlockList");
      return res
    }
  }

  @action
  async saveReduceNotify() {
    const res = await serviceAccountManage.saveReduceNotifyTest(this.is_reduce_notify);
    // console.log("res = ",res)
    if (res && res.success && res.data) {
      try {
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: save reduce notify ");
      return res;
    } else {
      console.log("else save reduce notify");
      return res
    }
  }

  @action
  async saveLeaveQuestion7days() {
    const res = await serviceAccountManage.saveLeaveQuestion7daysTest(this.is_leave_question7days);
    // console.log("res = ",res)
    if (res && res.success && res.data) {
      try {
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: save reduce notify ");
      return res;
    } else {
      console.log("else save reduce notify");
      return res
    }
  }

  @action
  async saveLeave() {
    const res = await serviceAccountManage.saveLeaveTest(this.is_leave);
    // console.log("res = ",res)
    if (res && res.success && res.data) {
      try {
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: save reduce notify ");
      return res;
    } else {
      console.log("else save reduce notify");
      return res
    }
  }

  /**
   *
   * @returns 获取用户的通知设置
   */
  @action
  async getAccountManage() {
    const res = await serviceAccountManage.getAccountManageTest();
    // console.log("res = ",res)
    if (res && res.success && res.data) {
      try {
        this.accountManage = res.data
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: get accountmanages ");
      return res;
    } else {
      console.log("else get accountmanages");
      return res
    }
  }

  @action
  async initData() {
     await this.getAccountManage();
  }

  @action
  clearData() {
    // 在组件卸载前清除数据或执行其他内存管理操作
    this.accountManage = null;
  }
}

const accountManageStore = new AccountManageStore();

export default accountManageStore;
