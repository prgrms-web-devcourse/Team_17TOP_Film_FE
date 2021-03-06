import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@refactors/atoms';
import { Avatar, Button, Text } from '../../atoms';
import {
  BottomSheetWrapper,
  FilmTitle,
  FilmPreviewText,
  FilmInfoWrapper,
  FilmOpenDate,
  AuthorityList,
  CloseBtn,
} from './style';
import { PreviewPost } from '../../../utils/apis/post/type';
import ProfileImg from '../../../assets/images/img_profile.svg';
import { useUserInfo } from '../../../contexts/UserProvider';
interface Props {
  previewPost: PreviewPost;
  postViewEvent: () => void;
  postDeleteEvent: () => void;
}

const PreviewBottomSheet = ({ previewPost, postViewEvent, postDeleteEvent }: Props) => {
  const { userInfo } = useUserInfo();

  return (
    <BottomSheetWrapper>
      <FilmTitle textType="Heading3">{previewPost.title}</FilmTitle>
      <FilmPreviewText textType="Paragraph1">{previewPost.previewText}</FilmPreviewText>
      <FilmInfoWrapper>
        <Text textType="Heading4">
          {previewPost.state === 'CLOSED' ? '필름 나오는 날' : '필름 나온 날'}
        </Text>
        <FilmOpenDate textType="Paragraph2">
          {previewPost.availableAt.replace(/-/gi, '.')}
        </FilmOpenDate>
        <AuthorityList>
          <Avatar.Group overlapPx={8}>
            {previewPost.authorityImageList.map((user) => (
              <Avatar
                key={user.authorityId}
                src={user.imageUrl ? user.imageUrl : ProfileImg}
                size={36}
                alt="profile"
              />
            ))}
          </Avatar.Group>
        </AuthorityList>
      </FilmInfoWrapper>
      {previewPost.state === 'CLOSED' && userInfo.nickname === previewPost.authorNickname && (
        <Button buttonType="SecondaryBtn" width="100%" onClick={postDeleteEvent}>
          필름 삭제하기
        </Button>
      )}
      {previewPost.state === 'CLOSED' && userInfo.nickname !== previewPost.authorNickname && (
        <Button buttonType="SecondaryBtn" width="100%">
          필름 나오는중...
        </Button>
      )}
      {previewPost.state === 'OPENABLE' && (
        <Button buttonType="PrimaryBtn" width="100%" onClick={postViewEvent}>
          필름 찾기
        </Button>
      )}
      {previewPost.state === 'OPENED' && (
        <Button buttonType="PrimaryBtn" width="100%" onClick={postViewEvent}>
          필름 보기
        </Button>
      )}
      <CloseBtn>
        <Link to="/">
          <Icon icon="BiX" size={24} />
        </Link>
      </CloseBtn>
    </BottomSheetWrapper>
  );
};
export default React.memo(PreviewBottomSheet);
