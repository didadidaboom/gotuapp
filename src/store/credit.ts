import { observable, action } from "mobx";
import tool from "../utils/tool";
import serviceCredit from "../services/credit";

/**
 * 处理朋友互动问答
 */
class CreditStore {
  @observable buttongStatus = "preparing"; //支付按钮的状态 "preparing" "paying" "done
  @observable selectedActivity = null; //活动
  //获取的的参数
  @observable creditGoods = null; //积分商品
  @observable creditProducts = null; //积分产品  简版
  @observable orderItem = null; //订单项目
  //需要保存的参数
  /**
   * id: 4,
            credit: 2450,
            money: 1080,
            unit: "￥",
            discount: 7.4,
            finalPrice: 798,
            selected: null,
   */
  @observable selectedItem = null //选中的商品


  /**
   *
   * @param value : "preparing" "paying" "done"
   */
  @action
  setButtongStatus(value){
    this.buttongStatus = value
  }

  @action
  setSelectedItem(value) {
    this.selectedItem = value
  }

  //------------API--------

  @action
  async doInitateAction(data) {
    const res = await serviceCredit.doInitateActionTest(data);
    // console.log("res = ",res)
    if (res && res.success && res.data) {
      try {
        // this.creditGoods = res.data
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: doInitateAction ");
      return res.success;
    } else {
      console.log("else doInitateAction ");
      return res.success
    }
  }

  /**
   *  {
            id: 0,
            credit: 60,
            price: 12,
            unit: "￥",
            discount: 10,
            finalPrice: 12,
          }
   * @returns 提交支付
   */
  @action
  async onSubmmitPayment() {
    if(!this.selectedItem){
      return false
    }
    let order = {
      order_item_id: this.selectedItem.id,
      credit: this.selectedItem.credit,
      price: this.selectedItem.finalPrice,
      unit: this.selectedItem.unit,
    }
    const res = await serviceCredit.onSubmmitPaymentTest(order);
    console.log("res = ",res)
    if (res && res.success && res.data) {
      try {
        return res.success;
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: onSubmmitPayment ");
      return res.success;
    } else {
      console.log("else onSubmmitPayment ");
      return res.success
    }
  }

  @action
  async getOrderItem() {
    const res = await serviceCredit.getOrderItemTest();
    // console.log("res = ",res)
    if (res && res.success && res.data) {
      try {
        this.orderItem = res.data
        if(this.orderItem){
          this.setSelectedItem(this.orderItem[0] )
          this.setButtongStatus("preparing")
          // if(this.selectedItem){
          //   this.payLoadingMapToMsg("preparing",this.selectedItem.finalPrice)
          // }
        }
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: getOrderItem ");
      return res.success;
    } else {
      console.log("else getOrderItem ");
      return res.success
    }
  }

  @action
  async earnCredit(credit_goods_type,credit) {
    const res = await serviceCredit.earnCreditTest(credit_goods_type,credit);
    // console.log("res = ",res)
    if (res && res.success && res.data) {
      try {
        // this.creditGoods = res.data
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: earnCredit ");
      return res;
    } else {
      console.log("else earnCredit ");
      return res
    }
  }

  @action
  async consumeCredit(credit_goods_type,credit) {
    const res = await serviceCredit.consumeCreditTest(credit_goods_type,credit);
    // console.log("res = ",res)
    if (res && res.success && res.data) {
      try {
        // this.creditGoods = res.data
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: consumeCredit ");
      return res.success;
    } else {
      console.log("else consumeCredit ");
      return res.success
    }
  }

  /**
   *
   * @returns 获取用户的通知设置
   */
  @action
  async getCreditGoods() {
    const res = await serviceCredit.getCreditGoodsTest();
    // console.log("res = ",res)
    if (res && res.success && res.data) {
      try {
        this.creditGoods = res.data
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: get credit goods ");
      return res.success;
    } else {
      console.log("else get credit goods ");
      return res.success
    }
  }

  /**
   *
   * @returns 获取用户的通知设置
   */
  @action
  async getCreditProduct() {
    const res = await serviceCredit.getCreditProductTest();
    // console.log("res = ",res)
    if (res && res.success && res.data) {
      try {
        this.creditProducts = res.data
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: get credit Product ");
      return res.success;
    } else {
      console.log("else get credit Product ");
      return res.success
    }
  }

  @action
  async initData() {
     await this.getCreditGoods();
  }

  @action
  clearData() {
    // 在组件卸载前清除数据或执行其他内存管理操作
    this.creditGoods = null;
    this.orderItem = null;
  }
}

const creditStore = new CreditStore();

export default creditStore;
