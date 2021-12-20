import React, { MouseEvent } from 'react';
import { BiLogOut, BiTrash } from 'react-icons/bi';
import { Avatar, Text } from '../../..';
import { Wrapper } from './style';
import ProfileImg from '../../../../../assets/images/img_profile.svg';
import { useUserInfo } from '../../../../../contexts/UserProvider';
export interface Props {
  rightComp?: 'timeline' | 'logout' | 'delete' | 'mypage';
  handleRightEvent?: (e: MouseEvent<HTMLElement>) => void;
}

const RightSide = ({ rightComp, handleRightEvent }: Props) => {
  const { userInfo } = useUserInfo();
  return (
    <Wrapper onClick={handleRightEvent}>
      {rightComp === 'timeline' && <Text textType="Paragraph2">타임라인</Text>}
      {rightComp === 'logout' && <BiLogOut size={24} />}
      {rightComp === 'delete' && <BiTrash size={24} />}
      {rightComp === 'mypage' && (
        <Avatar
          src={userInfo.profileImageUrl ? userInfo.profileImageUrl : ProfileImg}
          size={26}
          alt="profile"
        />
      )}
    </Wrapper>
  );
};
export default RightSide;
