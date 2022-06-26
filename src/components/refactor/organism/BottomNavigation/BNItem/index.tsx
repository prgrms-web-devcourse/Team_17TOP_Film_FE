import { Li, StyledLink } from './style';
import * as icons from '@assets/icons';
import { Icon } from '@refactors/atoms';
import { VALID_BNITEM } from '../constants';
import { findDeviceType } from './findDeviceType';

interface Props {
  text?: string;
  icon?: keyof typeof icons;
  href: string;
  iconSize?: number;
  direction?: 'column';

  [x: string]: any;
}
const BNItem = ({ text, icon, href, iconSize, direction, ...props }: Props) => {
  const deviceType = findDeviceType();

  return (
    <Li {...props}>
      <StyledLink className={deviceType ? 'mobile' : 'web'} to={href} direction={direction}>
        {icon && <Icon icon={icon} size={iconSize} />}
        {text}
      </StyledLink>
    </Li>
  );
};

BNItem.defaultProps = {
  __TYPE: VALID_BNITEM,
};

export default BNItem;
