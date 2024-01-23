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

const IconEmoji9: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 445.866667m-426.666667 0a426.666667 426.666667 0 1 0 853.333334 0 426.666667 426.666667 0 1 0-853.333334 0Z"
        fill={getIconColor(color, 0, '#FFE500')}
      />
      <path
        d="M512 19.2c-234.666667 0-426.666667 192-426.666667 426.666667s192 426.666667 426.666667 426.666666 426.666667-192 426.666667-426.666666-192-426.666667-426.666667-426.666667z m0 789.333333c-215.466667 0-388.266667-174.933333-388.266667-390.4 0-213.333333 172.8-388.266667 388.266667-388.266666s390.4 174.933333 390.4 388.266666c0 215.466667-174.933333 390.4-390.4 390.4z"
        fill={getIconColor(color, 1, '#EBCB00')}
      />
      <path
        d="M384 104.533333a128 32 0 1 0 256 0 128 32 0 1 0-256 0Z"
        fill={getIconColor(color, 2, '#FFF48C')}
      />
      <path
        d="M170.666667 966.4a341.333333 32 0 1 0 682.666666 0 341.333333 32 0 1 0-682.666666 0Z"
        fill={getIconColor(color, 3, '#45413C')}
      />
      <path
        d="M298.666667 445.866667m-21.333334 0a21.333333 21.333333 0 1 0 42.666667 0 21.333333 21.333333 0 1 0-42.666667 0Z"
        fill={getIconColor(color, 4, '#45413C')}
      />
      <path
        d="M714.666667 445.866667m-21.333334 0a21.333333 21.333333 0 1 0 42.666667 0 21.333333 21.333333 0 1 0-42.666667 0Z"
        fill={getIconColor(color, 5, '#45413C')}
      />
      <path
        d="M714.666667 552.533333a53.333333 32 0 1 0 106.666666 0 53.333333 32 0 1 0-106.666666 0Z"
        fill={getIconColor(color, 6, '#FFAA54')}
      />
      <path
        d="M202.666667 552.533333a53.333333 32 0 1 0 106.666666 0 53.333333 32 0 1 0-106.666666 0Z"
        fill={getIconColor(color, 7, '#FFAA54')}
      />
      <path
        d="M642.133333 755.2c6.4 0 10.666667-2.133333 14.933334-6.4 4.266667-4.266667 6.4-10.666667 4.266666-17.066667-10.666667-72.533333-74.666667-125.866667-149.333333-125.866666s-138.666667 53.333333-149.333333 125.866666c0 6.4 0 10.666667 4.266666 17.066667 4.266667 4.266667 8.533333 6.4 14.933334 6.4h260.266666z"
        fill={getIconColor(color, 8, '#FFB0CA')}
      />
      <path
        d="M396.8 659.2h232.533333c-27.733333-32-68.266667-53.333333-115.2-53.333333s-89.6 21.333333-117.333333 53.333333z"
        fill={getIconColor(color, 9, '#FFFFFF')}
      />
    </svg>
  );
};

IconEmoji9.defaultProps = {
  size: 96,
};

export default IconEmoji9;
