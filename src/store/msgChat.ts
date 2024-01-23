import { observable, action } from "mobx";
import tool from "../utils/tool";
import serviceMsgChat from "../services/msgChat";

/**
 * 处理朋友互动问答
 */
class MsgChatStore {
  @observable msgNotify_id = null;
  //获取的的参数
  @observable msgList = [];
  @observable msgIntro = [];
  //需要保存的参数

  @action
  setMsgNotify(msgNotify_id) {
    this.msgNotify_id = msgNotify_id;
  }

  /**
   * 构造行动消息如下模板
   * {
            index:1,
            id:2,
            sender: "robot",
            senderUserId: null,
            type: 6003,
            content: 我是机器人，我的行动代号为：actionName ， actionDescription ， actionRule,
            time: null,
          }
   * @param actionId
   * @returns
   */
  @action
  sendActionMsg(action) {
    let content = `我是“gotu@她(他)的小纸条”的机器人，我们的行动计划如下：`
    if(this.msgList.length == 0){
      return false
    }

    let msg = {
      index: this.msgList.length,
      id: null,
      sender: "robot",
      senderUserId: null,
      action: action,
      content: content,
      time: null,
      extraContent: null,
    }
    this.msgList.push(msg)
  }
  //------------API--------
  @action
  async getFocuse(user_id) {
    const res = await serviceMsgChat.getFocuseTest(user_id);
    // console.log("res = ",res)
    if (res && res.success && res.data) {
      try {
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: getFocuse ");
      return res.success;
    } else {
      console.log("else getFocuse ");
      return res.success
    }
  }



  @action
  async getMsgIntro(msgNotify_id) {
    const res = await serviceMsgChat.getMsgIntroTest(msgNotify_id);
    // console.log("res = ",res)
    if (res && res.success && res.data) {
      try {
        this.msgIntro = res.data
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: getMsgIntro ");
      return res.success;
    } else {
      console.log("else getMsgIntro ");
      return res.success
    }
  }

  @action
  async getMsgList(msgNotify_id) {
    const res = await serviceMsgChat.getMsgListMsgTest(msgNotify_id);
    // console.log("getMsgList res = ",res)
    if (res && res.success && res.data) {
      try {
        this.msgList = res.data
        console.log("data = ",res.data)
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: getMsgList ");
      return res.success;
    } else {
      console.log("else getMsgList ");
      return res.success
    }
  }


  @action
  async initData() {
    let msgNotify_id =this.msgNotify_id
    if(!this.msgNotify_id){
      return false
    }
    await this.getMsgIntro(msgNotify_id);
    await this.getMsgList(msgNotify_id);
    return true
  }

  @action
  clearData() {
    // 在组件卸载前清除数据或执行其他内存管理操作
    // this.creditGoods = null;
    // this.orderItem = null;
  }
}

const msgChatStore = new MsgChatStore();

export default msgChatStore;
