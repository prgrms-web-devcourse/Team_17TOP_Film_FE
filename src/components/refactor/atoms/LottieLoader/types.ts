import { AnimationConfigWithData, AnimationConfigWithPath } from 'lottie-web';

export interface LottieProps {
  width?: string | number;
  height?: string | number;
  options: Omit<AnimationConfigWithPath, 'container'> | Omit<AnimationConfigWithData, 'container'>;
  deg?: number;
  playState?: PlayState;
  setSpeed?: number;
}

export type PlayState = 'play' | 'stop' | 'pause';
