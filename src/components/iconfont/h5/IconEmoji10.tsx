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

const IconEmoji10: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M407.466667 435.2m-379.733334 0a379.733333 379.733333 0 1 0 759.466667 0 379.733333 379.733333 0 1 0-759.466667 0Z"
        fill={getIconColor(color, 0, '#FFE500')}
      />
      <path
        d="M407.466667 55.466667c-209.066667 0-379.733333 170.666667-379.733334 379.733333s170.666667 379.733333 379.733334 379.733333 379.733333-170.666667 379.733333-379.733333-170.666667-379.733333-379.733333-379.733333z m0 701.866666c-192 0-345.6-155.733333-345.6-345.6 0-192 155.733333-345.6 345.6-345.6s345.6 155.733333 345.6 345.6c0 189.866667-155.733333 345.6-345.6 345.6z"
        fill={getIconColor(color, 1, '#EBCB00')}
      />
      <path
        d="M294.4 130.133333a113.066667 27.733333 0 1 0 226.133333 0 113.066667 27.733333 0 1 0-226.133333 0Z"
        fill={getIconColor(color, 2, '#FFF48C')}
      />
      <path
        d="M245.333333 454.4m-19.2 0a19.2 19.2 0 1 0 38.4 0 19.2 19.2 0 1 0-38.4 0Z"
        fill={getIconColor(color, 3, '#45413C')}
      />
      <path
        d="M567.466667 454.4m-19.2 0a19.2 19.2 0 1 0 38.4 0 19.2 19.2 0 1 0-38.4 0Z"
        fill={getIconColor(color, 4, '#45413C')}
      />
      <path
        d="M586.666667 537.6a46.933333 27.733333 0 1 0 93.866666 0 46.933333 27.733333 0 1 0-93.866666 0Z"
        fill={getIconColor(color, 5, '#FFAA54')}
      />
      <path
        d="M132.266667 537.6a46.933333 27.733333 0 1 0 93.866666 0 46.933333 27.733333 0 1 0-93.866666 0Z"
        fill={getIconColor(color, 6, '#FFAA54')}
      />
      <path
        d="M104.533333 936.533333a302.933333 32 0 1 0 605.866667 0 302.933333 32 0 1 0-605.866667 0Z"
        fill={getIconColor(color, 7, '#45413C')}
      />
      <path
        d="M19.2 283.733333c-2.133333 6.4-2.133333 12.8 2.133333 17.066667 4.266667 6.4 8.533333 8.533333 14.933334 8.533333h727.466666c-12.8-36.266667-34.133333-74.666667-57.6-104.533333H76.8c-6.4 2.133333-12.8 4.266667-14.933333 8.533333-17.066667 21.333333-32 46.933333-42.666667 70.4z"
        fill={getIconColor(color, 8, '#F0F0F0')}
      />
      <path
        d="M731.733333 245.333333c-8.533333-14.933333-17.066667-27.733333-25.6-38.4H74.666667c-4.266667 0-10.666667 2.133333-14.933334 6.4-6.4 8.533333-12.8 19.2-19.2 29.866667h691.2z"
        fill={getIconColor(color, 9, '#FFFFFF')}
      />
      <path
        d="M729.6 264.533333s102.4 119.466667 256 106.666667c12.8 0 23.466667 12.8 19.2 25.6-10.666667 32-29.866667 70.4-40.533333 89.6-4.266667 8.533333-14.933333 12.8-23.466667 8.533333-51.2-21.333333-211.2-96-211.2-230.4z"
        fill={getIconColor(color, 10, '#FFFFFF')}
      />
      <path
        d="M727.466667 234.666667s36.266667 187.733333 151.466666 305.066666c8.533333 8.533333 6.4 25.6-6.4 29.866667-49.066667 19.2-100.266667 23.466667-125.866666 25.6-10.666667 0-19.2-6.4-19.2-17.066667-10.666667-59.733333-38.4-275.2 0-343.466666z"
        fill={getIconColor(color, 11, '#FFFFFF')}
      />
      <path
        d="M795.733333 258.133333c0 34.133333-27.733333 61.866667-61.866666 61.866667H725.333333c-34.133333 0-61.866667-27.733333-61.866666-61.866667s27.733333-61.866667 61.866666-61.866666h8.533334c34.133333 2.133333 61.866667 27.733333 61.866666 61.866666z"
        fill={getIconColor(color, 12, '#F0F0F0')}
      />
      <path
        d="M723.2 234.666667h8.533333c27.733333 0 51.2 17.066667 57.6 42.666666 2.133333-6.4 4.266667-12.8 4.266667-19.2 0-34.133333-27.733333-61.866667-61.866667-61.866666h-8.533333c-34.133333 0-61.866667 27.733333-61.866667 61.866666 0 6.4 2.133333 12.8 4.266667 19.2 8.533333-23.466667 32-42.666667 57.6-42.666666z"
        fill={getIconColor(color, 13, '#FFFFFF')}
      />
    </svg>
  );
};

IconEmoji10.defaultProps = {
  size: 96,
};

export default IconEmoji10;