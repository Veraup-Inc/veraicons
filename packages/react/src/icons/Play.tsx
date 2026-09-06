import * as React from 'react';
import type { VeraIconProps } from '../types';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M7 5.4c0-1.1 1.2-1.8 2.1-1.2l10 6.6c.8.6.8 1.8 0 2.4l-10 6.6c-.9.6-2.1-.1-2.1-1.2z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M7 4l13 8-13 8z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M7 5.4c0-1.1 1.2-1.8 2.1-1.2l10 6.6c.8.6.8 1.8 0 2.4l-10 6.6c-.9.6-2.1-.1-2.1-1.2z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M6.25 5.37L6.26 18.77L6.34 19.23L6.45 19.52L6.58 19.75L6.76 20L6.93 20.18L7.16 20.37L7.37 20.50L7.64 20.63L7.88 20.71L8.36 20.77L8.62 20.76L8.93 20.69L9.37 20.51L19.51 13.83L19.84 13.54L20.03 13.31L20.16 13.11L20.30 12.80L20.42 12.36L20.45 12.03L20.42 11.64L20.30 11.20L20.16 10.89L19.96 10.60L19.71 10.34L19.51 10.17L9.37 3.49L8.93 3.31L8.62 3.24L8.36 3.23L8.06 3.26L7.81 3.31L7.53 3.42L7.31 3.53L7.06 3.70L6.88 3.86L6.68 4.10L6.54 4.31L6.40 4.59L6.32 4.84L6.26 5.16Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M6.25 2.66L6.25 21.34L21.43 12Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M6.25 5.37L6.26 18.77L6.34 19.23L6.45 19.52L6.58 19.75L6.76 20L6.93 20.18L7.16 20.37L7.37 20.50L7.64 20.63L7.88 20.71L8.36 20.77L8.62 20.76L8.93 20.69L9.37 20.51L19.51 13.83L19.84 13.54L20.03 13.31L20.16 13.11L20.30 12.80L20.42 12.36L20.45 12.03L20.42 11.64L20.30 11.20L20.16 10.89L19.96 10.60L19.71 10.34L19.51 10.17L9.37 3.49L8.93 3.31L8.62 3.24L8.36 3.23L8.06 3.26L7.81 3.31L7.53 3.42L7.31 3.53L7.06 3.70L6.88 3.86L6.68 4.10L6.54 4.31L6.40 4.59L6.32 4.84L6.26 5.16Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M7 5.4c0-1.1 1.2-1.8 2.1-1.2l10 6.6c.8.6.8 1.8 0 2.4l-10 6.6c-.9.6-2.1-.1-2.1-1.2z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M7 5.4c0-1.1 1.2-1.8 2.1-1.2l10 6.6c.8.6.8 1.8 0 2.4l-10 6.6c-.9.6-2.1-.1-2.1-1.2z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M7 5.4c0-1.1 1.2-1.8 2.1-1.2l10 6.6c.8.6.8 1.8 0 2.4l-10 6.6c-.9.6-2.1-.1-2.1-1.2z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M7 5.4c0-1.1 1.2-1.8 2.1-1.2l10 6.6c.8.6.8 1.8 0 2.4l-10 6.6c-.9.6-2.1-.1-2.1-1.2z\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Play = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Play.displayName = 'Play';
