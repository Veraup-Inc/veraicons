import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M18 6L6 18\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M15.5 18H6V8.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M18 6L6 18\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>\n  <path d=\"M15.5 18H6V8.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M18 6L6 18\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M15.5 18H6V8.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M4.71 18.13L4.76 18.38L4.85 18.61L5.08 18.92L5.28 19.08L5.50 19.20L5.87 19.29L15.50 19.30L15.75 19.28L16 19.20L16.22 19.08L16.42 18.92L16.65 18.61L16.74 18.38L16.80 18L16.78 17.75L16.65 17.39L16.42 17.08L16.11 16.85L15.88 16.76L15.50 16.70L9.14 16.70L19 6.82L19.20 6.50L19.28 6.25L19.30 6L19.28 5.75L19.20 5.50L19.08 5.28L18.92 5.08L18.61 4.85L18.38 4.76L18.13 4.71L17.87 4.71L17.62 4.76L17.39 4.85L17.18 5L7.30 14.86L7.30 8.50L7.24 8.12L7.15 7.89L6.92 7.58L6.72 7.42L6.38 7.26L6 7.20L5.75 7.22L5.39 7.35L5.08 7.58L4.92 7.78L4.80 8L4.72 8.25L4.70 8.50Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M18.92 6.92L17.08 5.08L7.30 14.86L7.30 8.50L4.70 8.50L4.70 19.30L15.50 19.30L15.50 16.70L9.14 16.70Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M4.16 18L6 19.84L6.54 19.30L16.80 19.30L16.80 16.70L9.14 16.70L19.84 6L18 4.16L7.30 14.86L7.30 7.20L4.70 7.20L4.70 17.46Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M18 6L6 18\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M15.5 18H6V8.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M18 6L6 18\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M15.5 18H6V8.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M18 6L6 18\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M15.5 18H6V8.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M18 6L6 18\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.6\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>\n  <path d=\"M15.5 18H6V8.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.6\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
};

export const ArrowDownLeft = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
ArrowDownLeft.displayName = 'ArrowDownLeft';
