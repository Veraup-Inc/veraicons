import * as React from 'react';
import type { VeraIconProps } from '../types';

const bodies: Record<string, string> = {
  'stroke-rounded': "<rect x=\"3\" y=\"5\" width=\"16\" height=\"16\" rx=\"4.0\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M10.5 13.5L21 3M14.5 3H21v6.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<rect x=\"3\" y=\"5\" width=\"16\" height=\"16\" rx=\"0.0\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>\n  <path d=\"M10.5 13.5L21 3M14.5 3H21v6.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>",
  'stroke-standard': "<rect x=\"3\" y=\"5\" width=\"16\" height=\"16\" rx=\"2.0\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M10.5 13.5L21 3M14.5 3H21v6.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M7 4.25L6.26 4.31L5.53 4.48L4.84 4.77L4.21 5.16L3.64 5.64L3.16 6.21L2.77 6.84L2.47 7.59L2.31 8.26L2.25 9L2.25 17.06L2.31 17.74L2.48 18.47L2.77 19.16L3.12 19.74L3.68 20.40L4.21 20.84L4.84 21.23L5.59 21.53L6.26 21.69L6.94 21.75L15 21.75L15.68 21.70L16.52 21.50L17.16 21.23L17.74 20.88L18.40 20.32L18.84 19.79L19.20 19.21L19.52 18.47L19.70 17.68L19.75 17L19.75 8.94L19.69 8.26L19.52 7.53L19.23 6.84L18.96 6.39L11.17 14.17L10.95 14.34L10.78 14.41L10.59 14.45L10.31 14.43L10.14 14.38L9.90 14.23L9.77 14.10L9.62 13.86L9.55 13.59L9.55 13.41L9.62 13.14L9.77 12.90L17.61 5.04L17.16 4.77L16.47 4.48L15.74 4.31L15.06 4.25Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M2.25 21.75L19.75 21.75L19.75 5.59L11.17 14.17L9.83 12.83L18.41 4.25L2.25 4.25Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M5 4.25L4.57 4.28L4.15 4.38L3.75 4.55L3.34 4.81L3.02 5.10L2.78 5.38L2.58 5.70L2.38 6.15L2.28 6.57L2.25 7L2.25 19L2.28 19.43L2.38 19.85L2.55 20.25L2.81 20.66L3.06 20.94L3.34 21.19L3.75 21.45L4.15 21.62L4.51 21.70L5 21.75L17.06 21.75L17.43 21.72L17.85 21.62L18.25 21.45L18.66 21.19L18.94 20.94L19.19 20.66L19.45 20.25L19.63 19.79L19.72 19.43L19.75 19.06L19.75 7L19.70 6.51L19.62 6.15L19.49 5.85L10.50 14.84L9.16 13.50L18.15 4.51L17.85 4.38L17.49 4.30L17 4.25Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<rect x=\"3\" y=\"5\" width=\"16\" height=\"16\" rx=\"4.0\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <rect x=\"3\" y=\"5\" width=\"16\" height=\"16\" rx=\"4.0\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M10.5 13.5L21 3M14.5 3H21v6.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<rect x=\"3\" y=\"5\" width=\"16\" height=\"16\" rx=\"4.0\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M10.5 13.5L21 3M14.5 3H21v6.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<rect x=\"3\" y=\"5\" width=\"16\" height=\"16\" rx=\"4.0\" fill=\"currentColor\" opacity=\"0.4\"/>\n  <path d=\"M10.5 13.5L21 3M14.5 3H21v6.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.8\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
};

export const ExternalLink = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
ExternalLink.displayName = 'ExternalLink';
