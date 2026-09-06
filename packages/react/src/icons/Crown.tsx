import * as React from 'react';
import type { VeraIconProps } from '../types';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M3.5 7.5l4.5 4 4-6 4 6 4.5-4-1.5 11.5h-14z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M6 15.5h12\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M3.5 7.5l4.5 4 4-6 4 6 4.5-4-1.5 11.5h-14z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>\n  <path d=\"M6 15.5h12\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M3.5 7.5l4.5 4 4-6 4 6 4.5-4-1.5 11.5h-14z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M6 15.5h12\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M3.94 6.89L3.75 6.79L3.54 6.75L3.32 6.77L3.12 6.85L2.95 6.99L2.83 7.17L2.76 7.38L2.75 7.52L4.26 19.10L4.35 19.37L4.53 19.59L4.72 19.70L5 19.75L19 19.75L19.28 19.70L19.41 19.63L19.57 19.49L19.69 19.30L19.74 19.10L21.24 7.60L21.24 7.38L21.17 7.17L21.10 7.05L20.94 6.90L20.75 6.79L20.54 6.75L20.32 6.77L20.06 6.89L16.15 10.37L12.58 5.02L12.42 4.88L12.22 4.78L12 4.75L11.78 4.78L11.58 4.88L11.38 5.08L7.85 10.37ZM6 16.45L5.81 16.43L5.64 16.38L5.47 16.29L5.33 16.17L5.21 16.03L5.12 15.86L5.07 15.69L5.05 15.50L5.07 15.31L5.12 15.14L5.21 14.97L5.33 14.83L5.47 14.71L5.64 14.62L5.91 14.55L18.09 14.55L18.36 14.62L18.53 14.71L18.67 14.83L18.79 14.97L18.88 15.14L18.95 15.41L18.95 15.59L18.91 15.78L18.84 15.95L18.73 16.10L18.60 16.23L18.45 16.34L18.28 16.41L18.09 16.45Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M2.82 8.08L4.34 19.75L19.66 19.75L21.50 5.60L16.15 10.37L12 4.15L7.85 10.37L2.50 5.60ZM6 16.45L6 14.55L18 14.55L18 16.45Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M3.94 6.89L3.75 6.79L3.54 6.75L3.32 6.77L3.12 6.85L2.95 6.99L2.83 7.17L2.76 7.38L2.75 7.52L4.26 19.10L4.35 19.37L4.53 19.59L4.72 19.70L5 19.75L19 19.75L19.28 19.70L19.41 19.63L19.57 19.49L19.69 19.30L19.74 19.10L21.24 7.60L21.24 7.38L21.17 7.17L21.10 7.05L20.94 6.90L20.75 6.79L20.54 6.75L20.32 6.77L20.06 6.89L16.15 10.37L12.58 5.02L12.42 4.88L12.22 4.78L12 4.75L11.78 4.78L11.58 4.88L11.38 5.08L7.85 10.37ZM5.05 16.45L5.05 14.55L18.95 14.55L18.95 16.45Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M3.5 7.5l4.5 4 4-6 4 6 4.5-4-1.5 11.5h-14z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M3.5 7.5l4.5 4 4-6 4 6 4.5-4-1.5 11.5h-14z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M6 15.5h12\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M3.5 7.5l4.5 4 4-6 4 6 4.5-4-1.5 11.5h-14z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M6 15.5h12\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M3.5 7.5l4.5 4 4-6 4 6 4.5-4-1.5 11.5h-14z\" fill=\"currentColor\" opacity=\"0.4\"/>\n  <path d=\"M6 15.5h12\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.8\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
};

export const Crown = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Crown.displayName = 'Crown';
