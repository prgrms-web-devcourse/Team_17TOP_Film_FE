import lottie from 'lottie-web';
import { RefObject, useEffect, useRef } from 'react';
import { LOTTIE_MAX_SPEED, LOTTIE_NAME } from '../../atoms/LottieLoader/constants';
import { UseLottieProps } from './types';

export const useLottie = ({
  options,
  playState,
  setSpeed,
}: UseLottieProps): RefObject<HTMLDivElement> => {
  const lottieContainer = useRef<HTMLDivElement>(null);
  const lottieName = useRef(LOTTIE_NAME);
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

    lottie[playState](LOTTIE_NAME);
  }, [playState]);

  useEffect(() => {
    if (!lottieContainer.current || !setSpeed) return;
    if (setSpeed > 10) {
      lottie.setSpeed(LOTTIE_MAX_SPEED);
      return;
    } else if (setSpeed < -10) {
      lottie.setSpeed(-LOTTIE_MAX_SPEED);
      return;
    }
    lottie.setSpeed(setSpeed);
  }, [setSpeed]);

  return lottieContainer;
};
