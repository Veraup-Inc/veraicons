import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M3.11 12h17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M14.22 5.33l6.67 6.67l-6.67 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M3.11 12h17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>\n  <path d=\"M14.22 5.33l6.67 6.67l-6.67 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M3.11 12h17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M14.22 5.33l6.67 6.67l-6.67 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M21.89 12.82L22.09 12.50L22.17 12.25L22.19 12L22.17 11.75L22.09 11.50L21.89 11.18L15.14 4.41L14.94 4.25L14.72 4.13L14.47 4.05L14.22 4.03L13.97 4.05L13.61 4.18L13.40 4.33L13.14 4.61L13.02 4.83L12.93 5.20L12.94 5.58L13.07 5.94L13.30 6.25L17.75 10.70L2.98 10.71L2.61 10.80L2.39 10.92L2.19 11.08L2.03 11.28L1.91 11.50L1.83 11.75L1.81 12L1.83 12.25L1.91 12.50L2.11 12.82L2.29 13L2.50 13.15L2.73 13.24L2.98 13.29L17.75 13.30L13.30 17.75L13.07 18.06L12.98 18.29L12.92 18.67L12.98 19.05L13.14 19.39L13.30 19.59L13.61 19.82L13.97 19.95L14.22 19.97L14.47 19.95L14.72 19.87L14.94 19.75L15.14 19.59Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M3.11 10.70L3.11 13.30L17.75 13.30L13.30 17.75L15.14 19.59L22.73 12L15.14 4.41L13.30 6.25L17.75 10.70Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M22.19 13.30L22.19 10.70L21.43 10.70L14.22 3.49L12.38 5.33L17.75 10.70L1.81 10.70L1.81 13.30L17.75 13.30L12.38 18.67L14.22 20.51L21.43 13.30Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M3.11 12h17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M14.22 5.33l6.67 6.67l-6.67 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M3.11 12h17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M14.22 5.33l6.67 6.67l-6.67 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M3.11 12h17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M14.22 5.33l6.67 6.67l-6.67 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M3.11 12h17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>\n  <path d=\"M14.22 5.33l6.67 6.67l-6.67 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
};

export const ArrowRight = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
ArrowRight.displayName = 'ArrowRight';
