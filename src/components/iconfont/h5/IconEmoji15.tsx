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

const IconEmoji15: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 456.533333m-426.666667 0a426.666667 426.666667 0 1 0 853.333334 0 426.666667 426.666667 0 1 0-853.333334 0Z"
        fill={getIconColor(color, 0, '#FFE500')}
      />
      <path
        d="M512 29.866667c-234.666667 0-426.666667 192-426.666667 426.666666s192 426.666667 426.666667 426.666667 426.666667-192 426.666667-426.666667-192-426.666667-426.666667-426.666666z m0 789.333333c-215.466667 0-388.266667-174.933333-388.266667-388.266667C123.733333 213.333333 296.533333 40.533333 512 40.533333S900.266667 213.333333 900.266667 428.8 727.466667 819.2 512 819.2z"
        fill={getIconColor(color, 1, '#EBCB00')}
      />
      <path
        d="M384 115.2a128 32 0 1 0 256 0 128 32 0 1 0-256 0Z"
        fill={getIconColor(color, 2, '#FFF48C')}
      />
      <path
        d="M170.666667 962.133333a341.333333 32 0 1 0 682.666666 0 341.333333 32 0 1 0-682.666666 0Z"
        fill={getIconColor(color, 3, '#45413C')}
      />
      <path
        d="M714.666667 563.2a53.333333 32 0 1 0 106.666666 0 53.333333 32 0 1 0-106.666666 0Z"
        fill={getIconColor(color, 4, '#FFAA54')}
      />
      <path
        d="M202.666667 563.2a53.333333 32 0 1 0 106.666666 0 53.333333 32 0 1 0-106.666666 0Z"
        fill={getIconColor(color, 5, '#FFAA54')}
      />
      <path
        d="M693.333333 727.466667c-14.933333-14.933333-38.4-14.933333-53.333333 0l44.8-44.8c14.933333-14.933333 14.933333-38.4 0-53.333334s-38.4-14.933333-53.333333 0l14.933333-14.933333c14.933333-14.933333 14.933333-38.4 0-53.333333s-38.4-14.933333-53.333333 0l-29.866667 29.866666c14.933333-14.933333 14.933333-38.4 0-53.333333s-38.4-14.933333-53.333333 0L388.266667 661.333333l-8.533334-78.933333c-6.4-10.666667-17.066667-17.066667-29.866666-17.066667-14.933333 0-27.733333 8.533333-32 23.466667l-32 96c-27.733333 78.933333-8.533333 166.4 51.2 226.133333 64 64 166.4 64 228.266666 0l51.2-51.2 78.933334-78.933333c12.8-17.066667 12.8-40.533333-2.133334-53.333333z"
        fill={getIconColor(color, 6, '#FFE500')}
      />
      <path
        d="M686.933333 721.066667l-72.533333 72.533333-51.2 51.2c-64 64-166.4 64-228.266667 0-34.133333-34.133333-53.333333-76.8-61.866666-121.6-10.666667 68.266667 12.8 136.533333 61.866666 185.6 64 64 166.4 64 228.266667 0l51.2-51.2 78.933333-78.933333c14.933333-14.933333 14.933333-38.4 0-53.333334-2.133333 0-4.266667-2.133333-6.4-4.266666z"
        fill={getIconColor(color, 7, '#EBCB00')}
      />
    </svg>
  );
};

IconEmoji15.defaultProps = {
  size: 96,
};

export default IconEmoji15;
