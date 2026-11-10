import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M12 2.17l2.89 6.54l7.11 .73l-5.33 4.77l1.51 6.98l-6.18-3.59l-6.18 3.59l1.51-6.98l-5.33-4.77l7.11-.73z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M12 2.17l2.89 6.54l7.11 .73l-5.33 4.77l1.51 6.98l-6.18-3.59l-6.18 3.59l1.51-6.98l-5.33-4.77l7.11-.73z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M12 2.17l2.89 6.54l7.11 .73l-5.33 4.77l1.51 6.98l-6.18-3.59l-6.18 3.59l1.51-6.98l-5.33-4.77l7.11-.73z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M6.50 14.48L5.08 21.10L5.08 21.32L5.15 21.52L5.27 21.70L5.44 21.84L5.57 21.90L5.78 21.94L5.93 21.93L6.13 21.87L12 18.47L17.80 21.84L17.93 21.90L18.15 21.94L18.43 21.90L18.62 21.80L18.82 21.59L18.92 21.32L18.92 21.10L17.50 14.48L22.55 9.95L22.67 9.77L22.74 9.56L22.74 9.35L22.71 9.21L22.62 9.01L22.47 8.86L22.35 8.78L22.15 8.70L15.40 8.01L12.65 1.80L12.47 1.58L12.28 1.47L12 1.42L11.79 1.45L11.53 1.58L11.38 1.74L11.31 1.87L8.60 8.01L1.85 8.70L1.71 8.75L1.53 8.86L1.43 8.96L1.31 9.14L1.26 9.35L1.26 9.56L1.33 9.77L1.45 9.95Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M6.50 14.48L4.81 22.31L5.07 22.50L12 18.47L18.93 22.50L19.19 22.31L17.50 14.48L23.48 9.13L23.38 8.83L15.40 8.01L12.16 0.67L11.84 0.67L8.60 8.01L0.62 8.83L0.52 9.13Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M6.50 14.48L5.08 21.10L5.08 21.32L5.15 21.52L5.27 21.70L5.44 21.84L5.57 21.90L5.78 21.94L5.93 21.93L6.13 21.87L12 18.47L17.80 21.84L17.93 21.90L18.15 21.94L18.43 21.90L18.62 21.80L18.82 21.59L18.92 21.32L18.92 21.10L17.50 14.48L22.55 9.95L22.67 9.77L22.74 9.56L22.74 9.35L22.71 9.21L22.62 9.01L22.47 8.86L22.35 8.78L22.15 8.70L15.40 8.01L12.65 1.80L12.47 1.58L12.28 1.47L12 1.42L11.79 1.45L11.53 1.58L11.38 1.74L11.31 1.87L8.60 8.01L1.85 8.70L1.71 8.75L1.53 8.86L1.43 8.96L1.31 9.14L1.26 9.35L1.26 9.56L1.33 9.77L1.45 9.95Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M12 2.17l2.89 6.54l7.11 .73l-5.33 4.77l1.51 6.98l-6.18-3.59l-6.18 3.59l1.51-6.98l-5.33-4.77l7.11-.73z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M12 2.17l2.89 6.54l7.11 .73l-5.33 4.77l1.51 6.98l-6.18-3.59l-6.18 3.59l1.51-6.98l-5.33-4.77l7.11-.73z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M12 2.17l2.89 6.54l7.11 .73l-5.33 4.77l1.51 6.98l-6.18-3.59l-6.18 3.59l1.51-6.98l-5.33-4.77l7.11-.73z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M12 2.17l2.89 6.54l7.11 .73l-5.33 4.77l1.51 6.98l-6.18-3.59l-6.18 3.59l1.51-6.98l-5.33-4.77l7.11-.73z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M12 2.17l2.89 6.54l7.11 .73l-5.33 4.77l1.51 6.98l-6.18-3.59l-6.18 3.59l1.51-6.98l-5.33-4.77l7.11-.73z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M12 2.17l2.89 6.54l7.11 .73l-5.33 4.77l1.51 6.98l-6.18-3.59l-6.18 3.59l1.51-6.98l-5.33-4.77l7.11-.73z\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Star = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Star.displayName = 'Star';
