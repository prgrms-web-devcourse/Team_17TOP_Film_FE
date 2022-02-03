import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { LottieContainer } from './style';
import { LottieProps } from './types';

const LottieLoader = ({
  width,
  height,
  animationData,
  loop = false,
  autoplay = false,
  preserveAspectRatio,
}: LottieProps) => {
  const lottieContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (lottieContainer.current) {
      lottie.loadAnimation({
        container: lottieContainer.current,
        loop,
        autoplay,
        animationData,
        rendererSettings: {
          preserveAspectRatio,
        },
      });
    }
  }, []);
  return <LottieContainer ref={lottieContainer} width={width} height={height}></LottieContainer>;
};
export default LottieLoader;
