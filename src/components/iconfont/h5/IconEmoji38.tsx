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

const IconEmoji38: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M170.666667 957.866667a341.333333 32 0 1 0 682.666666 0 341.333333 32 0 1 0-682.666666 0Z"
        fill={getIconColor(color, 0, '#45413C')}
        opacity=".15"
      />
      <path
        d="M512 471.466667m-426.666667 0a426.666667 426.666667 0 1 0 853.333334 0 426.666667 426.666667 0 1 0-853.333334 0Z"
        fill={getIconColor(color, 1, '#FFE500')}
      />
      <path
        d="M512 34.133333c-234.666667 0-426.666667 192-426.666667 426.666667s192 426.666667 426.666667 426.666667 426.666667-192 426.666667-426.666667-192-426.666667-426.666667-426.666667z m0 789.333334c-215.466667 0-388.266667-174.933333-388.266667-390.4-2.133333-213.333333 172.8-388.266667 388.266667-388.266667s388.266667 174.933333 388.266667 388.266667c0 215.466667-172.8 390.4-388.266667 390.4z"
        fill={getIconColor(color, 2, '#EBCB00')}
      />
      <path
        d="M384 119.466667a128 32 0 1 0 256 0 128 32 0 1 0-256 0Z"
        fill={getIconColor(color, 3, '#FFF48C')}
      />
      <path
        d="M714.666667 567.466667a53.333333 32 0 1 0 106.666666 0 53.333333 32 0 1 0-106.666666 0Z"
        fill={getIconColor(color, 4, '#FFAA54')}
      />
      <path
        d="M202.666667 567.466667a53.333333 32 0 1 0 106.666666 0 53.333333 32 0 1 0-106.666666 0Z"
        fill={getIconColor(color, 5, '#FFAA54')}
      />
      <path
        d="M288 439.466667m-21.333333 0a21.333333 21.333333 0 1 0 42.666666 0 21.333333 21.333333 0 1 0-42.666666 0Z"
        fill={getIconColor(color, 6, '#45413C')}
      />
      <path
        d="M736 439.466667m-21.333333 0a21.333333 21.333333 0 1 0 42.666666 0 21.333333 21.333333 0 1 0-42.666666 0Z"
        fill={getIconColor(color, 7, '#45413C')}
      />
      <path
        d="M642.133333 748.8c6.4 0 10.666667-2.133333 14.933334-6.4 4.266667-4.266667 4.266667-10.666667 4.266666-17.066667-10.666667-59.733333-74.666667-93.866667-149.333333-93.866666s-136.533333 32-149.333333 93.866666c-2.133333 6.4 0 12.8 4.266666 17.066667 4.266667 4.266667 8.533333 6.4 14.933334 6.4C469.333333 725.333333 554.666667 725.333333 642.133333 748.8z"
        fill={getIconColor(color, 8, '#FF866E')}
      />
      <path
        d="M646.4 748.8l-36.266667 145.066667c-4.266667 21.333333-2.133333 44.8 8.533334 61.866666 14.933333 23.466667 38.4 23.466667 53.333333 0 10.666667-17.066667 14.933333-40.533333 8.533333-61.866666l-34.133333-145.066667z"
        fill={getIconColor(color, 9, '#E5FEFF')}
      />
    </svg>
  );
};

IconEmoji38.defaultProps = {
  size: 96,
};

export default IconEmoji38;
