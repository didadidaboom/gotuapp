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

const IconEmoji33: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 454.4m-426.666667 0a426.666667 426.666667 0 1 0 853.333334 0 426.666667 426.666667 0 1 0-853.333334 0Z"
        fill={getIconColor(color, 0, '#FFE500')}
      />
      <path
        d="M512 27.733333c-234.666667 0-426.666667 192-426.666667 426.666667s192 426.666667 426.666667 426.666667 426.666667-192 426.666667-426.666667-189.866667-426.666667-426.666667-426.666667z m0 789.333334C296.533333 817.066667 123.733333 642.133333 123.733333 426.666667 123.733333 211.2 296.533333 38.4 512 38.4S902.4 211.2 902.4 426.666667 727.466667 817.066667 512 817.066667z"
        fill={getIconColor(color, 1, '#EBCB00')}
      />
      <path
        d="M384 113.066667a128 32 0 1 0 256 0 128 32 0 1 0-256 0Z"
        fill={getIconColor(color, 2, '#FFF48C')}
      />
      <path
        d="M170.666667 964.266667a341.333333 32 0 1 0 682.666666 0 341.333333 32 0 1 0-682.666666 0Z"
        fill={getIconColor(color, 3, '#45413C')}
      />
      <path
        d="M714.666667 561.066667a53.333333 32 0 1 0 106.666666 0 53.333333 32 0 1 0-106.666666 0Z"
        fill={getIconColor(color, 4, '#FFAA54')}
      />
      <path
        d="M202.666667 561.066667a53.333333 32 0 1 0 106.666666 0 53.333333 32 0 1 0-106.666666 0Z"
        fill={getIconColor(color, 5, '#FFAA54')}
      />
      <path
        d="M827.733333 932.266667c-83.2-19.2-4.266667-121.6-23.466666-177.066667 96 40.533333 106.666667 198.4 23.466666 177.066667z"
        fill={getIconColor(color, 6, '#00B8F0')}
      />
      <path
        d="M804.266667 757.333333c0 2.133333 0 2.133333 2.133333 4.266667 68.266667 53.333333 68.266667 174.933333-2.133333 160 6.4 6.4 14.933333 10.666667 25.6 12.8 81.066667 19.2 70.4-138.666667-25.6-177.066667z"
        fill={getIconColor(color, 7, '#4ACFFF')}
      />
      <path
        d="M727.466667 857.6c-59.733333 2.133333-25.6-81.066667-51.2-115.2 74.666667 6.4 110.933333 110.933333 51.2 115.2z"
        fill={getIconColor(color, 8, '#00B8F0')}
      />
      <path
        d="M678.4 742.4l2.133333 2.133333c55.466667 23.466667 81.066667 104.533333 29.866667 108.8 4.266667 2.133333 10.666667 4.266667 19.2 4.266667 57.6-4.266667 21.333333-108.8-51.2-115.2z"
        fill={getIconColor(color, 9, '#4ACFFF')}
      />
      <path
        d="M477.866667 571.733333c0-40.533333-42.666667-66.133333-78.933334-46.933333-102.4 53.333333-153.6 147.2-292.266666 226.133333-17.066667 10.666667-25.6 29.866667-19.2 49.066667 6.4 19.2 23.466667 32 44.8 29.866667 8.533333 0 17.066667 2.133333 21.333333 8.533333 6.4 6.4 8.533333 14.933333 6.4 21.333333 0 4.266667-2.133333 8.533333-2.133333 12.8-4.266667 17.066667 4.266667 34.133333 19.2 44.8s34.133333 8.533333 49.066666-2.133333c8.533333-6.4 21.333333-8.533333 32-2.133333 10.666667 6.4 17.066667 14.933333 14.933334 27.733333 0 17.066667 8.533333 32 23.466666 38.4 14.933333 6.4 32 4.266667 44.8-6.4 117.333333-102.4 138.666667-302.933333 136.533334-401.066667z"
        fill={getIconColor(color, 10, '#E8F4FA')}
      />
      <path
        d="M98.133333 819.2c2.133333-10.666667 10.666667-19.2 19.2-23.466667 138.666667-78.933333 189.866667-172.8 292.266667-226.133333 25.6-12.8 51.2-4.266667 66.133333 14.933333v-12.8c0-40.533333-42.666667-66.133333-78.933333-46.933333-102.4 53.333333-153.6 147.2-292.266667 226.133333-17.066667 10.666667-25.6 29.866667-19.2 49.066667 4.266667 8.533333 8.533333 14.933333 12.8 19.2z"
        fill={getIconColor(color, 11, '#FFFFFF')}
      />
    </svg>
  );
};

IconEmoji33.defaultProps = {
  size: 96,
};

export default IconEmoji33;
