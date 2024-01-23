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

const IconSchool: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M534.1 525.1m-450 0a450 450 0 1 0 900 0 450 450 0 1 0-900 0Z"
        fill={getIconColor(color, 0, '#F3F4A8')}
      />
      <path
        d="M250.9 609.1c-4.8-4.8-11.9-4.8-16.6 0l-75 74.9-27.3-27.3c-4.8-4.8-11.9-4.8-16.6 0-4.8 4.8-4.8 11.9 0 16.6L151 709c2.4 2.4 4.8 3.6 8.3 3.6 3.6 0 5.9-1.2 8.3-3.6l83.2-83.2c4.8-4.8 4.8-11.9 0.1-16.7z"
        fill={getIconColor(color, 1, '#F3F4A8')}
      />
      <path
        d="M295.5 480.9h28.3v144h-28.3v-144z m14.6 126.6c12.1 0 23 7.3 27.6 18.4 4.6 11.2 2.1 24-6.5 32.6-8.5 8.5-21.4 11.1-32.6 6.5-11.2-4.6-18.4-15.5-18.4-27.6 0-7.9 3.1-15.5 8.8-21.1 5.6-5.7 13.2-8.8 21.1-8.8z m94-88h265.1c4.3 0 8.5 1.7 11.5 4.8 3.1 3.1 4.8 7.2 4.8 11.5v136.9c0 9-7.7 16.3-16.3 22.8 0 0-69.2 33.7-136.9 33.7-64.8 0-128.2-33.7-128.2-33.7-11.2-6.9-16.3-16-16.3-25V535.8c0-4.3 1.7-8.5 4.8-11.5 3-3.1 7.2-4.8 11.5-4.8z m26.6 21.2h211.9c7.2 0 13 5.6 13 12.4v104.3c0 6.9-1.2 12.3-13 17.4 0 0-55.3 25.7-109.4 25.7-51.8 0-102.5-25.7-102.5-25.7-11.3-3.8-13-12.2-13-19V553.1c0-6.9 5.8-12.4 13-12.4z m125.4-215.2l238.8 127.8c12.2 6.5 12.2 17.1 0 23.7L556.1 604.8c-12.2 6.5-32 6.5-44.2 0L273.1 477c-12.2-6.5-12.2-17.1 0-23.7l238.8-127.8c12.2-6.5 32-6.5 44.2 0z m-4 31.4l193.4 97.5c9.9 5 9.9 13.1 0 18.1L552.1 570c-9.9 5-25.9 5-35.8 0L323 472.5c-9.9-5-9.9-13.1 0-18.1l193.4-97.5c9.8-4.9 25.9-4.9 35.7 0z m0 0"
        fill={getIconColor(color, 2, '#FED501')}
      />
    </svg>
  );
};

IconSchool.defaultProps = {
  size: 96,
};

export default IconSchool;
