import { Avatar, Text } from '../../../../components/atoms';
import { Nickname, Wrapper } from './style';
import ProfileImg from '../../../../assets/ProfileImg.png';
const Profile = () => {
  return (
    <Wrapper>
      <Avatar size={60} src={ProfileImg} alt="프로필 이미지" />
      <div>
        <Nickname textType="Heading4">닉네임</Nickname>
        <Text textType="Heading4">bsybear623@gmail.com</Text>
      </div>
    </Wrapper>
  );
};
export default Profile;
