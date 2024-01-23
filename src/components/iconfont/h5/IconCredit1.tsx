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

const IconCredit1: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M675.2 192H345.6c-16 0-32 9.6-44.8 22.4l-3.2 3.2-128 185.6-3.2 3.2c-12.8 22.4-12.8 51.2 3.2 73.6l3.2 3.2 288 323.2 3.2 3.2c12.8 12.8 28.8 19.2 44.8 19.2 16 0 28.8-6.4 38.4-16l3.2-3.2L848 480l3.2-3.2c16-22.4 19.2-51.2 3.2-73.6l-3.2-3.2-128-179.2-3.2-3.2c-9.6-12.8-25.6-22.4-41.6-22.4l-3.2-3.2z m-38.4 192v64h-246.4v-64h246.4z"
        fill={getIconColor(color, 0, '#F7B51B')}
      />
    </svg>
  );
};

IconCredit1.defaultProps = {
  size: 96,
};

export default IconCredit1;
