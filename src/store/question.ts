import { observable, action } from "mobx";
import tool from "../utils/tool";
import serviceQuestion from "../services/question";

/**
 * 处理朋友互动问答
 */

class QuestionStore {
  countdownIntervalId: NodeJS.Timeout | null = null;
  @observable timeLeft = {
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  };
  @observable isShuffle = null;
  @observable expose: number[] = [];
  @observable tmpAnswer = [];
  @observable current = 0; //当前页码
  // 默认 "00" 为网络有问题,或者加载不到数据;"11"为开始答题;"22"为等待倒计时
  @observable isWaitingPoll = "33";
  //获取的的参数
  @observable endTime = null;
  @observable questionList = []; //question list
  @observable answerList = []; //答案的列表
  //需要保存的参数
  /**
   * 结构:
      [
          {
            "question_id": 1,
            "answer_id": 1,
            "status":0,
          }
      ]
   */
  finalAnswers: any = []; //答案提交
  // @action saveAll(){
  //   this.registerUser()
  //   return true
  // }

  @action
  getCurrentQuestionId() {
    let index = this.current;
    if (this.questionList.length) {
      let question_id = this.questionList[index].id;
      return question_id;
    }
    return null;
  }

  @action
  setEndTime(value) {
    this.endTime = value;
  }

  @action
  setIsWaitingPoll(value) {
    this.isWaitingPoll = value;
  }

  @action saveAnswer(value) {
    this.finalAnswers.push(value);
    // console.log("finalAnswers = ", this.finalAnswers);
  }

  @action setIsShuffle(value) {
    this.isShuffle = value;
  }

  @action setExpose(value) {
    this.expose = value;
  }

  @action resetExpose() {
    this.expose = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  }

  @action setSelectedAnswer(index) {
    this.tmpAnswer.push(this.answerList[index]);
  }

  @action resetSelectedAnswer() {
    this.tmpAnswer = [];
  }

  @action
  delayedResetCountDown(endTime){
    setTimeout(() => {
      this.setEndTime(endTime);
      this.startCountdown(this.endTime);
      this.setIsWaitingPoll("22");
    }, 3000);
  }

  @action
  updateTimeLeft(timeLeft) {
    // Ensure that hours, minutes, and seconds are formatted as two digits
    timeLeft.days = timeLeft.days
      ? timeLeft.days.toString().padStart(2, "0")
      : "00";
    timeLeft.hours = timeLeft.hours
      ? timeLeft.hours.toString().padStart(2, "0")
      : "00";
    timeLeft.minutes = timeLeft.minutes
      ? timeLeft.minutes.toString().padStart(2, "0")
      : "00";
    timeLeft.seconds = timeLeft.seconds
      ? timeLeft.seconds.toString().padStart(2, "0")
      : "00";
    this.timeLeft = timeLeft;
  }

  @action
  startCountdown(endTime) {
    const updateCountdown = () => {
      const difference = endTime - new Date().getTime();
      let timeLeft = {};
      // console.log("start count ..",difference)
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
      }
      this.updateTimeLeft(timeLeft);
      if (difference <= 0) {
        // Countdown expired, stop the interval
        // clearInterval(interval);
        this.clearCountDown()
        this.initPollData();
      }
    };
    // Call the updateCountdown initially
    updateCountdown();
    // Start the interval
    // const interval = setInterval(updateCountdown, 1000);
    const interval = setInterval(updateCountdown, 1000);
    // Save the interval ID in the component's state
    console.log("interval = ",interval)
    this.countdownIntervalId = interval;
  }

  @action
  clearCountDown(){
    console.log("this interval = ",this.countdownIntervalId)
    if(this.countdownIntervalId){
      clearInterval(this.countdownIntervalId)
      console.log("clear interal")
    }
  }

  @action
  getExposed = () => {
    const availableNumbers = this.expose;
    // console.log("first = ", availableNumbers);
    if (availableNumbers.length >= 4) {
      this.resetSelectedAnswer();
      for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * availableNumbers.length);
        const selectedNumber = availableNumbers.splice(randomIndex, 1)[0];
        this.setSelectedAnswer(selectedNumber);
        // result.push(selectedNumber);
      }
      // console.log("tmp answer = ",this.tmpAnswer)
      if (availableNumbers.length < 4) {
        this.resetExpose();
        this.setIsShuffle(false);
      } else {
        this.setExpose(availableNumbers);
        this.setIsShuffle(true);
      }
    } else {
      this.setIsShuffle(false);
      this.resetExpose();
    }
  };

  //------------API--------
  @action
  async getQustionList() {
    const res = await serviceQuestion.getQuetionListTest();
    if (res && res.success && res.data) {
      if (res.data.questionLength) {
        try {
          this.setIsWaitingPoll("11");
          this.questionList = res.data.questions;
          // console.log("getquesiton =", res.data);
        } catch (error) {
          // 处理错误
          console.error("Error updating data:", error);
        }
        console.log("done: get question list ");
        return res;
      } else if (res.data.endTime) {
        this.setEndTime(res.data.endTime);
        this.startCountdown(this.endTime);
        this.setIsWaitingPoll("22");
        return;
      }
      this.setIsWaitingPoll("33");
    } else {
      console.log("else get quesiton");
      this.setIsWaitingPoll("33");
    }
  }

  @action
  async getAnswerList(qustion_id) {
    this.resetSelectedAnswer();
    const res = await serviceQuestion.getAnswerListTest(qustion_id);
    if (res && res.success && res.data) {
      try {
        this.answerList = res.data.answers;
        // console.log('this.answerList=',this.answerList)
        this.resetExpose();
        this.getExposed();
        this.setIsShuffle(true);
        // console.log("this.tmpAnswer = ",this.tmpAnswer)
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: get answer list ");
      return res;
    } else {
      this.setIsWaitingPoll("33");
    }
  }

  /**
   * 保存答案
   * 同时要求统计 用户的热度
   */
  @action
  async saveAnsweredQuestion() {
    let final = this.finalAnswers;

    const res = await serviceQuestion.saveAnsweredQuestionTest(final);

    if (res && res.success && res.data) {
      try {
        // this.setEndTime(res.data.endTime);
        // this.startCountdown(this.endTime);
        this.setIsWaitingPoll("55");
        this.delayedResetCountDown(res.data.endTime)
      } catch (error) {
        // 处理错误
        console.error("Error updating data:", error);
      }
      console.log("done: save answer ");
    }
  }

  /**
   * 快速问答
   * 消费积分快速再次问答
   */
  @action
  async jumpQuickStart() {

    const res = await serviceQuestion.jumpQuickStartTest();

    if (res && res.success && res.data) {
      try {
        // this.setEndTime(res.data.endTime);
        // this.startCountdown(this.endTime);
        // this.setIsWaitingPoll("55");
        this.clearCountDown()
        this.clearData()
        this.initPollData();
        // this.initPollData()
      } catch (error) {
        // 处理错误
        console.error("Error jumpQuickStart:", error);
      }
      console.log("done: jumpQuickStart ");
    }
  }

  @action
  async initPollData() {
    this.setIsWaitingPoll("11");
    await this.getQustionList();
    let qustion_id = this.getCurrentQuestionId();
    if (qustion_id) {
      await this.getAnswerList(qustion_id);
    }
  }

  @action
  clearData() {
    // 在组件卸载前清除数据或执行其他内存管理操作
    this.questionList = [];
    this.answerList = [];
    this.tmpAnswer = [];
    this.expose = [];
  }
}

const questionStore = new QuestionStore();

export default questionStore;
