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

const IconGenderHomo: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M929.647367 418.524122A417.878951 417.878951 0 1 0 364.40967 808.943233a227.835108 227.835108 0 0 0-81.563882 174.274826 40.781941 40.781941 0 0 0 40.781941 40.781941h376.281372a40.781941 40.781941 0 0 0 40.781941-40.781941 228.106988 228.106988 0 0 0-81.563882-174.274826 418.150831 418.150831 0 0 0 270.520207-390.419111zM653.145809 942.436119H370.662901a147.086866 147.086866 0 0 1 282.482908 0z m-141.105514-187.868807a336.31507 336.31507 0 1 1 336.04319-336.04319 336.58695 336.58695 0 0 1-336.04319 336.04319z"
        fill={getIconColor(color, 0, '#13227a')}
      />
      <path
        d="M510.952776 636.299685a284.657945 284.657945 0 0 1-127.783414-29.906757A40.781941 40.781941 0 0 1 420.416868 533.257315a206.08474 206.08474 0 0 0 178.35302 2.175036 40.781941 40.781941 0 0 1 34.52871 73.951253 283.298547 283.298547 0 0 1-122.345822 26.916081z"
        fill={getIconColor(color, 1, '#2DAF62')}
      />
    </svg>
  );
};

IconGenderHomo.defaultProps = {
  size: 96,
};

export default IconGenderHomo;
