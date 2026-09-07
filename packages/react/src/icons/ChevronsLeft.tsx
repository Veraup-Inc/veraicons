import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M18 6l-6 6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M11 6l-6 6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M18 6l-6 6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>\n  <path d=\"M11 6l-6 6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M18 6l-6 6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M11 6l-6 6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M4 11.18L3.80 11.50L3.72 11.75L3.70 12L3.72 12.25L3.80 12.50L4 12.82L10.08 18.92L10.28 19.08L10.50 19.20L10.75 19.28L11 19.30L11.25 19.28L11.50 19.20L11.72 19.08L11.92 18.92L12.08 18.72L12.20 18.50L12.29 18.13L12.29 17.87L12.24 17.62L12.08 17.28L11.92 17.08L6.84 12L11.92 6.92L12.08 6.72L12.24 6.38L12.29 6.13L12.29 5.87L12.20 5.50L12.08 5.28L11.92 5.08L11.72 4.92L11.50 4.80L11.25 4.72L11 4.70L10.75 4.72L10.50 4.80L10.18 5ZM11 11.18L10.80 11.50L10.72 11.75L10.70 12L10.72 12.25L10.80 12.50L11 12.82L17.08 18.92L17.28 19.08L17.50 19.20L17.75 19.28L18 19.30L18.25 19.28L18.50 19.20L18.72 19.08L18.92 18.92L19.08 18.72L19.20 18.50L19.29 18.13L19.28 17.75L19.20 17.50L19.08 17.28L18.92 17.08L13.84 12L18.92 6.92L19.08 6.72L19.20 6.50L19.28 6.25L19.29 5.87L19.20 5.50L19.08 5.28L18.92 5.08L18.61 4.85L18.38 4.76L18.13 4.71L17.87 4.71L17.62 4.76L17.39 4.85L17.18 5Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M10.08 18.92L11.92 17.08L6.84 12L11.92 6.92L10.08 5.08L3.16 12ZM17.08 18.92L18.92 17.08L13.84 12L18.92 6.92L17.08 5.08L10.16 12Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M4 11.18L3.80 11.50L3.72 11.75L3.70 12L3.72 12.25L3.80 12.50L4 12.82L11 19.84L12.84 18L6.84 12L12.84 6L11 4.16ZM11 11.18L10.80 11.50L10.72 11.75L10.70 12L10.72 12.25L10.80 12.50L11 12.82L18 19.84L19.84 18L13.84 12L19.84 6L18 4.16Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M18 6l-6 6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M11 6l-6 6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M18 6l-6 6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M11 6l-6 6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M18 6l-6 6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M11 6l-6 6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M18 6l-6 6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.6\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>\n  <path d=\"M11 6l-6 6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.6\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
};

export const ChevronsLeft = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
ChevronsLeft.displayName = 'ChevronsLeft';
