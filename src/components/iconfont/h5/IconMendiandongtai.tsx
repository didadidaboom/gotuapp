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

const IconMendiandongtai: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M343.402667 701.098667l135.04 20.586666 56.597333 98.005334a53.333333 53.333333 0 1 1-92.373333 53.333333l-99.264-171.946667z m549.312-481.237334a85.333333 85.333333 0 0 1 3.285333 23.466667V664.32a85.333333 85.333333 0 0 1-114.154667 80.32C698.325333 714.645333 622.592 693.973333 554.666667 682.666667a13093.546667 13093.546667 0 0 0-234.624-36.330667v-398.506667A19907.733333 19907.733333 0 0 1 554.666667 213.333333c65.706667-9.130667 143.189333-26.453333 232.533333-52.032a85.333333 85.333333 0 0 1 105.514667 58.56zM256 257.578667v379.392l-54.784-7.893334A85.333333 85.333333 0 0 1 128 544.597333v-194.133333a85.333333 85.333333 0 0 1 72.32-84.330667c19.157333-2.944 37.717333-5.802667 55.68-8.533333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconMendiandongtai.defaultProps = {
  size: 96,
};

export default IconMendiandongtai;
