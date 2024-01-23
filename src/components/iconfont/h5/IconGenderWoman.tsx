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

const IconGenderWoman: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M869.888 512.90112a190.62272 190.62272 0 1 0-190.62272 190.22336 190.42304 190.42304 0 0 0 190.62272-190.22336z"
        fill={getIconColor(color, 0, '#FFCC66')}
      />
      <path
        d="M614.28736 76.8a342.22592 342.22592 0 0 0-267.43296 556.92288L252.16 728.2688 136.03328 612.352a34.66752 34.66752 0 0 0-49.06496 48.98304l116.12672 115.93728-116.12672 115.92192a34.6624 34.6624 0 0 0 49.06496 48.97792l116.12672-115.93728 116.1216 115.93728a34.6624 34.6624 0 1 0 49.06496-48.97792l-116.12672-115.9424 94.2848-94.1312A342.76864 342.76864 0 1 0 614.28736 76.8z m0 615.936a273.32096 273.32096 0 1 1 273.7664-273.32096 273.85344 273.85344 0 0 1-273.7664 273.32096z"
        fill={getIconColor(color, 1, '#13227a')}
      />
    </svg>
  );
};

IconGenderWoman.defaultProps = {
  size: 96,
};

export default IconGenderWoman;
