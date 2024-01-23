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

const IconEmoji8: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M366.933333 505.6m-326.4 0a326.4 326.4 0 1 0 652.8 0 326.4 326.4 0 1 0-652.8 0Z"
        fill={getIconColor(color, 0, '#FFE500')}
      />
      <path
        d="M366.933333 179.2c-181.333333 0-326.4 147.2-326.4 326.4S187.733333 832 366.933333 832s326.4-147.2 326.4-326.4S548.266667 179.2 366.933333 179.2z m0 603.733333c-164.266667 0-298.666667-134.4-298.666666-298.666666s134.4-298.666667 298.666666-298.666667 298.666667 134.4 298.666667 298.666667c0 166.4-132.266667 298.666667-298.666667 298.666666z"
        fill={getIconColor(color, 1, '#EBCB00')}
      />
      <path
        d="M268.8 243.2a98.133333 23.466667 0 1 0 196.266667 0 98.133333 23.466667 0 1 0-196.266667 0Z"
        fill={getIconColor(color, 2, '#FFF48C')}
      />
      <path
        d="M104.533333 964.266667a262.4 32 0 1 0 524.8 0 262.4 32 0 1 0-524.8 0Z"
        fill={getIconColor(color, 3, '#45413C')}
      />
      <path
        d="M130.133333 586.666667a40.533333 23.466667 0 1 0 81.066667 0 40.533333 23.466667 0 1 0-81.066667 0Z"
        fill={getIconColor(color, 4, '#FFAA54')}
      />
      <path
        d="M522.666667 586.666667a40.533333 23.466667 0 1 0 81.066666 0 40.533333 23.466667 0 1 0-81.066666 0Z"
        fill={getIconColor(color, 5, '#FFAA54')}
      />
      <path
        d="M196.266667 497.066667m-17.066667 0a17.066667 17.066667 0 1 0 34.133333 0 17.066667 17.066667 0 1 0-34.133333 0Z"
        fill={getIconColor(color, 6, '#45413C')}
      />
      <path
        d="M539.733333 497.066667m-17.066666 0a17.066667 17.066667 0 1 0 34.133333 0 17.066667 17.066667 0 1 0-34.133333 0Z"
        fill={getIconColor(color, 7, '#45413C')}
      />
    </svg>
  );
};

IconEmoji8.defaultProps = {
  size: 96,
};

export default IconEmoji8;
