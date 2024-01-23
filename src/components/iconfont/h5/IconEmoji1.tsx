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

const IconEmoji1: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 452.266667m-426.666667 0a426.666667 426.666667 0 1 0 853.333334 0 426.666667 426.666667 0 1 0-853.333334 0Z"
        fill={getIconColor(color, 0, '#FFE500')}
      />
      <path
        d="M512 25.6c-234.666667 0-426.666667 192-426.666667 426.666667s192 426.666667 426.666667 426.666666 426.666667-192 426.666667-426.666666-192-426.666667-426.666667-426.666667z m0 789.333333C296.533333 814.933333 123.733333 642.133333 123.733333 426.666667S296.533333 36.266667 512 36.266667 902.4 211.2 902.4 426.666667c0 215.466667-174.933333 388.266667-390.4 388.266666z"
        fill={getIconColor(color, 1, '#EBCB00')}
      />
      <path
        d="M384 110.933333a128 32 0 1 0 256 0 128 32 0 1 0-256 0Z"
        fill={getIconColor(color, 2, '#FFF48C')}
      />
      <path
        d="M170.666667 966.4a341.333333 32 0 1 0 682.666666 0 341.333333 32 0 1 0-682.666666 0Z"
        fill={getIconColor(color, 3, '#45413C')}
      />
      <path
        d="M746.666667 558.933333a53.333333 32 0 1 0 106.666666 0 53.333333 32 0 1 0-106.666666 0Z"
        fill={getIconColor(color, 4, '#FFAA54')}
      />
      <path
        d="M170.666667 558.933333a53.333333 32 0 1 0 106.666666 0 53.333333 32 0 1 0-106.666666 0Z"
        fill={getIconColor(color, 5, '#FFAA54')}
      />
      <path
        d="M349.866667 590.933333c10.666667 170.666667 108.8 234.666667 145.066666 256 8.533333 4.266667 19.2 4.266667 29.866667 0 38.4-21.333333 134.4-83.2 145.066667-256 0-17.066667-12.8-32-29.866667-32H379.733333c-17.066667 0-29.866667 14.933333-29.866666 32z"
        fill={getIconColor(color, 6, '#FFB0CA')}
      />
      <path
        d="M512 697.6c0-32 96-23.466667 96 10.666667v138.666666c0 53.333333-42.666667 96-96 96s-96-42.666667-96-96v-138.666666c0-32 96-42.666667 96-10.666667z"
        fill={getIconColor(color, 7, '#FF6242')}
      />
      <path
        d="M512 697.6c0-32-96-23.466667-96 10.666667v42.666666c0-34.133333 192-34.133333 192 0v-42.666666c0-32-96-42.666667-96-10.666667z"
        fill={getIconColor(color, 8, '#FF866E')}
      />
      <path
        d="M768 441.6m-21.333333 0a21.333333 21.333333 0 1 0 42.666666 0 21.333333 21.333333 0 1 0-42.666666 0Z"
        fill={getIconColor(color, 9, '#45413C')}
      />
    </svg>
  );
};

IconEmoji1.defaultProps = {
  size: 96,
};

export default IconEmoji1;
