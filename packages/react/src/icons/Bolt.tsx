import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M13.5 2.5L4.5 13.5h6.5l-1 8 9-11h-6.5z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M13.5 2.5L4.5 13.5h6.5l-1 8 9-11h-6.5z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M13.5 2.5L4.5 13.5h6.5l-1 8 9-11h-6.5z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M10.15 14.25L9.25 21.48L9.30 21.77L9.46 22.02L9.70 22.19L9.99 22.25L10.28 22.19L10.42 22.12L10.58 21.97L19.58 10.97L19.72 10.72L19.75 10.43L19.72 10.28L19.62 10.08L19.42 9.88L19.15 9.76L13.35 9.75L14.25 2.52L14.20 2.23L14.09 2.03L13.93 1.88L13.73 1.78L13.51 1.75L13.29 1.78L13.08 1.88L12.92 2.03L3.92 13.03L3.81 13.21L3.75 13.43L3.78 13.72L3.92 13.98L4.15 14.16L4.43 14.25Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M10.15 14.25L9.09 22.74L9.73 23.02L20.41 9.97L20.30 9.75L13.35 9.75L14.41 1.26L13.77 0.98L3.09 14.03L3.20 14.25Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M10.15 14.25L9.25 21.48L9.30 21.77L9.46 22.02L9.70 22.19L9.99 22.25L10.28 22.19L10.42 22.12L10.58 21.97L19.58 10.97L19.72 10.72L19.75 10.43L19.72 10.28L19.62 10.08L19.42 9.88L19.15 9.76L13.35 9.75L14.25 2.52L14.20 2.23L14.09 2.03L13.93 1.88L13.73 1.78L13.51 1.75L13.29 1.78L13.08 1.88L12.92 2.03L3.92 13.03L3.81 13.21L3.75 13.43L3.78 13.72L3.92 13.98L4.15 14.16L4.43 14.25Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M13.5 2.5L4.5 13.5h6.5l-1 8 9-11h-6.5z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M13.5 2.5L4.5 13.5h6.5l-1 8 9-11h-6.5z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M13.5 2.5L4.5 13.5h6.5l-1 8 9-11h-6.5z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M13.5 2.5L4.5 13.5h6.5l-1 8 9-11h-6.5z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M13.5 2.5L4.5 13.5h6.5l-1 8 9-11h-6.5z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M13.5 2.5L4.5 13.5h6.5l-1 8 9-11h-6.5z\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Bolt = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Bolt.displayName = 'Bolt';
