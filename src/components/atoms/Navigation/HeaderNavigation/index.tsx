import { ReactNode } from 'react';
import { LeftSide, MiddleSide, RightSide, Wrapper, Side } from './style';

export interface Props {
  leftSide?: ReactNode;
  middleSide?: ReactNode;
  rightSide?: ReactNode;
  gap?: number;
  bgColor?: string;
}
const HeaderNavigation = ({ leftSide, rightSide, middleSide, gap, bgColor }: Props) => {
  return (
    <Wrapper bgColor={bgColor}>
      {middleSide && <MiddleSide gap={gap}>{middleSide}</MiddleSide>}
      {(leftSide || rightSide) && (
        <Side>
          {leftSide && <LeftSide gap={gap}>{leftSide}</LeftSide>}
          {rightSide && <RightSide gap={gap}>{rightSide}</RightSide>}
        </Side>
      )}
    </Wrapper>
  );
};
export default HeaderNavigation;
