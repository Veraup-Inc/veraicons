import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M12 2.5l7.5 2.7v6.3c0 4.3-3.2 7.9-7.5 10-4.3-2.1-7.5-5.7-7.5-10V5.2z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M12 2.5l7.5 2.7v6.3c0 4.3-3.2 7.9-7.5 10-4.3-2.1-7.5-5.7-7.5-10V5.2z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M12 2.5l7.5 2.7v6.3c0 4.3-3.2 7.9-7.5 10-4.3-2.1-7.5-5.7-7.5-10V5.2z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M12.25 1.79L12.04 1.75L11.75 1.79L4.25 4.49L4.04 4.60L3.89 4.77L3.78 4.97L3.75 5.20L3.75 11.50L3.77 12.06L3.82 12.63L3.91 13.24L4.02 13.75L4.18 14.29L4.37 14.87L4.81 15.86L5.37 16.84L6.04 17.78L6.79 18.65L7.65 19.50L8.57 20.26L9.05 20.62L10.04 21.28L10.59 21.60L11.66 22.17L11.86 22.24L12 22.25L12.14 22.24L12.34 22.17L13.43 21.59L14.47 20.95L15.43 20.26L16.35 19.50L16.80 19.07L17.57 18.25L17.96 17.78L18.61 16.87L18.92 16.36L19.41 15.39L19.64 14.83L19.82 14.29L19.97 13.79L20.10 13.19L20.18 12.63L20.23 12.10L20.25 11.50L20.25 5.20L20.22 4.97L20.15 4.83L20.07 4.71L19.89 4.56L19.75 4.49Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M12 1.70L3.75 4.67L3.75 11.51L3.77 12.08L3.82 12.65L3.91 13.22L4.03 13.77L4.18 14.31L4.36 14.85L4.58 15.37L5.09 16.37L5.70 17.33L6.41 18.23L6.80 18.67L7.64 19.49L8.55 20.25L9.54 20.95L10.58 21.60L12 22.34L12.88 21.89L13.95 21.28L14.96 20.61L15.45 20.25L16.36 19.49L16.79 19.08L17.59 18.23L17.95 17.79L18.62 16.86L18.91 16.37L19.42 15.37L19.64 14.85L19.82 14.31L19.97 13.77L20.09 13.22L20.18 12.65L20.23 12.08L20.25 11.51L20.25 4.67Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M12.25 1.79L12.04 1.75L11.75 1.79L4.25 4.49L4.04 4.60L3.89 4.77L3.78 4.97L3.75 5.20L3.75 11.50L3.77 12.06L3.82 12.63L3.91 13.24L4.02 13.75L4.18 14.29L4.37 14.87L4.81 15.86L5.37 16.84L6.04 17.78L6.79 18.65L7.65 19.50L8.57 20.26L9.05 20.62L10.04 21.28L10.59 21.60L11.66 22.17L11.86 22.24L12 22.25L12.14 22.24L12.34 22.17L13.43 21.59L14.47 20.95L15.43 20.26L16.35 19.50L16.80 19.07L17.57 18.25L17.96 17.78L18.61 16.87L18.92 16.36L19.41 15.39L19.64 14.83L19.82 14.29L19.97 13.79L20.10 13.19L20.18 12.63L20.23 12.10L20.25 11.50L20.25 5.20L20.22 4.97L20.15 4.83L20.07 4.71L19.89 4.56L19.75 4.49Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M12 2.5l7.5 2.7v6.3c0 4.3-3.2 7.9-7.5 10-4.3-2.1-7.5-5.7-7.5-10V5.2z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M12 2.5l7.5 2.7v6.3c0 4.3-3.2 7.9-7.5 10-4.3-2.1-7.5-5.7-7.5-10V5.2z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M12 2.5l7.5 2.7v6.3c0 4.3-3.2 7.9-7.5 10-4.3-2.1-7.5-5.7-7.5-10V5.2z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M12 2.5l7.5 2.7v6.3c0 4.3-3.2 7.9-7.5 10-4.3-2.1-7.5-5.7-7.5-10V5.2z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M12 2.5l7.5 2.7v6.3c0 4.3-3.2 7.9-7.5 10-4.3-2.1-7.5-5.7-7.5-10V5.2z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M12 2.5l7.5 2.7v6.3c0 4.3-3.2 7.9-7.5 10-4.3-2.1-7.5-5.7-7.5-10V5.2z\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Shield = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Shield.displayName = 'Shield';
