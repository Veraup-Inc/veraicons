import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M12 3a9 9 0 1 1-9 9h9z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M12 3a9 9 0 1 1-9 9h9z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M12 3a9 9 0 1 1-9 9h9z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M11.25 11.25L3 11.25L2.78 11.28L2.65 11.34L2.42 11.52L2.31 11.71L2.25 12L2.43 13.83L2.99 15.73L3.89 17.42L5.11 18.89L6.58 20.11L8.27 21.01L10.10 21.56L12 21.75L13.90 21.56L15.73 21.01L17.42 20.11L18.89 18.89L20.11 17.42L21.01 15.73L21.56 13.90L21.75 12L21.56 10.10L21.01 8.27L20.11 6.58L18.89 5.11L17.42 3.89L15.73 2.99L13.83 2.43L12 2.25L11.71 2.31L11.52 2.42L11.34 2.65L11.28 2.78L11.25 3Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M11.25 2.17L11.25 11.25L2.17 11.25L2.43 13.90L2.99 15.73L3.89 17.42L5.10 18.90L6.58 20.11L8.27 21.01L10.10 21.57L12 21.75L13.90 21.57L15.73 21.01L17.42 20.11L18.90 18.90L20.11 17.42L21.01 15.73L21.57 13.90L21.75 12L21.57 10.10L21.01 8.27L20.11 6.58L18.90 5.10L17.42 3.89L15.73 2.99L13.90 2.43Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M11.25 11.25L3 11.25L2.78 11.28L2.65 11.34L2.42 11.52L2.31 11.71L2.25 12L2.43 13.83L2.99 15.73L3.89 17.42L5.11 18.89L6.58 20.11L8.27 21.01L10.10 21.56L12 21.75L13.90 21.56L15.73 21.01L17.42 20.11L18.89 18.89L20.11 17.42L21.01 15.73L21.56 13.90L21.75 12L21.56 10.10L21.01 8.27L20.11 6.58L18.89 5.11L17.42 3.89L15.73 2.99L13.83 2.43L12 2.25L11.71 2.31L11.52 2.42L11.34 2.65L11.28 2.78L11.25 3Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M12 3a9 9 0 1 1-9 9h9zz\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M12 3a9 9 0 1 1-9 9h9z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M12 3a9 9 0 1 1-9 9h9zz\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M12 3a9 9 0 1 1-9 9h9z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M12 3a9 9 0 1 1-9 9h9z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M12 3a9 9 0 1 1-9 9h9zz\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const PieChart = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
PieChart.displayName = 'PieChart';
