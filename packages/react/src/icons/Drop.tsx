import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M12 2c4.55 5.12 7.4 8.65 7.4 12.52a7.4 7.4 0 0 1 -14.8 0c0-3.87 2.85-7.4 7.4-12.52z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M12 2l7.4 12.52a7.4 7.4 0 0 1 -14.8 0z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M12 2c4.55 5.12 7.4 8.65 7.4 12.52a7.4 7.4 0 0 1 -14.8 0c0-3.87 2.85-7.4 7.4-12.52z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M12.56 1.50L12.34 1.33L12.14 1.26L12 1.25L11.72 1.30L11.49 1.45L9.81 3.36L8.35 5.09L7.06 6.74L6.30 7.81L5.64 8.85L5.08 9.86L4.82 10.39L4.42 11.38L4.11 12.41L3.99 12.97L3.87 13.97L3.85 14.50L3.93 15.63L4.14 16.68L4.45 17.59L4.97 18.64L5.51 19.44L6.20 20.25L7.08 21.01L7.97 21.60L8.84 22.03L9.94 22.40L10.99 22.61L11.95 22.67L13.11 22.59L14.16 22.38L15.07 22.07L16.12 21.55L17 20.95L17.73 20.32L18.49 19.44L19.03 18.64L19.51 17.68L19.88 16.58L20.09 15.53L20.15 14.57L20.13 14.01L20.08 13.45L19.90 12.45L19.75 11.90L19.58 11.38L19.18 10.39L18.92 9.86L18.36 8.85L18.03 8.32L17.34 7.28L16.11 5.66L14.70 3.95Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M12 0.53L3.84 14.34L3.92 15.58L4.13 16.63L4.47 17.64L4.94 18.60L5.53 19.48L6.24 20.28L7.04 20.99L7.92 21.58L8.88 22.05L9.89 22.39L10.94 22.60L12 22.67L13.06 22.60L14.11 22.39L15.12 22.05L16.08 21.58L16.96 20.99L17.76 20.28L18.47 19.48L19.06 18.60L19.53 17.64L19.87 16.63L20.08 15.58L20.16 14.34Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M12.56 1.50L12.34 1.33L12.14 1.26L12 1.25L11.72 1.30L11.49 1.45L9.81 3.36L8.35 5.09L7.06 6.74L6.30 7.81L5.64 8.85L5.08 9.86L4.82 10.39L4.42 11.38L4.11 12.41L3.99 12.97L3.87 13.97L3.85 14.50L3.93 15.63L4.14 16.68L4.45 17.59L4.97 18.64L5.51 19.44L6.20 20.25L7.08 21.01L7.97 21.60L8.84 22.03L9.94 22.40L10.99 22.61L11.95 22.67L13.11 22.59L14.16 22.38L15.07 22.07L16.12 21.55L17 20.95L17.73 20.32L18.49 19.44L19.03 18.64L19.51 17.68L19.88 16.58L20.09 15.53L20.15 14.57L20.13 14.01L20.08 13.45L19.90 12.45L19.75 11.90L19.58 11.38L19.18 10.39L18.92 9.86L18.36 8.85L18.03 8.32L17.34 7.28L16.11 5.66L14.70 3.95Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M12 2c4.55 5.12 7.4 8.65 7.4 12.52a7.4 7.4 0 0 1 -14.8 0c0-3.87 2.85-7.4 7.4-12.52zz\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M12 2c4.55 5.12 7.4 8.65 7.4 12.52a7.4 7.4 0 0 1 -14.8 0c0-3.87 2.85-7.4 7.4-12.52z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M12 2c4.55 5.12 7.4 8.65 7.4 12.52a7.4 7.4 0 0 1 -14.8 0c0-3.87 2.85-7.4 7.4-12.52zz\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M12 2c4.55 5.12 7.4 8.65 7.4 12.52a7.4 7.4 0 0 1 -14.8 0c0-3.87 2.85-7.4 7.4-12.52z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M12 2c4.55 5.12 7.4 8.65 7.4 12.52a7.4 7.4 0 0 1 -14.8 0c0-3.87 2.85-7.4 7.4-12.52z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M12 2c4.55 5.12 7.4 8.65 7.4 12.52a7.4 7.4 0 0 1 -14.8 0c0-3.87 2.85-7.4 7.4-12.52zz\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Drop = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Drop.displayName = 'Drop';
