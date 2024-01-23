import httpService from "./httpService";
import apiConfig from "./apiConfig";

export const serviceLogin = {

  /**
   * 通知后台发送短信验证码
   * @returns
   */
  sentPhoneCode(phone) {
    return httpService.get({
      url: `${apiConfig.baseUrl}/api/v1/login/code/sent/{phone}`,
    });
  },

  sentPhoneCodeTest:function (phone) {
    console.log("sending code ...")
    return new Promise((resolve)=>{
      setTimeout(() => {
        const data = null
        const success = true
        resolve({
          data,
          success
        })
        // this.labels.push(...data)
      }, 1000)
    })
  },

  /**
   * 验证手机验证码
   * @param code 手机验证码
   * @returns token 要求返回token
   */
  checkPhoneCode(phone,code) {
    return httpService.post({
      url: `${apiConfig.baseUrl}/api/v1/login/code/check`,
      data: {
        phone: phone,
        code: code
      },
    });
  },

  checkPhoneCodeTest:function (phone,code) {
    console.log("checking code ...")
    return new Promise((resolve)=>{
      setTimeout(() => {
        const data = {"token":1123}
        const success = true
        resolve({
          data,
          success
        })
        // this.labels.push(...data)
      }, 1000)
    })
  },

  /**
   * 验证手机号在后台
   * 1.判断是否已注册，判断条件：isPhone; isFacial;isWechat
   * 2.如果没有注册,也默认 再次首次验证码登陆
   * 从而判断 是登陆/注册
   * @param phone 手机号
   * @returns is_new
   */
  checkPhone(phone) {
    return httpService.post({
      url: `${apiConfig.baseUrl}/api/v1/login/phone/check`,
      data: {
        phone: phone,
      },
    });
  },

  checkPhoneTest:function (num) {
    console.log("checking phone ...")
    return new Promise((resolve)=>{
      setTimeout(() => {
        const data = {"isNew":true, "isExist":false}
        const success = true
        resolve({
          data,
          success
        })
        // this.labels.push(...data)
      }, 1000)
    })
  },

}

export default {
  serviceLogin
}
