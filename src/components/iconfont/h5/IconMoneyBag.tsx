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

const IconMoneyBag: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M881.493333 840.746667S783.786667 917.333333 512 917.333333 142.506667 840.746667 142.506667 840.746667 15.786667 305.706667 512 305.706667s369.493333 535.04 369.493333 535.04z"
        fill={getIconColor(color, 0, '#F97316')}
      />
      <path
        d="M564.906667 682.666667c0-31.146667-26.88-39.466667-55.466667-52.266667C469.333333 612.266667 426.666667 597.333333 426.666667 535.253333c0-20.053333 6.4-75.946667 85.333333-85.333333v-46.506667h34.346667v46.293334c69.333333 11.946667 79.573333 64 80.853333 99.413333h-61.866667c0-36.693333-17.066667-50.986667-39.253333-50.986667a34.56 34.56 0 0 0-36.906667 37.333334c0 64 138.026667 40.32 138.026667 146.133333 0 74.453333-72.533333 85.333333-85.333333 85.333333v42.666667h-34.133334V768a95.36 95.36 0 0 1-92.373333-101.333333h62.08c0 53.973333 41.173333 52.693333 46.933333 52.693333a37.333333 37.333333 0 0 0 40.533334-36.693333z"
        fill={getIconColor(color, 1, '#F97316')}
      />
      <path
        d="M632.96 298.666667H391.04L341.333333 170.666667a590.293333 590.293333 0 0 1 170.666667-21.333334 590.293333 590.293333 0 0 1 170.666667 21.333334z"
        fill={getIconColor(color, 2, '#F97316')}
      />
      <path
        d="M587.946667 298.666667h-151.893334l-28.373333-181.333334A401.493333 401.493333 0 0 1 512 106.666667a401.493333 401.493333 0 0 1 104.32 10.666666z"
        fill={getIconColor(color, 3, '#FF9800')}
      />
      <path
        d="M789.333333 533.333333h-42.666666c0-173.653333-106.666667-213.333333-149.333334-213.333333 0-14.293333 29.866667-12.586667 42.666667 0 28.373333 0 149.333333 42.666667 149.333333 213.333333z"
        fill={getIconColor(color, 4, '#455A64')}
      />
      <path
        d="M384 277.333333h256v42.666667H384z"
        fill={getIconColor(color, 5, '#455A64')}
      />
    </svg>
  );
};

IconMoneyBag.defaultProps = {
  size: 96,
};

export default IconMoneyBag;
