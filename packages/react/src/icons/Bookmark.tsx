import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M4.78 5.61c0-2.56 1.05-3.61 3.61-3.61h7.22c2.56 0 3.61 1.05 3.61 3.61v15.17c0 1-1.11 1.55-1.89 1l-5.33-3.67l-5.33 3.67c-.78 .55-1.89 0-1.89-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M4.78 2h14.44v20l-7.22-4.45l-7.22 4.45z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M4.78 4.78a2.78 2.78 0 0 1 2.78-2.78h8.88a2.78 2.78 0 0 1 2.78 2.78v16c0 1-1.11 1.55-1.89 1l-5.33-3.67l-5.33 3.67c-.78 .55-1.89 0-1.89-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M4.03 5.60L4.03 20.81L4.06 21.13L4.16 21.48L4.31 21.81L4.52 22.09L4.69 22.26L4.97 22.46L5.27 22.61L5.53 22.69L5.87 22.74L6.12 22.74L6.47 22.69L6.74 22.59L7.10 22.40L12 19.02L16.90 22.40L17.26 22.59L17.53 22.69L17.78 22.73L18.06 22.75L18.40 22.71L18.63 22.65L18.94 22.51L19.17 22.37L19.36 22.21L19.65 21.87L19.82 21.55L19.93 21.19L19.97 20.81L19.96 5.28L19.87 4.34L19.80 4.01L19.65 3.50L19.39 2.94L19.11 2.54L18.93 2.34L18.73 2.15L18.46 1.95L18.22 1.80L17.77 1.59L17.17 1.41L16.61 1.31L16.26 1.27L15.61 1.25L8.38 1.25L7.43 1.30L6.83 1.41L6.23 1.59L5.78 1.80L5.54 1.95L5.12 2.29L4.93 2.49L4.73 2.76L4.46 3.24L4.35 3.50L4.20 4.01L4.08 4.65Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M4.03 1.25L4.03 23.30L4.07 23.32L12 18.43L19.93 23.32L19.97 23.30L19.97 1.25Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M4.03 4.76L4.03 20.81L4.06 21.13L4.16 21.48L4.31 21.81L4.52 22.09L4.69 22.26L4.97 22.46L5.27 22.61L5.53 22.69L5.87 22.74L6.12 22.74L6.47 22.69L6.74 22.59L7.10 22.40L12 19.02L16.90 22.40L17.26 22.59L17.53 22.69L17.78 22.73L18.06 22.75L18.30 22.73L18.57 22.67L18.88 22.54L19.09 22.43L19.31 22.26L19.59 21.95L19.77 21.65L19.93 21.19L19.97 20.81L19.97 4.78L19.91 4.12L19.77 3.62L19.51 3.04L19.36 2.80L19.11 2.47L18.75 2.11L18.42 1.86L18.18 1.71L17.81 1.53L17.55 1.43L17.15 1.32L16.88 1.28L16.44 1.25L7.56 1.25L7.07 1.28L6.67 1.36L6.40 1.45L5.82 1.71L5.58 1.86L5.25 2.11L4.89 2.47L4.52 2.99L4.29 3.45L4.16 3.84L4.09 4.12Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M4.78 5.61c0-2.56 1.05-3.61 3.61-3.61h7.22c2.56 0 3.61 1.05 3.61 3.61v15.17c0 1-1.11 1.55-1.89 1l-5.33-3.67l-5.33 3.67c-.78 .55-1.89 0-1.89-1z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M4.78 5.61c0-2.56 1.05-3.61 3.61-3.61h7.22c2.56 0 3.61 1.05 3.61 3.61v15.17c0 1-1.11 1.55-1.89 1l-5.33-3.67l-5.33 3.67c-.78 .55-1.89 0-1.89-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M4.78 4.78a2.78 2.78 0 0 1 2.78-2.78h8.88a2.78 2.78 0 0 1 2.78 2.78v16c0 1-1.11 1.55-1.89 1l-5.33-3.67l-5.33 3.67c-.78 .55-1.89 0-1.89-1z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M4.78 4.78a2.78 2.78 0 0 1 2.78-2.78h8.88a2.78 2.78 0 0 1 2.78 2.78v16c0 1-1.11 1.55-1.89 1l-5.33-3.67l-5.33 3.67c-.78 .55-1.89 0-1.89-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M4.78 5.61c0-2.56 1.05-3.61 3.61-3.61h7.22c2.56 0 3.61 1.05 3.61 3.61v15.17c0 1-1.11 1.55-1.89 1l-5.33-3.67l-5.33 3.67c-.78 .55-1.89 0-1.89-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M4.78 5.61c0-2.56 1.05-3.61 3.61-3.61h7.22c2.56 0 3.61 1.05 3.61 3.61v15.17c0 1-1.11 1.55-1.89 1l-5.33-3.67l-5.33 3.67c-.78 .55-1.89 0-1.89-1z\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Bookmark = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Bookmark.displayName = 'Bookmark';
