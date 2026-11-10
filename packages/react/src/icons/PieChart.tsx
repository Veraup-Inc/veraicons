import * as React from 'react';
import type { VeraIconProps } from '../types.js';

const bodies: Record<string, string> = {
  'stroke-rounded': "<path d=\"M12 2a10 10 0 1 1 -10 10h10z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'stroke-sharp': "<path d=\"M12 2a10 10 0 1 1 -10 10h10z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"2.0\" opacity=\"1.0\"/>",
  'stroke-standard': "<path d=\"M12 2a10 10 0 1 1 -10 10h10z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'solid-rounded': "<path d=\"M11.25 11.25L2 11.25L1.78 11.28L1.65 11.34L1.42 11.52L1.31 11.71L1.25 12L1.45 14.02L2.07 16.11L3.06 17.97L4.40 19.60L6.03 20.94L7.89 21.93L9.90 22.54L12 22.75L14.10 22.54L16.11 21.93L17.97 20.94L19.60 19.60L20.94 17.97L21.93 16.11L22.54 14.10L22.75 12L22.54 9.90L21.93 7.89L20.94 6.03L19.60 4.40L17.97 3.06L16.11 2.07L14.02 1.45L12 1.25L11.71 1.31L11.52 1.42L11.34 1.65L11.28 1.78L11.25 2Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-sharp': "<path d=\"M11.25 1.17L11.25 11.25L1.17 11.25L1.45 14.10L2.06 16.12L3.06 17.97L4.40 19.60L6.03 20.94L7.88 21.94L9.90 22.55L12 22.75L14.10 22.55L16.12 21.94L17.97 20.94L19.60 19.60L20.94 17.97L21.94 16.12L22.55 14.10L22.75 12L22.55 9.90L21.94 7.88L20.94 6.03L19.60 4.40L17.97 3.06L16.12 2.06L14.10 1.45Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'solid-standard': "<path d=\"M11.25 11.25L2 11.25L1.78 11.28L1.65 11.34L1.42 11.52L1.31 11.71L1.25 12L1.45 14.02L2.07 16.11L3.06 17.97L4.40 19.60L6.03 20.94L7.89 21.93L9.90 22.54L12 22.75L14.10 22.54L16.11 21.93L17.97 20.94L19.60 19.60L20.94 17.97L21.93 16.11L22.54 14.10L22.75 12L22.54 9.90L21.93 7.89L20.94 6.03L19.60 4.40L17.97 3.06L16.11 2.07L14.02 1.45L12 1.25L11.71 1.31L11.52 1.42L11.34 1.65L11.28 1.78L11.25 2Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
  'duotone-rounded': "<path d=\"M12 2a10 10 0 1 1 -10 10h10zz\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M12 2a10 10 0 1 1 -10 10h10z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'duotone-standard': "<path d=\"M12 2a10 10 0 1 1 -10 10h10zz\" fill=\"currentColor\" opacity=\"0.25\"/>\n  <path d=\"M12 2a10 10 0 1 1 -10 10h10z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"square\" stroke-linejoin=\"round\" opacity=\"1.0\"/>",
  'twotone-rounded': "<path d=\"M12 2a10 10 0 1 1 -10 10h10z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.4\"/>",
  'bulk-rounded': "<path d=\"M12 2a10 10 0 1 1 -10 10h10zz\" fill=\"currentColor\" opacity=\"1.0\"/>",
};

export const PieChart = React.forwardRef<SVGSVGElement, VeraIconProps>(
  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color}
         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />
  )
);
PieChart.displayName = 'PieChart';
