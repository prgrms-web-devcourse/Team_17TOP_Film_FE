import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { LottieContainer } from './style';
import { LottieProps } from './types';

const LottieLoader = ({ width, height, options }: LottieProps) => {
  const lottieContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (lottieContainer.current) {
      lottie.loadAnimation({
        container: lottieContainer.current,
        ...options,
      });
    }
  }, []);
  return <LottieContainer ref={lottieContainer} width={width} height={height}></LottieContainer>;
};
export default LottieLoader;
