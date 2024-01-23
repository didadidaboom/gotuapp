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

const IconEmoji35: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 458.666667m-426.666667 0a426.666667 426.666667 0 1 0 853.333334 0 426.666667 426.666667 0 1 0-853.333334 0Z"
        fill={getIconColor(color, 0, '#FFE500')}
      />
      <path
        d="M512 32c-234.666667 0-426.666667 192-426.666667 426.666667s192 426.666667 426.666667 426.666666 426.666667-192 426.666667-426.666666-192-426.666667-426.666667-426.666667z m0 789.333333c-215.466667 0-388.266667-174.933333-388.266667-388.266666C123.733333 217.6 296.533333 42.666667 512 42.666667s388.266667 174.933333 388.266667 388.266666c2.133333 217.6-172.8 390.4-388.266667 390.4z"
        fill={getIconColor(color, 1, '#EBCB00')}
      />
      <path
        d="M384 117.333333a128 32 0 1 0 256 0 128 32 0 1 0-256 0Z"
        fill={getIconColor(color, 2, '#FFF48C')}
      />
      <path
        d="M170.666667 960a341.333333 32 0 1 0 682.666666 0 341.333333 32 0 1 0-682.666666 0Z"
        fill={getIconColor(color, 3, '#45413C')}
        opacity=".15"
      />
      <path
        d="M714.666667 565.333333a53.333333 32 0 1 0 106.666666 0 53.333333 32 0 1 0-106.666666 0Z"
        fill={getIconColor(color, 4, '#FFAA54')}
      />
      <path
        d="M202.666667 565.333333a53.333333 32 0 1 0 106.666666 0 53.333333 32 0 1 0-106.666666 0Z"
        fill={getIconColor(color, 5, '#FFAA54')}
      />
      <path
        d="M512 780.8c196.266667 0 221.866667-81.066667 211.2-149.333333-6.4-40.533333-53.333333-66.133333-98.133333-51.2-32 10.666667-72.533333 17.066667-113.066667 17.066666s-81.066667-6.4-113.066667-17.066666c-42.666667-14.933333-89.6 10.666667-98.133333 51.2-10.666667 68.266667 14.933333 149.333333 211.2 149.333333z"
        fill={getIconColor(color, 6, '#FFFFFF')}
      />
      <path
        d="M288 437.333333m-21.333333 0a21.333333 21.333333 0 1 0 42.666666 0 21.333333 21.333333 0 1 0-42.666666 0Z"
        fill={getIconColor(color, 7, '#45413C')}
      />
      <path
        d="M736 437.333333m-21.333333 0a21.333333 21.333333 0 1 0 42.666666 0 21.333333 21.333333 0 1 0-42.666666 0Z"
        fill={getIconColor(color, 8, '#45413C')}
      />
    </svg>
  );
};

IconEmoji35.defaultProps = {
  size: 96,
};

export default IconEmoji35;
