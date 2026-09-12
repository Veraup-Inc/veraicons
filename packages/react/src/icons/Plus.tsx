import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M12 5v14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M5 12h14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M12 5v14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>\n  <path d=\"M5 12h14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M12 5v14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M5 12h14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M10.71 19.13L10.80 19.50L10.92 19.72L11.08 19.92L11.39 20.15L11.75 20.28L12 20.30L12.25 20.28L12.61 20.15L12.92 19.92L13.08 19.72L13.20 19.50L13.28 19.25L13.30 19L13.30 13.30L19 13.30L19.25 13.28L19.61 13.15L19.92 12.92L20.08 12.72L20.20 12.50L20.29 12.13L20.29 11.87L20.24 11.62L20.15 11.39L20 11.18L19.82 11L19.61 10.85L19.25 10.72L19 10.70L13.30 10.70L13.30 5L13.28 4.75L13.15 4.39L13 4.18L12.82 4L12.50 3.80L12.13 3.71L11.87 3.71L11.62 3.76L11.28 3.92L11.08 4.08L10.92 4.28L10.80 4.50L10.72 4.75L10.70 5L10.70 10.70L5 10.70L4.75 10.72L4.39 10.85L4.08 11.08L3.92 11.28L3.80 11.50L3.71 11.87L3.71 12.13L3.76 12.38L3.85 12.61L4 12.82L4.18 13L4.39 13.15L4.75 13.28L5 13.30L10.70 13.30Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M13.30 19L13.30 13.30L19 13.30L19 10.70L13.30 10.70L13.30 5L10.70 5L10.70 10.70L5 10.70L5 13.30L10.70 13.30L10.70 19Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M10.70 20.30L13.30 20.30L13.30 13.30L20.30 13.30L20.30 10.70L13.30 10.70L13.30 3.70L10.70 3.70L10.70 10.70L3.70 10.70L3.70 13.30L10.70 13.30Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M12 5v14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M5 12h14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M12 5v14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M5 12h14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M12 5v14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M5 12h14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M12 5v14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>\n  <path d=\"M5 12h14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
};

export const Plus = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Plus.displayName = 'Plus';
