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

const IconGonggao: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M290.309 334.692l212.978-212.978 25.526 25.526-212.978 212.978z"
        fill={getIconColor(color, 0, '#FFDAA8')}
      />
      <path
        d="M501.213 143.946l25.527-25.526 212.978 212.978-25.526 25.526z"
        fill={getIconColor(color, 1, '#FFDAA8')}
      />
      <path
        d="M78.3 319.3h867.4c33.3 0 60.2 27 60.2 60.2v475.9c0 33.3-27 60.2-60.2 60.2H78.3c-33.3 0-60.2-27-60.2-60.2V379.5c0-33.2 26.9-60.2 60.2-60.2z"
        fill={getIconColor(color, 2, '#FF822E')}
      />
      <path
        d="M945.7 933.7H78.3C35.1 933.7 0 898.6 0 855.4V379.5c0-43.2 35.1-78.3 78.3-78.3h867.4c43.2 0 78.3 35.1 78.3 78.3v475.9c0 43.2-35.1 78.3-78.3 78.3zM78.3 337.4c-23.2 0-42.2 18.9-42.2 42.2v475.9c0 23.2 18.9 42.2 42.2 42.2h867.4c23.2 0 42.2-18.9 42.2-42.2v-476c0-23.2-18.9-42.2-42.2-42.2H78.3z"
        fill={getIconColor(color, 3, '#FFDAA8')}
      />
      <path
        d="M512 135.6m-75.3 0a75.3 75.3 0 1 0 150.6 0 75.3 75.3 0 1 0-150.6 0Z"
        fill={getIconColor(color, 4, '#FF822E')}
      />
      <path
        d="M194.5 629.5L275 426.2h-97.4l-83 203.3h99.9z m311.2 0l-77.6-203.2h-92.8L410 629.5h95.7zM132.1 820L380 786.7l10.5 32h99.9l-58.6-164.4H337l34.2 105-121.4 16 86.4-224.7H240l-93.2 238.2-21.9 3 7.2 28.2z m791-204.5v-27.8H792V508h96.1v-29.1H792v-60.7H684v60.7h-33.7l9.7-46h-91.9L538.6 567h93.2l12.2-59h40v79.7H526.3v27.8h396.8zM894 820.9V675.4c0-7.3-2.6-13.6-7.8-18.8-5.2-5.2-11.3-7.8-18.3-7.8H558v172h336z m-103.7-28.3H661.7V677.9h119.7c5.9 0 8.9 3 8.9 8.9v105.8z"
        fill={getIconColor(color, 5, '#FFFFFF')}
      />
    </svg>
  );
};

IconGonggao.defaultProps = {
  size: 96,
};

export default IconGonggao;
