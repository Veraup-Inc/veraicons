import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M12 20V4\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M6 10l6-6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M12 20V4\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>\n  <path d=\"M6 10l6-6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M12 20V4\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M6 10l6-6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M17.08 10.92L17.28 11.08L17.50 11.20L17.87 11.29L18.13 11.29L18.38 11.24L18.61 11.15L18.82 11L19.08 10.72L19.20 10.50L19.28 10.25L19.30 10L19.28 9.75L19.20 9.50L19.08 9.28L18.92 9.08L12.92 3.08L12.61 2.85L12.38 2.76L12.13 2.71L11.87 2.71L11.50 2.80L11.28 2.92L11.08 3.08L5.08 9.08L4.85 9.39L4.76 9.62L4.71 9.87L4.72 10.25L4.80 10.50L5 10.82L5.18 11L5.50 11.20L5.87 11.29L6.13 11.29L6.50 11.20L6.72 11.08L6.92 10.92L10.70 7.14L10.71 20.13L10.80 20.50L10.92 20.72L11.08 20.92L11.28 21.08L11.50 21.20L11.87 21.29L12.13 21.29L12.38 21.24L12.61 21.15L12.82 21L13 20.82L13.15 20.61L13.24 20.38L13.29 20.13L13.30 7.14Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M17.08 10.92L18.92 9.08L12 2.16L5.08 9.08L6.92 10.92L10.70 7.14L10.70 20L13.30 20L13.30 7.14Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M17.08 10.92L18 11.84L19.84 10L13.30 3.46L13.30 2.70L10.70 2.70L10.70 3.46L4.16 10L6 11.84L10.70 7.14L10.70 21.30L13.30 21.30L13.30 7.14Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M12 20V4\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M6 10l6-6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M12 20V4\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M6 10l6-6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M12 20V4\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.6\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>\n  <path d=\"M6 10l6-6 6 6\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.6\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
};

export const ArrowUp = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
ArrowUp.displayName = 'ArrowUp';
