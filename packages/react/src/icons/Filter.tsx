import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M3.68 2h16.64c1.08 0 1.73 1.3 .98 2.16l-6.06 6.92v8.22l-6.48 2.7v-10.81l-6.06-7.03c-.75-.86-.1-2.16 .98-2.16z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M2.81 2h18.38l-5.95 8.65v8.65l-6.48 2.7v-11.35z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M3.68 2h16.64c1.08 0 1.73 1.3 .98 2.16l-6.06 6.92v8.22l-6.48 2.7v-10.81l-6.06-7.03c-.75-.86-.1-2.16 .98-2.16z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M3.68 1.25L3.23 1.30L2.85 1.42L2.42 1.69L2.11 2L1.84 2.41L1.69 2.82L1.63 3.31L1.66 3.70L1.81 4.16L1.98 4.45L2.11 4.62L8.01 11.47L8.01 22L8.04 22.22L8.14 22.42L8.28 22.58L8.54 22.72L8.76 22.75L8.98 22.72L15.66 19.92L15.77 19.83L15.90 19.65L15.96 19.52L15.99 19.30L15.99 11.36L21.86 4.65L22.02 4.45L22.13 4.27L22.26 3.97L22.34 3.70L22.37 3.39L22.36 3.12L22.31 2.82L22.23 2.58L22.07 2.25L21.77 1.86L21.42 1.58L21.15 1.42L20.96 1.35L20.49 1.26Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M1.51 1.25L1.46 1.35L8.01 10.88L8.01 23.12L15.99 19.80L15.99 10.88L22.54 1.35L22.49 1.25Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M3.68 1.25L3.23 1.30L2.85 1.42L2.42 1.69L2.11 2L1.84 2.41L1.69 2.82L1.63 3.31L1.66 3.70L1.81 4.16L1.98 4.45L2.11 4.62L8.01 11.47L8.01 22L8.04 22.22L8.14 22.42L8.28 22.58L8.54 22.72L8.76 22.75L8.98 22.72L15.66 19.92L15.77 19.83L15.90 19.65L15.96 19.52L15.99 19.30L15.99 11.36L21.86 4.65L22.02 4.45L22.13 4.27L22.26 3.97L22.34 3.70L22.37 3.39L22.36 3.12L22.31 2.82L22.23 2.58L22.07 2.25L21.77 1.86L21.42 1.58L21.15 1.42L20.96 1.35L20.49 1.26Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M3.68 2h16.64c1.08 0 1.73 1.3 .98 2.16l-6.06 6.92v8.22l-6.48 2.7v-10.81l-6.06-7.03c-.75-.86-.1-2.16 .98-2.16z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M3.68 2h16.64c1.08 0 1.73 1.3 .98 2.16l-6.06 6.92v8.22l-6.48 2.7v-10.81l-6.06-7.03c-.75-.86-.1-2.16 .98-2.16z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M3.68 2h16.64c1.08 0 1.73 1.3 .98 2.16l-6.06 6.92v8.22l-6.48 2.7v-10.81l-6.06-7.03c-.75-.86-.1-2.16 .98-2.16z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M3.68 2h16.64c1.08 0 1.73 1.3 .98 2.16l-6.06 6.92v8.22l-6.48 2.7v-10.81l-6.06-7.03c-.75-.86-.1-2.16 .98-2.16z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M3.68 2h16.64c1.08 0 1.73 1.3 .98 2.16l-6.06 6.92v8.22l-6.48 2.7v-10.81l-6.06-7.03c-.75-.86-.1-2.16 .98-2.16z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M3.68 2h16.64c1.08 0 1.73 1.3 .98 2.16l-6.06 6.92v8.22l-6.48 2.7v-10.81l-6.06-7.03c-.75-.86-.1-2.16 .98-2.16z\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Filter = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Filter.displayName = 'Filter';
