import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M2 19.5l7-11.5 4.3 7.2 3.2-5.2 5.5 9.5z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M2 19.5l7-11.5 4.3 7.2 3.2-5.2 5.5 9.5z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M2 19.5l7-11.5 4.3 7.2 3.2-5.2 5.5 9.5z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M1.36 19.11L1.30 19.24L1.25 19.45L1.27 19.67L1.35 19.87L1.48 20.04L1.59 20.13L1.79 20.22L2 20.25L22 20.25L22.29 20.19L22.54 20.02L22.70 19.77L22.75 19.48L22.71 19.26L22.65 19.12L17.15 9.62L17.01 9.45L16.76 9.30L16.47 9.25L16.19 9.32L15.95 9.49L13.31 13.75L9.64 7.62L9.56 7.50L9.39 7.36L9.18 7.27L9.04 7.25L8.89 7.26L8.68 7.32L8.50 7.44L8.36 7.61Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M0.67 20.25L23.30 20.25L16.52 8.54L13.31 13.75L9.01 6.55Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M1.36 19.11L1.30 19.24L1.25 19.45L1.27 19.67L1.35 19.87L1.48 20.04L1.59 20.13L1.79 20.22L2 20.25L22 20.25L22.29 20.19L22.54 20.02L22.70 19.77L22.75 19.48L22.71 19.26L22.65 19.12L17.15 9.62L17.01 9.45L16.76 9.30L16.47 9.25L16.19 9.32L15.95 9.49L13.31 13.75L9.64 7.62L9.56 7.50L9.39 7.36L9.18 7.27L9.04 7.25L8.89 7.26L8.68 7.32L8.50 7.44L8.36 7.61Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M2 19.5l7-11.5 4.3 7.2 3.2-5.2 5.5 9.5zz\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M2 19.5l7-11.5 4.3 7.2 3.2-5.2 5.5 9.5z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M2 19.5l7-11.5 4.3 7.2 3.2-5.2 5.5 9.5zz\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M2 19.5l7-11.5 4.3 7.2 3.2-5.2 5.5 9.5z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M2 19.5l7-11.5 4.3 7.2 3.2-5.2 5.5 9.5z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M2 19.5l7-11.5 4.3 7.2 3.2-5.2 5.5 9.5zz\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Mountains = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Mountains.displayName = 'Mountains';
