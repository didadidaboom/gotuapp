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

const IconEmoji31: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 458.666667m-426.666667 0a426.666667 426.666667 0 1 0 853.333334 0 426.666667 426.666667 0 1 0-853.333334 0Z"
        fill={getIconColor(color, 0, '#FFE500')}
      />
      <path
        d="M512 32c-234.666667 0-426.666667 192-426.666667 426.666667s192 426.666667 426.666667 426.666666 426.666667-192 426.666667-426.666666-192-426.666667-426.666667-426.666667z m0 789.333333c-215.466667 0-388.266667-174.933333-388.266667-388.266666C123.733333 217.6 296.533333 42.666667 512 42.666667s388.266667 174.933333 388.266667 388.266666c0 217.6-172.8 390.4-388.266667 390.4z"
        fill={getIconColor(color, 1, '#EBCB00')}
      />
      <path
        d="M384 117.333333a128 32 0 1 0 256 0 128 32 0 1 0-256 0Z"
        fill={getIconColor(color, 2, '#FFF48C')}
      />
      <path
        d="M170.666667 960a341.333333 32 0 1 0 682.666666 0 341.333333 32 0 1 0-682.666666 0Z"
        fill={getIconColor(color, 3, '#45413C')}
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
        d="M288 437.333333m-21.333333 0a21.333333 21.333333 0 1 0 42.666666 0 21.333333 21.333333 0 1 0-42.666666 0Z"
        fill={getIconColor(color, 6, '#45413C')}
      />
      <path
        d="M736 437.333333m-21.333333 0a21.333333 21.333333 0 1 0 42.666666 0 21.333333 21.333333 0 1 0-42.666666 0Z"
        fill={getIconColor(color, 7, '#45413C')}
      />
      <path
        d="M512 672m-160 0a160 160 0 1 0 320 0 160 160 0 1 0-320 0Z"
        fill={getIconColor(color, 8, '#FFB0CA')}
      />
      <path
        d="M512 682.666667c-57.6 0-106.666667 29.866667-134.4 74.666666C405.333333 802.133333 454.4 832 512 832s106.666667-29.866667 134.4-74.666667C618.666667 712.533333 569.6 682.666667 512 682.666667z"
        fill={getIconColor(color, 9, '#FF866E')}
      />
    </svg>
  );
};

IconEmoji31.defaultProps = {
  size: 96,
};

export default IconEmoji31;
