import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M22.75 12.01L22.70 10.96L22.55 9.91L22.29 8.89L21.94 7.89L21.48 6.94L20.94 6.04L20.32 5.19L19.61 4.41L18.83 3.70L17.98 3.07L17.08 2.52L16.12 2.07L15.13 1.72L14.11 1.46L13.06 1.30L12.01 1.25L10.96 1.30L9.91 1.45L8.89 1.71L7.89 2.06L6.94 2.52L6.04 3.06L5.19 3.68L4.41 4.39L3.70 5.17L3.07 6.02L2.52 6.92L2.07 7.88L1.72 8.87L1.46 9.89L1.30 10.94L1.25 11.99L1.30 13.04L1.45 14.09L1.71 15.11L2.06 16.11L2.52 17.06L3.06 17.96L3.68 18.81L4.39 19.59L5.17 20.30L6.02 20.93L6.92 21.48L7.88 21.93L8.87 22.28L9.89 22.54L10.94 22.70L11.99 22.75L13.04 22.70L14.09 22.55L15.11 22.29L16.11 21.94L17.06 21.48L17.96 20.94L18.81 20.32L19.59 19.61L20.30 18.83L20.93 17.98L21.48 17.08L21.93 16.12L22.28 15.13L22.54 14.11L22.70 13.06Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M22.75 12L22.70 10.95L22.54 9.90L22.29 8.88L21.93 7.89L21.48 6.93L20.94 6.03L20.31 5.18L19.60 4.40L18.82 3.69L17.97 3.06L17.07 2.52L16.11 2.07L15.12 1.71L14.10 1.46L13.05 1.30L12 1.25L10.95 1.30L9.90 1.46L8.88 1.71L7.89 2.07L6.93 2.52L6.03 3.06L5.18 3.69L4.40 4.40L3.69 5.18L3.06 6.03L2.52 6.93L2.07 7.89L1.71 8.88L1.46 9.90L1.30 10.95L1.25 12L1.30 13.05L1.46 14.10L1.71 15.12L2.07 16.11L2.52 17.07L3.06 17.97L3.69 18.82L4.40 19.60L5.18 20.31L6.03 20.94L6.93 21.48L7.89 21.93L8.88 22.29L9.90 22.54L10.95 22.70L12 22.75L13.05 22.70L14.10 22.54L15.12 22.29L16.11 21.93L17.07 21.48L17.97 20.94L18.82 20.31L19.60 19.60L20.31 18.82L20.94 17.97L21.48 17.07L21.93 16.11L22.29 15.12L22.54 14.10L22.70 13.05Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M22.75 12.01L22.70 10.96L22.55 9.91L22.29 8.89L21.94 7.89L21.48 6.94L20.94 6.04L20.32 5.19L19.61 4.41L18.83 3.70L17.98 3.07L17.08 2.52L16.12 2.07L15.13 1.72L14.11 1.46L13.06 1.30L12.01 1.25L10.96 1.30L9.91 1.45L8.89 1.71L7.89 2.06L6.94 2.52L6.04 3.06L5.19 3.68L4.41 4.39L3.70 5.17L3.07 6.02L2.52 6.92L2.07 7.88L1.72 8.87L1.46 9.89L1.30 10.94L1.25 11.99L1.30 13.04L1.45 14.09L1.71 15.11L2.06 16.11L2.52 17.06L3.06 17.96L3.68 18.81L4.39 19.59L5.17 20.30L6.02 20.93L6.92 21.48L7.88 21.93L8.87 22.28L9.89 22.54L10.94 22.70L11.99 22.75L13.04 22.70L14.09 22.55L15.11 22.29L16.11 21.94L17.06 21.48L17.96 20.94L18.81 20.32L19.59 19.61L20.30 18.83L20.93 17.98L21.48 17.08L21.93 16.12L22.28 15.13L22.54 14.11L22.70 13.06Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Circle = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Circle.displayName = 'Circle';
