import { observable, action } from "mobx";
import Taro from "@tarojs/taro";
import service from "../services";
import tool from "../utils/tool";
import { serviceLogin } from "../services/login";

/**
 * 测试阶段参数：
 * isCodeValid(): is_Valid = true
 *
 * 实际应用参数：
 * isCodeValid(): is_Valid = false
 *
 */

let timer: any;

class LoginStore {
  @observable phoneChanged = false;
  @observable initPhone: any = null; //用于备份手机号
  @observable phone_valid = false; //whether the phone number is valid
  @observable msg_phone: any = "请输入手机号"; //手机格式消息
  @observable content_btn = "请输入正确的手机号"; //手机号格式提示内容
  @observable checked = false; //用户协议是否选择
  @observable finalCode: any = null;
  @observable isFocusNumber: any = false; //判断input是否激活
  @observable active = false; //是否激活验证码输入
  @observable content_code = "重新发送"; //"重新发送"按钮信息显示
  @observable show_btn = false; //是否显示“重新发送”按钮
  @observable next_btn = false; //是否验证登陆
  @observable is_valid = false; //return: code是否合法
  @observable msg_code: any = "请输入验证码"; // 验证消息
  @observable count = 60; //倒计时时间设定
  @observable count_init = 60; //倒计时初始值设定
  //获取的参数
  @observable is_new = true; //return: 是否是新用户
  @observable isExist = null; //return: 是否已经注册
  @observable selectCode = ["", "", "", ""]; //====验证码
  //需要保存的参数
  @observable phone: any = null; //======手机号

  @action
  async setPhone(num) {
    this.phone = num;
    await this.isPhoneValid();
  }
  @action
  async isPhoneValid() {
    if (tool.isEmpty(this.phone)) {
      // console.log("phone no is empty");
      this.phone_valid = false;
      this.msg_phone = "手机号不能为空, 且必须为11位数字";
      // this.content_btn = '手机号不能空'
    } else if (this.getLength() < 11) {
      this.phone_valid = false;
      this.content_btn = "手机号必须位11位数字";
      this.msg_phone = "手机号必须位11位数字";
    } else if (!/^1[3456789]\d{9}$/.test(this.phone)) {
      // console.log("format of phone no is invalid");
      this.phone_valid = false;
      this.content_btn = "手机号格式错误";
      this.msg_phone = "手机号格式错误";
    } else if (/^1[3456789]\d{9}$/.test(this.phone)) {
      this.phone_valid = true;
      this.msg_phone = null;
      await this.checkPhone();
      if (this.initPhone !== null && this.initPhone !== this.phone) {
        this.phoneChanged = true;
      }
    } else {
      // console.log("phone no is invalid");
      this.phone_valid = false;
      this.content_btn = "请输入正确的手机号";
      this.msg_phone = "手机号存在错误";
    }
  }
  @action
  rmLastPhone() {
    if (tool.isEmpty(this.phone)) {
      this.phone = null;
      return;
    }
    this.phone = tool.rmLast(this.phone);
  }
  @action
  getLength() {
    if (tool.isEmpty(this.phone)) {
      return 0;
    }
    return this.phone.length;
  }
  @action
  getStatus() {
    return this.checked;
  }
  @action
  changeStatus() {
    this.checked = !this.checked;
  }
  @action
  initalCodeCal() {
    this.selectCode = ["", "", "", ""];
  }

  @action
  async isCodeValid() {
    //此次判断code是否合法, isValid应该为false，测试阶段暂时设为true
    // let isValid = false;
    /**
     * 此处需和数据库的code比较，判断code是否合法
     */

    if (!this.phone_valid) {
      this.next_btn = false;
      this.msg_code = "手机号不正确，请返回上一页，重新填写";
    } else {
      if (tool.isEmpty(this.selectCode[3])) {
        this.msg_code = "请补全验证码";
        this.next_btn = false;
        return;
      } else {
        await this.checkPhoneCode();
        // console.log("---------- ",res.isValid,res.isNew)
        let isValid = this.is_valid;
        // console.log("---------", isValid)
        if (isValid) {
          this.next_btn = true;
          this.count = this.count_init;
          loginStore.isFocusNumber = false;
          this.active = false;
          this.msg_code = null;
        } else {
          this.msg_code = "验证码错误，请重新输入";
          this.next_btn = false;
        }
      }
    }
  }

  @action
  isSending() {
    if (this.count === this.count_init || this.phone !== this.initPhone) {
      return false;
    }
    return true;
  }

  @action
  getCode() {
    // console.log("getcode ")
    this.initPhone = this.phone;
    if (timer !== null) {
      clearInterval(timer);
    }
    this.phoneChanged = false;
    this.count = this.count_init;
    let count = this.count;

    this.sentPhoneCode()

    timer = setInterval(() => {
      this.count = count--;
      this.show_btn = false;
      this.content_code = "重新发送(" + count + ")";
      if (count === 0) {
        clearInterval(timer);
        this.show_btn = true;
        this.count = this.count_init;
        this.content_code = "重新发送";
        this.next_btn = false;
        this.phoneChanged = false;
      }
    }, 1000);
  }

  //--------------API---------------
  /**
   * 提醒后台发送验证码
   * @returns true
   */
  @action
  async sentPhoneCode() {
    let phone = this.phone
    const res = await serviceLogin.sentPhoneCodeTest(phone);
    if (res && res.success && res.data) {
      try {
        // console.log("res = ",res)
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: checkPhoneCode ");
    }
    return res;
  }

  /**
   * 检查手机验证码
   * 通过：直接判断登陆，或者注册
   * 不通过：错误提示并拒绝进入下一步
   * @param code
   * @returns res.data.is_Valid:
   */
  @action
  async checkPhoneCode() {
    let code =
      this.selectCode[0] +
      this.selectCode[1] +
      this.selectCode[2] +
      this.selectCode[3];
    let phone = this.phone
    const res = await serviceLogin.checkPhoneCodeTest(phone,code);
    if (res && res.success && res.data) {
      this.is_valid = true;
      try {
        Taro.setStorageSync("token", res.data.token);
      } catch (e) {
        // 处理错误
        console.error("Error updating data:", e);
      }
      console.log("done: checkPhoneCode is ", this.is_valid);
    }
    return res;
  }

  /**
   * 检查手机号是否已经存在
   * 存在：已经注册，可以直接通过code验证登陆
   * 不存在：新用户，通过code注册，并进入后续注册程序
   * @returns res.data.isNew:
   * true：是新用户
   * false：已注册
   */
  @action
  async checkPhone() {
    let phone = this.phone;
    const res = await serviceLogin.checkPhoneTest(phone);
    if (res && res.success && res.data) {
      try {
        // console.log("res = ",res)
        this.is_new = res.data.isNew;
        this.isExist = res.data.isExist;
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: checkPhone is ", this.is_new);
    }
    return res;
  }

  @action
  initData() {
    // this.is_new = true;
    this.is_valid = false; // 清空数据
    this.selectCode = ["", "", "", ""];
  }

  @action
  clearData() {
    // 在组件卸载前清除数据或执行其他内存管理操作
    this.is_new = true;
    this.is_valid = false; // 清空数据
    this.selectCode = ["", "", "", ""];
  }
}

const loginStore = new LoginStore();

export default loginStore;
