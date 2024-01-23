import httpService from "./httpService";
import apiConfig from "./apiConfig";

const service = {
  getPhoneCode() {
    return httpService.get({
      url: `${apiConfig.baseUrl}/api/v1/phonecode`,
    });
  },
  //old below
  getFilmList() {
    return httpService.get({
      url: `${apiConfig.baseUrl}/ghibliapi/films`,
    });
  },

  // 获取影片详情
  getFilmDetail(id) {
    return httpService.get({
      url: `${apiConfig.baseUrl}/ghibliapi/films/${id}`,
    });
  },

  // 获取人物
  getPeople() {
    return httpService.get({
      url: `${apiConfig.baseUrl}/ghibliapi/people`,
    });
  },

  // 获取位置
  getLocations() {
    return httpService.get({
      url: `${apiConfig.baseUrl}/ghibliapi/locations`,
    });
  },

  // 获取物种
  getSpecies() {
    return httpService.get({
      url: `${apiConfig.baseUrl}/ghibliapi/species`,
    });
  },

  // 获取交通工具
  getVehicles() {
    return httpService.get({
      url: `${apiConfig.baseUrl}/ghibliapi/vehicles`,
    });
  },

  wxLogin(code) {
    return httpService.post({
      url: `${apiConfig.baseUrl}/api/v1/wxLogin`,
      data: {
        code,
      },
    });
  },

  ticket() {
    return httpService.get({
      url: `${apiConfig.baseUrl}/api/v1/ticket`,
    });
  },

  saveAge(age) {
    return httpService.post({
      url: `${apiConfig.baseUrl}/api/v1/register/age/save`,
      data: {
        age: age,
      },
    });
  },

  saveGender(gender) {
    return httpService.post({
      url: `${apiConfig.baseUrl}/api/v1/register/gender/save`,
      data: {
        gender: gender,
      },
    });
  },
};

export default service;
