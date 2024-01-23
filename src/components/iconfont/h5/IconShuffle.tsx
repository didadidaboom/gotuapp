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

const IconShuffle: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M64 320a64.021333 64.021333 0 0 1 0-128h64c81.92 0 155.904 31.744 212.48 82.432a378.624 378.624 0 0 0-63.488 117.824C241.792 348.544 188.48 320 128 320H64z m576 0a192 192 0 0 0-192 192c0 176.768-143.296 320-320 320H64a64 64 0 1 1 0-128h64a192 192 0 0 0 192-192c0-176.704 143.296-320 320-320h128V127.936c0-25.856 15.616-49.28 39.488-59.136a64.213333 64.213333 0 0 1 69.76 13.888l128 128c12.48 12.48 18.752 28.864 18.752 45.248s-6.272 32.768-18.752 45.248l-128 128a64.106667 64.106667 0 0 1-69.76 13.888A64.042667 64.042667 0 0 1 768 383.936V320h-128z m237.248 274.688l128 128c12.48 12.48 18.752 28.864 18.752 45.248s-6.272 32.768-18.752 45.248l-128 128a64.106667 64.106667 0 0 1-69.76 13.888A64.042667 64.042667 0 0 1 768 895.936V832h-128c-81.92 0-155.904-31.68-212.544-82.368a380.416 380.416 0 0 0 63.552-117.888C526.208 675.52 579.52 704 640 704h128v-64.064c0-25.856 15.616-49.28 39.488-59.136a64.213333 64.213333 0 0 1 69.76 13.888z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconShuffle.defaultProps = {
  size: 96,
};

export default IconShuffle;
