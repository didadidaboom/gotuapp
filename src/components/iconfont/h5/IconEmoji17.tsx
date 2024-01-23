/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, SVGAttributes, FunctionComponent } from 'react';
import { getIconColor } from './helper';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

const DEFAULT_STYLE: CSSProperties = {
  display: 'block',
};

const IconEmoji17: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 456.533333m-426.666667 0a426.666667 426.666667 0 1 0 853.333334 0 426.666667 426.666667 0 1 0-853.333334 0Z"
        fill={getIconColor(color, 0, '#FF6242')}
      />
      <path
        d="M512 29.866667c-234.666667 0-426.666667 192-426.666667 426.666666s192 426.666667 426.666667 426.666667 426.666667-192 426.666667-426.666667-192-426.666667-426.666667-426.666666z m0 789.333333c-215.466667 0-388.266667-174.933333-388.266667-388.266667C123.733333 213.333333 296.533333 40.533333 512 40.533333S902.4 213.333333 902.4 428.8 727.466667 819.2 512 819.2z"
        fill={getIconColor(color, 1, '#E04122')}
      />
      <path
        d="M384 115.2a128 32 0 1 0 256 0 128 32 0 1 0-256 0Z"
        fill={getIconColor(color, 2, '#FF866E')}
      />
      <path
        d="M192 962.133333a320 32 0 1 0 640 0 320 32 0 1 0-640 0Z"
        fill={getIconColor(color, 3, '#45413C')}
      />
      <path
        d="M736 520.533333a53.333333 32 0 1 0 106.666667 0 53.333333 32 0 1 0-106.666667 0Z"
        fill={getIconColor(color, 4, '#E04122')}
      />
      <path
        d="M181.333333 520.533333a53.333333 32 0 1 0 106.666667 0 53.333333 32 0 1 0-106.666667 0Z"
        fill={getIconColor(color, 5, '#E04122')}
      />
      <path
        d="M288 435.2m-21.333333 0a21.333333 21.333333 0 1 0 42.666666 0 21.333333 21.333333 0 1 0-42.666666 0Z"
        fill={getIconColor(color, 6, '#45413C')}
      />
      <path
        d="M736 435.2m-21.333333 0a21.333333 21.333333 0 1 0 42.666666 0 21.333333 21.333333 0 1 0-42.666666 0Z"
        fill={getIconColor(color, 7, '#45413C')}
      />
      <path
        d="M842.666667 819.2h-661.333334c-12.8 0-21.333333-8.533333-21.333333-21.333333v-202.666667c0-12.8 8.533333-21.333333 21.333333-21.333333h661.333334c12.8 0 21.333333 8.533333 21.333333 21.333333v202.666667c0 10.666667-8.533333 21.333333-21.333333 21.333333z"
        fill={getIconColor(color, 8, '#FFFFFF')}
      />
      <path
        d="M294.4 684.8l21.333333 23.466667 8.533334-8.533334c2.133333-4.266667 6.4-6.4 8.533333-6.4 2.133333-2.133333 4.266667-2.133333 8.533333-2.133333 2.133333 0 6.4 2.133333 8.533334 4.266667 2.133333 2.133333 4.266667 6.4 4.266666 8.533333 0 2.133333 0 6.4-2.133333 8.533333-2.133333 4.266667-4.266667 6.4-8.533333 10.666667l-4.266667 6.4 14.933333 14.933333c2.133333 2.133333 2.133333 4.266667 4.266667 4.266667s2.133333 2.133333 2.133333 6.4c0 4.266667-2.133333 6.4-4.266666 8.533333-10.666667 2.133333-14.933333 4.266667-17.066667 4.266667-4.266667 0-8.533333-2.133333-10.666667-4.266667l-14.933333-14.933333c-4.266667 4.266667-8.533333 6.4-12.8 10.666667-4.266667 2.133333-10.666667 4.266667-14.933333 6.4-6.4 2.133333-12.8 2.133333-17.066667 2.133333-8.533333 0-17.066667-2.133333-25.6-4.266667-8.533333-4.266667-12.8-8.533333-17.066667-14.933333s-6.4-14.933333-6.4-23.466667c0-8.533333 2.133333-17.066667 8.533334-25.6 6.4-8.533333 12.8-12.8 21.333333-19.2-4.266667-4.266667-8.533333-8.533333-10.666667-12.8s-4.266667-10.666667-4.266666-17.066666c0-6.4 2.133333-12.8 6.4-19.2s8.533333-8.533333 14.933333-10.666667c6.4-2.133333 12.8-4.266667 21.333333-4.266667 6.4 0 12.8 2.133333 19.2 4.266667 6.4 2.133333 12.8 6.4 17.066667 10.666667 4.266667 4.266667 6.4 10.666667 6.4 17.066666 0 8.533333-2.133333 14.933333-6.4 21.333334-6.4 6.4-12.8 10.666667-19.2 14.933333z m0 44.8l-29.866667-32c-6.4 4.266667-10.666667 6.4-12.8 10.666667-2.133333 4.266667-4.266667 8.533333-4.266666 14.933333 0 6.4 2.133333 10.666667 6.4 14.933333 4.266667 4.266667 8.533333 4.266667 14.933333 4.266667 4.266667 0 10.666667 0 12.8-2.133333s8.533333-6.4 12.8-10.666667z m-2.133333-76.8c0-4.266667-2.133333-6.4-4.266667-8.533333-2.133333-2.133333-6.4-2.133333-8.533333-2.133334-2.133333 0-6.4 0-8.533334 2.133334-2.133333 2.133333-4.266667 4.266667-4.266666 6.4 0 2.133333 0 6.4 2.133333 8.533333 2.133333 2.133333 4.266667 6.4 8.533333 10.666667 10.666667-6.4 14.933333-12.8 14.933334-17.066667zM405.333333 738.133333V704c-4.266667-2.133333-8.533333-2.133333-14.933333-4.266667-6.4-2.133333-10.666667-4.266667-14.933333-6.4-4.266667-2.133333-8.533333-6.4-10.666667-10.666666-2.133333-6.4-2.133333-12.8-2.133333-19.2 0-8.533333 2.133333-14.933333 6.4-23.466667s8.533333-12.8 14.933333-17.066667 14.933333-6.4 21.333333-6.4v-6.4-4.266666s0-2.133333 2.133334-2.133334 2.133333-2.133333 4.266666-2.133333 4.266667 0 4.266667 2.133333v12.8c8.533333 0 17.066667 2.133333 23.466667 6.4 8.533333 4.266667 10.666667 8.533333 10.666666 14.933334 0 4.266667-2.133333 8.533333-4.266666 10.666666-2.133333 2.133333-6.4 4.266667-10.666667 4.266667-2.133333 0-6.4 0-10.666667-2.133333s-8.533333-2.133333-10.666666-2.133334v27.733334c8.533333 2.133333 17.066667 6.4 23.466666 8.533333 6.4 2.133333 10.666667 6.4 17.066667 12.8 4.266667 6.4 6.4 14.933333 6.4 23.466667 0 6.4-2.133333 12.8-4.266667 19.2-2.133333 6.4-6.4 10.666667-10.666666 14.933333-4.266667 4.266667-8.533333 6.4-14.933334 10.666667-6.4 2.133333-10.666667 4.266667-17.066666 4.266666v10.666667c0 2.133333 0 2.133333-2.133334 4.266667s-2.133333 2.133333-4.266666 2.133333-4.266667 0-4.266667-2.133333V768c-6.4 0-12.8 0-19.2-2.133333s-12.8-4.266667-17.066667-6.4c-4.266667-4.266667-6.4-8.533333-6.4-12.8 0-4.266667 2.133333-8.533333 4.266667-10.666667 2.133333-2.133333 6.4-4.266667 10.666667-4.266667 2.133333 0 8.533333 2.133333 14.933333 4.266667 6.4 0 10.666667 2.133333 14.933333 2.133333z m0-68.266666v-23.466667c-2.133333 0-6.4 2.133333-8.533333 4.266667-2.133333 2.133333-2.133333 4.266667-2.133333 8.533333 0 2.133333 0 4.266667 2.133333 6.4 2.133333 2.133333 4.266667 4.266667 8.533333 4.266667z m10.666667 38.4v29.866666c4.266667 0 6.4-2.133333 10.666667-6.4s4.266667-6.4 4.266666-10.666666c0-6.4-4.266667-10.666667-14.933333-12.8zM501.333333 768c-4.266667 0-8.533333-2.133333-10.666666-4.266667-2.133333-2.133333-4.266667-6.4-4.266667-10.666666s2.133333-8.533333 4.266667-10.666667c2.133333-2.133333 6.4-4.266667 10.666666-4.266667s8.533333 2.133333 10.666667 4.266667c2.133333 2.133333 4.266667 6.4 4.266667 10.666667s-2.133333 8.533333-4.266667 10.666666-6.4 4.266667-10.666667 4.266667z m-14.933333-57.6v-78.933333c0-4.266667 2.133333-8.533333 4.266667-10.666667 2.133333-2.133333 6.4-4.266667 10.666666-4.266667s8.533333 2.133333 10.666667 4.266667c2.133333 2.133333 4.266667 6.4 4.266667 10.666667v78.933333c0 4.266667-2.133333 8.533333-4.266667 10.666667-2.133333 2.133333-6.4 4.266667-10.666667 4.266666s-8.533333-2.133333-10.666666-4.266666c-2.133333-4.266667-4.266667-6.4-4.266667-10.666667zM565.333333 704l4.266667-23.466667h-17.066667c-4.266667 0-6.4 0-6.4-2.133333s-2.133333-4.266667-2.133333-6.4c0-2.133333 0-4.266667 2.133333-6.4s4.266667-2.133333 6.4-2.133333h21.333334l4.266666-32c0-4.266667 2.133333-6.4 2.133334-8.533334 2.133333-2.133333 4.266667-2.133333 6.4-2.133333 2.133333 0 4.266667 0 6.4 2.133333 2.133333 2.133333 2.133333 4.266667 2.133333 6.4v4.266667l-4.266667 27.733333h19.2l4.266667-32c0-4.266667 2.133333-6.4 2.133333-8.533333 2.133333-2.133333 4.266667-2.133333 6.4-2.133333 2.133333 0 4.266667 0 6.4 2.133333s2.133333 4.266667 2.133334 6.4V661.333333h17.066666c4.266667 0 6.4 0 6.4 2.133334 2.133333 2.133333 2.133333 4.266667 2.133334 6.4 0 2.133333 0 4.266667-2.133334 6.4-2.133333 2.133333-4.266667 2.133333-6.4 2.133333h-21.333333l-2.133333 25.6h17.066666c4.266667 0 6.4 0 6.4 2.133333 2.133333 2.133333 2.133333 4.266667 2.133334 6.4s0 4.266667-2.133334 6.4c-2.133333 2.133333-4.266667 2.133333-6.4 2.133334h-21.333333l-4.266667 32c0 4.266667-2.133333 6.4-2.133333 8.533333-2.133333 2.133333-4.266667 2.133333-6.4 2.133333-2.133333 0-4.266667 0-6.4-2.133333-2.133333-2.133333-2.133333-4.266667-2.133333-6.4v-4.266667l4.266666-29.866666h-19.2l-4.266666 32c0 4.266667-2.133333 6.4-2.133334 8.533333s-4.266667 2.133333-6.4 2.133333c-2.133333 0-4.266667 0-6.4-2.133333-2.133333-2.133333-2.133333-4.266667-2.133333-6.4v-4.266667l4.266667-29.866666h-17.066667c-4.266667 0-6.4 0-6.4-2.133334-2.133333-2.133333-2.133333-4.266667-2.133333-6.4 0-2.133333 0-4.266667 2.133333-6.4s4.266667-2.133333 6.4-2.133333h14.933333z m23.466667-23.466667l-4.266667 23.466667h19.2l4.266667-23.466667h-19.2zM695.466667 682.666667c-8.533333 0-17.066667-4.266667-23.466667-10.666667-6.4-6.4-8.533333-14.933333-8.533333-23.466667 0-6.4 2.133333-10.666667 4.266666-17.066666 2.133333-4.266667 6.4-8.533333 10.666667-12.8 4.266667-2.133333 10.666667-4.266667 17.066667-4.266667 6.4 0 10.666667 2.133333 14.933333 4.266667 4.266667 2.133333 8.533333 6.4 10.666667 12.8 2.133333 4.266667 4.266667 10.666667 4.266666 17.066666 0 6.4-2.133333 10.666667-4.266666 17.066667-2.133333 4.266667-6.4 8.533333-10.666667 12.8s-8.533333 4.266667-14.933333 4.266667z m0-19.2c4.266667 0 6.4-2.133333 8.533333-4.266667s2.133333-4.266667 2.133333-8.533333 0-6.4-2.133333-8.533334c-2.133333-2.133333-4.266667-4.266667-8.533333-4.266666s-6.4 2.133333-8.533334 4.266666c-2.133333 2.133333-2.133333 4.266667-2.133333 8.533334s0 6.4 2.133333 8.533333 6.4 4.266667 8.533334 4.266667z m-6.4 87.466666l68.266666-128c2.133333-2.133333 2.133333-4.266667 4.266667-4.266666s2.133333-2.133333 6.4-2.133334c2.133333 0 4.266667 0 6.4 2.133334 2.133333 0 4.266667 2.133333 4.266667 4.266666 2.133333 2.133333 2.133333 4.266667 2.133333 6.4 0 2.133333 0 4.266667-2.133333 6.4l-68.266667 128c-4.266667 2.133333-6.4 2.133333-6.4 4.266667 0 0-2.133333 2.133333-4.266667 2.133333s-4.266667-2.133333-8.533333-4.266666c-2.133333-2.133333-4.266667-4.266667-4.266667-8.533334 0-2.133333 0-4.266667 2.133334-6.4z m78.933333 17.066667c-8.533333 0-17.066667-4.266667-23.466667-10.666667-6.4-6.4-8.533333-14.933333-8.533333-23.466666 0-6.4 2.133333-10.666667 4.266667-17.066667 2.133333-4.266667 6.4-8.533333 10.666666-12.8 4.266667-2.133333 10.666667-4.266667 17.066667-4.266667 6.4 0 10.666667 2.133333 14.933333 4.266667 4.266667 2.133333 8.533333 6.4 10.666667 12.8 2.133333 4.266667 4.266667 10.666667 4.266667 17.066667 0 6.4-2.133333 10.666667-4.266667 17.066666-2.133333 4.266667-6.4 8.533333-10.666667 12.8s-8.533333 4.266667-14.933333 4.266667z m0-21.333333c4.266667 0 6.4-2.133333 8.533333-4.266667 2.133333-2.133333 2.133333-4.266667 2.133334-8.533333s0-6.4-2.133334-8.533334-4.266667-4.266667-8.533333-4.266666-6.4 2.133333-8.533333 4.266666-2.133333 4.266667-2.133334 8.533334 0 6.4 2.133334 8.533333c2.133333 4.266667 4.266667 4.266667 8.533333 4.266667z"
        fill={getIconColor(color, 9, '#FF6242')}
      />
    </svg>
  );
};

IconEmoji17.defaultProps = {
  size: 96,
};

export default IconEmoji17;
