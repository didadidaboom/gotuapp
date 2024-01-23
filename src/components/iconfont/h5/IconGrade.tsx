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

const IconGrade: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M514.56 568.32m-204.8 0a204.8 204.8 0 1 0 409.6 0 204.8 204.8 0 1 0-409.6 0Z"
        fill={getIconColor(color, 0, '#7AD2A1')}
      />
      <path
        d="M778.24 1013.76c-7.68 0-15.36-5.12-15.36-12.8l-15.36-151.04c-5.12-40.96-38.4-71.68-81.92-71.68H363.52c-40.96 0-76.8 30.72-81.92 71.68l-15.36 148.48c0 7.68-7.68 15.36-17.92 12.8-7.68 0-15.36-7.68-12.8-17.92l15.36-151.04c5.12-56.32 53.76-99.84 112.64-99.84H665.6c56.32 0 104.96 43.52 112.64 99.84l15.36 151.04c0 10.24-5.12 17.92-15.36 20.48z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M514.56 775.68c-148.48 0-268.8-120.32-268.8-268.8S366.08 240.64 514.56 240.64s268.8 120.32 268.8 268.8-120.32 266.24-268.8 266.24z m0-504.32c-130.56 0-238.08 107.52-238.08 238.08s107.52 238.08 238.08 238.08 238.08-107.52 238.08-238.08-107.52-238.08-238.08-238.08z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <path
        d="M424.96 583.68c-15.36 0-30.72-12.8-30.72-30.72v-58.88c0-15.36 12.8-30.72 30.72-30.72s30.72 12.8 30.72 30.72v58.88c0 17.92-12.8 30.72-30.72 30.72zM604.16 583.68c-15.36 0-30.72-12.8-30.72-30.72v-58.88c0-15.36 12.8-30.72 30.72-30.72s30.72 12.8 30.72 30.72v58.88c0 17.92-15.36 30.72-30.72 30.72z"
        fill={getIconColor(color, 3, '#333333')}
      />
      <path
        d="M514.56 61.44l-460.8 179.2 460.8 181.76 460.8-181.76z"
        fill={getIconColor(color, 4, '#FFFFFF')}
      />
      <path
        d="M514.56 440.32L12.8 240.64l504.32-197.12 504.32 197.12-506.88 199.68zM94.72 240.64l419.84 163.84 419.84-163.84L514.56 76.8 94.72 240.64z"
        fill={getIconColor(color, 5, '#333333')}
      />
      <path
        d="M842.24 517.12h-30.72v-207.36L535.04 192l12.8-28.16 294.4 125.44z"
        fill={getIconColor(color, 6, '#F4C951')}
      />
      <path
        d="M514.56 197.12c-33.28 0-56.32-15.36-56.32-35.84 0-20.48 23.04-35.84 56.32-35.84 33.28 0 56.32 15.36 56.32 35.84s-23.04 35.84-56.32 35.84z m-23.04-35.84c2.56 2.56 10.24 5.12 23.04 5.12s20.48-2.56 23.04-5.12c-2.56-2.56-10.24-5.12-23.04-5.12s-20.48 2.56-23.04 5.12z"
        fill={getIconColor(color, 7, '#333333')}
      />
      <path
        d="M860.16 540.16h-64V486.4c0-17.92 15.36-30.72 30.72-30.72 17.92 0 30.72 15.36 30.72 30.72v53.76z"
        fill={getIconColor(color, 8, '#F4C951')}
      />
    </svg>
  );
};

IconGrade.defaultProps = {
  size: 96,
};

export default IconGrade;
