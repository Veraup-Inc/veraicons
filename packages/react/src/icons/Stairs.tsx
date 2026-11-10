import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M2 22v-4.45h5.56v-4.44h5.55v-4.44h5.56v-4.45h3.33v17.78z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M2 22v-4.45h5.56v-4.44h5.55v-4.44h5.56v-4.45h3.33v17.78z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M2 22v-4.45h5.56v-4.44h5.55v-4.44h5.56v-4.45h3.33v17.78z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M1.25 22L1.31 22.29L1.47 22.53L1.71 22.69L2 22.75L22 22.75L22.29 22.69L22.48 22.58L22.58 22.48L22.69 22.29L22.75 22L22.75 4.22L22.69 3.93L22.58 3.74L22.35 3.56L22.15 3.48L22 3.47L18.67 3.47L18.45 3.50L18.19 3.64L18.01 3.87L17.92 4.15L17.92 7.92L13.11 7.92L12.82 7.98L12.63 8.09L12.45 8.32L12.36 8.60L12.36 12.36L7.56 12.36L7.27 12.42L7.08 12.53L6.90 12.76L6.81 13.04L6.81 16.80L2 16.80L1.71 16.86L1.52 16.97L1.34 17.20L1.25 17.48Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M1.25 22.75L22.75 22.75L22.75 3.47L17.92 3.47L17.92 7.92L12.36 7.92L12.36 12.36L6.81 12.36L6.81 16.80L1.25 16.80Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M1.25 22L1.31 22.29L1.47 22.53L1.71 22.69L2 22.75L22 22.75L22.29 22.69L22.48 22.58L22.58 22.48L22.69 22.29L22.75 22L22.75 4.22L22.69 3.93L22.58 3.74L22.35 3.56L22.15 3.48L22 3.47L18.67 3.47L18.45 3.50L18.19 3.64L18.01 3.87L17.92 4.15L17.92 7.92L13.11 7.92L12.82 7.98L12.63 8.09L12.45 8.32L12.36 8.60L12.36 12.36L7.56 12.36L7.27 12.42L7.08 12.53L6.90 12.76L6.81 13.04L6.81 16.80L2 16.80L1.71 16.86L1.52 16.97L1.34 17.20L1.25 17.48Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M2 22v-4.45h5.56v-4.44h5.55v-4.44h5.56v-4.45h3.33v17.78zz\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M2 22v-4.45h5.56v-4.44h5.55v-4.44h5.56v-4.45h3.33v17.78z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M2 22v-4.45h5.56v-4.44h5.55v-4.44h5.56v-4.45h3.33v17.78zz\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M2 22v-4.45h5.56v-4.44h5.55v-4.44h5.56v-4.45h3.33v17.78z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M2 22v-4.45h5.56v-4.44h5.55v-4.44h5.56v-4.45h3.33v17.78z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M2 22v-4.45h5.56v-4.44h5.55v-4.44h5.56v-4.45h3.33v17.78zz\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Stairs = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Stairs.displayName = 'Stairs';
