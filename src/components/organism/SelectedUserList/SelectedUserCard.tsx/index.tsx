import { BiX } from 'react-icons/bi';
import { Text } from '../../../atoms';
import { UserInfo } from '../../SearchUser';
import { CardContainer, ContentWrapper, ProfileImg, RemoveBtn } from './style';

interface Props {
  nickname: string;
  profileImageUrl: string;
  removeCard: (selectedUser: UserInfo) => void;
}

const SelectedUserCard = ({ nickname, profileImageUrl, removeCard }: Props) => {
  const handleRemoveClick = () => {
    removeCard({ nickname, profileImageUrl });
  };
  return (
    <CardContainer>
      <RemoveBtn onClick={handleRemoveClick}>
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
