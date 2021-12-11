import { Link } from 'react-router-dom';
import { BiX } from 'react-icons/bi';
import { Button, Text } from '../../atoms';
import {
  BottomSheetWrapper,
  FilmTitle,
  FilmPreviewText,
  DateWrapper,
  FilmOpenDate,
  CloseBtn,
} from './style';
interface PreviewPost {
  postId: number;
  title: string;
  previewText: string;
  availableAt: string;
  state: string;
  location: {
    latitude: string;
    longitude: string;
  };
  authorityCount: number;
  authorityImageList: {
    imageOrder: number;
    authorityId: number;
    imageUrl: string;
  }[];
}
interface Props {
  previewPost: PreviewPost;
}

const PreviewBottomSheet = ({ previewPost }: Props) => {
  console.log(previewPost);

  return (
    <BottomSheetWrapper>
      <FilmTitle textType="Heading3">{previewPost.title}</FilmTitle>
      <FilmPreviewText textType="Paragraph1">
        #{previewPost.postId}필름의 {previewPost.previewText}
      </FilmPreviewText>
      <DateWrapper>
        <Text textType="Heading4">
          {previewPost.state === 'Closed' ? '사진 나오는 날' : '사진 나온 날'}
        </Text>
        <FilmOpenDate textType="Paragraph2">{previewPost.availableAt}</FilmOpenDate>
      </DateWrapper>
      {previewPost.state === 'Closed' ? (
        <Button buttonType="PrimaryBtn" width="100%">
          필름 삭제하기
        </Button>
      ) : (
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
export default PreviewBottomSheet;
