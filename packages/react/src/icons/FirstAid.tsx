import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M9.5 2.5h5v7h7v5h-7v7h-5v-7h-7v-5h7z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M9.5 2.5h5v7h7v5h-7v7h-5v-7h-7v-5h7z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M9.5 2.5h5v7h7v5h-7v7h-5v-7h-7v-5h7z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M8.75 8.75L2.50 8.75L2.28 8.78L2.02 8.92L1.92 9.02L1.81 9.21L1.75 9.50L1.75 14.50L1.81 14.79L1.92 14.98L2.08 15.12L2.28 15.22L2.43 15.25L8.75 15.25L8.75 21.50L8.78 21.72L8.92 21.98L9.02 22.08L9.21 22.19L9.50 22.25L14.50 22.25L14.79 22.19L14.98 22.08L15.12 21.92L15.22 21.72L15.25 21.57L15.25 15.25L21.50 15.25L21.72 15.22L21.98 15.08L22.08 14.98L22.19 14.79L22.25 14.50L22.25 9.50L22.19 9.21L22.08 9.02L21.92 8.88L21.72 8.78L21.57 8.75L15.25 8.75L15.25 2.43L15.16 2.15L15.03 1.97L14.79 1.81L14.50 1.75L9.43 1.75L9.15 1.84L8.92 2.02L8.78 2.28L8.75 2.50Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M8.75 1.75L8.75 8.75L1.75 8.75L1.75 15.25L8.75 15.25L8.75 22.25L15.25 22.25L15.25 15.25L22.25 15.25L22.25 8.75L15.25 8.75L15.25 1.75Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M8.75 8.75L2.50 8.75L2.28 8.78L2.02 8.92L1.92 9.02L1.81 9.21L1.75 9.50L1.75 14.50L1.81 14.79L1.92 14.98L2.08 15.12L2.28 15.22L2.43 15.25L8.75 15.25L8.75 21.50L8.78 21.72L8.92 21.98L9.02 22.08L9.21 22.19L9.50 22.25L14.50 22.25L14.79 22.19L14.98 22.08L15.12 21.92L15.22 21.72L15.25 21.57L15.25 15.25L21.50 15.25L21.72 15.22L21.98 15.08L22.08 14.98L22.19 14.79L22.25 14.50L22.25 9.50L22.19 9.21L22.08 9.02L21.92 8.88L21.72 8.78L21.57 8.75L15.25 8.75L15.25 2.43L15.16 2.15L15.03 1.97L14.79 1.81L14.50 1.75L9.43 1.75L9.15 1.84L8.92 2.02L8.78 2.28L8.75 2.50Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M9.5 2.5h5v7h7v5h-7v7h-5v-7h-7v-5h7zz\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M9.5 2.5h5v7h7v5h-7v7h-5v-7h-7v-5h7z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M9.5 2.5h5v7h7v5h-7v7h-5v-7h-7v-5h7zz\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M9.5 2.5h5v7h7v5h-7v7h-5v-7h-7v-5h7z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M9.5 2.5h5v7h7v5h-7v7h-5v-7h-7v-5h7z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M9.5 2.5h5v7h7v5h-7v7h-5v-7h-7v-5h7zz\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const FirstAid = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
FirstAid.displayName = 'FirstAid';
