import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M3 21v-4h5v-4h5v-4h5V5h3v16z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M3 21v-4h5v-4h5v-4h5V5h3v16z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M3 21v-4h5v-4h5v-4h5V5h3v16z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M2.25 21L2.31 21.29L2.47 21.53L2.71 21.69L3 21.75L21 21.75L21.29 21.69L21.48 21.58L21.58 21.48L21.69 21.29L21.75 21L21.75 5L21.69 4.71L21.58 4.52L21.35 4.34L21.07 4.25L18 4.25L17.71 4.31L17.58 4.38L17.42 4.52L17.31 4.71L17.25 4.93L17.25 8.25L13 8.25L12.71 8.31L12.52 8.42L12.34 8.65L12.25 8.93L12.25 12.25L8 12.25L7.71 12.31L7.52 12.42L7.34 12.65L7.25 12.93L7.25 16.25L3 16.25L2.71 16.31L2.52 16.42L2.34 16.65L2.25 16.93Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M2.25 21.75L21.75 21.75L21.75 4.25L17.25 4.25L17.25 8.25L12.25 8.25L12.25 12.25L7.25 12.25L7.25 16.25L2.25 16.25Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M2.25 21L2.31 21.29L2.47 21.53L2.71 21.69L3 21.75L21 21.75L21.29 21.69L21.48 21.58L21.58 21.48L21.69 21.29L21.75 21L21.75 5L21.69 4.71L21.58 4.52L21.35 4.34L21.07 4.25L18 4.25L17.71 4.31L17.58 4.38L17.42 4.52L17.31 4.71L17.25 4.93L17.25 8.25L13 8.25L12.71 8.31L12.52 8.42L12.34 8.65L12.25 8.93L12.25 12.25L8 12.25L7.71 12.31L7.52 12.42L7.34 12.65L7.25 12.93L7.25 16.25L3 16.25L2.71 16.31L2.52 16.42L2.34 16.65L2.25 16.93Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M3 21v-4h5v-4h5v-4h5V5h3v16zz\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M3 21v-4h5v-4h5v-4h5V5h3v16z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M3 21v-4h5v-4h5v-4h5V5h3v16zz\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M3 21v-4h5v-4h5v-4h5V5h3v16z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M3 21v-4h5v-4h5v-4h5V5h3v16z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M3 21v-4h5v-4h5v-4h5V5h3v16zz\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Stairs = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Stairs.displayName = 'Stairs';
