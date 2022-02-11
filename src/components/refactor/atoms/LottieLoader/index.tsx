import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { LottieContainer } from './style';
import { LottieProps } from './types';

const LottieLoader = ({ width = '100%', height = '100%', options, deg = 0 }: LottieProps) => {
  const lottieContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (lottieContainer.current) {
      lottie.loadAnimation({
        container: lottieContainer.current,
        ...options,
      });
    }
  }, []);
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
