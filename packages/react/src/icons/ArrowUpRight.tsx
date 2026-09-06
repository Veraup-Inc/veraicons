import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M6 18L18 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M8.5 6H18v9.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M6 18L18 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>\n  <path d=\"M8.5 6H18v9.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M6 18L18 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M8.5 6H18v9.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M16.70 15.50L16.72 15.75L16.80 16L16.92 16.22L17.08 16.42L17.28 16.58L17.50 16.70L17.87 16.79L18.25 16.78L18.50 16.70L18.72 16.58L18.92 16.42L19.08 16.22L19.20 16L19.28 15.75L19.30 15.50L19.30 6L19.28 5.75L19.20 5.50L19 5.18L18.82 5L18.61 4.85L18.38 4.76L18 4.70L8.50 4.70L8.25 4.72L8 4.80L7.68 5L7.42 5.28L7.30 5.50L7.21 5.87L7.22 6.25L7.35 6.61L7.58 6.92L7.89 7.15L8.12 7.24L8.50 7.30L14.86 7.30L5 17.18L4.80 17.50L4.72 17.75L4.70 18L4.72 18.25L4.80 18.50L5 18.82L5.18 19L5.39 19.15L5.62 19.24L5.87 19.29L6.13 19.29L6.38 19.24L6.61 19.15L6.82 19L16.70 9.14Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M16.70 15.50L19.30 15.50L19.30 4.70L8.50 4.70L8.50 7.30L14.86 7.30L5.08 17.08L6.92 18.92L16.70 9.14Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M16.70 15.50L16.70 16.80L19.30 16.80L19.30 6.54L19.84 6L18 4.16L17.46 4.70L7.20 4.70L7.20 7.30L14.86 7.30L4.16 18L6 19.84L16.70 9.14Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M6 18L18 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M8.5 6H18v9.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M6 18L18 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M8.5 6H18v9.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M6 18L18 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.6\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>\n  <path d=\"M8.5 6H18v9.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.6\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
};

export const ArrowUpRight = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
ArrowUpRight.displayName = 'ArrowUpRight';
