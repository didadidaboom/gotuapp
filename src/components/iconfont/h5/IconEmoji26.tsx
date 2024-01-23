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

const IconEmoji26: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M522.666667 448m-426.666667 0a426.666667 426.666667 0 1 0 853.333333 0 426.666667 426.666667 0 1 0-853.333333 0Z"
        fill={getIconColor(color, 0, '#FFE500')}
      />
      <path
        d="M394.666667 106.666667a128 32 0 1 0 256 0 128 32 0 1 0-256 0Z"
        fill={getIconColor(color, 1, '#FFF48C')}
      />
      <path
        d="M522.666667 21.333333c-234.666667 0-426.666667 192-426.666667 426.666667s192 426.666667 426.666667 426.666667 426.666667-192 426.666666-426.666667-192-426.666667-426.666666-426.666667z m0 789.333334C307.2 810.666667 132.266667 635.733333 132.266667 422.4c0-215.466667 174.933333-388.266667 388.266666-388.266667s388.266667 174.933333 388.266667 388.266667c2.133333 213.333333-172.8 388.266667-386.133333 388.266667z"
        fill={getIconColor(color, 2, '#EBCB00')}
      />
      <path
        d="M181.333333 970.666667a341.333333 32 0 1 0 682.666667 0 341.333333 32 0 1 0-682.666667 0Z"
        fill={getIconColor(color, 3, '#45413C')}
        opacity=".15"
      />
      <path
        d="M725.333333 554.666667a53.333333 32 0 1 0 106.666667 0 53.333333 32 0 1 0-106.666667 0Z"
        fill={getIconColor(color, 4, '#FFAA54')}
      />
      <path
        d="M213.333333 554.666667a53.333333 32 0 1 0 106.666667 0 53.333333 32 0 1 0-106.666667 0Z"
        fill={getIconColor(color, 5, '#FFAA54')}
      />
      <path
        d="M298.666667 448m-21.333334 0a21.333333 21.333333 0 1 0 42.666667 0 21.333333 21.333333 0 1 0-42.666667 0Z"
        fill={getIconColor(color, 6, '#45413C')}
      />
      <path
        d="M746.666667 448m-21.333334 0a21.333333 21.333333 0 1 0 42.666667 0 21.333333 21.333333 0 1 0-42.666667 0Z"
        fill={getIconColor(color, 7, '#45413C')}
      />
      <path
        d="M74.666667 467.2c0 6.4 4.266667 12.8 10.666666 17.066667 6.4 4.266667 12.8 6.4 21.333334 2.133333L823.466667 162.133333c6.4-2.133333 10.666667-8.533333 12.8-17.066666 2.133333-6.4-2.133333-14.933333-6.4-19.2-27.733333-25.6-61.866667-53.333333-91.733334-68.266667-6.4-4.266667-12.8-4.266667-19.2 0L96 339.2c-6.4 2.133333-10.666667 8.533333-12.8 14.933333-6.4 32-8.533333 76.8-8.533333 113.066667z"
        fill={getIconColor(color, 8, '#F0F0F0')}
      />
      <path
        d="M738.133333 57.6c-6.4-4.266667-12.8-4.266667-19.2 0L492.8 160h93.866667l140.8-64c29.866667 14.933333 66.133333 40.533333 96 68.266667l4.266666-2.133334c6.4-2.133333 10.666667-8.533333 12.8-17.066666 2.133333-6.4-2.133333-14.933333-6.4-19.2-32-23.466667-66.133333-51.2-96-68.266667z"
        fill={getIconColor(color, 9, '#FFFFFF')}
      />
      <path
        d="M96 339.2c-2.133333 0-2.133333 2.133333-4.266667 2.133333M522.666667 298.666667L426.666667 341.333333H91.733333s2.133333-2.133333 4.266667-2.133333L185.6 298.666667h337.066667z"
        fill={getIconColor(color, 10, '#E0E0E0')}
      />
      <path
        d="M108.8 268.8c-2.133333 6.4-2.133333 14.933333 2.133333 19.2 2.133333 6.4 10.666667 10.666667 17.066667 10.666667h787.2c6.4 0 14.933333-4.266667 17.066667-10.666667 4.266667-6.4 4.266667-12.8 2.133333-19.2-14.933333-34.133333-34.133333-72.533333-55.466667-100.266667-4.266667-6.4-10.666667-8.533333-17.066666-8.533333h-682.666667c-6.4 0-12.8 4.266667-17.066667 8.533333-19.2 27.733333-38.4 66.133333-53.333333 100.266667z"
        fill={getIconColor(color, 11, '#F0F0F0')}
      />
      <path
        d="M908.8 213.333333c-8.533333-17.066667-19.2-32-27.733333-44.8-4.266667-6.4-10.666667-8.533333-17.066667-8.533333h-682.666667c-6.4 0-12.8 4.266667-17.066666 8.533333-10.666667 12.8-19.2 27.733333-29.866667 44.8h774.4z"
        fill={getIconColor(color, 12, '#FFFFFF')}
      />
    </svg>
  );
};

IconEmoji26.defaultProps = {
  size: 96,
};

export default IconEmoji26;