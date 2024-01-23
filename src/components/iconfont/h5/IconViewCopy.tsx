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

const IconViewCopy: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M913.066667 537.6c-8.533333 0-17.066667-4.266667-21.333334-12.8-102.4-187.733333-234.666667-290.133333-379.733333-290.133333s-277.333333 102.4-379.733333 290.133333c-8.533333 12.8-21.333333 17.066667-34.133334 8.533333-8.533333-8.533333-12.8-21.333333-8.533333-34.133333C200.533333 294.4 354.133333 183.466667 512 183.466667s311.466667 110.933333 422.4 315.733333c8.533333 12.8 4.266667 25.6-8.533333 34.133333-4.266667 0-8.533333 4.266667-12.8 4.266667z"
        fill={getIconColor(color, 0, '#6A3906')}
      />
      <path
        d="M512 840.533333c-162.133333 0-311.466667-110.933333-422.4-315.733333-8.533333-12.8-4.266667-25.6 8.533333-34.133333 12.8-8.533333 25.6-4.266667 34.133334 8.533333 102.4 187.733333 234.666667 290.133333 379.733333 290.133333s277.333333-102.4 379.733333-290.133333c8.533333-12.8 21.333333-17.066667 34.133334-8.533333 12.8 8.533333 17.066667 21.333333 8.533333 34.133333-110.933333 204.8-264.533333 315.733333-422.4 315.733333z"
        fill={getIconColor(color, 1, '#6A3906')}
      />
      <path
        d="M512 520.533333m-145.066667 0a145.066667 145.066667 0 1 0 290.133334 0 145.066667 145.066667 0 1 0-290.133334 0Z"
        fill={getIconColor(color, 2, '#F5CB2B')}
      />
      <path
        d="M512 686.933333c-93.866667 0-166.4-76.8-166.4-166.4s76.8-170.666667 166.4-170.666666c93.866667 0 166.4 76.8 166.4 166.4s-72.533333 170.666667-166.4 170.666666z m0-285.866666c-64 0-119.466667 51.2-119.466667 119.466666S443.733333 640 512 640c64 0 119.466667-51.2 119.466667-119.466667S580.266667 401.066667 512 401.066667z"
        fill={getIconColor(color, 3, '#6A3906')}
      />
    </svg>
  );
};

IconViewCopy.defaultProps = {
  size: 96,
};

export default IconViewCopy;
