import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M4 12.5l5 5L20 6.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M4 12.5l5 5L20 6.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M4 12.5l5 5L20 6.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M3.29 13.63L8.18 18.50L8.39 18.65L8.75 18.78L9.13 18.79L9.50 18.70L9.72 18.58L9.92 18.42L20.92 7.42L21.15 7.11L21.28 6.75L21.29 6.37L21.20 6L21.08 5.78L20.92 5.58L20.61 5.35L20.38 5.26L20 5.20L19.75 5.22L19.39 5.35L19.18 5.50L9 15.66L4.92 11.58L4.72 11.42L4.38 11.26L4 11.20L3.75 11.22L3.50 11.30L3.28 11.42L3.08 11.58L2.92 11.78L2.80 12L2.71 12.37L2.71 12.63L2.76 12.88L2.92 13.22Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M3.29 13.63L9 19.34L20.92 7.42L19.08 5.58L9 15.66L4.92 11.58L3.08 13.42Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M3.29 13.63L8.18 18.50L8.39 18.65L8.75 18.78L9.13 18.79L9.50 18.70L9.72 18.58L9.92 18.42L21.84 6.50L20 4.66L9 15.66L4 10.66L2.16 12.50Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M4 12.5l5 5L20 6.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M4 12.5l5 5L20 6.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M4 12.5l5 5L20 6.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M4 12.5l5 5L20 6.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
};

export const Check = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Check.displayName = 'Check';
