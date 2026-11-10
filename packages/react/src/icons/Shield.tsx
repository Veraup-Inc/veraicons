import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M12 2l7.9 2.84v6.63c0 4.53-3.37 8.32-7.9 10.53c-4.53-2.21-7.9-6-7.9-10.53v-6.63z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M12 2l7.9 2.84v6.63c0 4.53-3.37 8.32-7.9 10.53c-4.53-2.21-7.9-6-7.9-10.53v-6.63z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M12 2l7.9 2.84v6.63c0 4.53-3.37 8.32-7.9 10.53c-4.53-2.21-7.9-6-7.9-10.53v-6.63z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M12.25 1.29L12.04 1.25L11.75 1.29L3.85 4.13L3.65 4.24L3.49 4.41L3.38 4.61L3.35 4.84L3.35 11.47L3.37 12.06L3.42 12.66L3.52 13.29L3.64 13.83L3.80 14.40L4 15L4.23 15.55L4.46 16.04L4.75 16.57L5.05 17.08L5.75 18.06L6.54 18.98L7.45 19.86L8.41 20.66L8.91 21.04L9.96 21.73L10.53 22.07L11.66 22.67L11.86 22.74L12 22.75L12.14 22.74L12.34 22.67L13.49 22.06L14.58 21.38L15.59 20.66L16.55 19.86L17.03 19.42L17.84 18.55L18.25 18.06L18.93 17.11L19.25 16.57L19.77 15.55L20.01 14.96L20.20 14.40L20.35 13.87L20.49 13.25L20.58 12.66L20.63 12.10L20.65 11.47L20.65 4.84L20.62 4.61L20.55 4.47L20.47 4.35L20.29 4.20L20.15 4.13Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M12 1.20L3.35 4.31L3.35 11.48L3.37 12.08L3.42 12.68L3.52 13.27L3.64 13.85L3.80 14.42L4 14.98L4.22 15.53L4.47 16.06L4.75 16.58L5.40 17.59L6.15 18.54L6.98 19.43L7.91 20.26L8.40 20.65L9.43 21.39L10.52 22.07L12 22.84L12.91 22.38L14.03 21.74L15.10 21.03L15.60 20.65L16.56 19.85L17.02 19.43L17.85 18.54L18.24 18.07L18.94 17.09L19.25 16.58L19.53 16.06L19.78 15.53L20 14.98L20.20 14.42L20.36 13.85L20.48 13.27L20.58 12.68L20.63 12.08L20.65 11.48L20.65 4.31Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M12.25 1.29L12.04 1.25L11.75 1.29L3.85 4.13L3.65 4.24L3.49 4.41L3.38 4.61L3.35 4.84L3.35 11.47L3.37 12.06L3.42 12.66L3.52 13.29L3.64 13.83L3.80 14.40L4 15L4.23 15.55L4.46 16.04L4.75 16.57L5.05 17.08L5.75 18.06L6.54 18.98L7.45 19.86L8.41 20.66L8.91 21.04L9.96 21.73L10.53 22.07L11.66 22.67L11.86 22.74L12 22.75L12.14 22.74L12.34 22.67L13.49 22.06L14.58 21.38L15.59 20.66L16.55 19.86L17.03 19.42L17.84 18.55L18.25 18.06L18.93 17.11L19.25 16.57L19.77 15.55L20.01 14.96L20.20 14.40L20.35 13.87L20.49 13.25L20.58 12.66L20.63 12.10L20.65 11.47L20.65 4.84L20.62 4.61L20.55 4.47L20.47 4.35L20.29 4.20L20.15 4.13Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M12 2l7.9 2.84v6.63c0 4.53-3.37 8.32-7.9 10.53c-4.53-2.21-7.9-6-7.9-10.53v-6.63z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M12 2l7.9 2.84v6.63c0 4.53-3.37 8.32-7.9 10.53c-4.53-2.21-7.9-6-7.9-10.53v-6.63z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M12 2l7.9 2.84v6.63c0 4.53-3.37 8.32-7.9 10.53c-4.53-2.21-7.9-6-7.9-10.53v-6.63z\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M12 2l7.9 2.84v6.63c0 4.53-3.37 8.32-7.9 10.53c-4.53-2.21-7.9-6-7.9-10.53v-6.63z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M12 2l7.9 2.84v6.63c0 4.53-3.37 8.32-7.9 10.53c-4.53-2.21-7.9-6-7.9-10.53v-6.63z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M12 2l7.9 2.84v6.63c0 4.53-3.37 8.32-7.9 10.53c-4.53-2.21-7.9-6-7.9-10.53v-6.63z\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const Shield = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
Shield.displayName = 'Shield';
