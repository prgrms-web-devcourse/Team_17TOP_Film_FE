import React, { MouseEvent } from 'react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
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
          <MdOutlineKeyboardArrowLeft />
        </Wrapper>
      );
    }
    default:
      return <></>;
  }
};
export default LeftSide;
