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

const IconJifen: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M170.666667 800a341.333333 74.666667 0 1 0 682.666666 0 341.333333 74.666667 0 1 0-682.666666 0Z"
        fill={getIconColor(color, 0, '#F3E4DB')}
      />
      <path
        d="M315.733333 825.6l-12.8-89.6-89.6-12.8c-8.533333-2.133333-6.4-12.8 4.266667-23.466667l115.2-115.2 121.6 121.6-115.2 115.2c-10.666667 8.533333-23.466667 12.8-23.466667 4.266667zM708.266667 825.6l12.8-89.6 89.6-12.8c8.533333-2.133333 6.4-12.8-4.266667-23.466667l-115.2-115.2-121.6 121.6 115.2 115.2c10.666667 8.533333 23.466667 12.8 23.466667 4.266667z"
        fill={getIconColor(color, 1, '#EBCB4B')}
      />
      <path
        d="M512 149.333333c-160 0-288 128-288 288S352 725.333333 512 725.333333s288-128 288-288S672 149.333333 512 149.333333z m17.066667 377.6c-8.533333 10.666667-23.466667 10.666667-32 0l-110.933334-128 49.066667-68.266666h157.866667l49.066666 68.266666-113.066666 128z"
        fill={getIconColor(color, 2, '#EB883A')}
      />
    </svg>
  );
};

IconJifen.defaultProps = {
  size: 96,
};

export default IconJifen;
