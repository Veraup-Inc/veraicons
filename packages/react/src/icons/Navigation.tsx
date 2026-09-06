import * as React from 'react';
import type { VeraIconProps } from '../types';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M20.5 3.5L4 10.5c-.9.4-.8 1.7.2 1.9l6.3 1.3 1.3 6.3c.2 1 1.5 1.1 1.9.2L20.5 3.5z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M20.5 3.5L3 10.5l8 2 2 8z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M20.5 3.5L4 10.5c-.9.4-.8 1.7.2 1.9l6.3 1.3 1.3 6.3c.2 1 1.5 1.1 1.9.2L20.5 3.5z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M9.87 14.33L11.07 20.15L11.13 20.38L11.25 20.67L11.40 20.90L11.66 21.17L11.97 21.37L12.30 21.50L12.64 21.56L12.99 21.55L13.34 21.47L13.59 21.36L13.90 21.15L14.09 20.97L14.27 20.72L14.39 20.48L21.19 3.78L21.25 3.57L21.23 3.35L21.16 3.14L21.03 2.97L20.85 2.84L20.64 2.76L20.42 2.75L20.21 2.81L3.71 9.81L3.39 9.99L3.17 10.16L2.98 10.38L2.84 10.61L2.73 10.86L2.65 11.21L2.64 11.56L2.70 11.90L2.83 12.23L3.03 12.54L3.30 12.80L3.53 12.95L3.82 13.07L4.05 13.13Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M10.38 13.12L12.80 22.80L21.93 2.12L0.57 10.67Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M9.87 14.33L11.07 20.15L11.13 20.38L11.25 20.67L11.40 20.90L11.66 21.17L11.97 21.37L12.30 21.50L12.64 21.56L12.99 21.55L13.34 21.47L13.59 21.36L13.90 21.15L14.09 20.97L14.27 20.72L14.39 20.48L21.19 3.78L21.25 3.57L21.23 3.35L21.16 3.14L21.03 2.97L20.85 2.84L20.64 2.76L20.42 2.75L20.21 2.81L3.71 9.81L3.39 9.99L3.17 10.16L2.98 10.38L2.84 10.61L2.73 10.86L2.65 11.21L2.64 11.56L2.70 11.90L2.83 12.23L3.03 12.54L3.30 12.80L3.53 12.95L3.82 13.07L4.05 13.13Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M20.5 3.5L4 10.5c-.9.4-.8 1.7.2 1.9l6.3 1.3 1.3 6.3c.2 1 1.5 1.1 1.9.2L20.5 3.5z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M20.5 3.5L4 10.5c-.9.4-.8 1.7.2 1.9l6.3 1.3 1.3 6.3c.2 1 1.5 1.1 1.9.2L20.5 3.5z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M20.5 3.5L4 10.5c-.9.4-.8 1.7.2 1.9l6.3 1.3 1.3 6.3c.2 1 1.5 1.1 1.9.2L20.5 3.5z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M20.5 3.5L4 10.5c-.9.4-.8 1.7.2 1.9l6.3 1.3 1.3 6.3c.2 1 1.5 1.1 1.9.2L20.5 3.5z\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Navigation = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Navigation.displayName = 'Navigation';
