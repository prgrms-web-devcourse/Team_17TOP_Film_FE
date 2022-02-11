import { LottieLoader } from '@refactors/atoms';
import fireworks from '@assets/lotties/fireworks.json';
import loader from '@assets/lotties/loader.json';
import { useState } from 'react';
import styled from '@emotion/styled';
import { PlayState } from '@refactors/atoms/LottieLoader/types';

export default {
  title: 'Example/LottieLoader',
  component: LottieLoader,
  argTypes: {
    playState: {
      options: ['play', 'stop', 'pause'],
      control: { type: 'radio' },
    },
  },
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

export const PlayControl = () => {
  const [playState, setPlayState] = useState<PlayState>();
  return (
    <Wrapper>
      <LottieLoader
        width={400}
        height={400}
        options={{ loop: true, animationData: fireworks }}
        playState={playState}
      />
      <ControlBtn
        onClick={() => {
          setPlayState('play');
        }}
      >
        Play
      </ControlBtn>
      <ControlBtn
        onClick={() => {
          setPlayState('stop');
        }}
      >
        Stop
      </ControlBtn>
      <ControlBtn
        onClick={() => {
          setPlayState('pause');
        }}
      >
        Pause
      </ControlBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 400px;
`;

const ControlBtn = styled.button`
  border: 1px solid;
  cursor: pointer;
  :hover {
    color: white;
    background-color: gray;
  }
  :active {
    background-color: orange;
  }
`;
