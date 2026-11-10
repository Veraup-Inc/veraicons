import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M21.82 2.18l-19.06 8.09c-1.04 .46-.92 1.96 .23 2.19l7.28 1.5l1.5 7.28c.23 1.15 1.73 1.27 2.19 .23z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M21.82 2.18l-20.21 8.09l9.24 2.31l2.3 9.24z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M21.82 2.18l-19.06 8.09c-1.04 .46-.92 1.96 .23 2.19l7.28 1.5l1.5 7.28c.23 1.15 1.73 1.27 2.19 .23z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M9.64 14.59L11.04 21.39L11.10 21.64L11.24 21.96L11.40 22.21L11.68 22.50L12.01 22.72L12.37 22.86L12.74 22.93L13.12 22.92L13.50 22.83L13.79 22.71L14.12 22.48L14.32 22.28L14.53 22L14.65 21.75L22.51 2.46L22.57 2.25L22.55 2.03L22.48 1.82L22.35 1.65L22.17 1.52L21.96 1.44L21.74 1.43L21.53 1.49L2.47 9.58L2.12 9.78L1.89 9.96L1.67 10.21L1.52 10.44L1.40 10.73L1.31 11.11L1.30 11.49L1.37 11.86L1.51 12.22L1.73 12.55L2.02 12.83L2.27 12.99L2.59 13.13L2.84 13.19Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M10.23 13.20L12.74 23.29L13.30 23.34L23.04 1.28L22.76 1L0.09 10.07L0.13 10.67Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M9.64 14.59L11.04 21.39L11.10 21.64L11.24 21.96L11.40 22.21L11.68 22.50L12.01 22.72L12.37 22.86L12.74 22.93L13.12 22.92L13.50 22.83L13.79 22.71L14.12 22.48L14.32 22.28L14.53 22L14.65 21.75L22.51 2.46L22.57 2.25L22.55 2.03L22.48 1.82L22.35 1.65L22.17 1.52L21.96 1.44L21.74 1.43L21.53 1.49L2.47 9.58L2.12 9.78L1.89 9.96L1.67 10.21L1.52 10.44L1.40 10.73L1.31 11.11L1.30 11.49L1.37 11.86L1.51 12.22L1.73 12.55L2.02 12.83L2.27 12.99L2.59 13.13L2.84 13.19Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M21.82 2.18l-19.06 8.09c-1.04 .46-.92 1.96 .23 2.19l7.28 1.5l1.5 7.28c.23 1.15 1.73 1.27 2.19 .23z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M21.82 2.18l-19.06 8.09c-1.04 .46-.92 1.96 .23 2.19l7.28 1.5l1.5 7.28c.23 1.15 1.73 1.27 2.19 .23z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M21.82 2.18l-19.06 8.09c-1.04 .46-.92 1.96 .23 2.19l7.28 1.5l1.5 7.28c.23 1.15 1.73 1.27 2.19 .23z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M21.82 2.18l-19.06 8.09c-1.04 .46-.92 1.96 .23 2.19l7.28 1.5l1.5 7.28c.23 1.15 1.73 1.27 2.19 .23z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M21.82 2.18l-19.06 8.09c-1.04 .46-.92 1.96 .23 2.19l7.28 1.5l1.5 7.28c.23 1.15 1.73 1.27 2.19 .23z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M21.82 2.18l-19.06 8.09c-1.04 .46-.92 1.96 .23 2.19l7.28 1.5l1.5 7.28c.23 1.15 1.73 1.27 2.19 .23z\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Navigation = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Navigation.displayName = 'Navigation';
