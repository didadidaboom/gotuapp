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

const IconAvatar6: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M388.163577 579.436902c0 51.241035-15.071254 92.828198-33.659611 92.828198-18.578124 0-33.636075-41.587164-33.636075-92.828198 0-51.269687 15.057951-92.828198 33.636075-92.828198C373.092323 486.608703 388.163577 528.167215 388.163577 579.436902z"
        fill={getIconColor(color, 0, '#F97316')}
      />
      <path
        d="M703.750185 579.436902c0 51.241035-15.045671 92.828198-33.647331 92.828198-18.576077 0-33.636075-41.587164-33.636075-92.828198 0-51.269687 15.061021-92.828198 33.636075-92.828198C688.705538 486.608703 703.750185 528.167215 703.750185 579.436902z"
        fill={getIconColor(color, 1, '#F97316')}
      />
      <path
        d="M511.150656 129.254829c-211.458039 0-382.883317 171.389462-382.883317 382.886387 0 211.444736 171.425278 382.883317 382.883317 382.883317s382.883317-171.438581 382.883317-382.883317C894.033973 300.644291 722.607672 129.254829 511.150656 129.254829zM511.150656 850.940502c-111.965048 0-210.948433-54.555523-272.627191-138.26197L238.523465 434.498882 773.418918 434.498882l0 288.883433 0.138146-0.153496 0 2.676969C711.471031 802.12061 617.114013 850.940502 511.150656 850.940502z"
        fill={getIconColor(color, 2, '#F97316')}
      />
    </svg>
  );
};

IconAvatar6.defaultProps = {
  size: 96,
};

export default IconAvatar6;
