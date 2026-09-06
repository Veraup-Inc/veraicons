import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M9 6l6 6-6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M9 6l6 6-6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M9 6l6 6-6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M13.16 12L8.08 17.08L7.92 17.28L7.80 17.50L7.72 17.75L7.70 18L7.72 18.25L7.80 18.50L7.92 18.72L8.08 18.92L8.28 19.08L8.62 19.24L9 19.30L9.25 19.28L9.50 19.20L9.82 19L15.92 12.92L16.08 12.72L16.20 12.50L16.28 12.25L16.30 12L16.28 11.75L16.20 11.50L16.08 11.28L15.92 11.08L9.82 5L9.50 4.80L9.25 4.72L9 4.70L8.62 4.76L8.28 4.92L8.08 5.08L7.92 5.28L7.80 5.50L7.72 5.75L7.70 6L7.72 6.25L7.80 6.50L7.92 6.72L8.08 6.92Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M13.16 12L8.08 17.08L9.92 18.92L16.84 12L9.92 5.08L8.08 6.92Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M13.16 12L7.16 18L9 19.84L15.92 12.92L16.08 12.72L16.20 12.50L16.28 12.25L16.30 12L16.28 11.75L16.20 11.50L16.08 11.28L15.92 11.08L9 4.16L7.16 6Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M9 6l6 6-6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M9 6l6 6-6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M9 6l6 6-6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M9 6l6 6-6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.6\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
};

export const ChevronRight = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
ChevronRight.displayName = 'ChevronRight';
