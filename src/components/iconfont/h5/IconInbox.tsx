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

const IconInbox: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M938.666667 384v256a213.418667 213.418667 0 0 1-213.333334 213.333333H298.666667a213.12 213.12 0 0 1-213.333334-213.333333V384a213.12 213.12 0 0 1 213.333334-213.333333h426.666666a213.418667 213.418667 0 0 1 213.333334 213.333333z"
        fill={getIconColor(color, 0, '#FFB531')}
      />
      <path
        d="M749.482667 415.061333l-43.52 33.706667a316.501333 316.501333 0 0 1-386.133334 0l-46.08-35.413333a32.512 32.512 0 0 1-5.973333-45.226667 31.872 31.872 0 0 1 44.8-5.546667l46.08 35.413334a252.288 252.288 0 0 0 308.053333 0l43.946667-33.706667a31.573333 31.573333 0 0 1 44.8 5.973333 32.042667 32.042667 0 0 1-5.973333 44.8z"
        fill={getIconColor(color, 1, '#030835')}
      />
    </svg>
  );
};

IconInbox.defaultProps = {
  size: 96,
};

export default IconInbox;
