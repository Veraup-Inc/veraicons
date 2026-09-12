import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<rect x=\"4.5\" y=\"4.5\" width=\"15\" height=\"15\" rx=\"4.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<rect x=\"4.5\" y=\"4.5\" width=\"15\" height=\"15\" rx=\"0.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<rect x=\"4.5\" y=\"4.5\" width=\"15\" height=\"15\" rx=\"2.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M15.50 3.75L8.50 3.75L7.70 3.82L7.03 3.98L6.40 4.24L5.71 4.66L5.10 5.18L4.66 5.71L4.30 6.29L3.97 7.09L3.81 7.76L3.75 8.44L3.75 15.50L3.81 16.24L4 17.02L4.27 17.66L4.66 18.29L5.18 18.90L5.71 19.34L6.29 19.70L7.09 20.03L7.76 20.19L8.44 20.25L15.50 20.25L16.24 20.19L16.97 20.02L17.60 19.76L18.29 19.34L18.90 18.82L19.34 18.29L19.70 17.71L20.03 16.91L20.19 16.24L20.25 15.50L20.25 8.50L20.19 7.76L20.02 7.03L19.73 6.34L19.34 5.71L18.86 5.14L18.29 4.66L17.66 4.27L16.97 3.98L16.24 3.81Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M3.75 3.75L3.75 20.25L20.25 20.25L20.25 3.75Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M17.50 3.75L6.50 3.75L6.13 3.78L5.65 3.88L5.20 4.08L4.88 4.28L4.60 4.52L4.31 4.84L4.05 5.25L3.88 5.65L3.78 6.07L3.75 6.44L3.75 17.50L3.78 17.93L3.87 18.29L4.05 18.75L4.31 19.16L4.56 19.44L4.84 19.69L5.25 19.95L5.65 20.12L6.07 20.22L6.44 20.25L17.50 20.25L17.99 20.20L18.35 20.12L18.75 19.95L19.16 19.69L19.44 19.44L19.69 19.16L19.95 18.75L20.12 18.35L20.22 17.93L20.25 17.56L20.25 6.50L20.22 6.07L20.12 5.65L19.92 5.20L19.72 4.88L19.48 4.60L19.16 4.31L18.75 4.05L18.35 3.88L17.93 3.78Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<rect x=\"4.5\" y=\"4.5\" width=\"15\" height=\"15\" rx=\"4.0\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <rect x=\"4.5\" y=\"4.5\" width=\"15\" height=\"15\" rx=\"4.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<rect x=\"4.5\" y=\"4.5\" width=\"15\" height=\"15\" rx=\"2.0\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <rect x=\"4.5\" y=\"4.5\" width=\"15\" height=\"15\" rx=\"2.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<rect x=\"4.5\" y=\"4.5\" width=\"15\" height=\"15\" rx=\"4.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<rect x=\"4.5\" y=\"4.5\" width=\"15\" height=\"15\" rx=\"4.0\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Stop = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Stop.displayName = 'Stop';
