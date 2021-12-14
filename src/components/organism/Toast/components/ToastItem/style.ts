import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 50px;
  align-items: center;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  opacity: 1;
  border-radius: 4px;
  transition: opacity 0.4s ease-out;
  padding: 0 20px;
  &:not(:first-of-type) {
    margin-top: 8px;
  }
  &:first-of-type {
    animation: move 0.4s ease-out forwards;
  }
  @keyframes move {
    0% {
      margin-top: 8px;
    }
  }
`;

const Content = styled.h1`
  font-size: '1rem';
  font-weight: 400;
  line-height: 1.4;
`;
export { Container, Content };
