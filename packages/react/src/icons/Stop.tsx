import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M9.01 2.25h5.98c4.8 0 6.76 1.96 6.76 6.76v5.98c0 4.8-1.96 6.76-6.76 6.76h-5.98c-4.8 0-6.76-1.96-6.76-6.76v-5.98c0-4.8 1.96-6.76 6.76-6.76z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<rect x=\"2.25\" y=\"2.25\" width=\"19.5\" height=\"19.5\" rx=\"0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<rect x=\"2.25\" y=\"2.25\" width=\"19.5\" height=\"19.5\" rx=\"2.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M8.98 1.50L7.78 1.55L6.67 1.69L5.66 1.93L4.80 2.26L4 2.72L3.30 3.30L2.72 4L2.23 4.86L1.90 5.76L1.69 6.67L1.54 7.84L1.50 9.01L1.50 14.99L1.55 16.22L1.69 17.33L1.93 18.34L2.26 19.20L2.72 20L3.25 20.65L4 21.28L4.86 21.77L5.76 22.10L6.75 22.33L7.84 22.46L9.01 22.50L14.99 22.50L16.16 22.46L17.25 22.33L18.24 22.10L19.20 21.74L20 21.28L20.65 20.75L21.28 20L21.77 19.14L22.10 18.24L22.33 17.25L22.46 16.16L22.50 14.99L22.50 9.01L22.46 7.84L22.33 6.75L22.10 5.76L21.74 4.80L21.24 3.95L20.70 3.30L20.05 2.76L19.20 2.26L18.24 1.90L17.25 1.67L16.16 1.54L14.99 1.50Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M1.50 1.50L1.50 22.50L22.50 22.50L22.50 1.50Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M19.15 1.50L4.79 1.50L4.33 1.54L3.87 1.65L3.33 1.87L2.83 2.18L2.48 2.48L2.18 2.83L1.87 3.33L1.66 3.81L1.54 4.33L1.50 4.79L1.50 19.15L1.55 19.73L1.66 20.19L1.87 20.67L2.18 21.17L2.48 21.52L2.83 21.82L3.33 22.13L3.81 22.34L4.33 22.46L4.79 22.50L19.15 22.50L19.67 22.46L20.13 22.35L20.67 22.13L21.17 21.82L21.52 21.52L21.82 21.17L22.13 20.67L22.34 20.19L22.46 19.67L22.50 19.15L22.50 4.85L22.46 4.33L22.34 3.81L22.13 3.33L21.86 2.88L21.48 2.44L21.12 2.14L20.72 1.89L20.24 1.68L19.67 1.54Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M9.01 2.25h5.98c4.8 0 6.76 1.96 6.76 6.76v5.98c0 4.8-1.96 6.76-6.76 6.76h-5.98c-4.8 0-6.76-1.96-6.76-6.76v-5.98c0-4.8 1.96-6.76 6.76-6.76z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M9.01 2.25h5.98c4.8 0 6.76 1.96 6.76 6.76v5.98c0 4.8-1.96 6.76-6.76 6.76h-5.98c-4.8 0-6.76-1.96-6.76-6.76v-5.98c0-4.8 1.96-6.76 6.76-6.76z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<rect x=\"2.25\" y=\"2.25\" width=\"19.5\" height=\"19.5\" rx=\"2.6\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <rect x=\"2.25\" y=\"2.25\" width=\"19.5\" height=\"19.5\" rx=\"2.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M9.01 2.25h5.98c4.8 0 6.76 1.96 6.76 6.76v5.98c0 4.8-1.96 6.76-6.76 6.76h-5.98c-4.8 0-6.76-1.96-6.76-6.76v-5.98c0-4.8 1.96-6.76 6.76-6.76z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M9.01 2.25h5.98c4.8 0 6.76 1.96 6.76 6.76v5.98c0 4.8-1.96 6.76-6.76 6.76h-5.98c-4.8 0-6.76-1.96-6.76-6.76v-5.98c0-4.8 1.96-6.76 6.76-6.76z\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Stop = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Stop.displayName = 'Stop';
