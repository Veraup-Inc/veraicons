import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M21.25 14.50L21.19 14.21L21.07 14.02L20.84 13.83L20.56 13.75L20.33 13.77L19.52 14.04L18.79 14.20L18.05 14.30L17.31 14.32L16.56 14.28L15.83 14.16L15.11 13.97L14.41 13.71L13.73 13.39L13.09 13L12.50 12.56L11.94 12.06L11.44 11.50L11 10.91L10.61 10.27L10.29 9.59L10.03 8.89L9.84 8.17L9.72 7.44L9.68 6.69L9.70 5.95L9.80 5.21L9.96 4.48L10.21 3.74L10.25 3.52L10.22 3.30L10.14 3.10L9.94 2.89L9.74 2.79L9.53 2.75L9.24 2.80L7.91 3.44L6.61 4.36L5.53 5.44L4.67 6.63L3.96 8.05L3.51 9.58L3.33 11.03L3.39 12.50L3.71 14.06L4.26 15.48L5.05 16.80L6.08 18.01L7.20 18.95L8.46 19.71L9.88 20.27L11.44 20.60L13.03 20.66L14.54 20.46L15.95 20.04L17.27 19.39L18.56 18.47L19.64 17.39L20.53 16.15L21.17 14.83L21.22 14.70Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M21.25 13.46L19.52 14.04L18.79 14.20L18.05 14.30L17.31 14.32L16.56 14.28L15.83 14.16L15.11 13.97L14.41 13.71L13.73 13.39L13.09 13L12.50 12.56L11.94 12.06L11.44 11.50L11 10.91L10.61 10.27L10.29 9.59L10.03 8.89L9.84 8.17L9.72 7.44L9.68 6.69L9.70 5.95L9.80 5.21L9.96 4.48L10.78 2.04L7.85 3.47L6.61 4.35L5.52 5.43L4.63 6.68L3.96 8.05L3.52 9.52L3.33 11.03L3.39 12.56L3.71 14.06L4.26 15.49L5.05 16.80L6.03 17.97L7.20 18.95L8.51 19.74L9.94 20.29L11.44 20.61L12.97 20.67L14.48 20.48L15.95 20.04L17.32 19.37L18.57 18.48L19.65 17.39L20.53 16.15L21.25 14.67Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M21.25 14.50L21.19 14.21L21.07 14.02L20.84 13.83L20.56 13.75L20.33 13.77L19.52 14.04L18.79 14.20L18.05 14.30L17.31 14.32L16.56 14.28L15.83 14.16L15.11 13.97L14.41 13.71L13.73 13.39L13.09 13L12.50 12.56L11.94 12.06L11.44 11.50L11 10.91L10.61 10.27L10.29 9.59L10.03 8.89L9.84 8.17L9.72 7.44L9.68 6.69L9.70 5.95L9.80 5.21L9.96 4.48L10.21 3.74L10.25 3.52L10.22 3.30L10.14 3.10L9.94 2.89L9.74 2.79L9.53 2.75L9.24 2.80L7.91 3.44L6.61 4.36L5.53 5.44L4.67 6.63L3.96 8.05L3.51 9.58L3.33 11.03L3.39 12.50L3.71 14.06L4.26 15.48L5.05 16.80L6.08 18.01L7.20 18.95L8.46 19.71L9.88 20.27L11.44 20.60L13.03 20.66L14.54 20.46L15.95 20.04L17.27 19.39L18.56 18.47L19.64 17.39L20.53 16.15L21.17 14.83L21.22 14.70Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11zz\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11zz\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11zz\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Evening = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Evening.displayName = 'Evening';
