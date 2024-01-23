import httpService from "./httpService";
import apiConfig from "./apiConfig";

const serviceActivity = {

  /**
   * 选择要返回的活动类型，同时要考虑用户本身的学校和位置
   * @param type 10001
   * @returns value: school_id, text: school_name
   *
   * @param type 10002
   * @returns value: user_id, text: user_name
   */
  getActivityType(type) {
    return httpService.get({
      url: `${apiConfig.baseUrl}/api/v1/activity/{type}`,
    });
  },

  getActivityTypeTest: function (type) {
    console.log("获取 activity type ...", type);
    return new Promise((resolve) => {
      let data;
      setTimeout(() => {
        if(type == 10001){
          data = [
            { value: 10, text: "深圳市第1中学" },
            { value: 11, text: "深圳市第2中学" },
            { value: 12, text: "深圳市第3中学" },
            { value: 13, text: "深圳市宝安第2中学" },
            { value: 14, text: "深圳市龙华第2中学" },
            { value: 15, text: "深圳市南山第2中学" },
            { value: 16, text: "深圳大学附属第2中学" },
            { value: 17, text: "深圳大学附属第1中学" },
            { value: 18, text: "南方科技大学附属第2中学" }
          ];
        }
        if(type == 10002){
          data = [
            { value: 10, text: "小王八" },
            { value: 11, text: "小红" },
            { value: 12, text: "小绿" },
            { value: 13, text: "小张" },
            { value: 14, text: "小白" },
            { value: 15, text: "大王" },
            { value: 16, text: "小石" },
            { value: 17, text: "大红" },
            { value: 18, text: "大绿" }
          ];
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

  /**
   *
   * @param data {
      credit_goods_id: item.id,
      type: item.type,
      value: value,
    }
   * @returns
   */
  saveMembershipOrder(data) {
    return httpService.post({
      url: `${apiConfig.baseUrl}/api/v1/activity/membership/save`,
      data: data,
    });
  },

  saveMembershipOrderTest: function (data) {
    console.log("earn credit ...", data);
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = { result: true };
        const success = true;
        resolve({
          data,
          success,
        });
        // this.labels.push(...data)
      }, 1000);
    });
  },
};

export default serviceActivity;
