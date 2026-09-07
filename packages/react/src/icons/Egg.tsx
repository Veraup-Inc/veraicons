import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M12 2.5c4 0 7 5.5 7 10a7 7 0 0 1-14 0c0-4.5 3-10 7-10z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M12 2.5c4 0 7 5.5 7 10a7 7 0 0 1-14 0c0-4.5 3-10 7-10z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M12 2.5c4 0 7 5.5 7 10a7 7 0 0 1-14 0c0-4.5 3-10 7-10z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M12.04 1.75L11.46 1.78L10.82 1.89L10.27 2.05L9.81 2.23L9.25 2.52L8.77 2.83L8.31 3.18L7.91 3.53L7.46 3.99L7.07 4.44L6.73 4.88L6.36 5.42L5.76 6.47L5.47 7.06L5 8.24L4.64 9.45L4.40 10.65L4.31 11.30L4.25 12.48L4.32 13.56L4.50 14.46L4.82 15.42L5.31 16.42L5.82 17.18L6.49 17.94L7.32 18.68L8.08 19.19L8.99 19.64L10.04 20L11.04 20.19L11.95 20.25L13.06 20.18L13.96 20L14.92 19.68L15.92 19.19L16.76 18.62L17.44 18.01L18.18 17.18L18.69 16.42L19.14 15.51L19.50 14.46L19.69 13.46L19.75 12.48L19.69 11.30L19.60 10.65L19.36 9.45L19 8.24L18.53 7.06L18.24 6.47L17.64 5.42L17.30 4.92L16.93 4.44L16.54 3.99L16.09 3.53L15.69 3.18L15.23 2.83L14.75 2.52L14.19 2.23L13.65 2.02L13.10 1.87L12.62 1.79Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M12 1.75L11.42 1.78L10.86 1.88L10.31 2.03L9.78 2.25L9.27 2.51L8.79 2.81L8.33 3.16L7.89 3.55L7.48 3.97L7.08 4.42L6.72 4.90L6.37 5.41L6.05 5.93L5.75 6.48L5.48 7.05L5.01 8.22L4.64 9.43L4.40 10.66L4.32 11.28L4.27 11.89L4.25 12.51L4.31 13.51L4.51 14.51L4.84 15.47L5.29 16.38L5.85 17.22L6.52 17.98L7.28 18.65L8.12 19.21L9.03 19.66L9.99 19.99L10.99 20.19L12 20.25L13.01 20.19L14.01 19.99L14.97 19.66L15.88 19.21L16.72 18.65L17.48 17.98L18.15 17.22L18.71 16.38L19.16 15.47L19.49 14.51L19.69 13.51L19.75 12.51L19.73 11.89L19.68 11.28L19.60 10.66L19.36 9.43L18.99 8.22L18.52 7.05L18.25 6.48L17.95 5.93L17.63 5.41L17.28 4.90L16.92 4.42L16.52 3.97L16.11 3.55L15.67 3.16L15.21 2.81L14.73 2.51L14.22 2.25L13.69 2.03L13.14 1.88L12.58 1.78Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M12.04 1.75L11.46 1.78L10.82 1.89L10.27 2.05L9.81 2.23L9.25 2.52L8.77 2.83L8.31 3.18L7.91 3.53L7.46 3.99L7.07 4.44L6.73 4.88L6.36 5.42L5.76 6.47L5.47 7.06L5 8.24L4.64 9.45L4.40 10.65L4.31 11.30L4.25 12.48L4.32 13.56L4.50 14.46L4.82 15.42L5.31 16.42L5.82 17.18L6.49 17.94L7.32 18.68L8.08 19.19L8.99 19.64L10.04 20L11.04 20.19L11.95 20.25L13.06 20.18L13.96 20L14.92 19.68L15.92 19.19L16.76 18.62L17.44 18.01L18.18 17.18L18.69 16.42L19.14 15.51L19.50 14.46L19.69 13.46L19.75 12.48L19.69 11.30L19.60 10.65L19.36 9.45L19 8.24L18.53 7.06L18.24 6.47L17.64 5.42L17.30 4.92L16.93 4.44L16.54 3.99L16.09 3.53L15.69 3.18L15.23 2.83L14.75 2.52L14.19 2.23L13.65 2.02L13.10 1.87L12.62 1.79Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M12 2.5c4 0 7 5.5 7 10a7 7 0 0 1-14 0c0-4.5 3-10 7-10zz\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M12 2.5c4 0 7 5.5 7 10a7 7 0 0 1-14 0c0-4.5 3-10 7-10z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M12 2.5c4 0 7 5.5 7 10a7 7 0 0 1-14 0c0-4.5 3-10 7-10zz\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M12 2.5c4 0 7 5.5 7 10a7 7 0 0 1-14 0c0-4.5 3-10 7-10z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M12 2.5c4 0 7 5.5 7 10a7 7 0 0 1-14 0c0-4.5 3-10 7-10z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M12 2.5c4 0 7 5.5 7 10a7 7 0 0 1-14 0c0-4.5 3-10 7-10zz\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Egg = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Egg.displayName = 'Egg';
