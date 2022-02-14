import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { LottieContainer } from './style';
import { LottieProps } from './types';

const LottieLoader = ({
  width = '100%',
  height = '100%',
  options,
  deg = 0,
  playState,
  setSpeed = 1,
}: LottieProps) => {
  const lottieContainer = useRef<HTMLDivElement>(null);
  const lottieName = useRef('anim');
  const maxSpeed = useRef(10);
  useEffect(() => {
    if (!lottieContainer.current) return;

    lottie.loadAnimation({
      name: lottieName.current,
      container: lottieContainer.current,
      ...options,
    });
  }, []);

  useEffect(() => {
    if (!lottieContainer.current || !playState) return;

    lottie[playState](lottieName.current);
  }, [playState]);

  useEffect(() => {
    if (!lottieContainer.current) return;
    if (setSpeed > 10) {
      lottie.setSpeed(maxSpeed.current);
      return;
    } else if (setSpeed < -10) {
      lottie.setSpeed(-maxSpeed.current);
      return;
    }
    lottie.setSpeed(setSpeed);
  }, [setSpeed]);
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
