import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M12 3v18\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M6 9h12\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M12 3v18\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>\n  <path d=\"M6 9h12\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M12 3v18\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M6 9h12\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M18.13 10.29L18.50 10.20L18.72 10.08L18.92 9.92L19.15 9.61L19.28 9.25L19.29 8.87L19.20 8.50L19.08 8.28L18.92 8.08L18.61 7.85L18.38 7.76L18 7.70L13.30 7.70L13.30 3L13.28 2.75L13.15 2.39L13 2.18L12.82 2L12.50 1.80L12.13 1.71L11.75 1.72L11.50 1.80L11.28 1.92L11.08 2.08L10.92 2.28L10.80 2.50L10.72 2.75L10.70 3L10.70 7.70L5.87 7.71L5.50 7.80L5.28 7.92L5.08 8.08L4.85 8.39L4.76 8.62L4.71 8.87L4.72 9.25L4.80 9.50L4.92 9.72L5.08 9.92L5.39 10.15L5.62 10.24L6 10.30L10.70 10.30L10.71 21.13L10.80 21.50L10.92 21.72L11.08 21.92L11.39 22.15L11.75 22.28L12 22.30L12.25 22.28L12.50 22.20L12.82 22L13 21.82L13.20 21.50L13.28 21.25L13.30 21L13.30 10.30Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M18 7.70L13.30 7.70L13.30 3L10.70 3L10.70 7.70L6 7.70L6 10.30L10.70 10.30L10.70 21L13.30 21L13.30 10.30L18 10.30Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M19.30 10.30L19.30 7.70L13.30 7.70L13.30 1.70L10.70 1.70L10.70 7.70L4.70 7.70L4.70 10.30L10.70 10.30L10.70 22.30L13.30 22.30L13.30 10.30Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M12 3v18\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M6 9h12\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M12 3v18\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M6 9h12\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M12 3v18\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M6 9h12\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M12 3v18\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.6\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>\n  <path d=\"M6 9h12\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.6\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
};

export const Cross = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Cross.displayName = 'Cross';
