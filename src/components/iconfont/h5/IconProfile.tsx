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

const IconProfile: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M85.333333 652.928m142.890667 0l567.552 0q142.890667 0 142.890667 142.890667l0 0q0 142.890667-142.890667 142.890666l-567.552 0q-142.890667 0-142.890667-142.890666l0 0q0-142.890667 142.890667-142.890667Z"
        fill={getIconColor(color, 0, '#FFB531')}
      />
      <path
        d="M679.253333 188.501333c-46.293333-55.594667-104.106667-103.253333-167.296-103.253333h-5.802666v0.469333c-60.501333 2.688-116.565333 48.938667-161.066667 102.784a212.437333 212.437333 0 0 0-48.938667 125.013334 216.405333 216.405333 0 1 0 432.469334 11.562666 213.248 213.248 0 0 0-49.365334-136.576z"
        fill={getIconColor(color, 1, '#FFB531')}
      />
      <path
        d="M482.432 89.002667a22.528 22.528 0 0 1 27.733333 17.408c9.088 49.877333 28.032 175.061333-4.010666 207.104-29.312 29.312-143.36 12.330667-189.952 3.882666a21.76 21.76 0 0 1-18.048-24.149333 212.906667 212.906667 0 0 1 46.933333-104.746667 274.048 274.048 0 0 1 137.344-99.498666z"
        fill={getIconColor(color, 2, '#030835')}
      />
    </svg>
  );
};

IconProfile.defaultProps = {
  size: 96,
};

export default IconProfile;
