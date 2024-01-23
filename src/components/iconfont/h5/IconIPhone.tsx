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

const IconIPhone: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M760 64H264a40 40 0 0 0-40 40v816a40 40 0 0 0 40 40h496a40 40 0 0 0 40-40V104a40 40 0 0 0-40-40zM512 816a64 64 0 1 1 64-64 64.1 64.1 0 0 1-64 64z"
        fill={getIconColor(color, 0, '#10B981')}
      />
    </svg>
  );
};

IconIPhone.defaultProps = {
  size: 96,
};

export default IconIPhone;
