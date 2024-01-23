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

const IconCartoonPhone: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 160c192.256 0 288 119.68 288 352s-95.744 352-288 352-288-119.68-288-352S319.744 160 512 160z m1.408 464a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"
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

IconCartoonPhone.defaultProps = {
  size: 96,
};

export default IconCartoonPhone;
