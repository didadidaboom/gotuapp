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

const IconEmoji3: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 454.4m-426.666667 0a426.666667 426.666667 0 1 0 853.333334 0 426.666667 426.666667 0 1 0-853.333334 0Z"
        fill={getIconColor(color, 0, '#FFE500')}
      />
      <path
        d="M512 27.733333c-234.666667 0-426.666667 192-426.666667 426.666667s192 426.666667 426.666667 426.666667 426.666667-192 426.666667-426.666667-192-426.666667-426.666667-426.666667z m0 789.333334c-215.466667 0-388.266667-174.933333-388.266667-388.266667C123.733333 213.333333 296.533333 38.4 512 38.4S902.4 213.333333 902.4 428.8c0 215.466667-174.933333 388.266667-390.4 388.266667z"
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
        d="M381.866667 625.066667c-6.4 0-10.666667 2.133333-14.933334 6.4-4.266667 6.4-4.266667 10.666667-4.266666 17.066666 10.666667 72.533333 74.666667 125.866667 149.333333 125.866667s138.666667-53.333333 149.333333-125.866667c0-6.4 0-10.666667-4.266666-17.066666-4.266667-4.266667-8.533333-6.4-14.933334-6.4H381.866667z"
        fill={getIconColor(color, 6, '#FFB0CA')}
      />
      <path
        d="M631.466667 718.933333c-29.866667-17.066667-72.533333-27.733333-119.466667-27.733333-46.933333 0-89.6 10.666667-119.466667 27.733333 27.733333 36.266667 70.4 57.6 119.466667 57.6s91.733333-23.466667 119.466667-57.6z"
        fill={getIconColor(color, 7, '#FF87AF')}
      />
    </svg>
  );
};

IconEmoji3.defaultProps = {
  size: 96,
};

export default IconEmoji3;
