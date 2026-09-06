import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M4 20l.9-4.4L16.6 3.9a2.5 2.5 0 0 1 3.5 3.5L8.4 19.1z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M14 6.5l3.5 3.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M4 20l1-4.5L17 3.5l3.5 3.5-12 12z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>\n  <path d=\"M14 6.5l3.5 3.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M4 20l.9-4.4L16.6 3.9a2.5 2.5 0 0 1 3.5 3.5L8.4 19.1z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M14 6.5l3.5 3.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M3.25 19.92L3.28 20.22L3.38 20.42L3.47 20.53L3.71 20.69L4 20.75L8.55 19.83L8.82 19.72L17.62 10.94L17.41 10.95L17.22 10.91L16.97 10.79L16.83 10.67L13.27 7.10L13.16 6.95L13.09 6.78L13.05 6.59L13.06 6.38L4.28 15.18L4.17 15.45ZM18.68 9.88L20.63 7.93L20.93 7.49L21.10 7.14L21.20 6.86L21.31 6.40L21.35 6.01L21.34 5.71L21.30 5.33L21.18 4.87L21.07 4.59L20.90 4.25L20.63 3.86L20.37 3.57L20.07 3.32L19.83 3.15L19.49 2.96L19.05 2.79L18.67 2.70L18.29 2.66L17.99 2.65L17.60 2.69L17.23 2.77L16.86 2.90L16.51 3.07L16.13 3.32L13.88 5.56L14.09 5.55L14.28 5.59L14.45 5.66L14.60 5.77L18.17 9.33L18.34 9.55L18.41 9.72L18.45 9.91L18.44 10.12Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M4.35 20.69L8.88 19.68L21.56 7L17 2.44L4.32 15.12L3.01 20.99ZM13.33 7.17L14.67 5.83L18.17 9.33L16.83 10.67Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M3.25 19.92L3.28 20.22L3.38 20.42L3.47 20.53L3.71 20.69L4 20.75L8.55 19.83L8.82 19.72L17.36 11.20L12.80 6.64L4.28 15.18L4.17 15.45ZM19.17 9.39L20.68 7.87L20.89 7.57L21.07 7.22L21.23 6.77L21.31 6.40L21.34 6.10L21.34 5.63L21.28 5.24L21.21 4.95L21.04 4.51L20.85 4.17L20.63 3.86L20.37 3.57L20.14 3.37L19.75 3.10L19.41 2.93L19.05 2.79L18.76 2.72L18.37 2.66L17.90 2.66L17.52 2.70L17.14 2.80L16.86 2.90L16.51 3.07L16.13 3.32L14.14 5.30L18.70 9.86Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M4 20l.9-4.4L16.6 3.9a2.5 2.5 0 0 1 3.5 3.5L8.4 19.1z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M4 20l.9-4.4L16.6 3.9a2.5 2.5 0 0 1 3.5 3.5L8.4 19.1z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M14 6.5l3.5 3.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M4 20l.9-4.4L16.6 3.9a2.5 2.5 0 0 1 3.5 3.5L8.4 19.1z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M14 6.5l3.5 3.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M4 20l.9-4.4L16.6 3.9a2.5 2.5 0 0 1 3.5 3.5L8.4 19.1z\" fill=\"currentColor\" opacity=\"0.4\"/>\n  <path d=\"M14 6.5l3.5 3.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.8\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
};

export const Pencil = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Pencil.displayName = 'Pencil';
