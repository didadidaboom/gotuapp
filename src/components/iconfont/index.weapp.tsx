/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';


export type IconNames = 'icon-robot' | 'icon--gift-bag' | 'icon-Santa-bag' | 'icon-Money_Bag' | 'icon-Santas_bag' | 'icon-credit' | 'icon-circle-dot' | 'icon-plus' | 'icon-minus' | 'icon-tmp-leave' | 'icon-waiting7days' | 'icon-Cartoon-Add' | 'icon-Cartoon-Share' | 'icon-cartoon-mine' | 'icon-Cartoon-Phone' | 'icon-avatar-10' | 'icon-avatar-9' | 'icon-avatar-8' | 'icon-avatar-7' | 'icon-avatar-6' | 'icon-avatar-5' | 'icon-avatar-4' | 'icon-avatar-3' | 'icon-avatar-2' | 'icon-avatar-1' | 'icon-icon-user-img' | 'icon-touxiang' | 'icon-setting' | 'icon-edit' | 'icon-focused' | 'icon-view' | 'icon-view-copy' | 'icon-arrow-right' | 'icon-hot1' | 'icon-hot9' | 'icon-hot3' | 'icon-hot2' | 'icon-hot4' | 'icon-school' | 'icon-grade' | 'icon-hot6' | 'icon-hot8' | 'icon-hot5' | 'icon-hot7' | 'icon-gift' | 'icon-credit-1' | 'icon-jifen' | 'icon-wechat-inactive' | 'icon-iPhone-inactive' | 'icon-facial' | 'icon-wechat' | 'icon-iPhone' | 'icon-facial-inactive' | 'icon-reduce-notify' | 'icon-systemmsg' | 'icon-faxian' | 'icon-gonggao' | 'icon-Notification' | 'icon-faxian-36' | 'icon-mendiandongtai' | 'icon-gender-man' | 'icon-gender-woman' | 'icon-gender-homo1' | 'icon-gender-homo' | 'icon-nvshi' | 'icon-nanshi' | 'icon-wode-gerenxinxi' | 'icon-gender-girl' | 'icon-gender-boy' | 'icon-nanshizhuanqu' | 'icon-nvshizhuanqu' | 'icon-Profile' | 'icon-Inbox' | 'icon-bell' | 'icon-love1' | 'icon-love2' | 'icon-love3' | 'icon-heartMatch' | 'icon-jinggao' | 'icon-EMOJI-39' | 'icon-EMOJI-30' | 'icon-EMOJI-31' | 'icon-EMOJI-32' | 'icon-EMOJI-33' | 'icon-EMOJI-34' | 'icon-EMOJI-35' | 'icon-EMOJI-36' | 'icon-EMOJI-37' | 'icon-EMOJI-38' | 'icon-EMOJI-29' | 'icon-skip-forward' | 'icon-shuffle' | 'icon-EMOJI-0' | 'icon-EMOJI-27' | 'icon-EMOJI-3' | 'icon-EMOJI-4' | 'icon-EMOJI-5' | 'icon-EMOJI-6' | 'icon-EMOJI-7' | 'icon-EMOJI-8' | 'icon-EMOJI-9' | 'icon-EMOJI-10' | 'icon-EMOJI-11' | 'icon-EMOJI-12' | 'icon-EMOJI-13' | 'icon-EMOJI-14' | 'icon-EMOJI-15' | 'icon-EMOJI-16' | 'icon-EMOJI-17' | 'icon-EMOJI-18' | 'icon-EMOJI-19' | 'icon-EMOJI-20' | 'icon-EMOJI-21' | 'icon-EMOJI-22' | 'icon-EMOJI-23' | 'icon-EMOJI-24' | 'icon-EMOJI-25' | 'icon-EMOJI-26' | 'icon-EMOJI-2' | 'icon-EMOJI-1' | 'icon-EMOJI-28';

interface Props {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

const IconFont: FunctionComponent<Props> = (props) => {
  const { name, size, color, style } = props;

  // @ts-ignore
  return <iconfont name={name} size={size} color={color} style={style} />;
};

IconFont.defaultProps = {
  size: 96,
};

export default IconFont;
