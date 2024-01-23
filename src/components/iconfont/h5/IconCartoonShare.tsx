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

const IconCartoonShare: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 192c212.064 0 320 107.936 320 320s-107.936 320-320 320S192 724.064 192 512 299.936 192 512 192z m96 128h-96.768a32 32 0 0 0 0 64h66.56c-96.512 36.576-174.016 111.776-215.36 229.376l-1.12 3.456a31.104 31.104 0 0 0 22.72 39.424 37.504 37.504 0 0 0 43.136-22.272c9.952-24.224 16.576-39.072 19.84-44.544 40.16-67.296 86.592-124.16 192.96-159.04L640 515.296a32 32 0 0 0 64 0V416l-0.16-5.632A96 96 0 0 0 608 320z"
        fill={getIconColor(color, 0, '#FA6400')}
      />
      <path
        d="M512 32C191.936 32 32 191.936 32 512c0 320.064 159.936 480 480 480 320.064 0 480-159.936 480-480C992 191.936 832.064 32 512 32z m0 64c284.736 0 416 131.264 416 416s-131.264 416-416 416S96 796.736 96 512 227.264 96 512 96z"
        fill={getIconColor(color, 1, '#E02020')}
        fillOpacity=".148"
      />
    </svg>
  );
};

IconCartoonShare.defaultProps = {
  size: 96,
};

export default IconCartoonShare;
