import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M4.3 3h15.4c1 0 1.6 1.2.9 2L15 11.4V19l-6 2.5v-10L3.4 5c-.7-.8-.1-2 .9-2z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M3.5 3h17L15 11v8l-6 2.5V11z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M4.3 3h15.4c1 0 1.6 1.2.9 2L15 11.4V19l-6 2.5v-10L3.4 5c-.7-.8-.1-2 .9-2z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M4.30 2.25L3.87 2.30L3.51 2.42L3.10 2.66L2.80 2.96L2.55 3.35L2.40 3.75L2.35 4.22L2.38 4.59L2.53 5.02L2.69 5.30L2.81 5.47L8.25 11.78L8.25 21.50L8.28 21.72L8.38 21.92L8.58 22.12L8.78 22.22L9 22.25L9.22 22.22L15.42 19.62L15.58 19.48L15.66 19.35L15.72 19.22L15.75 19L15.75 11.68L21.31 5.30L21.42 5.13L21.55 4.84L21.62 4.59L21.65 4.29L21.64 4.03L21.60 3.75L21.52 3.51L21.37 3.20L21.08 2.83L20.75 2.56L20.31 2.35L19.86 2.26Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M2.20 2.25L2.15 2.35L8.25 11.23L8.25 22.63L15.75 19.50L15.75 11.23L21.85 2.35L21.80 2.25Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M4.30 2.25L3.87 2.30L3.51 2.42L3.10 2.66L2.80 2.96L2.55 3.35L2.40 3.75L2.35 4.22L2.38 4.59L2.53 5.02L2.69 5.30L2.81 5.47L8.25 11.78L8.25 21.50L8.28 21.72L8.38 21.92L8.58 22.12L8.78 22.22L9 22.25L9.22 22.22L15.42 19.62L15.58 19.48L15.66 19.35L15.72 19.22L15.75 19L15.75 11.68L21.31 5.30L21.42 5.13L21.55 4.84L21.62 4.59L21.65 4.29L21.64 4.03L21.60 3.75L21.52 3.51L21.37 3.20L21.08 2.83L20.75 2.56L20.31 2.35L19.86 2.26Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M4.3 3h15.4c1 0 1.6 1.2.9 2L15 11.4V19l-6 2.5v-10L3.4 5c-.7-.8-.1-2 .9-2z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M4.3 3h15.4c1 0 1.6 1.2.9 2L15 11.4V19l-6 2.5v-10L3.4 5c-.7-.8-.1-2 .9-2z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M4.3 3h15.4c1 0 1.6 1.2.9 2L15 11.4V19l-6 2.5v-10L3.4 5c-.7-.8-.1-2 .9-2z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M4.3 3h15.4c1 0 1.6 1.2.9 2L15 11.4V19l-6 2.5v-10L3.4 5c-.7-.8-.1-2 .9-2z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M4.3 3h15.4c1 0 1.6 1.2.9 2L15 11.4V19l-6 2.5v-10L3.4 5c-.7-.8-.1-2 .9-2z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M4.3 3h15.4c1 0 1.6 1.2.9 2L15 11.4V19l-6 2.5v-10L3.4 5c-.7-.8-.1-2 .9-2z\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Filter = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Filter.displayName = 'Filter';
