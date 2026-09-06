import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M12 4v16\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M6 14l6 6 6-6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M12 4v16\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>\n  <path d=\"M6 14l6 6 6-6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M12 4v16\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M6 14l6 6 6-6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M11.18 21L11.50 21.20L11.75 21.28L12 21.30L12.25 21.28L12.50 21.20L12.82 21L18.92 14.92L19.08 14.72L19.20 14.50L19.28 14.25L19.30 14L19.28 13.75L19.15 13.39L18.92 13.08L18.61 12.85L18.38 12.76L18 12.70L17.62 12.76L17.39 12.85L17.08 13.08L13.30 16.86L13.29 3.87L13.24 3.62L13.15 3.39L13 3.18L12.82 3L12.50 2.80L12.25 2.72L12 2.70L11.75 2.72L11.50 2.80L11.28 2.92L11.08 3.08L10.92 3.28L10.80 3.50L10.71 3.87L10.70 16.86L6.92 13.08L6.61 12.85L6.38 12.76L6 12.70L5.62 12.76L5.39 12.85L5.08 13.08L4.85 13.39L4.72 13.75L4.70 14L4.72 14.25L4.80 14.50L4.92 14.72L5.08 14.92Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M13.30 4L10.70 4L10.70 16.86L6.92 13.08L5.08 14.92L12 21.84L18.92 14.92L17.08 13.08L13.30 16.86Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M10.70 21.30L13.30 21.30L13.30 20.54L19.84 14L18 12.16L13.30 16.86L13.30 2.70L10.70 2.70L10.70 16.86L6 12.16L4.16 14L10.70 20.54Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M12 4v16\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M6 14l6 6 6-6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M12 4v16\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M6 14l6 6 6-6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M12 4v16\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.6\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>\n  <path d=\"M6 14l6 6 6-6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.6\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
};

export const ArrowDown = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
ArrowDown.displayName = 'ArrowDown';
