import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M3 12h3.5l3-7 4 14 3-7H21\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M3 12h3.5l3-7 4 14 3-7H21\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M3 12h3.5l3-7 4 14 3-7H21\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M5.64 10.70L3 10.70L2.62 10.76L2.39 10.85L2.18 11L2 11.18L1.85 11.39L1.76 11.62L1.71 11.87L1.71 12.13L1.76 12.38L1.85 12.61L2 12.82L2.28 13.08L2.50 13.20L2.87 13.29L6.50 13.30L6.75 13.28L7.11 13.15L7.41 12.93L7.64 12.63L9.25 8.87L12.29 19.48L12.48 19.81L12.66 19.99L12.98 20.19L13.35 20.29L13.74 20.28L14.10 20.15L14.41 19.93L14.64 19.63L17.36 13.30L21 13.30L21.25 13.28L21.61 13.15L21.92 12.92L22.08 12.72L22.20 12.50L22.29 12.13L22.29 11.87L22.24 11.62L22.15 11.39L22 11.18L21.82 11L21.61 10.85L21.25 10.72L21 10.70L16.50 10.70L16.13 10.75L15.89 10.85L15.68 10.99L15.50 11.17L15.36 11.37L13.75 15.13L10.71 4.52L10.59 4.29L10.34 4.01L10.02 3.81L9.65 3.71L9.26 3.72L8.90 3.85L8.59 4.07L8.36 4.37Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M5.64 10.70L3 10.70L3 13.30L7.36 13.30L9.25 8.87L12.88 21.57L13.79 21.62L17.36 13.30L21 13.30L21 10.70L15.64 10.70L13.75 15.13L10.12 2.43L9.21 2.38Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M5.64 10.70L1.70 10.70L1.70 13.30L6.50 13.30L6.75 13.28L7.11 13.15L7.41 12.93L7.64 12.63L9.25 8.87L12.29 19.48L12.48 19.81L12.66 19.99L12.98 20.19L13.35 20.29L13.74 20.28L14.10 20.15L14.41 19.93L14.64 19.63L17.36 13.30L22.30 13.30L22.30 10.70L16.50 10.70L16.25 10.72L16.01 10.80L15.68 10.99L15.50 11.17L15.36 11.37L13.75 15.13L10.71 4.52L10.59 4.29L10.34 4.01L10.02 3.81L9.65 3.71L9.26 3.72L8.90 3.85L8.59 4.07L8.36 4.37Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M3 12h3.5l3-7 4 14 3-7H21\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M3 12h3.5l3-7 4 14 3-7H21\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M3 12h3.5l3-7 4 14 3-7H21\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M3 12h3.5l3-7 4 14 3-7H21\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.6\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
};

export const Activity = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Activity.displayName = 'Activity';
