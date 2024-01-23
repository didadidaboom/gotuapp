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

const IconNanshizhuanqu: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M893.69 540.33c18.67-3.7 32.76-20.17 32.76-39.93V163.19c0-22.48-18.23-40.71-40.71-40.71H413.02c-14.08 0-27.17 7.28-34.59 19.24l-35 56.4a40.704 40.704 0 0 1-34.59 19.24H170.65c-22.48 0-40.71 18.23-40.71 40.71v254.54c0 15.51 8.67 28.98 21.42 35.86-14.31 12.72-23.34 31.26-23.34 51.91 0 38.36 31.09 69.45 69.45 69.45 5.76 0 11.35-0.71 16.7-2.03 9.69 162.75 144.73 291.76 309.91 291.76 166.04 0 301.64-130.34 310.07-294.28a69.358 69.358 0 0 0 24.74 4.56c38.66 0 69.94-31.59 69.44-70.36-0.3-25.09-14.17-47.21-34.64-59.15z m-680.09-7.49c-0.58-0.14-1.16-0.27-1.74-0.39 0.64-1.14 1.22-2.31 1.74-3.51v3.9z m219.31-356.55c0-11 9-20 20-20h111.17c11 0 20 9 20 20v4.46c0 11-9 20-20 20H452.91c-11 0-20-9-20-20v-4.46z m194.72 591.68c0 24.8-20.29 45.09-45.09 45.09H444.45c-24.8 0-45.09-20.29-45.09-45.09 0-24.8 20.29-45.09 45.09-45.09h138.09c24.8 0 45.09 20.29 45.09 45.09z"
        fill={getIconColor(color, 0, '#FFFA9F')}
      />
      <path
        d="M838.82 491.89h9.02c26.47 0 48-21.53 48-48V112.58c0-26.47-21.53-48-48-48H383.41c-16.72 0-31.97 8.48-40.78 22.69l-34.39 55.41c-5.88 9.47-16.04 15.13-27.19 15.13H145.27c-26.47 0-48 21.53-48 48v250.08c0 21.48 14.18 39.71 33.67 45.81-21.34 13.53-35.55 37.34-35.55 64.42 0 42.04 34.2 76.23 76.23 76.23 3.03 0 6.07-0.18 9.08-0.54 14.18 160.64 149.43 285.2 311.82 285.2 80.77 0 157.45-30.67 215.91-86.37 55.79-53.15 89.65-123.91 96.04-200.2a76.287 76.287 0 0 0 17.01 1.92c20.55 0 39.82-8.05 54.25-22.68 14.43-14.62 22.24-34 21.97-54.56-0.44-35.54-25.37-65.43-58.88-73.23z m-725.55-36V205.81c0-17.65 14.35-32 32-32h135.77c16.72 0 31.97-8.48 40.78-22.69l34.39-55.41c5.88-9.47 16.04-15.13 27.19-15.13h464.44c17.64 0 32 14.35 32 32v331.31c0 17.65-14.36 32-32 32h-42.43L692.7 292.97c-7.54-12.23-20.02-20.38-34.25-22.36-2.41-0.34-4.81-0.47-7.2-0.45a47.838 47.838 0 0 0-35.19 12.45l-102.48 93.53a31.95 31.95 0 0 1-21.57 8.37H227.47c-26.47 0-48 21.53-48 48v37.63c-5.25 10.51-16.11 17.76-28.64 17.76h-5.55c-17.65-0.01-32.01-14.36-32.01-32.01z m751.09 152.56c-11.41 11.56-26.63 17.92-42.87 17.92-7.37 0-14.59-1.33-21.46-3.95l-10.28-3.92-0.57 10.98c-3.91 76.04-36.51 146.92-91.79 199.59-55.47 52.85-128.23 81.95-204.88 81.95-156.95 0-287.19-122.61-296.51-279.13l-0.57-9.6-9.33 2.31a60.563 60.563 0 0 1-14.49 1.77c-33.21 0-60.23-27.02-60.23-60.23 0-33.21 27.02-60.23 60.23-60.23 4.68 0 9.38 0.56 13.99 1.65l9.85 2.34v-36.4a47.68 47.68 0 0 0 3.36-17.6v-23.31c0-8.56 3.34-16.6 9.39-22.65 6.04-6.03 14.07-9.35 22.61-9.35h0.06l264.39 0.48h0.09c12.04 0 23.55-4.48 32.43-12.62l102.42-93.88a31.903 31.903 0 0 1 20.68-8.4 31.923 31.923 0 0 1 24.78 15.11l109.17 177.17a31.99 31.99 0 0 1 4.76 16.79v18.52l10.8-4.04c7.67-2.87 15.76-4.13 24.01-3.74 31.73 1.5 56.91 27.58 57.32 59.37 0.21 16.23-5.96 31.54-17.36 43.1z"
        fill={getIconColor(color, 1, '#00AC97')}
      />
      <path
        d="M356.15 478.35c-37.38 0-67.79 30.41-67.79 67.79 0 4.42 3.58 8 8 8s8-3.58 8-8c0-28.56 23.23-51.79 51.79-51.79s51.79 23.23 51.79 51.79c0 4.42 3.58 8 8 8s8-3.58 8-8c-0.01-37.38-30.42-67.79-67.79-67.79zM636.98 478.35c-37.38 0-67.79 30.41-67.79 67.79 0 4.42 3.58 8 8 8s8-3.58 8-8c0-28.56 23.23-51.79 51.79-51.79s51.79 23.23 51.79 51.79c0 4.42 3.58 8 8 8s8-3.58 8-8c-0.01-37.38-30.42-67.79-67.79-67.79z"
        fill={getIconColor(color, 2, '#00AC97')}
      />
      <path
        d="M565.6 802.06H427.52c-29.27 0-53.09-23.81-53.09-53.09 0-29.27 23.81-53.09 53.09-53.09H565.6c29.27 0 53.09 23.81 53.09 53.09 0 29.27-23.81 53.09-53.09 53.09z m-138.08-90.18c-20.45 0-37.09 16.64-37.09 37.09 0 20.45 16.64 37.09 37.09 37.09H565.6c20.45 0 37.09-16.64 37.09-37.09 0-20.45-16.64-37.09-37.09-37.09H427.52z"
        fill={getIconColor(color, 3, '#00AC97')}
      />
      <path
        d="M550.15 187.01H438.97c-14.34 0-26-11.66-26-26v-4.46c0-14.34 11.66-26 26-26h111.17c14.34 0 26 11.66 26 26v4.46c0.01 14.34-11.66 26-25.99 26z m-111.18-44.46c-7.72 0-14 6.28-14 14v4.46c0 7.72 6.28 14 14 14h111.17c7.72 0 14-6.28 14-14v-4.46c0-7.72-6.28-14-14-14H438.97z"
        fill={getIconColor(color, 4, '#F09595')}
      />
    </svg>
  );
};

IconNanshizhuanqu.defaultProps = {
  size: 96,
};

export default IconNanshizhuanqu;