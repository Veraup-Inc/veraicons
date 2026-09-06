import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M6 6l12 12\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M18 6L6 18\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M6 6l12 12\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>\n  <path d=\"M18 6L6 18\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M6 6l12 12\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M18 6L6 18\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M17.18 19L17.50 19.20L17.75 19.28L18 19.30L18.25 19.28L18.50 19.20L18.82 19L19 18.82L19.15 18.61L19.28 18.25L19.30 18L19.28 17.75L19.15 17.39L18.92 17.08L13.84 12L19 6.82L19.20 6.50L19.28 6.25L19.30 6L19.28 5.75L19.20 5.50L19 5.18L18.82 5L18.61 4.85L18.38 4.76L18.13 4.71L17.87 4.71L17.62 4.76L17.28 4.92L17.08 5.08L12 10.16L6.82 5L6.50 4.80L6.25 4.72L6 4.70L5.75 4.72L5.50 4.80L5.18 5L5 5.18L4.85 5.39L4.72 5.75L4.70 6L4.72 6.25L4.80 6.50L4.92 6.72L5.08 6.92L10.16 12L5 17.18L4.80 17.50L4.72 17.75L4.70 18L4.72 18.25L4.80 18.50L5 18.82L5.18 19L5.39 19.15L5.75 19.28L6 19.30L6.25 19.28L6.50 19.20L6.72 19.08L6.92 18.92L12 13.84Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M18.92 17.08L13.84 12L18.92 6.92L17.08 5.08L12 10.16L6.92 5.08L5.08 6.92L10.16 12L5.08 17.08L6.92 18.92L12 13.84L17.08 18.92Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M18 19.84L19.84 18L13.84 12L19.84 6L18 4.16L12 10.16L6 4.16L4.16 6L10.16 12L4.16 18L6 19.84L12 13.84Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M6 6l12 12\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M18 6L6 18\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M6 6l12 12\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M18 6L6 18\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M6 6l12 12\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.6\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>\n  <path d=\"M18 6L6 18\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.6\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
};

export const Close = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Close.displayName = 'Close';
