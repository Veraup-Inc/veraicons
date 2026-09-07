import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M2.5 13l4 4 8-9\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M11 17l2 2 8.5-10\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M2.5 13l4 4 8-9\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>\n  <path d=\"M11 17l2 2 8.5-10\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M2.5 13l4 4 8-9\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M11 17l2 2 8.5-10\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M1.91 14.25L5.67 18L5.99 18.20L6.35 18.29L6.72 18.28L7.08 18.16L7.29 18.03L7.47 17.86L15.55 8.76L15.73 8.43L15.80 8.05L15.76 7.67L15.67 7.43L15.54 7.22L15.36 7.03L15.04 6.82L14.80 6.74L14.42 6.70L14.17 6.74L13.93 6.83L13.72 6.96L13.53 7.14L6.44 15.11L3.42 12.08L3.11 11.85L2.75 11.72L2.50 11.70L2.25 11.72L2 11.80L1.78 11.92L1.58 12.08L1.42 12.28L1.26 12.62L1.20 13L1.22 13.25L1.30 13.50L1.50 13.82ZM10.25 18.09L12.08 19.92L12.38 20.14L12.74 20.27L13.12 20.29L13.48 20.21L13.81 20.02L13.99 19.84L22.57 9.74L22.74 9.40L22.80 9.02L22.75 8.64L22.66 8.41L22.52 8.19L22.34 8.01L22.13 7.86L21.90 7.76L21.65 7.71L21.39 7.70L21.14 7.75L20.80 7.91L20.60 8.07L12.92 17.08L11.82 16L11.50 15.80L11.13 15.71L10.75 15.72L10.39 15.85L10.18 16L10 16.18L9.85 16.39L9.72 16.75L9.70 17L9.72 17.25L9.85 17.61L10 17.82Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M1.91 14.25L6.56 18.89L15.47 8.86L13.53 7.14L6.44 15.11L3.42 12.08L1.58 13.92ZM10.25 18.09L13.08 20.92L22.49 9.84L20.51 8.16L12.92 17.08L11.92 16.08L10.08 17.92Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M1.91 14.25L5.67 18L5.99 18.20L6.35 18.29L6.72 18.28L7.08 18.16L7.29 18.03L7.47 17.86L16.34 7.89L14.39 6.16L6.44 15.11L2.50 11.16L0.66 13ZM10.25 18.09L12.08 19.92L12.38 20.14L12.74 20.27L12.99 20.30L13.36 20.25L13.71 20.09L13.99 19.84L23.33 8.85L21.35 7.17L12.92 17.08L11 15.16L9.16 17Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M2.5 13l4 4 8-9\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M11 17l2 2 8.5-10\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M2.5 13l4 4 8-9\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M11 17l2 2 8.5-10\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M2.5 13l4 4 8-9\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M11 17l2 2 8.5-10\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M2.5 13l4 4 8-9\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.6\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>\n  <path d=\"M11 17l2 2 8.5-10\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.6\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
};

export const CheckDouble = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
CheckDouble.displayName = 'CheckDouble';
