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

const IconAvatar7: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M515.998057 127.949091c-211.403804 0-382.78508 171.34546-382.78508 382.78815 0 211.390501 171.382299 382.78508 382.78508 382.78508 211.416084 0 382.78815-171.394578 382.78815-382.78508C898.786207 299.29455 727.415165 127.949091 515.998057 127.949091zM515.998057 849.449545c-187.072653 0-338.712305-151.649885-338.712305-338.712305 0-26.391067 3.310396-51.943023 9.018398-76.552513l169.609932 0L402.316925 322.809103l0 109.056811 227.365334 0L629.682259 322.809103l46.40182 111.375623L845.695035 434.184727c5.708002 24.609491 9.030677 50.161447 9.030677 76.552513C854.726735 697.79966 703.07378 849.449545 515.998057 849.449545z"
        fill={getIconColor(color, 0, '#F97316')}
      />
      <path
        d="M393.032468 578.016553c0 51.228755-15.043624 92.804662-33.627888 92.804662-18.570961 0-33.638121-41.575908-33.638121-92.804662 0-51.257407 15.06716-92.804662 33.638121-92.804662C377.988844 485.21189 393.032468 526.759145 393.032468 578.016553z"
        fill={getIconColor(color, 1, '#F97316')}
      />
      <path
        d="M708.564841 578.016553c0 51.228755-15.07023 92.804662-33.641191 92.804662-18.584264 0-33.638121-41.575908-33.638121-92.804662 0-51.257407 15.053857-92.804662 33.638121-92.804662C693.494611 485.21189 708.564841 526.759145 708.564841 578.016553z"
        fill={getIconColor(color, 2, '#F97316')}
      />
    </svg>
  );
};

IconAvatar7.defaultProps = {
  size: 96,
};

export default IconAvatar7;
