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

const IconCredit: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M874.666667 725.333333c0-16.426667 21.333333-44.586667 21.333333-106.666666 0-250.24-131.413333-310.826667-131.413333-327.68 0 0 24.746667-2.986667 24.746666-45.653334C789.333333 209.92 768 170.666667 512 170.666667v746.666666c188.586667 0 405.333333-59.52 405.333333-106.666666 0-42.666667-42.666667-37.76-42.666666-85.333334zM149.333333 704c0-16.426667-21.333333-95.36-21.333333-157.44 0-188.586667 128-254.293333 131.413333-256S234.666667 288 234.666667 245.333333C234.666667 209.92 256 170.666667 512 170.666667v746.666666c-188.586667 0-405.333333-59.52-405.333333-106.666666 0-42.666667 42.666667-59.093333 42.666666-106.666667z"
        fill={getIconColor(color, 0, '#F97316')}
      />
      <path
        d="M764.586667 290.986667S789.333333 288 789.333333 245.333333a54.613333 54.613333 0 0 0-1.706666-14.293333 206.933333 206.933333 0 0 0-68.906667-44.586667A967.253333 967.253333 0 0 0 512 170.666667c-87.466667 0-244.266667 114.773333-257.706667 123.093333 65.706667 90.24 30.08 129.706667 156.373334 146.346667 37.973333 5.12 101.333333-23.68 149.333333-23.68a234.666667 234.666667 0 0 0 93.866667-13.44c38.613333-11.52 48.853333-50.346667 68.266666-71.253334s58.88-13.866667 42.453334-40.746666z"
        fill={getIconColor(color, 1, '#F97316')}
      />
      <path
        d="M213.333333 245.333333c0 44.586667 55.893333 47.573333 72.533334 65.066667S304 384 395.946667 384c40.746667 0 77.866667-42.666667 112-42.666667 21.333333 0 87.68 21.333333 110.72 21.333334 44.8 0 60.373333-50.773333 85.333333-61.44s106.666667 1.066667 106.666667-55.893334C810.666667 192 676.906667 149.333333 512 149.333333s-298.666667 42.666667-298.666667 96z"
        fill={getIconColor(color, 2, '#F97316')}
      />
      <path
        d="M725.333333 224c0 30.08-32.64 24.32-67.2 36.48a206.933333 206.933333 0 0 1-65.706666 21.333333c-21.333333 1.92-56.32-5.546667-80.426667-5.546666-42.666667 0-91.093333 22.4-124.373333 17.066666-59.093333-8.533333-88.96-50.56-88.96-69.333333C298.666667 194.56 394.24 170.666667 512 170.666667s213.333333 23.893333 213.333333 53.333333z"
        fill={getIconColor(color, 3, '#C62828')}
      />
      <path
        d="M416 192l-81.493333 81.493333a128 128 0 0 0 53.12 21.333334c30.72 4.906667 74.453333-13.44 114.346666-16.426667z"
        fill={getIconColor(color, 4, '#00BCD4')}
      />
      <path
        d="M640 192l-128 42.666667 1.92 9.813333 11.52 32.853333a524.16 524.16 0 0 0 66.986667 4.906667 206.933333 206.933333 0 0 0 65.706666-21.333333 366.293333 366.293333 0 0 1 40.533334-9.813334z"
        fill={getIconColor(color, 5, '#BA68C8')}
      />
      <path
        d="M522.666667 213.333333a74.88 74.88 0 0 0-74.666667 74.24 293.973333 293.973333 0 0 1 64-10.24c24.106667 0 58.88 7.466667 80.426667 5.546667h4.266666A74.453333 74.453333 0 0 0 522.666667 213.333333z"
        fill={getIconColor(color, 6, '#FFA726')}
      />
    </svg>
  );
};

IconCredit.defaultProps = {
  size: 96,
};

export default IconCredit;
