import React, { ReactElement, ReactNode } from 'react';
import { VALID_BNITEM } from './constants';
import { Container, Wrapper } from './style';
interface Props {
  children?: ReactNode;
  bgColor?: string;
  divider?: boolean;
  direction?: 'column';
  dividerColor?: string;
  itemHoverColor?: string;
}
const BottomNavigation = ({
  children,
  bgColor = 'white',
  divider,
  dividerColor,
  direction,
  itemHoverColor,
  ...props
}: Props) => {
  const calcStyle = (idx: number, elementsLen: number) => {
    const style: { borderRight: string } = {
      borderRight: 'none',
    };
    if (divider && idx !== elementsLen - 1) {
      style.borderRight = !dividerColor ? '1px solid lightgray' : `1px solid ${dividerColor}`;
    }
    return style;
  };
  const navLists = React.Children.toArray(children)
    .filter((element: ReactNode) => {
      if (React.isValidElement(element) && element.props.__TYPE === VALID_BNITEM) {
        return true;
      }
      console.warn('BNItem 컴포넌트만 올 수 있습니다~');
      return false;
    })
    .map((element, idx, elements) => {
      const item = element as ReactElement;
      return React.cloneElement(item, {
        ...item.props,
        direction: direction ? 'column' : null,
        itemHoverColor: itemHoverColor ? itemHoverColor : 'white',
        style: {
          ...calcStyle(idx, elements.length),
        },
      });
    });

  return (
    <Wrapper bgColor={bgColor} {...props}>
      <Container>{navLists}</Container>
    </Wrapper>
  );
};
export default BottomNavigation;
