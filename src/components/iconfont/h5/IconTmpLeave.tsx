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

const IconTmpLeave: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 64c-247.414784 0-448.00512 200.577024-448.00512 448.00512C63.99488 759.427072 264.585216 960 512 960c247.430144 0 448.00512-200.572928 448.00512-447.99488C960.00512 264.577024 759.430144 64 512 64z m156.575744 537.632768l-175.960064 0.008192a22.452224 22.452224 0 0 1-3.255296 0.237568c-12.38016 0-22.401024-10.034176-22.401024-22.395904l-0.009216-335.971328c0-12.372992 10.153984-22.40512 22.524928-22.40512 12.377088 0 22.524928 10.020864 22.524928 22.40512V557.056h156.58496c12.358656 0 22.391808 9.925632 22.391808 22.28224 0 12.372992-10.033152 22.294528-22.401024 22.294528z"
        fill={getIconColor(color, 0, '#F97316')}
      />
    </svg>
  );
};

IconTmpLeave.defaultProps = {
  size: 96,
};

export default IconTmpLeave;
