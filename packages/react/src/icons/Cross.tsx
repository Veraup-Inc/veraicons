import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M12 2v20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M5.33 8.67h13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M12 2v20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>\n  <path d=\"M5.33 8.67h13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M12 2v20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M5.33 8.67h13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M18.80 9.96L19.17 9.87L19.39 9.75L19.59 9.59L19.82 9.28L19.95 8.92L19.97 8.67L19.95 8.42L19.82 8.06L19.59 7.75L19.39 7.59L19.17 7.47L18.92 7.39L18.67 7.37L13.30 7.37L13.30 2L13.28 1.75L13.15 1.39L13 1.18L12.82 1L12.50 0.80L12.13 0.71L11.75 0.72L11.50 0.80L11.28 0.92L11.08 1.08L10.92 1.28L10.80 1.50L10.72 1.75L10.70 2L10.70 7.37L5.20 7.38L4.83 7.47L4.61 7.59L4.41 7.75L4.18 8.06L4.09 8.29L4.04 8.54L4.05 8.92L4.13 9.17L4.25 9.39L4.41 9.59L4.61 9.75L4.95 9.91L5.33 9.97L10.70 9.97L10.71 22.13L10.80 22.50L10.92 22.72L11.08 22.92L11.39 23.15L11.75 23.28L12 23.30L12.25 23.28L12.61 23.15L12.92 22.92L13.08 22.72L13.20 22.50L13.29 22.13L13.30 9.97Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M18.67 7.37L13.30 7.37L13.30 2L10.70 2L10.70 7.37L5.33 7.37L5.33 9.97L10.70 9.97L10.70 22L13.30 22L13.30 9.97L18.67 9.97Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M19.97 9.97L19.97 7.37L13.30 7.37L13.30 0.70L10.70 0.70L10.70 7.37L4.03 7.37L4.03 9.97L10.70 9.97L10.70 23.30L13.30 23.30L13.30 9.97Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M12 2v20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M5.33 8.67h13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M12 2v20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M5.33 8.67h13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M12 2v20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M5.33 8.67h13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M12 2v20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>\n  <path d=\"M5.33 8.67h13.34\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
};

export const Cross = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Cross.displayName = 'Cross';
