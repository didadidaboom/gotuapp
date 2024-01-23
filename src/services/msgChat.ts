import httpService from "./httpService";
import apiConfig from "./apiConfig";

const serviceMsgChat = {
  getFocuse( user_id) {
    return httpService.get({
      url: `${apiConfig.baseUrl}/api/v1/messages/focuse/${user_id}`,
    });
  },

  getFocuseTest: function (user_id) {
    console.log("获取 focuse对方 ...",user_id);
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

  getMsgIntro(msgNotify_id) {
    return httpService.get({
      url: `${apiConfig.baseUrl}/api/v1/messages/${msgNotify_id}/intro/`,
    });
  },

  getMsgIntroTest: function (msgNotify_id) {
    console.log("获取 nofity intro for the spacific one ...");
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = {
          userId: 1,  //发消息人的id
          userName: "xxy",  //发消息人的名字匿名的
          avatar: 2,  //发消息人的头像
          isFocused: false,  //是否关注了他
          question_id:1,  //问题的id
          intro:[
            {
              description:"你们目前同一个学校",
              respond:null
            },
            {
              description:"你们都是高一学生",
              respond:null
            },
            {
              description:"他在的热度（受欢迎）程度达到了等级5（最高12）",
              respond:null
            },
            {
              description:"根据AI推测，他在朋友眼中最具代表的标签为",
              respond:"旅行是生命"
            }
            ],
            actions:[
            {
              actionId:1,
              actionName:"赏他一下",
              actionDescription:"活动介绍：随机赏赐他一些积分，会在聊天窗口通知他，引起他的注意, 并可以在聊天窗口选填通知他的问题",
              actionRule: "活动规则：每天只能赏一次，每次赏赐的积分随机，最多不超过10积分",
              actionType:10007,
              actionCredit:10,
            },{
              actionId:2,
              actionName:"对他发起心跳活动",
              actionDescription:"活动介绍：活动的场景是“朋友问答”中跳动的问题。通过此活动，可以对他发起一个“心跳问题”，并默认你的名字出现在答案中，系统会分配让他参加“朋友问答”。",
              actionRule: "活动规则：有效期为7天，在发起活动的7天内，一旦对方参与了“朋友问答”，并选择了你，就会立即互相通知，你们的身份会裂开；如果对方没选择你，就石城大海了，期待下一次问答；如果7天内对方没有参加“朋友问答”，也默认石城大海了",
              actionType:10008,
              actionCredit:10,
            },{
              actionId:3,
              actionName:"加速出现在他后续问答中",
              actionDescription:"活动介绍：活动的场景是“朋友问答”。通过此活动，可以提高“你的名字”出现在她的“朋友问答”的概率。",
              actionRule: "活动规则：有效期为7天，在发起活动的7天内，一旦对方参与了“朋友问答”，在参与的所有问题中，你的名字作为答案出现的概率会提高，他选择你的概率也会提高，收到被他选择的通知也会相应增多；当然如果你不是他的偏好就石城大海了",
              actionType:10002,
              actionCredit:10,
            },
            // {
            //   acitonId:4,
            //   actionName:"加速出现在指定学校所有人的问答中",
            //   actionDescription:"活动介绍：活动的场景是“朋友问答”。通过此活动，可以提高“你的名字”出现在“指定的学校”所有人的“朋友问答”的概率。",
            //   actionRule: "活动规则：有效期为7天，在发起活动的7天内，一旦有人参与了“朋友问答”，在参与的所有问题中，你的名字作为答案出现的概率会提高，所有人选择你的概率也会提高，收到被他选择的通知也会相应增多；在“指定的学校”总有一个偏好欣赏你的人",
            //   actionType:10001,
            //   actionCredit:10,
            // },
            // {
            //   actionId:5,
            //   actionName:"加速出现在所有人问题",
            //   actionDescription:"活动介绍：活动的场景是“朋友问答”。通过此活动，可以提高“你的名字”出现在所有人的“朋友问答”的概率。",
            //   actionRule: "活动规则：有效期为7天，在发起活动的7天内，一旦有人参与了“朋友问答”，在参与的所有问题中，你的名字作为答案出现的概率会提高，所有人选择你的概率也会提高，收到被他选择的通知也会相应增多；总有一个偏好欣赏你的人",
            //   actionType:10009,
            //   actionCredit:10,
            // },
            {
              actionId:6,
              actionName:"加他入我的随机问答中",
              actionDescription:"活动介绍：活动的场景是“朋友问答”。通过此活动，可以提高“她的名字”出现在“我的随机问答”的概率。",
              actionRule: "活动规则：有效期为7天，在发起活动的7天内，一旦“我”参与了“朋友问答”，在参与的所有问题中，“她的名字”作为答案出现的概率会提高，我选择她的机会就会升高，她收到被我选择的通知也会相应增多；总有一天他会知道默默关注他的人是我",
              actionType:10010,
              actionCredit:10,
            },{
              actionId:7,
              actionName:"看他的名字",
              actionDescription:"活动介绍：通过此活动，可以看到“他”名字中随机的一个字",
              actionRule: "活动规则：立即生效，只在当前窗口中可以看到，刷新页面后就看不到了，如果想再看一次，就再来一次吧；你可以选择关注他，通过关注与否判断他是谁",
              actionType:10011,
              actionCredit:10,
            }
            ]
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

  getMsgList( msgNotify_id) {
    return httpService.get({
      url: `${apiConfig.baseUrl}/api/v1/messages/msg/${msgNotify_id}`,
    });
  },

  getMsgListMsgTest: function (msgNotify_id) {
    console.log("获取 nofity messages for user ...",msgNotify_id);
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = [
          // 通知类型：6001.消息通知 6002.行动 6003.已读
          // 消息通知模板：我是一个{高一}的{女生}，我来自{xx}学校，我在问题{xx}中选择了你。
          // 行动模板：在活动中，你选择了我，我觉得你很有眼光，我对发起了{活动名称}，记得积极参加活动哟。
          // 已读模板：我已经收到你的消息了，总有一天我会知道背后的你是谁。
          {
            index:0, //消息的序号，根据时间瞬间 从0开始，越新的消息，index越大
            id:1,
            sender: "other",
            senderUserId: 1002,
            action: null,
            content:"我是一个{高一}的{女生}，我来自{xx}学校，我在问题{xx}中选择了你。",
            time: "2023-11-02 17:10:10",   //每次重新打开聊天节目发送时间
            extraContent:null,  //用于存储用户的行动附属的内容，比如“心跳问题”
          },{
            index:1,
            id:2,
            sender: "user",
            senderUserId: null,
            action: null,
            content:"我已经收到你的消息了，总有一天我会知道背后的你是谁。",
            time: null,
            extraContent:null, //用于存储用户的行动附属的内容，比如“心跳问题”
          }
        ]
        const success = true;
        resolve({
          data,
          success,
        });
        // this.labels.push(...data)
      }, 1000);
    });
  },


  earnCredit(goods_id,credit) {
    return httpService.post({
      url: `${apiConfig.baseUrl}/api/v1/credit/${goods_id}/earn`,
      data: {
        credit: credit,
      },
    });
  },

  earnCreditTest: function (goods_id,credit) {
    console.log("earn credit ...", goods_id, credit);
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

export default serviceMsgChat;
