import { MiddleSide, Wrapper } from './style';
import LeftSide, { Props as LeftSideInterface } from './components/LeftSide';
import RightSide, { Props as RightSideInterface } from './components/RightSide';
import React from 'react';
interface Props extends LeftSideInterface, RightSideInterface {
  midText?: string;
  bgColor?: string;
  [x: string]: any;
}

const Header = ({
  leftComp,
  handleLeftEvent,
  midText,
  rightComp,
  handleRightEvent,
  bgColor = 'white',
  ...props
}: Props) => {
  return (
    <Wrapper bgColor={bgColor} {...props}>
      <MiddleSide>{midText ? midText : ''}</MiddleSide>
      {leftComp && <LeftSide leftComp={leftComp} handleLeftEvent={handleLeftEvent} />}
      {rightComp && <RightSide rightComp={rightComp} handleRightEvent={handleRightEvent} />}
    </Wrapper>
  );
};
export default Header;
