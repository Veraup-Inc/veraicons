import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M13.58 2l-9.48 11.58h6.85l-1.06 8.42l9.48-11.58h-6.84z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M13.58 2l-9.48 11.58h6.85l-1.06 8.42l9.48-11.58h-6.84z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M13.58 2l-9.48 11.58h6.85l-1.06 8.42l9.48-11.58h-6.84z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M10.10 14.33L9.14 21.98L9.19 22.27L9.35 22.52L9.59 22.69L9.88 22.75L10.10 22.72L10.24 22.66L10.47 22.48L19.95 10.90L20.09 10.64L20.12 10.35L20.06 10.13L19.99 10L19.85 9.84L19.72 9.76L19.44 9.67L13.38 9.67L14.33 2.02L14.30 1.80L14.21 1.59L14.01 1.38L13.81 1.28L13.59 1.25L13.37 1.28L13.16 1.38L13 1.52L3.52 13.10L3.41 13.29L3.35 13.51L3.38 13.80L3.52 14.06L3.75 14.24L4.03 14.33Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M10.10 14.33L8.98 23.24L9.62 23.52L20.78 9.89L20.67 9.67L13.38 9.67L14.49 0.76L13.85 0.48L2.69 14.11L2.80 14.33Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M10.10 14.33L9.14 21.98L9.19 22.27L9.35 22.52L9.59 22.69L9.88 22.75L10.10 22.72L10.24 22.66L10.47 22.48L19.95 10.90L20.09 10.64L20.12 10.35L20.06 10.13L19.99 10L19.85 9.84L19.72 9.76L19.44 9.67L13.38 9.67L14.33 2.02L14.30 1.80L14.21 1.59L14.01 1.38L13.81 1.28L13.59 1.25L13.37 1.28L13.16 1.38L13 1.52L3.52 13.10L3.41 13.29L3.35 13.51L3.38 13.80L3.52 14.06L3.75 14.24L4.03 14.33Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M13.58 2l-9.48 11.58h6.85l-1.06 8.42l9.48-11.58h-6.84z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M13.58 2l-9.48 11.58h6.85l-1.06 8.42l9.48-11.58h-6.84z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M13.58 2l-9.48 11.58h6.85l-1.06 8.42l9.48-11.58h-6.84z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M13.58 2l-9.48 11.58h6.85l-1.06 8.42l9.48-11.58h-6.84z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M13.58 2l-9.48 11.58h6.85l-1.06 8.42l9.48-11.58h-6.84z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M13.58 2l-9.48 11.58h6.85l-1.06 8.42l9.48-11.58h-6.84z\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Bolt = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Bolt.displayName = 'Bolt';
