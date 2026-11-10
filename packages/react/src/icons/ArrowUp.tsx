import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M12 20.89v-17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M5.33 9.78l6.67-6.67l6.67 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M12 20.89v-17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>\n  <path d=\"M5.33 9.78l6.67-6.67l6.67 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M12 20.89v-17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M5.33 9.78l6.67-6.67l6.67 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M6.81 10.14L10.70 6.25L10.71 21.02L10.80 21.39L10.92 21.61L11.08 21.81L11.39 22.04L11.75 22.17L12 22.19L12.25 22.17L12.61 22.04L12.92 21.81L13.15 21.50L13.24 21.27L13.30 20.89L13.30 6.25L17.75 10.70L17.95 10.86L18.17 10.98L18.54 11.07L18.92 11.06L19.28 10.93L19.59 10.70L19.82 10.39L19.95 10.03L19.97 9.78L19.95 9.53L19.82 9.17L19.59 8.86L12.92 2.19L12.72 2.03L12.50 1.91L12.25 1.83L11.87 1.82L11.50 1.91L11.28 2.03L11.08 2.19L4.41 8.86L4.18 9.17L4.05 9.53L4.03 9.78L4.05 10.03L4.13 10.28L4.25 10.50L4.41 10.70L4.61 10.86L4.83 10.98L5.08 11.06L5.46 11.07L5.71 11.02L5.94 10.93L6.25 10.70Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M6.81 10.14L10.70 6.25L10.70 20.89L13.30 20.89L13.30 6.25L17.75 10.70L19.59 8.86L12 1.27L4.41 8.86L6.25 10.70Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M6.81 10.14L10.70 6.25L10.70 22.19L13.30 22.19L13.30 6.25L18.67 11.62L20.51 9.78L13.30 2.57L13.30 1.81L10.70 1.81L10.70 2.57L3.49 9.78L5.33 11.62Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M12 20.89v-17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M5.33 9.78l6.67-6.67l6.67 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M12 20.89v-17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M5.33 9.78l6.67-6.67l6.67 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M12 20.89v-17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M5.33 9.78l6.67-6.67l6.67 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M12 20.89v-17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>\n  <path d=\"M5.33 9.78l6.67-6.67l6.67 6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
};

export const ArrowUp = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
ArrowUp.displayName = 'ArrowUp';
