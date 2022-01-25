import { SVGProps } from 'react';
import * as icons from '../../../../assets/icons';

type IconType = keyof typeof icons;

export interface IconProps extends SVGProps<SVGSVGElement> {
  icon: IconType;
  size?: string | number;
  color?: string;
}
