import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M5.33 18.67l13.34-13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M8.11 5.33h10.56v10.56\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M5.33 18.67l13.34-13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>\n  <path d=\"M8.11 5.33h10.56v10.56\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M5.33 18.67l13.34-13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M8.11 5.33h10.56v10.56\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M17.37 15.89L17.39 16.14L17.47 16.39L17.59 16.61L17.75 16.81L17.95 16.97L18.17 17.09L18.54 17.18L18.80 17.18L19.05 17.13L19.28 17.04L19.49 16.89L19.67 16.71L19.82 16.50L19.95 16.14L19.97 15.89L19.97 5.33L19.95 5.08L19.87 4.83L19.67 4.51L19.49 4.33L19.28 4.18L19.05 4.09L18.67 4.03L8.11 4.03L7.86 4.05L7.61 4.13L7.29 4.33L7.03 4.61L6.91 4.83L6.82 5.20L6.83 5.58L6.96 5.94L7.19 6.25L7.50 6.48L7.73 6.57L8.11 6.63L15.53 6.63L4.33 17.85L4.13 18.17L4.05 18.42L4.03 18.67L4.05 18.92L4.13 19.17L4.33 19.49L4.51 19.67L4.72 19.82L4.95 19.91L5.20 19.96L5.46 19.96L5.71 19.91L5.94 19.82L6.15 19.67L17.37 8.47Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M17.37 15.89L19.97 15.89L19.97 4.03L8.11 4.03L8.11 6.63L15.53 6.63L4.41 17.75L6.25 19.59L17.37 8.47Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M17.37 15.89L17.37 17.19L19.97 17.19L19.97 5.87L20.51 5.33L18.67 3.49L18.13 4.03L6.81 4.03L6.81 6.63L15.53 6.63L3.49 18.67L5.33 20.51L17.37 8.47Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M5.33 18.67l13.34-13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M8.11 5.33h10.56v10.56\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M5.33 18.67l13.34-13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M8.11 5.33h10.56v10.56\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M5.33 18.67l13.34-13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M8.11 5.33h10.56v10.56\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M5.33 18.67l13.34-13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>\n  <path d=\"M8.11 5.33h10.56v10.56\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
};

export const ArrowUpRight = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
ArrowUpRight.displayName = 'ArrowUpRight';
