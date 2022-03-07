import { UseLottieProps } from '@refactors/hooks/useLottie/types';

export interface LottieProps extends UseLottieProps {
  width?: string | number;
  height?: string | number;
  deg?: number;
}
