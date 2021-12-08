import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import FooterNavigation from './FooterNavigation';
import { Props as HeaderNavProps } from './HeaderNavigation';

interface Props extends HeaderNavProps {
  navType: 'header' | 'footer';
}
const Navigation = ({ navType, leftSide, rightSide, middleSide }: Props) => {
  const isHeader = navType == 'header';
  return (
    <>
      {isHeader && (
        <HeaderNavigation
          leftSide={leftSide}
          middleSide={middleSide}
          rightSide={rightSide}
          gap={20}
        />
      )}
      {!isHeader && <FooterNavigation />}
    </>
  );
};
export default Navigation;
