import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M3.5 16.5l5-5.5 4 3.5 8-8.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M15.5 6h5v5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M3.5 16.5l5-5.5 4 3.5 8-8.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>\n  <path d=\"M15.5 6h5v5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M3.5 16.5l5-5.5 4 3.5 8-8.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M15.5 6h5v5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M19.20 11L19.22 11.25L19.30 11.50L19.50 11.82L19.68 12L19.89 12.15L20.25 12.28L20.63 12.29L20.88 12.24L21.11 12.15L21.42 11.92L21.58 11.72L21.70 11.50L21.78 11.25L21.80 11L21.80 5.96L21.74 5.62L21.58 5.28L21.42 5.08L21.19 4.90L20.88 4.76L20.59 4.70L15.50 4.70L15.12 4.76L14.89 4.85L14.58 5.08L14.42 5.28L14.26 5.62L14.20 6L14.22 6.25L14.35 6.61L14.58 6.92L14.89 7.15L15.12 7.24L15.37 7.29L17.49 7.30L12.41 12.70L9.26 9.94L8.92 9.77L8.68 9.71L8.43 9.70L8.06 9.78L7.83 9.89L7.54 10.13L2.46 15.72L2.33 15.94L2.21 16.31L2.20 16.56L2.28 16.94L2.45 17.27L2.63 17.46L2.83 17.61L3.06 17.72L3.31 17.79L3.56 17.80L3.94 17.72L4.17 17.62L4.46 17.37L8.60 12.82L11.74 15.56L11.96 15.68L12.31 15.79L12.69 15.79L12.93 15.73L13.26 15.56L13.45 15.39L19.20 9.28Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M19.20 11L21.80 11L21.80 4.70L15.50 4.70L15.50 7.30L17.49 7.30L12.41 12.70L8.40 9.18L2.54 15.63L4.46 17.37L8.60 12.82L12.59 16.30L19.20 9.28Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M19.20 11L19.20 12.30L21.80 12.30L21.80 6.52L22.34 5.94L20.44 4.16L19.94 4.70L14.20 4.70L14.20 7.30L17.49 7.30L12.41 12.70L9.26 9.94L8.92 9.77L8.68 9.71L8.43 9.70L8.06 9.78L7.83 9.89L7.54 10.13L1.66 16.59L3.59 18.34L8.60 12.82L11.74 15.56L11.96 15.68L12.31 15.79L12.69 15.79L12.93 15.73L13.26 15.56L13.45 15.39L19.20 9.28Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M3.5 16.5l5-5.5 4 3.5 8-8.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M15.5 6h5v5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M3.5 16.5l5-5.5 4 3.5 8-8.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M15.5 6h5v5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M3.5 16.5l5-5.5 4 3.5 8-8.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M15.5 6h5v5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M3.5 16.5l5-5.5 4 3.5 8-8.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>\n  <path d=\"M15.5 6h5v5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
};

export const Trend = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Trend.displayName = 'Trend';
