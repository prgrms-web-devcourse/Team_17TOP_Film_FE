import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiX } from 'react-icons/bi';
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
interface Props {
  previewPost: PreviewPost;
}

const PreviewBottomSheet = ({ previewPost }: Props) => {
  useEffect(() => {
    console.log(previewPost);
  }, []);
  return (
    <BottomSheetWrapper>
      <FilmTitle textType="Heading3">{previewPost.title}</FilmTitle>
      <FilmPreviewText textType="Paragraph1">{previewPost.previewText}</FilmPreviewText>
      <FilmInfoWrapper>
        <Text textType="Heading4">
          {previewPost.state === 'CLOSED' ? '사진 나오는 날' : '사진 나온 날'}
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
      {/* TODO: 추후에 작성자만 삭제할 수 있는 로직 추가 */}
      {previewPost.state === 'CLOSED' && (
        <Button buttonType="SecondaryBtn" width="100%">
          필름 삭제하기
        </Button>
      )}
      {previewPost.state === 'OPENABLE' && (
        <Button buttonType="PrimaryBtn" width="100%">
          사진 찾기
        </Button>
      )}
      {previewPost.state === 'OPENED' && (
        <Button buttonType="PrimaryBtn" width="100%">
          사진 보기
        </Button>
      )}
      <CloseBtn>
        <Link to="/">
          <BiX size={24} />
        </Link>
      </CloseBtn>
    </BottomSheetWrapper>
  );
};
export default React.memo(PreviewBottomSheet);
