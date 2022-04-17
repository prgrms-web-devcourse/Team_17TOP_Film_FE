import * as icons from '../../../../assets/icons';
import { IconProps } from './type';
import IconStyle from './style';

const Icon = ({ icon, size = '1em', color, ...props }: IconProps) => {
  const SVGIcon = icons[icon];

  return (
    <IconStyle size={size}>
      <SVGIcon color={color} size={size} {...props} />
    </IconStyle>
  );
};

export default Icon;
