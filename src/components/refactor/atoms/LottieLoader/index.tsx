import { LottieContainer } from './style';
import { LottieProps } from './types';
import { useLottie } from './useLottie';

const LottieLoader = ({
  width = '100%',
  height = '100%',
  options,
  deg = 0,
  playState,
  setSpeed = 1,
}: LottieProps) => {
  const lottieContainer = useLottie({ options, playState, setSpeed });

  return (
    <LottieContainer
      ref={lottieContainer}
      width={width}
      height={height}
      deg={deg}
    ></LottieContainer>
  );
};
export default LottieLoader;
