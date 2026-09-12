import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M5.5 5.5A2.5 2.5 0 0 1 8 3h8a2.5 2.5 0 0 1 2.5 2.5v14.4c0 .9-1 1.4-1.7.9L12 17.5l-4.8 3.3c-.7.5-1.7 0-1.7-.9z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M5.5 3h13v18L12 17l-6.5 4z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M5.5 5.5A2.5 2.5 0 0 1 8 3h8a2.5 2.5 0 0 1 2.5 2.5v14.4c0 .9-1 1.4-1.7.9L12 17.5l-4.8 3.3c-.7.5-1.7 0-1.7-.9z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M4.75 5.48L4.75 19.93L4.78 20.22L4.87 20.56L5.02 20.86L5.21 21.13L5.37 21.29L5.63 21.48L5.92 21.62L6.16 21.70L6.48 21.74L6.71 21.74L7.04 21.69L7.30 21.60L7.62 21.42L12 18.41L16.38 21.42L16.70 21.60L16.96 21.69L17.19 21.73L17.45 21.75L17.68 21.73L17.93 21.67L18.14 21.60L18.42 21.44L18.63 21.29L18.89 21L19.07 20.71L19.21 20.29L19.25 19.93L19.25 5.50L19.19 4.89L19.13 4.64L19.01 4.28L18.90 4.04L18.72 3.72L18.43 3.34L18.16 3.07L17.96 2.91L17.65 2.70L17.42 2.57L17.07 2.43L16.82 2.35L16.24 2.26L8 2.25L7.55 2.28L7.18 2.35L6.93 2.43L6.40 2.67L6 2.94L5.72 3.18L5.54 3.38L5.31 3.67L5.17 3.90L4.93 4.43L4.81 4.89Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M4.75 2.25L4.75 22.30L4.79 22.32L12 17.88L19.21 22.32L19.25 22.30L19.25 2.25Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M4.75 5.48L4.75 19.93L4.78 20.22L4.87 20.56L5.02 20.86L5.21 21.13L5.37 21.29L5.63 21.48L5.92 21.62L6.16 21.70L6.48 21.74L6.71 21.74L7.04 21.69L7.30 21.60L7.62 21.42L12 18.41L16.38 21.42L16.70 21.60L16.96 21.69L17.19 21.73L17.45 21.75L17.68 21.73L17.93 21.67L18.14 21.60L18.42 21.44L18.63 21.29L18.89 21L19.07 20.71L19.21 20.29L19.25 19.93L19.25 5.50L19.19 4.89L19.13 4.64L19.01 4.28L18.90 4.04L18.72 3.72L18.43 3.34L18.16 3.07L17.96 2.91L17.65 2.70L17.42 2.57L17.07 2.43L16.82 2.35L16.24 2.26L8 2.25L7.55 2.28L7.18 2.35L6.93 2.43L6.40 2.67L6 2.94L5.72 3.18L5.54 3.38L5.31 3.67L5.17 3.90L4.93 4.43L4.81 4.89Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M5.5 5.5A2.5 2.5 0 0 1 8 3h8a2.5 2.5 0 0 1 2.5 2.5v14.4c0 .9-1 1.4-1.7.9L12 17.5l-4.8 3.3c-.7.5-1.7 0-1.7-.9z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M5.5 5.5A2.5 2.5 0 0 1 8 3h8a2.5 2.5 0 0 1 2.5 2.5v14.4c0 .9-1 1.4-1.7.9L12 17.5l-4.8 3.3c-.7.5-1.7 0-1.7-.9z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M5.5 5.5A2.5 2.5 0 0 1 8 3h8a2.5 2.5 0 0 1 2.5 2.5v14.4c0 .9-1 1.4-1.7.9L12 17.5l-4.8 3.3c-.7.5-1.7 0-1.7-.9z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M5.5 5.5A2.5 2.5 0 0 1 8 3h8a2.5 2.5 0 0 1 2.5 2.5v14.4c0 .9-1 1.4-1.7.9L12 17.5l-4.8 3.3c-.7.5-1.7 0-1.7-.9z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M5.5 5.5A2.5 2.5 0 0 1 8 3h8a2.5 2.5 0 0 1 2.5 2.5v14.4c0 .9-1 1.4-1.7.9L12 17.5l-4.8 3.3c-.7.5-1.7 0-1.7-.9z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M5.5 5.5A2.5 2.5 0 0 1 8 3h8a2.5 2.5 0 0 1 2.5 2.5v14.4c0 .9-1 1.4-1.7.9L12 17.5l-4.8 3.3c-.7.5-1.7 0-1.7-.9z\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Bookmark = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Bookmark.displayName = 'Bookmark';
