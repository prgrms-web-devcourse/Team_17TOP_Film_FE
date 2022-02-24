import React, { ReactChild, ReactElement, ReactNode, useMemo } from 'react';
import { filterReactNode } from './utils/filterChildren';
import { VALID_BNITEM } from './constants';
import { Container, Wrapper } from './style';
import { useIsTabActive } from './utils/useTabActive';
interface Props {
  children?: ReactNode;
  bgColor?: string;
  divider?: boolean;
  direction?: 'column';
  dividerColor?: string;
  activeColor?: string;
}
const BottomNavigation = ({
  children,
  bgColor = 'white',
  divider,
  dividerColor,
  direction,
  activeColor = 'white',
  ...props
}: Props) => {
  const validChildren = React.Children.toArray(children).filter((element) =>
    filterReactNode(element, VALID_BNITEM),
  );

  const [isTabActive, setTabActive] = useIsTabActive(validChildren as ReactChild[]);
  const newChildren = validChildren.map((element, idx, elements) => {
    const item = element as ReactElement;
    return React.cloneElement(item, {
      ...item.props,
      className: idx === isTabActive ? 'active' : 'nonactive',
      direction: direction ? 'column' : null,
      onClick: () => {
        item.props.handleClick && item.props.handleClick();
        setTabActive(idx);
      },
    });
  });

  return (
    <Wrapper bgColor={bgColor} {...props}>
      <Container divider={divider} dividerColor={dividerColor} activeColor={activeColor}>
        {newChildren}
      </Container>
    </Wrapper>
  );
};
export default BottomNavigation;
