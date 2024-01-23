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

const IconEmoji27: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M266.666667 968.533333a245.333333 32 0 1 0 490.666666 0 245.333333 32 0 1 0-490.666666 0Z"
        fill={getIconColor(color, 0, '#45413C')}
      />
      <path
        d="M512 236.8c0-117.333333 96-213.333333 213.333333-213.333333 149.333333 0 213.333333 149.333333 213.333334 266.666666 0 311.466667-294.4 509.866667-394.666667 569.6-19.2 12.8-44.8 12.8-64 0C379.733333 800 85.333333 599.466667 85.333333 290.133333 85.333333 170.666667 149.333333 23.466667 298.666667 23.466667c117.333333 0 213.333333 93.866667 213.333333 213.333333z"
        fill={getIconColor(color, 1, '#FF6242')}
      />
      <path
        d="M288 130.133333c91.733333 0 170.666667 55.466667 204.8 132.266667 6.4 17.066667 32 17.066667 38.4 0 34.133333-78.933333 113.066667-132.266667 204.8-132.266667 106.666667 0 172.8 72.533333 202.666667 157.866667C938.666667 170.666667 874.666667 23.466667 725.333333 23.466667c-117.333333 0-213.333333 96-213.333333 213.333333 0-117.333333-96-213.333333-213.333333-213.333333-149.333333 0-213.333333 145.066667-213.333334 262.4 29.866667-83.2 96-155.733333 202.666667-155.733334z"
        fill={getIconColor(color, 2, '#FF866E')}
      />
    </svg>
  );
};

IconEmoji27.defaultProps = {
  size: 96,
};

export default IconEmoji27;
