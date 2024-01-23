import httpService from "./httpService";
import apiConfig from "./apiConfig";

const serviceQuestion = {

  /**
   *  快速跳过
   *  消耗积分 快速再次问答
   *  需要重置 上一次问答时间 并返回
   * @returns endtime 上一次
   */
  jumpQuickStart() {
    return httpService.post({
      url: `${apiConfig.baseUrl}/api/v1/question/jump/start`,
    });
  },

  jumpQuickStartTest: function () {
    console.log("jump quick start  questions ...");
    return new Promise((resolve) => {
      setTimeout(() => {
        const endTime = Date.now()
        const data = { endTime: endTime };
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
   * 获取问题:
   *          check 上一次完成时间,从而确定等待时间
   *          如果不在等待时间,返回questionList
   *          如果在等待时间,返回 空的 questionList 和相应的endTime
   * @returns
   */
  getQuetionList() {
    return httpService.get({
      url: `${apiConfig.baseUrl}/api/v1/qustions/list`,
    });
  },

  /**
   * @param 其中answer必须是4的倍数
   *    {
          titleLength: 10,
          questions: [
            {
              id: 10,
              title: "他应该是田径上闪耀的明星",
              status:0
            },
          ...],
        }

   * @returns
   */
  getQuetionListTest: function () {
    console.log("获取 questions ...");
    return new Promise((resolve) => {
      setTimeout(() => {
        const initquestions = [
          {
            id: 10,
            title: "在你低落的时候,他最可能会倾听和帮你",
            questionType: 1
          },
          {
            id: 11,
            title: "我勒个娘,他/她太性感了",
            questionType: 0
          },
          {
            id: 12,
            title: "如果你是一滴雨滴,你愿意为谁掉落",
            questionType: 0
          },
          {
            id: 13,
            title: "他最可能会取消他很棒的约会,陪你一起待家里一起看电影",
            questionType: 0
          },
          {
            id: 14,
            title: "感觉她总是想引起我的注意",
            questionType: 0
          },
          {
            id: 15,
            title: "我上课的走神的时候,注意力会到他身上",
            questionType: 0
          },
          {
            id: 16,
            title: "想和他约会",
            questionType: 0
          },
          {
            id: 17,
            title: "如果可以,想和他交换一天人生",
            questionType: 0
          },
          {
            id: 18,
            title: "他玩游戏太次了",
            questionType: 0
          },
          {
            id: 19,
            title: "他应该是田径上闪耀的明星",
            questionType: 0
          },
        ];
        const endTime = new Date('October 25, 2023 17:20:50').getTime()
        const difference = endTime - new Date().getTime();
        const questions = difference>0?[]:initquestions;
        // const questions = []
        const data = {
          questionLength: questions.length,
          endTime: endTime,
          questions: questions,
        };
        const success = true;
        resolve({
          data,
          success,
        });
        // this.labels.push(...data)
      }, 1000);
    });
  },

  getAnswerList(question_id) {
    return httpService.get({
      url: `${apiConfig.baseUrl}/api/v1/question/${question_id}/answer/list`,
    });
  },

  /**
   * @param 其中answer必须是4的倍数
   *    {
          answerLength: 12,
          answers: [
            {
              id: 20,
              name: "马东",
            },
          ...],
        }

   * @returns
   */
  getAnswerListTest: function (question_id) {
    console.log("获取 answer list ...",question_id);
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = {
          answerLength: 12,
          answers: [
            {
              id: 20,
              name: "赵今麦",
            },
            {
              id: 21,
              name: "邓恩熙",
            },
            {
              id: 22,
              name: "李庚希",
            },
            {
              id: 23,
              name: "欧阳娜娜",
            },
            {
              id: 24,
              name: "王源",
            },
            {
              id: 25,
              name: "黄明昊",
            },
            {
              id: 26,
              name: "庄达菲",
            },
            {
              id: 27,
              name: "段奥娟",
            },
            {
              id: 28,
              name: "刘浩存",
            },
            {
              id: 29,
              name: "蒋依依",
            },
            {
              id: 30,
              name: "张子枫",
            },
            {
              id: 31,
              name: "单依纯",
            },
          ],
        };
        const success = true;
        resolve({
          data,
          success,
        });
        // this.labels.push(...data)
      }, 1000);
    });
  },

  /**
   * 保持最终的问答,
   * 如果status为0,直接保存;
   * 如果status为1,需要check answer_id是否和question的创建者的目标user是否一样,如果一样,匹配表白通知;如果不一样,直接忽略,保存答案而已
   *
   * 除此之外，还要求统计用户被选的热度,给用户加回答问题credit（type:10005）
   *
   * @param endTime: 创建一个保存时间,用于下一次开始时间计算
   * @param data
   * [
          {
            "question_id": 1,
            "answer_id": 1,
            "status":0,
          }
      ]
   * @returns endTime: 下一次的等待时间
   */
  saveAnsweredQuestion(data) {
    return httpService.post({
      url: `${apiConfig.baseUrl}/api/v1/question/answer/save`,
      data: data,
    });
  },

  saveAnsweredQuestionTest: function (value) {
    console.log("saving answered questions ...", value);
    return new Promise((resolve) => {
      setTimeout(() => {
        const endTime = Date.now() + 45 * 60 * 1000
        const data = { endTime: endTime };
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

export default serviceQuestion;
