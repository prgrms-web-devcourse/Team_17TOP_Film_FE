import React, { MouseEvent } from 'react';
import { BiLogOut, BiTrash, BiUser } from 'react-icons/bi';
import { Text } from '../../..';
import { Wrapper } from './style';
export interface Props {
  rightComp?: 'timeline' | 'logout' | 'delete' | 'mypage';
  handleRightEvent?: (e: MouseEvent<HTMLElement>) => void;
}

const RightSide = ({ rightComp, handleRightEvent }: Props) => {
  return (
    <Wrapper onClick={handleRightEvent}>
      {rightComp === 'timeline' && <Text textType="Paragraph2">타임라인</Text>}
      {rightComp === 'logout' && <BiLogOut size={24} />}
      {rightComp === 'delete' && <BiTrash size={24} />}
      {rightComp === 'mypage' && <BiUser size={24} />}
    </Wrapper>
  );
};
export default RightSide;
