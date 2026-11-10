import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M18.67 5.33l-13.34 13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M15.89 18.67h-10.56v-10.56\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M18.67 5.33l-13.34 13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>\n  <path d=\"M15.89 18.67h-10.56v-10.56\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M18.67 5.33l-13.34 13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M15.89 18.67h-10.56v-10.56\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M16.64 5.52L6.63 15.53L6.63 8.11L6.57 7.73L6.48 7.50L6.25 7.19L5.94 6.96L5.58 6.83L5.20 6.82L4.83 6.91L4.51 7.11L4.33 7.29L4.13 7.61L4.05 7.86L4.03 8.11L4.03 18.67L4.09 19.05L4.18 19.28L4.33 19.49L4.51 19.67L4.83 19.87L5.08 19.95L5.33 19.97L15.89 19.97L16.14 19.95L16.39 19.87L16.71 19.67L16.89 19.49L17.09 19.17L17.17 18.92L17.19 18.67L17.13 18.29L17.04 18.06L16.81 17.75L16.50 17.52L16.27 17.43L15.89 17.37L8.47 17.37L19.59 6.25L19.82 5.94L19.91 5.71L19.96 5.46L19.96 5.20L19.91 4.95L19.82 4.72L19.67 4.51L19.49 4.33L19.28 4.18L19.05 4.09L18.80 4.04L18.54 4.04L18.17 4.13L17.85 4.33Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M16.64 5.52L6.63 15.53L6.63 8.11L4.03 8.11L4.03 19.97L15.89 19.97L15.89 17.37L8.47 17.37L19.59 6.25L17.75 4.41Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M16.64 5.52L6.63 15.53L6.63 6.81L4.03 6.81L4.03 18.13L3.49 18.67L5.33 20.51L5.87 19.97L17.19 19.97L17.19 17.37L8.47 17.37L20.51 5.33L18.67 3.49Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M18.67 5.33l-13.34 13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M15.89 18.67h-10.56v-10.56\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M18.67 5.33l-13.34 13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M15.89 18.67h-10.56v-10.56\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M18.67 5.33l-13.34 13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M15.89 18.67h-10.56v-10.56\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M18.67 5.33l-13.34 13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>\n  <path d=\"M15.89 18.67h-10.56v-10.56\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
};

export const ArrowDownLeft = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
ArrowDownLeft.displayName = 'ArrowDownLeft';
