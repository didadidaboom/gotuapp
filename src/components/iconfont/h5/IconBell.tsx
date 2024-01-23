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

const IconBell: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M859.428 783.548H146.286v-71.44H181.94v-248.94c0-178.176 143.7-322.596 320.916-322.596s320.914 144.42 320.914 322.596v248.94h35.656v71.44z m-445.714 35.72H592c0 49.32-39.91 89.304-89.142 89.304-49.234 0-89.144-39.982-89.144-89.302z"
        fill={getIconColor(color, 0, '#FECB1E')}
      />
    </svg>
  );
};

IconBell.defaultProps = {
  size: 96,
};

export default IconBell;
