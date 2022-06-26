import { Icon } from '@refactors/atoms';
import { UserInfo } from '../../SearchUser';
import { CardContainer, ContentWrapper, NicknameText, ProfileImg, RemoveBtn } from './style';
import nonProfile from '../../../../assets/images/img_profile.svg';

interface Props {
  id: number;
  nickname: string;
  profileImageUrl: string;
  removeCard: (selectedUser: UserInfo) => void;
}

const SelectedUserCard = ({ id, nickname, profileImageUrl, removeCard }: Props) => {
  const handleRemoveClick = () => {
    removeCard({ nickname, profileImageUrl, id });
  };
  return (
    <CardContainer>
      <RemoveBtn onClick={handleRemoveClick}>
        <Icon icon="BiX" size={24} />
      </RemoveBtn>
      <ContentWrapper>
        <ProfileImg
          src={profileImageUrl ? profileImageUrl : nonProfile}
          alt={`${nickname} ProfileImage`}
          placeholder=""
          width={36}
          height={36}
        ></ProfileImg>
        <NicknameText textType="Paragraph1">{nickname}</NicknameText>
      </ContentWrapper>
    </CardContainer>
  );
};
export default SelectedUserCard;
