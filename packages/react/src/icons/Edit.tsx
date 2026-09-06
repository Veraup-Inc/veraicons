import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M14.6 4.4l1.9-1.9a2 2 0 0 1 2.9 0l2.1 2.1a2 2 0 0 1 0 2.9L19.6 9.4M14.6 4.4l5 5M14.6 4.4L4.5 14.5 3 21l6.5-1.5L19.6 9.4\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M14.6 4.4l3.4-3.4 5 5-3.4 3.4M14.6 4.4l5 5M14.6 4.4L4.5 14.5 3 21l6.5-1.5L19.6 9.4\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M14.6 4.4l1.9-1.9a2 2 0 0 1 2.9 0l2.1 2.1a2 2 0 0 1 0 2.9L19.6 9.4M14.6 4.4l5 5M14.6 4.4L4.5 14.5 3 21l6.5-1.5L19.6 9.4\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M20.21 9.85L22.13 7.93L22.36 7.64L22.56 7.33L22.66 7.11L22.78 6.76L22.87 6.21L22.84 5.65L22.71 5.11L22.47 4.61L22.16 4.21L19.83 1.87L19.50 1.61L19.23 1.44L18.89 1.29L18.53 1.19L18.30 1.15L17.98 1.13L17.60 1.15L17.37 1.19L17.01 1.29L16.51 1.53L16.07 1.87L3.88 14.08L3.77 14.33L2.27 20.83L2.26 21.12L2.36 21.39L2.50 21.56L2.68 21.68L2.88 21.74L3.10 21.74L9.67 20.23L9.92 20.12Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M20.27 9.79L24.06 6L18 -0.06L3.82 14.12L2 22L9.88 20.18Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M20.21 9.85L22.13 7.93L22.36 7.64L22.56 7.33L22.66 7.11L22.78 6.76L22.87 6.21L22.84 5.65L22.71 5.11L22.47 4.61L22.16 4.21L19.83 1.87L19.50 1.61L19.23 1.44L18.89 1.29L18.53 1.19L18.30 1.15L17.98 1.13L17.60 1.15L17.37 1.19L17.01 1.29L16.51 1.53L16.07 1.87L3.88 14.08L3.77 14.33L2.27 20.83L2.26 21.12L2.36 21.39L2.50 21.56L2.68 21.68L2.88 21.74L3.10 21.74L9.67 20.23L9.92 20.12Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M14.6 4.4l1.9-1.9a2 2 0 0 1 2.9 0l2.1 2.1a2 2 0 0 1 0 2.9L19.6 9.4M14.6 4.4l5 5M14.6 4.4L4.5 14.5 3 21l6.5-1.5L19.6 9.4z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M14.6 4.4l1.9-1.9a2 2 0 0 1 2.9 0l2.1 2.1a2 2 0 0 1 0 2.9L19.6 9.4M14.6 4.4l5 5M14.6 4.4L4.5 14.5 3 21l6.5-1.5L19.6 9.4\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M14.6 4.4l1.9-1.9a2 2 0 0 1 2.9 0l2.1 2.1a2 2 0 0 1 0 2.9L19.6 9.4M14.6 4.4l5 5M14.6 4.4L4.5 14.5 3 21l6.5-1.5L19.6 9.4\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M14.6 4.4l1.9-1.9a2 2 0 0 1 2.9 0l2.1 2.1a2 2 0 0 1 0 2.9L19.6 9.4M14.6 4.4l5 5M14.6 4.4L4.5 14.5 3 21l6.5-1.5L19.6 9.4z\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Edit = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Edit.displayName = 'Edit';
