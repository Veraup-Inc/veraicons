import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"5.0\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"0.0\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M16 2.25L8 2.25L7.04 2.33L6.22 2.53L5.44 2.85L4.62 3.35L3.89 3.98L3.35 4.62L2.91 5.34L2.52 6.28L2.32 7.10L2.25 7.94L2.25 16L2.32 16.90L2.53 17.78L2.85 18.56L3.35 19.38L3.98 20.11L4.62 20.65L5.34 21.09L6.28 21.48L7.10 21.68L7.94 21.75L16 21.75L16.90 21.68L17.83 21.45L18.61 21.12L19.38 20.65L20.11 20.02L20.65 19.38L21.09 18.66L21.48 17.72L21.68 16.90L21.75 16L21.75 8L21.68 7.10L21.47 6.22L21.12 5.39L20.65 4.62L20.07 3.93L19.38 3.35L18.61 2.88L17.78 2.53L16.90 2.32Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M2.25 2.25L2.25 21.75L21.75 21.75L21.75 2.25Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M18.50 2.25L5.50 2.25L5.05 2.28L4.50 2.41L3.97 2.63L3.59 2.87L3.25 3.16L2.91 3.54L2.60 4.02L2.41 4.50L2.29 4.99L2.25 5.44L2.25 18.50L2.29 19.01L2.39 19.45L2.60 19.98L2.91 20.46L3.20 20.80L3.54 21.09L4.02 21.40L4.50 21.59L4.99 21.71L5.44 21.75L18.50 21.75L19.01 21.71L19.45 21.61L19.98 21.40L20.46 21.09L20.80 20.80L21.09 20.46L21.40 19.98L21.59 19.50L21.71 19.01L21.75 18.56L21.75 5.50L21.71 4.99L21.59 4.50L21.40 4.02L21.13 3.59L20.75 3.16L20.41 2.87L20.03 2.63L19.56 2.43L19.01 2.29Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"5.0\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"5.0\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2.5\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"5.0\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"5.0\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Square = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Square.displayName = 'Square';
