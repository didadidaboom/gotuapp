import { observable, action } from "mobx";
import Taro from "@tarojs/taro";
import service from "../services";
import tool from "../utils/tool";
import serviceRegister from "../services/register";

class RegisterStore {
  @observable gradeMapToName = {
    15:{gradeClass: "高一", gradeYear: "2023级"},
  }
  @observable genderMsg: any = null; //性别的提示信息
  @observable ageMsg: any = null; //年龄的提示信息
  @observable avatarMsg: any = null; //头像的提示信息
  @observable addressMsg: any = null; //地址的提示信息
  //获取的的参数
  @observable schoolList = []; //school list
  @observable schoolSearchList = []; //school list
  //需要保存的参数
  @observable grade: any = null; //年级  15：2023级 高一 2026届
  @observable gender: any = null; //性别 10:女 11:男 12:同性
  @observable age: any = null; //年龄
  @observable avatar: any = null; //头像index
  @observable selectedSchool: any = null; //选择的学校
  @observable searchValue = null; //搜索内容
  @observable userName = null; //用户名
  @observable addressName = null //地址名字

  @observable phone: any = null; //======手机号 for 新建用户

  @action
  setPhone(num) {
    this.phone = num;
  }

  @action
  saveAddressInput(value) {
    this.addressName = value;
  }

  @action
  setAvatarIndex(index){
    this.avatar = index
  }
  @action
  submitAvatar(param) {
    if (tool.isEmpty(param) || param === 0) {
      this.avatarMsg = "请选择头像";
      return false;
    }
    this.avatar = param;
    // this.saveAge();
    return true;
  }
  /**
   * 12: 初一
   * 13：初二
   * 14：初三
   * 15：高一
   * 16：高二
   * 17：高三
   * @returns
   */
  @action
  submitAge(param) {
    if (tool.isEmpty(param) || param === 0) {
      this.ageMsg = "请选择年龄";
      return false;
    }
    this.age = param;
    // this.saveAge();
    return true;
  }

  /**
   * 14: 2024级 2027届
   * 15: 2023级 2026届 高一
   * 16: 2022级 2025届
   * 17：2021级 2024届
   * 18：2020级 2023届
   * @param param
   * @returns
   */
  @action
  gradeMapToParam(grade){
    switch (true) {
      case grade === 14:
        return {gradeClass: "不是高中", gradeYear: ' ', gradeLeave: ' '};
      case grade === 15:
        return {gradeClass: "高一", gradeYear: "2023级", gradeLeave: "2026届"};
      case grade === 16:
        return {gradeClass: "高二", gradeYear: "2022级", gradeLeave: "2025届"};
      case grade === 17:
        return {gradeClass: "高三", gradeYear: "2021级", gradeLeave: "2024届"};
      case grade === 18:
        return {gradeClass: "已毕业", gradeYear: ' ', gradeLeave: ' '};
      default:
        return "还未选择";
    }
  }

  @action
  submitGrade(param) {
    this.grade = param;
    this.saveGrade();
    return true;
  }

  @action
  submitGender(param) {
    this.gender = param;
    // this.saveGender()
    return true;
  }

  @action
  submitSchool() {
    // this.saveSelectedSchool()
    return true;
  }

  @action
  saveSearchInput(value) {
    this.searchValue = value;
  }

  @action
  saveUserNameInput(value) {
    this.userName = value;
  }

  @action saveAll() {
    this.registerUser();
    return true;
  }

  @action
  saveHerAll() {
    this.registerHer();
    return true;
  }

  //------------API--------

  @action
  async getSchoolSearchList(current, size, keyword = null) {
    const res = await serviceRegister.getSchoolSearchListTest(
      current,
      size,
      keyword
    );
    if (res && res.success && res.data) {
      try {
        this.schoolSearchList.push(...res.data);
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: get search school list ");
    }
    return res;
  }

  @action
  async getSchoolSearchListInit(current, size, keyword = null) {
    const res = await serviceRegister.getSchoolSearchListTest(
      current,
      size,
      keyword
    );
    if (res && res.success && res.data) {
      try {
        this.schoolSearchList = res.data;
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: get search school list ");
    }
    return res;
  }

  @action
  async getSchoolList(current, size) {
    const res = await serviceRegister.getSchoolListTest(current, size);
    // console.log("res = ", res);
    if (res && res.success && res.data) {
      try {
        this.schoolList.push(...res.data);
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: get school list ");
    }
    return res.data;
  }

  @action
  async saveSelectedAvatar() {
    // console.log("current, size = ",current,size)
    let avatar = this.avatar;
    const res = await serviceRegister.saveAvatarTest(avatar);
    if (res && res.success && res.data) {
      try {
        // console.log("res = ",res)
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }

      console.log("done: save avatar ");
    }
    return res;
  }

  @action
  async saveSelectedSchool() {
    // console.log("current, size = ",current,size)
    let selectedSchool = this.selectedSchool;
    const res = await serviceRegister.saveSelectedSchoolTest(selectedSchool);
    if (res && res.success && res.data) {
      try {
        // console.log("res = ",res)
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }

      console.log("done: save selected school ");
    }
    return res;
  }

  /**
   * 保存年龄到后台
   * @returns true
   */
  @action
  async saveAge() {
    let age = this.age;
    const res = await serviceRegister.saveAgeTest(age);
    if (res && res.success && res.data) {
      try {
        //返回 true 和 false
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: saveAge ");
    }
    return res;
  }

  /**
   * 保存年龄到后台
   * @returns true
   */
  @action
  async saveGrade() {
    let grade = this.grade;
    const res = await serviceRegister.saveGradeTest(grade);
    if (res && res.success && res.data) {
      try {
        //返回 true 和 false
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: saveGrade ");
    }
    return res;
  }

  /**
   * 保存性别到后台
   * @returns true
   */
  @action
  async saveGender() {
    let gender = this.gender;
    const res = await serviceRegister.saveGenderTest(gender);
    if (res && res.success && res.data) {
      try {
        //返回 true 和 false
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: saveGrade ");
    }
    return res;
  }

  /**
   * 保存所有到后台,注册用户
   * @returns true
   */
  @action
  async registerUser() {
    let age = this.age;
    let gender = this.gender;
    let school = this.selectedSchool;
    let grade = this.grade;
    let userName = this.userName;
    let avatar = this.avatar;
    let addressName = this.addressName;

    let data = {
      avatar: avatar,
      age: age,
      gender: gender,
      school: school,
      grade: grade,
      userName: userName,
      addressName: addressName,
    };

    const res = await serviceRegister.registerUserTest(data);
    if (res && res.success && res.data) {
      try {
        //返回 true 和 false
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: register uer ");
    }
    return res.success;
  }

  /**
   * 保存所有到后台,注册用户
   * @returns true
   */
  @action
  async registerHer() {
    let phone = this.phone;
    let age = this.age;
    let gender = this.gender;
    let school = this.selectedSchool;
    let grade = this.grade;
    let userName = this.userName;
    let avatar = this.avatar;
    let addressName = this.addressName;

    let data = {
      phone: phone,
      avatar: avatar,
      age: age,
      gender: gender,
      school: school,
      grade: grade,
      userName: userName,
      addressName: addressName,
    };

    const res = await serviceRegister.registerHerTest(data);
    if (res && res.success && res.data) {
      try {
        // this.herUserId = res.data.her_user_id;
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: register her ");
    }
    return res.success;
  }

  @action
  initData() {

  }

  @action
  clearData() {
    // 在组件卸载前清除数据或执行其他内存管理操作
    this.genderMsg = null; // 清空数据
    this.avatarMsg = null;
    this.ageMsg = null;
    this.searchValue = null;
    this.schoolList = [];
    this.schoolSearchList = [];
    this.age = null;
    this.gender = null;
    this.avatar = null;
    this.selectedSchool = null;
    this.grade = null;
    this.userName = null;
    this.addressName = null;
  }
}

const registerStore = new RegisterStore();

export default registerStore;
