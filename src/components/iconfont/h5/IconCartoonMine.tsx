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

const IconCartoonMine: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 672c100.16 0 177.952 44.736 218.944 97.792C678.272 811.2 605.184 832 512 832c-93.568 0-166.88-21.024-219.552-62.72l11.264-19.648C343.776 698.016 411.584 672 512 672z m0-480c212.064 0 320 107.936 320 320 0 86.88-18.112 156.288-54.08 207.968l-5.344-7.328c-39.232-51.904-96.928-84.096-172.48-97.472 8.384-6.4 16.736-13.76 25.056-22.016 73.6-73.6 73.6-152.704 0-226.304s-152.704-73.6-226.304 0-73.6 152.704 0 226.304c8.352 8.32 16.768 15.712 25.248 22.176-80.096 14.176-142.08 49.248-181.504 104.736l1.856-2.496C209.568 666.144 192 597.568 192 512 192 299.936 299.936 192 512 192z m67.872 220.128c48.608 48.576 48.608 87.168 0 135.744-48.576 48.608-87.168 48.608-135.744 0-48.608-48.576-48.608-87.168 0-135.744 48.576-48.608 87.168-48.608 135.744 0z"
        fill={getIconColor(color, 0, '#FA6400')}
      />
      <path
        d="M512 32C191.936 32 32 191.936 32 512c0 320.064 159.936 480 480 480 320.064 0 480-159.936 480-480C992 191.936 832.064 32 512 32z m0 64c284.736 0 416 131.264 416 416s-131.264 416-416 416S96 796.736 96 512 227.264 96 512 96z"
        fill={getIconColor(color, 1, '#E02020')}
        fillOpacity=".148"
      />
    </svg>
  );
};

IconCartoonMine.defaultProps = {
  size: 96,
};

export default IconCartoonMine;
