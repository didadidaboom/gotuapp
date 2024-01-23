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

const IconAvatar3: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M387.206786 581.955258c0 51.426253-15.115256 93.16282-33.783431 93.16282-18.61701 0-33.754778-41.736567-33.754778-93.16282 0-51.454906 15.138792-93.16282 33.754778-93.16282C372.09153 488.792439 387.206786 530.500353 387.206786 581.955258z"
        fill={getIconColor(color, 0, '#F97316')}
      />
      <path
        d="M703.930287 581.955258c0 51.426253-15.112186 93.16282-33.754778 93.16282-18.645662 0-33.757848-41.736567-33.757848-93.16282 0-51.454906 15.112186-93.16282 33.757848-93.16282C688.818101 488.792439 703.930287 530.500353 703.930287 581.955258z"
        fill={getIconColor(color, 1, '#F97316')}
      />
      <path
        d="M510.649236 130.151245c-212.232682 0-384.265804 172.006516-384.265804 384.265804 0 212.206076 172.033122 384.262734 384.265804 384.262734 212.206076 0 384.262734-172.056658 384.262734-384.262734C894.91197 302.157761 722.855312 130.151245 510.649236 130.151245zM510.649236 854.436116c-187.810457 0-340.02316-152.235217-340.02316-340.02009 0-3.352351 0.382717-6.64842 0.484024-10.000771l82.473363-138.374534 122.471332 73.495898-41.964764-90.989317L529.980513 474.520387l-20.967544-105.002472 220.412992 97.970312-38.486546-80.45438 158.963455 112.216781c0.203638 5.062296 0.76748 10.07445 0.76748 15.165398C850.669326 702.199876 698.433086 854.436116 510.649236 854.436116z"
        fill={getIconColor(color, 2, '#F97316')}
      />
    </svg>
  );
};

IconAvatar3.defaultProps = {
  size: 96,
};

export default IconAvatar3;
