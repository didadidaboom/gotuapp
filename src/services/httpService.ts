import Taro from "@tarojs/taro";

// 网络请求拦截器
const interceptor = function (chain) {
  const requestParams = chain.requestParams;
  const { method, data, url } = requestParams;
  Taro.showNavigationBarLoading();
  Taro.showLoading({
    title: "loading",
  });
  // console.log(requestParams)
  const token = Taro.getStorageSync("token");
  console.log("token:", token);
  // 添加token
  requestParams.header = { ...requestParams.header, token };
  // console.log(`http ${method || 'GET'} --> ${url} data: `, data)
  return chain.proceed(requestParams).then((res) => {
    Taro.hideLoading();
    Taro.hideNavigationBarLoading();
    // console.log(`http <-- ${url} result:`, res)
    return res.data;
  });
};

Taro.addInterceptor(interceptor);

export default {
  request(option, method = "GET") {
    return Taro.request({
      ...option,
      method,
      header: {
        "content-type": "application/json",
        ...option.header,
      },
    });
  },
  get(option) {
    return this.request(option, "GET");
  },
  post(option) {
    return this.request(option, "POST");
  },
  put(option) {
    return this.request(option, "PUT");
  },
  delete(option) {
    return this.request(option, "DELETE");
  },

};
