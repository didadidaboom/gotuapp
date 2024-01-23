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

const IconEmoji12: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 454.4m-426.666667 0a426.666667 426.666667 0 1 0 853.333334 0 426.666667 426.666667 0 1 0-853.333334 0Z"
        fill={getIconColor(color, 0, '#FFE500')}
      />
      <path
        d="M512 27.733333c-234.666667 0-426.666667 192-426.666667 426.666667s192 426.666667 426.666667 426.666667 426.666667-192 426.666667-426.666667-192-426.666667-426.666667-426.666667z m0 789.333334C296.533333 817.066667 123.733333 642.133333 123.733333 426.666667 123.733333 211.2 296.533333 38.4 512 38.4S902.4 211.2 902.4 426.666667 727.466667 817.066667 512 817.066667z"
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
        d="M678.4 763.733333c8.533333 0 14.933333-4.266667 19.2-8.533333 4.266667-6.4 6.4-12.8 6.4-21.333333-14.933333-93.866667-93.866667-162.133333-192-162.133334-96 0-177.066667 68.266667-192 162.133334-2.133333 6.4 0 14.933333 6.4 21.333333 4.266667 6.4 12.8 8.533333 19.2 8.533333 110.933333-29.866667 221.866667-29.866667 332.8 0z"
        fill={getIconColor(color, 6, '#FFB0CA')}
      />
      <path
        d="M512 571.733333c-53.333333 0-100.266667 19.2-134.4 53.333334h268.8c-34.133333-34.133333-81.066667-53.333333-134.4-53.333334z"
        fill={getIconColor(color, 7, '#FFFFFF')}
      />
    </svg>
  );
};

IconEmoji12.defaultProps = {
  size: 96,
};

export default IconEmoji12;
