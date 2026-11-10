import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M22.35 15.04a10.35 10.35 0 0 1 -13.39-13.39a10.35 10.35 0 1 0 13.39 13.39z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M22.35 15.04a10.35 10.35 0 0 1 -13.39-13.39a10.35 10.35 0 1 0 13.39 13.39z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M22.35 15.04a10.35 10.35 0 0 1 -13.39-13.39a10.35 10.35 0 1 0 13.39 13.39z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M23.10 15.04L23.07 14.82L22.93 14.56L22.69 14.37L22.41 14.29L22.18 14.31L21.20 14.63L20.30 14.84L19.39 14.96L18.46 14.99L17.54 14.93L16.63 14.78L15.74 14.55L14.87 14.23L14.04 13.83L13.25 13.35L12.51 12.80L11.82 12.18L11.20 11.49L10.65 10.75L10.17 9.96L9.77 9.13L9.45 8.26L9.22 7.37L9.07 6.46L9.01 5.54L9.04 4.61L9.16 3.70L9.37 2.80L9.67 1.89L9.71 1.67L9.68 1.45L9.55 1.19L9.40 1.04L9.20 0.94L8.99 0.90L8.70 0.95L7.09 1.72L5.50 2.86L4.24 4.11L3.21 5.55L2.36 7.25L1.84 9.01L1.61 10.89L1.68 12.67L2.04 14.40L2.72 16.17L3.66 17.75L4.90 19.19L6.25 20.34L7.77 21.25L9.48 21.92L11.33 22.32L13.23 22.39L14.99 22.16L16.69 21.66L18.34 20.86L19.89 19.76L21.18 18.46L22.25 16.96L23.02 15.37L23.07 15.24Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M23.10 14L21.20 14.63L20.30 14.84L19.39 14.96L18.46 14.99L17.54 14.93L16.63 14.78L15.74 14.55L14.87 14.23L14.04 13.83L13.25 13.35L12.51 12.80L11.82 12.18L11.20 11.49L10.65 10.75L10.17 9.96L9.77 9.13L9.45 8.26L9.22 7.37L9.07 6.46L9.01 5.54L9.04 4.61L9.16 3.70L9.37 2.80L10.09 0.64L9.81 0.40L7.04 1.75L5.54 2.81L4.24 4.11L3.17 5.60L2.36 7.25L1.84 9.01L1.61 10.83L1.68 12.67L2.06 14.46L2.72 16.17L3.66 17.75L4.85 19.15L6.25 20.34L7.83 21.28L9.54 21.94L11.33 22.32L13.17 22.39L14.99 22.16L16.75 21.64L18.40 20.83L19.89 19.76L21.19 18.46L22.25 16.96L23.10 15.21Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M23.10 15.04L23.07 14.82L22.93 14.56L22.69 14.37L22.41 14.29L22.18 14.31L21.20 14.63L20.30 14.84L19.39 14.96L18.46 14.99L17.54 14.93L16.63 14.78L15.74 14.55L14.87 14.23L14.04 13.83L13.25 13.35L12.51 12.80L11.82 12.18L11.20 11.49L10.65 10.75L10.17 9.96L9.77 9.13L9.45 8.26L9.22 7.37L9.07 6.46L9.01 5.54L9.04 4.61L9.16 3.70L9.37 2.80L9.67 1.89L9.71 1.67L9.68 1.45L9.55 1.19L9.40 1.04L9.20 0.94L8.99 0.90L8.70 0.95L7.09 1.72L5.50 2.86L4.24 4.11L3.21 5.55L2.36 7.25L1.84 9.01L1.61 10.89L1.68 12.67L2.04 14.40L2.72 16.17L3.66 17.75L4.90 19.19L6.25 20.34L7.77 21.25L9.48 21.92L11.33 22.32L13.23 22.39L14.99 22.16L16.69 21.66L18.34 20.86L19.89 19.76L21.18 18.46L22.25 16.96L23.02 15.37L23.07 15.24Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M22.35 15.04a10.35 10.35 0 0 1 -13.39-13.39a10.35 10.35 0 1 0 13.39 13.39zz\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M22.35 15.04a10.35 10.35 0 0 1 -13.39-13.39a10.35 10.35 0 1 0 13.39 13.39z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M22.35 15.04a10.35 10.35 0 0 1 -13.39-13.39a10.35 10.35 0 1 0 13.39 13.39zz\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M22.35 15.04a10.35 10.35 0 0 1 -13.39-13.39a10.35 10.35 0 1 0 13.39 13.39z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M22.35 15.04a10.35 10.35 0 0 1 -13.39-13.39a10.35 10.35 0 1 0 13.39 13.39z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M22.35 15.04a10.35 10.35 0 0 1 -13.39-13.39a10.35 10.35 0 1 0 13.39 13.39zz\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Evening = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Evening.displayName = 'Evening';
