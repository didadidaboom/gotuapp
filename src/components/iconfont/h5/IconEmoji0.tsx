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

const IconEmoji0: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 450.133333m-426.666667 0a426.666667 426.666667 0 1 0 853.333334 0 426.666667 426.666667 0 1 0-853.333334 0Z"
        fill={getIconColor(color, 0, '#FF6242')}
      />
      <path
        d="M512 23.466667c-234.666667 0-426.666667 192-426.666667 426.666666s192 426.666667 426.666667 426.666667 426.666667-192 426.666667-426.666667-192-426.666667-426.666667-426.666666z m0 789.333333c-215.466667 0-388.266667-174.933333-388.266667-388.266667C123.733333 206.933333 296.533333 34.133333 512 34.133333s388.266667 174.933333 388.266667 388.266667c0 215.466667-172.8 390.4-388.266667 390.4z"
        fill={getIconColor(color, 1, '#E04122')}
      />
      <path
        d="M384 108.8a128 32 0 1 0 256 0 128 32 0 1 0-256 0Z"
        fill={getIconColor(color, 2, '#FF866E')}
      />
      <path
        d="M330.666667 471.466667m-21.333334 0a21.333333 21.333333 0 1 0 42.666667 0 21.333333 21.333333 0 1 0-42.666667 0Z"
        fill={getIconColor(color, 3, '#45413C')}
      />
      <path
        d="M693.333333 471.466667m-21.333333 0a21.333333 21.333333 0 1 0 42.666667 0 21.333333 21.333333 0 1 0-42.666667 0Z"
        fill={getIconColor(color, 4, '#45413C')}
      />
      <path
        d="M714.666667 567.466667a53.333333 32 0 1 0 106.666666 0 53.333333 32 0 1 0-106.666666 0Z"
        fill={getIconColor(color, 5, '#E04122')}
      />
      <path
        d="M202.666667 567.466667a53.333333 32 0 1 0 106.666666 0 53.333333 32 0 1 0-106.666666 0Z"
        fill={getIconColor(color, 6, '#E04122')}
      />
      <path
        d="M170.666667 968.533333a341.333333 32 0 1 0 682.666666 0 341.333333 32 0 1 0-682.666666 0Z"
        fill={getIconColor(color, 7, '#45413C')}
      />
    </svg>
  );
};

IconEmoji0.defaultProps = {
  size: 96,
};

export default IconEmoji0;
