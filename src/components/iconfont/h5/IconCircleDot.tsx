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

const IconCircleDot: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 1024a512 512 0 1 0 0-1024 512 512 0 1 0 0 1024z m0-704a192 192 0 1 1 0 384 192 192 0 1 1 0-384z"
        fill={getIconColor(color, 0, '#F97316')}
      />
    </svg>
  );
};

IconCircleDot.defaultProps = {
  size: 96,
};

export default IconCircleDot;
