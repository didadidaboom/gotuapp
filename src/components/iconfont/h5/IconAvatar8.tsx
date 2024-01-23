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

const IconAvatar8: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M384.753921 577.211211c0 51.586912-15.172561 93.453439-33.873482 93.453439-18.714224 0-33.876552-41.86755-33.876552-93.453439 0-51.615565 15.162328-93.453439 33.876552-93.453439C369.58136 483.756749 384.753921 525.595646 384.753921 577.211211z"
        fill={getIconColor(color, 0, '#F97316')}
      />
      <path
        d="M702.469006 577.211211c0 51.586912-15.162328 93.453439-33.863249 93.453439-18.714224 0-33.873482-41.86755-33.873482-93.453439 0-51.615565 15.159258-93.453439 33.873482-93.453439C687.306678 483.756749 702.469006 525.595646 702.469006 577.211211z"
        fill={getIconColor(color, 1, '#F97316')}
      />
      <path
        d="M508.555551 123.996059c-212.869179 0-385.462049 172.543751-385.462049 385.465119 0 212.869179 172.593893 385.462049 385.462049 385.462049 212.894761 0 385.478422-172.593893 385.478422-385.462049C894.033973 296.53981 721.450313 123.996059 508.555551 123.996059zM508.555551 850.542436c-188.381461 0-341.081259-152.711054-341.081259-341.081259 0-13.956873 1.089821-27.655873 2.718925-41.147142 45.071522-22.472827 140.589992-80.473823 163.512051-176.468131 0 0 197.732433 231.698013 509.033435 148.941194 4.541433 22.165836 6.92676 45.150316 6.92676 68.674079C849.665463 697.831382 696.952362 850.542436 508.555551 850.542436z"
        fill={getIconColor(color, 2, '#F97316')}
      />
    </svg>
  );
};

IconAvatar8.defaultProps = {
  size: 96,
};

export default IconAvatar8;
