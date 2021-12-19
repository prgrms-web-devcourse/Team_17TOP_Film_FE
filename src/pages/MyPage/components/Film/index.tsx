import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text, Avatar } from '../../../../components/atoms';
import { Pin } from '../../../../components/organism';
import ConfirmModal from '../../../HomePage/Modal';
import { buttonText } from '../../constants';
import {
  FilmBtn,
  FilmText,
  MidContainer,
  MidContainerLeft,
  Preview,
  Title,
  Wrapper,
} from './style';

interface Props {
  title: string;
  preview: string;
  registerDay: string;
  avatarList: { src: string; alt: string }[];
  btnText: string;
  postId: number;
  deletePost: (deletePostId: number) => void;
}

const Film = ({ title, preview, registerDay, avatarList, btnText, postId, deletePost }: Props) => {
  const navigate = useNavigate();
  const [postDeleteModalVisible, setPostDeleteModalVisible] = useState(false);

  const buttonType =
    btnText === buttonText.WATCH_FILM || btnText === buttonText.FIND_FILM
      ? 'PrimaryBtn'
      : 'SecondaryBtn';

  const handleBtnClick = () => {
    if (btnText === buttonText.WATCH_FILM || btnText === buttonText.FIND_FILM) {
      navigate(`/post/${postId}`);
      return;
    }
    if (btnText === buttonText.REMOVE_FILM) {
      setPostDeleteModalVisible(true);
    }
  };

  const handlePinClick = () => {
    navigate(`/${postId}`);
  };

  const parseRegisterDay = () => {
    return registerDay.replace(/-/gi, '.');
  };

  return (
    <Wrapper>
      <Title>
        <Text textType="Heading4">{title}</Text>
        <Pin
          style={{ width: '32px', height: '32px', top: '10px', right: '0px', cursor: 'pointer' }}
          selected={true}
          state="open"
          onClick={handlePinClick}
        />
      </Title>
      <Preview textType="Paragraph2">{preview}</Preview>
      <MidContainer>
        <MidContainerLeft>
          <FilmText textType="Paragraph1">필름 나오는 날</FilmText>
          <Text textType="SmallText">{parseRegisterDay()}</Text>
        </MidContainerLeft>
        <Avatar.Group overlapPx={10}>
          {avatarList.map(({ src, alt }) => (
            <Avatar key={alt} size={30} src={src} alt={alt} />
          ))}
        </Avatar.Group>
      </MidContainer>
      <FilmBtn buttonType={buttonType} onClick={handleBtnClick}>
        {btnText}
      </FilmBtn>
      <ConfirmModal
        modalVisible={postDeleteModalVisible}
        modalText={`정말 필름을 삭제하시겠어요?`}
        primaryBtnText={`네..ㅜㅜ`}
        secondaryBtnText={`잠시만요!`}
        handleClose={() => setPostDeleteModalVisible(false)}
        primaryBtnEvent={() => deletePost(postId)}
        secondaryBtnEvent={() => setPostDeleteModalVisible(false)}
      />
    </Wrapper>
  );
};
export default Film;
