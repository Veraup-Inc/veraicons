import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M5.89 7l12.22 10l-6.11 5v-20l6.11 5l-12.22 10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M5.89 7l12.22 10l-6.11 5v-20l6.11 5l-12.22 10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M5.89 7l12.22 10l-6.11 5v-20l6.11 5l-12.22 10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M5.70 8.27L10.26 12L5.11 16.22L4.92 16.48L4.81 16.78L4.80 17.11L4.87 17.42L4.97 17.61L5.19 17.85L5.37 17.97L5.57 18.05L5.78 18.09L6 18.09L6.21 18.05L6.41 17.97L6.59 17.85L10.90 14.32L10.91 22.11L10.95 22.32L11.09 22.61L11.22 22.78L11.39 22.91L11.68 23.05L12 23.10L12.32 23.05L12.61 22.92L18.81 17.85L19.02 17.61L19.16 17.32L19.20 17.11L19.20 16.89L19.16 16.68L19.08 16.48L18.89 16.22L13.74 12L18.89 7.78L19.08 7.52L19.19 7.21L19.20 6.89L19.13 6.58L18.96 6.30L18.81 6.15L12.61 1.08L12.42 0.98L12.11 0.91L11.78 0.92L11.58 0.98L11.39 1.09L11.15 1.30L11.03 1.48L10.92 1.79L10.90 2L10.90 9.68L6.59 6.15L6.41 6.03L6.10 5.92L5.89 5.90L5.67 5.92L5.47 5.98L5.28 6.09L5.11 6.22L4.97 6.39L4.87 6.58L4.81 6.79L4.79 7L4.81 7.22L4.87 7.42L4.98 7.61L5.19 7.85ZM13.10 9.68L13.10 4.32L16.37 7ZM13.10 14.32L16.37 17L13.10 19.68Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M5.70 8.27L10.26 12L5.19 16.15L6.59 17.85L10.90 14.32L10.90 23.91L11.22 24.06L19.85 17L13.74 12L19.85 7L11.22 -0.06L10.90 0.09L10.90 9.68L6.59 6.15L5.19 7.85ZM13.10 9.68L13.10 4.32L16.37 7ZM13.10 14.32L16.37 17L13.10 19.68Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M5.70 8.27L10.26 12L4.34 16.85L5.74 18.55L10.90 14.32L10.91 22.11L10.95 22.32L11.09 22.61L11.22 22.78L11.39 22.91L11.68 23.05L12 23.10L12.32 23.05L12.61 22.92L18.81 17.85L19.02 17.61L19.16 17.32L19.20 17.11L19.20 16.89L19.16 16.68L19.08 16.48L18.89 16.22L13.74 12L18.89 7.78L19.08 7.52L19.19 7.21L19.20 6.89L19.13 6.58L18.96 6.30L18.81 6.15L12.61 1.08L12.42 0.98L12.11 0.91L11.78 0.92L11.58 0.98L11.39 1.09L11.15 1.30L11.03 1.48L10.92 1.79L10.90 2L10.90 9.68L5.74 5.45L4.34 7.15ZM13.10 9.68L13.10 4.32L16.37 7ZM13.10 14.32L16.37 17L13.10 19.68Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M5.89 7l12.22 10l-6.11 5v-20l6.11 5l-12.22 10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M5.89 7l12.22 10l-6.11 5v-20l6.11 5l-12.22 10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M5.89 7l12.22 10l-6.11 5v-20l6.11 5l-12.22 10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M5.89 7l12.22 10l-6.11 5v-20l6.11 5l-12.22 10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
};

export const Bluetooth = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Bluetooth.displayName = 'Bluetooth';
