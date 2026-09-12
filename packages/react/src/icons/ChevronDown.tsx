import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M6 9l6 6 6-6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M6 9l6 6 6-6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M6 9l6 6 6-6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M11.08 15.92L11.28 16.08L11.50 16.20L11.75 16.28L12 16.30L12.25 16.28L12.50 16.20L12.82 16L18.92 9.92L19.08 9.72L19.20 9.50L19.28 9.25L19.30 9L19.28 8.75L19.20 8.50L19.08 8.28L18.92 8.08L18.61 7.85L18.38 7.76L18.13 7.71L17.87 7.71L17.62 7.76L17.28 7.92L17.08 8.08L12 13.16L6.92 8.08L6.72 7.92L6.50 7.80L6.25 7.72L5.87 7.71L5.62 7.76L5.39 7.85L5.08 8.08L4.92 8.28L4.80 8.50L4.72 8.75L4.70 9L4.72 9.25L4.80 9.50L5 9.82Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M12 13.16L6.92 8.08L5.08 9.92L12 16.84L18.92 9.92L17.08 8.08Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M11.08 15.92L11.28 16.08L11.50 16.20L11.75 16.28L12 16.30L12.25 16.28L12.50 16.20L12.82 16L19.84 9L18 7.16L12 13.16L6 7.16L4.16 9Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M6 9l6 6 6-6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M6 9l6 6 6-6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M6 9l6 6 6-6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M6 9l6 6 6-6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
};

export const ChevronDown = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
ChevronDown.displayName = 'ChevronDown';
