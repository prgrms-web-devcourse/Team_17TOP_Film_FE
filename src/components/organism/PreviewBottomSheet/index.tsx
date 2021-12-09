import { useParams, Link, useLocation } from 'react-router-dom';
import { Button, Text } from '../../atoms';
import {
  BottomSheetWrapper,
  FilmTitle,
  FilmPreviewText,
  DateWrapper,
  FilmOpenDate,
  CloseBtn,
} from './style';

const PreviewBottomSheet = () => {
  const { id } = useParams();
  const { state } = useLocation();
  return (
    <BottomSheetWrapper>
      <FilmTitle textType="Heading3">{state.title}</FilmTitle>
      <FilmPreviewText textType="Paragraph1">
        #{id}필름의 {state.previewText}
      </FilmPreviewText>
      <DateWrapper>
        <Text textType="Heading4">사진 나오는 날</Text>
        <FilmOpenDate textType="Paragraph2">{state.availableAt}</FilmOpenDate>
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
