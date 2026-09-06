import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M15 6l-6 6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M15 6l-6 6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M15 6l-6 6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M8.08 11.08L7.85 11.39L7.76 11.62L7.71 11.87L7.71 12.13L7.76 12.38L7.85 12.61L8 12.82L14.08 18.92L14.28 19.08L14.50 19.20L14.75 19.28L15 19.30L15.25 19.28L15.50 19.20L15.72 19.08L15.92 18.92L16.08 18.72L16.20 18.50L16.29 18.13L16.28 17.75L16.20 17.50L16.08 17.28L15.92 17.08L10.84 12L15.92 6.92L16.08 6.72L16.20 6.50L16.28 6.25L16.29 5.87L16.20 5.50L16.08 5.28L15.92 5.08L15.72 4.92L15.50 4.80L15.25 4.72L15 4.70L14.75 4.72L14.50 4.80L14.18 5Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M7.16 12L14.08 18.92L15.92 17.08L10.84 12L15.92 6.92L14.08 5.08Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M8.08 11.08L7.85 11.39L7.76 11.62L7.71 11.87L7.71 12.13L7.76 12.38L7.85 12.61L8 12.82L15 19.84L16.84 18L10.84 12L16.84 6L15 4.16Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M15 6l-6 6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M15 6l-6 6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M15 6l-6 6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M15 6l-6 6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.6\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
};

export const ChevronLeft = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
ChevronLeft.displayName = 'ChevronLeft';
