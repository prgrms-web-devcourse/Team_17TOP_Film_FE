import React, { MouseEvent } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { Wrapper } from './style';

export interface Props {
  leftComp?: 'backBtn';
  handleLeftEvent?: (e: MouseEvent<HTMLElement>) => void;
}

const LeftSide = ({ leftComp, handleLeftEvent }: Props) => {
  return (
    <Wrapper onClick={handleLeftEvent}>
      {leftComp && 'backBtn' && <BiChevronLeft size={24} />}
    </Wrapper>
  );
};
export default LeftSide;
