import React, { MouseEvent } from 'react';
import { Icon } from '@refactors/atoms';
import { Wrapper } from './style';

export interface Props {
  leftComp?: 'backBtn';
  handleLeftEvent?: (e: MouseEvent<HTMLElement>) => void;
}

const LeftSide = ({ leftComp, handleLeftEvent }: Props) => {
  return (
    <Wrapper onClick={handleLeftEvent}>
      {leftComp && 'backBtn' && <Icon icon="BiChevronLeft" size={24} />}
    </Wrapper>
  );
};
export default LeftSide;
