import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M9.21 2h5.58c5.12 0 7.21 2.09 7.21 7.21v5.58c0 5.12-2.09 7.21-7.21 7.21h-5.58c-5.12 0-7.21-2.09-7.21-7.21v-5.58c0-5.12 2.09-7.21 7.21-7.21z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2.77\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M9.18 1.25L7.90 1.30L6.73 1.45L5.66 1.71L4.75 2.05L3.89 2.54L3.15 3.15L2.54 3.89L2.03 4.80L1.68 5.75L1.45 6.73L1.29 7.97L1.25 9.21L1.25 14.79L1.30 16.10L1.45 17.27L1.71 18.34L2.05 19.25L2.54 20.11L3.11 20.79L3.89 21.46L4.80 21.97L5.75 22.32L6.81 22.57L7.97 22.71L9.21 22.75L14.79 22.75L16.03 22.71L17.19 22.57L18.25 22.32L19.25 21.95L20.11 21.46L20.79 20.89L21.46 20.11L21.97 19.20L22.32 18.25L22.57 17.19L22.71 16.03L22.75 14.79L22.75 9.21L22.71 7.97L22.57 6.81L22.32 5.75L21.95 4.75L21.42 3.84L20.85 3.15L20.16 2.58L19.25 2.05L18.25 1.68L17.19 1.43L16.03 1.29L14.79 1.25Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M1.25 1.25L1.25 22.75L22.75 22.75L22.75 1.25Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M19.23 1.25L4.77 1.25L4.28 1.29L3.69 1.42L3.12 1.66L2.70 1.92L2.33 2.24L1.96 2.66L1.63 3.17L1.42 3.69L1.29 4.22L1.25 4.72L1.25 19.23L1.29 19.78L1.41 20.26L1.63 20.83L1.96 21.34L2.28 21.72L2.66 22.04L3.17 22.37L3.69 22.58L4.22 22.71L4.72 22.75L19.23 22.75L19.83 22.70L20.31 22.58L20.83 22.37L21.34 22.04L21.72 21.72L22.04 21.34L22.37 20.83L22.58 20.31L22.71 19.78L22.75 19.23L22.75 4.78L22.71 4.22L22.58 3.69L22.37 3.17L22.08 2.70L21.67 2.24L21.25 1.89L20.83 1.63L20.37 1.44L19.78 1.29Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M9.21 2h5.58c5.12 0 7.21 2.09 7.21 7.21v5.58c0 5.12-2.09 7.21-7.21 7.21h-5.58c-5.12 0-7.21-2.09-7.21-7.21v-5.58c0-5.12 2.09-7.21 7.21-7.21z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M9.21 2h5.58c5.12 0 7.21 2.09 7.21 7.21v5.58c0 5.12-2.09 7.21-7.21 7.21h-5.58c-5.12 0-7.21-2.09-7.21-7.21v-5.58c0-5.12 2.09-7.21 7.21-7.21z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2.77\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2.77\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M9.21 2h5.58c5.12 0 7.21 2.09 7.21 7.21v5.58c0 5.12-2.09 7.21-7.21 7.21h-5.58c-5.12 0-7.21-2.09-7.21-7.21v-5.58c0-5.12 2.09-7.21 7.21-7.21z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M9.21 2h5.58c5.12 0 7.21 2.09 7.21 7.21v5.58c0 5.12-2.09 7.21-7.21 7.21h-5.58c-5.12 0-7.21-2.09-7.21-7.21v-5.58c0-5.12 2.09-7.21 7.21-7.21z\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Square = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Square.displayName = 'Square';
