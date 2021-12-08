import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import FooterNavigation from './FooterNavigation';
import { Props as HeaderNavProps } from './HeaderNavigation';
import { Props as FooterNavProps } from './FooterNavigation';
interface Props extends HeaderNavProps, FooterNavProps {
  navType: 'header' | 'footer';
}
const Navigation = ({ navType, leftSide, rightSide, middleSide, contents, bgColor }: Props) => {
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
      {!isHeader && <FooterNavigation contents={contents} bgColor={bgColor} />}
    </>
  );
};
export default Navigation;
