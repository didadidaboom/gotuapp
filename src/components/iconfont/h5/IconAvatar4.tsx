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

const IconAvatar4: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M387.389958 580.324108c0 51.826366-15.230889 93.888344-34.044374 93.888344-18.761296 0-34.020838-42.061978-34.020838-93.888344 0-51.856042 15.259542-93.888344 34.020838-93.888344C372.160091 486.434741 387.389958 528.468067 387.389958 580.324108z"
        fill={getIconColor(color, 0, '#F97316')}
      />
      <path
        d="M706.582697 580.324108c0 51.826366-15.232936 93.888344-34.020838 93.888344-18.814508 0-34.020838-42.061978-34.020838-93.888344 0-51.856042 15.20633-93.888344 34.020838-93.888344C691.350784 486.434741 706.582697 528.468067 706.582697 580.324108z"
        fill={getIconColor(color, 1, '#F97316')}
      />
      <path
        d="M511.794315 125.000945c-213.885322 0-387.255904 173.346023-387.255904 387.257951 0 213.858716 173.370583 387.255904 387.255904 387.255904 213.858716 0 387.255904-173.396165 387.255904-387.255904C899.05022 298.346969 725.653031 125.000945 511.794315 125.000945zM511.794315 854.92628c-189.272761 0-342.670453-153.421228-342.670453-342.668407 0-12.989849 0.852414-25.747407 2.269693-38.375006 61.802578-1.417279 293.160853-14.97404 342.023724-134.738727 48.039109 117.780497 272.441972 132.781142 338.777797 134.686539 1.393743 12.604062 2.269693 25.385157 2.269693 38.428218C854.464769 701.506075 701.041494 854.92628 511.794315 854.92628z"
        fill={getIconColor(color, 2, '#F97316')}
      />
    </svg>
  );
};

IconAvatar4.defaultProps = {
  size: 96,
};

export default IconAvatar4;
