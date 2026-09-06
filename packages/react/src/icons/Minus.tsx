import * as React from 'react';
import type { VeraIconProps } from '../types';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M5 12h14\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M5 12h14\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M5 12h14\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M19 13.30L19.25 13.28L19.50 13.20L19.72 13.08L19.92 12.92L20.08 12.72L20.20 12.50L20.28 12.25L20.30 12L20.28 11.75L20.20 11.50L20.08 11.28L19.92 11.08L19.72 10.92L19.50 10.80L19.13 10.71L4.87 10.71L4.50 10.80L4.28 10.92L4.08 11.08L3.92 11.28L3.80 11.50L3.71 11.87L3.71 12.13L3.76 12.38L3.85 12.61L4 12.82L4.18 13L4.39 13.15L4.62 13.24L4.87 13.29Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M19 13.30L19 10.70L5 10.70L5 13.30Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M3.70 13.30L20.30 13.30L20.30 10.70L3.70 10.70Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M5 12h14\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M5 12h14\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M5 12h14\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.6\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
};

export const Minus = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Minus.displayName = 'Minus';
