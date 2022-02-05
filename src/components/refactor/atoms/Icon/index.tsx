import * as icons from '../../../../assets/icons';
import { IconProps } from './type';
import IconStyle from './style';

const Icon = ({ icon, size = 24, color, ...props }: IconProps) => {
  const SVGIcon = icons[icon];

  return (
    <IconStyle color={color} size={size}>
      <SVGIcon fill={color} size={size} {...props} />
    </IconStyle>
  );
};

export default Icon;
