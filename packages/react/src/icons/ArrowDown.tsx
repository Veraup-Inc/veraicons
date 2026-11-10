import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M12 3.11v17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M5.33 14.22l6.67 6.67l6.67-6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M12 3.11v17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>\n  <path d=\"M5.33 14.22l6.67 6.67l6.67-6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M12 3.11v17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M5.33 14.22l6.67 6.67l6.67-6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M11.18 21.89L11.50 22.09L11.75 22.17L12 22.19L12.25 22.17L12.50 22.09L12.82 21.89L19.59 15.14L19.75 14.94L19.87 14.72L19.95 14.47L19.97 14.22L19.95 13.97L19.82 13.61L19.59 13.30L19.39 13.14L19.05 12.98L18.67 12.92L18.29 12.98L18.06 13.07L17.75 13.30L13.30 17.75L13.29 2.98L13.24 2.73L13.15 2.50L13 2.29L12.82 2.11L12.50 1.91L12.25 1.83L12 1.81L11.75 1.83L11.50 1.91L11.28 2.03L11.08 2.19L10.92 2.39L10.80 2.61L10.71 2.98L10.70 17.75L6.25 13.30L5.94 13.07L5.71 12.98L5.33 12.92L4.95 12.98L4.72 13.07L4.41 13.30L4.18 13.61L4.05 13.97L4.03 14.22L4.05 14.47L4.13 14.72L4.25 14.94L4.41 15.14Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M13.30 3.11L10.70 3.11L10.70 17.75L6.25 13.30L4.41 15.14L12 22.73L19.59 15.14L17.75 13.30L13.30 17.75Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M10.70 22.19L13.30 22.19L13.30 21.43L20.51 14.22L18.67 12.38L13.30 17.75L13.30 1.81L10.70 1.81L10.70 17.75L5.33 12.38L3.49 14.22L10.70 21.43Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M12 3.11v17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M5.33 14.22l6.67 6.67l6.67-6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M12 3.11v17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M5.33 14.22l6.67 6.67l6.67-6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M12 3.11v17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>\n  <path d=\"M5.33 14.22l6.67 6.67l6.67-6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M12 3.11v17.78\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>\n  <path d=\"M5.33 14.22l6.67 6.67l6.67-6.67\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
};

export const ArrowDown = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
ArrowDown.displayName = 'ArrowDown';
