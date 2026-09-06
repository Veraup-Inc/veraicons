import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<circle cx=\"12\" cy=\"12\" r=\"9.25\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<circle cx=\"12\" cy=\"12\" r=\"9.25\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>",
  'stroke-standard': "<circle cx=\"12\" cy=\"12\" r=\"9.25\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M22 12.01L21.95 11.03L21.81 10.06L21.57 9.11L21.24 8.18L20.82 7.29L20.32 6.45L19.74 5.66L19.08 4.94L18.35 4.28L17.56 3.69L16.72 3.19L15.84 2.76L14.91 2.43L13.96 2.19L12.99 2.05L12.01 2L11.03 2.05L10.06 2.19L9.11 2.43L8.18 2.76L7.29 3.18L6.45 3.68L5.66 4.26L4.94 4.92L4.28 5.65L3.69 6.44L3.19 7.28L2.76 8.16L2.43 9.09L2.19 10.04L2.05 11.01L2 11.99L2.05 12.97L2.19 13.94L2.43 14.89L2.76 15.82L3.18 16.71L3.68 17.55L4.26 18.34L4.92 19.06L5.65 19.72L6.44 20.31L7.28 20.81L8.16 21.24L9.09 21.57L10.04 21.81L11.01 21.95L11.99 22L12.97 21.95L13.94 21.81L14.89 21.57L15.82 21.24L16.71 20.82L17.55 20.32L18.34 19.74L19.06 19.08L19.72 18.35L20.31 17.56L20.81 16.72L21.24 15.84L21.57 14.91L21.81 13.96L21.95 12.99Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M22 12L21.95 11.02L21.81 10.05L21.57 9.10L21.24 8.17L20.82 7.29L20.31 6.44L19.73 5.66L19.07 4.93L18.34 4.27L17.56 3.69L16.71 3.18L15.83 2.76L14.90 2.43L13.95 2.19L12.98 2.05L12 2L11.02 2.05L10.05 2.19L9.10 2.43L8.17 2.76L7.29 3.18L6.44 3.69L5.66 4.27L4.93 4.93L4.27 5.66L3.69 6.44L3.18 7.29L2.76 8.17L2.43 9.10L2.19 10.05L2.05 11.02L2 12L2.05 12.98L2.19 13.95L2.43 14.90L2.76 15.83L3.18 16.71L3.69 17.56L4.27 18.34L4.93 19.07L5.66 19.73L6.44 20.31L7.29 20.82L8.17 21.24L9.10 21.57L10.05 21.81L11.02 21.95L12 22L12.98 21.95L13.95 21.81L14.90 21.57L15.83 21.24L16.71 20.82L17.56 20.31L18.34 19.73L19.07 19.07L19.73 18.34L20.31 17.56L20.82 16.71L21.24 15.83L21.57 14.90L21.81 13.95L21.95 12.98Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M22 12.01L21.95 11.03L21.81 10.06L21.57 9.11L21.24 8.18L20.82 7.29L20.32 6.45L19.74 5.66L19.08 4.94L18.35 4.28L17.56 3.69L16.72 3.19L15.84 2.76L14.91 2.43L13.96 2.19L12.99 2.05L12.01 2L11.03 2.05L10.06 2.19L9.11 2.43L8.18 2.76L7.29 3.18L6.45 3.68L5.66 4.26L4.94 4.92L4.28 5.65L3.69 6.44L3.19 7.28L2.76 8.16L2.43 9.09L2.19 10.04L2.05 11.01L2 11.99L2.05 12.97L2.19 13.94L2.43 14.89L2.76 15.82L3.18 16.71L3.68 17.55L4.26 18.34L4.92 19.06L5.65 19.72L6.44 20.31L7.28 20.81L8.16 21.24L9.09 21.57L10.04 21.81L11.01 21.95L11.99 22L12.97 21.95L13.94 21.81L14.89 21.57L15.82 21.24L16.71 20.82L17.55 20.32L18.34 19.74L19.06 19.08L19.72 18.35L20.31 17.56L20.81 16.72L21.24 15.84L21.57 14.91L21.81 13.96L21.95 12.99Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<circle cx=\"12\" cy=\"12\" r=\"9.25\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <circle cx=\"12\" cy=\"12\" r=\"9.25\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<circle cx=\"12\" cy=\"12\" r=\"9.25\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <circle cx=\"12\" cy=\"12\" r=\"9.25\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<circle cx=\"12\" cy=\"12\" r=\"9.25\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<circle cx=\"12\" cy=\"12\" r=\"9.25\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Circle = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Circle.displayName = 'Circle';
