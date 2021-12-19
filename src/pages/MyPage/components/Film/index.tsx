import { Text, Avatar } from '../../../../components/atoms';
import { Pin } from '../../../../components/organism';
import {
  FilmBtn,
  FilmSmallText,
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
}

const Film = ({ title, preview, registerDay, avatarList, btnText }: Props) => {
  const buttonType =
    btnText === '필름 보기' || btnText === '필름 찾기' ? 'PrimaryBtn' : 'SecondaryBtn';
  return (
    <Wrapper>
      <Title>
        <Text textType="Heading4">{title}</Text>
        <Pin
          style={{ width: '32px', height: '32px', top: '10px', right: '0px' }}
          selected={true}
          state="open"
        />
      </Title>
      <Preview textType="Paragraph2">{preview}</Preview>
      <MidContainer>
        <MidContainerLeft>
          <FilmText textType="Paragraph1">사진 나오는 날</FilmText>
          <FilmSmallText textType="SmallText">{registerDay}</FilmSmallText>
        </MidContainerLeft>
        <Avatar.Group overlapPx={10}>
          {avatarList.map(({ src, alt }) => (
            <Avatar key={src} size={30} src={src} alt={alt} />
          ))}
        </Avatar.Group>
      </MidContainer>
      <FilmBtn buttonType={buttonType}>{btnText}</FilmBtn>
    </Wrapper>
  );
};
export default Film;
