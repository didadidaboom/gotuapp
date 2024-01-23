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

const IconHot2: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 928c-12.16 0-24.106667 0-35.84-1.493333a386.986667 386.986667 0 0 1-332.8-250.453334 415.146667 415.146667 0 0 1 78.08-433.92 31.146667 31.146667 0 0 1 23.04-10.453333 30.72 30.72 0 0 1 23.466667 9.386667L407.466667 384l202.24-294.4a32 32 0 0 1 24.32-13.866667 32.426667 32.426667 0 0 1 25.813333 9.6l145.706667 160.213334a409.173333 409.173333 0 0 1 75.306666 434.346666 394.24 394.24 0 0 1-344.96 247.466667c-7.893333 0.426667-15.786667 0.64-23.893333 0.64zM247.253333 311.253333a351.36 351.36 0 0 0-44.16 341.333334 323.626667 323.626667 0 0 0 278.4 210.133333 338.986667 338.986667 0 0 0 50.986667 0 326.4 326.4 0 0 0 289.28-208 345.813333 345.813333 0 0 0-64-366.933333L640 158.08l-201.6 293.12a32.213333 32.213333 0 0 1-49.28 4.266667z"
        fill={getIconColor(color, 0, '#FA6302')}
      />
      <path
        d="M512 912.853333a113.493333 113.493333 0 0 1-103.04-161.493333l74.026667-159.36a32 32 0 0 1 58.026666 0l74.026667 159.36A113.493333 113.493333 0 0 1 512 912.853333z m0-231.466666l-45.013333 96.853333a49.706667 49.706667 0 1 0 90.026666 0z"
        fill={getIconColor(color, 1, '#F8B500')}
      />
      <path
        d="M607.786667 860.373333q3.626667-5.76 6.4-11.52a351.146667 351.146667 0 0 1-204.373334 0q2.773333 5.76 6.4 11.52a113.706667 113.706667 0 0 0 192 0z"
        fill={getIconColor(color, 2, '#D1390B')}
      />
    </svg>
  );
};

IconHot2.defaultProps = {
  size: 96,
};

export default IconHot2;
