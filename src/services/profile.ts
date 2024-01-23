import httpService from "./httpService";
import apiConfig from "./apiConfig";

const serviceProfile = {

  getProfile() {
    return httpService.get({
      url: `${apiConfig.baseUrl}/api/v1/profile/{profile_id}`,
    });
  },

  /**
   *
   * @returns grade 15  //2023级 高一 2026届
   */
  getProfileTest: function () {
    console.log("获取 profile ...");
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = {
          id: 10000,
          shareCode:'13223232323',
          userName: '浩浩',
          account: '123456789',
          avatar: 1,
          gender: 10,    // 女：10； 男：11； 同性：12
          isFacial: true,
          isPhone: false,
          isWechat: true,
          viewCount: 10,
          focusedCount: 10,
          hotClass: 3,  //热度等级
          hotCount: 20,
          schoolName: '深圳市第二中学',
          gradeClass:"高一",
          gradeYear: '2023级',   //15 2023级 2026届
          credit:128,
          rankPicked7days: 1,
          rankCreditPicked7days: 2,
          rankPicked: 1,
          rankCreditPicked: null,
          labels7days:[],
          labels:[],
          labels7day: [
            {
              "id":0,
              "name":"做好发型再出门",
            },
            {
              "id":1,
              "name":"爱运动",
            },
            {
              "id":2,
              "name":"音乐",
            },
            {
              "id":3,
            "name":"每年至少旅行一次",
            },
            {
              "id":4,
            "name":"喜欢看电影",
            },
            {
              "id":5,
            "name":"打开正确即话痨",
            },
            {
              "id":6,
            "name":"喜欢看电影",
            },
            {
              "id":7,
            "name":"打开正确即话痨",
            }
          ],
          label: [
            {
              "id":0,
              "name":"做好发型再出门",
            },
            {
              "id":1,
              "name":"爱运动",
            },
            {
              "id":2,
              "name":"音乐",
            },
            {
              "id":3,
            "name":"每年至少旅行一次",
            },
            {
              "id":4,
            "name":"喜欢看电影",
            },
            {
              "id":7,
            "name":"打开正确即话痨",
            }
          ],
        };
        const success = true;
        resolve({
          data,
          success,
        });
        // this.labels.push(...data)
      }, 1000);
    });
  },

  changeReadStatus(notification_id) {
    return httpService.get({
      url: `${apiConfig.baseUrl}/api/v1/${notification_id}/read`,
    });
  },

  changeReadStatusTest: function (notification_id) {
    console.log("changin read status ...", notification_id);
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = {};
        const success = true
        resolve({
          data,
          success
        });
        // this.labels.push(...data)
      }, 1000);
    });
  },

  deleteItem(notification_id) {
    return httpService.delete({
      url: `${apiConfig.baseUrl}/api/v1/${notification_id}/delete`,
    });
  },

  deleteItemTest: function (notification_id) {
    console.log("delete notification ...", notification_id);
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = {};
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

export default serviceProfile;
