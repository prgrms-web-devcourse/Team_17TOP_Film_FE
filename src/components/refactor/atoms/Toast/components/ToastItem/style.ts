import styled from '@emotion/styled';
import { Icon } from '@refactors/atoms';

const Container = styled.div`
  position: relative;
  height: inherit;
  word-break: keep-all;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  opacity: 1;
  border-radius: 4px;
  transition: opacity 0.4s ease-out;
  padding: 20px;
  &:not(:first-of-type) {
    margin-bottom: 8px;
  }
  &:last-of-type {
    animation: move 0.4s ease-out forwards;
  }
  @keyframes move {
    0% {
      transform: translateY(-50%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Content = styled.h1`
  max-width: calc(100% - 56px);
  font-size: '1rem';
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  word-break: keep-all;
`;
const ProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: rgba(0, 0, 0, 30%);
  animation-name: progress;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  @keyframes progress {
    0% {
      width: 100%;
    }
    100% {
      width: 0%;
    }
  }
`;

const CloseBtn = styled(Icon)`
  position: absolute;
  right: 20px;
`;
export { Container, Content, ProgressBar, Body, CloseBtn };
