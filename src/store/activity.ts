import { observable, action } from "mobx";
import tool from "../utils/tool";
import serviceActivity from "../services/activity";

/**
 * 处理朋友互动问答
 */
class ActivityStore {

  @observable defaultValue = [];  //默认值 for select type of activity
  //获取的的参数
  @observable activityTypeList = null; //活动 type 10001 in 3 random answers of the polls
  //需要保存的参数



  @action
  setActivityTypeList(value){
    this.activityTypeList = value
  }
  //-------------api-------------------
  @action
  async saveMembershipOrder(item, value) {
    if(value===null){
      return
    }
    let data = {
      credit_goods_id: item.id,
      type: item.type,
      value: value,
    }
    const res = await serviceActivity.saveMembershipOrderTest(data);
    // console.log("res = ",res)
    if (res && res.success && res.data) {
      try {
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: saveMembershipOrder ");
      return res.success;
    } else {
      console.log("else saveMembershipOrder ");
      return res.success
    }
  }
  /**
   * 用于需要选择学校或者人的场景
   * @returns 获取学校和人的列表
   */
  @action
  async getActivityType(type) {
    if(!type){
      return false
    }
    const res = await serviceActivity.getActivityTypeTest(type);
    console.log("res = ",res)
    if (res && res.success && res.data) {
      try {
        this.activityTypeList = res.data
        this.defaultValue = [res.data[0].value]
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: getActivityTypeList ");
      return res.success;
    } else {
      console.log("else getActivityTypeList ");
      return res.success
    }
  }

  @action
  async initData() {
    // let type = this.type;
    // await this.getActivityType(type);
  }

  @action
  clearData() {
    // 在组件卸载前清除数据或执行其他内存管理操作
    this.activityTypeList = null;
  }
}

const activityStore = new ActivityStore();

export default activityStore;
