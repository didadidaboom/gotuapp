import httpService from "./httpService";
import apiConfig from "./apiConfig";

const serviceAccountManage = {
  delAccount() {
    return httpService.get({
      url: `${apiConfig.baseUrl}/api/v1/account/manage/delAccount`,
    });
  },

  delAccountTest: function () {
    console.log("删除 account delete ...");
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = {
        }
        const success = true;
        resolve({
          data,
          success,
        });
        // this.labels.push(...data)
      }, 1000);
    });
  },

  restorePurchase() {
    return httpService.get({
      url: `${apiConfig.baseUrl}/api/v1/account/manage/restore`,
    });
  },

  restorePurchaseTest: function () {
    console.log("恢复 account restore ...");
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = {
        }
        const success = true;
        resolve({
          data,
          success,
        });
        // this.labels.push(...data)
      }, 1000);
    });
  },

  resetBlockList() {
    return httpService.get({
      url: `${apiConfig.baseUrl}/api/v1/account/manage/resetBlock`,
    });
  },

  resetBlockListTest: function () {
    console.log("重置 account blocks ...");
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = {
        }
        const success = true;
        resolve({
          data,
          success,
        });
        // this.labels.push(...data)
      }, 1000);
    });
  },

  getAccountManage() {
    return httpService.get({
      url: `${apiConfig.baseUrl}/api/v1/account/notifySetting`,
    });
  },

  /**
   *
   * @returns grade 15  //2023级 高一 2026届
   */
  getAccountManageTest: function () {
    console.log("获取 account notify settings ...");
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = {
          is_reduce_notify: true,
          is_leave_question7days: false,
          is_leave: true,
        }
        const success = true;
        resolve({
          data,
          success,
        });
        // this.labels.push(...data)
      }, 1000);
    });
  },

  saveReduceNotify(is_reduce_notify) {
    return httpService.post({
      url: `${apiConfig.baseUrl}/api/v1/account/notifySetting/reduce`,
      data: {
        is_reduce_notify:is_reduce_notify
      },
    });
  },

  saveReduceNotifyTest: function (is_reduce_notify) {
    console.log("is_reduce_notify  ...", is_reduce_notify);
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = { result: true };
        const success = true
        resolve({
          data,
          success
        });
        // this.labels.push(...data)
      }, 1000);
    });
  },

  saveLeaveQuestion7days(is_leave_question7days) {
    return httpService.post({
      url: `${apiConfig.baseUrl}/api/v1/account/notifySetting/leave7days`,
      data: {
        is_leave_question7days:is_leave_question7days
      },
    });
  },

  saveLeaveQuestion7daysTest: function (is_leave_question7days) {
    console.log("is_leave_question7days ...", is_leave_question7days);
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = { result: true };
        const success = true
        resolve({
          data,
          success
        });
        // this.labels.push(...data)
      }, 1000);
    });
  },

  saveLeave(is_leave) {
    return httpService.post({
      url: `${apiConfig.baseUrl}/api/v1/account/notifySetting/leave`,
      data: {
        is_leave:is_leave
      },
    });
  },

  saveLeaveTest: function (is_leave) {
    console.log("is_leave ...", is_leave);
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = { result: true };
        const success = true
        resolve({
          data,
          success
        });
        // this.labels.push(...data)
      }, 1000);
    });
  },

};

export default serviceAccountManage;
