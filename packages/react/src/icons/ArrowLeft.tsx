import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M20.89 12h-17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M9.78 5.33l-6.67 6.67l6.67 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M20.89 12h-17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>\n  <path d=\"M9.78 5.33l-6.67 6.67l6.67 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M20.89 12h-17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M9.78 5.33l-6.67 6.67l6.67 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M2.11 11.18L1.91 11.50L1.83 11.75L1.81 12L1.83 12.25L1.89 12.46L1.96 12.61L2.11 12.82L8.86 19.59L9.06 19.75L9.28 19.87L9.53 19.95L9.78 19.97L10.03 19.95L10.39 19.82L10.70 19.59L10.86 19.39L11.02 19.05L11.08 18.67L11.02 18.29L10.93 18.06L10.70 17.75L6.25 13.30L21.02 13.29L21.39 13.20L21.61 13.08L21.81 12.92L21.97 12.72L22.09 12.50L22.17 12.25L22.19 12L22.17 11.75L22.09 11.50L21.97 11.28L21.81 11.08L21.61 10.92L21.39 10.80L21.02 10.71L6.25 10.70L10.70 6.25L10.93 5.94L11.06 5.58L11.07 5.20L10.98 4.83L10.86 4.61L10.60 4.33L10.39 4.18L10.03 4.05L9.78 4.03L9.53 4.05L9.28 4.13L9.06 4.25L8.86 4.41Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M20.89 13.30L20.89 10.70L6.25 10.70L10.70 6.25L8.86 4.41L1.27 12L8.86 19.59L10.70 17.75L6.25 13.30Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M1.81 10.70L1.81 13.30L2.57 13.30L9.78 20.51L11.62 18.67L6.25 13.30L22.19 13.30L22.19 10.70L6.25 10.70L11.62 5.33L9.78 3.49L2.57 10.70Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M20.89 12h-17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M9.78 5.33l-6.67 6.67l6.67 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M20.89 12h-17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M9.78 5.33l-6.67 6.67l6.67 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M20.89 12h-17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M9.78 5.33l-6.67 6.67l6.67 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M20.89 12h-17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>\n  <path d=\"M9.78 5.33l-6.67 6.67l6.67 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
};

export const ArrowLeft = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
ArrowLeft.displayName = 'ArrowLeft';
