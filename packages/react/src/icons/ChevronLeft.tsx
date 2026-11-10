import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M15.33 5.33l-6.66 6.67l6.66 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M15.33 5.33l-6.66 6.67l6.66 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M15.33 5.33l-6.66 6.67l6.66 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M10.51 12L16.25 6.25L16.41 6.05L16.53 5.83L16.61 5.58L16.63 5.33L16.60 5.08L16.53 4.83L16.41 4.61L16.25 4.41L16.05 4.25L15.71 4.09L15.46 4.04L15.20 4.04L14.83 4.13L14.50 4.33L7.75 11.08L7.59 11.28L7.47 11.50L7.39 11.75L7.37 12L7.39 12.25L7.47 12.50L7.59 12.72L7.75 12.92L14.50 19.67L14.83 19.87L15.08 19.94L15.33 19.97L15.71 19.91L16.05 19.75L16.25 19.59L16.41 19.39L16.53 19.17L16.60 18.92L16.63 18.67L16.61 18.42L16.53 18.17L16.41 17.95L16.25 17.75Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M10.51 12L16.25 6.25L14.41 4.41L6.83 12L14.41 19.59L16.25 17.75Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M10.51 12L17.17 5.33L15.33 3.49L7.75 11.08L7.59 11.28L7.47 11.50L7.39 11.75L7.37 12L7.39 12.25L7.47 12.50L7.59 12.72L7.75 12.92L15.33 20.51L17.17 18.67Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M15.33 5.33l-6.66 6.67l6.66 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M15.33 5.33l-6.66 6.67l6.66 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M15.33 5.33l-6.66 6.67l6.66 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M15.33 5.33l-6.66 6.67l6.66 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
};

export const ChevronLeft = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
ChevronLeft.displayName = 'ChevronLeft';
