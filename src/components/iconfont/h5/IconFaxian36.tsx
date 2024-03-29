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

const IconFaxian36: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M562.1248 559.872m-360.1408 0a360.1408 360.1408 0 1 0 720.2816 0 360.1408 360.1408 0 1 0-720.2816 0Z"
        fill={getIconColor(color, 0, '#56E5BE')}
      />
      <path
        d="M598.3232 596.0704m-323.9936 0a323.9936 323.9936 0 1 0 647.9872 0 323.9936 323.9936 0 1 0-647.9872 0Z"
        fill={getIconColor(color, 1, '#50DDB8')}
      />
      <path
        d="M635.2896 622.4896m-281.6512 0a281.6512 281.6512 0 1 0 563.3024 0 281.6512 281.6512 0 1 0-563.3024 0Z"
        fill={getIconColor(color, 2, '#42D3AD')}
      />
      <path
        d="M513.28 928.4096c-230.4512 0-417.9456-187.4944-417.9456-417.9456s187.4944-417.9456 417.9456-417.9456 417.9456 187.4944 417.9456 417.9456-187.4944 417.9456-417.9456 417.9456z m0-774.4512c-196.5568 0-356.5056 159.9488-356.5056 356.5056s159.9488 356.5056 356.5056 356.5056 356.5056-159.9488 356.5056-356.5056-159.9488-356.5056-356.5056-356.5056z"
        fill={getIconColor(color, 3, '#2E3138')}
      />
      <path
        d="M513.28 415.1808c-15.8208 0-30.72 3.9424-43.8784 10.8032L342.6816 306.688a30.73024 30.73024 0 0 0-43.4176 1.28 30.73024 30.73024 0 0 0 1.28 43.4176l126.3616 118.9376a94.6176 94.6176 0 0 0-8.96 40.0896c0 52.5312 42.752 95.2832 95.2832 95.2832s95.2832-42.752 95.2832-95.2832-42.7008-95.232-95.232-95.232z m0 129.1264c-18.688 0-33.8432-15.2064-33.8432-33.8432s15.2064-33.8432 33.8432-33.8432 33.8432 15.2064 33.8432 33.8432-15.2064 33.8432-33.8432 33.8432z"
        fill={getIconColor(color, 4, '#2E3138')}
      />
    </svg>
  );
};

IconFaxian36.defaultProps = {
  size: 96,
};

export default IconFaxian36;
