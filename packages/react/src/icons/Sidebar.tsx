import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"4.0\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M9.5 4v16\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"0.0\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>\n  <path d=\"M9.5 4v16\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>",
  'stroke-standard': "<rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"2.0\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M9.5 4v16\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M10.08 3.25L10.23 3.40L10.34 3.55L10.43 3.81L10.45 4L10.45 20L10.41 20.28L10.34 20.45L10.23 20.60L10.08 20.75L17.06 20.75L17.74 20.69L18.41 20.53L19.16 20.23L19.79 19.84L20.32 19.40L20.84 18.79L21.26 18.10L21.52 17.47L21.69 16.74L21.75 16L21.75 7.94L21.69 7.26L21.53 6.59L21.23 5.84L20.84 5.21L20.40 4.68L19.79 4.16L19.10 3.74L18.47 3.48L17.80 3.32L17 3.25ZM7 3.25L6.26 3.31L5.53 3.48L4.84 3.77L4.21 4.16L3.64 4.64L3.16 5.21L2.77 5.84L2.48 6.53L2.31 7.26L2.25 8L2.25 16L2.30 16.68L2.50 17.52L2.77 18.16L3.12 18.74L3.64 19.36L4.26 19.88L4.84 20.23L5.48 20.50L6.26 20.69L7 20.75L8.92 20.75L8.77 20.60L8.66 20.45L8.57 20.19L8.55 20L8.55 4L8.57 3.81L8.66 3.55L8.77 3.40L8.92 3.25Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M2.25 20.75L21.75 20.75L21.75 3.25L2.25 3.25ZM8.55 4L10.45 4L10.45 20L8.55 20Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M10.45 3.25L10.45 20.75L19 20.75L19.43 20.72L19.79 20.63L20.30 20.42L20.62 20.22L20.94 19.94L21.22 19.62L21.42 19.30L21.63 18.79L21.72 18.43L21.75 18.06L21.75 6L21.72 5.57L21.63 5.21L21.42 4.70L21.22 4.38L20.98 4.10L20.62 3.78L20.19 3.53L19.85 3.38L19.43 3.28L19 3.25ZM5 3.25L4.57 3.28L4.15 3.38L3.75 3.55L3.34 3.81L3.02 4.10L2.78 4.38L2.58 4.70L2.38 5.15L2.28 5.57L2.25 6L2.25 18L2.30 18.49L2.38 18.85L2.55 19.25L2.78 19.62L3.02 19.90L3.43 20.26L3.75 20.45L4.15 20.62L4.57 20.72L5 20.75L8.55 20.75L8.55 3.25Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"4.0\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"4.0\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M9.5 4v16\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"4.0\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M9.5 4v16\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"4.0\" fill=\"currentColor\" opacity=\"0.4\"/>\n  <path d=\"M9.5 4v16\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.8\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
};

export const Sidebar = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Sidebar.displayName = 'Sidebar';
