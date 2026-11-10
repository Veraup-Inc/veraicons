import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M14.6 4.4l1.47-1.46c1.33-1.34 2.43-1.34 3.76-.01l1.23 1.24c1.34 1.33 1.34 2.43 .01 3.76l-1.47 1.47M14.6 4.4l5 5M14.6 4.4l-10.1 10.1l-1.5 6.5l6.5-1.5l10.1-10.1\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M14.6 4.4l3.2-3.2l4.8 4.8l-3.2 3.2M14.6 4.4l5 5M14.6 4.4l-10.1 10.1l-1.5 6.5l6.5-1.5l10.1-10.1\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M14.6 4.4l1.9-1.9a2 2 0 0 1 2.9 0l2.1 2.1a2 2 0 0 1 0 2.9l-1.9 1.9M14.6 4.4l5 5M14.6 4.4l-10.1 10.1l-1.5 6.5l6.5-1.5l10.1-10.1\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M20.19 9.87L21.79 8.26L22.23 7.73L22.49 7.30L22.72 6.73L22.81 6.23L22.82 6.01L22.78 5.64L22.65 5.16L22.49 4.80L22.35 4.56L21.92 4L20.19 2.23L19.59 1.75L19.24 1.53L18.99 1.41L18.63 1.28L18.35 1.22L17.98 1.18L17.69 1.20L17.33 1.27L17.06 1.35L16.70 1.51L16.46 1.65L16.08 1.92L15.71 2.24L3.88 14.08L3.77 14.33L2.27 20.83L2.26 21.12L2.36 21.39L2.50 21.56L2.68 21.68L2.88 21.74L3.10 21.74L9.67 20.23L9.92 20.12Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M13.65 4.29L3.82 14.12L2 22L9.88 20.18L20.66 9.40L20.46 9.20L23.66 6L17.80 0.14Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M20.21 9.85L22.13 7.93L22.36 7.64L22.56 7.33L22.66 7.11L22.78 6.76L22.87 6.21L22.84 5.65L22.71 5.11L22.47 4.61L22.16 4.21L19.83 1.87L19.50 1.61L19.23 1.44L18.89 1.29L18.53 1.19L18.30 1.15L17.98 1.13L17.60 1.15L17.37 1.19L17.01 1.29L16.51 1.53L16.07 1.87L3.88 14.08L3.77 14.33L2.27 20.83L2.26 21.12L2.36 21.39L2.50 21.56L2.68 21.68L2.88 21.74L3.10 21.74L9.67 20.23L9.92 20.12Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M14.6 4.4l1.47-1.46c1.33-1.34 2.43-1.34 3.76-.01l1.23 1.24c1.34 1.33 1.34 2.43 .01 3.76l-1.47 1.47M14.6 4.4l5 5M14.6 4.4l-10.1 10.1l-1.5 6.5l6.5-1.5l10.1-10.1z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M14.6 4.4l1.47-1.46c1.33-1.34 2.43-1.34 3.76-.01l1.23 1.24c1.34 1.33 1.34 2.43 .01 3.76l-1.47 1.47M14.6 4.4l5 5M14.6 4.4l-10.1 10.1l-1.5 6.5l6.5-1.5l10.1-10.1\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M14.6 4.4l1.9-1.9a2 2 0 0 1 2.9 0l2.1 2.1a2 2 0 0 1 0 2.9l-1.9 1.9M14.6 4.4l5 5M14.6 4.4l-10.1 10.1l-1.5 6.5l6.5-1.5l10.1-10.1z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M14.6 4.4l1.9-1.9a2 2 0 0 1 2.9 0l2.1 2.1a2 2 0 0 1 0 2.9l-1.9 1.9M14.6 4.4l5 5M14.6 4.4l-10.1 10.1l-1.5 6.5l6.5-1.5l10.1-10.1\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M14.6 4.4l1.47-1.46c1.33-1.34 2.43-1.34 3.76-.01l1.23 1.24c1.34 1.33 1.34 2.43 .01 3.76l-1.47 1.47M14.6 4.4l5 5M14.6 4.4l-10.1 10.1l-1.5 6.5l6.5-1.5l10.1-10.1\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M14.6 4.4l1.47-1.46c1.33-1.34 2.43-1.34 3.76-.01l1.23 1.24c1.34 1.33 1.34 2.43 .01 3.76l-1.47 1.47M14.6 4.4l5 5M14.6 4.4l-10.1 10.1l-1.5 6.5l6.5-1.5l10.1-10.1z\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Edit = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Edit.displayName = 'Edit';
