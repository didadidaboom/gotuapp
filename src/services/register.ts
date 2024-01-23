import httpService from "./httpService";
import apiConfig from "./apiConfig";

const serviceRegister = {
  registerHer(data) {
    return httpService.post({
      url: `${apiConfig.baseUrl}/api/v1/register/her/save`,
      data: data,
    });
  },

  registerHerTest: function (data) {
    console.log("registing her ...", data);
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = { result: true};
        const success = true
        resolve({
          data,
          success
        });
        // this.labels.push(...data)
      }, 1000);
    });
  },

  registerUser(data) {
    return httpService.post({
      url: `${apiConfig.baseUrl}/api/v1/register/user/save`,
      data: data,
    });
  },

  registerUserTest: function (data) {
    console.log("registing user ...", data);
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = { result: true };
        const success = true
        resolve({
          data,
          success
        });
        // this.labels.push(...data)
      }, 1000);
    });
  },

  saveAvatar(avatar_index) {
    return httpService.post({
      url: `${apiConfig.baseUrl}/api/v1/register/avatar/save`,
      data: {
        avatar: avatar_index,
      },
    });
  },

  saveAvatarTest: function (avatar_index) {
    console.log("saving avatar ...", avatar_index);
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = { result: true };
        const success = true
        resolve({
          data,
          success
        });
        // this.labels.push(...data)
      }, 1000);
    });
  },

  /**
   * 保存所选择的学校
   * @param value 选择的学校 id
   * @returns
   */
  saveSelectedSchool(value) {
    return httpService.post({
      url: `${apiConfig.baseUrl}/api/v1/register/school/save`,
      data: {
        selectedSchool: value,
      },
    });
  },

  saveSelectedSchoolTest: function (value) {
    console.log("saving selected school ...", value);
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = { result: true };
        const success = true
        resolve({
          data,
          success
        });
        // this.labels.push(...data)
      }, 1000);
    });
  },

  /**
   * 获取学校列表,默认根据用户位置获取
   * @param current 当前页面
   * @param size 单页的内容数量
   * @param keyword 搜索的关键字
   * @param 考虑默认位置
   * @returns data: [
            {
              id: 0,
              name: "黎川第1中学",
              address: "黎川县",
              members: 60,
              selected: null,
            },
            {
              id: 1,
              name: "黎川第2中学",
              address: "黎川县",
              members: 80,
              selected: null,
            },]
   *
   */
  getSchoolSearchList(current, size, keyword: any) {
    return httpService.post({
      url: `${apiConfig.baseUrl}/api/v1/register/school/search`,
      data: {
        page: current,
        size: size,
        keyword: keyword,
      },
    });
  },

  getSchoolSearchListTest: function (
    current: number,
    size: number,
    keyword: any
  ) {
    console.log("获取school search list ...");

    return new Promise((resolve) => {
      setTimeout(() => {
        let data: any = null;
        const dataALL = {
          counts: 5,
          pages: 3,
          page: 0,
          size: 2,
          data: [
            {
              id: 10,
              name: "广州第1中学",
              address: "广州",
              members: 60,
              selected: null,
            },
            {
              id: 11,
              name: "广州第2中学",
              address: "广州",
              members: 80,
              selected: null,
            },
            {
              id: 12,
              name: "广州第3中学",
              address: "广州",
              members: 50,
              selected: null,
            },
            {
              id: 13,
              name: "广州第4中学",
              address: "广州",
              members: 50,
              selected: null,
            },
            {
              id: 14,
              name: "广州第5中学",
              address: "广州",
              members: 50,
              selected: null,
            },
          ],
        };

        if (current < dataALL.pages) {
          let start = current * dataALL.size;
          let end =
            current * dataALL.size + dataALL.size < dataALL.counts
              ? current * dataALL.size + dataALL.size
              : dataALL.counts;
          data = dataALL.data.slice(start, end);
        }

        const success = true;

        resolve({
          data,
          success
        });
        // this.labels.push(...data)
      }, 1000);
    });
  },

  /**
   * 获取学校列表,默认根据用户位置获取
   * @param current 当前页面
   * @param size 单页的内容数量
   * @param 考虑默认位置
   * @returns data: [
            {
              id: 0,
              name: "黎川第1中学",
              address: "黎川县",
              members: 60,
              selected: null,
            },
            {
              id: 1,
              name: "黎川第2中学",
              address: "黎川县",
              members: 80,
              selected: null,
            },]
   *
   */
  getSchoolList(current, size) {
    return httpService.post({
      url: `${apiConfig.baseUrl}/api/v1/register/school/list`,
      data: {
        page: current,
        size: size,
      },
    });
  },


  getSchoolListTest: function (current: number, size: number) {
    console.log("获取school list ...");

    return new Promise((resolve) => {
      setTimeout(() => {
        let data: any = null;
        const dataALL = {
          counts: 5,
          pages: 3,
          page: 0,
          size: 2,
          data: [
            {
              id: 0,
              name: "深圳市第1中学",
              address: "深圳",
              members: 60,
              selected: null,
            },
            {
              id: 1,
              name: "深圳市第2中学",
              address: "深圳",
              members: 80,
              selected: null,
            },
            {
              id: 2,
              name: "深圳市第3中学",
              address: "深圳",
              members: 50,
              selected: null,
            },
            {
              id: 3,
              name: "深圳市第4中学",
              address: "深圳",
              members: 50,
              selected: null,
            },
            {
              id: 4,
              name: "广州国际中学",
              address: "深圳",
              members: 50,
              selected: null,
            },
          ],
        };

        if (current < dataALL.pages) {
          let start = current * dataALL.size;
          let end =
            current * dataALL.size + dataALL.size < dataALL.counts
              ? current * dataALL.size + dataALL.size
              : dataALL.counts;
          data = dataALL.data.slice(start, end);
        }
        const success = true;

        resolve({
          data,
          success
        });
        // this.labels.push(...data)
      }, 1000);
    });
  },

  /**
   * 保存年龄
   * @param age 年龄
   * @returns
   */
  saveAge: function (age) {
    return httpService.post({
      url: `${apiConfig.baseUrl}/api/v1/register/age/save`,
      data: {
        age: age,
      },
    });
  },

  saveAgeTest: function (age) {
    console.log("saving age ...", age);
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = { result: true };
        const success = true
        resolve({
          data,
          success
        });
        // this.labels.push(...data)
      }, 1000);
    });
  },


  /**
   *
   * @param value 高中的数字代号id
   * 14: 不是高中
   * 15: 高一
   * 16: 高二
   * 17: 高三
   * @returns
   */
  saveGrade: function (value) {
    return httpService.post({
      url: `${apiConfig.baseUrl}/api/v1/register/grade/save`,
      data: {
        grade: value,
      },
    });
  },

  saveGradeTest: function (value) {
    console.log("saving grade ...", value);
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = { result: true };
        const success = true
        resolve({
          data,
          success
        });
        // this.labels.push(...data)
      }, 1000);
    });
  },

  /**
   * 保存性别
   * @param gender
   * @returns
   */
  saveGender: function (gender) {
    return httpService.post({
      url: `${apiConfig.baseUrl}/api/v1/register/gender/save`,
      data: {
        gender: gender,
      },
    });
  },

  saveGenderTest: function (gender) {
    console.log("saving gender ...", gender);
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = { result: true };
        const success = true
        resolve({
          data,
          success
        });
        // this.labels.push(...data)
      }, 1000);
    });
  },
};

export default serviceRegister;
