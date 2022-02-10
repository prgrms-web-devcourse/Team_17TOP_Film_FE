import { LottieLoader } from '@refactors/organism';
import fireworks from '@assets/lotties/fireworks.json';
import loader from '@assets/lotties/loader.json';

export default {
  title: 'Example/LottieLoader',
  component: LottieLoader,
};

export const Loading = (args: any) => {
  return (
    <div style={{ width: '500px', height: '450px', background: 'gray' }}>
      <LottieLoader
        width={500}
        height={450}
        options={{ loop: true, animationData: loader, autoplay: true }}
        {...args}
      ></LottieLoader>
    </div>
  );
};

export const fireWorkEffect = (args: any) => {
  return (
    <LottieLoader
      width={500}
      height={450}
      options={{ loop: true, animationData: fireworks, autoplay: true }}
      {...args}
    ></LottieLoader>
  );
};
