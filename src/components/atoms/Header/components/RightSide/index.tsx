import React, { MouseEvent } from 'react';
import { BsLockFill } from 'react-icons/bs';
import { Wrapper } from './style';

export interface Props {
  rightComp?: 'lock';
  handleRightEvent?: (e: MouseEvent<HTMLElement>) => void;
}

const RightSide = ({ rightComp, handleRightEvent }: Props) => {
  switch (rightComp) {
    case 'lock': {
      return (
        <Wrapper onClick={handleRightEvent}>
          <BsLockFill />
        </Wrapper>
      );
    }
    default:
      return <></>;
  }
};
export default RightSide;
