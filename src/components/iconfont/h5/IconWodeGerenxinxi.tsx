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

const IconWodeGerenxinxi: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M171.68 18.963h644.74q75.852 0 75.852 75.852v834.37q0 75.852-75.852 75.852H171.68q-75.852 0-75.852-75.852V94.815q0-75.852 75.852-75.852z"
        fill={getIconColor(color, 0, '#FFF8C6')}
      />
      <path
        d="M816.42 1024H171.68a94.815 94.815 0 0 1-94.815-94.815V94.815A94.815 94.815 0 0 1 171.68 0h644.74a94.815 94.815 0 0 1 94.815 94.815v834.37A94.815 94.815 0 0 1 816.42 1024zM171.68 37.926a56.889 56.889 0 0 0-56.89 56.889v834.37a56.889 56.889 0 0 0 56.89 56.89h644.74a56.889 56.889 0 0 0 56.89-56.89V94.815a56.889 56.889 0 0 0-56.89-56.89z"
        fill={getIconColor(color, 1, '#2C2C5F')}
      />
      <path
        d="M380.272 341.333a113.778 113.778 0 1 0 227.556 0 113.778 113.778 0 1 0-227.556 0z"
        fill={getIconColor(color, 2, '#FFE19C')}
      />
      <path
        d="M494.05 474.074a132.74 132.74 0 1 1 132.74-132.74 132.74 132.74 0 0 1-132.74 132.74z m0-227.555a94.815 94.815 0 1 0 94.815 94.814 94.815 94.815 0 0 0-94.815-94.814z"
        fill={getIconColor(color, 3, '#2C2C5F')}
      />
      <path
        d="M87.75 244.755l16.042-34.36 284.388 132.74-16.043 34.36z m513.023 97.81l284.578-113.701 14.07 35.214L614.844 377.78zM272.183 590.127h433.873v52.149H272.183zM272.183 739.556h433.873v52.148H272.183z"
        fill={getIconColor(color, 4, '#2C2C5F')}
      />
    </svg>
  );
};

IconWodeGerenxinxi.defaultProps = {
  size: 96,
};

export default IconWodeGerenxinxi;
