import { Component } from "react";
import { View, Text } from "@tarojs/components";
import { observer } from "mobx-react";
import { Animate } from "@nutui/nutui-react-taro";

import "@nutui/nutui-react-taro/dist/style.css";
import IconFont from "../iconfont";
import "./index.scss";

interface AnswerItemProps {
  item: any;
  index: number;
  onClick: Function;
  onClickSkip: Function;
  answers: any;
  isShuffle: any;
  onClickShuffle: Function;
}

@observer
export default class AnswerItem extends Component<AnswerItemProps> {
  toSkipQustion = () => {
    // console.log("inside skip");
    const { onClickSkip } = this.props;
    onClickSkip && onClickSkip();
  };

  gtRandom() {
    // 生成一个介于 0 到 10000 之间的随机整数(包括0和10000)
    let randomInt = Math.floor(Math.random() * 39);
    // console.log("randoom int = ",randomInt)
    // 将随机整数转换成字符串并添加到 className 中
    return `icon-EMOJI-${randomInt}`;
  }

  getShuffle = () => {
    // console.log("inside shuffle..")
    const { onClickShuffle } = this.props;
    onClickShuffle && onClickShuffle();
  };

  sumbmitAnswer = (item, answer_id) => {
    const { onClick } = this.props;
    let data = {
      question_id: item.id,
      answer_id: answer_id,
      questionType: item.questionType,
    };
    onClick && onClick(data);
  };

  render() {
    const { item, index, answers, isShuffle } = this.props;
    let dynamicEmoji = this.gtRandom();
    // let rdIndex = this.getExposedINRange(1,12,4)

    return (
      <>
        <View className="Questionpart w-full h-full px-4 pt-2  pb-8 flex-col justify-between items-center inline-flex">
          <View className="Upper self-stretch h-2 flex-col justify-center items-center gap-28 flex">
            <View className="Titilepart self-stretch h-2 flex-col justify-center items-center gap-2.5 flex">
              <View className="Title justify-center items-center gap-2.5 inline-flex">
                <Text className="Content drop-shadow-2xl text-center text-gray-50 text-2xl font-bold font-['Inter'] leading-loose">
                  朋友问答({index + 1}/10)
                </Text>
              </View>
            </View>
          </View>
          <View className="Middle self-stretch px-2 rounded-lg flex-col justify-center items-center gap-8 flex">
            {
              item.questionType===0&&
              <View className="Question self-stretch h-32 flex-col justify-center items-center gap-4 flex">
              <View className="drop-shadow-2xl">
                <IconFont name={`${dynamicEmoji}`} />
              </View>
              <View className="Description self-stretch justify-center items-center gap-2.5 inline-flex">
                <Text className="Content drop-shadow-2xl w-80 text-center text-white text-base font-semibold font-['Inter'] leading-normal">
                  {index + 1}.{item.title}
                </Text>
              </View>
            </View>
            }
            {
              item.questionType===1&&
              <Animate type="ripple" loop>
                <View className="Question self-stretch h-32 flex-col justify-center items-center gap-4 flex">
              <View className="drop-shadow-2xl">
                {/* <IconFont name="icon-heartMatch" /> */}
                <IconFont name="icon-love3" />
              </View>
              <View className="Description self-stretch justify-center items-center gap-2.5 inline-flex">
                <Text className="Content drop-shadow-2xl w-80 text-center text-white text-base font-semibold font-['Inter'] leading-normal">
                  {index + 1}.{item.title}
                </Text>
              </View>
            </View>
              </Animate>
            }
          </View>
          {
            answers.length>0&&
            <View className="Bottom self-stretch h-60 flex-col justify-center items-center gap-12 flex">
            <>
            {item.questionType === 0 && (
              <View className="Fillpart self-stretch h-32 flex-col justify-center items-center gap-4 flex">
                <View className="Fillup self-stretch justify-center items-center gap-4 inline-flex">
                  <View
                    className="Fill1 drop-shadow-xl grow shrink basis-0 h-14 p-0.5 bg-white rounded-lg flex-col justify-center items-center inline-flex"
                    hoverClass="View-hover scale-90"
                    hoverStayTime={400}
                    onClick={this.sumbmitAnswer.bind(this, item, answers[0].id)}
                  >
                    <Text className="Content w-40 text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                      {answers[0].name}
                    </Text>
                  </View>
                  <View
                    className="Fill2 drop-shadow-xl grow shrink basis-0 h-14 p-0.5 bg-white rounded-lg justify-center items-center flex"
                    hoverClass="View-hover scale-90"
                    hoverStayTime={400}
                    onClick={this.sumbmitAnswer.bind(this, item, answers[1].id)}
                  >
                    <Text className="Content w-40 text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                      {answers[1].name}
                    </Text>
                  </View>
                </View>
                <View className="Filldown self-stretch justify-center items-center gap-4 inline-flex">
                  <View
                    className="Fill3 drop-shadow-xl grow shrink basis-0 h-14 p-0.5 bg-white rounded-lg flex-col justify-center items-center inline-flex"
                    hoverClass="View-hover scale-90"
                    hoverStayTime={400}
                    onClick={this.sumbmitAnswer.bind(this, item, answers[2].id)}
                  >
                    <Text className="Content w-40 text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                      {answers[2].name}
                    </Text>
                  </View>
                  <View
                    className="Fill4 drop-shadow-xl grow shrink basis-0 h-14 p-0.5 bg-white rounded-lg flex-col justify-center items-center inline-flex"
                    hoverClass="View-hover scale-90"
                    hoverStayTime={400}
                    onClick={this.sumbmitAnswer.bind(this, item, answers[3].id)}
                  >
                    <Text className="Content w-40 text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                      {answers[3].name}
                    </Text>
                  </View>
                </View>
              </View>
            )}
            {item.questionType === 1 && (
              <View className="Fillpart self-stretch h-32 flex-col justify-center items-center gap-4 flex">
                <View className="Fillup self-stretch justify-center items-center gap-4 inline-flex">
                  <Animate type="ripple" loop>
                    <View
                      className="Fill1 drop-shadow-xl grow shrink basis-0 h-14 p-0.5 bg-white rounded-lg flex-col justify-center items-center inline-flex"
                      hoverClass="View-hover scale-90"
                      hoverStayTime={400}
                      onClick={this.sumbmitAnswer.bind(
                        this,
                        item,
                        answers[0].id
                      )}
                    >
                      <Text className="Content w-40 text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                        {answers[0].name}
                      </Text>
                    </View>
                  </Animate>
                  <Animate type="ripple" loop>
                    <View
                      className="Fill2 drop-shadow-xl grow shrink basis-0 h-14 p-0.5 bg-white rounded-lg justify-center items-center flex"
                      hoverClass="View-hover scale-90"
                      hoverStayTime={400}
                      onClick={this.sumbmitAnswer.bind(
                        this,
                        item,
                        answers[1].id
                      )}
                    >
                      <Text className="Content w-40 text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                        {answers[1].name}
                      </Text>
                    </View>
                  </Animate>
                </View>
                <View className="Filldown self-stretch justify-center items-center gap-4 inline-flex">
                  <Animate type="ripple" loop>
                    <View
                      className="Fill3 drop-shadow-xl grow shrink basis-0 h-14 p-0.5 bg-white rounded-lg flex-col justify-center items-center inline-flex"
                      hoverClass="View-hover scale-90"
                      hoverStayTime={400}
                      onClick={this.sumbmitAnswer.bind(
                        this,
                        item,
                        answers[2].id
                      )}
                    >
                      <Text className="Content w-40 text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                        {answers[2].name}
                      </Text>
                    </View>
                  </Animate>
                  <Animate type="ripple" loop>
                    <View
                      className="Fill4 drop-shadow-xl grow shrink basis-0 h-14 p-0.5 bg-white rounded-lg flex-col justify-center items-center inline-flex"
                      hoverClass="View-hover scale-90"
                      hoverStayTime={400}
                      onClick={this.sumbmitAnswer.bind(
                        this,
                        item,
                        answers[3].id
                      )}
                    >
                      <Text className="Content w-40 text-center text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                        {answers[3].name}
                      </Text>
                    </View>
                  </Animate>
                </View>
              </View>
            )}
            </>
            <View className="Buttonpart self-stretch justify-between items-center inline-flex">
              <View
                className={
                  !isShuffle
                    ? "Left opacity-50 drop-shadow-2xl grow shrink basis-0 h-6 justify-center items-center gap-2 flex"
                    : "Left drop-shadow-2xl grow shrink basis-0 h-6 justify-center items-center gap-2 flex"
                }
                hoverClass={!isShuffle ? "" : "Text-hover scale-90"}
                hoverStayTime={100}
                onClick={!isShuffle ? () => {} : this.getShuffle}
              >
                <View className="IconRandom drop-shadow-2xl h-4 flex-col justify-center items-center gap-2.5 inline-flex">
                  <IconFont name="icon-shuffle" size={16} color="white" />
                </View>
                <View className="Leftbutton drop-shadow-2xl text-center text-gray-50 text-base font-semibold font-['Inter'] leading-normal">
                  随机
                </View>
              </View>
              <View
                className="Right drop-shadow-2xl grow shrink basis-0 h-6 justify-center items-center gap-2 flex"
                hoverClass="Text-hover scale-90"
                hoverStayTime={100}
                onClick={this.toSkipQustion}
              >
                <View className="SkipForward drop-shadow-2xl py-0.5 flex-col justify-center items-center gap-2.5 inline-flex">
                  <IconFont name="icon-skip-forward" size={16} color="white" />
                </View>
                <View className="Rightbutton drop-shadow-2xl text-center text-gray-50 text-base font-semibold font-['Inter'] leading-normal">
                  跳过
                </View>
              </View>
            </View>
          </View>
          }
          {
            answers.length===0&&
            <View className="Bottom self-stretch flex-col justify-center items-center gap-12 flex">

<View className="Buttonpart self-stretch justify-between items-center inline-flex">
              <View
                className="Left opacity-50 drop-shadow-2xl grow shrink basis-0 h-6 justify-center items-center gap-2 flex"
              >
                <View className="IconRandom drop-shadow-2xl h-4 flex-col justify-center items-center gap-2.5 inline-flex">
                  <IconFont name="icon-shuffle" size={16} color="white" />
                </View>
                <View className="Leftbutton drop-shadow-2xl text-center text-gray-50 text-base font-semibold font-['Inter'] leading-normal">
                  随机
                </View>
              </View>
              <View
                className="Right drop-shadow-2xl grow shrink basis-0 h-6 justify-center items-center gap-2 flex"
                hoverClass="Text-hover scale-90"
                hoverStayTime={100}
                onClick={this.toSkipQustion}
              >
                <View className="SkipForward drop-shadow-2xl py-0.5 flex-col justify-center items-center gap-2.5 inline-flex">
                  <IconFont name="icon-skip-forward" size={16} color="white" />
                </View>
                <View className="Rightbutton drop-shadow-2xl text-center text-gray-50 text-base font-semibold font-['Inter'] leading-normal">
                  跳过
                </View>
              </View>
            </View>
            </View>
          }
        </View>
      </>
    );
  }
}
