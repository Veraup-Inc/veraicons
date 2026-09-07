import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M4 8h16\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M4 16h16\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M4 8h16\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>\n  <path d=\"M4 16h16\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M4 8h16\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M4 16h16\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M20.13 9.29L20.50 9.20L20.72 9.08L20.92 8.92L21.08 8.72L21.20 8.50L21.28 8.25L21.30 8L21.28 7.75L21.20 7.50L21.08 7.28L20.92 7.08L20.61 6.85L20.38 6.76L20.13 6.71L3.87 6.71L3.62 6.76L3.39 6.85L3.08 7.08L2.85 7.39L2.76 7.62L2.71 7.87L2.71 8.13L2.76 8.38L2.85 8.61L3 8.82L3.18 9L3.39 9.15L3.62 9.24L3.87 9.29ZM20.13 17.29L20.50 17.20L20.72 17.08L20.92 16.92L21.08 16.72L21.20 16.50L21.28 16.25L21.30 16L21.28 15.75L21.20 15.50L21.08 15.28L20.92 15.08L20.72 14.92L20.50 14.80L20.13 14.71L3.87 14.71L3.50 14.80L3.28 14.92L3.08 15.08L2.92 15.28L2.80 15.50L2.71 15.87L2.71 16.13L2.76 16.38L2.85 16.61L3 16.82L3.18 17L3.39 17.15L3.62 17.24L3.87 17.29Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M20 6.70L4 6.70L4 9.30L20 9.30ZM20 14.70L4 14.70L4 17.30L20 17.30Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M21.30 9.30L21.30 6.70L2.70 6.70L2.70 9.30ZM21.30 17.30L21.30 14.70L2.70 14.70L2.70 17.30Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M4 8h16\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M4 16h16\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M4 8h16\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M4 16h16\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M4 8h16\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M4 16h16\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M4 8h16\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.6\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>\n  <path d=\"M4 16h16\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2.6\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
};

export const MenuCompact = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
MenuCompact.displayName = 'MenuCompact';
