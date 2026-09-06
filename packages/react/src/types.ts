// Généré par tools/build_packages.py, ne pas modifier à la main.
import type { SVGProps } from 'react';
export type VeraIconVariant =
  | 'stroke-rounded'
  | 'stroke-sharp'
  | 'stroke-standard'
  | 'solid-rounded'
  | 'solid-sharp'
  | 'solid-standard'
  | 'duotone-rounded'
  | 'duotone-standard'
  | 'twotone-rounded'
  | 'bulk-rounded'
;
export interface VeraIconProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
  variant?: VeraIconVariant;
  size?: number | string;
  color?: string;
}
