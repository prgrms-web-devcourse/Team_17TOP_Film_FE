import { Avatar, Text } from '../../../../components/atoms';
import { Nickname, Wrapper } from './style';
import ProfileImg from '../../../../assets/images/img_profile.svg';
interface Props {
  nickname: string;
  postsLength: number;
  profileImageUrl: string;
}
const Profile = ({ nickname, postsLength, profileImageUrl }: Props) => {
  return (
    <Wrapper>
      <Avatar size={60} src={profileImageUrl ? profileImageUrl : ProfileImg} alt="프로필 이미지" />
      <div>
        <Nickname textType="Heading4">{nickname}</Nickname>
        <Text textType="Heading4">{postsLength}개의 필름📸과 함께 하는중</Text>
      </div>
    </Wrapper>
  );
};
export default Profile;
