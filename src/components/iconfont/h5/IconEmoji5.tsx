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

const IconEmoji5: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 454.4m-426.666667 0a426.666667 426.666667 0 1 0 853.333334 0 426.666667 426.666667 0 1 0-853.333334 0Z"
        fill={getIconColor(color, 0, '#FFE500')}
      />
      <path
        d="M512 27.733333c-234.666667 0-426.666667 192-426.666667 426.666667s192 426.666667 426.666667 426.666667 426.666667-192 426.666667-426.666667-192-426.666667-426.666667-426.666667z m0 789.333334C296.533333 817.066667 123.733333 642.133333 123.733333 426.666667 123.733333 213.333333 296.533333 38.4 512 38.4S900.266667 213.333333 900.266667 426.666667c0 215.466667-172.8 390.4-388.266667 390.4z"
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
        d="M337.066667 467.2c0 12.8-10.666667 23.466667-23.466667 23.466667-12.8 0-23.466667-10.666667-23.466667-23.466667 0-10.666667-61.866667-23.466667-61.866666-23.466667h83.2c14.933333 0 25.6 10.666667 25.6 23.466667zM785.066667 467.2c0 12.8-10.666667 23.466667-23.466667 23.466667-12.8 0-23.466667-10.666667-23.466667-23.466667 0-10.666667-61.866667-23.466667-61.866666-23.466667h83.2c14.933333 0 25.6 10.666667 25.6 23.466667z"
        fill={getIconColor(color, 6, '#45413C')}
      />
    </svg>
  );
};

IconEmoji5.defaultProps = {
  size: 96,
};

export default IconEmoji5;
