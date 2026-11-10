import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M5.33 8.67l6.67 6.66l6.67-6.66\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M5.33 8.67l6.67 6.66l6.67-6.66\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M5.33 8.67l6.67 6.66l6.67-6.66\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M4.69 9.87L11.08 16.25L11.28 16.41L11.62 16.57L11.87 16.62L12.13 16.62L12.50 16.53L12.72 16.41L12.92 16.25L19.59 9.59L19.75 9.39L19.87 9.17L19.94 8.92L19.96 8.54L19.91 8.29L19.75 7.95L19.59 7.75L19.28 7.52L18.92 7.40L18.67 7.37L18.29 7.43L17.95 7.59L17.75 7.75L12 13.49L6.25 7.75L5.94 7.52L5.71 7.43L5.46 7.38L5.20 7.38L4.95 7.43L4.72 7.52L4.50 7.67L4.32 7.85L4.18 8.06L4.09 8.29L4.04 8.54L4.04 8.80L4.09 9.05L4.25 9.39L4.41 9.59Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M4.69 9.87L12 17.17L19.59 9.59L17.75 7.75L12 13.49L6.25 7.75L4.41 9.59Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M4.69 9.87L11.08 16.25L11.28 16.41L11.62 16.57L11.87 16.62L12.13 16.62L12.50 16.53L12.72 16.41L12.92 16.25L20.51 8.67L18.67 6.83L12 13.49L5.33 6.83L3.49 8.67Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M5.33 8.67l6.67 6.66l6.67-6.66\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M5.33 8.67l6.67 6.66l6.67-6.66\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M5.33 8.67l6.67 6.66l6.67-6.66\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M5.33 8.67l6.67 6.66l6.67-6.66\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
};

export const ChevronDown = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
ChevronDown.displayName = 'ChevronDown';
