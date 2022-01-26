import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: fixed;
  top: 32px;
  left: 20px;
  width: calc(100% - 40px);
  z-index: 1500;
`;

export { Container };
