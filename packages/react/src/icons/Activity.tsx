import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M2 12h3.89l3.33-7.78l4.45 15.56l3.33-7.78h5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M2 12h3.89l3.33-7.78l4.45 15.56l3.33-7.78h5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M2 12h3.89l3.33-7.78l4.45 15.56l3.33-7.78h5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M5.03 10.70L2 10.70L1.75 10.72L1.50 10.80L1.28 10.92L1.08 11.08L0.92 11.28L0.80 11.50L0.72 11.75L0.70 12L0.72 12.25L0.80 12.50L1 12.82L1.18 13L1.50 13.20L1.87 13.29L5.89 13.30L6.26 13.25L6.50 13.15L6.80 12.93L7.03 12.63L8.98 8.09L12.46 20.26L12.58 20.49L12.83 20.77L13.16 20.97L13.52 21.07L13.91 21.06L14.27 20.93L14.58 20.71L14.81 20.41L17.86 13.30L22 13.30L22.25 13.28L22.61 13.15L22.92 12.92L23.08 12.72L23.20 12.50L23.29 12.13L23.29 11.87L23.24 11.62L23.15 11.39L23 11.18L22.82 11L22.61 10.85L22.25 10.72L22 10.70L17 10.70L16.75 10.72L16.51 10.80L16.28 10.91L16.09 11.07L15.86 11.37L13.91 15.91L10.43 3.74L10.24 3.41L10.06 3.23L9.73 3.03L9.37 2.93L8.98 2.94L8.62 3.07L8.31 3.29L8.08 3.59Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M5.03 10.70L2 10.70L2 13.30L6.75 13.30L8.98 8.09L13.05 22.35L13.96 22.40L17.86 13.30L22 13.30L22 10.70L16.14 10.70L13.91 15.91L9.84 1.65L8.93 1.60Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M5.03 10.70L0.70 10.70L0.70 13.30L5.89 13.30L6.26 13.25L6.61 13.09L6.89 12.83L7.09 12.51L8.98 8.09L12.46 20.26L12.58 20.49L12.83 20.77L13.16 20.97L13.52 21.07L13.91 21.06L14.27 20.93L14.58 20.71L14.81 20.41L17.86 13.30L23.30 13.30L23.30 10.70L17 10.70L16.63 10.75L16.39 10.85L16.18 10.99L16 11.17L15.86 11.37L13.91 15.91L10.43 3.74L10.24 3.41L10.06 3.23L9.73 3.03L9.37 2.93L8.98 2.94L8.62 3.07L8.31 3.29L8.08 3.59Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M2 12h3.89l3.33-7.78l4.45 15.56l3.33-7.78h5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M2 12h3.89l3.33-7.78l4.45 15.56l3.33-7.78h5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M2 12h3.89l3.33-7.78l4.45 15.56l3.33-7.78h5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M2 12h3.89l3.33-7.78l4.45 15.56l3.33-7.78h5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
};

export const Activity = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Activity.displayName = 'Activity';
