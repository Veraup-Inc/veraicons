import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M12 3.5L21.5 20.5h-19z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M12 3.5v17M8 20.5l4-8 4 8\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M12 3.5L21.5 20.5h-19z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>\n  <path d=\"M12 3.5v17M8 20.5l4-8 4 8\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M12 3.5L21.5 20.5h-19z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M12 3.5v17M8 20.5l4-8 4 8\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M10.95 3.84L1.85 20.13L1.75 20.42L1.78 20.71L1.92 20.97L2.14 21.16L2.35 21.24L2.50 21.25L7.42 21.25L7.28 21.12L7.17 20.97L7.07 20.71L7.05 20.43L7.11 20.16L11.05 12.28L11.05 3.66ZM11.42 21.25L11.27 21.10L11.16 20.95L11.09 20.78L11.05 20.59L11.05 16.52L8.85 20.92L8.75 21.08L8.58 21.25ZM15.42 21.25L15.25 21.08L15.15 20.92L12.95 16.52L12.95 20.59L12.91 20.78L12.84 20.95L12.73 21.10L12.58 21.25ZM21.50 21.25L21.65 21.24L21.86 21.16L22.03 21.03L22.13 20.91L22.22 20.71L22.25 20.56L22.23 20.34L22.19 20.20L12.95 3.66L12.95 12.28L16.89 20.16L16.95 20.43L16.93 20.71L16.83 20.97L16.72 21.12L16.58 21.25Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M11.14 3.50L12.86 3.50L12 1.96ZM10.95 3.84L1.22 21.25L22.78 21.25L12.95 3.66L12.95 12.28L16.85 20.08L15.15 20.92L12.95 16.52L12.95 20.50L11.05 20.50L11.05 16.52L8.85 20.92L7.15 20.08L11.05 12.28L11.05 3.66Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M10.95 3.84L1.85 20.13L1.75 20.42L1.78 20.71L1.92 20.97L2.14 21.16L2.35 21.24L2.50 21.25L7.38 21.25L6.73 20.92L11.05 12.28L11.05 3.66ZM11.05 21.25L11.05 20.50L11.05 16.52L8.69 21.25ZM15.31 21.25L15.15 20.92L12.95 16.52L12.95 21.25ZM21.50 21.25L21.65 21.24L21.86 21.16L22.03 21.03L22.13 20.91L22.22 20.71L22.25 20.56L22.23 20.34L22.19 20.20L12.95 3.66L12.95 12.28L17.27 20.92L16.62 21.25Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M12 3.5L21.5 20.5h-19zz\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M12 3.5L21.5 20.5h-19z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M12 3.5v17M8 20.5l4-8 4 8\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M12 3.5L21.5 20.5h-19zz\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M12 3.5L21.5 20.5h-19z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M12 3.5v17M8 20.5l4-8 4 8\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M12 3.5L21.5 20.5h-19z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M12 3.5v17M8 20.5l4-8 4 8\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M12 3.5L21.5 20.5h-19zz\" fill=\"currentColor\" opacity=\"0.4\"/>\n  <path d=\"M12 3.5v17M8 20.5l4-8 4 8\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.8\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
};

export const Tent = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Tent.displayName = 'Tent';
