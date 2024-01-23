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

const IconEmoji7: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 454.4m-426.666667 0a426.666667 426.666667 0 1 0 853.333334 0 426.666667 426.666667 0 1 0-853.333334 0Z"
        fill={getIconColor(color, 0, '#FFE500')}
      />
      <path
        d="M512 27.733333c-234.666667 0-426.666667 192-426.666667 426.666667s192 426.666667 426.666667 426.666667 426.666667-192 426.666667-426.666667-192-426.666667-426.666667-426.666667z m0 789.333334c-215.466667 0-388.266667-174.933333-388.266667-388.266667C123.733333 213.333333 296.533333 38.4 512 38.4S902.4 213.333333 902.4 428.8c0 213.333333-174.933333 388.266667-390.4 388.266667z"
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
        d="M512 667.733333m-160 0a160 160 0 1 0 320 0 160 160 0 1 0-320 0Z"
        fill={getIconColor(color, 6, '#FFB0CA')}
      />
      <path
        d="M512 678.4c-57.6 0-106.666667 29.866667-134.4 74.666667 27.733333 44.8 78.933333 74.666667 134.4 74.666666s106.666667-29.866667 134.4-74.666666c-27.733333-44.8-76.8-74.666667-134.4-74.666667z"
        fill={getIconColor(color, 7, '#FF866E')}
      />
    </svg>
  );
};

IconEmoji7.defaultProps = {
  size: 96,
};

export default IconEmoji7;
