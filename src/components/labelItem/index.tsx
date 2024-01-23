import { Component } from "react";
import { View } from "@tarojs/components";
import { observer } from "mobx-react";

import Lable from "./singleItem/label";
import LableClose from "./singleItem/labelClose";
import "./index.scss";


interface LableItemProps {
  labels: any;
}


@observer
export default class LableItem extends Component<LableItemProps> {
  selectedClick = (item) => {
    // console.log("handleclick, selected index = ", item, item.id)
    // const { onClick,selected} = this.props;
    const { selected } = this.props;
    selected[item.id] = 1;
    item.selected = 1;
    // onClick && onClick(item);
  };

  removeClick = (item) => {
    // console.log("handleclick, selected index = ", item, item.id)
    // const { rmClick,selected} = this.props;
    const { selected } = this.props;
    delete selected[item.id];
    item.selected = null;
    // rmClick && rmClick(item);
  };

  render() {
    const { labels } = this.props;

    return (
      <>
        {!!labels && (
          <View className="Middle w-full h-full rounded-lg justify-center items-center inline-flex">
            <View className="Labelpart justify-center items-center gap-4 flex flex-row flex-wrap">
              {labels.map((item, index) => {
                return item.selected ? (
                  <LableClose
                    // onClick={this.removeClick.bind(this, item)}
                    label={item}
                    index={index}
                  />
                ) : (
                  <Lable
                    // onClick={this.selectedClick.bind(this, item)}
                    label={item}
                    index={index}
                  />
                );
              })}
            </View>
          </View>
        )}
      </>
    );
  }
}
