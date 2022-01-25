import { SVGProps } from 'react';
import * as icons from '../../../../assets/icons';

type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as any[];

export interface IconProps extends SVGProps<SVGSVGElement> {
  icon: IconType;
  size?: string | number;
  color?: string;
}
