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

const IconGenderMan: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M126.77632 520.57088A190.6688 190.6688 0 1 0 317.44 329.18528a191.02208 191.02208 0 0 0-190.66368 191.3856z"
        fill={getIconColor(color, 0, '#FFCC66')}
      />
      <path
        d="M884.62336 71.68h-293.04832a34.816 34.816 0 0 0 0 69.632h242.432l-210.73408 211.6096A340.66944 340.66944 0 0 0 404.5312 273.60768a344.42752 344.42752 0 1 0 267.38176 128.97792l211.03104-211.88608v243.2a34.688 34.688 0 1 0 69.376 0V139.648A67.90656 67.90656 0 0 0 884.62336 71.68zM404.5312 892.928a274.82624 274.82624 0 1 1 273.7152-274.82112A274.58048 274.58048 0 0 1 404.5312 892.928z"
        fill={getIconColor(color, 1, '#13227a')}
      />
    </svg>
  );
};

IconGenderMan.defaultProps = {
  size: 96,
};

export default IconGenderMan;
