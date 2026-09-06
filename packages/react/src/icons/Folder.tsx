import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M3 6.5A2.5 2.5 0 0 1 5.5 4h3.6c.7 0 1.4.3 1.9.8L12.5 6h6A2.5 2.5 0 0 1 21 8.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M3 4h7l2 2h9v14H3z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"butt\" strokeLinejoin=\"miter\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M3 6.5A2.5 2.5 0 0 1 5.5 4h3.6c.7 0 1.4.3 1.9.8L12.5 6h6A2.5 2.5 0 0 1 21 8.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"square\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M2.25 6.48L2.25 17.50L2.27 17.90L2.32 18.16L2.41 18.52L2.51 18.77L2.70 19.15L2.91 19.46L3.07 19.66L3.34 19.93L3.67 20.19L4.04 20.40L4.43 20.57L4.84 20.68L5.31 20.74L18.69 20.74L19.11 20.69L19.36 20.63L19.72 20.51L20.10 20.33L20.33 20.19L20.66 19.93L20.96 19.62L21.19 19.33L21.40 18.96L21.57 18.57L21.68 18.16L21.74 17.69L21.74 8.31L21.69 7.89L21.63 7.64L21.51 7.28L21.33 6.90L21.19 6.67L20.93 6.34L20.62 6.04L20.33 5.81L19.96 5.60L19.57 5.43L19.16 5.32L18.74 5.26L12.76 5.25L11.02 3.85L10.51 3.56L9.98 3.37L9.57 3.28L9.20 3.25L5.31 3.26L5.05 3.28L4.68 3.35L4.23 3.51L3.90 3.67L3.67 3.81L3.38 4.04L3.18 4.22L2.94 4.50L2.78 4.72L2.60 5.04L2.49 5.28L2.37 5.64L2.31 5.89Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M2.25 3.25L2.25 20.75L21.75 20.75L21.75 5.25L12.31 5.25L10.31 3.25Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M2.25 6.48L2.25 17.50L2.27 17.90L2.32 18.16L2.41 18.52L2.51 18.77L2.70 19.15L2.91 19.46L3.07 19.66L3.34 19.93L3.67 20.19L4.04 20.40L4.43 20.57L4.84 20.68L5.31 20.74L18.69 20.74L19.11 20.69L19.36 20.63L19.72 20.51L20.10 20.33L20.33 20.19L20.66 19.93L20.96 19.62L21.19 19.33L21.40 18.96L21.57 18.57L21.68 18.16L21.74 17.69L21.74 8.31L21.69 7.89L21.63 7.64L21.51 7.28L21.33 6.90L21.19 6.67L20.93 6.34L20.62 6.04L20.33 5.81L19.96 5.60L19.57 5.43L19.16 5.32L18.74 5.26L12.76 5.25L11.02 3.85L10.51 3.56L9.98 3.37L9.57 3.28L9.20 3.25L5.31 3.26L5.05 3.28L4.68 3.35L4.23 3.51L3.90 3.67L3.67 3.81L3.38 4.04L3.18 4.22L2.94 4.50L2.78 4.72L2.60 5.04L2.49 5.28L2.37 5.64L2.31 5.89Z\" fill=\"currentColor\" fillRule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M3 6.5A2.5 2.5 0 0 1 5.5 4h3.6c.7 0 1.4.3 1.9.8L12.5 6h6A2.5 2.5 0 0 1 21 8.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M3 6.5A2.5 2.5 0 0 1 5.5 4h3.6c.7 0 1.4.3 1.9.8L12.5 6h6A2.5 2.5 0 0 1 21 8.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M3 6.5A2.5 2.5 0 0 1 5.5 4h3.6c.7 0 1.4.3 1.9.8L12.5 6h6A2.5 2.5 0 0 1 21 8.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M3 6.5A2.5 2.5 0 0 1 5.5 4h3.6c.7 0 1.4.3 1.9.8L12.5 6h6A2.5 2.5 0 0 1 21 8.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Folder = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Folder.displayName = 'Folder';
