import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M20 12H4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M10 6l-6 6 6 6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M20 12H4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>\n  <path d=\"M10 6l-6 6 6 6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M20 12H4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M10 6l-6 6 6 6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M3 11.18L2.80 11.50L2.72 11.75L2.70 12L2.72 12.25L2.80 12.50L3 12.82L9.08 18.92L9.28 19.08L9.50 19.20L9.75 19.28L10 19.30L10.25 19.28L10.61 19.15L10.92 18.92L11.15 18.61L11.24 18.38L11.30 18L11.24 17.62L11.15 17.39L10.92 17.08L7.14 13.30L20.13 13.29L20.50 13.20L20.72 13.08L20.92 12.92L21.08 12.72L21.20 12.50L21.28 12.25L21.30 12L21.28 11.75L21.20 11.50L21.08 11.28L20.92 11.08L20.72 10.92L20.50 10.80L20.13 10.71L7.14 10.70L10.92 6.92L11.15 6.61L11.24 6.38L11.30 6L11.24 5.62L11.15 5.39L10.92 5.08L10.61 4.85L10.25 4.72L10 4.70L9.75 4.72L9.50 4.80L9.28 4.92L9.08 5.08Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M9.08 18.92L10.92 17.08L7.14 13.30L20 13.30L20 10.70L7.14 10.70L10.92 6.92L9.08 5.08L2.16 12Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M2.70 10.70L2.70 13.30L3.46 13.30L10 19.84L11.84 18L7.14 13.30L21.30 13.30L21.30 10.70L7.14 10.70L11.84 6L10 4.16L3.46 10.70Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M20 12H4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M10 6l-6 6 6 6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M20 12H4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M10 6l-6 6 6 6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M20 12H4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M10 6l-6 6 6 6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M20 12H4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>\n  <path d=\"M10 6l-6 6 6 6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
};

export const Back = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Back.displayName = 'Back';
