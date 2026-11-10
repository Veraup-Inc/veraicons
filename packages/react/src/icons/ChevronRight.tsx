import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M8.67 5.33l6.66 6.67l-6.66 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M8.67 5.33l6.66 6.67l-6.66 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M8.67 5.33l6.66 6.67l-6.66 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M8.03 6.53L13.49 12L7.75 17.75L7.52 18.06L7.39 18.42L7.38 18.80L7.47 19.17L7.59 19.39L7.85 19.68L8.17 19.87L8.42 19.95L8.80 19.96L9.05 19.91L9.28 19.82L9.59 19.59L16.25 12.92L16.41 12.72L16.57 12.38L16.62 12.13L16.62 11.87L16.53 11.50L16.41 11.28L16.25 11.08L9.59 4.41L9.28 4.18L9.05 4.09L8.80 4.04L8.54 4.04L8.29 4.09L8.06 4.18L7.85 4.32L7.67 4.50L7.52 4.72L7.43 4.95L7.38 5.20L7.38 5.46L7.43 5.71L7.59 6.05L7.75 6.25Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M8.03 6.53L13.49 12L7.75 17.75L9.59 19.59L17.17 12L9.59 4.41L7.75 6.25Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M8.03 6.53L13.49 12L6.83 18.67L8.67 20.51L16.25 12.92L16.41 12.72L16.53 12.50L16.61 12.25L16.63 12L16.61 11.75L16.53 11.50L16.41 11.28L16.25 11.08L8.67 3.49L6.83 5.33Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M8.67 5.33l6.66 6.67l-6.66 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M8.67 5.33l6.66 6.67l-6.66 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M8.67 5.33l6.66 6.67l-6.66 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M8.67 5.33l6.66 6.67l-6.66 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
};

export const ChevronRight = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
ChevronRight.displayName = 'ChevronRight';
