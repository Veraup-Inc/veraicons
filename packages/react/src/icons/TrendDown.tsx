import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M3.5 7.5l5 5.5 4-3.5 8 8.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M15.5 18h5v-5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M3.5 7.5l5 5.5 4-3.5 8 8.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>\n  <path d=\"M15.5 18h5v-5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M3.5 7.5l5 5.5 4-3.5 8 8.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M15.5 18h5v-5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M2.95 8.83L7.54 13.87L7.83 14.11L8.18 14.26L8.43 14.30L8.80 14.26L9.04 14.18L9.26 14.06L12.41 11.30L17.49 16.70L15.37 16.71L15 16.80L14.78 16.92L14.58 17.08L14.42 17.28L14.30 17.50L14.21 17.87L14.21 18.13L14.30 18.50L14.42 18.72L14.58 18.92L14.89 19.15L15.25 19.28L15.50 19.30L20.59 19.30L20.96 19.22L21.22 19.08L21.48 18.85L21.65 18.61L21.74 18.38L21.80 18.04L21.79 12.87L21.70 12.50L21.58 12.28L21.42 12.08L21.11 11.85L20.88 11.76L20.63 11.71L20.37 11.71L20.12 11.76L19.89 11.85L19.68 12L19.42 12.28L19.30 12.50L19.21 12.87L19.20 14.72L13.45 8.61L13.15 8.38L12.93 8.27L12.69 8.21L12.31 8.21L11.96 8.32L11.74 8.44L8.60 11.18L4.46 6.63L4.27 6.45L3.94 6.28L3.69 6.21L3.43 6.20L3.18 6.24L2.94 6.33L2.72 6.46L2.54 6.63L2.38 6.83L2.28 7.06L2.20 7.44L2.21 7.69L2.28 7.94L2.46 8.28Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M2.95 8.83L8.40 14.82L12.41 11.30L17.49 16.70L15.50 16.70L15.50 19.30L21.80 19.30L21.80 13L19.20 13L19.20 14.72L12.59 7.70L8.60 11.18L4.46 6.63L2.54 8.37Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M2.95 8.83L7.54 13.87L7.83 14.11L8.18 14.26L8.43 14.30L8.80 14.26L9.04 14.18L9.26 14.06L12.41 11.30L17.49 16.70L14.20 16.70L14.20 19.30L19.94 19.30L20.44 19.84L22.34 18.06L21.80 17.48L21.80 11.70L19.20 11.70L19.20 14.72L13.45 8.61L13.15 8.38L12.93 8.27L12.69 8.21L12.31 8.21L11.96 8.32L11.74 8.44L8.60 11.18L3.59 5.66L1.66 7.41Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M3.5 7.5l5 5.5 4-3.5 8 8.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M15.5 18h5v-5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M3.5 7.5l5 5.5 4-3.5 8 8.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M15.5 18h5v-5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M3.5 7.5l5 5.5 4-3.5 8 8.5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.6\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>\n  <path d=\"M15.5 18h5v-5\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.6\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
};

export const TrendDown = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
TrendDown.displayName = 'TrendDown';
