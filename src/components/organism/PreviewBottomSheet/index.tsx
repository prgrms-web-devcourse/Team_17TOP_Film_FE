import { useParams, Link } from 'react-router-dom';
import { Button, Text } from '../../atoms';
import {
  BottomSheetWrapper,
  FilmTitle,
  FilmPreviewText,
  DateWrapper,
  FilmOpenDate,
  CloseBtn,
} from './style';

const dummyPost = {
  postId: 0,
  title: '제목입니당',
  previewText: '엿보기 문구입니당',
  availableAt: 'yyyy-MM-dd',
  state: 'Closed',
  location: [
    {
      latitude: '37.491837217869616',
      longitude: '127.02959879978368',
    },
  ],
  authorityCount: 3,
  authorityImageList: [
    {
      imageOrder: 0,
      authorityId: 0,
      imageUrl: '',
    },
    {
      imageOrder: 0,
      authorityId: 0,
      imageUrl: '',
    },
  ],
};
const PreviewBottomSheet = () => {
  const { id } = useParams();
  return (
    <BottomSheetWrapper>
      <FilmTitle textType="Heading3">{dummyPost.title}</FilmTitle>
      <FilmPreviewText textType="Paragraph1">
        #{id}필름의 {dummyPost.previewText}
      </FilmPreviewText>
      <DateWrapper>
        <Text textType="Heading4">사진 나오는 날</Text>
        <FilmOpenDate textType="Paragraph2">{dummyPost.availableAt}</FilmOpenDate>
      </DateWrapper>
      <Button buttonType="PrimaryBtn" width="100%">
        필름 삭제하기
      </Button>
      <CloseBtn>
        <Link to="/">닫기</Link>
      </CloseBtn>
    </BottomSheetWrapper>
  );
};
export default PreviewBottomSheet;
