import { AnimationConfigWithData, AnimationConfigWithPath } from 'lottie-web';

export interface UseLottieProps {
  options:
    | Omit<AnimationConfigWithPath, 'container' | 'name'>
    | Omit<AnimationConfigWithData, 'container' | 'name'>;
  playState?: PlayState;
  setSpeed?: number;
}

export type PlayState = 'play' | 'stop' | 'pause';
