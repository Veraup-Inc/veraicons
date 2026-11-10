import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M5.33 15.33l6.67-6.66l6.67 6.66\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M5.33 15.33l6.67-6.66l6.67 6.66\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M5.33 15.33l6.67-6.66l6.67 6.66\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M6.53 15.97L12 10.51L17.75 16.25L18.06 16.48L18.29 16.57L18.67 16.63L19.05 16.57L19.39 16.41L19.68 16.15L19.87 15.83L19.95 15.58L19.96 15.20L19.91 14.95L19.82 14.72L19.59 14.41L12.92 7.75L12.72 7.59L12.50 7.47L12.13 7.38L11.87 7.38L11.50 7.47L11.28 7.59L11.08 7.75L4.41 14.41L4.18 14.72L4.09 14.95L4.04 15.20L4.04 15.46L4.09 15.71L4.18 15.94L4.32 16.15L4.50 16.33L4.72 16.48L4.95 16.57L5.20 16.62L5.46 16.62L5.71 16.57L6.05 16.41L6.25 16.25Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M6.53 15.97L12 10.51L17.75 16.25L19.59 14.41L12 6.83L4.41 14.41L6.25 16.25Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M6.53 15.97L12 10.51L18.67 17.17L20.51 15.33L12.92 7.75L12.72 7.59L12.50 7.47L12.25 7.39L12 7.37L11.75 7.39L11.50 7.47L11.28 7.59L11.08 7.75L3.49 15.33L5.33 17.17Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M5.33 15.33l6.67-6.66l6.67 6.66\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M5.33 15.33l6.67-6.66l6.67 6.66\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M5.33 15.33l6.67-6.66l6.67 6.66\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M5.33 15.33l6.67-6.66l6.67 6.66\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
};

export const ChevronUp = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
ChevronUp.displayName = 'ChevronUp';
