import { observable, action } from "mobx";
import tool from "../utils/tool";
import serviceNotification from "../services/notification";

/**
 * 处理朋友互动问答
 */
class NotificationStore {
  //获取的的参数
  @observable notificationList = [];
  //需要保存的参数


  @action
  setEndTime() {
    // this.endTime = value;
  }


  //------------API--------
  @action
  async getNotificationList() {
    const res = await serviceNotification.getNotificationListTest();
    // console.log("res = ",res)
    if (res && res.success && res.data) {
      if (res.data.length) {
        try {
          this.notificationList = res.data;
          // console.log("notificationList =", res.data);
        } catch (error) {
          // 处理错误
          console.error("Error updating data:", error);
        }
        console.log("done: get notionfication list ");
        return res;
      } else {

        return;
      }
    } else {
      console.log("else get notification");
      return res
    }
  }

  @action
  async changeReadStatus(id) {
    const res = await serviceNotification.changeReadStatusTest(id);
    // console.log("res = ",res)
    if (res && res.success && res.data) {
      try {
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: change read status ");
      return res;
    } else {
      console.log("else change read status");
      return res
    }
  }

  @action
  async deleteItem(id) {
    const res = await serviceNotification.deleteItemTest(id);
    // console.log("res = ",res)
    if (res && res.success && res.data) {
      try {
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: delete notification ");
      return res;
    } else {
      console.log("else delete notification");
      return res
    }
  }

  @action
  async initData() {
     await this.getNotificationList();
  }

  @action
  clearData() {
    // 在组件卸载前清除数据或执行其他内存管理操作
    this.notificationList = [];
    // this.answerList = [];
    // this.tmpAnswer = [];
    // this.expose = [];
  }
}

const notificationStore = new NotificationStore();

export default notificationStore;
