import * as React from 'react';
import type { VeraIconProps } from '../types';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M12.00 3.40L14.53 9.12L20.75 9.76L16.09 13.93L17.41 20.04L12.00 16.90L6.59 20.04L7.91 13.93L3.25 9.76L9.47 9.12z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M12.00 3.40L14.53 9.12L20.75 9.76L16.09 13.93L17.41 20.04L12.00 16.90L6.59 20.04L7.91 13.93L3.25 9.76L9.47 9.12z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M12.00 3.40L14.53 9.12L20.75 9.76L16.09 13.93L17.41 20.04L12.00 16.90L6.59 20.04L7.91 13.93L3.25 9.76L9.47 9.12z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M7.08 14.20L5.85 19.95L5.85 20.17L5.92 20.37L6.04 20.55L6.21 20.69L6.41 20.77L6.55 20.79L6.70 20.78L6.90 20.72L12 17.77L17.03 20.69L17.30 20.78L17.52 20.78L17.66 20.75L17.91 20.60L18.05 20.44L18.15 20.17L18.15 19.95L16.92 14.20L21.30 10.27L21.42 10.09L21.49 9.88L21.50 9.74L21.46 9.53L21.37 9.34L21.22 9.18L21.04 9.07L20.90 9.02L15.04 8.42L12.65 3.03L12.52 2.86L12.28 2.70L12.06 2.65L11.77 2.68L11.52 2.82L11.34 3.05L8.96 8.42L3.10 9.02L2.96 9.07L2.78 9.18L2.68 9.28L2.56 9.46L2.51 9.67L2.51 9.88L2.58 10.09L2.70 10.27Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M7.08 14.20L5.50 21.54L12 17.77L18.50 21.54L16.92 14.20L22.51 9.19L15.04 8.42L11.25 -0.15L11.25 3.24L8.96 8.42L1.49 9.19Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M7.08 14.20L5.85 19.95L5.85 20.17L5.92 20.37L6.04 20.55L6.21 20.69L6.41 20.77L6.55 20.79L6.70 20.78L6.90 20.72L12 17.77L17.03 20.69L17.30 20.78L17.52 20.78L17.66 20.75L17.91 20.60L18.05 20.44L18.15 20.17L18.15 19.95L16.92 14.20L21.30 10.27L21.42 10.09L21.49 9.88L21.50 9.74L21.46 9.53L21.37 9.34L21.22 9.18L21.04 9.07L20.90 9.02L15.04 8.42L12.65 3.03L12.52 2.86L12.28 2.70L12.06 2.65L11.77 2.68L11.52 2.82L11.34 3.05L8.96 8.42L3.10 9.02L2.96 9.07L2.78 9.18L2.68 9.28L2.56 9.46L2.51 9.67L2.51 9.88L2.58 10.09L2.70 10.27Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M12.00 3.40L14.53 9.12L20.75 9.76L16.09 13.93L17.41 20.04L12.00 16.90L6.59 20.04L7.91 13.93L3.25 9.76L9.47 9.12z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M12.00 3.40L14.53 9.12L20.75 9.76L16.09 13.93L17.41 20.04L12.00 16.90L6.59 20.04L7.91 13.93L3.25 9.76L9.47 9.12z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M12.00 3.40L14.53 9.12L20.75 9.76L16.09 13.93L17.41 20.04L12.00 16.90L6.59 20.04L7.91 13.93L3.25 9.76L9.47 9.12z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M12.00 3.40L14.53 9.12L20.75 9.76L16.09 13.93L17.41 20.04L12.00 16.90L6.59 20.04L7.91 13.93L3.25 9.76L9.47 9.12z\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Star = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Star.displayName = 'Star';
