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

const IconIconUserImg: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M510.919389 63.950498c247.345388 0 447.860191 200.514803 447.86019 447.861214 0 247.348458-200.514803 447.861214-447.86019 447.861214-247.348458 0-447.863261-200.51378-447.863261-447.861214 0-247.345388 200.514803-447.861214 447.863261-447.861214z"
        fill={getIconColor(color, 0, '#EEEEEE')}
      />
      <path
        d="M510.919389 515.965312c79.150688 0 143.314033-64.425312 143.314033-143.899365 0-79.473029-64.163345-143.898341-143.314033-143.898341-79.151711 0-143.317103 64.425312-143.317103 143.898341-0.001023 79.475076 64.164369 143.899364 143.317103 143.899365z m221.060744 175.867449l1.068332-0.402159c-35.032888-88.682785-121.280204-151.399175-222.129076-151.399175-99.597369 0-184.944176 61.173245-220.793662 148.112316l0.494257 0.200568a35.121915 35.121915 0 0 0-2.565429 13.20065c0 19.475564 15.798824 35.266202 35.291784 35.266201 14.758122 0 27.392884-9.05626 32.661887-21.906939l0.575099 0.233314c25.224498-60.507072 84.822874-103.028515 154.336064-103.028515 70.109778 0 130.129756 43.259246 154.97256 104.59622l0.252757-0.095168c5.65479 11.939937 17.815761 20.201088 31.912827 20.201088 19.48989 0 35.289738-15.789615 35.289738-35.266201a35.281551 35.281551 0 0 0-1.367138-9.7122z"
        fill={getIconColor(color, 1, '#CCCCCC')}
      />
    </svg>
  );
};

IconIconUserImg.defaultProps = {
  size: 96,
};

export default IconIconUserImg;
