import * as React from 'react';
import type { VeraIconProps } from '../types';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M6.5 7.5l11 9-5.5 4.5V3l5.5 4.5-11 9\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M6.5 7.5l11 9-5.5 4.5V3l5.5 4.5-11 9\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M6.5 7.5l11 9-5.5 4.5V3l5.5 4.5-11 9\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M5.72 8.28L10.26 12L5.72 15.72L5.53 15.98L5.42 16.28L5.41 16.61L5.48 16.92L5.58 17.11L5.72 17.28L5.89 17.41L6.08 17.52L6.39 17.59L6.61 17.59L6.82 17.55L7.02 17.47L7.20 17.35L10.90 14.32L10.91 21.11L10.98 21.42L11.09 21.61L11.22 21.78L11.39 21.91L11.68 22.05L12 22.10L12.32 22.05L12.61 21.92L18.20 17.35L18.41 17.11L18.55 16.82L18.59 16.61L18.59 16.39L18.52 16.08L18.41 15.89L18.28 15.72L13.74 12L18.28 8.28L18.47 8.02L18.58 7.71L18.59 7.39L18.52 7.08L18.35 6.80L18.20 6.65L12.61 2.08L12.42 1.98L12.11 1.91L11.78 1.92L11.58 1.98L11.39 2.09L11.15 2.30L10.98 2.58L10.92 2.79L10.90 3L10.90 9.68L7.20 6.65L6.92 6.48L6.71 6.42L6.50 6.40L6.28 6.42L6.08 6.48L5.89 6.59L5.72 6.72L5.58 6.89L5.48 7.08L5.42 7.29L5.40 7.50L5.42 7.72L5.53 8.02ZM13.10 9.68L13.10 5.32L15.76 7.50ZM13.10 14.32L15.76 16.50L13.10 18.68Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M5.80 8.35L10.26 12L5.80 15.65L7.20 17.35L10.90 14.32L10.90 23.32L19.24 16.50L13.74 12L19.24 7.50L10.90 0.68L10.90 9.68L7.20 6.65ZM13.10 9.68L13.10 5.32L15.76 7.50ZM13.10 14.32L15.76 16.50L13.10 18.68Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M4.95 7.65L10.26 12L4.95 16.35L6.35 18.05L10.90 14.32L10.91 21.11L10.98 21.42L11.09 21.61L11.22 21.78L11.39 21.91L11.68 22.05L12 22.10L12.32 22.05L12.61 21.92L18.20 17.35L18.41 17.11L18.55 16.82L18.59 16.61L18.59 16.39L18.52 16.08L18.41 15.89L18.28 15.72L13.74 12L18.28 8.28L18.47 8.02L18.58 7.71L18.59 7.39L18.52 7.08L18.35 6.80L18.20 6.65L12.61 2.08L12.42 1.98L12.11 1.91L11.78 1.92L11.58 1.98L11.39 2.09L11.15 2.30L10.98 2.58L10.92 2.79L10.90 3L10.90 9.68L6.35 5.95ZM13.10 9.68L13.10 5.32L15.76 7.50ZM13.10 14.32L15.76 16.50L13.10 18.68Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M6.5 7.5l11 9-5.5 4.5V3l5.5 4.5-11 9\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M6.5 7.5l11 9-5.5 4.5V3l5.5 4.5-11 9\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M6.5 7.5l11 9-5.5 4.5V3l5.5 4.5-11 9\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
};

export const Bluetooth = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Bluetooth.displayName = 'Bluetooth';
