import Lottie from 'react-lottie';
import fireworks from '../../../assets/lotties/fireworks.json';
import { TextWrapper, Wrapper } from './style';

interface Props {
  text: string;
}

const FireworkEffect = ({ text }: Props) => {
  return (
    <Wrapper>
      <TextWrapper textType="Heading3">{text}</TextWrapper>
      <Lottie options={{ loop: true, autoplay: true, animationData: fireworks }} />
    </Wrapper>
  );
};

export default FireworkEffect;
