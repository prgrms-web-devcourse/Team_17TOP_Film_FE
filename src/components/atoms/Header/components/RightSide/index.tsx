import React, { MouseEvent } from 'react';
import { BiTrash, BiLogOut, BiUser } from 'react-icons/bi';
import { Wrapper } from './style';

export interface Props {
  rightComp?: 'logout' | 'delete' | 'mypage';
  handleRightEvent?: (e: MouseEvent<HTMLElement>) => void;
}

const RightSide = ({ rightComp, handleRightEvent }: Props) => {
  switch (rightComp) {
    case 'logout': {
      return (
        <Wrapper onClick={handleRightEvent}>
          <BiLogOut size={24} />
        </Wrapper>
      );
    }
    case 'delete': {
      return (
        <Wrapper onClick={handleRightEvent}>
          <BiTrash size={24} />
        </Wrapper>
      );
    }
    case 'mypage': {
      return (
        <Wrapper onClick={handleRightEvent}>
          <BiUser size={24} />
        </Wrapper>
      );
    }
    default:
      return <></>;
  }
};
export default RightSide;
