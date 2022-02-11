import { Li, StyledLink } from './style';
import * as icons from '@assets/icons';
import { Icon } from '@refactors/atoms';
import { VALID_BNITEM } from '../constants';
import { isMobile } from './utils';

interface Props {
  text?: string;
  icon?: keyof typeof icons;
  href: string;
  iconSize?: number;
  direction?: 'column';
  itemHoverColor?: string;
  [x: string]: any;
}
const BNItem = ({
  text,
  icon,
  href,
  iconSize,
  direction,
  itemHoverColor = 'white',
  ...props
}: Props) => {
  const test = isMobile();
  return (
    <Li itemHoverColor={itemHoverColor} {...props}>
      <StyledLink className={test ? 'mobile' : 'web'} to={href} direction={direction}>
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
