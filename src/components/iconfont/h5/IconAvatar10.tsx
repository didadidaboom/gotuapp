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

const IconAvatar10: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M389.541971 577.412802c0 51.189869-15.045671 92.734054-33.615609 92.734054-18.556635 0-33.612539-41.545208-33.612539-92.734054 0-51.218522 15.055904-92.734054 33.612539-92.734054C374.4963 484.678748 389.541971 526.195304 389.541971 577.412802z"
        fill={getIconColor(color, 0, '#F97316')}
      />
      <path
        d="M704.808284 577.412802c0 51.189869-15.045671 92.734054-33.602306 92.734054s-33.599236-41.545208-33.599236-92.734054c0-51.218522 15.042601-92.734054 33.599236-92.734054S704.808284 526.195304 704.808284 577.412802z"
        fill={getIconColor(color, 1, '#F97316')}
      />
      <path
        d="M512.401136 127.687124c-211.243145 0-382.494461 171.2155-382.494461 382.497531 0 211.229842 171.251316 382.494461 382.494461 382.494461 211.256448 0 382.510834-171.264619 382.510834-382.494461C894.91197 298.902624 723.657584 127.687124 512.401136 127.687124zM512.401136 848.64011c-186.930413 0-338.468758-151.535275-338.468758-338.455455 0-1.832741 0.26606-3.589758 0.279363-5.39794l178.673355-174.546362L850.606905 515.37691C847.791789 699.879018 697.577602 848.64011 512.401136 848.64011z"
        fill={getIconColor(color, 2, '#F97316')}
      />
    </svg>
  );
};

IconAvatar10.defaultProps = {
  size: 96,
};

export default IconAvatar10;
