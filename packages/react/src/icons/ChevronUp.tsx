import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M6 15l6-6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M6 15l6-6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M6 15l6-6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M12 10.84L17.08 15.92L17.28 16.08L17.50 16.20L17.75 16.28L18 16.30L18.25 16.28L18.50 16.20L18.72 16.08L18.92 15.92L19.08 15.72L19.24 15.38L19.30 15L19.28 14.75L19.20 14.50L19 14.18L12.92 8.08L12.72 7.92L12.50 7.80L12.25 7.72L12 7.70L11.75 7.72L11.50 7.80L11.28 7.92L11.08 8.08L5 14.18L4.80 14.50L4.71 14.87L4.72 15.25L4.80 15.50L4.92 15.72L5.08 15.92L5.28 16.08L5.50 16.20L5.75 16.28L6 16.30L6.25 16.28L6.50 16.20L6.72 16.08L6.92 15.92Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M12 10.84L17.08 15.92L18.92 14.08L12 7.16L5.08 14.08L6.92 15.92Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M12 10.84L18 16.84L19.84 15L12.92 8.08L12.72 7.92L12.50 7.80L12.25 7.72L12 7.70L11.75 7.72L11.50 7.80L11.28 7.92L11.08 8.08L4.16 15L6 16.84Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M6 15l6-6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M6 15l6-6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M6 15l6-6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M6 15l6-6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.6\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
};

export const ChevronUp = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
ChevronUp.displayName = 'ChevronUp';
