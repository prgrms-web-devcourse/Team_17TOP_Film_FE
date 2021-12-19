import Lottie from 'react-lottie';
import loader from '../../../assets/lotties/loader.json';
import styled from '@emotion/styled';

const Loader = () => {
  return (
    <LottieWrapper>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: loader,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
        height={400}
        width={400}
        // isStopped={}
      />
    </LottieWrapper>
  );
};

export default Loader;

const LottieWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: 1000;
  background: #000;
`;
