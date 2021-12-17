import React, { MouseEvent } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { Wrapper } from './style';

export interface Props {
  leftComp?: 'backBtn';
  handleLeftEvent?: (e: MouseEvent<HTMLElement>) => void;
}

const LeftSide = ({ leftComp, handleLeftEvent }: Props) => {
  switch (leftComp) {
    case 'backBtn': {
      return (
        <Wrapper onClick={handleLeftEvent}>
          <BiChevronLeft size={24} />
        </Wrapper>
      );
    }
    default:
      return <></>;
  }
};
export default LeftSide;
