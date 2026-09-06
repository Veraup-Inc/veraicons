import * as React from 'react';
import type { VeraIconProps } from '../types';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M7 3h10l4.5 6-9.5 12L2.5 9z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M2.5 9h19M7 3l5 6 5-6M12 9v12\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M7 3h10l4.5 6-9.5 12L2.5 9z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>\n  <path d=\"M2.5 9h19M7 3l5 6 5-6M12 9v12\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M7 3h10l4.5 6-9.5 12L2.5 9z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M2.5 9h19M7 3l5 6 5-6M12 9v12\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M2.25 8.08L2.50 8.05L9.97 8.05L6.27 3.61L6.13 3.37L6.07 3.19L6.05 3.02ZM2.27 9.92L2.70 10.47L11.05 21.01L11.05 9.95L2.50 9.95ZM12.95 21.01L17.73 14.97L21.73 9.92L21.50 9.95L12.95 9.95ZM17.95 3.02L17.93 3.19L17.87 3.37L17.73 3.61L14.03 8.05L21.50 8.05L21.75 8.08ZM7.58 2.25L7.73 2.39L12 7.52L16.27 2.39L16.42 2.25Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M1.55 9.01L12 22.21L22.45 9.01L17.38 2.25L6.62 2.25ZM9.97 8.05L6.27 3.61L7.73 2.39L12 7.52L16.27 2.39L17.73 3.61L14.03 8.05L21.50 8.05L21.50 9.95L12.95 9.95L12.95 21L11.05 21L11.05 9.95L2.50 9.95L2.50 8.05Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M2.27 8.05L2.50 8.05L9.97 8.05L5.92 3.19ZM2.30 9.95L10.62 20.47L11.05 21.01L11.05 9.95ZM12.95 21.01L20.11 11.97L21.70 9.95L12.95 9.95ZM18.08 3.19L16.90 4.61L14.03 8.05L21.73 8.05ZM7.61 2.25L12 7.52L16.39 2.25Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M7 3h10l4.5 6-9.5 12L2.5 9z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M7 3h10l4.5 6-9.5 12L2.5 9z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M2.5 9h19M7 3l5 6 5-6M12 9v12\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M7 3h10l4.5 6-9.5 12L2.5 9z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M2.5 9h19M7 3l5 6 5-6M12 9v12\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M7 3h10l4.5 6-9.5 12L2.5 9z\" fill=\"currentColor\" opacity=\"0.4\"/>\n  <path d=\"M2.5 9h19M7 3l5 6 5-6M12 9v12\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.8\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
};

export const Gem = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Gem.displayName = 'Gem';
