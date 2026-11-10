import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M3.11 7.56h17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M3.11 16.44h17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M3.11 7.56h17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>\n  <path d=\"M3.11 16.44h17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M3.11 7.56h17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M3.11 16.44h17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M21.02 8.85L21.39 8.76L21.61 8.64L21.81 8.48L21.97 8.28L22.09 8.06L22.17 7.81L22.19 7.56L22.17 7.31L22.09 7.06L21.97 6.84L21.81 6.64L21.50 6.41L21.27 6.32L21.02 6.27L2.98 6.27L2.73 6.32L2.50 6.41L2.19 6.64L2.03 6.84L1.91 7.06L1.82 7.43L1.82 7.69L1.87 7.94L1.96 8.17L2.11 8.38L2.29 8.56L2.50 8.71L2.73 8.80L2.98 8.85ZM21.02 17.73L21.39 17.64L21.61 17.52L21.81 17.36L21.97 17.16L22.09 16.94L22.17 16.69L22.19 16.44L22.17 16.19L22.09 15.94L21.97 15.72L21.81 15.52L21.61 15.36L21.39 15.24L21.02 15.15L2.98 15.15L2.61 15.24L2.39 15.36L2.19 15.52L2.03 15.72L1.91 15.94L1.82 16.31L1.82 16.57L1.87 16.82L1.96 17.05L2.11 17.26L2.29 17.44L2.50 17.59L2.73 17.68L2.98 17.73Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M20.89 6.26L3.11 6.26L3.11 8.86L20.89 8.86ZM20.89 15.14L3.11 15.14L3.11 17.74L20.89 17.74Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M22.19 8.86L22.19 6.26L1.81 6.26L1.81 8.86ZM22.19 17.74L22.19 15.14L1.81 15.14L1.81 17.74Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M3.11 7.56h17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M3.11 16.44h17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M3.11 7.56h17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M3.11 16.44h17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M3.11 7.56h17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M3.11 16.44h17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M3.11 7.56h17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>\n  <path d=\"M3.11 16.44h17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
};

export const MenuCompact = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
MenuCompact.displayName = 'MenuCompact';
