import * as React from 'react';
import type { VeraIconProps } from '../types';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M3 6.5l6-2.5 6 2.5 6-2.5v14l-6 2.5-6-2.5-6 2.5z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M9 4v14M15 6.5v14\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M3 6.5l6-2.5 6 2.5 6-2.5v14l-6 2.5-6-2.5-6 2.5z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>\n  <path d=\"M9 4v14M15 6.5v14\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M3 6.5l6-2.5 6 2.5 6-2.5v14l-6 2.5-6-2.5-6 2.5z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M9 4v14M15 6.5v14\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M2.65 5.84L2.52 5.92L2.38 6.08L2.28 6.28L2.25 6.50L2.25 20.50L2.31 20.79L2.47 21.03L2.71 21.19L3 21.25L3.29 21.19L8.75 18.92L8.47 18.79L8.27 18.60L8.12 18.36L8.07 18.19L8.05 18L8.05 4L8.09 3.72L8.17 3.53ZM9.25 18.92L14.17 20.97L14.09 20.78L14.05 20.50L14.05 6.50L14.07 6.31L14.12 6.14L14.27 5.90L14.47 5.71L14.75 5.58L9.83 3.53L9.91 3.72L9.95 4L9.95 18L9.93 18.19L9.88 18.36L9.73 18.60L9.53 18.79ZM15.83 20.97L21.29 18.69L21.48 18.58L21.58 18.48L21.72 18.22L21.75 18L21.75 4L21.72 3.78L21.62 3.58L21.42 3.38L21.22 3.28L20.93 3.25L20.71 3.31L15.25 5.58L15.53 5.71L15.73 5.90L15.88 6.14L15.95 6.41L15.95 20.50L15.91 20.78Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M2.25 21.63L9 18.81L15 21.31L21.75 18.50L21.75 2.88L15 5.69L9 3.19L2.25 6ZM8.05 18L8.05 4L9.95 4L9.95 18ZM14.05 20.50L14.05 6.50L15.95 6.50L15.95 20.50Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M2.65 5.84L2.52 5.92L2.38 6.08L2.28 6.28L2.25 6.50L2.25 20.50L2.31 20.79L2.47 21.03L2.71 21.19L3 21.25L3.29 21.19L8.67 18.95L8.05 18.95L8.05 3.58ZM9.33 18.95L14.05 20.92L14.05 5.55L14.67 5.55L9.95 3.58L9.95 18.95ZM15.95 20.92L21.29 18.69L21.48 18.58L21.58 18.48L21.72 18.22L21.75 18L21.75 4L21.72 3.78L21.62 3.58L21.42 3.38L21.22 3.28L20.93 3.25L20.71 3.31L15.33 5.55L15.95 5.55Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M3 6.5l6-2.5 6 2.5 6-2.5v14l-6 2.5-6-2.5-6 2.5z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M3 6.5l6-2.5 6 2.5 6-2.5v14l-6 2.5-6-2.5-6 2.5z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M9 4v14M15 6.5v14\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M3 6.5l6-2.5 6 2.5 6-2.5v14l-6 2.5-6-2.5-6 2.5z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M9 4v14M15 6.5v14\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M3 6.5l6-2.5 6 2.5 6-2.5v14l-6 2.5-6-2.5-6 2.5z\" fill=\"currentColor\" opacity=\"0.4\"/>\n  <path d=\"M9 4v14M15 6.5v14\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.8\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
};

export const Map = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Map.displayName = 'Map';
