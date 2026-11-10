import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M3.11 12.56l5.56 5.55l12.22-12.22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M3.11 12.56l5.56 5.55l12.22-12.22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M3.11 12.56l5.56 5.55l12.22-12.22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M2.42 13.71L7.85 19.12L8.06 19.26L8.42 19.39L8.80 19.40L9.17 19.31L9.39 19.19L9.59 19.03L21.81 6.81L22.04 6.50L22.17 6.14L22.18 5.76L22.09 5.39L21.97 5.17L21.81 4.97L21.50 4.74L21.27 4.65L20.89 4.59L20.64 4.61L20.28 4.74L20.07 4.89L8.67 16.27L4.03 11.64L3.83 11.48L3.61 11.36L3.36 11.28L3.11 11.26L2.73 11.32L2.50 11.41L2.28 11.56L2.10 11.74L1.96 11.95L1.87 12.18L1.82 12.43L1.82 12.69L1.87 12.94L2.03 13.28Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M2.42 13.71L8.67 19.95L21.81 6.81L19.97 4.97L8.67 16.27L4.03 11.64L2.19 13.48Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M2.42 13.71L7.85 19.12L8.06 19.26L8.42 19.39L8.80 19.40L9.17 19.31L9.39 19.19L9.59 19.03L22.73 5.89L20.89 4.05L8.67 16.27L3.11 10.72L1.27 12.56Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M3.11 12.56l5.56 5.55l12.22-12.22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M3.11 12.56l5.56 5.55l12.22-12.22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M3.11 12.56l5.56 5.55l12.22-12.22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M3.11 12.56l5.56 5.55l12.22-12.22\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
};

export const Check = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Check.displayName = 'Check';
