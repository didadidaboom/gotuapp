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

const IconEmoji22: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 531.2m-405.333333 0a405.333333 405.333333 0 1 0 810.666666 0 405.333333 405.333333 0 1 0-810.666666 0Z"
        fill={getIconColor(color, 0, '#FFE500')}
      />
      <path
        d="M512 125.866667c-224 0-405.333333 181.333333-405.333333 405.333333s181.333333 405.333333 405.333333 405.333333 405.333333-181.333333 405.333333-405.333333-181.333333-405.333333-405.333333-405.333333zM512 874.666667c-204.8 0-369.066667-164.266667-369.066667-369.066667 0-204.8 164.266667-369.066667 369.066667-369.066667s369.066667 164.266667 369.066667 369.066667C881.066667 708.266667 716.8 874.666667 512 874.666667z"
        fill={getIconColor(color, 1, '#EBCB00')}
      />
      <path
        d="M390.4 206.933333a121.6 29.866667 0 1 0 243.2 0 121.6 29.866667 0 1 0-243.2 0Z"
        fill={getIconColor(color, 2, '#FFF48C')}
      />
      <path
        d="M187.733333 979.2a324.266667 32 0 1 0 648.533334 0 324.266667 32 0 1 0-648.533334 0Z"
        fill={getIconColor(color, 3, '#45413C')}
        opacity=".15"
      />
      <path
        d="M330.666667 499.2m-70.4 0a70.4 70.4 0 1 0 140.8 0 70.4 70.4 0 1 0-140.8 0Z"
        fill={getIconColor(color, 4, '#FFFFFF')}
      />
      <path
        d="M704 631.466667a51.2 29.866667 0 1 0 102.4 0 51.2 29.866667 0 1 0-102.4 0Z"
        fill={getIconColor(color, 5, '#FFAA54')}
      />
      <path
        d="M219.733333 631.466667a51.2 29.866667 0 1 0 102.4 0 51.2 29.866667 0 1 0-102.4 0Z"
        fill={getIconColor(color, 6, '#FFAA54')}
      />
      <path
        d="M695.466667 499.2m-70.4 0a70.4 70.4 0 1 0 140.8 0 70.4 70.4 0 1 0-140.8 0Z"
        fill={getIconColor(color, 7, '#FFFFFF')}
      />
      <path
        d="M512 580.266667c-132.266667 0-236.8 108.8-221.866667 185.6 10.666667 55.466667 57.6 66.133333 100.266667 49.066666 38.4-17.066667 81.066667-25.6 123.733333-25.6s83.2 8.533333 123.733334 25.6c40.533333 19.2 89.6 6.4 100.266666-49.066666 10.666667-76.8-93.866667-185.6-226.133333-185.6z"
        fill={getIconColor(color, 8, '#FFB0CA')}
      />
      <path
        d="M512 712.533333c-81.066667 0-153.6 38.4-198.4 98.133334 19.2 17.066667 49.066667 17.066667 76.8 6.4 38.4-17.066667 81.066667-25.6 123.733333-25.6s83.2 8.533333 123.733334 25.6c25.6 12.8 55.466667 10.666667 76.8-6.4-49.066667-59.733333-121.6-98.133333-202.666667-98.133334z"
        fill={getIconColor(color, 9, '#FF87AF')}
      />
    </svg>
  );
};

IconEmoji22.defaultProps = {
  size: 96,
};

export default IconEmoji22;
