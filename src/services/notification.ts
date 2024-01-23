import httpService from "./httpService";
import apiConfig from "./apiConfig";

const serviceNotification = {

  getNotificationList() {
    return httpService.get({
      url: `${apiConfig.baseUrl}/api/v1/notification/list`,
    });
  },

  /**
   *
   * @returns grade 15  //2023级 高一 2026届
   */
  getNotificationListTest: function () {
    console.log("获取 notification ...");
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = [
          {
            id: 10000,
            msgType: '2001',   //1001:系统消息 2001:官方公告信息  3001:同学消息
            // grade: null,
            // gradeClass: '',
            // gender: null,  //girl0  boy11  homo2
            // genderName:"",
            name:'官方',
            sendTime:"2021-08-01 12:00:00",
            timeGap:"6m",
            readStatus: false,
            questionType: 0,      //0:未读 1:已读
          },{
            id: 10001,
            msgType: '1001',   //1001:系统消息 2001:公告信息  3001:同学消息
            // grade: null,
            // gradeClass: '',
            // gender: null,  //girl0  boy11  homo2
            // genderName:"",
            name:'系统',
            sendTime:"2021-08-01 12:00:00",
            timeGap:"15m",
            readStatus: false ,
            questionType: 0,
          },{
            id: 10002,
            msgType: '3001',   //1001:系统消息 2001:公告信息  3001:同学消息
            grade: 15,
            gradeClass: "高一",
            gender: 10,  //girl0  boy11  homo2
            genderName:"女同学",
            name:'xx',
            sendTime:"2021-08-01 12:00:00",
            timeGap:"20m",
            readStatus: false,
            questionType: 0,
          },{
            id: 10003,
            msgType: '3001',
            grade: 16,
            gradeClass: "高二",
            gender: 11,  //girl0  boy11  homo2
            genderName:"男同学",
            name:'xx',
            sendTime:"2021-08-01 12:00:00",
            timeGap:"29m",
            readStatus: false,
            questionType: 1,
          },{
            id: 10004,
            msgType: '3001',
            grade: 17,
            gradeClass: "高三",
            gender: 12,  //girl0  boy11  homo2
            genderName:"同学",
            name:'xx',
            sendTime:"2021-08-01 12:00:00",
            timeGap:"30m",
            readStatus: false,
            questionType: 0,
          },{
            id: 10005,
            msgType: '3001',
            grade: 18,
            gradeClass: "已毕业",
            gender: 10,  //girl0  boy11  homo2
            genderName:"女同学",
            name:'xx',
            sendTime:"2021-08-01 12:00:00",
            timeGap:"31m",
            readStatus: true,
            questionType: 0,
          },{
            id: 10006,
            msgType: '3001',
            grade: 14,
            gradeClass: "准高中",
            gender: 10,  //girl0  boy11  homo2
            genderName:"女同学",
            name:'xx',
            sendTime:"2021-08-01 12:00:00",
            timeGap:"1h",
            readStatus: true,
            questionType: 0,
          },{
            id: 10007,
            msgType: '3001',
            grade: 15,
            gradeClass: "高一",
            gender: 11,  //girl0  boy11  homo2
            genderName:"男同学",
            name:'xx',
            sendTime:"2021-08-01 12:00:00",
            timeGap:"1h",
            readStatus: false,
            questionType: 0,
          },{
            id: 10008,
            msgType: '3001',
            grade: 16,
            gradeClass: "高二",
            gender: 11,  //girl0  boy11  homo2
            genderName:"男同学",
            name:'xx',
            sendTime:"2021-08-01 12:00:00",
            timeGap:"1h",
            readStatus: false,
            questionType: 0,
          },{
            id: 10009,
            msgType: '3001',
            grade: 16,
            gradeClass: "高二",
            gender: 10,  //girl0  boy11  homo2
            genderName:"女同学",
            name:'xx',
            sendTime:"2021-08-01 12:00:00",
            timeGap:"1h",
            readStatus: false,
            questionType: 0,
          },{
            id: 10010,
            msgType: '3001',
            grade: 16,
            gradeClass: "高二",
            gender: 11,  //girl0  boy11  homo2
            genderName:"男同学",
            name:'xx',
            sendTime:"2021-08-01 12:00:00",
            timeGap:"1.1h",
            readStatus: false,
            questionType: 0,
          },{
            id: 10011,
            msgType: '3001',
            grade: 16,
            gradeClass: "高二",
            gender: 12,  //girl0  boy11  homo2
            genderName:"同学",
            name:'xx',
            sendTime:"2021-08-01 12:00:00",
            timeGap:"1.2h",
            readStatus: false,
            questionType: 0,
          },{
            id: 10012,
            msgType: '3001',
            grade: 16,
            gradeClass: "高二",
            gender: 10,  //girl0  boy11  homo2
            genderName:"女同学",
            name:'xx',
            sendTime:"2021-08-01 12:00:00",
            timeGap:"1.3h",
            readStatus: false,
            questionType: 0,
          },{
            id: 10013,
            msgType: '3001',
            grade: 16,
            gradeClass: "高二",
            gender: 11,  //girl0  boy11  homo2
            genderName:"男同学",
            name:'xx',
            sendTime:"2021-08-01 12:00:00",
            timeGap:"1.5h",
            readStatus: false,
            questionType: 0,
          }
        ];
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

export default serviceNotification;
