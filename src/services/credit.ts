import httpService from "./httpService";
import apiConfig from "./apiConfig";

const serviceCredit = {

  getCreditProduct() {
    return httpService.get({
      url: `${apiConfig.baseUrl}/api/v1/credit/products`,
    });
  },

  getCreditProductTest: function () {
    console.log("获取 products ...");
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = {
          "10012": {
            id: 0,
            name:"快速跳过",
            type: "10012",
            credit: 35,
            status:  "earn"
          },
          "10006":{
            id: 1,
            name:"分享给朋友",
            type: "10006",
            credit: 5,
            status:  "earn"
          },
          "10004":{
            id: 2,
            name:"邀请朋友注册或者认领虚拟角色",
            type: "10004",
            credit: 180,
            status:  "earn"
          }
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

  doInitateAction(data) {
    return httpService.post({
      url: `${apiConfig.baseUrl}/api/v1/credit/consume/initiate`,
      data: data,
    });
  },

  doInitateActionTest: function (data) {
    console.log("consume credit doInitateAction ...", data);
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

  onSubmmitPayment(order) {
    return httpService.post({
      url: `${apiConfig.baseUrl}/api/v1/credit/order/payment`,
      data: {
        order: order,
      },
    });
  },

  onSubmmitPaymentTest: function (order) {
    console.log("支付 ...", order);
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

  getOrderItem() {
    return httpService.get({
      url: `${apiConfig.baseUrl}/api/v1/credit/order/item`,
    });
  },

  getOrderItemTest: function () {
    console.log("获取 order item ...");
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = [
          {
            id: 0,
            credit: 60,
            price: 12,
            unit: "￥",
            discount: 10,
            finalPrice: 12,
          },{
            id: 1,
            credit: 170,
            price: 34,
            unit: "￥",
            discount: 8.8,
            finalPrice:30,
          },{
            id: 2,
            credit: 590,
            price: 118,
            unit: "￥",
            discount: 8.3,
            finalPrice: 98,
          },{
            id: 3,
            credit: 2450,
            price: 490,
            unit: "￥",
            discount: 7.9,
            finalPrice: 388,
          },{
            id: 4,
            credit: 5400,
            price: 1080,
            unit: "￥",
            discount: 7.4,
            finalPrice: 798,
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

  getCreditGoods() {
    return httpService.get({
      url: `${apiConfig.baseUrl}/api/v1/credit/goods`,
    });
  },

  getCreditGoodsTest: function () {
    console.log("获取 credit goods ...");
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = [
          {
            id: 0,
            name: "加速出现在指定学校所有人的问答中",
            type: "10001",
            description:"活动介绍：活动的场景是“朋友问答”。通过此活动，可以提高“你的名字”出现在“指定的学校”所有人的“朋友问答”的概率，概率相比其他提高1倍",
            rule:"活动规则：有效期为1小时，在发起活动的1小时，一旦有人参与了“朋友问答”，在参与的所有问题中，你的名字作为答案出现的概率会提高，所有人选择你的概率也会提高，收到被他选择的通知也会相应增多；在“指定的学校”总有一个偏好欣赏你的人",
            duration: 1,
            status: "consume",
            credit: 30,
            selected: null, //主要用于展开，无其他用处
          },{
            id: 1,
            name: "加速出现在他的问答中",
            type: "10002",
            description:"活动介绍：活动的场景是“朋友问答”。通过此活动，可以提高“你的名字”出现在她的“朋友问答”的概率，概率提高1倍",
            rule:"活动规则：有效期为1小时，在发起活动的1小时，一旦对方参与了“朋友问答”，在参与的所有问题中，你的名字作为答案出现的概率会提高，他选择你的概率也会提高，收到被他选择的通知也会相应增多；当然如果你不是他的偏好就石城大海了",
            duration: 1,
            status: "consume",
            credit: 100,
            selected: null, //主要用于展开，无其他用处
          },{
            id: 2,
            name: "新建朋友",
            type: "10003",
            description:"活动介绍：通过此活动可以“获取免费积分”，也将为你的好友建立一个虚拟好友，虚拟好友可以参与“朋友问答”，并接收消息。",
            rule: "活动规则：只有好友还没注册，你才可以帮他建立虚拟好友，一旦她到时来注册，将自动认领次账户，同时将接收到所有虚拟好友的消息。",
            duration: 0,
            status: "earn",
            credit: 60,
            selected: null, //主要用于展开，无其他用处
          },{
            id: 3,
            name: "邀请朋友注册或者认领虚拟角色",
            type: "10004",
            description:"活动介绍：通过此活动可以“获取免费积分”，也可以激活好友参与互动，从而提高你在“朋友问答”中和他互动概率。",
            rule:"活动规则：只有邀请的好友注册成功，或者认领虚拟角色成功，积分才会正式入账哟。",
            duration: 0,
            status: "earn",
            credit: 180,
            selected: null, //主要用于展开，无其他用处
          },{
            id: 4,
            name: "参与问答",
            type: "10005",
            description:"活动介绍：此活动场景为“朋友问答”，可以“获取免费积分”，并且可以和好友互动哟。",
            rule:"活动规则：只有参与完成了“朋友问答”，积分才会正式入账哟",
            duration: 0,
            status: "earn",
            credit: 5,
            selected: null, //主要用于展开，无其他用处
          },{
            id: 5,
            name: "分享给朋友",
            description:"活动介绍：通过此活动可以“获取免费积分”，也可以激活好友参与互动，从而提高你在“朋友问答”中和他互动概率。",
            rule: "活动规则：只有好友点击“分享链接”并进入App才能领取积分哟，而且针对每个“被分享者”每天限定只能领取1次积分哟，如果别人分享给了他而且对方领取了积分，你的分享就不能领取哟，按照“被分享者”点击“分享链接”的优先顺序计算，链接当天有效。",
            duration:24,
            type: "10006",
            status: "earn",
            credit: 30,
            selected: null, //主要用于展开，无其他用处
          },
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

  /**
   * 更新用户数据库的 credit
   * @param goods_id credit goods id,可以查看是consume 还是 earn
   * @param credit 相应的 credit
   * @returns
   */
  consumeCredit(credit_goods_type,credit) {
    return httpService.post({
      url: `${apiConfig.baseUrl}/api/v1/credit/consume`,
      data: {
        credit: credit,
        credit_goods_type:credit_goods_type,
      },
    });
  },

  consumeCreditTest: function (credit_goods_type,credit) {
    console.log("consume credit ...", credit_goods_type, credit);
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

  earnCredit(credit_goods_type,credit) {
    return httpService.post({
      url: `${apiConfig.baseUrl}/api/v1/credit/earn`,
      data: {
        credit: credit,
        credit_goods_type:credit_goods_type,
      },
    });
  },

  earnCreditTest: function (credit_goods_type,credit) {
    console.log("earn credit ...", credit_goods_type, credit);
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

export default serviceCredit;
