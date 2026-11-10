import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M5.33 5.33l13.34 13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M18.67 5.33l-13.34 13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M5.33 5.33l13.34 13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>\n  <path d=\"M18.67 5.33l-13.34 13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M5.33 5.33l13.34 13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M18.67 5.33l-13.34 13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M17.85 19.67L18.17 19.87L18.42 19.95L18.67 19.97L18.92 19.95L19.17 19.87L19.49 19.67L19.67 19.49L19.82 19.28L19.95 18.92L19.97 18.67L19.95 18.42L19.82 18.06L19.59 17.75L13.84 12L19.67 6.15L19.87 5.83L19.95 5.58L19.97 5.33L19.95 5.08L19.87 4.83L19.67 4.51L19.49 4.33L19.28 4.18L19.05 4.09L18.80 4.04L18.42 4.05L18.17 4.13L17.95 4.25L17.75 4.41L12 10.16L6.15 4.33L5.83 4.13L5.58 4.05L5.33 4.03L5.08 4.05L4.83 4.13L4.51 4.33L4.33 4.51L4.18 4.72L4.05 5.08L4.03 5.33L4.05 5.58L4.13 5.83L4.25 6.05L4.41 6.25L10.16 12L4.33 17.85L4.13 18.17L4.05 18.42L4.03 18.67L4.05 18.92L4.13 19.17L4.33 19.49L4.51 19.67L4.72 19.82L5.08 19.95L5.33 19.97L5.58 19.95L5.83 19.87L6.05 19.75L6.25 19.59L12 13.84Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M19.59 17.75L13.84 12L19.59 6.25L17.75 4.41L12 10.16L6.25 4.41L4.41 6.25L10.16 12L4.41 17.75L6.25 19.59L12 13.84L17.75 19.59Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M16.64 5.52L12 10.16L5.33 3.49L3.49 5.33L10.16 12L3.49 18.67L5.33 20.51L12 13.84L18.67 20.51L20.51 18.67L13.84 12L20.51 5.33L18.67 3.49Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M5.33 5.33l13.34 13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M18.67 5.33l-13.34 13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M5.33 5.33l13.34 13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M18.67 5.33l-13.34 13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M5.33 5.33l13.34 13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M18.67 5.33l-13.34 13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M5.33 5.33l13.34 13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>\n  <path d=\"M18.67 5.33l-13.34 13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
};

export const Close = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Close.displayName = 'Close';
