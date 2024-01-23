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

const IconReduceNotify: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M281.6 153.6L221.866667 93.866667C119.466667 170.666667 51.2 290.133333 42.666667 426.666667h85.333333c8.533333-115.2 64-213.333333 153.6-273.066667zM853.333333 426.666667h85.333334c-8.533333-136.533333-72.533333-256-174.933334-332.8l-59.733333 59.733333c85.333333 59.733333 140.8 157.866667 149.333333 273.066667z m-85.333333 21.333333c0-132.266667-89.6-238.933333-213.333333-268.8v-29.866667c0-34.133333-29.866667-64-64-64S426.666667 115.2 426.666667 149.333333v29.866667c-123.733333 29.866667-213.333333 136.533333-213.333334 268.8V682.666667l-85.333333 85.333333v42.666667h725.333333v-42.666667l-85.333333-85.333333v-234.666667zM490.666667 938.666667h17.066666c29.866667-4.266667 51.2-25.6 59.733334-51.2 4.266667-8.533333 8.533333-21.333333 8.533333-34.133334h-170.666667c0 46.933333 38.4 85.333333 85.333334 85.333334z"
        fill={getIconColor(color, 0, '#F97316')}
      />
    </svg>
  );
};

IconReduceNotify.defaultProps = {
  size: 96,
};

export default IconReduceNotify;
