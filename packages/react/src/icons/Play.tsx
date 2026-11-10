import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M5.76 3.77c0-1.37 1.5-2.24 2.62-1.5l12.47 8.23c1 .75 1 2.25 0 3l-12.47 8.23c-1.12 .74-2.61-.13-2.61-1.5z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M5.76 2.02l16.22 9.98l-16.22 9.98z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M5.76 3.77c0-1.37 1.5-2.24 2.62-1.5l12.47 8.23c1 .75 1 2.25 0 3l-12.47 8.23c-1.12 .74-2.61-.13-2.61-1.5z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M5.01 3.74L5.03 20.43L5.12 20.95L5.26 21.31L5.39 21.56L5.61 21.86L5.80 22.06L6.08 22.29L6.31 22.44L6.63 22.59L6.90 22.67L7.25 22.74L7.47 22.75L7.76 22.73L8.13 22.66L8.62 22.46L21.26 14.13L21.64 13.80L21.86 13.52L22.01 13.30L22.18 12.94L22.32 12.42L22.35 12.03L22.32 11.58L22.18 11.06L22.01 10.70L21.74 10.31L21.44 10.02L21.26 9.87L8.62 1.54L8.13 1.34L7.76 1.27L7.47 1.25L7.10 1.28L6.83 1.34L6.49 1.47L6.25 1.59L5.95 1.80L5.75 1.98L5.51 2.26L5.35 2.50L5.19 2.83L5.10 3.11L5.02 3.50Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M5.05 0.70L5.01 0.72L5.01 16.99L5.01 23.28L5.05 23.30L23.41 12Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M5.01 3.74L5.03 20.43L5.12 20.95L5.26 21.31L5.39 21.56L5.61 21.86L5.80 22.06L6.08 22.29L6.31 22.44L6.63 22.59L6.90 22.67L7.25 22.74L7.47 22.75L7.76 22.73L8.13 22.66L8.62 22.46L21.26 14.13L21.64 13.80L21.86 13.52L22.01 13.30L22.18 12.94L22.32 12.42L22.35 12.03L22.32 11.58L22.18 11.06L22.01 10.70L21.74 10.31L21.44 10.02L21.26 9.87L8.62 1.54L8.13 1.34L7.76 1.27L7.47 1.25L7.10 1.28L6.83 1.34L6.49 1.47L6.25 1.59L5.95 1.80L5.75 1.98L5.51 2.26L5.35 2.50L5.19 2.83L5.10 3.11L5.02 3.50Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M5.76 3.77c0-1.37 1.5-2.24 2.62-1.5l12.47 8.23c1 .75 1 2.25 0 3l-12.47 8.23c-1.12 .74-2.61-.13-2.61-1.5z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M5.76 3.77c0-1.37 1.5-2.24 2.62-1.5l12.47 8.23c1 .75 1 2.25 0 3l-12.47 8.23c-1.12 .74-2.61-.13-2.61-1.5z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M5.76 3.77c0-1.37 1.5-2.24 2.62-1.5l12.47 8.23c1 .75 1 2.25 0 3l-12.47 8.23c-1.12 .74-2.61-.13-2.61-1.5z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M5.76 3.77c0-1.37 1.5-2.24 2.62-1.5l12.47 8.23c1 .75 1 2.25 0 3l-12.47 8.23c-1.12 .74-2.61-.13-2.61-1.5z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M5.76 3.77c0-1.37 1.5-2.24 2.62-1.5l12.47 8.23c1 .75 1 2.25 0 3l-12.47 8.23c-1.12 .74-2.61-.13-2.61-1.5z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M5.76 3.77c0-1.37 1.5-2.24 2.62-1.5l12.47 8.23c1 .75 1 2.25 0 3l-12.47 8.23c-1.12 .74-2.61-.13-2.61-1.5z\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Play = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Play.displayName = 'Play';
