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

const IconHot4: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M352.1 279.2c-45.9 52.2-51.8 122.9-79.1 125.6-39.5 3.9-55.2-101.4-88.4-97.7-35.1 3.9-57.6 85-65.1 144.2-4.7 37.3-31.1 244.6 111.6 386.1 166.8 165.4 479.6 156.7 609.4 0C932 727 911.2 568.8 896.4 456c-10.3-78.1-35.8-171.8-65.1-172.1-33.8-0.4-49.6 118.2-79.1 116.3-27.8-1.8-17.4-108-83.7-209.3-55.3-84.4-149-141.7-181.4-121-22.3 14.2 3.8 52.6-23.3 107-24.5 49.1-56.8 39.8-111.7 102.3z"
        fill={getIconColor(color, 0, '#FFD301')}
      />
      <path
        d="M397.6 472.3c-32.8 37.3-37.1 88-56.6 89.9-28.3 2.8-39.5-72.5-63.3-69.9-25.1 2.8-41.2 60.8-46.6 103.2-3.4 26.7-22.2 175 79.9 276.3 119.4 118.4 343.2 112.2 436.1 0 65.5-79.1 50.6-192.3 39.9-273-7.4-55.9-25.6-122.9-46.6-123.2-24.2-0.3-35.5 84.6-56.6 83.2-19.9-1.3-12.4-77.3-59.9-149.8-39.6-60.4-106.6-101.4-129.8-86.6-15.9 10.2 2.7 37.7-16.6 76.6-17.5 35.2-40.6 28.6-79.9 73.3z"
        fill={getIconColor(color, 1, '#EA590A')}
      />
      <path
        d="M623.5 905.7c35.2-43.8 28-97.8 21.5-147-4-30-13.8-66.2-25.1-66.3-13-0.2-19.1 45.5-30.5 44.8-10.7-0.7-6.7-41.6-32.3-80.7-21.3-32.5-57.4-54.6-69.9-46.6-9 5.8 0.5 20.3-9 41.2-12.3 27.2-39 25.2-66.9 54.5-16.9 17.8-24 36.4-27.9 46.5-25.4 66.3 5.8 128.2 9.3 134.9 7.5 14.4 18.7 35.6 41.9 51.2 54 36.1 144.8 22.5 188.9-32.5z"
        fill={getIconColor(color, 2, '#0D4D90')}
      />
    </svg>
  );
};

IconHot4.defaultProps = {
  size: 96,
};

export default IconHot4;
