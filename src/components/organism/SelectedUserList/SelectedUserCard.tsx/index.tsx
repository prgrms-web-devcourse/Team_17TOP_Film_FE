import { BiX } from 'react-icons/bi';
import { Text } from '../../../atoms';
import { UserInfo } from '../../SearchUser';
import { CardContainer, ContentWrapper, ProfileImg, RemoveBtn } from './style';

const SelectedUserCard = ({ nickname, profileImageUrl }: UserInfo) => {
  return (
    <CardContainer>
      <RemoveBtn onClick={() => console.log('빼기')}>
        <BiX size={24}></BiX>
      </RemoveBtn>
      <ContentWrapper>
        <ProfileImg
          src={profileImageUrl}
          alt={`${nickname} ProfileImage`}
          placeholder=""
          width={36}
          height={36}
        ></ProfileImg>
        <Text textType="Paragraph1">{nickname}</Text>
      </ContentWrapper>
    </CardContainer>
  );
};
export default SelectedUserCard;
