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

const IconEmoji39: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M247.466667 968.533333a264.533333 36.266667 0 1 0 529.066666 0 264.533333 36.266667 0 1 0-529.066666 0Z"
        fill={getIconColor(color, 0, '#45413C')}
      />
      <path
        d="M512 377.6m-349.866667 0a349.866667 349.866667 0 1 0 699.733334 0 349.866667 349.866667 0 1 0-699.733334 0Z"
        fill={getIconColor(color, 1, '#FFE500')}
      />
      <path
        d="M512 27.733333c-192 0-349.866667 155.733333-349.866667 349.866667S320 727.466667 512 727.466667s349.866667-155.733333 349.866667-349.866667S704 27.733333 512 27.733333z m0 646.4c-174.933333 0-317.866667-142.933333-317.866667-317.866666 0-177.066667 142.933333-320 317.866667-320s317.866667 142.933333 317.866667 317.866666c0 177.066667-142.933333 320-317.866667 320z"
        fill={getIconColor(color, 2, '#EBCB00')}
      />
      <path
        d="M407.466667 98.133333a104.533333 25.6 0 1 0 209.066666 0 104.533333 25.6 0 1 0-209.066666 0Z"
        fill={getIconColor(color, 3, '#FFF48C')}
      />
      <path
        d="M704 465.066667a42.666667 25.6 0 1 0 85.333333 0 42.666667 25.6 0 1 0-85.333333 0Z"
        fill={getIconColor(color, 4, '#FFAA54')}
      />
      <path
        d="M234.666667 465.066667a42.666667 25.6 0 1 0 85.333333 0 42.666667 25.6 0 1 0-85.333333 0Z"
        fill={getIconColor(color, 5, '#FFAA54')}
      />
      <path
        d="M379.733333 482.133333c8.533333 140.8 89.6 198.4 119.466667 215.466667 6.4 4.266667 17.066667 4.266667 23.466667 0 29.866667-17.066667 110.933333-74.666667 119.466666-215.466667 0-12.8-10.666667-25.6-23.466666-25.6H403.2c-12.8 0-23.466667 12.8-23.466667 25.6z"
        fill={getIconColor(color, 6, '#FFB0CA')}
      />
      <path
        d="M512 578.133333c0-25.6 78.933333-19.2 78.933333 8.533334v113.066666c0 42.666667-34.133333 78.933333-78.933333 78.933334s-78.933333-34.133333-78.933333-78.933334v-113.066666c0-27.733333 78.933333-34.133333 78.933333-8.533334z"
        fill={getIconColor(color, 7, '#FF6242')}
      />
      <path
        d="M512 578.133333c0-25.6-78.933333-19.2-78.933333 8.533334v34.133333c0-27.733333 157.866667-27.733333 157.866666 0v-34.133333c0-27.733333-78.933333-34.133333-78.933333-8.533334z"
        fill={getIconColor(color, 8, '#FF866E')}
      />
      <path
        d="M599.466667 878.933333c0 53.333333-70.4 53.333333-70.4 0 0-29.866667 34.133333-72.533333 34.133333-72.533333s36.266667 40.533333 36.266667 72.533333z"
        fill={getIconColor(color, 9, '#4AEFF7')}
      />
      <path
        d="M644.266667 55.466667a192.853333 192.853333 0 0 0-115.2 177.066666c0 108.8 87.466667 196.266667 196.266666 196.266667 53.333333 0 100.266667-21.333333 134.4-53.333333 0-145.066667-87.466667-268.8-215.466666-320z"
        fill={getIconColor(color, 10, '#45413C')}
      />
      <path
        d="M714.666667 200.533333m-181.333334 0a181.333333 181.333333 0 1 0 362.666667 0 181.333333 181.333333 0 1 0-362.666667 0Z"
        fill={getIconColor(color, 11, '#FFFACF')}
      />
      <path
        d="M714.666667 347.733333c-93.866667 0-170.666667-72.533333-179.2-164.266666v17.066666c0 100.266667 81.066667 181.333333 181.333333 181.333334s181.333333-81.066667 181.333333-181.333334v-17.066666c-10.666667 91.733333-89.6 164.266667-183.466666 164.266666z"
        fill={getIconColor(color, 12, '#FFE500')}
      />
      <path
        d="M714.666667 76.8c89.6 0 164.266667 66.133333 179.2 153.6 2.133333-10.666667 2.133333-19.2 2.133333-29.866667C896 100.266667 814.933333 19.2 714.666667 19.2S533.333333 100.266667 533.333333 200.533333c0 10.666667 0 19.2 2.133334 27.733334 14.933333-85.333333 89.6-151.466667 179.2-151.466667z"
        fill={getIconColor(color, 13, '#FFFFFF')}
      />
      <path
        d="M379.733333 55.466667C448 85.333333 494.933333 155.733333 494.933333 234.666667c0 108.8-87.466667 196.266667-196.266666 196.266666-53.333333 0-100.266667-21.333333-134.4-53.333333 0-147.2 87.466667-270.933333 215.466666-322.133333z"
        fill={getIconColor(color, 14, '#45413C')}
      />
      <path
        d="M309.333333 200.533333m-181.333333 0a181.333333 181.333333 0 1 0 362.666667 0 181.333333 181.333333 0 1 0-362.666667 0Z"
        fill={getIconColor(color, 15, '#FFFACF')}
      />
      <path
        d="M309.333333 347.733333c93.866667 0 170.666667-72.533333 179.2-164.266666v17.066666c0 100.266667-81.066667 181.333333-181.333333 181.333334-98.133333 0-179.2-81.066667-179.2-181.333334v-17.066666c8.533333 91.733333 87.466667 164.266667 181.333333 164.266666z"
        fill={getIconColor(color, 16, '#FFE500')}
      />
      <path
        d="M309.333333 76.8c-89.6 0-164.266667 66.133333-179.2 153.6-2.133333-10.666667-2.133333-19.2-2.133333-29.866667C128 100.266667 209.066667 19.2 309.333333 19.2S490.666667 100.266667 490.666667 200.533333c0 10.666667 0 19.2-2.133334 27.733334-14.933333-85.333333-89.6-151.466667-179.2-151.466667z"
        fill={getIconColor(color, 17, '#FFFFFF')}
      />
    </svg>
  );
};

IconEmoji39.defaultProps = {
  size: 96,
};

export default IconEmoji39;
