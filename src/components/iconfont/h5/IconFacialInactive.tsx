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

const IconFacialInactive: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M786.944 386.736c0-128.864-104.272-233.328-232.896-233.328-87.68 0-164.032 48.528-203.76 120.24a232.64 232.64 0 0 0-29.136 113.088c0 12.16 0.928 24.944 2.72 38.096 13.184 96.96 73.088 215.056 152.896 264.736l-2.752 3.632s33.408 76.32-32.704 110.384-141.84 14.432-193.264 26.704 664.736 12.272 613.328 0c-51.408-12.272-127.152 7.344-193.264-26.704s-32.704-110.384-32.704-110.384l-2.736-4.48c89.936-57.008 154.272-200.768 154.272-301.984z"
        fill={getIconColor(color, 0, '#707070')}
      />
      <path
        d="M852.096 88h-95.552a16 16 0 0 0 0 32h95.552a51.872 51.872 0 0 1 51.904 51.92v115.872a16 16 0 0 0 32 0v-115.872A83.888 83.888 0 0 0 852.096 88zM295.68 904h-123.52c-28.8 0-52.16-23.296-52.16-51.952v-100.304a16 16 0 0 0-32 0v100.304c0 46.336 37.712 83.952 84.16 83.952h123.52a16 16 0 0 0 0-32zM300.96 88h-128.896A83.92 83.92 0 0 0 88 171.936v123.216a16 16 0 0 0 32 0v-123.216A51.92 51.92 0 0 1 172.064 120h128.896a16 16 0 0 0 0-32zM920 732.64a16 16 0 0 0-16 16v103.392a52.048 52.048 0 0 1-52.16 51.968h-92.096a16 16 0 0 0 0 32h92.096a84.048 84.048 0 0 0 84.16-83.968V748.64a16 16 0 0 0-16-16z"
        fill={getIconColor(color, 1, '#707070')}
      />
      <path
        d="M835.36 817.888c-17.92-4.304-33.28-5.168-70.4-5.392-33.92-0.208-49.36-0.864-68.24-3.76-20.016-3.072-37.6-8.4-53.648-16.704-17.584-9.104-27.248-21.728-31.12-37.616-3.328-13.632-2.208-28.848 1.776-43.616 1.392-5.12 2.72-8.816 3.504-10.608a15.792 15.792 0 0 0 0.496-10.784c83.392-64.784 146.4-195.12 146.4-307.76C764.112 241.584 651.264 128 512 128c-92.656 0-176.448 50.736-220.592 130.752a253.728 253.728 0 0 0-31.52 122.912c0 13.04 0.976 26.752 2.896 40.96 14.896 110.048 76.032 219.808 152.528 273.568 0.208 1.344 0.288 2.704 0.864 4.016 0.768 1.776 2.112 5.488 3.504 10.608 4 14.768 5.104 29.984 1.776 43.616-3.888 15.888-13.552 28.512-31.12 37.616-16.048 8.304-33.632 13.632-53.648 16.704-18.88 2.896-34.32 3.552-68.24 3.76-37.136 0.224-52.496 1.088-70.4 5.392a16 16 0 0 0 7.472 31.12c14.624-3.504 28.624-4.304 63.136-4.512 35.472-0.208 51.968-0.928 72.896-4.128 23.28-3.568 44.16-9.888 63.52-19.92 25.936-13.424 41.456-33.712 47.504-58.432 3.552-14.56 3.632-29.536 1.296-44.256 18.96 7.952 38.432 12.624 58.144 12.624 23.296 0 46.352-6.288 68.528-17.36-3.168 16.256-3.632 32.864 0.32 48.992 6.048 24.72 21.568 45.008 47.504 58.432 19.36 10.016 40.24 16.352 63.52 19.92 20.928 3.2 37.424 3.92 72.896 4.128 34.512 0.208 48.512 1.008 63.136 4.512a16 16 0 1 0 7.44-31.136zM294.496 418.32a275.632 275.632 0 0 1-2.608-36.672c0-38.144 9.568-74.864 27.536-107.456C358 204.272 431.136 160 512 160c121.536 0 220.112 99.216 220.112 221.664 0 141.648-112.032 316.72-220.112 316.72-97.488-0.016-198.56-140.128-217.504-280.064z"
        fill={getIconColor(color, 2, '#707070')}
      />
      <path
        d="M570.256 560.864a84.176 84.176 0 0 1-120.288-3.824 16 16 0 1 0-23.472 21.744 116.208 116.208 0 0 0 165.856 5.232 16 16 0 1 0-22.096-23.152z"
        fill={getIconColor(color, 3, '#707070')}
      />
    </svg>
  );
};

IconFacialInactive.defaultProps = {
  size: 96,
};

export default IconFacialInactive;
