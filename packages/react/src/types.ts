import type { SVGProps } from 'react';
export type VeraIconVariant =
  | 'stroke-rounded' | 'stroke-sharp' | 'stroke-standard'
  | 'solid-rounded' | 'solid-sharp' | 'solid-standard'
  | 'duotone-rounded' | 'twotone-rounded' | 'bulk-rounded';
export interface VeraIconProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
  variant?: VeraIconVariant;
  size?: number | string;
  color?: string;
}
